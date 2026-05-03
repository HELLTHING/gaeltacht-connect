// Fetches all 30 day phrases from abair.ie and saves as WAV files to public/audio/
// Run: node scripts/fetch-audio.mjs

import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dir, "../public/audio");

const PHRASES = [
  "Dia dhuit!",
  "Go raibh maith agat!",
  "Slán go fóill!",
  "Conas atá tú?",
  "Maidin mhaith!",
  "Le do thoil",
  "Dia dhuit. Conas atá tú? Go raibh maith agat. Slán!",
  "Caife, le do thoil",
  "Cé mhéad?",
  "Tá ocras orm",
  "An bhfuil bainne agaibh?",
  "Is maith liom caife!",
  "Tá sé fuar inniu!",
  "Maith go leor!",
  "Is mise. Cad is ainm duit?",
  "Cá bhfuil an leithreas?",
  "Is as mé",
  "Mo mháthair. M'athair. Mo pháiste.",
  "Dearg, glas, gorm, bán, dubh",
  "A haon, a dó, a trí, a ceathair, a cúig, a sé, a seacht, a hocht, a naoi, a deich",
  "Tá sé go hálainn. Feicim crann glas.",
  "Is breá liom an ceol seo!",
  "Is fearr Gaeilge briste ná Béarla cliste",
  "Tuigim! Ní thuigim.",
  "Lá maith agam inniu!",
  "Pionta, le do thoil!",
  "An bhfuil Gaeilge agat?",
  "Baile, Cill, Dún, Áth, Lios",
  "Abair é arís!",
  "Tá Gaeilge agam. Tá mé bródúil.",
];

const VOICE = "ga_CO_pmg_nnmnkwii";

function pcmToWav(pcm, sr = 22050) {
  const buf = Buffer.alloc(44 + pcm.length);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + pcm.length, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(sr, 24);
  buf.writeUInt32LE(sr * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write("data", 36);
  buf.writeUInt32LE(pcm.length, 40);
  pcm.copy(buf, 44);
  return buf;
}

async function fetchPhrase(text) {
  const url = `https://www.abair.ie/api2/synthesise?input=${encodeURIComponent(text)}&voice=${VOICE}&audioEncoding=LINEAR16`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (!json.audioContent) throw new Error("No audioContent");
  const pcm = Buffer.from(json.audioContent, "base64");
  return pcmToWav(pcm);
}

async function run() {
  let ok = 0, skip = 0, fail = 0;
  for (let i = 0; i < PHRASES.length; i++) {
    const day = String(i + 1).padStart(2, "0");
    const path = join(OUT, `day-${day}.wav`);
    if (existsSync(path)) { console.log(`⏭  day-${day} already exists`); skip++; continue; }

    try {
      process.stdout.write(`⬇  day-${day}: ${PHRASES[i].slice(0, 40)}... `);
      const wav = await fetchPhrase(PHRASES[i]);
      writeFileSync(path, wav);
      console.log(`✓ (${(wav.length / 1024).toFixed(0)}kb)`);
      ok++;
      await new Promise(r => setTimeout(r, 600)); // throttle
    } catch (e) {
      console.log(`✗ ${e.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} downloaded, ${skip} skipped, ${fail} failed`);
}

run();
