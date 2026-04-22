// Fionn — Gaeltacht Connect mascot (Disney-inspired SVG)
// Moods: idle | happy | excited | wink

const INK = "#18120A";
const WHITE = "#FFFEF8";

export default function Fionn({ mood = "idle", size = 160, style = {} }) {
  const id = `f${Math.random().toString(36).slice(2,6)}`;

  // ── Mouth paths per mood ──────────────────────────────
  const mouths = {
    idle:    { type:"closed", d:"M74,172 Q100,186 126,172" },
    happy:   { type:"open",   outer:"M64,168 Q100,196 136,168", teeth:"M72,169 L128,169 L124,180 Q100,188 76,180 Z" },
    excited: { type:"circle", cx:100, cy:175, rx:20, ry:22 },
    wink:    { type:"closed", d:"M76,171 Q103,183 122,168" },
  };

  // ── Eye params per mood ───────────────────────────────
  const eyes = {
    idle:    { ry:19, browY:115, browCurve:-9, lOpen:true,  rOpen:true  },
    happy:   { ry:16, browY:112, browCurve:-12, lOpen:true,  rOpen:true  },
    excited: { ry:22, browY:108, browCurve:-14, lOpen:true,  rOpen:true  },
    wink:    { ry:19, browY:115, browCurve:-9,  lOpen:true,  rOpen:false },
  };

  const m  = mouths[mood] || mouths.idle;
  const e  = eyes[mood]   || eyes.idle;
  const si = `${id}`;

  const DisneyEye = ({ cx, cy, open }) => {
    if (!open) return (
      <g>
        <path d={`M${cx-14},${cy+2} Q${cx},${cy+12} ${cx+14},${cy+2}`}
          fill="none" stroke={INK} strokeWidth={3.2} strokeLinecap="round"/>
        <path d={`M${cx-12},${cy} Q${cx},${cy+4} ${cx+12},${cy}`}
          fill="#F0A855" stroke="none"/>
      </g>
    );
    return (
      <g>
        {/* White sclera */}
        <ellipse cx={cx} cy={cy} rx={16} ry={e.ry}
          fill={WHITE} stroke={INK} strokeWidth={2.8}/>
        {/* Iris */}
        <circle cx={cx} cy={cy+2} r={11}
          fill={`url(#iris${si})`}/>
        {/* Pupil */}
        <circle cx={cx} cy={cy+2} r={6.5} fill={INK}/>
        {/* Main highlight (top-right) */}
        <circle cx={cx+4} cy={cy-3} r={3.2} fill={WHITE}/>
        {/* Small highlight (bottom-left) */}
        <circle cx={cx-3} cy={cy+4} r={1.4} fill={WHITE} opacity={0.8}/>
        {/* Upper eyelid */}
        <path d={`M${cx-16},${cy-1} Q${cx},${cy-e.ry-3} ${cx+16},${cy-1}`}
          fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round"/>
      </g>
    );
  };

  return (
    <svg width={size} height={size*1.2} viewBox="0 0 200 240"
      style={{display:"block", ...style}} xmlns="http://www.w3.org/2000/svg">

      <defs>
        {/* Skin gradient — gives roundness */}
        <radialGradient id={`skin${si}`} cx="42%" cy="35%" r="58%">
          <stop offset="0%"   stopColor="#FFE0A8"/>
          <stop offset="60%"  stopColor="#FFCA80"/>
          <stop offset="100%" stopColor="#E8A050"/>
        </radialGradient>
        {/* Iris gradient — Irish blue */}
        <radialGradient id={`iris${si}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#7BBFE8"/>
          <stop offset="45%"  stopColor="#3A8DC4"/>
          <stop offset="100%" stopColor="#1A5A8A"/>
        </radialGradient>
        {/* Hat gradient */}
        <linearGradient id={`hat${si}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2EA050"/>
          <stop offset="100%" stopColor="#166030"/>
        </linearGradient>
        {/* Hat sheen */}
        <linearGradient id={`hatSheen${si}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#fff" stopOpacity="0.18"/>
          <stop offset="50%"  stopColor="#fff" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
        {/* Hair gradient */}
        <radialGradient id={`hair${si}`} cx="40%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#E05520"/>
          <stop offset="100%" stopColor="#952808"/>
        </radialGradient>
        {/* Cheek blush */}
        <radialGradient id={`cheek${si}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FF6A5A" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#FF6A5A" stopOpacity="0"/>
        </radialGradient>
        {/* Ear shading */}
        <radialGradient id={`ear${si}`} cx="60%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#FFD898"/>
          <stop offset="100%" stopColor="#D4884A"/>
        </radialGradient>
      </defs>

      {/* ── BODY ─────────────────────────────────────── */}
      <path d="M48,232 Q50,204 78,198 Q90,210 100,212 Q110,210 122,198 Q150,204 152,232 Z"
        fill={`url(#hat${si})`} stroke={INK} strokeWidth={2.8} strokeLinejoin="round"/>
      {/* White shirt */}
      <path d="M88,200 Q100,218 112,200 Q106,208 100,210 Q94,208 88,200 Z"
        fill={WHITE} stroke={INK} strokeWidth={1.8}/>
      {/* Bow tie */}
      <path d="M91,202 L100,207 L109,202 L100,199 Z"
        fill="#FFD700" stroke={INK} strokeWidth={1.5}/>

      {/* ── EARS — leprechaun slightly pointed ───────── */}
      <path d="M30,132 Q12,142 14,160 Q16,174 32,176 Q46,174 48,160 Q50,143 36,128 Z"
        fill={`url(#ear${si})`} stroke={INK} strokeWidth={2.8}/>
      <path d="M30,138 Q20,148 22,160 Q24,168 34,170"
        fill="none" stroke="#D08848" strokeWidth={2} strokeLinecap="round" opacity={0.55}/>
      <path d="M170,132 Q188,142 186,160 Q184,174 168,176 Q154,174 152,160 Q150,143 164,128 Z"
        fill={`url(#ear${si})`} stroke={INK} strokeWidth={2.8}/>
      <path d="M170,138 Q180,148 178,160 Q176,168 166,170"
        fill="none" stroke="#D08848" strokeWidth={2} strokeLinecap="round" opacity={0.55}/>

      {/* ── HEAD ─────────────────────────────────────── */}
      <circle cx={100} cy={148} r={74}
        fill={`url(#skin${si})`} stroke={INK} strokeWidth={3}/>

      {/* ── HAIR TUFTS ───────────────────────────────── */}
      <path d="M33,128 Q24,108 38,96 Q46,116 44,132 Z"
        fill={`url(#hair${si})`} stroke={INK} strokeWidth={2.2}/>
      <path d="M167,128 Q176,108 162,96 Q154,116 156,132 Z"
        fill={`url(#hair${si})`} stroke={INK} strokeWidth={2.2}/>

      {/* ── HAT BRIM ─────────────────────────────────── */}
      <rect x={14} y={90} width={172} height={24} rx={7}
        fill={`url(#hat${si})`} stroke={INK} strokeWidth={3}/>
      <rect x={18} y={91} width={80} height={10} rx={4}
        fill={`url(#hatSheen${si})`}/>

      {/* ── HAT CROWN ────────────────────────────────── */}
      <path d="M42,93 L46,14 Q46,8 52,8 L148,8 Q154,8 154,14 L158,93 Z"
        fill={`url(#hat${si})`} stroke={INK} strokeWidth={3} strokeLinejoin="round"/>
      {/* Crown sheen */}
      <path d="M50,90 L54,12 L90,12 L86,90 Z"
        fill={`url(#hatSheen${si})`} stroke="none"/>

      {/* ── HAT BAND ─────────────────────────────────── */}
      <rect x={42} y={78} width={116} height={17} rx={3}
        fill={INK} stroke={INK} strokeWidth={1}/>

      {/* ── BUCKLE ───────────────────────────────────── */}
      <rect x={82} y={80} width={36} height={13} rx={3}
        fill="#FFD700" stroke={INK} strokeWidth={2.5}/>
      <rect x={88} y={84} width={24} height={5} rx={1.5}
        fill="#C9A800" stroke={INK} strokeWidth={1.2}/>

      {/* ── SHAMROCK on band ─────────────────────────── */}
      <text x={58} y={91} fontSize={15} textAnchor="middle" style={{userSelect:"none"}}>☘️</text>

      {/* ── CHEEKS ───────────────────────────────────── */}
      <ellipse cx={62} cy={165} rx={20} ry={16} fill={`url(#cheek${si})`}/>
      <ellipse cx={138} cy={165} rx={20} ry={16} fill={`url(#cheek${si})`}/>

      {/* ── FRECKLES ─────────────────────────────────── */}
      {[[57,158],[64,163],[71,157],[129,157],[136,163],[143,158]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={2.5} fill="#C04A10" opacity={0.5}/>
      ))}

      {/* ── EYEBROWS ─────────────────────────────────── */}
      <path d={`M56,${e.browY} Q72,${e.browY+e.browCurve} 88,${e.browY+2}`}
        fill="none" stroke={`url(#hair${si})`} strokeWidth={5.5} strokeLinecap="round"/>
      <path d={`M112,${e.browY+2} Q128,${e.browY+e.browCurve} 144,${e.browY}`}
        fill="none" stroke={`url(#hair${si})`} strokeWidth={5.5} strokeLinecap="round"/>
      {/* Brow outline */}
      <path d={`M56,${e.browY} Q72,${e.browY+e.browCurve} 88,${e.browY+2}`}
        fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" opacity={0.4}/>
      <path d={`M112,${e.browY+2} Q128,${e.browY+e.browCurve} 144,${e.browY}`}
        fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" opacity={0.4}/>

      {/* ── EYES ─────────────────────────────────────── */}
      <DisneyEye cx={72} cy={138} open={e.lOpen}/>
      <DisneyEye cx={128} cy={138} open={e.rOpen}/>

      {/* ── NOSE — round ball ────────────────────────── */}
      <circle cx={100} cy={157} r={8}
        fill="#E89A58" stroke={INK} strokeWidth={2}/>
      <circle cx={97} cy={154} r={2.5}
        fill={WHITE} opacity={0.45}/>

      {/* ── BEARD ────────────────────────────────────── */}
      <path d="M42,178 Q38,204 58,218 Q80,230 100,232 Q120,230 142,218 Q162,204 158,178 Q144,188 100,191 Q56,188 42,178 Z"
        fill={`url(#hair${si})`} stroke={INK} strokeWidth={2.8}/>
      {/* Beard texture lines */}
      <path d="M56,183 Q72,196 88,191" fill="none" stroke="#FF7030" strokeWidth={2} strokeLinecap="round" opacity={0.45}/>
      <path d="M68,188 Q84,200 96,196" fill="none" stroke="#FF7030" strokeWidth={2} strokeLinecap="round" opacity={0.35}/>
      <path d="M112,191 Q124,200 138,188" fill="none" stroke="#FF7030" strokeWidth={2} strokeLinecap="round" opacity={0.35}/>
      {/* Beard highlight */}
      <path d="M54,180 Q78,192 100,192 Q122,192 146,180"
        fill="none" stroke="#FFAA60" strokeWidth={2.5} strokeLinecap="round" opacity={0.4}/>

      {/* ── MOUTH ────────────────────────────────────── */}
      {m.type === "closed" && (
        <path d={m.d}
          fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round"/>
      )}
      {m.type === "open" && (
        <g>
          <path d={m.outer} fill="#CC2800" stroke={INK} strokeWidth={3} strokeLinecap="round"/>
          <path d={m.teeth} fill={WHITE} stroke={INK} strokeWidth={1.5}/>
          <line x1="100" y1="169" x2="100" y2="179" stroke={INK} strokeWidth={1.5}/>
        </g>
      )}
      {m.type === "circle" && (
        <g>
          <ellipse cx={m.cx} cy={m.cy} rx={m.rx} ry={m.ry}
            fill="#CC2800" stroke={INK} strokeWidth={3}/>
          <ellipse cx={m.cx} cy={m.cy-4} rx={m.rx-6} ry={6}
            fill={WHITE} stroke="none"/>
          <line x1={m.cx} y1={m.cy-m.ry+2} x2={m.cx} y2={m.cy+m.ry-2}
            stroke={INK} strokeWidth={0} opacity={0}/>
        </g>
      )}

      {/* ── SPARKLES (happy / excited) ────────────────── */}
      {(mood==="happy"||mood==="excited") && (
        <g>
          <text x={16} y={122} fontSize={mood==="excited"?22:18} style={{userSelect:"none"}}>✨</text>
          <text x={164} y={118} fontSize={mood==="excited"?20:16} style={{userSelect:"none"}}>⭐</text>
          {mood==="excited" && (
            <>
              <text x={10}  y={152} fontSize={14} style={{userSelect:"none"}}>💫</text>
              <text x={168} y={148} fontSize={14} style={{userSelect:"none"}}>💫</text>
            </>
          )}
        </g>
      )}
    </svg>
  );
}

// ── Speech bubble + Fionn ───────────────────────────────
export function FionnSays({ mood="idle", text, size=130, align="right", style={} }) {
  const left = align === "right";
  return (
    <div style={{
      display:"flex", alignItems:"flex-end", gap:10,
      flexDirection: left ? "row" : "row-reverse",
      ...style,
    }}>
      <Fionn mood={mood} size={size}/>
      {text && (
        <div style={{position:"relative", marginBottom:28}}>
          <div style={{
            background:"#FFFEF0",
            border:"3px solid #18120A",
            borderRadius:18,
            padding:"12px 16px",
            maxWidth:210,
            boxShadow:"4px 4px 0 #18120A",
            fontFamily:"'Bangers','Comic Sans MS',cursive",
            fontSize:"1.05rem",
            letterSpacing:"0.04em",
            color:"#18120A",
            lineHeight:1.35,
          }}>
            {text}
          </div>
          {/* Tail */}
          <div style={{
            position:"absolute", bottom:-15,
            [left?"left":"right"]:22,
            width:0, height:0,
            borderLeft: left?"10px solid transparent":"10px solid #18120A",
            borderRight: left?"10px solid #18120A":"10px solid transparent",
            borderTop:"15px solid #18120A",
          }}/>
          <div style={{
            position:"absolute", bottom:-11,
            [left?"left":"right"]:25,
            width:0, height:0,
            borderLeft: left?"7px solid transparent":"7px solid #FFFEF0",
            borderRight: left?"7px solid #FFFEF0":"7px solid transparent",
            borderTop:"11px solid #FFFEF0",
          }}/>
        </div>
      )}
    </div>
  );
}
