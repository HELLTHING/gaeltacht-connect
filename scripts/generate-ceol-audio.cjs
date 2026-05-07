#!/usr/bin/env node
// Generates WAV files for Ceol (Irish music) section
// 22050 Hz mono 16-bit — good quality, ~430 KB per 20s song

const fs = require('fs');
const path = require('path');

const SR = 22050; // sample rate
const BPS = 0.52; // seconds per beat (matches app)

// ── WAV writer ──────────────────────────────────────────────────────────────
function writeWav(filepath, samples) {
  const data = new Int16Array(samples.length);
  for (let i = 0; i < samples.length; i++) {
    data[i] = Math.round(Math.max(-1, Math.min(1, samples[i])) * 32000);
  }
  const buf = Buffer.alloc(44 + data.byteLength);
  buf.write('RIFF', 0);                            buf.writeUInt32LE(36 + data.byteLength, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);                           buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);                        buf.writeUInt16LE(1, 22);   // PCM mono
  buf.writeUInt32LE(SR, 24);                       buf.writeUInt32LE(SR * 2, 28);
  buf.writeUInt16LE(2, 32);                        buf.writeUInt16LE(16, 34);
  buf.write('data', 36);                           buf.writeUInt32LE(data.byteLength, 40);
  Buffer.from(data.buffer).copy(buf, 44);
  fs.writeFileSync(filepath, buf);
  console.log(`  wrote ${filepath} (${(buf.length/1024).toFixed(0)} KB)`);
}

// ── Simple reverb: 4 comb filters ──────────────────────────────────────────
function reverb(samples, wet=0.28) {
  const out = new Float32Array(samples.length);
  const delays = [1557, 1617, 1491, 1422].map(d => Math.round(d * SR / 44100));
  const gains  = [0.84, 0.83, 0.85, 0.87];
  const bufs   = delays.map(d => new Float32Array(d));
  const idxs   = new Int32Array(4);

  for (let i = 0; i < samples.length; i++) {
    let rev = 0;
    for (let k = 0; k < 4; k++) {
      const b = bufs[k], idx = idxs[k];
      const delayed = b[idx];
      b[idx] = samples[i] + delayed * gains[k];
      idxs[k] = (idx + 1) % b.length;
      rev += delayed;
    }
    out[i] = samples[i] + (rev / 4) * wet;
  }
  return out;
}

// ── Harp note ───────────────────────────────────────────────────────────────
// Karplus-Strong inspired: partials with pluck-like fast attack + exp decay
function harpNote(freq, dur, vol=0.55) {
  const totalSamples = Math.round(SR * (dur + 2.5)); // tail for decay
  const buf = new Float32Array(totalSamples);
  const harmonics = [1, 2, 3, 4, 5];
  const amps      = [1.0, 0.55, 0.28, 0.14, 0.07];
  const decays    = [2.2, 3.2, 4.8, 7.0, 10.0]; // faster for higher partials

  for (let i = 0; i < totalSamples; i++) {
    const t = i / SR;
    const attack = Math.min(t / 0.004, 1); // 4ms attack
    let s = 0;
    for (let h = 0; h < harmonics.length; h++) {
      const env = attack * Math.exp(-decays[h] * t);
      // Slight inharmonicity for harp character
      const f = freq * harmonics[h] * (1 + 0.0002 * h * h);
      s += amps[h] * env * Math.sin(2 * Math.PI * f * t);
    }
    buf[i] = s * vol;
  }
  return buf;
}

// ── Tin whistle note ─────────────────────────────────────────────────────────
// Sine + 2nd harmonic + vibrato LFO + breath noise
function whistleNote(freq, dur, vol=0.38) {
  const totalSamples = Math.round(SR * dur);
  const buf = new Float32Array(totalSamples);
  const lfoFreq = 5.5, lfoDepth = 4.5; // Hz deviation
  const attackT = 0.045, releaseT = 0.065;

  let noiseLp = 0; // low-pass state for breath noise
  for (let i = 0; i < totalSamples; i++) {
    const t = i / SR;
    // Envelope
    let env;
    if (t < attackT) env = t / attackT;
    else if (t > dur - releaseT) env = Math.max(0, (dur - t) / releaseT);
    else env = 1;

    // Vibrato onset (starts after 60ms)
    const vibratoAmt = Math.min(1, Math.max(0, (t - 0.06) / 0.08));
    // Phase with vibrato
    const phase = 2 * Math.PI * freq * t
      + vibratoAmt * (lfoDepth / lfoFreq) * (1 - Math.cos(2 * Math.PI * lfoFreq * t));

    // Tone: fundamental + gentle 2nd harmonic
    let s = Math.sin(phase) + 0.12 * Math.sin(2 * phase);
    // Breath noise (low amplitude white noise, low-pass filtered)
    const noise = (Math.random() * 2 - 1);
    noiseLp = noiseLp * 0.7 + noise * 0.3;
    s += noiseLp * 0.025;

    buf[i] = s * env * vol;
  }
  return buf;
}

// ── Mix notes into a track ──────────────────────────────────────────────────
function mixNotes(notes, inst) {
  // Calculate total length
  let total = notes.reduce((a, [, b]) => a + b, 0) * BPS + 3.0; // 3s tail
  const bufLen = Math.round(SR * total);
  const out = new Float32Array(bufLen);

  let offset = 0;
  for (const [freq, beats] of notes) {
    const dur = beats * BPS;
    const note = inst === 'harp' ? harpNote(freq, dur) : whistleNote(freq, dur);
    const start = Math.round(offset * SR);
    for (let i = 0; i < note.length && start + i < bufLen; i++) {
      out[start + i] += note[i];
    }
    offset += dur;
  }

  // Normalize to prevent clipping
  let peak = 0;
  for (let i = 0; i < out.length; i++) if (Math.abs(out[i]) > peak) peak = Math.abs(out[i]);
  if (peak > 0.92) for (let i = 0; i < out.length; i++) out[i] *= 0.92 / peak;

  return reverb(out, 0.25);
}

// ── Song definitions ─────────────────────────────────────────────────────────
// Same notes as in App.jsx SONG_MELODIES
const SONGS = {
  oro:{inst:'whistle',notes:[
    [440,1],[440,0.5],[587.33,1],[493.88,0.5],[440,1],[369.99,0.5],
    [329.63,0.5],[293.66,0.5],[329.63,0.5],[369.99,1],[440,1.5],
    [440,0.5],[587.33,1],[493.88,0.5],[440,1],[369.99,0.5],
    [329.63,0.5],[293.66,0.5],[329.63,0.5],[369.99,0.5],[293.66,2.5],
  ]},
  fields:{inst:'harp',notes:[
    [293.66,1],[329.63,0.5],[369.99,0.5],[440,1],[440,0.5],[493.88,0.5],
    [440,1],[369.99,0.5],[329.63,0.5],[293.66,1.5],
    [293.66,0.5],[329.63,0.5],[369.99,0.5],[440,1],[493.88,0.5],[587.33,0.5],
    [440,1],[369.99,0.5],[329.63,0.5],[293.66,2.5],
  ]},
  parting:{inst:'harp',notes:[
    [493.88,1],[587.33,0.5],[587.33,1],[493.88,0.5],[440,1],
    [369.99,1],[440,0.5],[493.88,0.5],[440,1],[369.99,0.5],[329.63,1],
    [293.66,0.5],[369.99,0.5],[440,1],[440,0.5],[369.99,0.5],
    [329.63,0.5],[293.66,0.5],[329.63,0.5],[293.66,2.5],
  ]},
  danny:{inst:'whistle',notes:[
    [293.66,0.5],[329.63,0.5],[369.99,0.5],[440,1],[493.88,0.5],
    [440,1],[369.99,0.5],[440,0.5],[493.88,0.5],[587.33,1],
    [440,1],[493.88,0.5],[440,1],[369.99,0.5],[329.63,0.5],
    [293.66,0.5],[329.63,0.5],[369.99,0.5],[293.66,2.5],
  ]},
  raglan:{inst:'whistle',notes:[
    [440,1],[440,0.5],[369.99,0.5],[440,1],[493.88,0.5],
    [440,0.5],[369.99,0.5],[329.63,0.5],[293.66,0.5],[369.99,0.5],[440,1],
    [493.88,0.5],[587.33,0.5],[493.88,1],[440,1],[369.99,0.5],
    [329.63,0.5],[293.66,0.5],[329.63,0.5],[293.66,2.5],
  ]},
  grace:{inst:'harp',notes:[
    [293.66,1],[369.99,0.5],[440,0.5],[493.88,1],[440,0.5],[369.99,0.5],
    [329.63,0.5],[369.99,1],[293.66,0.5],[329.63,0.5],[369.99,0.5],[440,1],
    [493.88,1],[587.33,0.5],[493.88,0.5],[440,1],[369.99,0.5],[329.63,0.5],
    [293.66,0.5],[329.63,0.5],[293.66,2.5],
  ]},
  molly:{inst:'whistle',notes:[
    [293.66,0.5],[329.63,0.5],[369.99,1],[440,1],[369.99,0.5],[329.63,0.5],
    [293.66,0.5],[329.63,0.5],[369.99,0.5],[440,1],[493.88,0.5],[587.33,0.5],
    [440,1],[440,0.5],[369.99,0.5],[329.63,0.5],[293.66,0.5],
    [329.63,0.5],[369.99,0.5],[293.66,2.5],
  ]},
  whiskey:{inst:'harp',notes:[
    [440,0.5],[440,0.5],[369.99,0.5],[440,1],[587.33,0.5],[493.88,0.5],
    [440,0.5],[392,0.5],[440,0.5],[369.99,0.5],[293.66,0.5],[329.63,0.5],
    [369.99,0.5],[440,1],[440,0.5],[587.33,0.5],[493.88,1],
    [440,0.5],[369.99,0.5],[329.63,0.5],[293.66,2.5],
  ]},
};

// ── Generate all ─────────────────────────────────────────────────────────────
const outDir = path.join(__dirname, '..', 'public', 'audio', 'ceol');
fs.mkdirSync(outDir, { recursive: true });

console.log('Generating Ceol WAV files...');
for (const [id, song] of Object.entries(SONGS)) {
  process.stdout.write(`  ${id}... `);
  const mixed = mixNotes(song.notes, song.inst);
  writeWav(path.join(outDir, `${id}.wav`), mixed);
}
console.log('Done!');
