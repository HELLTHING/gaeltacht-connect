import { useState, useEffect, useCallback } from "react";
import { FionnSays } from "./Fionn";

const CH = [
  { day:1,t:"An Chéad Lá",e:"First Step",cat:"greetings",d:1,ch:"Say 'Dia dhuit' to someone today — a shop worker, neighbour, or colleague.",p:"Dia dhuit!",pr:"DEE-ah gwit",m:"Hello",tip:"If they reply 'Dia is Muire dhuit' — they know Irish! You've found a fellow Gaeilgeoir.",b:"Try it with 3 different people",tasks:[{icon:"🗣️",text:"Say 'Dia dhuit' to 3 real people today — shop, neighbour, anyone. Count them."},{icon:"📱",text:"Text your most sceptical friend 'Dia dhuit!' and screenshot their reply"},{icon:"🧠",text:"'Dia dhuit' literally means 'God be with you'. The reply is 'God and Mary be with you'. Say it knowing that."}]},
  { day:2,t:"Go Raibh Maith Agat",e:"Gratitude",cat:"greetings",d:1,ch:"Replace every 'thank you' today with 'Go raibh maith agat'.",p:"Go raibh maith agat!",pr:"Guh rev mah ah-gut",m:"Thank you",tip:"In a shop, after paying — just say it with a smile. Most Irish people will light up.",b:"Use it at least 5 times today",tasks:[{icon:"🎯",text:"Use it EVERY time someone does anything for you today — not once, every single time"},{icon:"📱",text:"Text your mam, dad, or best friend 'Go raibh maith agat' for something real. See if they know it."},{icon:"🔢",text:"Count how many times you said it today. Share your score with someone."}]},
  { day:3,t:"Slán Go Fóill",e:"Farewell",cat:"greetings",d:1,ch:"End every conversation today with 'Slán' or 'Slán go fóill'.",p:"Slán go fóill!",pr:"Slawn guh FOHL",m:"Goodbye for now",tip:"'Slán' alone works too. Short, warm, memorable.",b:"Wave and say it to your postman or delivery driver",tasks:[{icon:"📞",text:"End one phone call today with 'Slán go fóill' instead of 'bye'. Just try it."},{icon:"✍️",text:"Write this week's 3 phrases on your arm — old-school revision. Wash it off tonight."},{icon:"🧠",text:"'Slán' comes from 'sláinte' — health. You're wishing someone safe health as you part. Feel that."}]},
  { day:4,t:"Conas Atá Tú?",e:"How Are You?",cat:"greetings",d:1,ch:"Ask someone 'Conas atá tú?' and see if they respond in Irish.",p:"Conas atá tú?",pr:"KUN-us ah-TAW too",m:"How are you?",tip:"If they look puzzled, smile and translate. You're planting seeds.",b:"Learn the reply: 'Tá mé go maith' — TAW may guh mah",tasks:[{icon:"🗣️",text:"Ask a real person today and wait — even 5 seconds of confused silence is worth it"},{icon:"🔄",text:"Practice the full loop: 'Conas atá tú?' → 'Tá mé go maith. Agus tú?' → repeat. Do it 3 times."},{icon:"⏰",text:"Set a phone reminder at 3pm that says 'Conas atá tú?' — ask the next person you see"}]},
  { day:5,t:"Maidin Mhaith",e:"Good Morning",cat:"greetings",d:1,ch:"Start your morning by greeting someone with 'Maidin mhaith'.",p:"Maidin mhaith!",pr:"MAH-jin wah",m:"Good morning",tip:"Perfect for the coffee shop, the school gate, or passing a neighbour.",b:"Also try 'Tráthnóna maith' — TRAW-NOH-nah mah",tasks:[{icon:"⏰",text:"Change your morning alarm label to 'Maidin mhaith!' — wake up with Irish every day"},{icon:"🗣️",text:"Say it to the first human you see tomorrow. Not your phone. A human."},{icon:"📱",text:"Post 'Maidin mhaith ☀️' on your WhatsApp status. Count how many people ask what it means."}]},
  { day:6,t:"Le Do Thoil",e:"Please",cat:"greetings",d:1,ch:"Add 'le do thoil' to any request today — at a counter, in a shop, anywhere.",p:"Le do thoil",pr:"leh duh hull",m:"Please",tip:"Even in English: 'A coffee, le do thoil' — mixing is fine and normalises the language.",b:"Combine with Day 2: 'Go raibh maith agat' after",tasks:[{icon:"🗣️",text:"Order one thing today with ONLY Irish first: '[item], le do thoil'. Say nothing in English until after."},{icon:"🔗",text:"Chain the full transaction: 'Caife, le do thoil' → receive it → 'Go raibh maith agat' → 'Slán'. You know all of this."},{icon:"🤔",text:"Notice: does saying 'please' in Irish feel different? More deliberate? That's not an accident."}]},
  { day:7,t:"Lá na Seachtaine",e:"Weekly Review",cat:"review",d:1,ch:"Use ALL the phrases from this week in one outing — greet, thank, ask, say goodbye.",p:"Dia dhuit → Conas atá tú? → Go raibh maith agat → Slán!",pr:"Full conversation flow",m:"A complete mini-conversation",tip:"A café is the perfect place for a full cycle.",b:"Journal one sentence about how it felt",tasks:[{icon:"⏱️",text:"Time yourself saying all 6 phrases in a row. Can you beat 12 seconds?"},{icon:"☕",text:"Go to a café and use the full sequence: greet → order → thank → goodbye. All in Irish."},{icon:"✍️",text:"Write one honest sentence about what surprised you most this week."}]},
  { day:8,t:"Caife, Le Do Thoil",e:"Coffee Time",cat:"food",d:2,ch:"Order a drink in Irish at a café. Even partially counts!",p:"Caife, le do thoil",pr:"KAH-feh, leh duh hull",m:"Coffee, please",tip:"If they ask 'what size?' just answer in English — that's fine.",b:"Try 'Tae' (tay) or 'Uisce' (ISH-keh)",tasks:[{icon:"☕",text:"Go to a café specifically to order in Irish today. This is the mission."},{icon:"👀",text:"Watch the barista's face. If they smile or reply in Irish — you've found your people."},{icon:"📸",text:"Photo your drink with caption 'Caife, le do thoil ☕' and tag someone to try it"}]},
  { day:9,t:"Cé Mhéad?",e:"How Much?",cat:"shopping",d:2,ch:"Ask 'Cé mhéad?' when buying something today.",p:"Cé mhéad?",pr:"Kay VAYD",m:"How much?",tip:"Point at the item and ask. Even if the price is visible.",b:"Learn 1-5: a haon, a dó, a trí, a ceathair, a cúig",tasks:[{icon:"🛒",text:"Ask 'Cé mhéad?' for every purchase today — even at self-checkout. Point if needed."},{icon:"🔢",text:"Count 20 objects near you right now in Irish. Race yourself — go."},{icon:"💶",text:"Next time you get change, count it in Irish. €2.50 = dhá euro caoga."}]},
  { day:10,t:"Tá Ocras Orm",e:"I'm Hungry",cat:"food",d:2,ch:"Tell someone 'Tá ocras orm' before a meal today.",p:"Tá ocras orm",pr:"Taw UK-rus ur-um",m:"I'm hungry (hunger is on me)",tip:"Irish puts feelings ON you, not IN you. Beautiful.",b:"Also: 'Tá tart orm' (I'm thirsty)",tasks:[{icon:"🗣️",text:"Say 'Tá ocras orm' before EVERY meal today. Get your household saying it too."},{icon:"🧠",text:"Learn what else can be 'orm': brón (sadness), fearg (anger), eagla (fear), náire (shame). Irish puts it all ON you."},{icon:"📱",text:"Text someone 'Tá ocras orm' right before lunch and see if they work it out"}]},
  { day:11,t:"An Bhfuil...?",e:"Do You Have?",cat:"shopping",d:2,ch:"Ask 'An bhfuil ___ agaibh?' in a shop.",p:"An bhfuil bainne agaibh?",pr:"Un will BAHN-yeh ah-GIV",m:"Do you have milk?",tip:"Swap: arán (bread), siúcra (sugar), uisce (water)",b:"Try it in a different shop than usual",tasks:[{icon:"🛍️",text:"Actually ask in a real shop: 'An bhfuil [arán] agaibh?' — point at the shelf if needed"},{icon:"🎯",text:"Ask 'An bhfuil Gaeilge agat?' to one person today. You might be very surprised."},{icon:"✍️",text:"Write 5 things you'd ask for in a shop — in Irish. Put it in your pocket before you go."}]},
  { day:12,t:"Is Maith Liom",e:"I Like",cat:"opinions",d:2,ch:"Express a preference: 'Is maith liom ___'",p:"Is maith liom caife!",pr:"Iss mah lyum KAH-feh",m:"I like coffee!",tip:"Opposite: 'Ní maith liom' — Nee mah lyum",b:"Tell someone what food you like in Irish",tasks:[{icon:"🗣️",text:"Tell 3 people (in person or text) something you love — 'Is breá liom ___' — in Irish"},{icon:"↔️",text:"Learn both sides today: 'Is maith liom' (I like) AND 'Ní maith liom' (I don't like). Use both."},{icon:"📝",text:"Write your 5 favourite things in Irish. Stick it somewhere you see every day."}]},
  { day:13,t:"An Aimsir",e:"The Weather",cat:"social",d:2,ch:"Comment on the weather in Irish. In Ireland, this IS social currency.",p:"Tá sé fuar inniu!",pr:"Taw shay FOO-er in-YOO",m:"It's cold today!",tip:"Swap: fliuch (wet), te (hot), go hálainn (beautiful)",b:"Try a weather comment with a stranger",tasks:[{icon:"🌤️",text:"Step outside, look up, and say exactly what you see in Irish — out loud, right now"},{icon:"📱",text:"Send someone an Irish weather report: 'Tá sé [fuar/fliuch/go hálainn] inniu!' Make it dramatic."},{icon:"📺",text:"Open Met Éireann online — their forecast exists in Irish. Read one sentence of it."}]},
  { day:14,t:"Ag Siopadóireacht",e:"Shopping Trip",cat:"review",d:2,ch:"Full shopping trip using as much Irish as possible.",p:"Weeks 1 & 2 combined",pr:"Full immersion run",m:"A real-world practice session",tip:"The goal is USING the language, not perfection.",b:"Count your items in Irish at the checkout",tasks:[{icon:"📝",text:"Write your shopping list in Irish BEFORE you go. Even 5 items. It's preparation."},{icon:"🎯",text:"In the shop: greet in Irish, ask 'Cé mhéad?', count your items, say 'Go raibh maith agat'. That's 4."},{icon:"🏆",text:"Count how many Irish words you used during the whole trip. Beat your personal record."}]},
  { day:15,t:"Cad is Ainm Duit?",e:"What's Your Name?",cat:"social",d:3,ch:"Introduce yourself in Irish or ask someone's name.",p:"Is mise ___. Cad is ainm duit?",pr:"Iss MISH-eh ___. Cod iss AN-im dit?",m:"I'm ___. What's your name?",tip:"Check if there's a Ciorcal Comhrá near you!",b:"Find and attend a conversation circle this week",tasks:[{icon:"🏷️",text:"Look up the Irish form of your name — this is your Irish name now. Say it."},{icon:"✍️",text:"Write your full intro: 'Is mise [name]. Is as [town] mé. Tá mé ag foghlaim Gaeilge.' Memorise it."},{icon:"🔍",text:"Search 'Ciorcal Comhrá' + your town. Note when it meets. You could go this week."}]},
  { day:16,t:"Cá Bhfuil?",e:"Where Is?",cat:"directions",d:3,ch:"Ask for directions in Irish.",p:"Cá bhfuil an leithreas?",pr:"Kaw will un LEH-ras",m:"Where is the toilet?",tip:"The most practical phrase in any language!",b:"Navigate using Irish place names on signs",tasks:[{icon:"🚻",text:"Ask 'Cá bhfuil an leithreas?' somewhere today. Most useful phrase in any language."},{icon:"🗺️",text:"During your commute, read every Irish place name on signs BEFORE the English version."},{icon:"📍",text:"Find one street in your town with an Irish name. Look up what it means."}]},
  { day:17,t:"As Éirinn",e:"From Ireland",cat:"social",d:3,ch:"Tell someone where you're from in Irish.",p:"Is as ___ mé",pr:"Iss oss ___ may",m:"I'm from ___",tip:"Dublin = Baile Átha Cliath, Cork = Corcaigh, Galway = Gaillimh",b:"Ask: 'Cá as tú?' — Kaw oss too?",tasks:[{icon:"🔍",text:"Look up your town's Irish name AND its meaning. The history will surprise you."},{icon:"🗣️",text:"Tell someone today: 'Is as [Irish name] mé' — in person or on the phone"},{icon:"📱",text:"Text the Irish name of your hometown to one person with its meaning. Blow their mind."}]},
  { day:18,t:"Teaghlach",e:"Family",cat:"social",d:3,ch:"Learn and use one family word today.",p:"Mo mháthair / m'athair / mo pháiste",pr:"Muh WAH-her / MAH-her / muh FAW-shteh",m:"My mother / father / child",tip:"Family talk is deeply meaningful in Irish culture.",b:"Teach a family member one Irish phrase",tasks:[{icon:"👶",text:"Teach the youngest person in your family one Irish word today. Kids absorb it instantly."},{icon:"📞",text:"Call or text one family member and use an Irish word with them — even just 'Slán'"},{icon:"✍️",text:"Write out your full family tree in Irish: máthair, athair, deartháir, deirfiúr..."}]},
  { day:19,t:"Dathanna",e:"Colours",cat:"vocabulary",d:3,ch:"Point out colours in Irish during your day.",p:"Dearg, glas, gorm, bán, dubh",pr:"JAR-ug, glass, GUR-um, bawn, duv",m:"Red, green, blue, white, black",tip:"Fun fact: 'glas' can mean green, grey, or even the colour of the sea — Irish sees colour differently than English!",b:"Describe what you're wearing in Irish",tasks:[{icon:"🎯",text:"Colour bingo: find something dearg, gorm, glas, bán, AND dubh today. All five."},{icon:"🟣",text:"Find something 'corcra' (purple) — hardest colour to spot. Photograph it."},{icon:"👕",text:"Describe what you're wearing entirely in Irish colours. Stuck? The dictionary is right here."}]},
  { day:20,t:"Uimhreacha",e:"Numbers",cat:"vocabulary",d:3,ch:"Count in Irish throughout your day.",p:"A haon → a deich",pr:"ah HAYN, ah DOH, ah TREE, ah KAH-her, ah KOO-ig...",m:"1 through 10",tip:"Gym reps, stairs, queuing. Make it automatic.",b:"Say your phone number in Irish",tasks:[{icon:"💪",text:"Count every gym rep, stair, or step out loud in Irish today. Make it automatic."},{icon:"📞",text:"Say your phone number in Irish — slowly first, then faster. Call someone and do it."},{icon:"💶",text:"Count your change in Irish next time you buy something. The cashier will be baffled. That's fine."}]},
  { day:21,t:"Amuigh Faoin Aer",e:"Outdoor Day",cat:"review",d:3,ch:"Take a walk and narrate what you see in Irish.",p:"Tá sé go hálainn. Feicim crann glas.",pr:"Taw shay guh HAW-lin. FEK-im krawn glass.",m:"It's beautiful. I see a green tree.",tip:"Talking to yourself counts. Think in Irish.",b:"Record a 30-second voice note in Irish",tasks:[{icon:"🚶",text:"Walk for 5 minutes and name EVERYTHING you see in Irish — out loud, to yourself"},{icon:"🎙️",text:"Record a 30-second voice note describing what's around you in Irish. Listen back."},{icon:"🎧",text:"While walking, put on Raidió na Gaeltachta. 10 minutes rewires your ears more than 1 hour of study."}]},
  { day:22,t:"Ceol agus Craic",e:"Music & Fun",cat:"culture",d:4,ch:"Listen to a song in Irish — Kíla, Clannad, or search 'amhrán Gaeilge'.",p:"Is breá liom an ceol seo!",pr:"Iss braw lyum on KYOHL shuh",m:"I love this music!",tip:"Try 'Óró Sé Do Bheatha Bhaile' — you'll feel it.",b:"Share the song with someone",tasks:[{icon:"🎵",text:"Listen to 'Óró Sé Do Bheatha Bhaile' and read the story of Gráinne Mhaol — a 16th century pirate queen"},{icon:"📱",text:"Share the song with one person. No explanation. Just the link. Let the music speak."},{icon:"✍️",text:"Write one line from the song from memory after listening. Even one line."}]},
  { day:23,t:"Seanfhocail",e:"Proverbs",cat:"culture",d:4,ch:"Learn one Irish proverb and use it today.",p:"Is fearr Gaeilge briste ná Béarla cliste",pr:"Iss far GAYL-geh BRISH-teh naw BAYR-lah KLISH-teh",m:"Broken Irish is better than clever English",tip:"Your mantra. Permission to be imperfect.",b:"Write it somewhere visible",tasks:[{icon:"🪞",text:"Write 'Is fearr Gaeilge briste ná Béarla cliste' on your bathroom mirror. Read it every morning."},{icon:"📱",text:"Send it to someone who's embarrassed about their Irish. This is their permission."},{icon:"🧠",text:"Learn one more: 'Ní neart go cur le chéile' — there is no strength without unity. Ireland's motto."}]},
  { day:24,t:"Ag Léamh",e:"Reading",cat:"culture",d:4,ch:"Read something in Irish — a sign, a menu, tuairisc.ie.",p:"Tuigim! / Ní thuigim.",pr:"TIG-im / Nee HIG-im",m:"I understand! / I don't understand.",tip:"Ireland is full of bilingual signs you've been ignoring.",b:"Read one headline on tuairisc.ie",tasks:[{icon:"📰",text:"Read one headline on tuairisc.ie OUT LOUD — pronunciation first, meaning second"},{icon:"📸",text:"Photograph a bilingual sign you've walked past 100 times and never actually read the Irish on"},{icon:"✍️",text:"Write 5 Irish words you understood today WITHOUT using the dictionary"}]},
  { day:25,t:"Scríobh",e:"Write",cat:"culture",d:4,ch:"Write a short message in Irish — text, social post, note.",p:"Lá maith agam inniu!",pr:"Law mah ah-GUM in-YOO",m:"Good day for me today!",tip:"Post with #Gaeilge or #GaeltachtConnect.",b:"Send a WhatsApp message in Irish",tasks:[{icon:"🎙️",text:"Send a WhatsApp VOICE NOTE in Irish — even 20 seconds of trying is perfect"},{icon:"✍️",text:"Write 5 sentences about your day in Irish. Past, present, and what you'll do tonight."},{icon:"📱",text:"Post with #GaeltachtConnect — you're part of a movement. Show people it's possible."}]},
  { day:26,t:"Sa Teach Tábhairne",e:"At the Pub",cat:"social",d:4,ch:"Order a drink in Irish at a pub.",p:"Pionta, le do thoil!",pr:"PYUN-tah, leh duh hull",m:"A pint, please!",tip:"Irish in the pub? You'll make someone's night.",b:"Say 'Sláinte!' — SLAWN-cheh",tasks:[{icon:"🍺",text:"Order your round in Irish — 'Pionta, le do thoil' — and make eye contact. Mean it."},{icon:"🥂",text:"Learn the full toast: 'Sláinte is táinte' — health and wealth. Use it tonight."},{icon:"🗣️",text:"Ask the barman or a stranger: 'An bhfuil Gaeilge agat?' You might be very surprised."}]},
  { day:27,t:"Ag Caint",e:"Full Conversation",cat:"immersion",d:4,ch:"Have a 2-minute conversation mixing Irish and English.",p:"An bhfuil Gaeilge agat?",pr:"Un will GAYL-geh ah-GUT",m:"Do you speak Irish?",tip:"You'd be surprised how many have 'a cúpla focal'.",b:"Chat with a Gaeilgeoir online",tasks:[{icon:"🗣️",text:"Have a real conversation mixing Irish and English — don't apologise for the Irish parts"},{icon:"💬",text:"Go to r/gaeilge on Reddit and write one comment or post — even 'Dia dhuit!'  counts"},{icon:"✍️",text:"Write a mini dialogue: you say something in Irish, you reply in Irish. 5 exchanges."}]},
  { day:28,t:"Logainmneacha",e:"Place Names",cat:"culture",d:4,ch:"Learn the Irish meaning of 3 place names near you.",p:"Baile, Cill, Dún, Áth, Lios",pr:"BAL-yeh, Kill, Doon, Aw, Liss",m:"town, church, fort, ford, ringfort",tip:"Dublin = Dubh Linn (Black Pool). Every town tells a story.",b:"Post a place name with its meaning",tasks:[{icon:"🔍",text:"Find 3 place names within 10km of you and look up their Irish meanings. All three."},{icon:"⛪",text:"Find a place with 'Cill' in its name. What saint is it named for? Every 'Cill' has a story."},{icon:"📱",text:"Share one place name + meaning: 'Did you know [town] means...' Watch their face change."}]},
  { day:29,t:"Múin É",e:"Teach It",cat:"immersion",d:5,ch:"Teach someone else 3 Irish phrases today.",p:"Any 3 phrases from this month!",pr:"Your choice",m:"Pass the language forward",tip:"The best way to learn is to teach.",b:"Get them to use one phrase with a real person",tasks:[{icon:"🗣️",text:"Teach the 3 phrases you found HARDEST this month — that's where you've grown most"},{icon:"🎙️",text:"Record a proper voice note in Irish and send it to someone you want to inspire"},{icon:"👶",text:"Think of one child in your life. They could be fluent by 18 if someone starts them now."}]},
  { day:30,t:"Lá na Gaeilge",e:"Your Irish Day",cat:"immersion",d:5,ch:"Live one full day using as much Irish as possible.",p:"Tá Gaeilge agam. Tá mé bródúil.",pr:"Taw GAYL-geh ah-GUM. Taw may BROH-dool.",m:"I have Irish. I am proud.",tip:"You started with 'Dia dhuit'. Look how far you've come.",b:"Write a reflection. Share it. Inspire the next person.",tasks:[{icon:"☘️",text:"From waking to sleeping: every hello, thank you, goodbye, and weather comment — in Irish"},{icon:"✍️",text:"Write ONE honest sentence about what this month changed in you. Just one."},{icon:"📱",text:"Share your streak with #GaeltachtConnect — you are proof it's possible. Someone needs to see this."}]},
];

const VOCAB = [
  // Days
  {p:"Luan",pr:"LOO-un",m:"Monday",cat:"days"},{p:"Máirt",pr:"MAR-tch",m:"Tuesday",cat:"days"},{p:"Céadaoin",pr:"KAY-deen",m:"Wednesday",cat:"days"},{p:"Déardaoin",pr:"JAIR-deen",m:"Thursday",cat:"days"},{p:"Aoine",pr:"EE-nyeh",m:"Friday",cat:"days"},{p:"Satharn",pr:"SAH-hurn",m:"Saturday",cat:"days"},{p:"Domhnach",pr:"DOW-nukh",m:"Sunday",cat:"days"},
  // Numbers
  {p:"A haon",pr:"ah HAYN",m:"1",cat:"numbers"},{p:"A dó",pr:"ah DOH",m:"2",cat:"numbers"},{p:"A trí",pr:"ah TREE",m:"3",cat:"numbers"},{p:"A ceathair",pr:"ah KAH-her",m:"4",cat:"numbers"},{p:"A cúig",pr:"ah KOO-ig",m:"5",cat:"numbers"},{p:"A sé",pr:"ah SHAY",m:"6",cat:"numbers"},{p:"A seacht",pr:"ah SHOKHT",m:"7",cat:"numbers"},{p:"A hocht",pr:"ah UKHT",m:"8",cat:"numbers"},{p:"A naoi",pr:"ah NEE",m:"9",cat:"numbers"},{p:"A deich",pr:"ah JEH",m:"10",cat:"numbers"},{p:"Fiche",pr:"FIH-heh",m:"20",cat:"numbers"},{p:"Caoga",pr:"KWEE-gah",m:"50",cat:"numbers"},{p:"Céad",pr:"kayd",m:"100",cat:"numbers"},
  // Months
  {p:"Eanáir",pr:"AN-ar",m:"January",cat:"months"},{p:"Feabhra",pr:"FOW-rah",m:"February",cat:"months"},{p:"Márta",pr:"MAR-tah",m:"March",cat:"months"},{p:"Aibreán",pr:"AB-rawn",m:"April",cat:"months"},{p:"Bealtaine",pr:"BYAL-tin-eh",m:"May",cat:"months"},{p:"Meitheamh",pr:"MEH-uv",m:"June",cat:"months"},{p:"Iúil",pr:"EW-il",m:"July",cat:"months"},{p:"Lúnasa",pr:"LOO-nah-sah",m:"August",cat:"months"},{p:"Meán Fómhair",pr:"myan FOH-ir",m:"September",cat:"months"},{p:"Deireadh Fómhair",pr:"JEH-ruh FOH-ir",m:"October",cat:"months"},{p:"Samhain",pr:"SOW-in",m:"November",cat:"months"},{p:"Nollaig",pr:"NUL-ig",m:"December",cat:"months"},
  // Colors
  {p:"Dearg",pr:"JAR-ug",m:"Red",cat:"colors"},{p:"Gorm",pr:"GUR-um",m:"Blue",cat:"colors"},{p:"Glas",pr:"glass",m:"Green / Grey",cat:"colors"},{p:"Bán",pr:"bawn",m:"White",cat:"colors"},{p:"Dubh",pr:"duv",m:"Black",cat:"colors"},{p:"Buí",pr:"bwee",m:"Yellow",cat:"colors"},{p:"Oráiste",pr:"OR-awsh-teh",m:"Orange",cat:"colors"},{p:"Corcra",pr:"KUR-kra",m:"Purple",cat:"colors"},{p:"Donn",pr:"down",m:"Brown",cat:"colors"},{p:"Liath",pr:"LEE-ah",m:"Grey",cat:"colors"},
  // Family
  {p:"Máthair",pr:"MAH-her",m:"Mother",cat:"family"},{p:"Athair",pr:"AH-her",m:"Father",cat:"family"},{p:"Deartháir",pr:"JAR-haw-er",m:"Brother",cat:"family"},{p:"Deirfiúr",pr:"JER-fyoor",m:"Sister",cat:"family"},{p:"Mac",pr:"mok",m:"Son",cat:"family"},{p:"Iníon",pr:"ih-NYEEN",m:"Daughter",cat:"family"},{p:"Seanmháthair",pr:"SHAN-wah-her",m:"Grandmother",cat:"family"},{p:"Seanathair",pr:"SHAN-ah-her",m:"Grandfather",cat:"family"},{p:"Uncail",pr:"UN-kul",m:"Uncle",cat:"family"},{p:"Aintín",pr:"AN-teen",m:"Aunt",cat:"family"},
  // Food
  {p:"Arán",pr:"AH-rawn",m:"Bread",cat:"food"},{p:"Im",pr:"im",m:"Butter",cat:"food"},{p:"Bainne",pr:"BAN-yeh",m:"Milk",cat:"food"},{p:"Ubh",pr:"uv",m:"Egg",cat:"food"},{p:"Feoil",pr:"FYOHL",m:"Meat",cat:"food"},{p:"Iasc",pr:"ee-USK",m:"Fish",cat:"food"},{p:"Práta",pr:"PRAW-tah",m:"Potato",cat:"food"},{p:"Siúcra",pr:"SHOO-krah",m:"Sugar",cat:"food"},{p:"Úll",pr:"ool",m:"Apple",cat:"food"},{p:"Uisce",pr:"ISH-keh",m:"Water",cat:"food"},{p:"Tae",pr:"tay",m:"Tea",cat:"food"},{p:"Fíon",pr:"FEE-un",m:"Wine",cat:"food"},
  // Animals
  {p:"Madra",pr:"MAD-rah",m:"Dog",cat:"animals"},{p:"Cat",pr:"kot",m:"Cat",cat:"animals"},{p:"Capall",pr:"KAP-ul",m:"Horse",cat:"animals"},{p:"Bó",pr:"boh",m:"Cow",cat:"animals"},{p:"Caora",pr:"KWEE-rah",m:"Sheep",cat:"animals"},{p:"Éan",pr:"AY-un",m:"Bird",cat:"animals"},{p:"Coinín",pr:"KUN-yeen",m:"Rabbit",cat:"animals"},{p:"Muc",pr:"muk",m:"Pig",cat:"animals"},
  // Useful phrases
  {p:"Go n-éirí leat",pr:"guh NYE-ree lat",m:"Good luck",cat:"phrases"},{p:"Ceart go leor",pr:"kart guh LOR",m:"Alright / OK",cat:"phrases"},{p:"Gabh mo leithscéal",pr:"gov muh LEH-shkyal",m:"Excuse me",cat:"phrases"},{p:"Tá brón orm",pr:"taw bron ur-um",m:"I'm sorry",cat:"phrases"},{p:"Níl a fhios agam",pr:"neel iss AH-gum",m:"I don't know",cat:"phrases"},{p:"Ar mhaith leat?",pr:"er wah lat",m:"Would you like?",cat:"phrases"},{p:"Cén t-am é?",pr:"kayn tom ay",m:"What time is it?",cat:"phrases"},{p:"Tá mé tuirseach",pr:"taw may TEER-shukh",m:"I'm tired",cat:"phrases"},{p:"Tá áthas orm",pr:"taw AW-hus ur-um",m:"I'm happy",cat:"phrases"},{p:"Is breá liom",pr:"iss braw lyum",m:"I love",cat:"phrases"},{p:"Cabhair!",pr:"KOW-ir",m:"Help!",cat:"phrases"},{p:"Tá mé ceart go leor",pr:"taw may kart guh LOR",m:"I'm fine",cat:"phrases"},{p:"Ní thuigim",pr:"nee HIG-im",m:"I don't understand",cat:"phrases"},{p:"Abair arís é",pr:"AB-ir ah-REESH ay",m:"Say it again",cat:"phrases"},{p:"An bhfuil Béarla agat?",pr:"un will BAYR-lah AH-gut",m:"Do you speak English?",cat:"phrases"},
  // Body
  {p:"Ceann",pr:"kyown",m:"Head",cat:"body"},{p:"Aghaidh",pr:"EYE-ee",m:"Face",cat:"body"},{p:"Súil",pr:"SOO-il",m:"Eye",cat:"body"},{p:"Cluas",pr:"KLOO-us",m:"Ear",cat:"body"},{p:"Srón",pr:"srohn",m:"Nose",cat:"body"},{p:"Béal",pr:"bayl",m:"Mouth",cat:"body"},{p:"Fiacail",pr:"FEE-ah-kil",m:"Tooth",cat:"body"},{p:"Lámh",pr:"lawv",m:"Hand",cat:"body"},{p:"Méar",pr:"myar",m:"Finger",cat:"body"},{p:"Cos",pr:"kus",m:"Leg / Foot",cat:"body"},{p:"Droim",pr:"drim",m:"Back",cat:"body"},{p:"Bolg",pr:"bulag",m:"Stomach",cat:"body"},{p:"Croí",pr:"kree",m:"Heart",cat:"body"},{p:"Gruaig",pr:"GROO-ig",m:"Hair",cat:"body"},{p:"Muineál",pr:"MWIN-yal",m:"Neck",cat:"body"},{p:"Gualainn",pr:"GOO-lin",m:"Shoulder",cat:"body"},
  // Clothes
  {p:"Léine",pr:"LAY-nyeh",m:"Shirt",cat:"clothes"},{p:"Treabhsar",pr:"TROUSE-ur",m:"Trousers",cat:"clothes"},{p:"Gúna",pr:"GOO-nah",m:"Dress",cat:"clothes"},{p:"Cóta",pr:"KOH-tah",m:"Coat",cat:"clothes"},{p:"Bróga",pr:"BROH-gah",m:"Shoes",cat:"clothes"},{p:"Hata",pr:"HAH-tah",m:"Hat",cat:"clothes"},{p:"Geansaí",pr:"GAN-see",m:"Jumper / Sweater",cat:"clothes"},{p:"Scairf",pr:"skarf",m:"Scarf",cat:"clothes"},{p:"Stocaí",pr:"STUK-ee",m:"Socks",cat:"clothes"},{p:"Seaicéad",pr:"SHAK-ayd",m:"Jacket",cat:"clothes"},{p:"Caipin",pr:"KAP-in",m:"Cap",cat:"clothes"},{p:"Mála",pr:"MAW-lah",m:"Bag",cat:"clothes"},
  // Transport
  {p:"Carr",pr:"kar",m:"Car",cat:"transport"},{p:"Bus",pr:"bus",m:"Bus",cat:"transport"},{p:"Traein",pr:"tran",m:"Train",cat:"transport"},{p:"Rothar",pr:"RUH-her",m:"Bicycle",cat:"transport"},{p:"Eitleán",pr:"ETH-lahn",m:"Plane",cat:"transport"},{p:"Bád",pr:"bawd",m:"Boat",cat:"transport"},{p:"Tacsaí",pr:"TAK-see",m:"Taxi",cat:"transport"},{p:"Aerfort",pr:"AYR-fort",m:"Airport",cat:"transport"},{p:"Stad bus",pr:"stad bus",m:"Bus stop",cat:"transport"},{p:"Stáisiún",pr:"STAW-shoon",m:"Station",cat:"transport"},{p:"Bóthar",pr:"BOH-her",m:"Road",cat:"transport"},{p:"Droichead",pr:"DREH-hed",m:"Bridge",cat:"transport"},
  // Emotions
  {p:"Áthas",pr:"AW-hus",m:"Happiness",cat:"emotions"},{p:"Brón",pr:"brohn",m:"Sadness",cat:"emotions"},{p:"Fearg",pr:"far-ug",m:"Anger",cat:"emotions"},{p:"Eagla",pr:"AG-lah",m:"Fear",cat:"emotions"},{p:"Grá",pr:"graw",m:"Love",cat:"emotions"},{p:"Iontas",pr:"UN-tus",m:"Surprise",cat:"emotions"},{p:"Náire",pr:"NAW-reh",m:"Shame / Embarrassment",cat:"emotions"},{p:"Uaigneas",pr:"OO-ig-nyus",m:"Loneliness",cat:"emotions"},{p:"Imní",pr:"IM-nee",m:"Worry / Anxiety",cat:"emotions"},{p:"Áthasach",pr:"AW-hus-ukh",m:"Happy",cat:"emotions"},{p:"Brónach",pr:"BROH-nukh",m:"Sad",cat:"emotions"},{p:"Cantalach",pr:"KAN-tuh-lukh",m:"Grumpy",cat:"emotions"},
  // Nature
  {p:"Crann",pr:"krawn",m:"Tree",cat:"nature"},{p:"Bláth",pr:"blaw",m:"Flower",cat:"nature"},{p:"Féar",pr:"fayr",m:"Grass",cat:"nature"},{p:"Farraige",pr:"FAR-ig-eh",m:"Sea",cat:"nature"},{p:"Abhainn",pr:"OW-in",m:"River",cat:"nature"},{p:"Sliabh",pr:"shleev",m:"Mountain",cat:"nature"},{p:"Coill",pr:"kwil",m:"Forest / Wood",cat:"nature"},{p:"Oileán",pr:"UL-awn",m:"Island",cat:"nature"},{p:"Loch",pr:"lokh",m:"Lake",cat:"nature"},{p:"Trá",pr:"traw",m:"Beach",cat:"nature"},{p:"Pláinéad",pr:"PLAWN-ayd",m:"Planet",cat:"nature"},{p:"Réalta",pr:"RAYL-tah",m:"Star",cat:"nature"},{p:"Grian",pr:"GREE-un",m:"Sun",cat:"nature"},{p:"Gealach",pr:"GYAL-ukh",m:"Moon",cat:"nature"},
  // Home
  {p:"Teach",pr:"tyakh",m:"House",cat:"home"},{p:"Seomra",pr:"SHOH-mruh",m:"Room",cat:"home"},{p:"Cistin",pr:"KISH-tin",m:"Kitchen",cat:"home"},{p:"Leaba",pr:"LA-bah",m:"Bed",cat:"home"},{p:"Bord",pr:"burd",m:"Table",cat:"home"},{p:"Cathaoir",pr:"KAH-heer",m:"Chair",cat:"home"},{p:"Doras",pr:"DUR-us",m:"Door",cat:"home"},{p:"Fuinneog",pr:"FWIN-yohg",m:"Window",cat:"home"},{p:"Urlár",pr:"UR-lahr",m:"Floor",cat:"home"},{p:"Díon",pr:"dee-un",m:"Roof",cat:"home"},{p:"Gairdín",pr:"gar-DEEN",m:"Garden",cat:"home"},{p:"Seomra folctha",pr:"SHOH-mruh FOLK-huh",m:"Bathroom",cat:"home"},{p:"Teilifís",pr:"CHEL-ih-feesh",m:"Television",cat:"home"},
  // Verbs
  {p:"Ith",pr:"ih",m:"Eat",cat:"verbs"},{p:"Ól",pr:"ohl",m:"Drink",cat:"verbs"},{p:"Codail",pr:"KUD-il",m:"Sleep",cat:"verbs"},{p:"Siúil",pr:"SHOOL",m:"Walk",cat:"verbs"},{p:"Rith",pr:"rih",m:"Run",cat:"verbs"},{p:"Léigh",pr:"lay",m:"Read",cat:"verbs"},{p:"Scríobh",pr:"shkreev",m:"Write",cat:"verbs"},{p:"Labhair",pr:"LOW-ir",m:"Speak",cat:"verbs"},{p:"Éist",pr:"AYsht",m:"Listen",cat:"verbs"},{p:"Féach",pr:"fyakh",m:"Look / Watch",cat:"verbs"},{p:"Ceannaigh",pr:"KYAN-ee",m:"Buy",cat:"verbs"},{p:"Imir",pr:"IM-ir",m:"Play",cat:"verbs"},{p:"Oibrigh",pr:"IB-ree",m:"Work",cat:"verbs"},{p:"Foghlaim",pr:"FOW-lim",m:"Learn",cat:"verbs"},{p:"Téigh",pr:"chay",m:"Go",cat:"verbs"},{p:"Tar",pr:"tar",m:"Come",cat:"verbs"},{p:"Tabhair",pr:"TOR",m:"Give",cat:"verbs"},{p:"Faigh",pr:"fye",m:"Get / Find",cat:"verbs"},{p:"Déan",pr:"jayn",m:"Do / Make",cat:"verbs"},{p:"Cas",pr:"kas",m:"Turn / Meet",cat:"verbs"},{p:"Oscail",pr:"US-kil",m:"Open",cat:"verbs"},{p:"Dún",pr:"doon",m:"Close",cat:"verbs"},
  // Adjectives
  {p:"Mór",pr:"more",m:"Big",cat:"adjectives"},{p:"Beag",pr:"byug",m:"Small",cat:"adjectives"},{p:"Fada",pr:"FAH-dah",m:"Long",cat:"adjectives"},{p:"Gearr",pr:"gyar",m:"Short",cat:"adjectives"},{p:"Trom",pr:"trum",m:"Heavy",cat:"adjectives"},{p:"Éadrom",pr:"AY-drum",m:"Light",cat:"adjectives"},{p:"Láidir",pr:"LAW-jir",m:"Strong",cat:"adjectives"},{p:"Lag",pr:"lag",m:"Weak",cat:"adjectives"},{p:"Sean",pr:"shan",m:"Old",cat:"adjectives"},{p:"Nua",pr:"noo-uh",m:"New",cat:"adjectives"},{p:"Álainn",pr:"AW-lin",m:"Beautiful",cat:"adjectives"},{p:"Tapa",pr:"TAH-puh",m:"Fast",cat:"adjectives"},{p:"Mall",pr:"mowl",m:"Slow",cat:"adjectives"},{p:"Maith",pr:"mah",m:"Good",cat:"adjectives"},{p:"Olc",pr:"ulk",m:"Bad",cat:"adjectives"},{p:"Te",pr:"teh",m:"Hot",cat:"adjectives"},{p:"Fuar",pr:"FOO-ur",m:"Cold",cat:"adjectives"},{p:"Ciúin",pr:"KYOO-in",m:"Quiet",cat:"adjectives"},{p:"Gléasta",pr:"GLAY-stah",m:"Smart / Well-dressed",cat:"adjectives"},
  // Weather
  {p:"Grianmhar",pr:"GREE-un-wur",m:"Sunny",cat:"weather"},{p:"Scamallach",pr:"SKAM-ul-ukh",m:"Cloudy",cat:"weather"},{p:"Gaofar",pr:"GWEE-fur",m:"Windy",cat:"weather"},{p:"Fliuch",pr:"flyukh",m:"Wet / Rainy",cat:"weather"},{p:"Tirim",pr:"CHIR-im",m:"Dry",cat:"weather"},{p:"Tuar ceatha",pr:"TOO-ur KAH-huh",m:"Rainbow",cat:"weather"},{p:"Toirneach",pr:"TUR-nyukh",m:"Thunder",cat:"weather"},{p:"Sneachta",pr:"SHNYAKH-tah",m:"Snow",cat:"weather"},{p:"Sioc",pr:"shuk",m:"Frost",cat:"weather"},{p:"Ceo",pr:"kyoh",m:"Fog / Mist",cat:"weather"},{p:"Stoirm",pr:"STURM",m:"Storm",cat:"weather"},{p:"Tintreach",pr:"CHIN-trukh",m:"Lightning",cat:"weather"},
  // Time
  {p:"Maidin",pr:"MAH-jin",m:"Morning",cat:"time"},{p:"Tráthnóna",pr:"TRAW-noh-nuh",m:"Evening / Afternoon",cat:"time"},{p:"Oíche",pr:"EE-heh",m:"Night",cat:"time"},{p:"Inniu",pr:"IN-yoo",m:"Today",cat:"time"},{p:"Inné",pr:"IN-yay",m:"Yesterday",cat:"time"},{p:"Amárach",pr:"uh-MAW-rukh",m:"Tomorrow",cat:"time"},{p:"Anois",pr:"uh-NISH",m:"Now",cat:"time"},{p:"Luath",pr:"LOO-uh",m:"Early / Soon",cat:"time"},{p:"Déanach",pr:"JAY-nukh",m:"Late",cat:"time"},{p:"Uair an chloig",pr:"OO-ir un KHLIG",m:"Hour",cat:"time"},{p:"Nóiméad",pr:"NOH-mayd",m:"Minute",cat:"time"},{p:"Seachtain",pr:"SHAKH-tin",m:"Week",cat:"time"},{p:"Mí",pr:"mee",m:"Month",cat:"time"},{p:"Bliain",pr:"BLEE-in",m:"Year",cat:"time"},
  // Places
  {p:"Siopa",pr:"SHUP-uh",m:"Shop",cat:"places"},{p:"Scoil",pr:"skul",m:"School",cat:"places"},{p:"Ospidéal",pr:"OS-pih-dayl",m:"Hospital",cat:"places"},{p:"Teach tábhairne",pr:"tyakh TOW-irneh",m:"Pub",cat:"places"},{p:"Eaglais",pr:"AG-lish",m:"Church",cat:"places"},{p:"Bainc",pr:"bank",m:"Bank",cat:"places"},{p:"Leabharlann",pr:"LOW-ur-lun",m:"Library",cat:"places"},{p:"Páirc",pr:"pawrk",m:"Park",cat:"places"},{p:"Caifé",pr:"kah-FAY",m:"Café",cat:"places"},{p:"Bialann",pr:"BEE-uh-lun",m:"Restaurant",cat:"places"},{p:"Margadh",pr:"MAR-uh-guh",m:"Market",cat:"places"},{p:"Oifig an phoist",pr:"IF-ig un fwisht",m:"Post office",cat:"places"},{p:"Óstán",pr:"OH-stawhn",m:"Hotel",cat:"places"},
  // Sports & hobbies
  {p:"Peil",pr:"pel",m:"Football / Soccer",cat:"sports"},{p:"Iomáint",pr:"UM-awnt",m:"Hurling",cat:"sports"},{p:"Snámh",pr:"snahv",m:"Swimming",cat:"sports"},{p:"Cluiche",pr:"KLIH-heh",m:"Game",cat:"sports"},{p:"Ceol",pr:"kyohl",m:"Music",cat:"sports"},{p:"Leabhar",pr:"LOW-ur",m:"Book",cat:"sports"},{p:"Scannán",pr:"SKOU-nawn",m:"Film / Movie",cat:"sports"},{p:"Cócaireacht",pr:"KOH-kir-ukht",m:"Cooking",cat:"sports"},{p:"Damhsa",pr:"DOW-suh",m:"Dancing",cat:"sports"},{p:"Péintéireacht",pr:"PAYN-cheer-ukht",m:"Painting",cat:"sports"},{p:"Cártaí",pr:"KAR-tee",m:"Cards",cat:"sports"},{p:"Camógaíocht",pr:"kam-OH-ghee-ukht",m:"Camogie",cat:"sports"},
];

const CATS = { greetings:"👋", review:"🔄", food:"☕", shopping:"🛍️", opinions:"💬", social:"🤝", directions:"🧭", vocabulary:"📚", culture:"🎭", immersion:"🔥", days:"📆", numbers:"🔢", months:"🗓️", colors:"🎨", family:"👨‍👩‍👧", animals:"🐾", phrases:"🗣️", body:"🫀", clothes:"👕", transport:"🚗", emotions:"💭", nature:"🌿", home:"🏡", verbs:"⚡", adjectives:"✨", weather:"🌦️", time:"⏰", places:"📍", sports:"🏃" };
const WK = [
  { name: "Fáilte", en: "Greetings & Basics", start: 0, end: 7 },
  { name: "Bia & Siopadóireacht", en: "Food & Shopping", start: 7, end: 14 },
  { name: "Daoine & Áiteanna", en: "People & Places", start: 14, end: 21 },
  { name: "Tumadh Iomlán", en: "Full Immersion", start: 21, end: 30 },
];

const T = {
  light: {
    bg:"#FDFAF4",bg2:"#F5EFE0",card:"#FFFFFF",cardAlt:"#FAF6EE",
    phrase:"#EEF7F1",phraseBd:"#C9DDD1",
    tx:"#1A1A18",tx2:"#3D3D38",tx3:"#7A7A70",
    acc:"#1B4332",acc2:"#0D2E1F",gold:"#C9A227",
    bd:"#D8D0C0",shadow:"0 2px 12px rgba(27,67,50,0.08)",
    doneBg:"#EAF4EE",doneBd:"#A8CCBA",doneTx:"#1B4332",
    nextBd:"#1B4332",
    tipBg:"#FBF7EC",tipBd:"#E8DDB8",tipTx:"#4A3B00",
    btn:"#1B4332",btnTx:"#fff",
    progBg:"#E5DFD0",progFill:"linear-gradient(90deg,#1B4332,#C9A227)",
    celebBg:"rgba(253,250,244,0.96)",
    dotOn:"#1B4332",dotOff:"#D8D0C0",dotDone:"#1B4332",
    nav:"#FFFFFF",navBd:"#E8E0D0",
    hero:"#1B4332",
    ink:"#1B4332",
  },
  dark: {
    bg:"#141A14",bg2:"#1A221A",card:"#1E281E",cardAlt:"#222E22",
    phrase:"#1A2E20",phraseBd:"#2E4A38",
    tx:"#F0EDE4",tx2:"#C8C4B4",tx3:"#7A7A68",
    acc:"#6FCF97",acc2:"#4AB87A",gold:"#D4AA30",
    bd:"#2E3E2E",shadow:"0 2px 12px rgba(0,0,0,0.3)",
    doneBg:"#1A2E20",doneBd:"#2E4A38",doneTx:"#6FCF97",
    nextBd:"#6FCF97",
    tipBg:"#1E1E14",tipBd:"#3A3520",tipTx:"#C8B870",
    btn:"#2D6A4F",btnTx:"#fff",
    progBg:"#1A2A1A",progFill:"linear-gradient(90deg,#2D6A4F,#D4AA30)",
    celebBg:"rgba(20,26,20,0.96)",
    dotOn:"#6FCF97",dotOff:"#2E3E2E",dotDone:"#6FCF97",
    nav:"#1E281E",navBd:"#2E3E2E",
    hero:"#0D2E1F",
    ink:"#2E3E2E",
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

const speak = (phrase, pr) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const text = pr && pr !== "Full conversation flow" && pr !== "Full immersion run" && pr !== "Your choice" ? pr : phrase;
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.75;
  u.lang = 'en-IE';
  window.speechSynthesis.speak(u);
};

// Category color map
const CAT_CLR = {
  greetings:"#2D6A4F", review:"#6B4C9A", food:"#C2541A", shopping:"#1A5FA0",
  opinions:"#8A3A8A", social:"#2D7A6A", directions:"#1A6A8A", vocabulary:"#4A6A1A",
  culture:"#8A6A1A", immersion:"#C23A1A",
  days:"#1A6A8A", numbers:"#2D6A4F", months:"#6B4C9A", colors:"#C2541A",
  family:"#8A3A8A", animals:"#4A6A1A", phrases:"#2D7A6A",
  body:"#A03040", clothes:"#5A4A8A", transport:"#1A5A8A", emotions:"#8A4A6A",
  nature:"#2D6A2A", home:"#8A6A2A", verbs:"#1A5A6A", adjectives:"#6A4A1A",
  weather:"#2A5A8A", time:"#4A4A8A", places:"#6A2A4A", sports:"#2A6A4A",
};

const DAILY_POOL=[
  // ── SPEAKING ──
  {tp:"speaking",title:"Maidin Mhaith",ch:"Say 'Maidin mhaith!' to the first person you see today — neighbour, colleague, or your own reflection.",tip:"Most people smile. Some reply in Irish."},
  {tp:"speaking",title:"Go Raibh Maith Agat",ch:"Replace every 'thank you' today with 'Go raibh maith agat'. In a shop, café, bus — everywhere.",tip:"People in Ireland often recognise this. You'll get a warm reaction."},
  {tp:"speaking",title:"Slán Go Fóill",ch:"End every conversation today with 'Slán go fóill' instead of bye/goodbye.",tip:"'Slán' alone works too. Short, warm, very Irish."},
  {tp:"speaking",title:"Conas Atá Tú?",ch:"Ask someone 'Conas atá tú?' today and wait for their reaction. Translate if needed — you're planting seeds.",tip:"Reply: 'Tá mé go maith' — TAW may guh mah."},
  {tp:"speaking",title:"Pionta, Le Do Thoil",ch:"Order at a pub or café entirely in Irish today. Even just the item name + 'le do thoil' counts.",tip:"'Caife, le do thoil' or 'Pionta, le do thoil' — you'll make someone's night."},
  {tp:"speaking",title:"Tá Ocras Orm",ch:"Say 'Tá ocras orm' dramatically every time you feel hungry today. Make it theatrical.",tip:"Irish puts hunger ON you — 'ocras is on me'. Beautiful way to see language."},
  {tp:"speaking",title:"Ainm",ch:"Introduce yourself in Irish to someone: 'Is mise [name]. Is as [town] mé. Conas atá tú?'",tip:"Look up the Irish form of your name — most have one."},
  {tp:"speaking",title:"Uimhreacha",ch:"Count your stairs, steps, or items in a bag in Irish today. Make numbers automatic.",tip:"A haon, a dó, a trí... try going to 20 without stopping."},
  {tp:"speaking",title:"Dathanna",ch:"Point at 5 things around you right now and name their colour in Irish out loud.",tip:"Dearg, gorm, glas, bán, dubh, buí — you probably know more than you think."},
  {tp:"speaking",title:"Oíche Mhaith",ch:"Say 'Oíche mhaith' (EE-heh wah) to everyone you say goodnight to today.",tip:"Works on the phone too. Text it. People love it."},
  {tp:"speaking",title:"Cé Mhéad?",ch:"Ask 'Cé mhéad?' (how much?) the next time you buy something — even if the price is visible.",tip:"Point at it and ask. It's a totally natural gesture."},
  {tp:"speaking",title:"Tá Sé Fuar",ch:"Comment on the weather in Irish to at least one person today. In Ireland, weather IS social currency.",tip:"'Tá sé fuar' (cold), 'tá sé fliuch' (wet), 'tá sé go hálainn' (beautiful)."},
  // ── LISTENING ──
  {tp:"listening",title:"TG4 Cúig Nóiméad",ch:"Open TG4.ie or the TG4 Player and watch any 5 minutes of Irish-language TV. Count words you recognise.",tip:"Even 3 recognised words is a win. Your brain is tuning in."},
  {tp:"listening",title:"Raidió na Gaeltachta",ch:"Listen to Raidió na Gaeltachta for 10 minutes. Write down 3 words you hear and can identify.",tip:"Search 'RTÉ Raidió na Gaeltachta' — available online, free."},
  {tp:"listening",title:"Óró Sé Do Bheatha Bhaile",ch:"Find 'Óró Sé Do Bheatha Bhaile' on YouTube and listen to it fully. This is a song of resistance.",tip:"Written for Gráinne Mhaol — a 16th century pirate queen. Read the story."},
  {tp:"listening",title:"Kíla",ch:"Find Kíla on Spotify or YouTube. Listen to one full song. Their music is 100% Irish.",tip:"Try 'Lúnasa' or 'Bád go Barra' — ancient sounds, modern energy."},
  {tp:"listening",title:"Amhrán na bhFiann",ch:"Listen to the Irish national anthem and follow the words. You'll catch more than you expect.",tip:"'Sinne Fianna Fáil' — 'We are the warriors of destiny'."},
  {tp:"listening",title:"Seo Linn",ch:"Find Seo Linn on YouTube. Secondary school students covering pop songs in Irish. Utterly brilliant.",tip:"Their 'Gleann' will stop you in your tracks."},
  {tp:"listening",title:"Sean-Nós",ch:"Search 'sean-nós singing Connemara' on YouTube and listen to one video. This is the oldest vocal tradition in Ireland.",tip:"No instruments. Just voice. It's extraordinary."},
  {tp:"listening",title:"Siúil A Rún",ch:"Find 'Siúil A Rún' (performed by anyone) and read the English translation while listening.",tip:"It means 'Walk, my love' — a song about a soldier leaving for France."},
  // ── WRITING ──
  {tp:"writing",title:"Dáta an Lae",ch:"Write today's full date in Irish: the day of the week, day number, month, and year.",tip:"E.g. Déardaoin, an 24ú lá d'Aibreán, 2026."},
  {tp:"writing",title:"Text i nGaeilge",ch:"Send a text or WhatsApp message entirely in Irish to someone. Even 'Dia dhuit! Conas atá tú?' counts.",tip:"Screenshot their reply — good or confused, both are gold."},
  {tp:"writing",title:"Instagram i nGaeilge",ch:"Post something on Instagram or any social media with an Irish caption. Use #Gaeilge.",tip:"You don't have to explain it. Let people wonder."},
  {tp:"writing",title:"Dán Beag",ch:"Write a tiny 2-line poem in Irish about something in your life right now. It doesn't have to rhyme.",tip:"'Tá an ghrian ag soilsiú. Tá mé sásta.' That's a poem."},
  {tp:"writing",title:"Liosta Siopadóireachta",ch:"Write your next grocery list in Irish — even 5 items. Arán, bainne, im, ubh, caife.",tip:"Stick it on the fridge. Your household will start learning too."},
  {tp:"writing",title:"Ainm i nGaeilge",ch:"Look up the Irish form of your name and its meaning. Write it and its story.",tip:"Most English names have Irish equivalents. Seán = John, Máire = Mary, Pádraig = Patrick."},
  {tp:"writing",title:"Stádas WhatsApp",ch:"Change your WhatsApp or iMessage status to an Irish phrase for 24 hours.",tip:"'Ag foghlaim Gaeilge' — learning Irish. Let it start a conversation."},
  {tp:"writing",title:"Focail sa Teach",ch:"Walk through your home and write the Irish name for every room you enter.",tip:"Cistin (kitchen), seomra folctha (bathroom), seomra leapa (bedroom)."},
  {tp:"writing",title:"Glao Gutha",ch:"Send a voice note in Irish to a friend today — say anything, even 30 seconds.",tip:"Your voice in Irish is more powerful than text. It's real."},
  // ── EXPLORE ──
  {tp:"explore",title:"Comharthaí Dátheangacha",ch:"Find 3 bilingual signs in your town today. Read the Irish version first, before the English.",tip:"They're everywhere — on buses, roads, shops, government buildings. You've been ignoring them."},
  {tp:"explore",title:"Ainm do Bhaile",ch:"Look up the exact Irish meaning and origin of your town or street's name. Most tell a story.",tip:"Dublin = Dubh Linn (Black Pool). Cork = Corcaigh (marshy place). What's yours?"},
  {tp:"explore",title:"An Ghaeltacht",ch:"Find your nearest Gaeltacht area on a map. How far away are you? Plan a visit.",tip:"Connemara, Donegal, Kerry, Waterford — communities where Irish is the daily language."},
  {tp:"explore",title:"Ciorcal Comhrá",ch:"Search 'Ciorcal Comhrá' + your town name. Find a local Irish conversation circle and note when it meets.",tip:"They're free, friendly, and for all levels. You could go this week."},
  {tp:"explore",title:"Gaelscoil",ch:"Find the nearest Gaelscoil (Irish-language school) to where you live. Look at what they do.",tip:"Over 250 Gaelscoileanna in Ireland. More than ever before."},
  {tp:"explore",title:"Siopa le Gaeilge",ch:"Find one product in a supermarket today that has Irish text on its label. Read the Irish part.",tip:"Many Irish brands have Irish on packaging. Lyons Tea, Kerrygold, SuperValu own-brand items."},
  {tp:"explore",title:"Sráid nó Áit",ch:"During your commute today, read every Irish place name on signs before reading the English.",tip:"You'll start to see patterns: 'Baile' = town, 'Cill' = church, 'Dún' = fort."},
  // ── DIGITAL ──
  {tp:"digital",title:"Teileafón i nGaeilge",ch:"Change your phone's language to Irish for exactly 1 hour. Survive it.",tip:"Settings → General → Language. You can always change back. Be brave."},
  {tp:"digital",title:"TG4 ar Instagram",ch:"Follow @TG4TV on Instagram or Twitter/X. Let Irish into your daily scroll.",tip:"Their content is genuinely good — short clips, culture, sport."},
  {tp:"digital",title:"Raidió na Gaeltachta",ch:"Follow Raidió na Gaeltachta on social media. One Irish account in your feed changes things.",tip:"They post in Irish. Your brain starts absorbing passively."},
  {tp:"digital",title:"Foclóir App",ch:"Download the 'Foclóir' app — the official Irish-English dictionary. It's free and offline.",tip:"Made by the Irish government. Better than Google Translate for Irish."},
  {tp:"digital",title:"r/gaeilge",ch:"Go to Reddit's r/gaeilge community. Read 3 posts. There are thousands of learners worldwide.",tip:"People post questions, resources, and encouragement. You're not alone in this."},
  // ── CULTURE ──
  {tp:"culture",title:"D'Ainm Féin",ch:"Look up the Irish form of your own first name and its meaning. Most names carry centuries of history.",tip:"Seán = John (God is gracious). Máire = Mary. Caitlín = Kathleen. What does yours mean?"},
  {tp:"culture",title:"Lúnasa",ch:"Learn what 'Lúnasa' means — August is named after the god Lugh, the harvest festival. Feel that history.",tip:"Lúnasa is one of the 4 great Irish festivals: Imbolc, Bealtaine, Lúnasa, Samhain."},
  {tp:"culture",title:"Samhain",ch:"Learn what Samhain actually is — Halloween comes from this Irish festival. Ireland gave the world Halloween.",tip:"Samhain (SAH-win) = end of harvest, beginning of dark half of year. October 31st."},
  {tp:"culture",title:"Imbolc",ch:"Learn about Imbolc — February 1st is now a public holiday in Ireland (since 2023) celebrating St. Brigid.",tip:"Brigid was a goddess before she was a saint. Ireland kept both. That's very Irish."},
  {tp:"culture",title:"Na Blascaodaí",ch:"Read about the Blasket Islands — the last all-Irish-speaking community, abandoned in 1953. 22 people left.",tip:"'An t-Oileánach' by Tomás Ó Criomhthain tells their story. One of Ireland's greatest books."},
  {tp:"culture",title:"Craic",ch:"Find out where the word 'craic' actually comes from. It's not originally Irish — but Ireland owns it now.",tip:"It came from Scots English 'crack' meaning news/chat. Irish adopted it and made it their own."},
  {tp:"culture",title:"An Ghaeilge agus an Gorta",ch:"Learn how the Famine of 1845-52 nearly killed the Irish language. And how it survived anyway.",tip:"Irish speakers fell from 4 million to under 1 million in a decade. Yet the language held on."},
  {tp:"culture",title:"Conradh na Gaeilge",ch:"Learn about Conradh na Gaeilge — founded 1893 to save the Irish language, still active today.",tip:"Douglas Hyde, its first president, later became Ireland's first President. Language = power."},
  {tp:"culture",title:"Éire",ch:"Find out what 'Éire' actually means — the origin of the name Ireland itself.",tip:"Named after the goddess Ériu. 'Éire' appears on Irish coins, passports, and stamps."},
  {tp:"culture",title:"Logainmneacha",ch:"Learn the meanings of 3 place names near you that begin with: Baile, Cill, or Dún.",tip:"Baile = town/homestead. Cill = church. Dún = fort. These are the bones of Ireland's map."},
  // ── NATURE ──
  {tp:"nature",title:"Aimsir an Lae",ch:"Describe today's exact weather in Irish — at least 3 words. Say it out loud.",tip:"Tá sé fuar (cold), fliuch (wet), gaofar (windy), grianmhar (sunny), scamallach (cloudy)."},
  {tp:"nature",title:"Cad É Sin?",ch:"Go outside or look out the window. Name 5 things you can see in Irish — no dictionary.",tip:"Crann (tree), spéir (sky), bóthar (road), éan (bird), teach (house). You know more than you think."},
  {tp:"nature",title:"Planda",ch:"Find a plant, tree, or flower nearby and look up its Irish name. Say it 3 times.",tip:"Caisearbhán = dandelion. Neantóg = nettle. Ros = rose. Ireland has a name for everything."},
  {tp:"nature",title:"Éanacha",ch:"Count every bird you see today in Irish. Keep a running total.",tip:"Éan = bird. Lon dubh = blackbird. Dreoilín = wren. The wren has its own festival in December."},
  {tp:"nature",title:"Séasúir",ch:"Learn the Irish names for all 4 seasons and which one you're in right now. Say them out loud.",tip:"Earrach (spring), Samhradh (summer), Fómhar (autumn), Geimhreadh (winter)."},
  {tp:"nature",title:"An Ghrian",ch:"Look at the sky for 2 minutes and describe what you see using only Irish words.",tip:"Grian (sun), gealach (moon), réalta (star), scamall (cloud), spéir ghorm (blue sky)."},
  // ── MUSIC ──
  {tp:"music",title:"Liam Ó Maonlaí",ch:"Find Liam Ó Maonlaí singing anything on YouTube. Close your eyes. This is what Irish sounds like.",tip:"He's from Hothouse Flowers but his solo Irish work is extraordinary. Try 'An Mhaighdean Mhara'."},
  {tp:"music",title:"Siúil A Rún",ch:"Find 'Siúil A Rún' — listen to the full song and read the words. It's a farewell song, centuries old.",tip:"'Walk, my love' — written for a soldier leaving for France. You'll feel every word."},
  {tp:"music",title:"Amhrán Gaeilge",ch:"Search 'amhrán Gaeilge' on Spotify or YouTube and build a playlist of 5 Irish-language songs.",tip:"You now have Irish music for your commute, gym, or cooking. Let it work passively."},
  {tp:"music",title:"Seisiún Traidisiúnta",ch:"Find a traditional Irish music session happening near you this week. Even just show up to listen.",tip:"Pubs across Ireland host free sessions. No need to play — just sit, listen, and order something."},
  {tp:"music",title:"Clannad",ch:"Listen to Clannad — they sing in Irish and English. Start with 'Theme from Harry's Game'.",tip:"That song was used in an ad in 1982 and introduced the world to Irish-language music."},
  // ── GAME ──
  {tp:"game",title:"Na Laethanta",ch:"Name all 7 days of the week in Irish without looking. Time yourself. Can you do it in 15 seconds?",tip:"Luan, Máirt, Céadaoin, Déardaoin, Aoine, Satharn, Domhnach."},
  {tp:"game",title:"Na Míonna",ch:"Name all 12 months in Irish from memory. Give yourself 2 minutes — no peeking.",tip:"Eanáir, Feabhra, Márta, Aibreán, Bealtaine, Meitheamh, Iúil, Lúnasa, Meán Fómhair, Deireadh Fómhair, Samhain, Nollaig."},
  {tp:"game",title:"Uimhreacha go 20",ch:"Count from 1 to 20 in Irish as fast as you can. Try to beat 20 seconds.",tip:"After 10: a haon déag, a dó dhéag... it gets tricky. That's the fun."},
  {tp:"game",title:"Dúshláin Teanga",ch:"Try this sentence out loud 3 times: 'Tá na ba ag ithe féir sa ghort.' Get faster each time.",tip:"'The cows are eating grass in the field.' Irish tongue-twisters are surprisingly satisfying."},
  {tp:"game",title:"Bia",ch:"Name 10 food items in Irish from memory — no dictionary, no looking back in the app.",tip:"Arán, im, bainne, ubh, feoil, iasc, práta, úll, caife, tae. Did you get them all?"},
  {tp:"game",title:"Dath Gach Rud",ch:"Look around you right now. Name the colour of 10 different objects in Irish — out loud.",tip:"Challenge: try to find something corcra (purple) and something donn (brown) near you."},
  // ── LEARN ──
  {tp:"learn",title:"Tá vs Is",ch:"Learn the difference between 'tá' and 'is' in Irish. It's not what you'd expect.",tip:"'Tá' = state/condition. 'Is' = classification/identity. 'Tá sé mór' (he is big). 'Is fear é' (he is a man)."},
  {tp:"learn",title:"Níl Tá/Níl",ch:"Irish has no 'yes' or 'no'. You repeat the verb. 'An bhfuil tú?' — 'Tá' or 'Níl'. Try 5 questions.",tip:"'Are you hungry?' → 'Tá' (I am) or 'Níl' (I am not). No single yes/no word exists."},
  {tp:"learn",title:"Ag + Briathar",ch:"Learn 'ag' + verb-noun: ag ithe (eating), ag ól (drinking), ag siúl (walking). Say 5 sentences.",tip:"'Tá mé ag ithe' = I am eating. 'Tá sé ag siúl' = He is walking. You're speaking Irish now."},
  {tp:"learn",title:"Mothúcháin",ch:"Learn 5 emotions using 'tá ___ orm' (emotion is on me). Feel how Irish sees feelings.",tip:"Tá áthas orm (happy), tá brón orm (sad), tá fearg orm (angry), tá eagla orm (scared), tá náire orm (embarrassed)."},
  {tp:"learn",title:"Dia Dhuit",ch:"Learn what 'Dia dhuit' literally means — and why it's the most profound hello in any language.",tip:"'God be with you'. The reply 'Dia is Muire dhuit' = 'God and Mary be with you'. Two people blessing each other."},
];

// Daily challenge type colours
const TYPE_CLR={speaking:"#1B4332",listening:"#1A5A8A",writing:"#B8860B",explore:"#2D6A4F",digital:"#5A4A8A",culture:"#8A3A3A",nature:"#2D6A2A",music:"#8A5A2A",game:"#4A4A8A",learn:"#6A3A6A"};
const TYPE_ICON={speaking:"🗣️",listening:"👂",writing:"✍️",explore:"📍",digital:"📱",culture:"☘️",nature:"🌿",music:"🎵",game:"🎮",learn:"🧠"};

// Irish season detector
function getIrishSeason(date){
  const m=date.getMonth()+1,d=date.getDate();
  if(m===2&&d<=7)return{name:"Imbolc",en:"St. Brigid's Season",icon:"🌸",color:"#C9A227"};
  if(m===3&&d>=14&&d<=19)return{name:"Lá Fhéile Pádraig",en:"St. Patrick's Week",icon:"☘️",color:"#1B4332"};
  if(m===5&&d<=7)return{name:"Bealtaine",en:"May Day Season",icon:"🌸",color:"#2D6A2A"};
  if(m===8&&d<=7)return{name:"Lúnasa",en:"Harvest Season",icon:"🌾",color:"#C9A227"};
  if(m===10&&d>=27)return{name:"Samhain",en:"Halloween Season",icon:"🎃",color:"#8A3A3A"};
  if(m===12&&d>=22)return{name:"Nollaig",en:"Christmas Season",icon:"⭐",color:"#1B4332"};
  if(m>=3&&m<=5)return{name:"Earrach",en:"Spring",icon:"🌱",color:"#2D6A4F"};
  if(m>=6&&m<=8)return{name:"Samhradh",en:"Summer",icon:"☀️",color:"#C9A227"};
  if(m>=9&&m<=11)return{name:"Fómhar",en:"Autumn",icon:"🍂",color:"#8A5A2A"};
  return{name:"Geimhreadh",en:"Winter",icon:"❄️",color:"#3A5A8A"};
}

// Day-of-year → deterministic daily pick
function getDayOfYear(date){const s=new Date(date.getFullYear(),0,0);return Math.floor((date-s)/(1000*60*60*24));}
function getDailyChallenge(pool,date){return pool[getDayOfYear(date)%pool.length];}
function getWordOfDay(vocab,date){return vocab[getDayOfYear(date)%vocab.length];}
function todayKey(){return new Date().toISOString().split("T")[0];}

// Bottom navigation component
const BottomNav = ({view,setView,c,hd,bd}) => {
  const tabs=[
    {id:"home", icon:"🏠", label:"Baile"},
    {id:"map",  icon:"☘️", label:"30 Lá"},
    {id:"dict", icon:"📖", label:"Foclóir"},
    {id:"stats",icon:"📊", label:"Stats"},
    {id:"settings",icon:"⚙️",label:"Socruithe"},
  ];
  return(
    <div style={{
      position:"fixed",bottom:0,left:0,right:0,
      background:c.nav,
      borderTop:`1px solid ${c.bd}`,
      display:"flex",zIndex:50,
      paddingBottom:"env(safe-area-inset-bottom)",
      backdropFilter:"blur(12px)",
      WebkitBackdropFilter:"blur(12px)",
    }}>
      {tabs.map(t=>{
        const active=view===t.id||( view==="day"&&t.id==="home");
        return(
          <button key={t.id} onClick={()=>setView(t.id)} style={{
            flex:1,padding:"8px 2px 10px",background:"none",border:"none",
            cursor:"pointer",display:"flex",flexDirection:"column",
            alignItems:"center",gap:2,transition:"opacity 0.15s",
          }}>
            <div style={{
              width:40,height:32,borderRadius:10,
              background:active?`${c.acc}18`:"transparent",
              display:"flex",alignItems:"center",justifyContent:"center",
              transition:"background 0.2s",
            }}>
              <span style={{fontSize:"1.15rem",lineHeight:1}}>{t.icon}</span>
            </div>
            <span style={{
              ...bd,fontSize:"0.6rem",
              color:active?c.acc:c.tx3,
              fontWeight:active?700:400,
              letterSpacing:"0.02em",
              transition:"color 0.2s",
            }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// Generate quiz questions from completed days
const makeQuiz = (done) => {
  const pool = done.map(d => CH[d-1]).filter(Boolean);
  if (pool.length < 2) return [];
  const shuffled = [...pool].sort(() => Math.random()-0.5).slice(0,3);
  return shuffled.map(ch => {
    const wrong = CH.filter(x=>x.day!==ch.day).sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.m);
    const opts = [...wrong, ch.m].sort(()=>Math.random()-0.5);
    return { phrase: ch.p, answer: ch.m, opts, pr: ch.pr };
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
  const [splash,setSplash]=useState(true);
  const [view,setView]=useState("home"); // home | day | map | quiz
  const [selDay,setSelDay]=useState(null);
  const [celeb,setCeleb]=useState(null);
  const [dk,setDk]=useState(false);
  const [quiz,setQuiz]=useState(null);
  const [quizIdx,setQuizIdx]=useState(0);
  const [quizScore,setQuizScore]=useState(0);
  const [quizPicked,setQuizPicked]=useState(null);
  const [quizDone,setQuizDone]=useState(false);
  const [search,setSearch]=useState("");
  const [filterCat,setFilterCat]=useState("all");
  const c = dk ? T.dark : T.light;

  useEffect(()=>{(async()=>{
    const s=await loadS();
    if(s){setSt(s);if(s.dk)setDk(true)}
    else{const i={done:[],bonus:[],tasksDone:[],streak:0,best:0,dk:false,onboarded:false,started:new Date().toISOString(),dailyLog:{}};await saveS(i);setSt(i)}
    setLoading(false);
  })()},[]);


  const save=useCallback(async(ns)=>{setSt(ns);await saveS(ns)},[]);
  const toggle=async()=>{const n=!dk;setDk(n);if(st)await save({...st,dk:n})};

  const markDailyDone=useCallback(async()=>{if(!st)return;const k=todayKey();const dl={...(st.dailyLog||{}),[k]:true};await save({...st,dailyLog:dl});},[st,save]);
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
  const doTask=async(day,idx)=>{
    if(!st)return;
    const key=`${day}-${idx}`;
    if(st.tasksDone&&st.tasksDone.includes(key))return;
    await save({...st,tasksDone:[...(st.tasksDone||[]),key]});
  };
  const doReset=async()=>{
    if(!confirm("Reset all progress? Cannot undo."))return;
    await save({done:[],bonus:[],tasksDone:[],streak:0,best:0,dk,onboarded:true,started:new Date().toISOString()});
    setView("home");setSelDay(null);
  };

  if(splash) return (
    <div style={{
      minHeight:"100vh",background:"#1B4332",display:"flex",flexDirection:"column",
      alignItems:"center",justifyContent:"center",padding:"40px 32px",
      animation:"splashRise 0.4s ease both",
    }}>
      <style>{`
        @keyframes splashRise{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes splashSpin{0%{transform:scale(0) rotate(-40deg);opacity:0}60%{transform:scale(1.15) rotate(6deg);opacity:1}100%{transform:scale(1) rotate(0deg);opacity:1}}
        @keyframes splashFadeOut{from{opacity:1}to{opacity:0;pointer-events:none}}
        @keyframes loadFill{from{width:0%}to{width:100%}}
        @keyframes splashDot{0%,80%,100%{opacity:0.3;transform:scale(0.8)}40%{opacity:1;transform:scale(1)}}
      `}</style>

      {/* Shamrock */}
      <div style={{fontSize:"5.5rem",marginBottom:32,animation:"splashSpin 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.2s both"}}>
        ☘️
      </div>

      {/* Title */}
      <div style={{textAlign:"center",marginBottom:16,animation:"splashRise 0.7s 0.7s ease both"}}>
        <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:"2.4rem",fontWeight:700,color:"#fff",letterSpacing:"0.02em",lineHeight:1.2,marginBottom:10}}>
          Gaeltacht Connect
        </div>
        <div style={{fontFamily:"'Lato',sans-serif",fontSize:"1rem",color:"rgba(255,255,255,0.55)",fontStyle:"italic",letterSpacing:"0.04em"}}>
          The old words are listening.
        </div>
      </div>

      {/* Tagline */}
      <div style={{animation:"splashRise 0.7s 1.1s ease both",textAlign:"center",marginBottom:48}}>
        <div style={{fontFamily:"'Lato',sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",letterSpacing:"0.1em",textTransform:"uppercase"}}>
          30 real challenges · Built in Ireland
        </div>
      </div>

      {/* Button */}
      <div style={{animation:"splashRise 0.7s 1.6s ease both",width:"100%",maxWidth:320}}>
        <button
          onClick={()=>setSplash(false)}
          style={{
            width:"100%",padding:"18px",
            background:"rgba(255,255,255,0.12)",
            border:"1.5px solid rgba(255,255,255,0.35)",
            borderRadius:14,cursor:"pointer",
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:"1.4rem",fontWeight:700,
            color:"#fff",letterSpacing:"0.04em",
            transition:"background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.2)";e.currentTarget.style.borderColor="rgba(255,255,255,0.6)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.12)";e.currentTarget.style.borderColor="rgba(255,255,255,0.35)"}}
        >
          Tosaigh!
        </button>
        <div style={{fontFamily:"'Lato',sans-serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.3)",textAlign:"center",marginTop:10,letterSpacing:"0.06em"}}>
          Let's begin
        </div>
      </div>
    </div>
  );

  if(loading) return (<div style={{minHeight:"100vh",background:"#1B4332"}}/>);
  if(!st)return null;

  const total=st.done.length;
  const nextDay=total<30?total+1:30;
  const pct=total/30;
  const currentCh=CH[nextDay-1];
  const allDone=total===30;

  const css=`
*{margin:0;padding:0;box-sizing:border-box}
@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes riseStrong{from{opacity:0;transform:translateY(50px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.18)}100%{transform:scale(1);opacity:1}}
@keyframes stamp{0%{transform:scale(2) rotate(-15deg);opacity:0}60%{transform:scale(0.9) rotate(3deg);opacity:1}100%{transform:scale(1) rotate(0deg);opacity:1}}
@keyframes wiggle{0%,100%{transform:rotate(0deg)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}
@keyframes shimmer{0%,100%{opacity:0.3}50%{opacity:0.7}}
@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}
@keyframes glow{0%,100%{box-shadow:4px 4px 0 ${c.ink}}50%{box-shadow:6px 6px 0 ${c.ink}}}
@keyframes confetti-fall{from{transform:translateY(0) rotate(0deg);opacity:1}to{transform:translateY(110vh) rotate(720deg);opacity:0}}
@keyframes shamrock-spin{0%{transform:scale(0) rotate(-30deg)}60%{transform:scale(1.2) rotate(8deg)}100%{transform:scale(1) rotate(0deg)}}
@keyframes slide-up{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse-ring{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.6);opacity:0}}
html{-webkit-font-smoothing:antialiased}
button:active{opacity:0.85;transform:scale(0.98)!important}
`;

  const hd = {fontFamily:"'Playfair Display',Georgia,serif",letterSpacing:"0.01em"};
  const bd = {fontFamily:"'Lato',system-ui,sans-serif"};

  // ═══════════════════════════════
  // ONBOARDING
  // ═══════════════════════════════
  if(!st.onboarded){
    const features=[
      {icon:"🎯",title:"One real challenge per day",desc:"Go out and use the language — not flashcards, not drills"},
      {icon:"🗣️",title:"Phrases that actually matter",desc:"Order a coffee, greet a neighbour, read a sign"},
      {icon:"🔥",title:"30 days to make it stick",desc:"A streak, a habit, a connection to something real"},
    ];
    return(
      <div style={{minHeight:"100vh",background:c.hero,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 0 40px"}}>
        <style>{css}</style>

        {/* Top decorative area */}
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"48px 32px 24px",textAlign:"center"}}>
          <div style={{fontSize:"4rem",marginBottom:24,animation:"shamrock-spin 0.8s cubic-bezier(0.34,1.56,0.64,1) both"}}>☘️</div>
          <h1 style={{...hd,fontSize:"2.2rem",color:"#fff",lineHeight:1.2,marginBottom:12,animation:"rise 0.6s 0.3s ease both",opacity:0}}>
            Bring Irish into<br/>your daily life
          </h1>
          <p style={{...bd,fontSize:"0.95rem",color:"rgba(255,255,255,0.6)",lineHeight:1.7,animation:"rise 0.6s 0.55s ease both",opacity:0}}>
            30 real-world challenges.<br/>One per day. No excuses.
          </p>
        </div>

        {/* Bottom sheet */}
        <div style={{background:c.bg,borderRadius:"24px 24px 0 0",padding:"28px 24px 8px",animation:"rise 0.5s 0.7s ease both",opacity:0}}>
          <div style={{display:"flex",flexDirection:"column",gap:0,marginBottom:28}}>
            {features.map((f,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:16,padding:"16px 0",borderBottom:i<features.length-1?`1px solid ${c.bd}`:"none",animation:`rise 0.5s ${0.8+i*0.1}s ease both`,opacity:0}}>
                <div style={{width:40,height:40,borderRadius:12,background:c.cardAlt,border:`1px solid ${c.bd}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.2rem"}}>
                  {f.icon}
                </div>
                <div style={{paddingTop:2}}>
                  <div style={{...hd,fontSize:"1rem",color:c.tx,marginBottom:3}}>{f.title}</div>
                  <div style={{...bd,fontSize:"0.82rem",color:c.tx3,lineHeight:1.5}}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={async()=>await save({...st,onboarded:true})}
            style={{width:"100%",padding:"17px",borderRadius:14,background:c.btn,border:"none",color:c.btnTx,...hd,fontSize:"1.2rem",letterSpacing:"0.03em",cursor:"pointer",marginBottom:16,animation:"rise 0.5s 1.1s ease both",opacity:0}}
          >
            Tosaigh! — Let's begin
          </button>

          <p style={{...bd,fontSize:"0.75rem",fontStyle:"italic",color:c.tx3,lineHeight:1.7,textAlign:"center",animation:"rise 0.5s 1.2s ease both",opacity:0}}>
            "Is fearr Gaeilge briste ná Béarla cliste"<br/>
            <span style={{opacity:0.55}}>Broken Irish is better than clever English</span>
          </p>
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
                <button onClick={()=>speak(q.phrase,q.pr)} style={{background:"none",border:`1px solid ${c.phraseBd}`,borderRadius:20,padding:"5px 14px",color:c.acc,...bd,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>
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
    const dayColor=CAT_CLR[ch.cat]||c.acc;

    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:90}}>
        <style>{css}</style>

        {/* ── TOP NAV ── */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px"}}>
          <button onClick={()=>{setView("home");setSelDay(null)}} style={{display:"flex",alignItems:"center",gap:6,background:"none",border:"none",cursor:"pointer",color:c.tx3,...bd,fontSize:"0.9rem",padding:"4px 0"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Ar ais
          </button>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{...bd,fontSize:"0.72rem",color:c.tx3}}>Lá {ch.day} / 30</span>
            <div style={{display:"flex",gap:3}}>
              {[1,2,3,4,5].map(i=>(
                <div key={i} style={{width:5,height:5,borderRadius:"50%",background:i<=ch.d?dayColor:c.bd}}/>
              ))}
            </div>
          </div>
        </div>

        {locked?(
          <div style={{padding:"100px 32px",textAlign:"center",animation:"rise 0.5s ease"}}>
            <div style={{fontSize:"3rem",marginBottom:16,opacity:0.4}}>🔒</div>
            <div style={{...hd,fontSize:"1.3rem",color:c.tx3,marginBottom:8}}>Glasáilte</div>
            <p style={{...bd,fontSize:"0.9rem",color:c.tx3}}>Complete Lá {ch.day-1} first.</p>
          </div>
        ):(
          <div style={{maxWidth:520,margin:"0 auto",padding:"0 20px 20px",animation:"rise 0.4s ease"}}>

            {/* ── PHRASE HERO ── */}
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,overflow:"hidden",boxShadow:c.shadow,marginBottom:16}}>
              <div style={{height:4,background:dayColor}}/>
              <div style={{padding:"24px 22px 28px"}}>
                {/* Category + title */}
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
                  <span style={{fontSize:"1rem"}}>{CATS[ch.cat]}</span>
                  <div>
                    <div style={{...hd,fontSize:"1.6rem",fontWeight:700,color:c.tx,lineHeight:1.2}}>{ch.t}</div>
                    <div style={{...bd,fontSize:"0.82rem",color:c.tx3,fontStyle:"italic"}}>{ch.e}</div>
                  </div>
                </div>

                {/* Big phrase */}
                <div style={{textAlign:"center",borderTop:`1px solid ${c.bd}`,borderBottom:`1px solid ${c.bd}`,padding:"24px 8px",margin:"0 0 20px"}}>
                  <div style={{...hd,fontSize:"2.4rem",fontWeight:700,fontStyle:"italic",color:c.acc,lineHeight:1.2,marginBottom:10}}>
                    {ch.p}
                  </div>
                  <div style={{...bd,fontSize:"0.88rem",color:c.tx3,letterSpacing:"0.05em",marginBottom:6}}>{ch.pr}</div>
                  <div style={{...bd,fontSize:"0.95rem",color:c.tx2,fontStyle:"italic"}}>"{ch.m}"</div>
                </div>

                {/* Challenge */}
                <p style={{...bd,fontSize:"0.95rem",color:c.tx2,lineHeight:1.75,margin:0}}>{ch.ch}</p>
              </div>
            </div>

            {/* ── TIP ── */}
            <div style={{background:c.tipBg,border:`1px solid ${c.tipBd}`,borderRadius:14,padding:"14px 18px",marginBottom:12,display:"flex",gap:12,alignItems:"flex-start"}}>
              <span style={{fontSize:"1rem",flexShrink:0,marginTop:1}}>💡</span>
              <p style={{...bd,fontSize:"0.88rem",color:c.tipTx,lineHeight:1.65,margin:0}}>{ch.tip}</p>
            </div>

            {/* ── BONUS ── */}
            <div style={{background:bDone?c.doneBg:c.cardAlt,border:`1px solid ${bDone?c.doneBd:c.bd}`,borderRadius:14,padding:"14px 18px",marginBottom:16,display:"flex",alignItems:"center",gap:12}}>
              <span style={{fontSize:"1rem",flexShrink:0}}>⭐</span>
              <div style={{flex:1}}>
                <div style={{...bd,fontSize:"0.65rem",color:c.gold,letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:700,marginBottom:3}}>Bonus</div>
                <p style={{...bd,fontSize:"0.88rem",color:c.tx2,margin:0,lineHeight:1.5}}>{ch.b}</p>
              </div>
              {done&&!bDone&&(
                <button onClick={()=>doBonus(ch.day)} style={{background:"none",border:`1px solid ${c.gold}88`,borderRadius:8,padding:"6px 14px",color:c.gold,...bd,fontSize:"0.78rem",fontWeight:700,cursor:"pointer",flexShrink:0}}>
                  Déanta
                </button>
              )}
              {bDone&&<span style={{fontSize:"1.1rem"}}>✅</span>}
            </div>

            {/* ── MINI TASKS ── */}
            <div style={{marginBottom:20}}>
              <div style={{...bd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:700,marginBottom:10}}>Mini challenges</div>
              {ch.tasks&&ch.tasks.map((task,i)=>{
                const key=`${ch.day}-${i}`;
                const isDone=st.tasksDone&&st.tasksDone.includes(key);
                return(
                  <div key={i} onClick={()=>doTask(ch.day,i)}
                    style={{display:"flex",alignItems:"center",gap:12,background:isDone?c.doneBg:c.card,border:`1px solid ${isDone?c.doneBd:c.bd}`,borderRadius:12,padding:"13px 16px",marginBottom:8,cursor:"pointer",transition:"all 0.2s"}}>
                    <span style={{fontSize:"1.1rem",flexShrink:0}}>{task.icon}</span>
                    <span style={{...bd,fontSize:"0.88rem",color:isDone?c.doneTx:c.tx2,flex:1,lineHeight:1.45,textDecoration:isDone?"line-through":"none"}}>{task.text}</span>
                    <div style={{width:20,height:20,borderRadius:"50%",border:`1.5px solid ${isDone?c.doneTx:c.bd}`,background:isDone?c.doneTx:"none",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      {isDone&&<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── ACTION ── */}
            {!done?(
              <button onClick={()=>doComplete(ch.day)} style={{width:"100%",padding:"17px",borderRadius:14,background:c.btn,border:"none",color:c.btnTx,...hd,fontSize:"1.2rem",letterSpacing:"0.02em",cursor:"pointer"}}>
                Déanta — Mark complete ✓
              </button>
            ):(
              <div>
                <div style={{width:"100%",padding:"15px",borderRadius:14,background:c.doneBg,border:`1px solid ${c.doneBd}`,textAlign:"center",...hd,fontSize:"1rem",color:c.doneTx,marginBottom:12}}>
                  ✅ Lá {ch.day} completed!
                </div>
                <button onClick={()=>shareProgress(ch.day,total,st.streak)} style={{width:"100%",background:"none",border:`1px solid ${c.bd}`,borderRadius:12,padding:"12px",color:c.tx3,...bd,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                  Share progress
                </button>
              </div>
            )}

            {/* ── NAV ARROWS ── */}
            <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
              {ch.day>1
                ?<button onClick={()=>setSelDay(ch.day-1)} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:10,padding:"9px 16px",color:c.tx3,...bd,fontSize:"0.82rem",cursor:"pointer"}}>← Lá {ch.day-1}</button>
                :<div/>}
              {ch.day<30&&(
                <button onClick={()=>setSelDay(ch.day+1)} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:10,padding:"9px 16px",color:c.tx3,...bd,fontSize:"0.82rem",cursor:"pointer"}}>Lá {ch.day+1} →</button>
              )}
            </div>
          </div>
        )}

        {/* ── CELEBRATIONS ── */}
        {celeb==="day"&&(
          <>
            <Confetti/>
            <div onClick={()=>setCeleb(null)} style={{position:"fixed",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(27,67,50,0.96)",zIndex:100,backdropFilter:"blur(8px)"}}>
              {/* Radiating rings */}
              <div style={{position:"absolute",width:260,height:260,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.08)",animation:"pulse-ring 2s ease-out infinite"}}/>
              <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.12)",animation:"pulse-ring 2s 0.4s ease-out infinite"}}/>
              <div style={{position:"absolute",width:140,height:140,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.18)",animation:"pulse-ring 2s 0.8s ease-out infinite"}}/>

              <div style={{textAlign:"center",animation:"pop 0.6s cubic-bezier(0.34,1.56,0.64,1)",padding:"0 32px",position:"relative"}}>
                {/* Big shamrock */}
                <div style={{fontSize:"5rem",marginBottom:8,animation:"shamrock-spin 0.8s cubic-bezier(0.34,1.56,0.64,1) both"}}>☘️</div>

                {/* Main title */}
                <div style={{...hd,fontSize:"3rem",color:"#fff",marginBottom:6,letterSpacing:"0.02em"}}>Maith thú!</div>
                <div style={{...bd,fontSize:"0.88rem",color:"rgba(255,255,255,0.55)",fontStyle:"italic",marginBottom:20}}>Well done!</div>

                {/* Day pill */}
                <div style={{display:"inline-block",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:20,padding:"8px 24px",marginBottom:16}}>
                  <span style={{...hd,fontSize:"1.1rem",color:"#fff"}}>Lá {selDay}</span>
                  <span style={{...bd,fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",marginLeft:8}}>of 30</span>
                </div>

                {/* Streak bonus */}
                {st.streak>=2&&(
                  <div style={{...bd,fontSize:"0.88rem",color:c.gold,marginBottom:12}}>
                    🔥 {st.streak} day streak!
                  </div>
                )}

                {/* Week milestone */}
                {[7,14,21].includes(selDay)&&(
                  <div style={{background:"rgba(201,162,39,0.15)",border:"1px solid rgba(201,162,39,0.3)",borderRadius:12,padding:"10px 20px",marginBottom:12}}>
                    <div style={{...hd,fontSize:"1rem",color:c.gold}}>Week {selDay/7} complete! 🏆</div>
                    <div style={{...bd,fontSize:"0.75rem",color:"rgba(255,255,255,0.5)",marginTop:4}}>Quiz coming up…</div>
                  </div>
                )}

                {/* 30 days! */}
                {selDay===30&&(
                  <div style={{background:"rgba(201,162,39,0.2)",border:"1px solid rgba(201,162,39,0.4)",borderRadius:12,padding:"12px 20px",marginBottom:12}}>
                    <div style={{...hd,fontSize:"1.2rem",color:c.gold}}>Tá Gaeilge agat! 🎊</div>
                    <div style={{...bd,fontSize:"0.78rem",color:"rgba(255,255,255,0.6)",marginTop:4}}>You have Irish. All 30 days done.</div>
                  </div>
                )}

                <div style={{...bd,fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",marginTop:24}}>tap to continue</div>
              </div>
            </div>
          </>
        )}
        {celeb==="bonus"&&(
          <div style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",zIndex:100,background:c.card,border:`1px solid ${c.gold}44`,borderRadius:12,padding:"10px 24px",...hd,fontSize:"0.9rem",color:c.gold,animation:"pop 0.3s",boxShadow:c.shadow}}>
            ⭐ Bonus déanta!
          </div>
        )}
        <BottomNav view="day" setView={(v)=>{setView(v);setSelDay(null);}} c={c} hd={hd} bd={bd}/>
      </div>
    );
  }

  // ═══════════════════════════════
  // DICTIONARY VIEW
  // ═══════════════════════════════
  if(view==="dict"){
    const allWords=[
      ...CH.map(ch=>({p:ch.p,pr:ch.pr,m:ch.m,cat:ch.cat,day:ch.day})),
      ...VOCAB.map(v=>({...v,day:null})),
    ];
    const dictCats=["all",...[...new Set(allWords.map(w=>w.cat))]];
    const q=search.toLowerCase();
    const filtered=allWords.filter(w=>{
      const matchCat=filterCat==="all"||w.cat===filterCat;
      const matchSearch=!q||w.p.toLowerCase().includes(q)||w.m.toLowerCase().includes(q)||w.pr.toLowerCase().includes(q);
      return matchCat&&matchSearch;
    });
    const forvoUrl=(word)=>`https://forvo.com/search/${encodeURIComponent(word.split(/[\s,!?]/)[0])}/ga/`;
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,animation:"fadeIn 0.25s ease",paddingBottom:80}}>
        <style>{css}</style>
        <div style={{background:c.hero,padding:"24px 20px 20px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <h1 style={{...hd,fontSize:"1.8rem",color:"#fff"}}>📖 Foclóir</h1>
            <button onClick={toggle} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,width:34,height:34,cursor:"pointer",color:"#fff",fontSize:"0.9rem"}}>{dk?"☀️":"🌙"}</button>
          </div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cuardach... / Search" style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"none",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:"0.9rem",fontFamily:"'Lato',sans-serif",outline:"none",boxSizing:"border-box"}}/>
        </div>
        <div style={{display:"flex",gap:6,padding:"10px 14px",overflowX:"auto",borderBottom:`1px solid ${c.bd}`}}>
          {dictCats.map(cat=>(
            <button key={cat} onClick={()=>setFilterCat(cat)} style={{flexShrink:0,padding:"5px 12px",borderRadius:20,border:`1px solid ${filterCat===cat?(CAT_CLR[cat]||c.acc):c.bd}`,background:filterCat===cat?(CAT_CLR[cat]||c.acc):c.card,color:filterCat===cat?"#fff":c.tx3,...bd,fontSize:"0.72rem",cursor:"pointer",whiteSpace:"nowrap",fontWeight:filterCat===cat?700:400}}>
              {cat==="all"?"🌍 All":(CATS[cat]||"")+" "+cat}
            </button>
          ))}
        </div>
        <div style={{padding:"8px 20px",...bd,fontSize:"0.72rem",color:c.tx3}}>{filtered.length} words · <a href="https://forvo.com/languages/ga/" target="_blank" rel="noopener" style={{color:c.acc}}>Forvo Irish →</a></div>
        <div style={{padding:"0 16px"}}>
          {filtered.map((w,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 4px",borderBottom:`1px solid ${c.bd}`,animation:`rise 0.3s ${Math.min(i*0.015,0.25)}s ease both`}}>
              <div style={{width:36,height:36,borderRadius:8,background:CAT_CLR[w.cat]||c.acc,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,opacity:0.9}}>
                <span style={{fontSize:"0.9rem"}}>{CATS[w.cat]||"📝"}</span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{...hd,fontSize:"1.05rem",color:c.acc}}>{w.p}</div>
                <div style={{...bd,fontSize:"0.7rem",color:c.tx3}}>/{w.pr}/</div>
                <div style={{...bd,fontSize:"0.82rem",color:c.tx2}}>{w.m}</div>
              </div>
              <a href={forvoUrl(w.p)} target="_blank" rel="noopener" style={{background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:8,width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",fontSize:"0.95rem"}}>
                🔊
              </a>
            </div>
          ))}
          {filtered.length===0&&<div style={{textAlign:"center",padding:"40px",...bd,color:c.tx3,fontStyle:"italic"}}>Níor aimsíodh aon rud — Nothing found</div>}
        </div>
        <BottomNav view={view} setView={setView} c={c} hd={hd} bd={bd}/>
      </div>
    );
  }

  // ═══════════════════════════════
  // STATS VIEW
  // ═══════════════════════════════
  if(view==="stats"){
    const daysSince=st.started?Math.floor((Date.now()-new Date(st.started).getTime())/(1000*60*60*24)):0;
    const wkColors=["#2D6A4F","#1A5FA0","#8A3A8A","#C2541A"];
    const ACHIEVEMENTS=[
      {id:"first",  icon:"🌱", name:"Céad Lá",      nameEn:"First Day",       desc:"Completed your first day",      unlocked:total>=1},
      {id:"week1",  icon:"🔥", name:"Seachtain",    nameEn:"One Week",        desc:"7-day streak achieved",         unlocked:st.best>=7},
      {id:"half",   icon:"⚡", name:"Leath Slí",    nameEn:"Halfway",         desc:"15 days completed",             unlocked:total>=15},
      {id:"bonus5", icon:"⭐", name:"Díograiseoir", nameEn:"The Eager One",   desc:"5 bonus challenges done",       unlocked:st.bonus.length>=5},
      {id:"tasks",  icon:"🎯", name:"Cúramach",     nameEn:"The Careful One", desc:"15 mini tasks completed",       unlocked:(st.tasksDone||[]).length>=15},
      {id:"done",   icon:"☘️", name:"Gaeilgeoir",   nameEn:"Irish Speaker",   desc:"All 30 days completed",         unlocked:total===30},
    ];
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,animation:"fadeIn 0.25s ease",paddingBottom:80}}>
        <style>{css}</style>
        <div style={{background:c.hero,padding:"24px 20px 32px",textAlign:"center"}}>
          <h1 style={{...hd,fontSize:"1.4rem",fontWeight:800,color:"#fff",marginBottom:4}}>Mo Dhul Chun Cinn</h1>
          <p style={{...bd,fontSize:"0.82rem",color:"rgba(255,255,255,0.65)",marginBottom:20}}>My Progress</p>
          <div style={{position:"relative",width:120,height:120,margin:"0 auto"}}>
            <svg width="120" height="120" viewBox="0 0 120 120" style={{transform:"rotate(-90deg)"}}>
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#fff" strokeWidth="8" strokeDasharray={`${(total/30)*314} 314`} strokeLinecap="round" style={{transition:"stroke-dasharray 1s ease"}}/>
            </svg>
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <span style={{...hd,fontSize:"2rem",fontWeight:800,color:"#fff",lineHeight:1}}>{total}</span>
              <span style={{...bd,fontSize:"0.6rem",color:"rgba(255,255,255,0.65)"}}>of 30</span>
            </div>
          </div>
        </div>
        <div style={{padding:"20px",maxWidth:500,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
            {[{label:"Days done",val:total,icon:"✅"},{label:"Bonus done",val:st.bonus.length,icon:"⭐"},{label:"Best streak",val:st.best,icon:"🏆"},{label:"Current streak",val:st.streak,icon:"🔥"},{label:"Days since start",val:daysSince,icon:"📅"},{label:"Complete",val:Math.round(total/30*100)+"%",icon:"📊"}].map((s,i)=>(
              <div key={i} style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,padding:"14px 16px",boxShadow:c.shadow,animation:`rise 0.4s ${i*0.05}s ease both`}}>
                <div style={{fontSize:"1.1rem",marginBottom:5}}>{s.icon}</div>
                <div style={{...hd,fontSize:"1.6rem",fontWeight:800,color:c.acc}}>{s.val}</div>
                <div style={{...bd,fontSize:"0.68rem",color:c.tx3,marginTop:2}}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{...hd,fontSize:"0.82rem",fontWeight:700,color:c.tx,marginBottom:12}}>Week by week</div>
          {WK.map((w,wi)=>{
            const dn=st.done.filter(d=>d>w.start&&d<=w.end).length;
            return(
              <div key={wi} style={{marginBottom:14,animation:`rise 0.4s ${wi*0.08}s ease both`}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                  <span style={{...bd,fontSize:"0.78rem",color:c.tx2}}>Week {wi+1} — {w.en}</span>
                  <span style={{...hd,fontSize:"0.72rem",fontWeight:700,color:wkColors[wi]}}>{dn}/{w.end-w.start}</span>
                </div>
                <div style={{height:8,borderRadius:4,background:c.progBg,overflow:"hidden"}}>
                  <div style={{width:`${(dn/(w.end-w.start))*100}%`,height:"100%",borderRadius:4,background:wkColors[wi],transition:"width 0.8s ease"}}/>
                </div>
              </div>
            );
          })}
          {/* ── ACHIEVEMENTS ── */}
          <div style={{...bd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:700,marginTop:28,marginBottom:12}}>Achievements</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
            {ACHIEVEMENTS.map((a,i)=>(
              <div key={a.id} style={{
                background:a.unlocked?c.card:c.cardAlt,
                border:`1px solid ${a.unlocked?c.doneBd:c.bd}`,
                borderRadius:14,padding:"14px 16px",
                opacity:a.unlocked?1:0.45,
                transition:"all 0.3s",
                animation:`rise 0.4s ${i*0.06}s ease both`,
              }}>
                <div style={{fontSize:"1.6rem",marginBottom:8,filter:a.unlocked?"none":"grayscale(1)"}}>{a.icon}</div>
                <div style={{...hd,fontSize:"0.95rem",color:a.unlocked?c.acc:c.tx3,marginBottom:1}}>{a.name}</div>
                <div style={{...bd,fontSize:"0.68rem",color:c.tx3,fontStyle:"italic",marginBottom:4}}>{a.nameEn}</div>
                <div style={{...bd,fontSize:"0.7rem",color:c.tx3,lineHeight:1.4}}>{a.desc}</div>
                {a.unlocked&&(
                  <div style={{...bd,fontSize:"0.62rem",color:c.doneTx,marginTop:6,fontWeight:700}}>✓ Unlocked</div>
                )}
              </div>
            ))}
          </div>

          <div style={{padding:"16px",background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:14,textAlign:"center",marginBottom:20}}>
            <p style={{...hd,fontSize:"0.88rem",fontStyle:"italic",color:c.tx3,lineHeight:1.7}}>
              {total===0?"Every journey begins with one word."
              :total<10?"You've started. That's more than most."
              :total<20?"You're not just learning — you're reviving."
              :total<30?"Almost there. The language is proud of you."
              :"Tá Gaeilge agat. You did it. 🏆"}
            </p>
          </div>
          {/* ── QUIZ BUTTON ── */}
          {total>=5&&(
            <button onClick={()=>{
              setQuiz(makeQuiz(st.done));
              setQuizIdx(0);setQuizScore(0);setQuizPicked(null);setQuizDone(false);
              setView("quiz");
            }} style={{
              width:"100%",padding:"15px",borderRadius:14,
              background:c.card,border:`1px solid ${c.bd}`,
              color:c.acc,...hd,fontSize:"1rem",letterSpacing:"0.02em",
              cursor:"pointer",boxShadow:c.shadow,marginBottom:12,
              display:"flex",alignItems:"center",justifyContent:"center",gap:10,
            }}>
              <span>🧠</span> Practice quiz — test yourself
            </button>
          )}

          <div style={{textAlign:"center",marginBottom:8}}>
            <button onClick={doReset} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:8,padding:"8px 20px",color:c.tx3,...bd,fontSize:"0.72rem",cursor:"pointer"}}>Reset progress</button>
          </div>
        </div>
        <BottomNav view={view} setView={setView} c={c} hd={hd} bd={bd}/>
      </div>
    );
  }

  // ═══════════════════════════════
  // ═══════════════════════════════
  // SETTINGS VIEW
  // ═══════════════════════════════
  if(view==="settings"){
    const RESOURCES=[
      {name:"Duolingo Irish",url:"https://www.duolingo.com/course/ga/en/Learn-Irish",desc:"Daily bite-sized lessons"},
      {name:"Raidió na Gaeltachta",url:"https://www.rte.ie/rnag/",desc:"Irish-language radio — live + podcasts"},
      {name:"Tuairisc.ie",url:"https://tuairisc.ie/",desc:"Irish-language news"},
      {name:"Teanglann.ie",url:"https://www.teanglann.ie/",desc:"Official Irish dictionary"},
      {name:"Forvo Irish",url:"https://forvo.com/languages/ga/",desc:"Native speaker pronunciation"},
      {name:"r/gaeilge",url:"https://www.reddit.com/r/gaeilge/",desc:"Irish language community on Reddit"},
    ];
    const taskCount=st.tasksDone?st.tasksDone.length:0;
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:80,animation:"fadeIn 0.25s ease"}}>
        <style>{css}</style>
        <div style={{background:c.hero,padding:"24px 20px 20px"}}>
          <h1 style={{...hd,fontSize:"1.8rem",color:"#fff"}}>⚙️ Socruithe</h1>
          <p style={{...bd,fontSize:"0.78rem",color:"rgba(255,255,255,0.6)",marginTop:4}}>Settings</p>
        </div>
        <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px"}}>

          {/* APPEARANCE */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>APPEARANCE</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{fontSize:"1.2rem"}}>{dk?"🌙":"☀️"}</span>
                <div>
                  <div style={{...hd,fontSize:"1rem",color:c.tx}}>Dark Mode</div>
                  <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>Mód dorcha</div>
                </div>
              </div>
              <button onClick={toggle} style={{width:52,height:28,borderRadius:14,background:dk?c.acc:"#ccc",border:"none",position:"relative",cursor:"pointer",transition:"background 0.3s",padding:0}}>
                <div style={{width:20,height:20,borderRadius:"50%",background:"#fff",position:"absolute",top:2,left:dk?28:2,transition:"left 0.3s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/>
              </button>
            </div>
          </div>

          {/* PROGRESS SUMMARY */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>YOUR PROGRESS</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            {[
              {icon:"✅",label:"Days completed",val:`${st.done.length} / 30`},
              {icon:"⭐",label:"Bonus challenges",val:`${st.bonus.length}`},
              {icon:"🎯",label:"Mini tasks done",val:`${taskCount}`},
              {icon:"🔥",label:"Best streak",val:`${st.best} days`},
              {icon:"📅",label:"Days since start",val:`${st.started?Math.floor((Date.now()-new Date(st.started).getTime())/(864e5)):0}`},
            ].map((row,i,arr)=>(
              <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 18px",borderBottom:i<arr.length-1?`2px solid ${c.bd}`:"none"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{fontSize:"1rem"}}>{row.icon}</span>
                  <span style={{...bd,fontSize:"0.88rem",color:c.tx2}}>{row.label}</span>
                </div>
                <span style={{...hd,fontSize:"1rem",color:c.acc}}>{row.val}</span>
              </div>
            ))}
          </div>

          {/* RESOURCES */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>IRISH LANGUAGE RESOURCES</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            {RESOURCES.map((r,i)=>(
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 18px",borderBottom:i<RESOURCES.length-1?`2px solid ${c.bd}`:"none",textDecoration:"none",color:"inherit"}}>
                <div>
                  <div style={{...hd,fontSize:"0.92rem",color:c.acc}}>{r.name}</div>
                  <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{r.desc}</div>
                </div>
                <span style={{color:c.tx3,fontSize:"0.9rem",flexShrink:0}}>→</span>
              </a>
            ))}
          </div>

          {/* ABOUT */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>ABOUT</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,padding:"18px",boxShadow:c.shadow,textAlign:"center"}}>
            <div style={{fontSize:"2.5rem",marginBottom:8}}>☘️</div>
            <div style={{...hd,fontSize:"1.3rem",color:c.tx,marginBottom:4}}>Gaeltacht Connect</div>
            <div style={{...bd,fontSize:"0.78rem",color:c.tx3,lineHeight:1.6,marginBottom:12}}>
              30 real-world challenges to bring Irish into your daily life.<br/>Built in Ireland. For Ireland.
            </div>
            <div style={{...bd,fontSize:"0.72rem",fontStyle:"italic",color:c.tx3,opacity:0.7}}>"Is fearr Gaeilge briste ná Béarla cliste"</div>
          </div>

          {/* DANGER ZONE */}
          <div style={{...hd,fontSize:"0.65rem",color:"#CC3333",letterSpacing:"0.12em",marginBottom:10}}>DANGER ZONE</div>
          <div style={{background:c.card,border:`1px solid #CC333366`,borderRadius:12,marginBottom:20,overflow:"hidden"}}>
            <button onClick={doReset} style={{width:"100%",padding:"16px 18px",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:12,textAlign:"left"}}>
              <span style={{fontSize:"1.1rem"}}>🗑️</span>
              <div>
                <div style={{...hd,fontSize:"0.95rem",color:"#CC3333"}}>Reset all progress</div>
                <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>Clears all completed days, streaks, and tasks</div>
              </div>
            </button>
          </div>

        </div>
        <BottomNav view={view} setView={setView} c={c} hd={hd} bd={bd}/>
      </div>
    );
  }

  // MAP VIEW (all 30 days)
  // ═══════════════════════════════
  if(view==="map"){
    const isNext=(day)=>day===nextDay&&!st.done.includes(day);
    return (
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:80,animation:"rise 0.3s ease"}}>
        <style>{css}</style>

        {/* ── HERO HEADER ── */}
        <div style={{background:c.hero,padding:"24px 20px 28px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <h1 style={{...hd,fontSize:"1.3rem",fontWeight:800,color:"#fff",margin:0}}>☘️ 30 Lá</h1>
            <button onClick={toggle} style={{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:10,width:32,height:32,cursor:"pointer",color:"#fff",fontSize:"0.85rem"}}>{dk?"☀️":"🌙"}</button>
          </div>
          {/* Big progress number */}
          <div style={{textAlign:"center",marginBottom:14}}>
            <div style={{...hd,fontSize:"3.2rem",fontWeight:800,color:"#fff",lineHeight:1}}>
              {total}<span style={{fontSize:"1.4rem",fontWeight:400,opacity:0.45}}>/30</span>
            </div>
            <div style={{...bd,fontSize:"0.78rem",color:"rgba(255,255,255,0.55)",marginTop:4,fontStyle:"italic"}}>
              {total===0?"Your journey begins with a single word."
              :total<10?"Every word you speak makes the language stronger."
              :total<20?"You're not just learning — you're reviving."
              :total<30?`${30-total} days to go. The old words are proud of you.`
              :"Tá Gaeilge agat. You did it."}
            </div>
          </div>
          {/* Header progress bar */}
          <div style={{height:4,borderRadius:2,background:"rgba(255,255,255,0.2)",overflow:"hidden"}}>
            <div style={{width:`${pct*100}%`,height:"100%",background:"rgba(255,255,255,0.85)",borderRadius:2,transition:"width 0.6s ease"}}/>
          </div>
        </div>

        <div style={{maxWidth:900,margin:"0 auto",padding:"16px 16px"}}>

          {/* ── STATS ROW ── */}
          <div style={{display:"flex",gap:8,marginBottom:20}}>
            {[
              {label:"Completed",val:total,icon:"✅",clr:c.acc},
              {label:"Bonus",val:st.bonus.length,icon:"⭐",clr:c.gold},
              ...(st.streak>=2?[{label:"Streak",val:`${st.streak} 🔥`,icon:null,clr:c.gold}]:[]),
            ].map((s,i)=>(
              <div key={i} style={{flex:1,background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,padding:"10px 8px",textAlign:"center",boxShadow:c.shadow}}>
                <div style={{...hd,fontSize:"1.3rem",color:s.clr,lineHeight:1}}>{s.val}</div>
                <div style={{...bd,fontSize:"0.6rem",color:c.tx3,marginTop:3}}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── WEEKS ── */}
          {WK.map((w,wi)=>{
            const wDays=CH.slice(w.start,w.end);
            const wDone=st.done.filter(d=>d>w.start&&d<=w.end).length;
            const wTotal=w.end-w.start;
            const wComplete=wDone===wTotal;
            const wPct=wDone/wTotal;
            return (
              <div key={wi} style={{marginBottom:24}}>
                {/* Week header */}
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <div style={{background:wComplete?c.acc:`${c.acc}15`,border:`1px solid ${wComplete?c.acc:c.bd}`,borderRadius:8,padding:"4px 12px"}}>
                    <span style={{...hd,fontSize:"0.75rem",fontWeight:700,color:wComplete?"#fff":c.acc}}>Seachtain {wi+1}</span>
                  </div>
                  <div style={{lineHeight:1.2}}>
                    <span style={{...hd,fontSize:"0.78rem",color:c.tx}}>{w.name}</span>
                    <span style={{...bd,fontSize:"0.65rem",color:c.tx3,opacity:0.7}}> · {w.en}</span>
                  </div>
                  {wComplete&&<span style={{fontSize:"0.85rem"}}>🏅</span>}
                  <div style={{flex:1}}/>
                  <span style={{...bd,fontSize:"0.65rem",color:wComplete?c.acc:c.tx3,fontWeight:wComplete?700:400}}>{wDone}/{wTotal}</span>
                </div>
                {/* Week mini progress */}
                <div style={{height:3,borderRadius:2,background:c.progBg,overflow:"hidden",marginBottom:10}}>
                  <div style={{width:`${wPct*100}%`,height:"100%",background:wComplete?c.acc:c.progFill,borderRadius:2,transition:"width 0.4s"}}/>
                </div>
                {/* Day cards */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:8}}>
                  {wDays.map(ch=>{
                    const dn=st.done.includes(ch.day);
                    const bn=st.bonus.includes(ch.day);
                    const lk=ch.day>1&&!st.done.includes(ch.day-1)&&!dn;
                    const nx=!dn&&!lk;
                    const here=isNext(ch.day);
                    const cc=CAT_CLR[ch.cat]||c.acc;
                    return (
                      <button key={ch.day} onClick={()=>{setSelDay(ch.day);setView("day")}} style={{
                        background:dn?`${c.acc}10`:c.card,
                        border:here?`2px solid ${cc}`:`1px solid ${dn?c.acc+"28":c.bd}`,
                        borderRadius:14,padding:0,cursor:lk?"not-allowed":"pointer",
                        opacity:lk?0.28:1,textAlign:"left",width:"100%",
                        boxShadow:here?`0 4px 18px ${cc}35`:nx?c.shadow:"none",
                        overflow:"hidden",transition:"all 0.2s",
                      }}>
                        <div style={{height:3,background:dn?c.acc:lk?"transparent":cc}}/>
                        <div style={{padding:"10px 12px 11px"}}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:7}}>
                            <span style={{fontSize:"1.05rem"}}>{lk?"🔒":dn?"✅":CATS[ch.cat]}</span>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2}}>
                              {bn&&<span style={{fontSize:"0.6rem"}}>⭐</span>}
                              {here&&<span style={{...bd,fontSize:"0.52rem",background:cc,color:"#fff",borderRadius:4,padding:"1px 5px",fontWeight:700,letterSpacing:"0.05em"}}>NEXT</span>}
                            </div>
                          </div>
                          <div style={{...bd,fontSize:"0.58rem",color:c.tx3,letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:3}}>Lá {ch.day}</div>
                          <div style={{...hd,fontSize:"0.85rem",fontWeight:700,color:dn?c.acc:nx?c.tx:c.tx3,lineHeight:1.2,marginBottom:2}}>{ch.t}</div>
                          <div style={{...bd,fontSize:"0.67rem",color:c.tx3,fontStyle:"italic"}}>{ch.e}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ── FOOTER ── */}
          <div style={{textAlign:"center",padding:"20px 0 16px",borderTop:`1px solid ${c.bd}`}}>
            <p style={{...hd,fontSize:"0.88rem",fontStyle:"italic",color:c.tx3,lineHeight:1.5,marginBottom:8}}>
              "Is fearr Gaeilge briste ná Béarla cliste"
            </p>
            <div style={{...bd,fontSize:"0.68rem",color:c.tx3,opacity:0.45,marginBottom:14}}>☘️ Gaeltacht Connect — Built in Ireland</div>
            <button onClick={doReset} style={{background:"none",border:"none",color:c.tx3,...bd,fontSize:"0.65rem",cursor:"pointer",opacity:0.3,textDecoration:"underline"}}>Reset progress</button>
          </div>
          <div style={{height:40}}/>
        </div>
        <BottomNav view={view} setView={setView} c={c} hd={hd} bd={bd}/>
      </div>
    );
  }

  // ═══════════════════════════════
  // HOME VIEW
  // ═══════════════════════════════
  const catColor = CAT_CLR[currentCh?.cat] || c.acc;
  const today = new Date();
  const season = getIrishSeason(today);
  const dailyC = getDailyChallenge(DAILY_POOL, today);
  const wod = getWordOfDay(VOCAB, today);
  const dailyDoneToday = st?.dailyLog?.[todayKey()] || false;

  return(
    <div style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column",paddingBottom:72}}>
      <style>{css}</style>

      {/* ── TOP BAR ── */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px 14px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:"1.1rem"}}>☘️</span>
          <span style={{...hd,fontSize:"1rem",fontWeight:600,color:c.tx,letterSpacing:"0.01em"}}>Gaeltacht Connect</span>
        </div>
        <button onClick={toggle} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:8,width:34,height:34,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:c.tx3,fontSize:"0.9rem"}}>
          {dk?"☀️":"🌙"}
        </button>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{flex:1,maxWidth:520,width:"100%",margin:"0 auto",padding:"0 18px",display:"flex",flexDirection:"column",gap:14}}>

        {/* ── SEASON + WORD OF DAY ── */}
        <div style={{display:"flex",gap:8,alignItems:"stretch"}}>
          <div style={{background:season.color+"18",border:`1px solid ${season.color}30`,borderRadius:14,padding:"10px 14px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:72}}>
            <div style={{fontSize:"1.4rem",lineHeight:1}}>{season.icon}</div>
            <div style={{...hd,fontSize:"0.6rem",color:season.color,marginTop:4,fontWeight:700,letterSpacing:"0.04em",textAlign:"center"}}>{season.name}</div>
          </div>
          <div style={{flex:1,background:c.card,border:`1px solid ${c.bd}`,borderRadius:14,padding:"10px 16px",boxShadow:c.shadow}}>
            <div style={{...bd,fontSize:"0.6rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Focal an Lae</div>
            <div style={{...hd,fontSize:"1.15rem",fontWeight:700,color:c.acc,fontStyle:"italic"}}>{wod.p}</div>
            <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{wod.m} <span style={{color:c.tx3,opacity:0.6}}>· /{wod.pr}/</span></div>
          </div>
        </div>

        {allDone ? (
          /* ── ALL DONE ── */
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"40px 0"}}>
            <div style={{fontSize:"4rem",marginBottom:16}}>🏆</div>
            <div style={{...hd,fontSize:"2.2rem",color:c.acc,marginBottom:8}}>30 Lá — Déanta!</div>
            <div style={{...bd,fontSize:"1rem",color:c.tx3,fontStyle:"italic",marginBottom:28,lineHeight:1.6}}>You did something real.<br/>The language is proud of you.</div>
            <button onClick={()=>shareProgress(30,30,st.streak)} style={{background:c.btn,border:"none",borderRadius:12,padding:"14px 32px",color:c.btnTx,...hd,fontSize:"1.1rem",cursor:"pointer",letterSpacing:"0.02em"}}>
              Share achievement →
            </button>
          </div>
        ) : (
          <>
            {/* ── DAY LABEL ── */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:3,height:28,borderRadius:2,background:catColor}}/>
                <div>
                  <div style={{...bd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase"}}>Today's challenge</div>
                  <div style={{...hd,fontSize:"0.95rem",color:c.tx,fontWeight:600}}>Lá {nextDay} — {currentCh.t}</div>
                </div>
              </div>
              {st.done.includes(nextDay)
                ? <span style={{fontSize:"1.2rem"}}>✅</span>
                : <span style={{...bd,fontSize:"0.72rem",color:c.tx3,background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:20,padding:"3px 10px"}}>{nextDay}/30</span>
              }
            </div>

            {/* ── PHRASE HERO ── */}
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,overflow:"hidden",boxShadow:c.shadow}}>
              {/* Category color bar */}
              <div style={{height:5,background:catColor}}/>
              <div style={{padding:"28px 24px 24px"}}>
                {/* Category + english */}
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:20}}>
                  <span style={{fontSize:"0.9rem"}}>{CATS[currentCh.cat]}</span>
                  <span style={{...bd,fontSize:"0.72rem",color:c.tx3,letterSpacing:"0.08em",textTransform:"uppercase"}}>{currentCh.cat}</span>
                  <div style={{flex:1}}/>
                  <span style={{...bd,fontSize:"0.78rem",fontStyle:"italic",color:c.tx3}}>{currentCh.e}</span>
                </div>

                {/* THE BIG PHRASE */}
                <div style={{textAlign:"center",padding:"20px 0 24px",borderTop:`1px solid ${c.bd}`,borderBottom:`1px solid ${c.bd}`,marginBottom:20}}>
                  <div style={{...hd,fontSize:"2.6rem",fontWeight:700,color:c.acc,lineHeight:1.15,marginBottom:10,fontStyle:"italic"}}>
                    {currentCh.p}
                  </div>
                  <div style={{...bd,fontSize:"0.9rem",color:c.tx3,letterSpacing:"0.06em",marginBottom:6}}>
                    /{currentCh.pr}/
                  </div>
                  <div style={{...bd,fontSize:"1rem",color:c.tx2,fontStyle:"italic"}}>
                    "{currentCh.m}"
                  </div>
                </div>

                {/* Challenge text */}
                <p style={{...bd,fontSize:"0.95rem",color:c.tx2,lineHeight:1.7,marginBottom:0}}>
                  {currentCh.ch}
                </p>
              </div>
            </div>

            {/* ── CTA BUTTON ── */}
            <button
              onClick={()=>{setSelDay(nextDay);setView("day")}}
              style={{width:"100%",padding:"17px",borderRadius:14,background:c.btn,border:"none",color:c.btnTx,...hd,fontSize:"1.15rem",letterSpacing:"0.03em",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}
            >
              {st.done.includes(nextDay) ? "View today's challenge" : "Oscail an dúshlán"} →
            </button>

            {/* ── STATS ROW ── */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 4px"}}>
              <div style={{display:"flex",alignItems:"center",gap:20}}>
                <div>
                  <div style={{...hd,fontSize:"1.4rem",color:c.acc,lineHeight:1}}>{total}</div>
                  <div style={{...bd,fontSize:"0.62rem",color:c.tx3,marginTop:1}}>days done</div>
                </div>
                {st.streak>=1&&(
                  <div>
                    <div style={{...hd,fontSize:"1.4rem",color:c.gold,lineHeight:1}}>🔥 {st.streak}</div>
                    <div style={{...bd,fontSize:"0.62rem",color:c.tx3,marginTop:1}}>day streak</div>
                  </div>
                )}
                {st.bonus.length>0&&(
                  <div>
                    <div style={{...hd,fontSize:"1.4rem",color:c.tx3,lineHeight:1}}>⭐ {st.bonus.length}</div>
                    <div style={{...bd,fontSize:"0.62rem",color:c.tx3,marginTop:1}}>bonus</div>
                  </div>
                )}
              </div>

              {/* Progress dots */}
              <div style={{display:"flex",gap:3,flexWrap:"wrap",maxWidth:120,justifyContent:"flex-end"}}>
                {CH.map(ch=>(
                  <div key={ch.day} style={{width:6,height:6,borderRadius:"50%",background:st.done.includes(ch.day)?c.acc:c.dotOff,transition:"background 0.3s"}}/>
                ))}
              </div>
            </div>

            {/* ── FIONN ── */}
            <FionnSays
              mood={st.streak>=5?"excited":st.streak>=2?"happy":total>0?"wink":"idle"}
              text={st.streak>=5?"You're basically Irish now! 🔥":st.streak>=2?`${st.streak} days straight — keep it up!`:total>0?"Good. I was gettin' lonely.":"Dia dhuit! Ready for today?"}
              size={56}
              align="left"
            />

            {/* ── DAILY COMMUNITY CHALLENGE ── */}
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,overflow:"hidden",boxShadow:c.shadow}}>
              <div style={{height:4,background:TYPE_CLR[dailyC.tp]||c.acc}}/>
              <div style={{padding:"20px 20px 18px"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
                  <span style={{fontSize:"1rem"}}>{TYPE_ICON[dailyC.tp]}</span>
                  <div>
                    <div style={{...bd,fontSize:"0.6rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase"}}>Dúshlán an Lae · Everyone today</div>
                    <div style={{...hd,fontSize:"0.95rem",fontWeight:700,color:c.tx}}>{dailyC.title}</div>
                  </div>
                  {dailyDoneToday&&<span style={{marginLeft:"auto",fontSize:"1.2rem"}}>✅</span>}
                </div>
                <p style={{...bd,fontSize:"0.9rem",color:c.tx2,lineHeight:1.7,margin:"0 0 12px"}}>{dailyC.ch}</p>
                {dailyC.tip&&<div style={{...bd,fontSize:"0.8rem",color:c.tx3,fontStyle:"italic",background:c.cardAlt,borderRadius:10,padding:"8px 12px",marginBottom:14}}>💡 {dailyC.tip}</div>}
                <button
                  onClick={()=>{if(!dailyDoneToday)markDailyDone();}}
                  style={{width:"100%",padding:"13px",borderRadius:12,background:dailyDoneToday?c.cardAlt:TYPE_CLR[dailyC.tp]||c.btn,border:`1px solid ${dailyDoneToday?c.bd:"transparent"}`,color:dailyDoneToday?c.tx3:"#fff",...bd,fontSize:"0.95rem",fontWeight:700,cursor:dailyDoneToday?"default":"pointer",transition:"all 0.2s"}}
                >
                  {dailyDoneToday?"✅ Déanta inniu!":"Mark as done"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <BottomNav view={view} setView={setView} c={c} hd={hd} bd={bd}/>
    </div>
  );
}
