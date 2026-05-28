import sharp from 'sharp';

// Beautiful shamrock SVG using pure SVG paths (no emoji)
const shamrockSVG = (size) => {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.44; // outer radius of design
  const leafR = s * 0.155;
  const stemW = s * 0.052;
  const cornerR = s * 0.22;

  // Three leaf centers, arranged in trefoil
  const lTop = { x: cx, y: cy - leafR * 1.05 };
  const lLeft = { x: cx - leafR * 0.9, y: cy + leafR * 0.52 };
  const lRight = { x: cx + leafR * 0.9, y: cy + leafR * 0.52 };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <defs>
    <radialGradient id="bg" cx="40%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#1B4332"/>
      <stop offset="100%" stop-color="#0D2218"/>
    </radialGradient>
    <radialGradient id="leaf" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#6FCF97"/>
      <stop offset="55%" stop-color="#40B074"/>
      <stop offset="100%" stop-color="#2D7A54"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C8963E" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#C8963E" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="${s*0.008}" stdDeviation="${s*0.018}" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${s}" height="${s}" rx="${cornerR}" fill="url(#bg)"/>

  <!-- Ambient gold glow -->
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#glow)"/>

  <!-- Gold accent ring -->
  <circle cx="${cx}" cy="${cy - s*0.02}" r="${r * 0.82}" fill="none" stroke="#C8963E" stroke-width="${s*0.006}" opacity="0.22"/>

  <!-- Three leaves (group with shadow filter) -->
  <g filter="url(#shadow)">
    <circle cx="${lTop.x}" cy="${lTop.y}" r="${leafR}" fill="url(#leaf)"/>
    <circle cx="${lLeft.x}" cy="${lLeft.y}" r="${leafR}" fill="url(#leaf)"/>
    <circle cx="${lRight.x}" cy="${lRight.y}" r="${leafR}" fill="url(#leaf)"/>
  </g>

  <!-- Center vein point -->
  <circle cx="${cx}" cy="${cy - s*0.01}" r="${leafR * 0.32}" fill="#1B4332" opacity="0.55"/>

  <!-- Subtle leaf vein lines -->
  <line x1="${lTop.x}" y1="${lTop.y + leafR*0.25}" x2="${lTop.x}" y2="${lTop.y - leafR*0.72}" stroke="#1B4332" stroke-width="${s*0.008}" stroke-linecap="round" opacity="0.3"/>
  <line x1="${lLeft.x + leafR*0.22}" y1="${lLeft.y}" x2="${lLeft.x - leafR*0.68}" y2="${lLeft.y - leafR*0.3}" stroke="#1B4332" stroke-width="${s*0.008}" stroke-linecap="round" opacity="0.3"/>
  <line x1="${lRight.x - leafR*0.22}" y1="${lRight.y}" x2="${lRight.x + leafR*0.68}" y2="${lRight.y - leafR*0.3}" stroke="#1B4332" stroke-width="${s*0.008}" stroke-linecap="round" opacity="0.3"/>

  <!-- Stem -->
  <path d="M${cx} ${cy + leafR * 0.42} Q${cx - stemW*2} ${cy + leafR * 1.4} ${cx - stemW*3} ${cy + leafR * 2.1}"
    stroke="#40B074" stroke-width="${stemW}" stroke-linecap="round" fill="none" filter="url(#shadow)"/>
</svg>`;
};

const sizes = [
  { size: 192, file: 'public/icons/icon-192x192.png' },
  { size: 512, file: 'public/icons/icon-512x512.png' },
  { size: 180, file: 'public/icons/apple-touch-icon.png' },
];

for (const { size, file } of sizes) {
  const svg = shamrockSVG(size);
  await sharp(Buffer.from(svg))
    .png()
    .toFile(file);
  console.log(`✓ ${file} (${size}x${size})`);
}

// Also write the improved SVG icon
const svgContent = shamrockSVG(512);
import { writeFileSync } from 'fs';
writeFileSync('public/icons/icon.svg', svgContent);
console.log('✓ public/icons/icon.svg');
