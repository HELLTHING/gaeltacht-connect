import { useState, useEffect, useCallback, useRef } from "react";

const CH = [
  { day:1,t:"An Chéad Lá",e:"First Step",cat:"greetings",d:1,ch:"Say 'Dia dhuit' to someone today — a shop worker, neighbour, or colleague.",p:"Dia dhuit!",pr:"DEE-ah gwit",m:"Hello",tip:"If they reply 'Dia is Muire dhuit' — they know Irish! You've found a fellow Gaeilgeoir.",b:"Try it with 3 different people"},
  { day:2,t:"Go Raibh Maith Agat",e:"Gratitude",cat:"greetings",d:1,ch:"Replace every 'thank you' today with 'Go raibh maith agat'.",p:"Go raibh maith agat!",pr:"Guh rev mah ah-gut",m:"Thank you",tip:"In a shop, after paying — just say it with a smile. Most Irish people will light up.",b:"Use it at least 5 times today"},
  { day:3,t:"Slán Go Fóill",e:"Farewell",cat:"greetings",d:1,ch:"End every conversation today with 'Slán' or 'Slán go fóill'.",p:"Slán go fóill!",pr:"Slawn guh FOHL",m:"Goodbye for now",tip:"'Slán' alone works too. Short, warm, memorable.",b:"Wave and say it to your postman or delivery driver"},
  { day:4,t:"Conas Atá Tú?",e:"How Are You?",cat:"greetings",d:1,ch:"Ask someone 'Conas atá tú?' and see if they respond in Irish.",p:"Conas atá tú?",pr:"KUN-us ah-TAW too",m:"How are you?",tip:"If they look puzzled, smile and translate. You're planting seeds.",b:"Learn the reply: 'Tá mé go maith' — TAW may guh mah"},
  { day:5,t:"Maidin Mhaith",e:"Good Morning",cat:"greetings",d:1,ch:"Start your morning by greeting someone with 'Maidin mhaith'.",p:"Maidin mhaith!",pr:"MAH-jin wah",m:"Good morning",tip:"Perfect for the coffee shop, the school gate, or passing a neighbour.",b:"Also try 'Tráthnóna maith' — TRAW-NOH-nah mah"},
  { day:6,t:"Le Do Thoil",e:"Please",cat:"greetings",d:1,ch:"Add 'le do thoil' to any request today — at a counter, in a shop, anywhere.",p:"Le do thoil",pr:"leh duh hull",m:"Please",tip:"Even in English: 'A coffee, le do thoil' — mixing is fine and normalises the language.",b:"Combine with Day 2: 'Go raibh maith agat' after"},
  { day:7,t:"Lá na Seachtaine",e:"Weekly Review",cat:"review",d:1,ch:"Use ALL the phrases from this week in one outing — greet, thank, ask, say goodbye.",p:"Dia dhuit → Conas atá tú? → Go raibh maith agat → Slán!",pr:"Full conversation flow",m:"A complete mini-conversation",tip:"A café is the perfect place for a full cycle.",b:"Journal one sentence about how it felt"},
  { day:8,t:"Caife, Le Do Thoil",e:"Coffee Time",cat:"food",d:2,ch:"Order a drink in Irish at a café. Even partially counts!",p:"Caife, le do thoil",pr:"KAH-feh, leh duh hull",m:"Coffee, please",tip:"If they ask 'what size?' just answer in English — that's fine.",b:"Try 'Tae' (tay) or 'Uisce' (ISH-keh)"},
  { day:9,t:"Cé Mhéad?",e:"How Much?",cat:"shopping",d:2,ch:"Ask 'Cé mhéad?' when buying something today.",p:"Cé mhéad?",pr:"Kay VAYD",m:"How much?",tip:"Point at the item and ask. Even if the price is visible.",b:"Learn 1-5: a haon, a dó, a trí, a ceathair, a cúig"},
  { day:10,t:"Tá Ocras Orm",e:"I'm Hungry",cat:"food",d:2,ch:"Tell someone 'Tá ocras orm' before a meal today.",p:"Tá ocras orm",pr:"Taw UK-rus ur-um",m:"I'm hungry (hunger is on me)",tip:"Irish puts feelings ON you, not IN you. Beautiful.",b:"Also: 'Tá tart orm' (I'm thirsty)"},
  { day:11,t:"An Bhfuil...?",e:"Do You Have?",cat:"shopping",d:2,ch:"Ask 'An bhfuil ___ agaibh?' in a shop.",p:"An bhfuil bainne agaibh?",pr:"Un will BAHN-yeh ah-GIV",m:"Do you have milk?",tip:"Swap: arán (bread), siúcra (sugar), uisce (water)",b:"Try it in a different shop than usual"},
  { day:12,t:"Is Maith Liom",e:"I Like",cat:"opinions",d:2,ch:"Express a preference: 'Is maith liom ___'",p:"Is maith liom caife!",pr:"Iss mah lyum KAH-feh",m:"I like coffee!",tip:"Opposite: 'Ní maith liom' — Nee mah lyum",b:"Tell someone what food you like in Irish"},
  { day:13,t:"An Aimsir",e:"The Weather",cat:"social",d:2,ch:"Comment on the weather in Irish. In Ireland, this IS social currency.",p:"Tá sé fuar inniu!",pr:"Taw shay FOO-er in-YOO",m:"It's cold today!",tip:"Swap: fliuch (wet), te (hot), go hálainn (beautiful)",b:"Try a weather comment with a stranger"},
  { day:14,t:"Ag Siopadóireacht",e:"Shopping Trip",cat:"review",d:2,ch:"Full shopping trip using as much Irish as possible.",p:"Weeks 1 & 2 combined",pr:"Full immersion run",m:"A real-world practice session",tip:"The goal is USING the language, not perfection.",b:"Count your items in Irish at the checkout"},
  { day:15,t:"Cad is Ainm Duit?",e:"What's Your Name?",cat:"social",d:3,ch:"Introduce yourself in Irish or ask someone's name.",p:"Is mise ___. Cad is ainm duit?",pr:"Iss MISH-eh ___. Cod iss AN-im dit?",m:"I'm ___. What's your name?",tip:"Check if there's a Ciorcal Comhrá near you!",b:"Find and attend a conversation circle this week"},
  { day:16,t:"Cá Bhfuil?",e:"Where Is?",cat:"directions",d:3,ch:"Ask for directions in Irish.",p:"Cá bhfuil an leithreas?",pr:"Kaw will un LEH-ras",m:"Where is the toilet?",tip:"The most practical phrase in any language!",b:"Navigate using Irish place names on signs"},
  { day:17,t:"As Éirinn",e:"From Ireland",cat:"social",d:3,ch:"Tell someone where you're from in Irish.",p:"Is as ___ mé",pr:"Iss oss ___ may",m:"I'm from ___",tip:"Dublin = Baile Átha Cliath, Cork = Corcaigh, Galway = Gaillimh",b:"Ask: 'Cá as tú?' — Kaw oss too?"},
  { day:18,t:"Teaghlach",e:"Family",cat:"social",d:3,ch:"Learn and use one family word today.",p:"Mo mháthair / m'athair / mo pháiste",pr:"Muh WAH-her / MAH-her / muh FAW-shteh",m:"My mother / father / child",tip:"Family talk is deeply meaningful in Irish culture.",b:"Teach a family member one Irish phrase"},
  { day:19,t:"Dathanna",e:"Colours",cat:"vocabulary",d:3,ch:"Point out colours in Irish during your day.",p:"Dearg, glas, gorm, bán, dubh",pr:"JAR-ug, glass, GUR-um, bawn, duv",m:"Red, green, blue, white, black",tip:"Fun fact: 'glas' can mean green, grey, or even the colour of the sea — Irish sees colour differently than English!",b:"Describe what you're wearing in Irish"},
  { day:20,t:"Uimhreacha",e:"Numbers",cat:"vocabulary",d:3,ch:"Count in Irish throughout your day.",p:"A haon → a deich",pr:"ah HAYN, ah DOH, ah TREE, ah KAH-her, ah KOO-ig...",m:"1 through 10",tip:"Gym reps, stairs, queuing. Make it automatic.",b:"Say your phone number in Irish"},
  { day:21,t:"Amuigh Faoin Aer",e:"Outdoor Day",cat:"review",d:3,ch:"Take a walk and narrate what you see in Irish.",p:"Tá sé go hálainn. Feicim crann glas.",pr:"Taw shay guh HAW-lin. FEK-im krawn glass.",m:"It's beautiful. I see a green tree.",tip:"Talking to yourself counts. Think in Irish.",b:"Record a 30-second voice note in Irish"},
  { day:22,t:"Ceol agus Craic",e:"Music & Fun",cat:"culture",d:4,ch:"Listen to a song in Irish — Kíla, Clannad, or search 'amhrán Gaeilge'.",p:"Is breá liom an ceol seo!",pr:"Iss braw lyum on KYOHL shuh",m:"I love this music!",tip:"Try 'Óró Sé Do Bheatha Bhaile' — you'll feel it.",b:"Share the song with someone"},
  { day:23,t:"Seanfhocail",e:"Proverbs",cat:"culture",d:4,ch:"Learn one Irish proverb and use it today.",p:"Is fearr Gaeilge briste ná Béarla cliste",pr:"Iss far GAYL-geh BRISH-teh naw BAYR-lah KLISH-teh",m:"Broken Irish is better than clever English",tip:"Your mantra. Permission to be imperfect.",b:"Write it somewhere visible"},
  { day:24,t:"Ag Léamh",e:"Reading",cat:"culture",d:4,ch:"Read something in Irish — a sign, a menu, tuairisc.ie.",p:"Tuigim! / Ní thuigim.",pr:"TIG-im / Nee HIG-im",m:"I understand! / I don't understand.",tip:"Ireland is full of bilingual signs you've been ignoring.",b:"Read one headline on tuairisc.ie"},
  { day:25,t:"Scríobh",e:"Write",cat:"culture",d:4,ch:"Write a short message in Irish — text, social post, note.",p:"Lá maith agam inniu!",pr:"Law mah ah-GUM in-YOO",m:"Good day for me today!",tip:"Post with #Gaeilge or #GaeltachtConnect.",b:"Send a WhatsApp message in Irish"},
  { day:26,t:"Sa Teach Tábhairne",e:"At the Pub",cat:"social",d:4,ch:"Order a drink in Irish at a pub.",p:"Pionta, le do thoil!",pr:"PYUN-tah, leh duh hull",m:"A pint, please!",tip:"Irish in the pub? You'll make someone's night.",b:"Say 'Sláinte!' — SLAWN-cheh"},
  { day:27,t:"Ag Caint",e:"Full Conversation",cat:"immersion",d:4,ch:"Have a 2-minute conversation mixing Irish and English.",p:"An bhfuil Gaeilge agat?",pr:"Un will GAYL-geh ah-GUT",m:"Do you speak Irish?",tip:"You'd be surprised how many have 'a cúpla focal'.",b:"Chat with a Gaeilgeoir online"},
  { day:28,t:"Logainmneacha",e:"Place Names",cat:"culture",d:4,ch:"Learn the Irish meaning of 3 place names near you.",p:"Baile, Cill, Dún, Áth, Lios",pr:"BAL-yeh, Kill, Doon, Aw, Liss",m:"town, church, fort, ford, ringfort",tip:"Dublin = Dubh Linn (Black Pool). Every town tells a story.",b:"Post a place name with its meaning"},
  { day:29,t:"Múin É",e:"Teach It",cat:"immersion",d:5,ch:"Teach someone else 3 Irish phrases today.",p:"Any 3 phrases from this month!",pr:"Your choice",m:"Pass the language forward",tip:"The best way to learn is to teach.",b:"Get them to use one phrase with a real person"},
  { day:30,t:"Lá na Gaeilge",e:"Your Irish Day",cat:"immersion",d:5,ch:"Live one full day using as much Irish as possible.",p:"Tá Gaeilge agam. Tá mé bródúil.",pr:"Taw GAYL-geh ah-GUM. Taw may BROH-dool.",m:"I have Irish. I am proud.",tip:"You started with 'Dia dhuit'. Look how far you've come.",b:"Write a reflection. Share it. Inspire the next person."},
];

const CATS = { greetings:"👋", review:"🔄", food:"☕", shopping:"🛍️", opinions:"💬", social:"🤝", directions:"🧭", vocabulary:"📚", culture:"🎭", immersion:"🔥" };
const WK = [
  { name: "Fáilte", en: "Greetings & Basics", start: 0, end: 7 },
  { name: "Bia & Siopadóireacht", en: "Food & Shopping", start: 7, end: 14 },
  { name: "Daoine & Áiteanna", en: "People & Places", start: 14, end: 21 },
  { name: "Tumadh Iomlán", en: "Full Immersion", start: 21, end: 30 },
];

const T = {
  light: {
    bg:"#FAFAF5",bg2:"#F2EFE6",card:"#FFFFFF",cardAlt:"#F8F6F0",
    phrase:"#F0F5EE",phraseBd:"#C2D4BE",
    tx:"#1a1e18",tx2:"#4a5244",tx3:"#8a9082",
    acc:"#2D6A4F",acc2:"#1B4332",gold:"#A67C2E",
    bd:"#E2DED4",shadow:"0 4px 24px rgba(0,0,0,0.04)",
    doneBg:"#EDF5EB",doneBd:"#B8D4B2",doneTx:"#2D6A4F",
    nextBd:"#2D6A4F",
    tipBg:"#F5F0E8",tipBd:"#E2D8C4",tipTx:"#6B5D3E",
    btn:"linear-gradient(135deg,#2D6A4F 0%,#1B4332 100%)",btnTx:"#fff",
    progBg:"#E8E4DA",progFill:"linear-gradient(90deg,#2D6A4F,#40916C)",
    celebBg:"rgba(255,255,255,0.92)",
    dotOn:"#2D6A4F",dotOff:"#D4D0C6",dotDone:"#40916C",
  },
  dark: {
    bg:"#0F1210",bg2:"#161A17",card:"#1C211E",cardAlt:"#212823",
    phrase:"#1A2418",phraseBd:"#2D4A2A",
    tx:"#E4E2D8",tx2:"#A0A498",tx3:"#5E6258",
    acc:"#6FCF97",acc2:"#40916C",gold:"#D4A843",
    bd:"#2A2E28",shadow:"0 4px 24px rgba(0,0,0,0.3)",
    doneBg:"#1A2E1A",doneBd:"#2D5A2D",doneTx:"#6FCF97",
    nextBd:"#6FCF97",
    tipBg:"#1E1C16",tipBd:"#3A3422",tipTx:"#C4A86A",
    btn:"linear-gradient(135deg,#6FCF97 0%,#40916C 100%)",btnTx:"#0F1210",
    progBg:"#1E221E",progFill:"linear-gradient(90deg,#6FCF97,#D4A843)",
    celebBg:"rgba(15,18,16,0.92)",
    dotOn:"#6FCF97",dotOff:"#2E322E",dotDone:"#40916C",
  },
};

const loadS = () => { try { const r = localStorage.getItem("gc3"); return r ? JSON.parse(r) : null; } catch { return null; } };
const saveS = (s) => { try { localStorage.setItem("gc3", JSON.stringify(s)); } catch(e) { console.error(e); } };

// Share image generation
const genShareImage = (day, total, streak) => {
  const c = document.createElement("canvas"); c.width=600; c.height=400;
  const x = c.getContext("2d");
  // Background
  x.fillStyle="#1B4332"; x.fillRect(0,0,600,400);
  x.fillStyle="#2D6A4F"; x.fillRect(0,0,600,6);
  // Decorative circles
  x.globalAlpha=0.06;
  x.fillStyle="#6FCF97"; x.beginPath(); x.arc(500,80,120,0,Math.PI*2); x.fill();
  x.beginPath(); x.arc(80,350,80,0,Math.PI*2); x.fill();
  x.globalAlpha=1;
  // Brand
  x.fillStyle="#6FCF9766"; x.font="13px serif"; x.textAlign="center";
  x.fillText("☘ GAELTACHT CONNECT",300,45);
  // Day
  x.fillStyle="#E4E2D8"; x.font="bold 72px serif"; x.fillText(`Lá ${day}`,300,150);
  x.fillStyle="#6FCF97"; x.font="20px serif"; x.fillText("of 30 completed",300,182);
  // Phrase
  const ch = CH[day-1];
  x.fillStyle="#D4A843"; x.font="italic 26px serif"; x.fillText(`"${ch.p}"`,300,240);
  x.fillStyle="#A0A498"; x.font="16px serif"; x.fillText(ch.m,300,270);
  // Stats
  x.fillStyle="#E4E2D8"; x.font="bold 28px serif";
  x.fillText(`${total}/30`,220,340); x.fillText(streak > 1 ? `🔥 ${streak}` : "",380,340);
  x.fillStyle="#A0A498"; x.font="14px serif";
  x.fillText("days done",220,362); if(streak>1) x.fillText("day streak",380,362);
  // Footer
  x.fillStyle="#6FCF9744"; x.font="12px serif";
  x.fillText("gaeltachtconnect.ie  •  #GaeltachtConnect",300,392);
  return c.toDataURL("image/png");
};

const shareProgress = async (day, total, streak) => {
  const img = genShareImage(day, total, streak);
  if (navigator.share && navigator.canShare) {
    try {
      const blob = await(await fetch(img)).blob();
      const file = new File([blob],"gaeltacht-day-"+day+".png",{type:"image/png"});
      if(navigator.canShare({files:[file]})){
        await navigator.share({title:`Lá ${day} — Gaeltacht Connect`,text:`I just completed Day ${day} of the 30 Day Gaeltacht Challenge! 🇮🇪☘️ #GaeltachtConnect`,files:[file]});
        return;
      }
    } catch(e) { if(e.name==="AbortError") return; }
  }
  // Fallback: download
  const a=document.createElement("a"); a.href=img; a.download=`gaeltacht-day-${day}.png`; a.click();
};

const speak = (text) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.8;
  const voices = window.speechSynthesis.getVoices();
  const gaVoice = voices.find(v => v.lang.startsWith('ga'));
  if (gaVoice) u.voice = gaVoice;
  else u.lang = 'ga-IE';
  window.speechSynthesis.speak(u);
};

// Generate quiz questions from completed days
const makeQuiz = (done) => {
  const pool = done.map(d => CH[d-1]).filter(Boolean);
  if (pool.length < 2) return [];
  const shuffled = [...pool].sort(() => Math.random()-0.5).slice(0,3);
  return shuffled.map(ch => {
    const wrong = CH.filter(x=>x.day!==ch.day).sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.m);
    const opts = [...wrong, ch.m].sort(()=>Math.random()-0.5);
    return { phrase: ch.p, answer: ch.m, opts };
  });
};

// Confetti component
const Confetti = () => {
  const pieces = Array.from({length:50},(_,i)=>({
    id:i,
    left:Math.random()*100,
    delay:Math.random()*1.2,
    dur:1.8+Math.random()*0.8,
    color:['#2D6A4F','#40916C','#A67C2E','#D4A843','#6FCF97','#ffffff','#B7E4C7'][Math.floor(Math.random()*7)],
    size:6+Math.random()*8,
    round:Math.random()>0.5,
  }));
  return (
    <div style={{position:'fixed',inset:0,pointerEvents:'none',zIndex:98,overflow:'hidden'}}>
      {pieces.map(p=>(
        <div key={p.id} style={{
          position:'absolute',left:`${p.left}%`,top:-20,
          width:p.size,height:p.size,
          borderRadius:p.round?'50%':2,
          background:p.color,
          animation:`confetti-fall ${p.dur}s ${p.delay}s ease-in forwards`,
        }}/>
      ))}
    </div>
  );
};

export default function App() {
  const [st,setSt]=useState(null);
  const [loading,setLoading]=useState(true);
  const [view,setView]=useState("home"); // home | day | map | quiz
  const [selDay,setSelDay]=useState(null);
  const [celeb,setCeleb]=useState(null);
  const [dk,setDk]=useState(false);
  const [speaking,setSpeaking]=useState(false);
  const [quiz,setQuiz]=useState(null);   // array of questions
  const [quizIdx,setQuizIdx]=useState(0);
  const [quizScore,setQuizScore]=useState(0);
  const [quizPicked,setQuizPicked]=useState(null);
  const [quizDone,setQuizDone]=useState(false);
  const c = dk ? T.dark : T.light;

  useEffect(()=>{(async()=>{
    const s=await loadS();
    if(s){setSt(s);if(s.dk)setDk(true)}
    else{const i={done:[],bonus:[],streak:0,best:0,dk:false,onboarded:false,started:new Date().toISOString()};await saveS(i);setSt(i)}
    setLoading(false);
  })()},[]);

  const save=useCallback(async(ns)=>{setSt(ns);await saveS(ns)},[]);
  const toggle=async()=>{const n=!dk;setDk(n);if(st)await save({...st,dk:n})};

  const calcStreak=(arr)=>{if(!arr.length)return 0;const s=[...arr].sort((a,b)=>a-b);let k=1;for(let i=s.length-1;i>0;i--){if(s[i]-s[i-1]===1)k++;else break}return k};

  const doComplete=async(d)=>{
    if(!st||st.done.includes(d))return;
    const nd=[...st.done,d];const k=calcStreak(nd);
    await save({...st,done:nd,streak:k,best:Math.max(k,st.best)});
    setCeleb("day");
    // Trigger quiz after completing weeks 1, 2, 3
    if([7,14,21].includes(d)){
      setTimeout(()=>{
        setCeleb(null);
        setQuiz(makeQuiz(nd));
        setQuizIdx(0);setQuizScore(0);setQuizPicked(null);setQuizDone(false);
        setView("quiz");
      },2400);
    } else {
      setTimeout(()=>setCeleb(null),2200);
    }
  };
  const doBonus=async(d)=>{
    if(!st||st.bonus.includes(d))return;
    await save({...st,bonus:[...st.bonus,d]});
    setCeleb("bonus");setTimeout(()=>setCeleb(null),1500);
  };
  const doReset=async()=>{
    if(!confirm("Reset all progress? Cannot undo."))return;
    await save({done:[],bonus:[],streak:0,best:0,dk,onboarded:true,started:new Date().toISOString()});
    setView("home");setSelDay(null);
  };

  if(loading) return (<div style={{minHeight:"100vh",background:c.bg,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontFamily:"'Playfair Display',serif",color:c.acc,fontSize:"1.1rem",letterSpacing:"0.05em"}}>Ag lódáil...</span></div>);
  if(!st)return null;

  const total=st.done.length;
  const nextDay=total<30?total+1:30;
  const pct=total/30;
  const currentCh=CH[nextDay-1];
  const allDone=total===30;

  const css=`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes riseStrong{from{opacity:0;transform:translateY(50px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
@keyframes shimmer{0%,100%{opacity:0.3}50%{opacity:0.7}}
@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 ${c.acc}00}50%{box-shadow:0 0 30px 2px ${c.acc}18}}
@keyframes confetti-fall{from{transform:translateY(0) rotate(0deg);opacity:1}to{transform:translateY(110vh) rotate(720deg);opacity:0}}
@keyframes shamrock-spin{0%{transform:scale(0) rotate(-30deg)}60%{transform:scale(1.2) rotate(8deg)}100%{transform:scale(1) rotate(0deg)}}
@keyframes slide-up{from{opacity:0;transform:translateY(60px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse-ring{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.5);opacity:0}}
html{-webkit-font-smoothing:antialiased}`;

  const hd = {fontFamily:"'Playfair Display',serif"};
  const bd = {fontFamily:"'Source Serif 4',serif"};

  // ═══════════════════════════════
  // ONBOARDING
  // ═══════════════════════════════
  if(!st.onboarded){
    const features=[
      {icon:"🎯",title:"One challenge per day",desc:"Real actions in real places — not flashcards"},
      {icon:"🔊",title:"Hear how it sounds",desc:"Native pronunciation for every phrase"},
      {icon:"🔥",title:"Build a streak",desc:"30 days. One word at a time."},
    ];
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px",textAlign:"center"}}>
        <style>{css}</style>
        <div style={{maxWidth:400,width:"100%"}}>
          {/* Animated shamrock */}
          <div style={{fontSize:"5rem",marginBottom:24,display:"inline-block",animation:"shamrock-spin 0.8s cubic-bezier(0.34,1.56,0.64,1) both"}}>☘️</div>

          <h1 style={{...hd,fontSize:"2rem",fontWeight:800,color:c.tx,marginBottom:8,animation:"riseStrong 0.7s 0.2s ease both"}}>Gaeltacht Connect</h1>
          <p style={{...bd,fontSize:"1.1rem",fontStyle:"italic",color:c.tx2,marginBottom:8,animation:"riseStrong 0.7s 0.35s ease both"}}>The old words are listening.</p>
          <p style={{...bd,fontSize:"0.95rem",color:c.tx3,marginBottom:36,animation:"riseStrong 0.7s 0.45s ease both"}}>30 real challenges to bring Irish<br/>into your daily life.</p>

          {/* Features */}
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:40,animation:"riseStrong 0.7s 0.55s ease both"}}>
            {features.map((f,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:14,background:c.card,border:`1px solid ${c.bd}`,borderRadius:14,padding:"14px 18px",textAlign:"left",boxShadow:c.shadow}}>
                <span style={{fontSize:"1.4rem",flexShrink:0}}>{f.icon}</span>
                <div>
                  <div style={{...hd,fontSize:"0.9rem",fontWeight:600,color:c.tx,marginBottom:2}}>{f.title}</div>
                  <div style={{...bd,fontSize:"0.78rem",color:c.tx3}}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{animation:"riseStrong 0.7s 0.7s ease both"}}>
            <button
              onClick={async()=>await save({...st,onboarded:true})}
              style={{width:"100%",padding:"18px",borderRadius:16,background:c.btn,border:"none",color:c.btnTx,...hd,fontSize:"1.1rem",fontWeight:700,cursor:"pointer",boxShadow:"0 6px 20px rgba(45,106,79,0.3)",marginBottom:16,position:"relative",overflow:"hidden"}}
            >
              Tosaigh! — Let's go →
            </button>
            <p style={{...bd,fontSize:"0.78rem",fontStyle:"italic",color:c.tx3,lineHeight:1.6}}>
              "Is fearr Gaeilge briste ná Béarla cliste"<br/>
              <span style={{opacity:0.6}}>Broken Irish is better than clever English</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // QUIZ VIEW
  // ═══════════════════════════════
  if(view==="quiz"&&quiz){
    const q=quiz[quizIdx];
    const weekNum=Math.ceil(total/7);
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px"}}>
        <style>{css}</style>
        <div style={{maxWidth:420,width:"100%"}}>
          {!quizDone?(
            <>
              {/* Header */}
              <div style={{textAlign:"center",marginBottom:28,animation:"rise 0.5s ease"}}>
                <div style={{...bd,fontSize:"0.7rem",color:c.tx3,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:8}}>
                  Week {weekNum} Quiz · {quizIdx+1} of {quiz.length}
                </div>
                <h2 style={{...hd,fontSize:"1.3rem",fontWeight:700,color:c.tx}}>What does this mean?</h2>
              </div>

              {/* Progress dots */}
              <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:28}}>
                {quiz.map((_,i)=>(
                  <div key={i} style={{width:8,height:8,borderRadius:"50%",background:i<quizIdx?c.acc:i===quizIdx?c.acc:c.bd,opacity:i===quizIdx?1:i<quizIdx?0.8:0.3}}/>
                ))}
              </div>

              {/* Phrase card */}
              <div style={{background:c.phrase,border:`1.5px solid ${c.phraseBd}`,borderRadius:16,padding:"32px 24px",marginBottom:20,textAlign:"center",animation:"pop 0.4s ease"}}>
                <div style={{...hd,fontSize:"1.8rem",fontWeight:700,color:c.acc,marginBottom:8}}>{q.phrase}</div>
                <button onClick={()=>speak(q.phrase)} style={{background:"none",border:`1px solid ${c.phraseBd}`,borderRadius:20,padding:"5px 14px",color:c.acc,...bd,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  Éist
                </button>
              </div>

              {/* Options */}
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:24}}>
                {q.opts.map((opt,i)=>{
                  const picked=quizPicked!==null;
                  const correct=opt===q.answer;
                  const chosen=opt===quizPicked;
                  let bg=c.card,border=`1.5px solid ${c.bd}`,txColor=c.tx;
                  if(picked&&correct){bg=c.doneBg;border=`1.5px solid ${c.doneBd}`;txColor=c.doneTx;}
                  else if(picked&&chosen&&!correct){bg="#FEE2E2";border="1.5px solid #FCA5A5";txColor="#991B1B";}
                  return(
                    <button key={i} onClick={()=>{
                      if(quizPicked!==null)return;
                      setQuizPicked(opt);
                      if(opt===q.answer)setQuizScore(s=>s+1);
                      setTimeout(()=>{
                        if(quizIdx+1<quiz.length){setQuizIdx(i=>i+1);setQuizPicked(null);}
                        else setQuizDone(true);
                      },1000);
                    }} style={{
                      background:bg,border,borderRadius:12,padding:"14px 18px",
                      color:txColor,...bd,fontSize:"0.95rem",cursor:picked?"default":"pointer",
                      textAlign:"left",transition:"all 0.2s",fontWeight:chosen||correct&&picked?600:400,
                    }}>
                      {opt}{picked&&correct?" ✓":""}{picked&&chosen&&!correct?" ✗":""}
                    </button>
                  );
                })}
              </div>
            </>
          ):(
            /* Quiz results */
            <div style={{textAlign:"center",animation:"pop 0.5s ease"}}>
              <div style={{fontSize:"3.5rem",marginBottom:16}}>{quizScore===quiz.length?"🏆":quizScore>=2?"🌟":"💪"}</div>
              <h2 style={{...hd,fontSize:"1.8rem",fontWeight:700,color:c.acc,marginBottom:8}}>
                {quizScore}/{quiz.length}
              </h2>
              <p style={{...bd,fontSize:"1rem",color:c.tx2,marginBottom:6}}>
                {quizScore===quiz.length?"Ar fheabhas! Perfect score!":quizScore>=2?"Maith go leor! Well done!":"Coinnigh ort! Keep going!"}
              </p>
              <p style={{...bd,fontSize:"0.85rem",color:c.tx3,fontStyle:"italic",marginBottom:32}}>
                {quizScore===quiz.length?"You really know your Irish!":"Practice makes perfect — keep speaking!"}
              </p>
              <button onClick={()=>{setView("home");setQuiz(null);}} style={{width:"100%",padding:"16px",borderRadius:14,background:c.btn,border:"none",color:c.btnTx,...hd,fontSize:"1rem",fontWeight:700,cursor:"pointer"}}>
                Ar aghaidh! — Continue →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // DAY DETAIL
  // ═══════════════════════════════
  if(view==="day"&&selDay){
    const ch=CH[selDay-1];
    const done=st.done.includes(ch.day);
    const bDone=st.bonus.includes(ch.day);
    const locked=ch.day>1&&!st.done.includes(ch.day-1)&&!done;

    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,transition:"background 0.4s"}}>
        <style>{css}</style>
        {/* Nav */}
        <div style={{padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <button onClick={()=>{setView("home");setSelDay(null)}} style={{background:"none",border:"none",color:c.acc,...hd,fontSize:"0.9rem",cursor:"pointer",letterSpacing:"0.02em"}}>← Back</button>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{...bd,fontSize:"0.78rem",color:c.tx3}}>Day {ch.day} of 30</span>
            <div style={{display:"flex",gap:2}}>{[1,2,3,4,5].map(i=><div key={i} style={{width:4,height:4,borderRadius:2,background:i<=ch.d?c.acc:c.bd}}/>)}</div>
          </div>
        </div>

        {locked?(
          <div style={{padding:"120px 32px",textAlign:"center",animation:"rise 0.5s ease"}}>
            <div style={{fontSize:"3.5rem",marginBottom:20,filter:"grayscale(0.5)"}}>🔒</div>
            <h2 style={{...hd,color:c.tx3,fontSize:"1.3rem",fontWeight:600}}>Glasáilte</h2>
            <p style={{...bd,color:c.tx3,marginTop:10}}>Complete Day {ch.day-1} first.</p>
          </div>
        ):(
          <div style={{padding:"12px 22px 40px",maxWidth:520,margin:"0 auto",animation:"rise 0.5s ease"}}>
            {/* Category pill */}
            <div style={{marginBottom:20}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:20,padding:"5px 14px 5px 10px"}}>
                <span style={{fontSize:"0.9rem"}}>{CATS[ch.cat]}</span>
                <span style={{...bd,fontSize:"0.72rem",color:c.tx3,letterSpacing:"0.08em",textTransform:"uppercase"}}>{ch.cat}</span>
              </span>
            </div>

            {/* Title */}
            <h1 style={{...hd,fontSize:"2rem",fontWeight:700,color:c.tx,lineHeight:1.15,marginBottom:3}}>{ch.t}</h1>
            <p style={{...bd,fontSize:"1rem",color:c.tx3,fontStyle:"italic",marginBottom:28}}>{ch.e}</p>

            {/* Challenge */}
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,padding:"22px 20px",marginBottom:16,boxShadow:c.shadow}}>
              <p style={{...bd,fontSize:"1.1rem",color:c.tx2,lineHeight:1.65}}>{ch.ch}</p>
            </div>

            {/* Phrase */}
            <div style={{background:c.phrase,border:`1.5px solid ${c.phraseBd}`,borderRadius:16,padding:"28px 22px",marginBottom:16,textAlign:"center",animation:done?"none":"breathe 4s ease-in-out infinite"}}>
              <div style={{...hd,fontSize:"1.65rem",fontWeight:700,color:c.acc,lineHeight:1.3,marginBottom:10}}>{ch.p}</div>
              <div style={{...bd,fontSize:"0.95rem",color:c.tx3,fontStyle:"italic",marginBottom:5}}>/{ch.pr}/</div>
              <div style={{...bd,fontSize:"0.9rem",color:c.tx2,marginBottom:16}}>{ch.m}</div>
              <button
                onClick={()=>{
                  setSpeaking(true);
                  speak(ch.p);
                  setTimeout(()=>setSpeaking(false),2000);
                }}
                style={{
                  display:"inline-flex",alignItems:"center",gap:7,
                  background:speaking?c.acc:"none",
                  border:`1.5px solid ${c.phraseBd}`,
                  borderRadius:20,padding:"8px 18px",
                  color:speaking?c.btnTx:c.acc,
                  ...bd,fontSize:"0.85rem",cursor:"pointer",
                  transition:"all 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                  <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                {speaking ? "Ag caint..." : "Éist"}
              </button>
            </div>

            {/* Tip */}
            <div style={{background:c.tipBg,border:`1px solid ${c.tipBd}`,borderRadius:12,padding:"14px 18px",marginBottom:16,display:"flex",gap:12,alignItems:"flex-start"}}>
              <span style={{fontSize:"0.85rem",marginTop:2,flexShrink:0}}>💡</span>
              <p style={{...bd,fontSize:"0.9rem",color:c.tipTx,lineHeight:1.55,margin:0}}>{ch.tip}</p>
            </div>

            {/* Bonus */}
            <div style={{background:bDone?c.doneBg:c.cardAlt,border:`1px solid ${bDone?c.doneBd:c.bd}`,borderRadius:12,padding:"14px 18px",marginBottom:28,display:"flex",alignItems:"center",gap:12}}>
              <span style={{fontSize:"0.8rem"}}>⭐</span>
              <div style={{flex:1}}>
                <div style={{...hd,fontSize:"0.65rem",color:c.gold,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:2}}>Bonus challenge</div>
                <p style={{...bd,fontSize:"0.88rem",color:c.tx2,margin:0,lineHeight:1.45}}>{ch.b}</p>
              </div>
              {done&&!bDone&&<button onClick={()=>doBonus(ch.day)} style={{background:"none",border:`1.5px solid ${c.gold}66`,borderRadius:8,padding:"6px 14px",color:c.gold,...hd,fontSize:"0.7rem",fontWeight:600,cursor:"pointer"}}>Done</button>}
              {bDone&&<span>✅</span>}
            </div>

            {/* Action */}
            {!done?(
              <button onClick={()=>doComplete(ch.day)} style={{width:"100%",padding:"18px",borderRadius:14,background:c.btn,border:"none",color:c.btnTx,...hd,fontSize:"1rem",fontWeight:700,letterSpacing:"0.04em",cursor:"pointer",boxShadow:"0 4px 16px rgba(45,106,79,0.25)"}}>
                Déanta ✓
              </button>
            ):(
              <div style={{textAlign:"center"}}>
                <div style={{width:"100%",padding:"16px",borderRadius:14,background:c.doneBg,border:`1px solid ${c.doneBd}`,...hd,fontSize:"0.95rem",color:c.doneTx,fontWeight:700,marginBottom:14}}>✅ Completed</div>
                <button onClick={()=>shareProgress(ch.day,total,st.streak)} style={{background:"none",border:`1.5px solid ${c.bd}`,borderRadius:10,padding:"10px 22px",color:c.tx2,...bd,fontSize:"0.85rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                  Share progress
                </button>
              </div>
            )}

            {/* Nav arrows */}
            <div style={{display:"flex",justifyContent:"space-between",marginTop:20}}>
              {ch.day>1?<button onClick={()=>setSelDay(ch.day-1)} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:10,padding:"9px 18px",color:c.tx3,...hd,fontSize:"0.78rem",cursor:"pointer"}}>← Lá {ch.day-1}</button>:<div/>}
              {ch.day<30&&<button onClick={()=>setSelDay(ch.day+1)} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:10,padding:"9px 18px",color:c.tx3,...hd,fontSize:"0.78rem",cursor:"pointer"}}>Lá {ch.day+1} →</button>}
            </div>
          </div>
        )}

        {/* Celebrations */}
        {celeb==="day"&&(
          <>
            <Confetti/>
            <div onClick={()=>setCeleb(null)} style={{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:c.celebBg,zIndex:100}}>
              <div style={{textAlign:"center",animation:"pop 0.5s ease",position:"relative"}}>
                {/* Pulse ring */}
                <div style={{position:"absolute",inset:-20,borderRadius:"50%",border:`3px solid ${c.acc}`,animation:"pulse-ring 1s ease-out infinite"}}/>
                <div style={{fontSize:"4rem",marginBottom:14}}>🎉</div>
                <div style={{...hd,fontSize:"2rem",fontWeight:800,color:c.acc}}>Maith thú!</div>
                <div style={{...bd,fontSize:"1rem",color:c.tx2,marginTop:8}}>Day {selDay} complete</div>
                {[7,14,21].includes(selDay)&&(
                  <div style={{...bd,fontSize:"0.82rem",color:c.gold,marginTop:10,fontStyle:"italic"}}>Week {selDay/7} done — quiz incoming! ✨</div>
                )}
                <div style={{...bd,fontSize:"0.75rem",color:c.tx3,marginTop:16,opacity:0.6}}>tap to continue</div>
              </div>
            </div>
          </>
        )}
        {celeb==="bonus"&&(
          <div style={{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",zIndex:100,background:c.card,border:`1px solid ${c.gold}44`,borderRadius:12,padding:"10px 22px",...hd,fontSize:"0.85rem",color:c.gold,animation:"pop 0.3s",boxShadow:c.shadow}}>⭐ Bonus!</div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════
  // MAP VIEW (all 30 days)
  // ═══════════════════════════════
  if(view==="map"){
    return (
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,transition:"background 0.4s"}}>
        <style>{css}</style>

        {/* Header with branding */}
        <div style={{padding:"20px 22px 16px",borderBottom:`1px solid ${c.bd}`,maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <button onClick={()=>setView("home")} style={{background:"none",border:"none",color:c.acc,...hd,fontSize:"0.9rem",cursor:"pointer"}}>← Back</button>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:"0.85rem"}}>☘️</span>
              <span style={{...hd,fontSize:"0.68rem",fontWeight:600,color:c.acc,letterSpacing:"0.05em"}}>GAELTACHT CONNECT</span>
            </div>
            <button onClick={toggle} style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,width:30,height:30,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem"}}>{dk?"☀️":"🌙"}</button>
          </div>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:"0 18px"}}>
          {/* Stats bar */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:20,padding:"24px 0 8px",flexWrap:"wrap"}}>
            <div style={{textAlign:"center"}}>
              <div style={{...hd,fontSize:"1.8rem",fontWeight:800,color:c.acc}}>{total}</div>
              <div style={{...bd,fontSize:"0.68rem",color:c.tx3}}>completed</div>
            </div>
            <div style={{width:1,height:28,background:c.bd}}/>
            <div style={{textAlign:"center"}}>
              <div style={{...hd,fontSize:"1.8rem",fontWeight:800,color:c.gold}}>{st.bonus.length}</div>
              <div style={{...bd,fontSize:"0.68rem",color:c.tx3}}>bonus</div>
            </div>
            {st.streak>=2&&<>
              <div style={{width:1,height:28,background:c.bd}}/>
              <div style={{display:"flex",alignItems:"center",gap:5,background:`${c.gold}12`,border:`1px solid ${c.gold}28`,borderRadius:16,padding:"5px 14px"}}>
                <span style={{fontSize:"0.85rem"}}>🔥</span>
                <span style={{...hd,fontSize:"0.78rem",fontWeight:600,color:c.gold}}>{st.streak}</span>
              </div>
            </>}
          </div>

          {/* Progress bar */}
          <div style={{margin:"8px auto 28px",maxWidth:400,height:5,borderRadius:3,background:c.progBg,overflow:"hidden"}}>
            <div style={{width:`${pct*100}%`,height:"100%",borderRadius:3,background:c.progFill,transition:"width 0.6s ease"}}/>
          </div>

          {/* Motivation quote */}
          <div style={{textAlign:"center",marginBottom:28}}>
            <p style={{...bd,fontSize:"0.88rem",fontStyle:"italic",color:c.tx3}}>
              {total===0?"Your journey begins with a single word."
              :total<10?"Every word you speak makes the language stronger."
              :total<20?"You're not just learning — you're reviving."
              :total<30?"Almost there. The old words are proud of you."
              :"Tá Gaeilge agat. You did it."}
            </p>
          </div>

          {/* Weeks */}
          {WK.map((w,wi)=>(
            <div key={wi} style={{marginBottom:28}}>
              <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:10,padding:"0 4px"}}>
                <span style={{...hd,fontSize:"0.8rem",fontWeight:700,color:c.acc}}>Week {wi+1}</span>
                <span style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{w.name}</span>
                <div style={{flex:1,height:1,background:c.bd}}/>
                <span style={{...bd,fontSize:"0.6rem",color:c.tx3}}>{st.done.filter(d=>d>w.start&&d<=w.end).length}/{w.end-w.start}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:8}}>
                {CH.slice(w.start,w.end).map(ch=>{
                  const dn=st.done.includes(ch.day);const bn=st.bonus.includes(ch.day);
                  const lk=ch.day>1&&!st.done.includes(ch.day-1)&&!dn;
                  const nx=!dn&&!lk;
                  return (
                    <button key={ch.day} onClick={()=>{setSelDay(ch.day);setView("day")}} style={{
                      background:dn?c.doneBg:nx?c.card:c.cardAlt,
                      border:`1.5px solid ${dn?c.doneBd:nx?c.nextBd:c.bd}`,
                      borderRadius:12,padding:"14px 12px",cursor:lk?"not-allowed":"pointer",
                      opacity:lk?0.25:1,textAlign:"left",width:"100%",transition:"all 0.2s",
                      boxShadow:nx?c.shadow:"none",
                    }}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                        <span style={{...hd,fontSize:"0.6rem",color:c.tx3,fontWeight:600}}>LÁ {ch.day}</span>
                        <span style={{fontSize:"0.65rem"}}>{dn?"✅":lk?"🔒":CATS[ch.cat]}{bn?" ⭐":""}</span>
                      </div>
                      <div style={{...hd,fontSize:"0.82rem",fontWeight:600,color:dn?c.doneTx:nx?c.tx:c.tx3,lineHeight:1.25,marginBottom:2}}>{ch.t}</div>
                      <div style={{...bd,fontSize:"0.7rem",color:c.tx3,fontStyle:"italic"}}>{ch.e}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Footer */}
          <div style={{textAlign:"center",padding:"20px 0 16px",borderTop:`1px solid ${c.bd}`}}>
            <p style={{...bd,fontSize:"0.82rem",fontStyle:"italic",color:c.tx3,lineHeight:1.5,marginBottom:12}}>
              "Is fearr Gaeilge briste ná Béarla cliste"
            </p>
            <div style={{...bd,fontSize:"0.7rem",color:c.tx3,opacity:0.5,marginBottom:16}}>
              ☘️ Gaeltacht Connect — Built in Ireland
            </div>
            <div style={{display:"flex",justifyContent:"center",gap:16,alignItems:"center",flexWrap:"wrap"}}>
              <span style={{...bd,fontSize:"0.68rem",color:c.tx3,opacity:0.4}}>hello@gaeltachtconnect.ie</span>
              <span style={{...bd,fontSize:"0.68rem",color:c.tx3,opacity:0.4}}>•</span>
              <button onClick={doReset} style={{background:"none",border:"none",color:c.tx3,...bd,fontSize:"0.65rem",cursor:"pointer",opacity:0.3,textDecoration:"underline"}}>Reset progress</button>
            </div>
          </div>

          <div style={{height:40}}/>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // HOME — ONE DAY IN FOCUS
  // ═══════════════════════════════
  return(
    <div style={{minHeight:"100vh",background:c.bg,color:c.tx,transition:"background 0.4s, color 0.4s"}}>
      <style>{css}</style>

      <div style={{maxWidth:520,margin:"0 auto",padding:"0 22px"}}>
        {/* Top bar */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 0 0"}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{fontSize:"1rem"}}>☘️</span>
            <span style={{...hd,fontSize:"0.72rem",fontWeight:600,color:c.acc,letterSpacing:"0.06em"}}>GAELTACHT CONNECT</span>
          </div>
          <button onClick={toggle} style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:14,width:32,height:32,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:c.shadow}}>
            <span style={{fontSize:"0.8rem"}}>{dk?"☀️":"🌙"}</span>
          </button>
        </div>

        {/* Emotional headline */}
        <div style={{padding:"48px 0 36px",textAlign:"center",animation:"rise 0.8s ease"}}>
          <h1 style={{...hd,fontSize:"clamp(1.4rem, 5vw, 1.8rem)",fontWeight:400,fontStyle:"italic",color:c.tx2,lineHeight:1.45,marginBottom:20}}>
            The old words are listening.<br/>
            <span style={{fontWeight:700,fontStyle:"normal",color:c.tx}}>Will you speak?</span>
          </h1>

          {/* Progress ring */}
          <div style={{position:"relative",width:130,height:130,margin:"0 auto 20px"}}>
            <svg width="130" height="130" viewBox="0 0 130 130" style={{transform:"rotate(-90deg)"}}>
              <circle cx="65" cy="65" r="56" fill="none" stroke={c.progBg} strokeWidth="6"/>
              <circle cx="65" cy="65" r="56" fill="none" stroke={c.acc} strokeWidth="6"
                strokeDasharray={`${pct*352} 352`} strokeLinecap="round"
                style={{transition:"stroke-dasharray 0.8s ease"}}/>
            </svg>
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <span style={{...hd,fontSize:"2.2rem",fontWeight:800,color:c.acc,lineHeight:1}}>{total}</span>
              <span style={{...bd,fontSize:"0.68rem",color:c.tx3}}>of 30 days</span>
            </div>
          </div>

          {/* Streak */}
          {st.streak>=2&&(
            <div style={{display:"inline-flex",alignItems:"center",gap:5,background:`${c.gold}12`,border:`1px solid ${c.gold}28`,borderRadius:16,padding:"5px 14px",animation:"fadeIn 0.5s"}}>
              <span style={{fontSize:"0.85rem"}}>🔥</span>
              <span style={{...hd,fontSize:"0.78rem",fontWeight:600,color:c.gold}}>{st.streak} day streak</span>
            </div>
          )}
        </div>

        {/* Today's challenge card */}
        {!allDone?(
          <div style={{animation:"rise 0.8s ease 0.2s both"}}>
            <div style={{...bd,fontSize:"0.7rem",color:c.tx3,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:10,paddingLeft:4}}>
              {st.done.includes(nextDay)?"✅ Today — completed":"☘ Today's challenge"}
            </div>
            <button onClick={()=>{setSelDay(nextDay);setView("day")}} style={{
              width:"100%",background:c.card,border:`2px solid ${c.nextBd}`,borderRadius:20,
              padding:"28px 24px",cursor:"pointer",textAlign:"left",boxShadow:c.shadow,
              transition:"all 0.3s",animation:"glow 3s ease-in-out infinite",position:"relative",overflow:"hidden",
            }}>
              {/* Decorative */}
              <div style={{position:"absolute",top:-30,right:-30,width:100,height:100,borderRadius:"50%",background:`${c.acc}06`}}/>
              <div style={{position:"relative"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{...hd,fontSize:"0.7rem",fontWeight:600,color:c.acc,letterSpacing:"0.05em"}}>LÁ {nextDay}</span>
                      <span style={{fontSize:"0.8rem"}}>{CATS[currentCh.cat]}</span>
                    </div>
                    <h2 style={{...hd,fontSize:"1.5rem",fontWeight:700,color:c.tx,marginBottom:3}}>{currentCh.t}</h2>
                    <p style={{...bd,fontSize:"0.88rem",color:c.tx3,fontStyle:"italic"}}>{currentCh.e}</p>
                  </div>
                  <div style={{...hd,fontSize:"1.8rem",color:c.acc,opacity:0.2,fontWeight:800}}>{nextDay}</div>
                </div>

                {/* Phrase preview */}
                <div style={{background:c.phrase,border:`1px solid ${c.phraseBd}`,borderRadius:12,padding:"16px 18px",marginBottom:14,textAlign:"center"}}>
                  <div style={{...hd,fontSize:"1.25rem",fontWeight:700,color:c.acc,marginBottom:4}}>{currentCh.p}</div>
                  <div style={{...bd,fontSize:"0.82rem",color:c.tx3,fontStyle:"italic"}}>/{currentCh.pr}/</div>
                </div>

                <p style={{...bd,fontSize:"0.95rem",color:c.tx2,lineHeight:1.55}}>{currentCh.ch}</p>

                <div style={{marginTop:16,display:"flex",alignItems:"center",justifyContent:"center",gap:6,color:c.acc,...hd,fontSize:"0.85rem",fontWeight:600}}>
                  Open challenge
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </button>
          </div>
        ):(
          <div style={{textAlign:"center",padding:"40px 0",animation:"rise 0.6s"}}>
            <div style={{fontSize:"3rem",marginBottom:14}}>🏆</div>
            <h2 style={{...hd,fontSize:"1.5rem",color:c.acc,fontWeight:700}}>30 Lá — Déanta!</h2>
            <p style={{...bd,fontSize:"1rem",color:c.tx2,marginTop:8}}>You completed the 30 Day Gaeltacht Challenge.<br/>Tá Gaeilge agat. Tá mé bródúil.</p>
            <button onClick={()=>shareProgress(30,30,st.streak)} style={{marginTop:20,background:c.btn,border:"none",borderRadius:12,padding:"14px 28px",color:c.btnTx,...hd,fontSize:"0.9rem",fontWeight:700,cursor:"pointer"}}>Share your achievement</button>
          </div>
        )}

        {/* Week progress dots */}
        <div style={{marginTop:36,animation:"rise 0.8s ease 0.4s both"}}>
          <button onClick={()=>setView("map")} style={{
            width:"100%",background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:16,
            padding:"20px",cursor:"pointer",transition:"all 0.3s",
          }}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <span style={{...hd,fontSize:"0.75rem",fontWeight:600,color:c.tx2}}>Your journey</span>
              <span style={{...bd,fontSize:"0.72rem",color:c.acc}}>View all →</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {WK.map((w,wi)=>(
                <div key={wi} style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{...bd,fontSize:"0.65rem",color:c.tx3,width:22,textAlign:"right"}}>{wi+1}</span>
                  <div style={{display:"flex",gap:4,flex:1}}>
                    {CH.slice(w.start,w.end).map(ch=>{
                      const dn=st.done.includes(ch.day);
                      const nx=ch.day===nextDay;
                      return <div key={ch.day} style={{
                        width:nx?14:10,height:nx?14:10,borderRadius:"50%",
                        background:dn?c.dotDone:nx?c.dotOn:"transparent",
                        border:`2px solid ${dn?c.dotDone:nx?c.dotOn:c.dotOff}`,
                        transition:"all 0.3s",
                        boxShadow:nx?`0 0 8px ${c.acc}44`:"none",
                      }}/>;
                    })}
                  </div>
                  <span style={{...bd,fontSize:"0.6rem",color:c.tx3,width:28}}>{st.done.filter(d=>d>w.start&&d<=w.end).length}/{w.end-w.start}</span>
                </div>
              ))}
            </div>
          </button>
        </div>

        {/* Proverb footer */}
        <div style={{textAlign:"center",padding:"36px 0 48px",animation:"fadeIn 1s ease 0.6s both"}}>
          <p style={{...bd,fontSize:"0.85rem",fontStyle:"italic",color:c.tx3,lineHeight:1.6}}>
            "Is fearr Gaeilge briste<br/>ná Béarla cliste"
          </p>
          <p style={{...bd,fontSize:"0.7rem",color:c.tx3,marginTop:6,opacity:0.6}}>Broken Irish is better than clever English</p>
        </div>
      </div>
    </div>
  );
}
