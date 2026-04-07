// Character variants for comparison

const INK = "#18120A";
const WHITE = "#FFFEF8";

// ─────────────────────────────────────────────
// VARIANT A — Harp with face (fun character)
// ─────────────────────────────────────────────
export function HarpChar({ size = 160, mood = "idle", style = {} }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 160 192"
      style={{ display: "block", ...style }}>
      <defs>
        <linearGradient id="harpGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#FFE066"/>
          <stop offset="50%"  stopColor="#D4A010"/>
          <stop offset="100%" stopColor="#8A6000"/>
        </linearGradient>
        <linearGradient id="harpWood" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#8B4513"/>
          <stop offset="100%" stopColor="#5A2D00"/>
        </linearGradient>
        <radialGradient id="harpFace" cx="40%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#FFE5AA"/>
          <stop offset="100%" stopColor="#D4A050"/>
        </radialGradient>
      </defs>

      {/* ── SHADOW ── */}
      <ellipse cx={80} cy={185} rx={38} ry={7}
        fill={INK} opacity={0.12}/>

      {/* ── BODY / SOUNDBOARD (face lives here) ── */}
      <path d="M28,95 Q22,140 30,168 Q40,185 80,185 Q110,185 122,165 Q132,140 128,95 Q108,88 80,86 Q52,88 28,95 Z"
        fill="url(#harpFace)" stroke={INK} strokeWidth={3}/>

      {/* ── FOREPILLAR (left curved column) ── */}
      <path d="M28,95 Q14,70 20,38 Q24,18 40,12"
        fill="none" stroke="url(#harpWood)" strokeWidth={14} strokeLinecap="round"/>
      <path d="M28,95 Q14,70 20,38 Q24,18 40,12"
        fill="none" stroke="#C47030" strokeWidth={6} strokeLinecap="round" opacity={0.4}/>

      {/* ── NECK (top curved arm) ── */}
      <path d="M40,12 Q80,4 118,24 Q132,34 128,95"
        fill="none" stroke="url(#harpGold)" strokeWidth={16} strokeLinecap="round"/>
      <path d="M40,12 Q80,4 118,24 Q132,34 128,95"
        fill="none" stroke="#FFE88A" strokeWidth={6} strokeLinecap="round" opacity={0.5}/>

      {/* ── STRINGS ── */}
      {[
        [46,22, 36,100], [55,17, 44,100], [66,13, 56,98],
        [78,11, 70,96],  [91,12, 84,95],  [103,16, 98,96],
        [114,22, 112,98],[122,32, 122,100]
      ].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="url(#harpGold)" strokeWidth={2} opacity={0.85}/>
      ))}

      {/* ── TUNING PEGS ── */}
      {[46,22, 55,17, 66,13, 78,11, 91,12, 103,16, 114,22].map((_,i,arr)=>{
        if(i%2!==0) return null;
        return <circle key={i} cx={arr[i]} cy={arr[i+1]} r={4}
          fill="#FFD700" stroke={INK} strokeWidth={1.5}/>;
      })}

      {/* ── FACE ── */}
      {/* Eyes */}
      <circle cx={62} cy={118} r={14} fill={WHITE} stroke={INK} strokeWidth={2.5}/>
      <circle cx={62} cy={119} r={8}  fill="#3A8DC4"/>
      <circle cx={62} cy={119} r={4.5} fill={INK}/>
      <circle cx={65} cy={116} r={2.5} fill={WHITE}/>
      <circle cx={59} cy={121} r={1}   fill={WHITE} opacity={0.7}/>

      <circle cx={98} cy={118} r={14} fill={WHITE} stroke={INK} strokeWidth={2.5}/>
      <circle cx={98} cy={119} r={8}  fill="#3A8DC4"/>
      <circle cx={98} cy={119} r={4.5} fill={INK}/>
      <circle cx={101} cy={116} r={2.5} fill={WHITE}/>
      <circle cx={95} cy={121} r={1}   fill={WHITE} opacity={0.7}/>

      {/* Eyebrows */}
      <path d="M50,106 Q62,100 74,106" fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round"/>
      <path d="M86,106 Q98,100 110,106" fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round"/>

      {/* Cheeks */}
      <ellipse cx={46} cy={132} rx={14} ry={10} fill="#FF7A5A" opacity={0.28}/>
      <ellipse cx={114} cy={132} rx={14} ry={10} fill="#FF7A5A" opacity={0.28}/>

      {/* Nose */}
      <circle cx={80} cy={132} r={6} fill="#D4904A" stroke={INK} strokeWidth={1.8}/>
      <circle cx={78} cy={130} r={2} fill={WHITE} opacity={0.4}/>

      {/* Mouth */}
      {mood === "idle" && (
        <path d="M64,148 Q80,160 96,148"
          fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round"/>
      )}
      {mood === "happy" && (
        <>
          <path d="M58,146 Q80,168 102,146"
            fill="#CC2800" stroke={INK} strokeWidth={3}/>
          <path d="M66,147 L94,147 L90,158 Q80,164 70,158 Z"
            fill={WHITE} stroke={INK} strokeWidth={1.5}/>
        </>
      )}

      {/* ── SMALL LEGS ── */}
      <path d="M56,183 Q52,192 46,188" fill="none" stroke="url(#harpWood)" strokeWidth={8} strokeLinecap="round"/>
      <path d="M46,188 Q42,188 40,190" fill="none" stroke="url(#harpGold)" strokeWidth={5} strokeLinecap="round"/>
      <path d="M104,183 Q108,192 114,188" fill="none" stroke="url(#harpWood)" strokeWidth={8} strokeLinecap="round"/>
      <path d="M114,188 Q118,188 120,190" fill="none" stroke="url(#harpGold)" strokeWidth={5} strokeLinecap="round"/>

      {/* ── SMALL ARMS ── */}
      <path d="M30,125 Q18,118 16,108" fill="none" stroke="url(#harpWood)" strokeWidth={7} strokeLinecap="round"/>
      <path d="M16,108 Q14,104 18,102" fill="none" stroke="url(#harpGold)" strokeWidth={4} strokeLinecap="round"/>
      <path d="M130,125 Q142,118 144,108" fill="none" stroke="url(#harpWood)" strokeWidth={7} strokeLinecap="round"/>
      <path d="M144,108 Q146,104 142,102" fill="none" stroke="url(#harpGold)" strokeWidth={4} strokeLinecap="round"/>

      {/* ── CROWN DECORATION ── */}
      <circle cx={40} cy={12} r={6} fill="#FFD700" stroke={INK} strokeWidth={2}/>
      <circle cx={40} cy={12} r={2.5} fill="#FF6600" stroke="none"/>
    </svg>
  );
}

// ─────────────────────────────────────────────
// VARIANT B — Harp as elegant logo (no face)
// ─────────────────────────────────────────────
export function HarpLogo({ size = 120, style = {} }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 100 130"
      style={{ display: "block", ...style }}>
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFE566"/>
          <stop offset="50%"  stopColor="#C8960A"/>
          <stop offset="100%" stopColor="#7A5500"/>
        </linearGradient>
      </defs>
      {/* Soundboard */}
      <path d="M18,52 Q14,85 18,108 Q24,122 50,124 Q72,122 78,105 Q84,85 80,52 Q64,46 50,45 Q36,46 18,52 Z"
        fill="url(#logoGold)" stroke={INK} strokeWidth={2.5}/>
      {/* Pillar */}
      <path d="M18,52 Q8,36 12,18 Q16,6 26,3"
        fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round"/>
      <path d="M18,52 Q8,36 12,18 Q16,6 26,3"
        fill="none" stroke="#8B5500" strokeWidth={5} strokeLinecap="round"/>
      {/* Neck */}
      <path d="M26,3 Q52,0 74,14 Q84,22 80,52"
        fill="none" stroke="url(#logoGold)" strokeWidth={10} strokeLinecap="round"/>
      <path d="M26,3 Q52,0 74,14 Q84,22 80,52"
        fill="none" stroke="#FFE88A" strokeWidth={4} strokeLinecap="round" opacity={0.6}/>
      {/* Strings */}
      {[[30,8,22,57],[38,5,32,55],[47,3,44,54],[57,3,56,54],[67,6,68,55],[75,12,76,56]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#FFD700" strokeWidth={1.5} opacity={0.9}/>
      ))}
      {/* Base feet */}
      <path d="M30,122 Q26,128 20,126" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round"/>
      <path d="M70,120 Q74,126 80,124" fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────
// VARIANT C — Harp logo + Fionn sitting on it
// ─────────────────────────────────────────────
export function HarpWithFionn({ size = 180, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200"
      style={{ display: "block", ...style }}>
      <defs>
        <linearGradient id="hcGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFE566"/>
          <stop offset="100%" stopColor="#9A6A00"/>
        </linearGradient>
        <radialGradient id="hcSkin" cx="40%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#FFE0A8"/>
          <stop offset="100%" stopColor="#E0944A"/>
        </radialGradient>
      </defs>

      {/* ── BIG HARP (background) ── */}
      <path d="M30,90 Q20,130 26,162 Q34,178 80,180 Q118,178 126,158 Q134,130 122,90 Q100,82 76,82 Q52,84 30,90 Z"
        fill="url(#hcGold)" stroke={INK} strokeWidth={3}/>
      <path d="M30,90 Q16,62 20,34 Q26,12 44,8"
        fill="none" stroke="#6B3C00" strokeWidth={13} strokeLinecap="round"/>
      <path d="M44,8 Q80,0 114,20 Q130,32 122,90"
        fill="none" stroke="url(#hcGold)" strokeWidth={14} strokeLinecap="round"/>
      {[[48,16,34,96],[58,11,46,94],[70,8,60,92],[83,7,74,91],[96,9,88,91],[108,15,102,93],[118,26,114,95]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#FFE070" strokeWidth={1.8} opacity={0.9}/>
      ))}

      {/* ── FIONN sitting on neck ── */}
      {/* Body */}
      <circle cx={148} cy={54} r={18}
        fill="#1E7A3C" stroke={INK} strokeWidth={2.5}/>
      {/* Head */}
      <circle cx={148} cy={32} r={20}
        fill="url(#hcSkin)" stroke={INK} strokeWidth={2.5}/>
      {/* Mini hat */}
      <rect x={135} y={8} width={26} height={18} rx={3} fill="#1E7A3C" stroke={INK} strokeWidth={2}/>
      <rect x={130} y={24} width={36} height={7} rx={3} fill="#1E7A3C" stroke={INK} strokeWidth={2}/>
      <rect x={135} y={21} width={26} height={5} rx={1} fill={INK}/>
      <rect x={143} y={22} width={10} height={3} rx={1} fill="#FFD700" stroke={INK} strokeWidth={1}/>
      {/* Eyes */}
      <circle cx={143} cy={32} r={5} fill={WHITE} stroke={INK} strokeWidth={1.8}/>
      <circle cx={143} cy={32} r={3} fill="#3A8DC4"/>
      <circle cx={143} cy={32} r={1.5} fill={INK}/>
      <circle cx={144.5} cy={30.5} r={1} fill={WHITE}/>
      <circle cx={153} cy={32} r={5} fill={WHITE} stroke={INK} strokeWidth={1.8}/>
      <circle cx={153} cy={32} r={3} fill="#3A8DC4"/>
      <circle cx={153} cy={32} r={1.5} fill={INK}/>
      <circle cx={154.5} cy={30.5} r={1} fill={WHITE}/>
      {/* Smile */}
      <path d="M141,40 Q148,46 155,40" fill="none" stroke={INK} strokeWidth={2.5} strokeLinecap="round"/>
      {/* Beard */}
      <path d="M134,42 Q138,52 148,54 Q158,52 162,42 Q155,47 148,48 Q141,47 134,42 Z"
        fill="#C84010" stroke={INK} strokeWidth={1.8}/>
      {/* Arm pointing at harp */}
      <path d="M132,55 Q118,50 108,44"
        fill="none" stroke="#1E7A3C" strokeWidth={8} strokeLinecap="round"/>
      <path d="M108,44 Q104,42 100,40"
        fill="url(#hcSkin)" stroke={INK} strokeWidth={5} strokeLinecap="round"/>
    </svg>
  );
}
