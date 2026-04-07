// Fionn — the Gaeltacht Connect leprechaun mascot
// Moods: idle | happy | excited | wink

const SKIN   = "#FFCB8E";
const SKIN2  = "#F0A860";
const GREEN  = "#1E7A3C";
const GREEN2 = "#155C2C";
const GOLD   = "#FFD700";
const GOLD2  = "#C9A800";
const HAIR   = "#C84010";
const HAIR2  = "#A03008";
const INK    = "#1A1208";
const WHITE  = "#FFFEF8";
const CHEEK  = "#FF7A5A";
const SW     = 2.8; // stroke width base

const Eye = ({ cx, cy, open, big }) => {
  const r = big ? 13 : 11;
  if (!open) {
    // closed / wink
    return (
      <g>
        <path d={`M${cx-10},${cy} Q${cx},${cy+8} ${cx+10},${cy}`}
          fill="none" stroke={INK} strokeWidth={SW} strokeLinecap="round"/>
        <path d={`M${cx-8},${cy-3} Q${cx},${cy+2} ${cx+8},${cy-3}`}
          fill={SKIN2} stroke="none"/>
      </g>
    );
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={WHITE} stroke={INK} strokeWidth={SW}/>
      <circle cx={cx+1} cy={cy+1} r={big ? 7 : 6} fill={INK}/>
      <circle cx={cx+3} cy={cy-2} r={big ? 2.5 : 2} fill={WHITE}/>
      {big && <circle cx={cx-2} cy={cy+3} r={1} fill={WHITE}/>}
    </g>
  );
};

const Brow = ({ x1, y1, x2, y2, angry }) => (
  <path
    d={angry
      ? `M${x1},${y1+4} Q${(x1+x2)/2},${y1-6} ${x2},${y2+4}`
      : `M${x1},${y1} Q${(x1+x2)/2},${y1-7} ${x2},${y2}`}
    fill="none" stroke={HAIR} strokeWidth={4.5} strokeLinecap="round"
  />
);

const MOOD_CFG = {
  idle: {
    mouthD: "M75,163 Q100,177 125,163",
    mouthOpen: false,
    bigEyes: false,
    browAngry: false,
    lEyeOpen: true,
    rEyeOpen: true,
    stars: false,
  },
  happy: {
    mouthD: "M65,160 Q100,180 135,160",
    mouthOpen: true,
    bigEyes: false,
    browAngry: false,
    lEyeOpen: true,
    rEyeOpen: true,
    stars: true,
  },
  excited: {
    mouthD: "M60,158 Q100,184 140,158",
    mouthOpen: true,
    bigEyes: true,
    browAngry: false,
    lEyeOpen: true,
    rEyeOpen: true,
    stars: true,
  },
  wink: {
    mouthD: "M75,163 Q102,175 122,162",
    mouthOpen: false,
    bigEyes: false,
    browAngry: false,
    lEyeOpen: true,
    rEyeOpen: false,
    stars: false,
  },
};

export default function Fionn({ mood = "idle", size = 160, style = {} }) {
  const m = MOOD_CFG[mood] || MOOD_CFG.idle;
  const scale = size / 200;

  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 200 230"
      style={{ display: "block", ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── BODY / JACKET ── */}
      <path d="M50,222 Q50,195 80,190 Q110,195 150,222 Z"
        fill={GREEN} stroke={INK} strokeWidth={SW} strokeLinejoin="round"/>
      <path d="M80,190 Q80,200 88,205 Q96,200 96,190"
        fill={WHITE} stroke={INK} strokeWidth={SW-0.5}/>
      {/* collar */}
      <path d="M70,192 Q80,182 90,192" fill={WHITE} stroke={INK} strokeWidth={SW}/>

      {/* ── EARS ── */}
      <ellipse cx={32} cy={148} rx={14} ry={16}
        fill={SKIN} stroke={INK} strokeWidth={SW}/>
      <ellipse cx={32} cy={148} rx={8} ry={10}
        fill={SKIN2} stroke="none"/>
      <ellipse cx={168} cy={148} rx={14} ry={16}
        fill={SKIN} stroke={INK} strokeWidth={SW}/>
      <ellipse cx={168} cy={148} rx={8} ry={10}
        fill={SKIN2} stroke="none"/>

      {/* ── HEAD ── */}
      <circle cx={100} cy={148} r={68}
        fill={SKIN} stroke={INK} strokeWidth={SW+0.5}/>

      {/* ── HAIR tufts ── */}
      <path d="M38,128 Q30,112 42,102 Q48,118 44,130 Z"
        fill={HAIR} stroke={INK} strokeWidth={SW-0.5}/>
      <path d="M162,128 Q170,112 158,102 Q152,118 156,130 Z"
        fill={HAIR} stroke={INK} strokeWidth={SW-0.5}/>

      {/* ── HAT BRIM ── */}
      <rect x={18} y={94} width={164} height={22} rx={5}
        fill={GREEN} stroke={INK} strokeWidth={SW}/>
      <rect x={22} y={94} width={156} height={10} rx={3}
        fill={GREEN2} stroke="none"/>

      {/* ── HAT CROWN ── */}
      <rect x={44} y={14} width={112} height={84} rx={10}
        fill={GREEN} stroke={INK} strokeWidth={SW}/>
      {/* crown shading */}
      <rect x={48} y={18} width={40} height={76} rx={6}
        fill={GREEN2} stroke="none" opacity={0.35}/>

      {/* ── HAT BAND ── */}
      <rect x={44} y={80} width={112} height={18} rx={3}
        fill={INK} stroke={INK} strokeWidth={1}/>

      {/* ── BUCKLE ── */}
      <rect x={84} y={83} width={32} height={13} rx={2}
        fill={GOLD} stroke={INK} strokeWidth={SW-0.5}/>
      <rect x={90} y={87} width={20} height={5} rx={1}
        fill={GOLD2} stroke={INK} strokeWidth={1}/>

      {/* ── SHAMROCK on hat ── */}
      <text x={53} y={65} fontSize={22} textAnchor="middle"
        style={{userSelect:"none"}}>☘️</text>

      {/* ── CHEEKS ── */}
      <circle cx={62} cy={162} r={14} fill={CHEEK} opacity={0.35}/>
      <circle cx={138} cy={162} r={14} fill={CHEEK} opacity={0.35}/>

      {/* ── FRECKLES ── */}
      {[[58,155],[66,160],[72,154],[128,154],[134,160],[142,155]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={2.2} fill={HAIR2} opacity={0.55}/>
      ))}

      {/* ── EYES ── */}
      <Eye cx={72} cy={140} open={m.lEyeOpen} big={m.bigEyes}/>
      <Eye cx={128} cy={140} open={m.rEyeOpen} big={m.bigEyes}/>

      {/* ── EYEBROWS ── */}
      <Brow x1={58} y1={124} x2={84} y2={124} angry={m.browAngry}/>
      <Brow x1={116} y1={124} x2={142} y2={124} angry={m.browAngry}/>

      {/* ── NOSE ── */}
      <ellipse cx={100} cy={155} rx={8} ry={6}
        fill={SKIN2} stroke={INK} strokeWidth={SW-1}/>

      {/* ── BEARD ── */}
      <path d="M46,175 Q50,210 80,218 Q100,224 120,218 Q150,210 154,175 Q140,182 100,184 Q60,182 46,175 Z"
        fill={HAIR} stroke={INK} strokeWidth={SW}/>
      <path d="M60,178 Q80,190 100,187 Q120,190 140,178 Q120,196 100,193 Q80,196 60,178 Z"
        fill={HAIR2} stroke="none"/>
      {/* beard highlight */}
      <path d="M70,180 Q80,188 90,183" fill="none" stroke="#FF6030" strokeWidth={2} opacity={0.5}/>

      {/* ── MOUTH ── */}
      {m.mouthOpen ? (
        <g>
          <path d={m.mouthD} fill={WHITE} stroke={INK} strokeWidth={SW}/>
          <path d={m.mouthD.replace('M','m').split('Q')[0] + `Q${100},${m.bigEyes?172:168} ` + m.mouthD.split(' ').pop()}
            fill="#CC3300" stroke="none"/>
          {/* teeth */}
          <path d={`M${m.bigEyes?65:68},${m.bigEyes?158:157} L${m.bigEyes?65:68},${m.bigEyes?165:163} L${m.bigEyes?76:75},${m.bigEyes?165:163} L${m.bigEyes?76:75},${m.bigEyes?158:157}`}
            fill={WHITE} stroke={INK} strokeWidth={1.2}/>
          <path d={`M${m.bigEyes?76:75},${m.bigEyes?158:157} L${m.bigEyes?76:75},${m.bigEyes?165:163} L${m.bigEyes?87:86},${m.bigEyes?165:163} L${m.bigEyes?87:86},${m.bigEyes?158:157}`}
            fill={WHITE} stroke={INK} strokeWidth={1.2}/>
        </g>
      ) : (
        <path d={m.mouthD} fill="none" stroke={INK} strokeWidth={SW+0.5} strokeLinecap="round"/>
      )}

      {/* ── STARS (happy/excited) ── */}
      {m.stars && (
        <g>
          <text x={22} y={118} fontSize={18} style={{userSelect:"none"}}>✨</text>
          <text x={162} y={115} fontSize={16} style={{userSelect:"none"}}>⭐</text>
          {m.bigEyes && <text x={15} y={145} fontSize={14} style={{userSelect:"none"}}>💫</text>}
        </g>
      )}
    </svg>
  );
}

// Speech bubble wrapping Fionn
export function FionnSays({ mood = "idle", text, size = 130, align = "right", style = {} }) {
  const bubbleLeft = align === "right";
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-end",
      gap: 8,
      flexDirection: bubbleLeft ? "row" : "row-reverse",
      ...style,
    }}>
      <Fionn mood={mood} size={size}/>
      {text && (
        <div style={{
          position: "relative",
          background: "#FFFEF0",
          border: "3px solid #1A1208",
          borderRadius: 16,
          padding: "12px 16px",
          maxWidth: 220,
          boxShadow: "3px 3px 0 #1A1208",
          fontFamily: "'Bangers', 'Comic Sans MS', cursive",
          fontSize: "1rem",
          letterSpacing: "0.04em",
          color: "#1A1208",
          lineHeight: 1.35,
          marginBottom: 24,
        }}>
          {text}
          {/* Bubble tail */}
          <div style={{
            position: "absolute",
            bottom: -16,
            [bubbleLeft ? "left" : "right"]: 24,
            width: 0, height: 0,
            borderLeft: bubbleLeft ? "10px solid transparent" : "10px solid #1A1208",
            borderRight: bubbleLeft ? "10px solid #1A1208" : "10px solid transparent",
            borderTop: "16px solid #1A1208",
          }}/>
          <div style={{
            position: "absolute",
            bottom: -12,
            [bubbleLeft ? "left" : "right"]: 27,
            width: 0, height: 0,
            borderLeft: bubbleLeft ? "7px solid transparent" : "7px solid #FFFEF0",
            borderRight: bubbleLeft ? "7px solid #FFFEF0" : "7px solid transparent",
            borderTop: "12px solid #FFFEF0",
          }}/>
        </div>
      )}
    </div>
  );
}
