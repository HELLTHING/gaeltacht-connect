// Irish Brian Boru Harp — SVG illustration

export default function Harp({ size = 200, style = {} }) {
  const h = size * 1.35;
  return (
    <svg width={size} height={h} viewBox="0 0 140 190"
      style={{ display: "block", ...style }}>
      <defs>
        {/* Neck gold */}
        <linearGradient id="hn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#FFE87A"/>
          <stop offset="45%"  stopColor="#D4A010"/>
          <stop offset="100%" stopColor="#7A5000"/>
        </linearGradient>
        {/* Soundboard gold */}
        <linearGradient id="hb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#B87800"/>
          <stop offset="40%"  stopColor="#FFD840"/>
          <stop offset="100%" stopColor="#A06800"/>
        </linearGradient>
        {/* Pillar wood */}
        <linearGradient id="hp" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#6A3800"/>
          <stop offset="50%"  stopColor="#C07830"/>
          <stop offset="100%" stopColor="#7A4A00"/>
        </linearGradient>
        {/* Neck sheen */}
        <linearGradient id="hs" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#FFFBE0" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#FFD840" stopOpacity="0"/>
        </linearGradient>
        {/* String gradient */}
        <linearGradient id="hst" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFF5A0"/>
          <stop offset="100%" stopColor="#C89800"/>
        </linearGradient>
        {/* Glow behind harp */}
        <radialGradient id="hglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#FFD700" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Soft glow */}
      <ellipse cx="70" cy="95" rx="68" ry="85" fill="url(#hglow)"/>

      {/* ── SHADOW ── */}
      <ellipse cx="68" cy="185" rx="46" ry="6"
        fill="#000" opacity="0.13"/>

      {/* ══════════════════════════
          SOUNDBOARD (body — left)
          ══════════════════════════ */}
      {/* Main body */}
      <path d="M20,160 Q12,88 25,20 Q29,11 36,11 Q44,11 47,20 Q53,88 50,160 Q42,172 35,172 Q24,172 20,160 Z"
        fill="url(#hb)" stroke="#5A3400" strokeWidth="2.5"/>
      {/* Inner shadow on left edge */}
      <path d="M20,160 Q12,88 25,20"
        fill="none" stroke="#7A5000" strokeWidth="3" opacity="0.4"/>
      {/* Right edge highlight */}
      <path d="M47,20 Q53,88 50,160"
        fill="none" stroke="#FFE060" strokeWidth="2" opacity="0.45"/>

      {/* Carved centre channel */}
      <path d="M33,24 Q30,90 33,156"
        fill="none" stroke="#8A5A00" strokeWidth="1.8" opacity="0.5"/>

      {/* Celtic knotwork band near top */}
      <path d="M24,36 Q35,30 46,36"
        fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.65" strokeLinecap="round"/>
      <path d="M24,42 Q35,48 46,42"
        fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.65" strokeLinecap="round"/>
      <line x1="24" y1="36" x2="24" y2="42" stroke="#B8860B" strokeWidth="2" opacity="0.65"/>
      <line x1="46" y1="36" x2="46" y2="42" stroke="#B8860B" strokeWidth="2" opacity="0.65"/>

      {/* Decorative medallion 1 */}
      <circle cx="35" cy="80" r="7" fill="none" stroke="#B8860B" strokeWidth="1.8" opacity="0.7"/>
      <circle cx="35" cy="80" r="3" fill="#B8860B" opacity="0.55"/>
      <circle cx="35" cy="80" r="1.2" fill="#FFD700" opacity="0.8"/>
      {/* Decorative medallion 2 */}
      <circle cx="35" cy="118" r="7" fill="none" stroke="#B8860B" strokeWidth="1.8" opacity="0.7"/>
      <circle cx="35" cy="118" r="3" fill="#B8860B" opacity="0.55"/>
      <circle cx="35" cy="118" r="1.2" fill="#FFD700" opacity="0.8"/>

      {/* Celtic knotwork band near bottom */}
      <path d="M24,148 Q35,142 46,148"
        fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.65" strokeLinecap="round"/>
      <path d="M24,154 Q35,160 46,154"
        fill="none" stroke="#B8860B" strokeWidth="2" opacity="0.65" strokeLinecap="round"/>
      <line x1="24" y1="148" x2="24" y2="154" stroke="#B8860B" strokeWidth="2" opacity="0.65"/>
      <line x1="46" y1="148" x2="46" y2="154" stroke="#B8860B" strokeWidth="2" opacity="0.65"/>

      {/* ══════════════════════════
          FOREPILLAR (right column)
          ══════════════════════════ */}
      {/* Depth shadow */}
      <path d="M116,50 Q138,112 122,166 Q110,180 68,182"
        fill="none" stroke="#2A1600" strokeWidth="22"
        strokeLinecap="round" opacity="0.3"/>
      {/* Main pillar */}
      <path d="M116,50 Q138,112 122,166 Q110,180 68,182"
        fill="none" stroke="url(#hp)" strokeWidth="16" strokeLinecap="round"/>
      {/* Pillar highlight stripe */}
      <path d="M116,50 Q138,112 122,166 Q110,180 68,182"
        fill="none" stroke="#D49050" strokeWidth="5"
        strokeLinecap="round" opacity="0.5"/>
      {/* Carved ring detail on pillar */}
      <path d="M126,100 Q132,108 128,116"
        fill="none" stroke="#8A5000" strokeWidth="4" opacity="0.5" strokeLinecap="round"/>
      <path d="M128,120 Q134,128 130,136"
        fill="none" stroke="#8A5000" strokeWidth="4" opacity="0.4" strokeLinecap="round"/>

      {/* ══════════════════════════
          BASE + FEET
          ══════════════════════════ */}
      <path d="M68,182 Q54,180 50,160"
        fill="none" stroke="url(#hp)" strokeWidth="14" strokeLinecap="round"/>
      <path d="M68,182 Q54,180 50,160"
        fill="none" stroke="#D49050" strokeWidth="4"
        strokeLinecap="round" opacity="0.45"/>

      {/* Left foot */}
      <ellipse cx="47" cy="163" rx="13" ry="6.5"
        fill="#6A3E00" stroke="#3A1E00" strokeWidth="2"/>
      <path d="M36,163 Q47,168 58,163"
        fill="none" stroke="#9A6020" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
      {/* Right foot */}
      <ellipse cx="70" cy="185" rx="15" ry="6"
        fill="#6A3E00" stroke="#3A1E00" strokeWidth="2"/>
      <path d="M57,185 Q70,190 83,185"
        fill="none" stroke="#9A6020" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>

      {/* ══════════════════════════
          NECK (sweeping arch — top)
          ══════════════════════════ */}
      {/* Outer shadow for depth */}
      <path d="M36,11 Q84,-10 116,50"
        fill="none" stroke="#2A1600" strokeWidth="26"
        strokeLinecap="round" opacity="0.22"/>
      {/* Main neck body */}
      <path d="M36,11 Q84,-10 116,50"
        fill="none" stroke="url(#hn)" strokeWidth="19" strokeLinecap="round"/>
      {/* Gold sheen on neck */}
      <path d="M36,11 Q84,-10 116,50"
        fill="none" stroke="url(#hs)" strokeWidth="10" strokeLinecap="round"/>
      {/* Sharp highlight edge */}
      <path d="M42,9 Q88,-12 116,50"
        fill="none" stroke="#FFFBE0" strokeWidth="2.5"
        strokeLinecap="round" opacity="0.55"/>

      {/* ══════════════════════════
          STRINGS (8 strings)
          ══════════════════════════ */}
      {[
        [46,  6, 42, 29],
        [56,  2, 42, 50],
        [67,  0, 42, 70],
        [78,  1, 42, 90],
        [89,  6, 42,109],
        [100, 15, 43,127],
        [109, 27, 44,143],
        [115, 40, 46,156],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="url(#hst)"
          strokeWidth={i < 3 ? 1 : i < 6 ? 1.5 : 2.2}
          opacity="0.9"/>
      ))}

      {/* ══════════════════════════
          TUNING PINS along neck
          ══════════════════════════ */}
      {[
        [46,6], [56,2], [67,0], [78,1],
        [89,6], [100,15], [109,27], [115,40],
      ].map(([x,y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4.5"
            fill="#FFD700" stroke="#5A3400" strokeWidth="1.8"/>
          <circle cx={x} cy={y} r="2"
            fill="#CC8800"/>
          <circle cx={x-1} cy={y-1} r="0.9"
            fill="#FFF5A0" opacity="0.8"/>
        </g>
      ))}

      {/* ══════════════════════════
          CROWN / FINIAL (top of soundboard)
          ══════════════════════════ */}
      {/* Crown spires */}
      {[-10,-5,0,5,10].map((dx, i) => (
        <polygon key={i}
          points={`${36+dx-4},8 ${36+dx},${i%2===0?-2:1} ${36+dx+4},8`}
          fill="#FFD700" stroke="#5A3400" strokeWidth="1.5"/>
      ))}
      {/* Crown base ring */}
      <circle cx="36" cy="11" r="10.5"
        fill="#FFD700" stroke="#5A3400" strokeWidth="2.5"/>
      <circle cx="36" cy="11" r="6"
        fill="#CC6600"/>
      <circle cx="36" cy="11" r="3"
        fill="#FFD700"/>
      <circle cx="34" cy="9" r="1.2"
        fill="#FFF5A0" opacity="0.8"/>

      {/* ══════════════════════════
          PILLAR CAPITAL (top of forepillar)
          ══════════════════════════ */}
      <circle cx="116" cy="50" r="9"
        fill="#FFD700" stroke="#5A3400" strokeWidth="2.2"/>
      <circle cx="116" cy="50" r="5"
        fill="#CC7700"/>
      <circle cx="114.5" cy="48.5" r="1.5"
        fill="#FFF5A0" opacity="0.75"/>

      {/* ══════════════════════════
          SHAMROCK at base (Irish touch)
          ══════════════════════════ */}
      <text x="66" y="178"
        fontSize="12" textAnchor="middle"
        fill="#2D7A3A" opacity="0.9"
        style={{fontFamily:"serif"}}>☘</text>
    </svg>
  );
}
