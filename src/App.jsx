import { useState, useEffect, useCallback, useRef } from "react";
import { FionnSays } from "./Fionn";

const CH = [
  { day:1,t:"An Chéad Lá",e:"First Step",cat:"greetings",d:1,story:"In 1900, a National School teacher in County Clare was fined a week's wages for speaking Irish to her pupils. The British administration had a simple rule: Irish was the language of poverty. English was the language of progress.\n\nChildren who spoke Irish at school had a wooden stick — a tally stick — hung around their neck. Each time you spoke Irish, a notch was cut. At the end of the day, your parents beat you for every notch.\n\nThat teacher's name was lost to history. But the phrase she whispered to her students every morning survived: 'Dia dhuit.' God be with you.\n\nToday, when you say 'Dia dhuit' to someone — you are undoing 200 years of shame in two words.",ch:"Say 'Dia dhuit' to someone today — a shop worker, neighbour, or colleague.",p:"Dia dhuit!",pr:"DEE-ah gwit",m:"Hello",tip:"If they reply 'Dia is Muire dhuit' — they know Irish! You've found a fellow Gaeilgeoir.",b:"Try it with 3 different people",tasks:[{icon:"🗣️",text:"Say 'Dia dhuit' to 3 real people today — shop, neighbour, anyone. Count them."},{icon:"📱",text:"Text your most sceptical friend 'Dia dhuit!' and screenshot their reply"},{icon:"🧠",text:"'Dia dhuit' literally means 'God be with you'. The reply is 'God and Mary be with you'. Say it knowing that."}]},
  { day:2,t:"Go Raibh Maith Agat",e:"Gratitude",cat:"greetings",d:1,story:"In the darkest years of the Great Famine, 1845–1852, over a million people died and another million emigrated. But in the Gaeltacht areas — the Irish-speaking west — the communities that held onto their language held onto each other.\n\nThe word 'maith' — good — is one of the oldest words in any European language. Linguists trace it to proto-Celtic, 5,000 years ago. When you say 'go raibh maith agat' — 'may there be goodness at you' — you're not saying thanks. You're wishing someone goodness itself.\n\nIn 1847, a Quaker relief worker named William Bennett wrote in his diary: 'Despite everything, they thanked us. Always. Go raibh maith agat.' He said it was the most humbling sound he ever heard.",ch:"Replace every 'thank you' today with 'Go raibh maith agat'.",p:"Go raibh maith agat!",pr:"Guh rev mah ah-gut",m:"Thank you",tip:"In a shop, after paying — just say it with a smile. Most Irish people will light up.",b:"Use it at least 5 times today",tasks:[{icon:"🎯",text:"Use it EVERY time someone does anything for you today — not once, every single time"},{icon:"📱",text:"Text your mam, dad, or best friend 'Go raibh maith agat' for something real. See if they know it."},{icon:"🔢",text:"Count how many times you said it today. Share your score with someone."}]},
  { day:3,t:"Slán Go Fóill",e:"Farewell",cat:"greetings",d:1,story:"Between 1845 and 1900, seven million people left Ireland. Most of them left from Cobh harbour in Cork. The last thing they heard as the ships pulled away was their families on the dock, shouting into the wind: 'Slán! Slán go fóill!'\n\nNot 'goodbye'. 'Safe — safe for now.'\n\nThe word 'slán' means healthy, whole, safe. When Irish people said farewell, they were praying. Most of them knew they would never see each other again.\n\nToday, seven million people in America, Australia, and Canada are descended from those emigrants. Their Irish is gone. But the last word their great-great-grandparents heard in their native language was 'slán'.",ch:"End every conversation today with 'Slán' or 'Slán go fóill'.",p:"Slán go fóill!",pr:"Slawn guh FOHL",m:"Goodbye for now",tip:"'Slán' alone works too. Short, warm, memorable.",b:"Wave and say it to your postman or delivery driver",tasks:[{icon:"📞",text:"End one phone call today with 'Slán go fóill' instead of 'bye'. Just try it."},{icon:"✍️",text:"Write this week's 3 phrases on your arm — old-school revision. Wash it off tonight."},{icon:"🧠",text:"'Slán' comes from 'sláinte' — health. You're wishing someone safe health as you part. Feel that."}]},
  { day:4,t:"Conas Atá Tú?",e:"How Are You?",cat:"greetings",d:1,story:"In 1893, a Protestant clergyman named Douglas Hyde stood up at a packed Dublin hall and gave a speech that changed Irish history. He wasn't Catholic, wasn't a revolutionary, wasn't a politician. He was a language scholar.\n\nHyde founded the Gaelic League — Conradh na Gaeilge — that same year. Within a decade, 600 branches across Ireland were teaching Irish to adults for free, in the evenings, after work.\n\nThe first phrase they taught? 'Conas atá tú?' How are you? Because the first act of cultural revival is asking your neighbour — in your own language — how they are doing.\n\nPatrick Pearse was a member. Michael Collins was a member. The language class became the revolution.",ch:"Ask someone 'Conas atá tú?' and see if they respond in Irish.",p:"Conas atá tú?",pr:"KUN-us ah-TAW too",m:"How are you?",tip:"If they look puzzled, smile and translate. You're planting seeds.",b:"Learn the reply: 'Tá mé go maith' — TAW may guh mah",tasks:[{icon:"🗣️",text:"Ask a real person today and wait — even 5 seconds of confused silence is worth it"},{icon:"🔄",text:"Practice the full loop: 'Conas atá tú?' → 'Tá mé go maith. Agus tú?' → repeat. Do it 3 times."},{icon:"⏰",text:"Set a phone reminder at 3pm that says 'Conas atá tú?' — ask the next person you see"}]},
  { day:5,t:"Maidin Mhaith",e:"Good Morning",cat:"greetings",d:1,story:"Before alarm clocks, before electricity — in Connemara, the west of Ireland, mornings began the same way for centuries. The oldest person in the house would walk to the door, face the Atlantic, and say the first words of the day in Irish.\n\nAlways Irish. Even when English was the language of school, of church, of court, of commerce — the morning belonged to Irish.\n\nMáirtín Ó Cadhain, Ireland's greatest Irish-language novelist, grew up in Connemara in the 1910s. He wrote: 'We were poor in everything except words. And in the morning, the words came first.'\n\n'Maidin mhaith' was the first act of resistance each day. Before breakfast. Before work. Before the world.",ch:"Start your morning by greeting someone with 'Maidin mhaith'.",p:"Maidin mhaith!",pr:"MAH-jin wah",m:"Good morning",tip:"Perfect for the coffee shop, the school gate, or passing a neighbour.",b:"Also try 'Tráthnóna maith' — TRAW-NOH-nah mah",tasks:[{icon:"⏰",text:"Change your morning alarm label to 'Maidin mhaith!' — wake up with Irish every day"},{icon:"🗣️",text:"Say it to the first human you see tomorrow. Not your phone. A human."},{icon:"📱",text:"Post 'Maidin mhaith ☀️' on your WhatsApp status. Count how many people ask what it means."}]},
  { day:6,t:"Le Do Thoil",e:"Please",cat:"greetings",d:1,story:"There's a word in Irish that has no real English equivalent: 'thoil'. It means will, desire, consent. When you say 'le do thoil' — 'with your will' — you're not just being polite. You're acknowledging the other person's autonomy.\n\nDuring the Penal Laws (1695–1829), Irish Catholics had almost no legal rights. They couldn't vote, own land, or educate their children. Yet the Irish language preserved an extraordinary level of social courtesy.\n\nA French traveller wrote in 1780: 'The peasants here have no shoes but they speak to each other with more grace than the French nobility.'\n\nDignity costs nothing. 'Le do thoil' never forgot that.",ch:"Add 'le do thoil' to any request today — at a counter, in a shop, anywhere.",p:"Le do thoil",pr:"leh duh hull",m:"Please",tip:"Even in English: 'A coffee, le do thoil' — mixing is fine and normalises the language.",b:"Combine with Day 2: 'Go raibh maith agat' after",tasks:[{icon:"🗣️",text:"Order one thing today with ONLY Irish first: '[item], le do thoil'. Say nothing in English until after."},{icon:"🔗",text:"Chain the full transaction: 'Caife, le do thoil' → receive it → 'Go raibh maith agat' → 'Slán'. You know all of this."},{icon:"🤔",text:"Notice: does saying 'please' in Irish feel different? More deliberate? That's not an accident."}]},
  { day:7,t:"Lá na Seachtaine",e:"Weekly Review",cat:"review",d:1,story:"There is a place on the west coast of Ireland where the Atlantic meets the rocks and the Irish language never died. Connemara, Galway. Population: 35,000. Age of the continuous spoken tradition: at least 2,000 years.\n\nDuring the worst years — the Famine, the emigration, the language bans — the people of Connemara did something extraordinary. They refused. Not dramatically. Not with speeches. They just kept talking.\n\nIn 1922, when the Irish Free State was founded, the government sent scholars to document what Irish was still spoken. They found Connemara. Families where grandparents, parents, and children all spoke the same language — unchanged since before the Vikings.\n\nThe six phrases you learned this week? They have been saying them in Connemara for a thousand years. You just joined the conversation.",ch:"Use ALL the phrases from this week in one outing — greet, thank, ask, say goodbye.",p:"Dia dhuit → Conas atá tú? → Go raibh maith agat → Slán!",pr:"Full conversation flow",m:"A complete mini-conversation",tip:"A café is the perfect place for a full cycle.",b:"Journal one sentence about how it felt",tasks:[{icon:"⏱️",text:"Time yourself saying all 6 phrases in a row. Can you beat 12 seconds?"},{icon:"☕",text:"Go to a café and use the full sequence: greet → order → thank → goodbye. All in Irish."},{icon:"✍️",text:"Write one honest sentence about what surprised you most this week."}]},
  { day:8,t:"Caife, Le Do Thoil",e:"Coffee Time",cat:"food",d:2,story:"Ireland wasn't always a coffee nation. For 300 years, the drink of Ireland was tea — brought in British ships, brewed strong, served with milk. Tea was warmth, hospitality, conversation. To offer someone tea was to offer them your home.\n\nIn Irish culture, a drink is never just a drink. It's permission to sit down. Permission to stay. Permission to talk.\n\nWhen Irish emigrants arrived in Boston and New York in the 1840s, the first thing they built — before schools, before churches — was a pub. A place to sit. A place to speak Irish. A place to say 'caife' or 'tae' and feel, for a moment, at home.\n\nToday, ordering anything 'le do thoil' in Irish is a small act of homecoming.",ch:"Order a drink in Irish at a café. Even partially counts!",p:"Caife, le do thoil",pr:"KAH-feh, leh duh hull",m:"Coffee, please",tip:"If they ask 'what size?' just answer in English — that's fine.",b:"Try 'Tae' (tay) or 'Uisce' (ISH-keh)",tasks:[{icon:"☕",text:"Go to a café specifically to order in Irish today. This is the mission."},{icon:"👀",text:"Watch the barista's face. If they smile or reply in Irish — you've found your people."},{icon:"📸",text:"Photo your drink with caption 'Caife, le do thoil ☕' and tag someone to try it"}]},
  { day:9,t:"Cé Mhéad?",e:"How Much?",cat:"shopping",d:2,story:"Before Ireland was Ireland, before counties and towns, the basic unit of Irish society was the tuath — a small kingdom of a few thousand people. And every tuath had a market.\n\nThe Irish counting system is one of the oldest in Europe. 'A haon, a dó, a trí' — linguists have traced these numbers to proto-Indo-European, the ancestor of Irish, English, Hindi, and Russian. When you count in Irish, you're counting the same way humans counted on this island 4,000 years ago.\n\nAt Clonmacnoise on the River Shannon, archaeologists found a 10th-century marketplace with weights and measures. The merchants there counted in Irish. The same numbers. The same sounds.\n\n'Cé mhéad?' How much? A question as old as trade itself.",ch:"Ask 'Cé mhéad?' when buying something today.",p:"Cé mhéad?",pr:"Kay VAYD",m:"How much?",tip:"Point at the item and ask. Even if the price is visible.",b:"Learn 1-5: a haon, a dó, a trí, a ceathair, a cúig",tasks:[{icon:"🛒",text:"Ask 'Cé mhéad?' for every purchase today — even at self-checkout. Point if needed."},{icon:"🔢",text:"Count 20 objects near you right now in Irish. Race yourself — go."},{icon:"💶",text:"Next time you get change, count it in Irish. €2.50 = dhá euro caoga."}]},
  { day:10,t:"Tá Ocras Orm",e:"I'm Hungry",cat:"food",d:2,story:"The Irish language expresses hunger differently from English. In English, hunger is inside you — 'I am hungry'. In Irish, hunger is on you — 'Tá ocras orm'. Hunger is on me.\n\nThis is not an accident. Linguists believe this grammatical pattern reflects a worldview: the body is a vessel. Things happen to it. Hunger arrives. Sadness falls. Love comes.\n\nDuring the Famine years, 1845–1852, the Irish phrase 'tá ocras orm' was probably the most spoken sentence in the country. A million people died saying it. Another million emigrated to escape it.\n\nToday it's a casual phrase — 'I fancy a sandwich'. But the grammar remembers. Hunger. On me. Not in me. Something that can leave.",ch:"Tell someone 'Tá ocras orm' before a meal today.",p:"Tá ocras orm",pr:"Taw UK-rus ur-um",m:"I'm hungry (hunger is on me)",tip:"Irish puts feelings ON you, not IN you. Beautiful.",b:"Also: 'Tá tart orm' (I'm thirsty)",tasks:[{icon:"🗣️",text:"Say 'Tá ocras orm' before EVERY meal today. Get your household saying it too."},{icon:"🧠",text:"Learn what else can be 'orm': brón (sadness), fearg (anger), eagla (fear), náire (shame). Irish puts it all ON you."},{icon:"📱",text:"Text someone 'Tá ocras orm' right before lunch and see if they work it out"}]},
  { day:11,t:"An Bhfuil...?",e:"Do You Have?",cat:"shopping",d:2,story:"The Irish language has no word for 'yes' or 'no'.\n\nThis is genuinely true. When someone asks you a question, you answer by repeating the verb — positive or negative. 'An bhfuil Gaeilge agat?' Do you have Irish? 'Tá' — it is. 'Níl' — it is not.\n\nWhen British courts in the 18th century tried to conduct proceedings with Irish-speaking defendants, interpreters kept failing. The defendants weren't being evasive. They were answering correctly — in a language with no yes or no.\n\nScholars believe this reflects something in the Irish way of seeing the world: nothing is simply true or false. Everything exists in relation to something else. No absolute yes. No absolute no. Everything depends.",ch:"Ask 'An bhfuil ___ agaibh?' in a shop.",p:"An bhfuil bainne agaibh?",pr:"Un will BAHN-yeh ah-GIV",m:"Do you have milk?",tip:"Swap: arán (bread), siúcra (sugar), uisce (water)",b:"Try it in a different shop than usual",tasks:[{icon:"🛍️",text:"Actually ask in a real shop: 'An bhfuil [arán] agaibh?' — point at the shelf if needed"},{icon:"🎯",text:"Ask 'An bhfuil Gaeilge agat?' to one person today. You might be very surprised."},{icon:"✍️",text:"Write 5 things you'd ask for in a shop — in Irish. Put it in your pocket before you go."}]},
  { day:12,t:"Is Maith Liom",e:"I Like",cat:"opinions",d:2,story:"In Irish, liking someone is almost a philosophical statement.\n\n'Is maith liom' — it is good with me. Goodness exists in the relationship between me and the thing I like. The thing isn't good by itself. I'm not good by myself. The goodness lives between us.\n\nThe poet Nuala Ní Dhomhnaill, Ireland's greatest living Irish-language poet, wrote about this: 'In Irish, I cannot separate what I feel from what I am. To say I love something is to say it is part of me.'\n\nShe writes her poetry in Irish even though she could reach ten times the audience in English. When asked why, she says: 'Because English doesn't have the grammar for what I want to say.' Is breá liom this language. It is beautiful with me.",ch:"Express a preference: 'Is maith liom ___'",p:"Is maith liom caife!",pr:"Iss mah lyum KAH-feh",m:"I like coffee!",tip:"Opposite: 'Ní maith liom' — Nee mah lyum",b:"Tell someone what food you like in Irish",tasks:[{icon:"🗣️",text:"Tell 3 people (in person or text) something you love — 'Is breá liom ___' — in Irish"},{icon:"↔️",text:"Learn both sides today: 'Is maith liom' (I like) AND 'Ní maith liom' (I don't like). Use both."},{icon:"📝",text:"Write your 5 favourite things in Irish. Stick it somewhere you see every day."}]},
  { day:13,t:"An Aimsir",e:"The Weather",cat:"social",d:2,story:"There are 27 words in Irish for types of rain.\n\n'Ceathanna' — showers. 'Clagarnach' — heavy drumming rain. 'Brádán' — salmon rain, the kind that makes salmon jump. 'Smúdar' — fine mist. 'Druchtín' — light dew-rain. 'Cith agus dealán' — rain and sunshine together.\n\nThe Irish didn't develop 27 words for rain because they were poetic. They developed them because knowing exactly what kind of rain was coming could mean the difference between a saved harvest and starvation.\n\nIn Connemara, old farmers can look at clouds over the Atlantic and predict rain to within 20 minutes, using observations passed down for generations in Irish. When you talk about the weather here — and you will, you always do — you are participating in the oldest continuing conversation in the country.",ch:"Comment on the weather in Irish. In Ireland, this IS social currency.",p:"Tá sé fuar inniu!",pr:"Taw shay FOO-er in-YOO",m:"It's cold today!",tip:"Swap: fliuch (wet), te (hot), go hálainn (beautiful)",b:"Try a weather comment with a stranger",tasks:[{icon:"🌤️",text:"Step outside, look up, and say exactly what you see in Irish — out loud, right now"},{icon:"📱",text:"Send someone an Irish weather report: 'Tá sé [fuar/fliuch/go hálainn] inniu!' Make it dramatic."},{icon:"📺",text:"Open Met Éireann online — their forecast exists in Irish. Read one sentence of it."}]},
  { day:14,t:"Ag Siopadóireacht",e:"Shopping Trip",cat:"review",d:2,story:"Galway city sits at the edge of the Atlantic and the edge of two worlds. East of Galway: English Ireland. West of Galway: Irish Ireland. For centuries, the city was the hinge.\n\nThe Saturday market in Galway has been running in various forms since the 14th century. And for most of that time, you could hear both languages in the stalls — English for commerce, Irish for everything else.\n\nThe Claddagh, the old fishing village at Galway's mouth, was fully Irish-speaking until the 1930s. The Claddagh ring — two hands holding a crowned heart — was made by Claddagh goldsmiths. When you use your Irish in a shop, a market, a café — you are doing what the Claddagh fishermen did. Saying: this transaction is also a relationship.",ch:"Full shopping trip using as much Irish as possible.",p:"Weeks 1 & 2 combined",pr:"Full immersion run",m:"A real-world practice session",tip:"The goal is USING the language, not perfection.",b:"Count your items in Irish at the checkout",tasks:[{icon:"📝",text:"Write your shopping list in Irish BEFORE you go. Even 5 items. It's preparation."},{icon:"🎯",text:"In the shop: greet in Irish, ask 'Cé mhéad?', count your items, say 'Go raibh maith agat'. That's 4."},{icon:"🏆",text:"Count how many Irish words you used during the whole trip. Beat your personal record."}]},
  { day:15,t:"Cad is Ainm Duit?",e:"What's Your Name?",cat:"social",d:3,story:"Your name in Irish is not just a name. It's a history.\n\nThe Irish naming system was one of the first things the English administration attacked. In 1465, Irish chieftains were ordered to abandon their Irish names and take English ones. Ó Briain became Brien. Mac Cárthaigh became McCarthy.\n\nBut the Irish kept their names underground. In Irish-speaking areas, people had two names: their official English name for the authorities, and their real Irish name for everyone else.\n\nPádraig Ó Conaire, the great Irish writer, had his name anglicised to Patrick Conroy in official records. He wrote every word of his life's work as Pádraig Ó Conaire.\n\nWhen you look up your name in Irish — and you should — you are finding the name your ancestors used when no one was watching.",ch:"Introduce yourself in Irish or ask someone's name.",p:"Is mise ___. Cad is ainm duit?",pr:"Iss MISH-eh ___. Cod iss AN-im dit?",m:"I'm ___. What's your name?",tip:"Check if there's a Ciorcal Comhrá near you!",b:"Find and attend a conversation circle this week",tasks:[{icon:"🏷️",text:"Look up the Irish form of your name — this is your Irish name now. Say it."},{icon:"✍️",text:"Write your full intro: 'Is mise [name]. Is as [town] mé. Tá mé ag foghlaim Gaeilge.' Memorise it."},{icon:"🔍",text:"Search 'Ciorcal Comhrá' + your town. Note when it meets. You could go this week."}]},
  { day:16,t:"Cá Bhfuil?",e:"Where Is?",cat:"directions",d:3,story:"Ireland is covered in ghosts — not the supernatural kind, the topographical kind. Every town, every field, every river has an Irish name that describes exactly what it was. If you can read Irish, the country becomes a map of its own past.\n\n'Cill' — church. There are 5,000 place names in Ireland starting with Cill. Each one marks where an early Christian monk stopped, built a cell, and prayed. 'Dún' — fort. 'Áth' — ford in a river. 'Baile' — settlement.\n\nDublin is Dubh Linn — Black Pool. Belfast is Béal Feirste — Mouth of the Sandbar. Cork is Corcaigh — Marshy Place.\n\nWhen you ask 'Cá bhfuil?' — Where is? — every answer is a sentence of Irish history.",ch:"Ask for directions in Irish.",p:"Cá bhfuil an leithreas?",pr:"Kaw will un LEH-ras",m:"Where is the toilet?",tip:"The most practical phrase in any language!",b:"Navigate using Irish place names on signs",tasks:[{icon:"🚻",text:"Ask 'Cá bhfuil an leithreas?' somewhere today. Most useful phrase in any language."},{icon:"🗺️",text:"During your commute, read every Irish place name on signs BEFORE the English version."},{icon:"📍",text:"Find one street in your town with an Irish name. Look up what it means."}]},
  { day:17,t:"As Éirinn",e:"From Ireland",cat:"social",d:3,story:"There are 70 million people in the world with Irish ancestry. Ireland's population today: 5 million.\n\nThe ratio tells you everything about what emigration meant. During the Famine, during the 1950s economic collapse — Irish people left. They went to America, Australia, Britain, Argentina, France. And in every country they settled, they made the same two things: a pub and a GAA club. Not because they were sentimental. Because they needed to stay Irish.\n\n'Is as Éirinn mé' — I am from Ireland. Three words that carried an identity across oceans, across generations, across centuries.\n\nIn Boston, in 1900, an Irish grandmother who hadn't seen Ireland in 40 years still introduced herself in Irish. Is as Éirinn mé. Because she was.",ch:"Tell someone where you're from in Irish.",p:"Is as ___ mé",pr:"Iss oss ___ may",m:"I'm from ___",tip:"Dublin = Baile Átha Cliath, Cork = Corcaigh, Galway = Gaillimh",b:"Ask: 'Cá as tú?' — Kaw oss too?",tasks:[{icon:"🔍",text:"Look up your town's Irish name AND its meaning. The history will surprise you."},{icon:"🗣️",text:"Tell someone today: 'Is as [Irish name] mé' — in person or on the phone"},{icon:"📱",text:"Text the Irish name of your hometown to one person with its meaning. Blow their mind."}]},
  { day:18,t:"Teaghlach",e:"Family",cat:"social",d:3,story:"The Irish word for family — 'teaghlach' — literally means 'house people'. The people of the house. Not blood relations by definition. The people who share the hearth with you.\n\nThere's a word in Irish — 'comhar' — that means cooperative labour. Neighbours helping each other with harvests, with building, with survival. You helped me today; I help you tomorrow. No money changed hands. No contract was signed. Just comhar.\n\nThe anthropologist Robin Flower, who lived on the Blasket Islands in the 1920s, wrote: 'I have never seen loneliness here. The Irish word for lonely — uaigneas — is a word I had to teach them. They had no use for it.'\n\nThey had teaghlach. They had comhar. They had each other.",ch:"Learn and use one family word today.",p:"Mo mháthair / m'athair / mo pháiste",pr:"Muh WAH-her / MAH-her / muh FAW-shteh",m:"My mother / father / child",tip:"Family talk is deeply meaningful in Irish culture.",b:"Teach a family member one Irish phrase",tasks:[{icon:"👶",text:"Teach the youngest person in your family one Irish word today. Kids absorb it instantly."},{icon:"📞",text:"Call or text one family member and use an Irish word with them — even just 'Slán'"},{icon:"✍️",text:"Write out your full family tree in Irish: máthair, athair, deartháir, deirfiúr..."}]},
  { day:19,t:"Dathanna",e:"Colours",cat:"vocabulary",d:3,story:"The Irish language sees colour differently from English.\n\n'Glas' can mean green, grey, or the colour of the sea on a cloudy day. 'Rua' means red — but specifically the red of a fox, or autumn hair, or a certain shade of Irish skin. 'Donn' is brown — but the brown of earth, of deer, of dark turf.\n\nThe basic colour vocabulary of Irish evolved over thousands of years of people watching this specific landscape: the grey-green Atlantic, the brown bogs, the red-gold of bracken in autumn.\n\n'Bán' — white. But also fair, as in fair-haired. And used for land that has been cleared. A 'bánú' was what happened to villages during the Famine evictions. A whitening. The white of emptiness.\n\nIrish colours are not just visual. They carry history in their frequency.",ch:"Point out colours in Irish during your day.",p:"Dearg, glas, gorm, bán, dubh",pr:"JAR-ug, glass, GUR-um, bawn, duv",m:"Red, green, blue, white, black",tip:"Fun fact: 'glas' can mean green, grey, or even the colour of the sea — Irish sees colour differently than English!",b:"Describe what you're wearing in Irish",tasks:[{icon:"🎯",text:"Colour bingo: find something dearg, gorm, glas, bán, AND dubh today. All five."},{icon:"🟣",text:"Find something 'corcra' (purple) — hardest colour to spot. Photograph it."},{icon:"👕",text:"Describe what you're wearing entirely in Irish colours. Stuck? The dictionary is right here."}]},
  { day:20,t:"Uimhreacha",e:"Numbers",cat:"vocabulary",d:3,story:"The Irish counting system has two versions and they reflect two entirely different worlds.\n\nThe first version — 'a haon, a dó, a trí' — is for counting objects. Things. This many sheep, this many potatoes, this many miles.\n\nThe second version — 'aon duine, beirt, triúr' — is for counting people. One person, two persons, three persons. Different numbers entirely.\n\nThis is not inefficiency. This is philosophy. People are counted differently from things. In Irish, you cannot use the same number for a sheep and a human. The grammar forces you to acknowledge the difference.\n\nCount your steps today. A haon, a dó, a trí. You're counting the same way your ancestors counted. And you are not a thing.",ch:"Count in Irish throughout your day.",p:"A haon → a deich",pr:"ah HAYN, ah DOH, ah TREE, ah KAH-her, ah KOO-ig...",m:"1 through 10",tip:"Gym reps, stairs, queuing. Make it automatic.",b:"Say your phone number in Irish",tasks:[{icon:"💪",text:"Count every gym rep, stair, or step out loud in Irish today. Make it automatic."},{icon:"📞",text:"Say your phone number in Irish — slowly first, then faster. Call someone and do it."},{icon:"💶",text:"Count your change in Irish next time you buy something. The cashier will be baffled. That's fine."}]},
  { day:21,t:"Amuigh Faoin Aer",e:"Outdoor Day",cat:"review",d:3,story:"The Blasket Islands lie three kilometres off the coast of Kerry. They were inhabited for thousands of years and abandoned finally in 1953, when the last 22 residents were evacuated to the mainland.\n\nIn those final decades, the Blasket Islanders produced more great literature per capita than any community in history. Tomás Ó Criomhthain. Peig Sayers. Muiris Ó Súilleabháin. Three masterpieces of world literature from a community of 150 people.\n\nThey wrote about the sea, the sky, the rocks, the birds — in Irish that had never been touched by English. Pure. Ancient. Beautiful.\n\nMuiris Ó Súilleabháin wrote: 'The day was so fine that it would put joy and delight into the heart of a man to be alive in it.'\n\nAmuigh faoin aer. Out under the open air. Go there. Name what you see. They named it all before you.",ch:"Take a walk and narrate what you see in Irish.",p:"Tá sé go hálainn. Feicim crann glas.",pr:"Taw shay guh HAW-lin. FEK-im krawn glass.",m:"It's beautiful. I see a green tree.",tip:"Talking to yourself counts. Think in Irish.",b:"Record a 30-second voice note in Irish",tasks:[{icon:"🚶",text:"Walk for 5 minutes and name EVERYTHING you see in Irish — out loud, to yourself"},{icon:"🎙️",text:"Record a 30-second voice note describing what's around you in Irish. Listen back."},{icon:"🎧",text:"While walking, put on Raidió na Gaeltachta. 10 minutes rewires your ears more than 1 hour of study."}]},
  { day:22,t:"Ceol agus Craic",e:"Music & Fun",cat:"culture",d:4,story:"In 1366, the English Parliament passed the Statutes of Kilkenny. Among many things, it banned the Irish from playing music for English settlers. A century later, Queen Elizabeth I ordered the hanging of Irish harpers — specifically harpers. Not soldiers. Not rebels. Musicians.\n\nBecause the harpers carried history. They were the keepers of genealogy, of poetry, of the old stories. Kill the harpers, kill the memory.\n\nThey failed. The music went underground, into the kitchens and the fields and the mountains. It became ceol — not concert music, not performance music. People music.\n\nToday, in any pub in Connemara, Clare, or Donegal, you can walk in on a Wednesday night and hear music passed hand to hand — mouth to ear — for 600 years. No sheet music. No conductor. No stage. Just ceol. The music they couldn't kill.",ch:"Listen to a song in Irish — Kíla, Clannad, or search 'amhrán Gaeilge'.",p:"Is breá liom an ceol seo!",pr:"Iss braw lyum on KYOHL shuh",m:"I love this music!",tip:"Try 'Óró Sé Do Bheatha Bhaile' — you'll feel it.",b:"Share the song with someone",tasks:[{icon:"🎵",text:"Listen to 'Óró Sé Do Bheatha Bhaile' and read the story of Gráinne Mhaol — a 16th century pirate queen"},{icon:"📱",text:"Share the song with one person. No explanation. Just the link. Let the music speak."},{icon:"✍️",text:"Write one line from the song from memory after listening. Even one line."}]},
  { day:23,t:"Seanfhocail",e:"Proverbs",cat:"culture",d:4,story:"The oldest Irish proverbs are older than Christianity.\n\n'Ní neart go cur le chéile' — there is no strength without unity. This proverb is found in manuscripts from the 8th century, but scholars believe it's much older — a fragment of Brehon Law, the pre-Christian Irish legal system.\n\nBrehon Law was extraordinary. In a Europe of kings and feudal lords, Ireland had a system based on restorative justice. No prisons. No executions for property crimes. Instead: compensation, community responsibility, rehabilitation.\n\nThe proverbs preserved the philosophy when the legal system was destroyed. Each one is a compressed worldview. A thousand years of Irish thought in six words.\n\n'Is fearr Gaeilge briste ná Béarla cliste.' Broken Irish is better than clever English. Someone wise said that first. A long time ago.",ch:"Learn one Irish proverb and use it today.",p:"Is fearr Gaeilge briste ná Béarla cliste",pr:"Iss far GAYL-geh BRISH-teh naw BAYR-lah KLISH-teh",m:"Broken Irish is better than clever English",tip:"Your mantra. Permission to be imperfect.",b:"Write it somewhere visible",tasks:[{icon:"🪞",text:"Write 'Is fearr Gaeilge briste ná Béarla cliste' on your bathroom mirror. Read it every morning."},{icon:"📱",text:"Send it to someone who's embarrassed about their Irish. This is their permission."},{icon:"🧠",text:"Learn one more: 'Ní neart go cur le chéile' — there is no strength without unity. Ireland's motto."}]},
  { day:24,t:"Ag Léamh",e:"Reading",cat:"culture",d:4,story:"In 1831, the British government established the National School system in Ireland. Within 20 years, half a million children were enrolled. The schools taught one language: English. The curriculum contained nothing Irish.\n\nBut in those same decades, a group of scholars walked the country collecting stories, poems, prayers, songs that had never been written before. They transcribed them from old people who would soon die.\n\nTheir work — the Irish Folklore Collection — is now housed at University College Dublin. It is the largest collection of oral folklore in the world. 500,000 pages. Every word of it would have been lost if those scholars hadn't been able to read Irish.\n\nToday, when you read even one Irish word — on a sign, a menu, a screen — you are carrying their work forward.",ch:"Read something in Irish — a sign, a menu, tuairisc.ie.",p:"Tuigim! / Ní thuigim.",pr:"TIG-im / Nee HIG-im",m:"I understand! / I don't understand.",tip:"Ireland is full of bilingual signs you've been ignoring.",b:"Read one headline on tuairisc.ie",tasks:[{icon:"📰",text:"Read one headline on tuairisc.ie OUT LOUD — pronunciation first, meaning second"},{icon:"📸",text:"Photograph a bilingual sign you've walked past 100 times and never actually read the Irish on"},{icon:"✍️",text:"Write 5 Irish words you understood today WITHOUT using the dictionary"}]},
  { day:25,t:"Scríobh",e:"Write",cat:"culture",d:4,story:"The first writing in Irish appears on ogham stones — upright standing stones with lines carved along the edges. The oldest are from the 4th century AD.\n\nOgham was carved, not written. You found a stone, you picked up a chisel, and you cut a name, a boundary, a prayer into living rock. The message was meant to last forever.\n\nAnd it did. There are 400 ogham stones still standing in Ireland. You can touch them. The messages are still legible.\n\nThe monks who came after inherited this belief: that writing was permanent. Sacred. That words written down outlasted the person who wrote them. The Book of Kells. The Book of Armagh. Ireland's monks were writing while Europe was burning.\n\nWhen you write something in Irish today — even a text, even a note — you are part of the same tradition. Cut it into stone.",ch:"Write a short message in Irish — text, social post, note.",p:"Lá maith agam inniu!",pr:"Law mah ah-GUM in-YOO",m:"Good day for me today!",tip:"Post with #Gaeilge or #GaeltachtConnect.",b:"Send a WhatsApp message in Irish",tasks:[{icon:"🎙️",text:"Send a WhatsApp VOICE NOTE in Irish — even 20 seconds of trying is perfect"},{icon:"✍️",text:"Write 5 sentences about your day in Irish. Past, present, and what you'll do tonight."},{icon:"📱",text:"Post with #GaeltachtConnect — you're part of a movement. Show people it's possible."}]},
  { day:26,t:"Sa Teach Tábhairne",e:"At the Pub",cat:"social",d:4,story:"The Irish pub is not what you think it is.\n\nIn Irish, 'teach tábhairne' means tavern house. But the drinking house in Ireland was always also something else: a post office, a meeting place, a news exchange, a concert hall. The pub was where the seanchaí — the traditional storyteller — performed. Where musicians gathered for a session. Where communities organised themselves.\n\nThe first Gaelic League branches often met in pubs. Planning language revival. Arguing about grammar. Plotting the future.\n\n'Sláinte' — health. When you raise a glass and say it, you are using the same word Irish people have used for 2,000 years. Same blessing. Same hope.\n\nThe pub is a living Irish institution. Order in Irish tonight. They'll love you for it.",ch:"Order a drink in Irish at a pub.",p:"Pionta, le do thoil!",pr:"PYUN-tah, leh duh hull",m:"A pint, please!",tip:"Irish in the pub? You'll make someone's night.",b:"Say 'Sláinte!' — SLAWN-cheh",tasks:[{icon:"🍺",text:"Order your round in Irish — 'Pionta, le do thoil' — and make eye contact. Mean it."},{icon:"🥂",text:"Learn the full toast: 'Sláinte is táinte' — health and wealth. Use it tonight."},{icon:"🗣️",text:"Ask the barman or a stranger: 'An bhfuil Gaeilge agat?' You might be very surprised."}]},
  { day:27,t:"Ag Caint",e:"Full Conversation",cat:"immersion",d:4,story:"Language is not vocabulary. Language is courage.\n\nIn 1956, a young woman from Dublin named Máire Mhac an tSaoi published a collection of poetry in Irish that critics called 'the finest Irish poetry since the 17th century'. She had grown up in Dublin, not the Gaeltacht. She had learned Irish in school, like everyone.\n\nBut she chose to write in Irish. To think in Irish. To argue, love, grieve, laugh in Irish.\n\nShe was asked why she didn't write in English — she would have had a massive audience. She said: 'I write in Irish because I have things to say that can only be said in Irish. The English for them doesn't exist.'\n\nThere are thoughts you can only think in Irish. You won't know what they are until you start having conversations.",ch:"Have a 2-minute conversation mixing Irish and English.",p:"An bhfuil Gaeilge agat?",pr:"Un will GAYL-geh ah-GUT",m:"Do you speak Irish?",tip:"You'd be surprised how many have 'a cúpla focal'.",b:"Chat with a Gaeilgeoir online",tasks:[{icon:"🗣️",text:"Have a real conversation mixing Irish and English — don't apologise for the Irish parts"},{icon:"💬",text:"Go to r/gaeilge on Reddit and write one comment or post — even 'Dia dhuit!'  counts"},{icon:"✍️",text:"Write a mini dialogue: you say something in Irish, you reply in Irish. 5 exchanges."}]},
  { day:28,t:"Logainmneacha",e:"Place Names",cat:"culture",d:4,story:"In the 1830s, the British Ordnance Survey began mapping Ireland for the first time. They had a problem: thousands of places had Irish names, and their English-speaking mapmakers couldn't write them.\n\nSo they anglicised them. 'Dún na nGall' — Fort of the Foreigners — became Donegal. 'Baile Átha Cliath' — Town of the Hurdled Ford — became Dublin. In the process, they erased centuries of memory. Every 'Cill' lost its saint. Every 'Dún' lost its warrior.\n\nThe playwright Brian Friel wrote 'Translations' about this process. A small Irish-speaking community watching their world be renamed. One character says: 'To know where you live, you must know what to call it. If you can't name it, you can't own it.'\n\nLook at your town's Irish name. Say it. Whatever the English version is — this name is older. This is what it's called.",ch:"Learn the Irish meaning of 3 place names near you.",p:"Baile, Cill, Dún, Áth, Lios",pr:"BAL-yeh, Kill, Doon, Aw, Liss",m:"town, church, fort, ford, ringfort",tip:"Dublin = Dubh Linn (Black Pool). Every town tells a story.",b:"Post a place name with its meaning",tasks:[{icon:"🔍",text:"Find 3 place names within 10km of you and look up their Irish meanings. All three."},{icon:"⛪",text:"Find a place with 'Cill' in its name. What saint is it named for? Every 'Cill' has a story."},{icon:"📱",text:"Share one place name + meaning: 'Did you know [town] means...' Watch their face change."}]},
  { day:29,t:"Múin É",e:"Teach It",cat:"immersion",d:5,story:"In 1967, a schoolteacher in Connemara noticed something: every year, fewer children were coming to school speaking Irish from home. The language was becoming something you learned in school, not something you were born into.\n\nHe started a summer course — Oideas Gael — for adults who wanted to learn Irish in a Gaeltacht community. Come for a week. Live with Irish families. Speak Irish all day.\n\nToday, 50 years later, Oideas Gael has taught over 40,000 people from 40 countries. People come from Germany, Japan, Argentina, Australia — because they want to connect with something old. Something real.\n\nThe teacher who saves a language is not always a scholar. Sometimes it's the person who says: come, I'll show you.\n\nToday you teach someone else. Maybe the person you teach will teach someone else. That's how languages survive.",ch:"Teach someone else 3 Irish phrases today.",p:"Any 3 phrases from this month!",pr:"Your choice",m:"Pass the language forward",tip:"The best way to learn is to teach.",b:"Get them to use one phrase with a real person",tasks:[{icon:"🗣️",text:"Teach the 3 phrases you found HARDEST this month — that's where you've grown most"},{icon:"🎙️",text:"Record a proper voice note in Irish and send it to someone you want to inspire"},{icon:"👶",text:"Think of one child in your life. They could be fluent by 18 if someone starts them now."}]},
  { day:30,t:"Lá na Gaeilge",e:"Your Irish Day",cat:"immersion",d:5,story:"On August 3rd, 1922, the Irish Free State was founded. One of its first acts was to restore the Irish language — to make it the first official language of the new state.\n\nIt was, everyone knew, too late to fully succeed. The damage done by centuries of suppression, famine, and emigration was irreversible. The number of native speakers kept declining.\n\nBut something else happened. The language became a living act of choice. Every person who speaks Irish today does it not because they have to — but because they decided to. It became, paradoxically, more meaningful as it became more endangered.\n\nThere are 1.87 million people who speak Irish today. Every single one of them chose to.\n\nYou have spent 30 days choosing. 'Tá Gaeilge agam.' In Irish, you don't say 'I speak Irish.' You say: I have Irish. Something you hold. Something that is yours.\n\nIt is yours. Coinnigh ort.",ch:"Live one full day using as much Irish as possible.",p:"Tá Gaeilge agam. Tá mé bródúil.",pr:"Taw GAYL-geh ah-GUM. Taw may BROH-dool.",m:"I have Irish. I am proud.",tip:"You started with 'Dia dhuit'. Look how far you've come.",b:"Write a reflection. Share it. Inspire the next person.",tasks:[{icon:"☘️",text:"From waking to sleeping: every hello, thank you, goodbye, and weather comment — in Irish"},{icon:"✍️",text:"Write ONE honest sentence about what this month changed in you. Just one."},{icon:"📱",text:"Share your streak with #GaeltachtConnect — you are proof it's possible. Someone needs to see this."}]},
  // ── LEVEL 2 ─────────────────────────────────────────────────────────────────
  { day:31,t:"Uimhreacha",e:"Numbers",cat:"vocab",d:2,story:"The Irish counting system is one of the oldest number systems still in daily use in Europe. Unlike English, Irish has two systems: one for objects, one for people. 'Beirt' means two people. 'Dhá' means two things. The distinction matters — Irish grammar never lets you forget whether you're talking about humans or the world around them.\n\nIn the Gaeltacht, fishermen counted their catch in Irish long after they'd switched to English for everything else. Numbers, like prayers, stayed in the mother tongue longest.",ch:"Count everything you can see in Irish today.",p:"A haon, a dó, a trí, a ceathair, a cúig",pr:"ah HAN, ah DOH, ah TREE, ah KAH-her, ah KOO-ig",m:"One, two, three, four, five",tip:"Point at things and count out loud. Your brain learns through movement.",b:"Count to 10 in Irish without looking",tasks:[{icon:"🔢",text:"Count every window in your home in Irish. Then every door. Then every chair."},{icon:"📱",text:"Text someone your phone number in Irish — a haon, a dó... See if they can call it back."},{icon:"✍️",text:"Write your age and the year you were born in Irish numbers."}]},
  { day:32,t:"Dathanna",e:"Colours",cat:"vocab",d:2,story:"Irish colour words are ancient and often surprising. 'Glas' means both green and grey — the colour of the sea, the colour of grass, the same word. The Irish didn't separate them. Both were the colour of living things, of the natural world.\n\n'Rua' — red-brown — is the colour most associated with Ireland. Red hair, red foxes, red deer. It's the colour of autumn Connemara. When Irish people say someone is 'rua', they mean something wild and beautiful.",ch:"Name the colour of 10 things around you in Irish.",p:"Dearg, glas, gorm, buí, bán, dubh, flannbhuí",pr:"DYAR-ug, glas, GUR-um, bwee, bawn, duv, FLAN-vwee",m:"Red, green/grey, blue, yellow, white, black, orange",tip:"Gorm (blue) is also used for dark-skinned people in Irish — it's respectful, not racial.",b:"Describe your outfit in Irish colours",tasks:[{icon:"🎨",text:"Walk through your home and name the colour of every room in Irish."},{icon:"🌅",text:"Describe a sunset or the sky today using only Irish colour words."},{icon:"📱",text:"Send someone a photo and describe what you see in Irish colours: 'Tá sé gorm agus bán...'"}]},
  { day:33,t:"Ag Ordú Bia",e:"Ordering Food",cat:"social",d:2,story:"The Irish relationship with food is complicated. The Great Famine killed a million people because the potato — a single crop — failed. Before the Famine, the Irish poor ate almost nothing else. After it, the psychological scar ran deep: food was never just food.\n\nToday, Irish food has transformed. Farmers markets, artisan cheese, wild Atlantic seafood. But the Irish word for food — 'bia' — is one of the oldest words in the language. It hasn't changed in 2,000 years.",ch:"Order food or drink in Irish at least once today.",p:"An féidir liom... a fháil? / Tá ocras orm.",pr:"On FAY-djir lum... a AWL / Taw UK-russ ur-um",m:"Can I get...? / I am hungry.",tip:"'Tá tart orm' = I am thirsty. Literally: thirst is on me.",b:"Order something in Irish and get served",tasks:[{icon:"🍽️",text:"At any food place today, try at least one Irish phrase — even just 'Go raibh maith agat'."},{icon:"📝",text:"Write your favourite meal's name in Irish. Look it up. You might be surprised."},{icon:"🛒",text:"Do your grocery shopping mentally in Irish — name each item as you pick it up."}]},
  { day:34,t:"An Aimsir",e:"The Weather",cat:"culture",d:2,story:"The Irish talk about weather not because they're boring but because in Ireland, weather is personality. The Atlantic sends a new mood every hour. Rain here is not one thing — it's a mist, a drizzle, a downpour, a shower. Irish has dozens of words for rain.\n\n'Tá sé ag cur báistí' — it is putting rain. The Irish didn't say rain 'falls'. It is actively put, placed upon you, by something with intent.",ch:"Describe today's weather in Irish to someone.",p:"Tá sé fliuch / tirim / gaofar / grianmhar",pr:"Taw shay FLYUKH / CHIR-im / GWEE-fur / GREE-an-wur",m:"It is wet / dry / windy / sunny",tip:"'Tá sé go hálainn' = It's beautiful. The most optimistic phrase in the language.",b:"Give a full weather report in Irish",tasks:[{icon:"🌧️",text:"Describe the weather every hour today in Irish. Even one word per hour counts."},{icon:"📱",text:"Send an Irish weather report voice note to someone. 'Tá sé fliuch inniu...' Go."},{icon:"✍️",text:"Write 5 sentences about the weather this week using different Irish words for rain."}]},
  { day:35,t:"Treoracha",e:"Directions",cat:"social",d:3,story:"Getting lost in Ireland was historically dangerous and historically beautiful. The boreens — small roads, 'bóithrín' means little road — wind through landscapes that haven't changed in centuries. Every turn has a name in Irish that tells you what was there.\n\nBefore road signs, Irish people navigated by landmarks, by history. 'Turn left at the old forge.' 'Past the well of Saint Brighid.' The landscape itself was the map.",ch:"Give or get directions in Irish today.",p:"Ar dheis / ar chlé / díreach ar aghaidh / casadh",pr:"er YESH / er KHLAY / DJEE-rekh er EYE / KAS-uh",m:"Right / left / straight ahead / turn",tip:"'Cá bhfuil...?' = Where is...? The most useful question in any language.",b:"Navigate somewhere using Irish directions",tasks:[{icon:"🗺️",text:"Find your way to somewhere new using only Irish direction words — out loud."},{icon:"📍",text:"Ask someone in Irish where the nearest café or park is. Even if they don't understand."},{icon:"✍️",text:"Write directions from your home to your nearest shop entirely in Irish."}]},
  { day:36,t:"Teaghlach Mór",e:"Extended Family",cat:"social",d:2,story:"Irish family words are extraordinarily specific. There are separate words for your mother's brother and your father's brother. For an older sibling and a younger one. The language was built by people who lived in close extended families where these distinctions mattered every day.\n\n'Muintir' — your people — means both family and community. In Irish, the two were never separate.",ch:"Learn the Irish words for your closest family members.",p:"Uncail / aintín / col ceathrair / seanathair / seanmháthair",pr:"UN-kul / AN-teen / kul KAH-rir / SHAN-ah-her / SHAN-WAW-her",m:"Uncle / aunt / cousin / grandfather / grandmother",tip:"'Mo mhuintir' = my people/family. One of the warmest phrases in Irish.",b:"Introduce your family in Irish",tasks:[{icon:"👨‍👩‍👧‍👦",text:"Draw your family tree and label every person in Irish."},{icon:"📱",text:"Send an Irish voice note to one family member telling them who they are to you in Irish."},{icon:"✍️",text:"Write one sentence about each member of your immediate family in Irish."}]},
  { day:37,t:"Ag an Margadh",e:"At the Market",cat:"social",d:2,story:"The Irish market — 'margadh' — was the centre of rural life for centuries. Not just for buying and selling, but for news, matchmaking, politics. The Puck Fair in Killorglin, County Kerry, has run every August for at least 400 years. A wild goat is crowned king.\n\nIn the old markets, bargaining happened in Irish. The final price was agreed with a handshake called 'buille boise' — a palm strike. The deal was sealed in the old language.",ch:"Shop at a market or shop using Irish phrases.",p:"Cé mhéad é sin? / An féidir leat...? / Go raibh maith agat",pr:"Kay VAYD eh shin / On FAY-djir lat / GUH rev mah ah-GUT",m:"How much is that? / Can you...? / Thank you",tip:"Smile when you try. People respond to the attempt, not the perfection.",b:"Complete a transaction in Irish",tasks:[{icon:"🛍️",text:"At any shop or market: ask the price in Irish. 'Cé mhéad é sin?' — just those four words."},{icon:"💬",text:"Thank three different people in Irish today. Watch what happens to their face."},{icon:"📝",text:"Write your shopping list in Irish before you go out. Every item."}]},
  { day:38,t:"Am an Lae",e:"Time of Day",cat:"vocab",d:2,story:"Time in Irish doesn't flow the same way as in English. 'Ar maidin' — in the morning — but 'maidin' literally means 'good' and 'day'. Morning is the good part of the day. 'Tráthnóna' — evening — comes from 'trát', meaning time, and 'nóna', noon. Evening is the time after the midpoint.\n\nThe Irish lived by natural light, not clocks. The language still carries this. Time is described by where the sun is, not by what numbers say.",ch:"Use Irish time expressions throughout the day.",p:"Ar maidin / um meán lae / tráthnóna / istoíche",pr:"er MAH-djin / um man LAY / TRAW-noh-na / ish-TEE-heh",m:"In the morning / at midday / in the evening / at night",tip:"'Go luath' = soon / early. 'Go mall' = late / slowly. Both have double meanings.",b:"Narrate your whole day in Irish time",tasks:[{icon:"🌅",text:"Set an alarm with Irish label 'ar maidin'. When it goes off, say the time in Irish."},{icon:"📱",text:"Send someone a message at three different times of day using the correct Irish time phrase."},{icon:"✍️",text:"Write your ideal day in Irish — what you do ar maidin, um meán lae, tráthnóna, istoíche."}]},
  { day:39,t:"Mothúcháin",e:"Feelings",cat:"vocab",d:3,story:"In Irish, you don't have feelings — feelings are on you. 'Tá áthas orm' — happiness is on me. 'Tá brón orm' — sadness is on me. You are not the emotion. The emotion visits you, sits on you, and can leave.\n\nThis is not just grammar. It's a philosophy. The Irish language built in, from the beginning, a way of experiencing emotion without being consumed by it. Feelings are weather — they pass.",ch:"Express how you feel in Irish today.",p:"Tá áthas / brón / imní / fearg / tuirse orm",pr:"Taw AW-hus / BRON / IM-nee / FAR-ug / TEER-sheh ur-um",m:"I am happy / sad / anxious / angry / tired",tip:"'Tá mé ceart go leor' = I'm fine/okay. The most Irish answer to any question.",b:"Name 5 emotions in Irish today",tasks:[{icon:"💭",text:"Check in with yourself three times today and name your feeling in Irish."},{icon:"📱",text:"Ask someone 'Conas atá tú i ndáiríre?' — How are you really? Then listen."},{icon:"✍️",text:"Write about a difficult feeling in Irish. The act of translating it changes it."}]},
  { day:40,t:"Cú Chulainn",e:"The Hound of Ulster",cat:"culture",d:3,story:"Cú Chulainn is Ireland's greatest warrior. At seventeen, he single-handedly defended Ulster against the armies of Connacht — because a curse had left all other Ulster warriors unable to fight. He stood in the ford and challenged them one by one.\n\nHis name means 'the hound of Culann'. As a boy, he killed a blacksmith's guard dog and offered to take its place until a new one was trained. That's how he got his name — and that's the kind of person he was.\n\nCú Chulainn died young, tied to a standing stone so he could die on his feet. A raven landed on his shoulder when he finally died. The stone is still there, in County Louth.",ch:"Learn Cú Chulainn's war cry and the story behind his name.",p:"Níl aon tinteán mar do thinteán féin",pr:"Neel ayn TIN-tawn mar duh HIN-tawn hayn",m:"There's no hearth like your own hearth (home)",tip:"This is Ireland's most famous proverb. Cú Chulainn fought to protect his people's hearth.",b:"Tell someone the story of Cú Chulainn",tasks:[{icon:"⚔️",text:"Read the full story of Cú Chulainn at the ford. It takes 10 minutes and you'll never forget it."},{icon:"🗿",text:"Look up the Cú Chulainn statue in the GPO, Dublin — he appears on the 1916 memorial."},{icon:"📱",text:"Share one fact about Cú Chulainn today. Most people don't know Ireland's greatest hero."}]},
  { day:41,t:"An Díaspora",e:"The Irish Diaspora",cat:"culture",d:3,story:"There are more people of Irish descent outside Ireland than inside it. 70 million people worldwide claim Irish heritage. The Irish diaspora is one of the largest in human history — driven by famine, poverty, persecution, and then, eventually, choice.\n\nBut they took the language with them. Irish was spoken in Boston tenements in the 1850s. In the Australian goldfields. In Argentine farming towns where the last Irish-Spanish speaker died in 1959.\n\nWhen you speak Irish today, you're speaking the language that crossed oceans in the mouths of desperate people who refused to let it die.",ch:"Connect with someone in the Irish diaspora today.",p:"Is Éireannach mé / Is de bhunadh Éireannach mé",pr:"Iss AY-run-ukh may / Iss djeh WUN-uh AY-run-ukh may",m:"I am Irish / I am of Irish descent",tip:"Say this to any Irish-American you meet. Watch what happens.",b:"Find one diaspora Irish speaker online",tasks:[{icon:"🌍",text:"Find an Irish community in a city far from Ireland. They exist in Buenos Aires, Melbourne, Chicago."},{icon:"📱",text:"If you have diaspora heritage: say 'Is de bhunadh Éireannach mé' out loud. Mean it."},{icon:"✍️",text:"Write one paragraph about what Ireland means to someone who had to leave it."}]},
  { day:42,t:"CLG — Cluichí Gaelacha",e:"GAA Sports",cat:"culture",d:3,story:"The GAA — Cumann Lúthchleas Gael — was founded in 1884, not just to play games, but to resist cultural erasure. At a time when Irish people were adopting English sports, the GAA said: we have our own. Hurling is 3,000 years old. Gaelic football is uniquely Irish.\n\nEvery county in Ireland has a GAA club. You can live in Qatar or California and find a GAA club within driving distance. It is the most Irish thing that travels.\n\nHurling is the fastest field sport in the world. The sliotar (ball) can travel at 150km/h. It is also the most beautiful.",ch:"Watch a hurling or Gaelic football match and learn the GAA vocabulary.",p:"Iomáint / peil / cúl / cic / caman / sliotar",pr:"UM-awnt / PEL / kool / kik / KAM-an / SHLIT-er",m:"Hurling / football / goal / kick / hurley stick / ball",tip:"'Cúl' = goal in Gaelic football. 'Báire' = goal in hurling. Different sports, different words.",b:"Watch 10 minutes of hurling and name what you see",tasks:[{icon:"🏑",text:"Watch the last 10 minutes of any hurling match on YouTube. It will change you."},{icon:"📍",text:"Find your nearest GAA club. They welcome everyone, everywhere in the world."},{icon:"📱",text:"Share a hurling clip with the caption 'Is fearr iomáint ná peil' — Hurling is better than football."}]},
  { day:43,t:"Seisiún Ceoil",e:"A Music Session",cat:"culture",d:3,story:"A seisiún is not a performance. No stage, no audience, no set list. Musicians sit in a circle in a pub, usually in a corner, and play. Anyone can join. If you know the tune, pick up your instrument and play. If you don't know it, listen and learn.\n\nThe music is passed by ear. No sheet music. A tune learned in Donegal in 1850 can be heard in a Clare pub tonight, unchanged. The musicians are the living library.\n\nThe word for the music — 'ceol' — means music, but it also means something like the sound the world makes when it's happy.",ch:"Find a seisiún or listen to trad music and learn the key phrases.",p:"An bhfuil tú ag seinm ceoil? / Is maith liom an ceol seo",pr:"On will too egg SHEN-im KYOHL / Iss mah lyum on KYOHL shuh",m:"Are you playing music? / I love this music",tip:"Walk into any trad session and say 'Tá an ceol go hálainn.' You'll make a friend.",b:"Listen to a full trad session",tasks:[{icon:"🎵",text:"Find a live trad session tonight — pub, YouTube, wherever. Listen for 20 minutes straight."},{icon:"🎸",text:"Learn the name of one Irish instrument: uilleann pipes, bodhrán, tin whistle, fiddle."},{icon:"📱",text:"Share a trad session clip and say why it moves you. Music evangelism."}]},
  { day:44,t:"An Ghaeltacht",e:"Irish-Speaking Heartlands",cat:"culture",d:3,story:"The Gaeltacht — from 'Gaeltacht', meaning Irish-speaking place — is not one place. It's a scattering of communities along Ireland's western coast: Connemara, Donegal, Kerry, Mayo, Waterford, Meath. Islands and mountainsides and fishing villages where Irish never died.\n\nIn 2022, the government reclassified the Gaeltacht. Some areas lost their status because not enough people were using Irish daily. Others were fighting back. Young people are choosing to move to Gaeltacht areas specifically to live in Irish.\n\nThe Gaeltacht is not a museum. It is a living argument that Irish can be a language of daily life.",ch:"Learn about the Gaeltacht region and find one thing happening there.",p:"Tá mé ag foghlaim Gaeilge / Ba mhaith liom dul go dtí an Ghaeltacht",pr:"Taw may eg FOW-lim GAYL-geh / Bah wah lyum dul guh djee on YAHL-tukht",m:"I am learning Irish / I would like to go to the Gaeltacht",tip:"Oideas Gael in Donegal runs Irish-immersion weeks. Real people, real Irish.",b:"Book or plan a Gaeltacht visit",tasks:[{icon:"🗺️",text:"Find the nearest Gaeltacht to wherever you are. They exist in every province."},{icon:"🎙️",text:"Listen to Raidió na Gaeltachta — Irish-language radio — for 5 minutes. Don't translate. Just listen."},{icon:"📱",text:"Follow one Gaeltacht community on social media. See Irish as a living daily language."}]},
  { day:45,t:"Na Séasúir",e:"The Seasons",cat:"nature",d:2,story:"The Irish year was divided not into four seasons but into two: the bright half and the dark half. Bealtaine (May 1) began the bright half. Samhain (November 1) began the dark half. The solstices were midpoints, not beginnings.\n\nThis ancient calendar is still alive in the language. The Irish words for the seasons — earrach, samhradh, fómhar, geimhreadh — carry the memory of a people who measured life by light.",ch:"Describe the current season and what it means in Irish.",p:"An t-earrach / an samhradh / an fómhar / an geimhreadh",pr:"on TYAR-ukh / on SOW-ruh / on FOH-wur / on GEV-ruh",m:"Spring / summer / autumn / winter",tip:"'Tá an aimsir go hálainn san earrach' = The weather is beautiful in spring.",b:"Describe today's season in 3 Irish sentences",tasks:[{icon:"🍂",text:"Go outside and find 3 things that tell you what season it is. Name them in Irish."},{icon:"🌱",text:"Write one thing you love about the current season — in Irish. Even 5 words."},{icon:"📱",text:"Share a photo of the season outside your window with an Irish caption."}]},
  { day:46,t:"Samhain",e:"The Origins of Halloween",cat:"culture",d:4,story:"Halloween is Irish. Not figuratively — literally. Samhain (October 31/November 1) was the most important night in the ancient Irish calendar. The boundary between the living and the dead dissolved. The dead walked. Fires were lit on every hilltop in Ireland.\n\nThe Celts carved turnips — not pumpkins — into lanterns to frighten spirits. Irish emigrants brought the tradition to America, where pumpkins were more available. The Jack-o'-lantern is an Irish turnip that found a new vegetable.\n\nThe word 'Samhain' is still used in Irish today. It's the Irish word for November.",ch:"Learn the Irish origins of Halloween traditions.",p:"Oíche Shamhna / na mairbh / na síoga",pr:"EE-heh HOW-na / na MAR-iv / na SHEE-uh-ga",m:"Halloween night / the dead / the fairies",tip:"In Irish mythology, the fairies — the Tuatha Dé Danann — went underground at Samhain.",b:"Tell someone the real origin of Halloween",tasks:[{icon:"🎃",text:"Tell one person today that Halloween is Irish. Show them the word 'Samhain'. Watch them."},{icon:"🕯️",text:"Learn the story of Stingy Jack — the original Jack-o'-lantern. It's Irish mythology."},{icon:"✍️",text:"Write a short Irish ghost story set on Samhain night. 5 sentences is enough."}]},
  { day:47,t:"An Ghaeilge Nua",e:"Modern Irish",cat:"culture",d:3,story:"Irish is not dying — it's changing. TG4 (the Irish-language TV channel) has 700,000 viewers a week. Duolingo Irish has millions of learners. There are Irish-medium schools in every Irish city, and in London, Boston, and New York.\n\nThe most watched TG4 show is a reality dating programme called 'Ros na Rún' — set in a Gaeltacht village where everyone speaks Irish. Young Irish people are falling in love in Irish on primetime television.\n\nLanguage survival is not about preservation. It's about making the language feel worth living in.",ch:"Find and engage with modern Irish content online.",p:"Tá an Ghaeilge beo! / Labhraímis Gaeilge!",pr:"Taw on YAHL-geh BYOH / LOW-rim-ish GAYL-geh",m:"Irish is alive! / Let's speak Irish!",tip:"Follow @gaeilge on Instagram. Irish memes. Irish joy. Irish internet.",b:"Engage with one piece of modern Irish content",tasks:[{icon:"📺",text:"Watch 5 minutes of TG4 content on their website or app. Even if you understand nothing."},{icon:"📱",text:"Find one Irish-language meme account on Instagram or TikTok. They exist and they're funny."},{icon:"💬",text:"Change your phone language to Irish for one hour. 'Socruithe' = Settings. Try it."}]},
  { day:48,t:"Canúintí",e:"Irish Dialects",cat:"culture",d:4,story:"Irish is spoken in three main dialects: Connacht (west), Munster (south), and Ulster (north). They sound so different that native speakers from different regions sometimes struggle to understand each other.\n\nThe same word can be pronounced three completely different ways. 'Cad é' (what) in Ulster. 'Cén chaoi' in Connacht. 'Cad is' in Munster. One question, three identities.\n\nThe standard written Irish (Caighdeán) was invented in the 1950s to unify the dialects on paper. But spoken Irish stayed wonderfully, stubbornly different.",ch:"Listen to Irish from two different dialects and spot the differences.",p:"Cad é / Cén chaoi / Conas atá / Cad is",pr:"KAH-djay / kayn KHEE / KUN-us ah-TAW / KAH-diss",m:"What? (Ulster) / How? (Connacht) / How are you? (Munster) / What? (Munster)",tip:"There is no 'correct' Irish. Every dialect is equally valid and equally beautiful.",b:"Identify which dialect you're learning",tasks:[{icon:"👂",text:"Find a recording of Connacht Irish and one of Ulster Irish. Listen to both. Feel the difference."},{icon:"🗺️",text:"On a map of Ireland, find where each dialect is spoken. Plan a linguistic road trip."},{icon:"📱",text:"Ask on the Gaeilge subreddit which dialect is easiest to start with. Watch the debate."}]},
  { day:49,t:"Turas go hÉirinn",e:"A Trip to Ireland",cat:"social",d:3,story:"Ireland receives 11 million tourists a year. But almost none of them hear Irish spoken. They go to pubs, kiss the Blarney Stone, drive the Wild Atlantic Way — and never hear the language that made all those place names.\n\nIf you speak even a little Irish in Ireland, something magical happens. Shopkeepers switch. Bartenders lean in. Old people's eyes light up. You've done the rarest thing a visitor can do: you've come not just to see Ireland, but to meet it.",ch:"Plan an Irish-language element for a real or imagined trip to Ireland.",p:"Tá mé ag dul go hÉirinn / Cá bhfuil...?",pr:"Taw may egg DUL guh HEY-rin / Kaw will",m:"I am going to Ireland / Where is...?",tip:"In any Gaeltacht area: try Irish first, always. Even badly. Especially badly.",b:"Plan 3 Irish phrases for your Ireland visit",tasks:[{icon:"✈️",text:"Plan one Irish-speaking stop on your dream Ireland trip: Aran Islands, Connemara, Donegal."},{icon:"🗣️",text:"Prepare 5 phrases you'd use in Ireland: greet, order, thank, ask directions, say goodbye."},{icon:"📱",text:"Follow @discoverireland on social. Find one place where you'd speak Irish."}]},
  { day:50,t:"Cumha",e:"Longing",cat:"culture",d:4,story:"The Irish word 'cumha' has no perfect English translation. It means longing, homesickness, grief for what is lost or absent. The Welsh have 'hiraeth'. The Portuguese have 'saudade'. The Irish have 'cumha'.\n\nFor 150 years after the Famine, the defining Irish emotion was cumha — for the country left behind, for the language slowly dying, for a world that no longer existed. The greatest Irish songs are cumha songs. The most beautiful Irish poetry is about what is gone.\n\nBut cumha is not only sadness. It is love that has outlived its object. It is proof that something mattered.",ch:"Find an Irish song about longing and learn its key phrase.",p:"Tá cumha orm / is mian liom filleadh",pr:"Taw KOO-a ur-um / iss MEE-un lum FIL-uh",m:"I am longing / I wish to return",tip:"'Óró Sé Do Bheatha Bhaile' is the great cumha song — the welcome home for the exile.",b:"Learn the first verse of one Irish longing song",tasks:[{icon:"🎵",text:"Listen to 'An Cailín Álainn' or 'The Lonesome Boatman'. Let it reach you."},{icon:"✍️",text:"Write about something you miss — a place, a person, a time. Write it in Irish if you can."},{icon:"📱",text:"Share 'cumha' as a concept with someone. Ask them what their language calls that feeling."}]},
  { day:51,t:"Seanfhocail II",e:"More Proverbs",cat:"culture",d:4,story:"Irish proverbs are compressed philosophy — centuries of hard-won wisdom in six words. They were memorised and passed down because books were luxury goods and wisdom needed to travel in mouths, not pages.\n\nThe best Irish proverbs have a twist. A surface meaning and a deeper one. 'Ná déan deifir; déan é ceart.' Don't hurry; do it right. Sounds obvious. But the second half is the real message: you'll do it right if you stop rushing.",ch:"Learn and use two new Irish proverbs today.",p:"Ná déan deifir / Is glas iad na cnoic i bhfad uainn",pr:"Naw djane DJEF-ir / Iss glas ee-ud na KNIH ih vad OO-in",m:"Don't rush / The far-off hills are green",tip:"'Is glas iad na cnoic...' = the grass is always greener. Ireland invented the concept.",b:"Use one proverb in real conversation",tasks:[{icon:"🧠",text:"Memorise both proverbs. Test yourself without looking. Then teach one to someone."},{icon:"💬",text:"Find the right moment to use 'Is glas iad na cnoic i bhfad uainn' today. Wait for it."},{icon:"✍️",text:"Write your own Irish proverb. What hard truth do you know that fits in 6 words?"}]},
  { day:52,t:"Bia Traidisiúnta",e:"Traditional Food",cat:"culture",d:2,story:"Irish traditional food is simpler and more honest than its reputation suggests. Soda bread — baked without yeast, risen with baking soda — was invented in Ireland in the 1840s when commercial yeast was scarce. Colcannon — mashed potato with cabbage and butter — is the dish of Samhain night.\n\nThe full Irish breakfast — 'bricfeasta iomlán' — is a relatively modern invention. But the ingredients — bacon, eggs, sausage, black pudding — each have deep histories in Irish rural life.",ch:"Cook or eat one traditional Irish food and describe it in Irish.",p:"Arán sóide / im / prátaí / uibheacha / bagún",pr:"ah-RAWN SOH-djeh / im / PRAW-tee / IV-ukh-a / bah-GOON",m:"Soda bread / butter / potatoes / eggs / bacon",tip:"'Is maith liom arán sóide le him' — I like soda bread with butter. The most Irish sentence.",b:"Make or eat one traditional Irish food",tasks:[{icon:"🍳",text:"Make soda bread today. It takes 5 ingredients and 45 minutes. You'll eat it for a week."},{icon:"🥔",text:"Make colcannon: mash potato with butter, milk, and cooked cabbage. Call it by its Irish name."},{icon:"📱",text:"Share a photo of Irish food with the Irish name. Teach people what it's really called."}]},
  { day:53,t:"Oileáin Árann",e:"The Aran Islands",cat:"culture",d:4,story:"Three small limestone islands off the coast of Galway. No trees. Wind that bends everything. Walls built from limestone without mortar, stretching for hundreds of miles across the islands, enclosing fields of soil that was made by hand — seaweed and sand carried up from the shore.\n\nThe Aran Islands were fully Irish-speaking until recently. J.M. Synge lived there, learned Irish, and wrote 'The Playboy of the Western World'. Robert Flaherty filmed 'Man of Aran' there in 1934 — arguably the first documentary film.\n\nThe Aran sweater was knit in patterns unique to each family. If a fisherman drowned and washed up on a foreign shore, his sweater told you who he was.",ch:"Learn about the Aran Islands and the Aran sweater tradition.",p:"Éadaí / geansaí / inis / álainn / clocha",pr:"AY-dee / GAN-see / IN-ish / AW-lin / KLUKH-a",m:"Clothes / sweater / island / beautiful / stones",tip:"'Inis Mór, Inis Meáin, Inis Oírr' — the three islands. Each has its own character.",b:"Learn one Aran Islands fact and share it",tasks:[{icon:"🧶",text:"Look up the pattern of a traditional Aran sweater. Each stitch had a name and a meaning."},{icon:"🏝️",text:"Find 3 facts about the Aran Islands that most people don't know. There are many."},{icon:"📱",text:"Share a photo or fact about Aran with the hashtag #OileáinÁrann."}]},
  { day:54,t:"Filíocht",e:"Irish Poetry",cat:"culture",d:4,story:"Nuala Ní Dhomhnaill is the greatest living poet in the Irish language. She writes exclusively in Irish — not because she has to, but because she says Irish gives her words that English cannot hold. Words for specific griefs, specific joys, specific Irish experiences that English flattens.\n\nHer poem 'Ceist na Teangan' — The Language Question — is about putting the Irish language in a small boat and letting it drift. You don't know if it will survive. But you put it out to sea anyway.\n\nThat's what we are all doing when we speak Irish. Putting it on the water. Hoping.",ch:"Read one Irish poem or the English translation of one Irish poem.",p:"Ceist na teangan / Mo ghrá is mo rún",pr:"KESHT na TANG-an / Muh GRAW iss muh ROON",m:"The language question / My love and my secret",tip:"'Mo ghrá' = my love. The most common phrase in Irish poetry. It never gets old.",b:"Read one full Irish poem",tasks:[{icon:"📖",text:"Read Nuala Ní Dhomhnaill's 'Ceist na Teangan' in translation. It takes 3 minutes."},{icon:"✍️",text:"Write 4 lines of your own poetry in Irish. It doesn't have to rhyme. It has to be true."},{icon:"📱",text:"Share a line of Irish poetry today. 'Mo ghrá is mo rún' with your own meaning."}]},
  { day:55,t:"Ag Obair",e:"Work and Daily Life",cat:"social",d:3,story:"The Irish word for work — 'obair' — is related to the Proto-Celtic word for effort. Irish people have always worked hard, often for others, often for little. The emigrant letters sent home from America in the 19th century are full of descriptions of work: what they did, how much they earned, what they sent back.\n\nBut 'obair' also appears in the phrase 'is mór an obair é' — it's a big job. Meaning: this is difficult, this matters, this takes real effort. Work in Irish is not just employment. It is anything worth doing.",ch:"Describe your work or daily routine in Irish.",p:"Tá mé ag obair / Is maith liom mo chuid oibre / Oifig / monarcha / baile",pr:"Taw may egg UB-ir / Iss mah lyum muh KHIDJ IB-reh / IF-ig / MUN-ukh-ra / BAL-yeh",m:"I am working / I like my work / office / factory / home",tip:"'Ag obair ón mbaile' = working from home. A very modern Irish phrase.",b:"Describe your job in 3 Irish sentences",tasks:[{icon:"💼",text:"Describe your job or daily routine to yourself in Irish. Even 3 sentences."},{icon:"📱",text:"Tell someone what you do for work using the Irish phrase. Even badly."},{icon:"✍️",text:"Write your work schedule for tomorrow entirely in Irish."}]},
  { day:56,t:"Grá",e:"Love in Irish",cat:"social",d:3,story:"In Irish, love is not one thing. 'Grá' is deep love — romantic, familial, spiritual. 'Cion' is affection, fondness. 'Searc' is an old word for passionate love, used in poetry. 'Dílseacht' is loyalty, faithfulness — the love that stays.\n\nThe oldest Irish love poem, from the 9th century, is attributed to a monk writing about God but reads like someone missing a person. 'A Rún' — my secret, my beloved — is the most intimate address in Irish. You call someone 'a rún' when they are the secret you carry.",ch:"Tell someone you love them in Irish.",p:"Is tú mo ghrá / Mo chroí istigh ionat / A rún",pr:"Iss too muh GRAW / Muh KHREE ISH-tig UN-ut / ah ROON",m:"You are my love / My heart is in you / My beloved",tip:"'Tá grá agam duit' = I love you. More powerful than English because it says love is something you have.",b:"Say 'tá grá agam duit' to someone who matters",tasks:[{icon:"❤️",text:"Say 'tá grá agam duit' to someone today. Out loud. In person if possible."},{icon:"✍️",text:"Write a love letter of 5 sentences in Irish. Send it or keep it."},{icon:"📱",text:"Find the Irish love song 'Sí do Mhamaí í' and listen to it. It will wreck you in the best way."}]},
  { day:57,t:"Spórt na hÉireann",e:"Sport and Identity",cat:"culture",d:3,story:"In 1884, Archbishop Croke wrote a letter that changed Irish sport forever. He said: we are losing our national identity to English games. Cricket, tennis, croquet — all fine games, but not ours. We must revive our own.\n\nThe GAA banned its members from playing 'foreign games' until 1971. You could be expelled for watching a soccer match. It sounds extreme. But it worked. The GAA became the largest amateur sports organisation in the world. And hurling survived.\n\nToday the ban is gone but the loyalty remains. On All-Ireland day, the whole country stops.",ch:"Learn the key phrases for watching or playing Gaelic games.",p:"Buaigh / cailleadh / cúl / cic / foireann / cluiche",pr:"BOO-ig / KAL-yuh / kool / kik / FIR-un / KLEE-heh",m:"Win / lose / goal / kick / team / game",tip:"'Suas leis!' = Up with them! The GAA cheer. Say it at any match.",b:"Watch 10 minutes of Gaelic games",tasks:[{icon:"🏟️",text:"Find your county's GAA team. Look up when they next play. Plan to watch."},{icon:"⚡",text:"Watch the last 5 minutes of any All-Ireland hurling final on YouTube. You'll understand everything."},{icon:"📱",text:"Share 'buaigh' and 'cailleadh' — the most important words in any sport."}]},
  { day:58,t:"An Ghaeilge Anois",e:"Irish Today",cat:"culture",d:4,story:"In 2022, 1.87 million people in Ireland said they could speak Irish. 73,000 spoke it daily. Those numbers sound small — but they are growing for the first time since records began.\n\nThe Under-35 cohort is the most Irish-speaking generation in a century. Irish-medium schools have waiting lists. The Irish language Twitter community is one of the most vibrant in Europe.\n\nSomething is happening. Not a revival — that implies something was dead. A renewal. The language was always there. People are choosing to live in it.",ch:"Find and share one piece of evidence that Irish is growing.",p:"Tá an Ghaeilge ag fás / Roghnóidh mé an Ghaeilge",pr:"Taw on YAHL-geh egg FAWS / RUG-noh-ee may on YAHL-geh",m:"Irish is growing / I choose Irish",tip:"Every time you speak Irish, you are one of the 73,000. You are the statistic that matters.",b:"Share one sign of Irish language growth",tasks:[{icon:"📊",text:"Look up the latest census data on Irish language speakers. The trend will surprise you."},{icon:"📱",text:"Find and follow three Irish-language social media accounts. Add to the numbers."},{icon:"✍️",text:"Write one sentence about why you think Irish is worth saving. In Irish if you can."}]},
  { day:59,t:"Scríobh i nGaeilge",e:"Write in Irish",cat:"immersion",d:4,story:"The Book of Kells was written by Irish monks around 800 AD. It is considered the most beautiful book ever made. Every letter is a work of art. The monks who made it believed that writing was an act of worship — that making something beautiful on the page was itself a prayer.\n\nWhen you write in Irish today, you are part of a 1,500-year-old tradition of people who believed that putting the Irish language on the page mattered. Not just for communication. For beauty. For permanence.",ch:"Write something substantial in Irish today — a paragraph, a letter, a diary entry.",p:"Scríobhaim / léim / tuigim / foghlamaím",pr:"SKREE-vim / LAY-im / TIG-im / FOW-lim-eem",m:"I write / I read / I understand / I am learning",tip:"Write about today. What happened, how you felt, what you noticed. In Irish, it becomes new.",b:"Write 5 sentences in Irish without help",tasks:[{icon:"✍️",text:"Write a diary entry for today in Irish. Minimum 5 sentences. Don't stop at 5."},{icon:"📱",text:"Write a post in Irish on any social platform. Tag it #GaeilgeAmháin — Irish only."},{icon:"📖",text:"Write a letter to your future self in Irish. Seal it. Open it in a year."}]},
  { day:60,t:"Críoch agus Tús Nua",e:"End and New Beginning",cat:"immersion",d:5,story:"You have done something remarkable.\n\nSixty days. Sixty stories. Sixty phrases. You started with 'Dia dhuit' and you have arrived somewhere most people never reach: a language that connects you to 2,000 years of human stubbornness, beauty, grief, and joy.\n\nThe Irish language has survived invasion, famine, suppression, and near-extinction. It survived because people like you — in every generation — decided it was worth carrying forward.\n\nYou are now one of those people.\n\n'Coinnigh ort.' Keep going. This is not an ending. It is the moment you stop being a learner and start being a speaker.",ch:"Speak Irish today. Not for a challenge. Because you can.",p:"Coinnigh ort / Tá Gaeilge agam / Táim bródúil asam féin",pr:"KIN-ig urt / Taw GAYL-geh ah-GUM / Taw-im BROH-dool AS-um hayn",m:"Keep going / I have Irish / I am proud of myself",tip:"Tell someone you completed 60 days of Irish. In Irish.",b:"Speak Irish for one full hour today",tasks:[{icon:"☘️",text:"Write down 3 things the Irish language has given you that you didn't expect."},{icon:"📱",text:"Share that you completed the 60-day challenge. #GaeltachtConnect. Someone needs to see this."},{icon:"✨",text:"Start again from Day 1. This time you'll understand everything you missed the first time."}]},
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
  // Level 2
  { name: "Leibhéal 2 · Tús", en: "Level 2 · Beginnings", start: 30, end: 37 },
  { name: "Cultúr & Miotaseolaíocht", en: "Culture & Mythology", start: 37, end: 44 },
  { name: "Tíreolaíocht & Taisteal", en: "Places & Travel", start: 44, end: 51 },
  { name: "Tumadh Iomlán II", en: "Full Immersion II", start: 51, end: 60 },
];

const THEMES = {
  coill: {   // Coill = Forest — dark green + gold (default)
    dark:true,
    bg:"#091508",bg2:"#0D1F0F",card:"#101E10",cardAlt:"#142014",
    phrase:"#1A2E20",phraseBd:"rgba(200,150,62,0.3)",
    tx:"#F0EDE4",tx2:"#C8C4B4",tx3:"rgba(240,237,228,0.45)",
    acc:"#C8963E",acc2:"#A87030",gold:"#C8963E",green:"#6FCF97",
    bd:"rgba(200,150,62,0.18)",shadow:"0 2px 20px rgba(0,0,0,0.4)",
    doneBg:"rgba(27,67,50,0.3)",doneBd:"rgba(45,106,79,0.4)",doneTx:"#6FCF97",
    nextBd:"#C8963E",
    tipBg:"rgba(200,150,62,0.08)",tipBd:"rgba(200,150,62,0.2)",tipTx:"#D4AA30",
    btn:"#1B4332",btnTx:"#F0EDE4",
    progBg:"rgba(255,255,255,0.08)",progFill:"linear-gradient(90deg,#1B4332,#C8963E)",
    celebBg:"rgba(9,21,8,0.96)",
    dotOn:"#6FCF97",dotOff:"rgba(255,255,255,0.12)",dotDone:"#C8963E",
    nav:"#101E10",navBd:"rgba(200,150,62,0.18)",
    hero:"#071A0E",
    ink:"rgba(200,150,62,0.3)",
  },
  parchment: {  // Lámhscríbhinn = Manuscript — warm Celtic parchment
    dark:false,
    bg:"#FDFAF4",bg2:"#F5EFE0",card:"#FFFFFF",cardAlt:"#FAF6EE",
    phrase:"#EEF7F1",phraseBd:"#C9DDD1",
    tx:"#1A1A18",tx2:"#3D3D38",tx3:"#7A7A70",
    acc:"#1B4332",acc2:"#0D2E1F",gold:"#C9A227",green:"#1B4332",
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
  oiche: {   // Farraige = Atlantic Ocean — deep blue, Irish sea
    dark:true,
    bg:"#050C12",bg2:"#081018",card:"#0C1620",cardAlt:"#101C28",
    phrase:"#101C28",phraseBd:"rgba(79,172,219,0.3)",
    tx:"#E4EEF8",tx2:"#A8C4D8",tx3:"rgba(228,238,248,0.4)",
    acc:"#4FACDB",acc2:"#3A8BB8",gold:"#7ECFEA",green:"#4FACDB",
    bd:"rgba(79,172,219,0.18)",shadow:"0 2px 20px rgba(0,0,0,0.45)",
    doneBg:"rgba(27,67,100,0.3)",doneBd:"rgba(45,100,150,0.4)",doneTx:"#7ECFEA",
    nextBd:"#4FACDB",
    tipBg:"rgba(79,172,219,0.08)",tipBd:"rgba(79,172,219,0.2)",tipTx:"#7ECFEA",
    btn:"#1A4060",btnTx:"#E4EEF8",
    progBg:"rgba(255,255,255,0.08)",progFill:"linear-gradient(90deg,#1A4060,#4FACDB)",
    celebBg:"rgba(5,12,18,0.96)",
    dotOn:"#4FACDB",dotOff:"rgba(255,255,255,0.12)",dotDone:"#7ECFEA",
    nav:"#0C1620",navBd:"rgba(79,172,219,0.18)",
    hero:"#071015",
    ink:"rgba(79,172,219,0.3)",
  },
};

const loadS = () => { try { const r = localStorage.getItem("gc3"); return r ? JSON.parse(r) : null; } catch { return null; } };
const saveS = (s) => { try { localStorage.setItem("gc3", JSON.stringify(s)); } catch(e) { console.error(e); } };

// ── OneSignal Web Push ───────────────────────────────────────
const _OS_APP_ID = "9ca9568a-ce1d-4d1c-a7c0-e5044e80d60b";

function initOneSignal() {
  if (!window.OneSignalDeferred || _OS_APP_ID === "ONESIGNAL_APP_ID_PLACEHOLDER") return;
  window.OneSignalDeferred.push(async (os) => {
    await os.init({
      appId: _OS_APP_ID,
      notifyButton: { enable: false },
      promptOptions: {
        slidedown: {
          prompts: [{
            type: "push",
            autoPrompt: false,
            text: {
              actionMessage: "Get a daily reminder at 9am to complete your Irish challenge.",
              acceptButton: "Tá — Yes please",
              cancelButton: "Níl — Maybe later",
            },
          }],
        },
      },
    });
  });
}

async function osRequestPermission() {
  if (!window.OneSignalDeferred || _OS_APP_ID === "ONESIGNAL_APP_ID_PLACEHOLDER") return false;
  return new Promise(res => {
    window.OneSignalDeferred.push(async (os) => {
      try {
        await os.slidedown.promptPush();
        const subbed = await os.User.PushSubscription.optedIn;
        res(!!subbed);
      } catch { res(false); }
    });
  });
}

initOneSignal();

// ── Supabase community counter ───────────────────────────────
// Table: completions (id uuid, date text, created_at timestamptz)
// No custom functions needed — just INSERT + COUNT
const _SB_URL = "https://wcwsrolhbodjgourbkjz.supabase.co";
const _SB_KEY = "sb_publishable_gqY68nZQ1uyqWcUVg4qKLA_JRJL36Y8";
const _sbH = { "apikey": _SB_KEY, "Authorization": `Bearer ${_SB_KEY}`, "Content-Type": "application/json" };

async function sbIncrement(day) {
  try {
    await fetch(`${_SB_URL}/rest/v1/completions`, {
      method: "POST",
      headers: _sbH,
      body: JSON.stringify({ date: day }),
    });
  } catch {}
}

async function sbGetCount(day) {
  try {
    const r = await fetch(
      `${_SB_URL}/rest/v1/completions?date=eq.${day}&select=id`,
      { headers: { ..._sbH, "Prefer": "count=exact" } }
    );
    const range = r.headers.get("Content-Range"); // e.g. "0-9/847"
    if (range) return parseInt(range.split("/")[1], 10);
    return null;
  } catch { return null; }
}

async function sbFocailRecord(dayNum, won, guesses) {
  try {
    await fetch(`${_SB_URL}/rest/v1/completions`,
      {method:"POST",headers:_sbH,body:JSON.stringify({date:`focail-${dayNum}`})});
    if(won){
      await fetch(`${_SB_URL}/rest/v1/completions`,
        {method:"POST",headers:_sbH,body:JSON.stringify({date:`focail-${dayNum}-w`})});
      await fetch(`${_SB_URL}/rest/v1/completions`,
        {method:"POST",headers:_sbH,body:JSON.stringify({date:`focail-${dayNum}-g${guesses}`})});
    }
  } catch {}
}
async function sbFocailDistribution(dayNum) {
  try {
    const rs=await Promise.all([1,2,3,4,5,6].map(n=>
      fetch(`${_SB_URL}/rest/v1/completions?date=eq.focail-${dayNum}-g${n}&select=id`,
        {headers:{..._sbH,"Prefer":"count=exact"}})));
    return rs.map(r=>parseInt((r.headers.get("Content-Range")||"0/0").split("/")[1],10)||0);
  }catch{return null;}
}
async function sbFocailStats(dayNum) {
  try {
    const [rP,rW]=await Promise.all([
      fetch(`${_SB_URL}/rest/v1/completions?date=eq.focail-${dayNum}&select=id`,
        {headers:{..._sbH,"Prefer":"count=exact"}}),
      fetch(`${_SB_URL}/rest/v1/completions?date=eq.focail-${dayNum}-w&select=id`,
        {headers:{..._sbH,"Prefer":"count=exact"}}),
    ]);
    const plays=parseInt((rP.headers.get("Content-Range")||"0/0").split("/")[1],10)||0;
    const wins =parseInt((rW.headers.get("Content-Range")||"0/0").split("/")[1],10)||0;
    return {plays,wins};
  } catch { return null; }
}

// ── Auth — Supabase email/password + cloud sync ─────────────────────────────
let _gcToken   = localStorage.getItem("gc_token")   || null;
let _gcRefresh = localStorage.getItem("gc_refresh")  || null;
function _setTokens(a,r){
  _gcToken=a; _gcRefresh=r||null;
  if(a){localStorage.setItem("gc_token",a);localStorage.setItem("gc_refresh",r||"");}
  else {localStorage.removeItem("gc_token");localStorage.removeItem("gc_refresh");}
}
const _aH=(tok)=>({"apikey":_SB_KEY,"Authorization":`Bearer ${tok}`,"Content-Type":"application/json"});

async function sbAuth(email,password,isSignUp){
  const url=isSignUp?`${_SB_URL}/auth/v1/signup`:`${_SB_URL}/auth/v1/token?grant_type=password`;
  try{
    const r=await fetch(url,{method:"POST",headers:_sbH,body:JSON.stringify({email,password})});
    const d=await r.json();
    if(d.access_token) _setTokens(d.access_token,d.refresh_token);
    return d;
  }catch(e){return {error:{message:"Network error"}};}
}

async function sbGetUser(){
  if(!_gcToken) return null;
  try{
    let r=await fetch(`${_SB_URL}/auth/v1/user`,{headers:_aH(_gcToken)});
    if(r.status===401&&_gcRefresh){
      const rr=await fetch(`${_SB_URL}/auth/v1/token?grant_type=refresh_token`,{
        method:"POST",headers:_sbH,body:JSON.stringify({refresh_token:_gcRefresh})});
      const rd=await rr.json();
      if(rd.access_token){_setTokens(rd.access_token,rd.refresh_token);r=await fetch(`${_SB_URL}/auth/v1/user`,{headers:_aH(_gcToken)});}
      else{_setTokens(null,null);return null;}
    }
    if(!r.ok){_setTokens(null,null);return null;}
    return r.json();
  }catch{return null;}
}

async function sbSyncProgress(progress){
  if(!_gcToken) return;
  try{
    await fetch(`${_SB_URL}/auth/v1/user`,{method:"PUT",headers:_aH(_gcToken),
      body:JSON.stringify({data:{progress}})});
  }catch{}
}

async function sbSignOut(){
  if(!_gcToken) return;
  try{await fetch(`${_SB_URL}/auth/v1/logout`,{method:"POST",headers:_aH(_gcToken)});}catch{}
  _setTokens(null,null);
}

// ── Leaderboard — scores table (id uuid PK, name text, xp int, lessons int, streak int) ─
// SQL to create: create table scores(id uuid primary key,name text not null default 'Gaeilgeoir',xp int not null default 0,lessons int not null default 0,streak int not null default 0,updated_at timestamptz default now());alter table scores enable row level security;create policy "read all" on scores for select using(true);create policy "own write" on scores for insert with check(auth.uid()=id);create policy "own update" on scores for update using(auth.uid()=id);
async function sbUpdateScore(userId,name,xp,lessons,streak){
  if(!_gcToken||!userId)return;
  try{
    await fetch(`${_SB_URL}/rest/v1/scores`,{
      method:"POST",
      headers:{..._aH(_gcToken),"Prefer":"resolution=merge-duplicates,return=minimal"},
      body:JSON.stringify({id:userId,name,xp,lessons,streak,updated_at:new Date().toISOString()}),
    });
  }catch{}
}
async function sbLeaderboard(){
  try{
    const r=await fetch(
      `${_SB_URL}/rest/v1/scores?select=id,name,xp,lessons,streak&order=xp.desc&limit=10`,
      {headers:_sbH}
    );
    if(!r.ok)return null;
    return r.json();
  }catch{return null;}
}
async function sbMyRank(myId){
  if(!myId)return null;
  try{
    const [rMe,rAbove]=await Promise.all([
      fetch(`${_SB_URL}/rest/v1/scores?id=eq.${myId}&select=xp`,{headers:_sbH}),
      fetch(`${_SB_URL}/rest/v1/scores?select=id`,{headers:{..._sbH,"Prefer":"count=exact"}}),
    ]);
    const [me]=await rMe.json();
    if(!me)return null;
    const above=await fetch(
      `${_SB_URL}/rest/v1/scores?xp=gt.${me.xp}&select=id`,
      {headers:{..._sbH,"Prefer":"count=exact"}}
    );
    const cnt=parseInt((above.headers.get("Content-Range")||"0/0").split("/")[1],10)||0;
    const total=parseInt((rAbove.headers.get("Content-Range")||"0/0").split("/")[1],10)||1;
    return{rank:cnt+1,total,xp:me.xp};
  }catch{return null;}
}

function mergeProgress(local,cloud){
  if(!cloud) return local;
  if(!local) return cloud;
  return{
    ...local,
    done:[...new Set([...(local.done||[]),(cloud.done||[])])].flat().filter(Number.isInteger).sort((a,b)=>a-b),
    bonus:[...new Set([...(local.bonus||[]),(cloud.bonus||[])]).values()],
    achievements:[...new Set([...(local.achievements||[]),(cloud.achievements||[])]).values()],
    tasksDone:[...new Set([...(local.tasksDone||[]),(cloud.tasksDone||[])]).values()],
    xp:Math.max(local.xp||0,cloud.xp||0),
    streak:Math.max(local.streak||0,cloud.streak||0),
    best:Math.max(local.best||0,cloud.best||0),
  };
}

// ── Focail — Daily Irish Word Puzzle (Wordle-style) ─────────────────────────
const FOCAIL_WORDS = [
  {w:"teach", m:"house",       pr:"chakh"},
  {w:"uisce", m:"water",       pr:"ISH-keh"},
  {w:"leaba", m:"bed",         pr:"LA-ba"},
  {w:"bróga", m:"shoes",       pr:"BROH-ga"},
  {w:"maith", m:"good",        pr:"mah"},
  {w:"madra", m:"dog",         pr:"MAD-ra"},
  {w:"clann", m:"children",    pr:"klawn"},
  {w:"grian", m:"sun",         pr:"GREE-an"},
  {w:"gaoth", m:"wind",        pr:"gwee"},
  {w:"coill", m:"forest",      pr:"kwill"},
  {w:"ceart", m:"correct",     pr:"kyart"},
  {w:"scoil", m:"school",      pr:"skull"},
  {w:"deoch", m:"drink",       pr:"DYUKH"},
  {w:"féile", m:"festival",    pr:"FAY-leh"},
  {w:"súile", m:"eyes",        pr:"SOO-leh"},
  {w:"lámha", m:"hands",       pr:"LAW-va"},
  {w:"balla", m:"wall",        pr:"BAL-a"},
  {w:"ceann", m:"head/one",    pr:"kyawn"},
  {w:"fuaim", m:"sound",       pr:"FOO-im"},
  {w:"rince", m:"dance",       pr:"RINK-eh"},
  {w:"siopa", m:"shop",        pr:"SHUP-a"},
  {w:"amach", m:"outside",     pr:"a-MAKH"},
  {w:"anois", m:"now",         pr:"a-NISH"},
  {w:"oíche", m:"night",       pr:"EE-heh"},
  {w:"spéir", m:"sky",         pr:"SPAYR"},
  {w:"greim", m:"grip",        pr:"GREM"},
  {w:"snámh", m:"swimming",    pr:"SNAWV"},
  {w:"léamh", m:"reading",     pr:"LAY-uv"},
  {w:"scéal", m:"story",       pr:"SHKYAL"},
  {w:"crann", m:"tree",        pr:"krawn"},
  {w:"sruth", m:"stream",      pr:"sruh"},
  {w:"páirc", m:"field/park",  pr:"PAW-rk"},
  {w:"doras", m:"door",        pr:"DUH-ras"},
  {w:"taobh", m:"side",        pr:"teev"},
  {w:"béile", m:"meal",        pr:"BAY-leh"},
  {w:"glúin", m:"knee",        pr:"GLOO-in"},
  {w:"tuath", m:"countryside", pr:"TOO-uh"},
  {w:"tirim", m:"dry",         pr:"CHIR-im"},
  {w:"tobar", m:"well/spring", pr:"TUB-ar"},
  {w:"cnámh", m:"bone",        pr:"knaav"},
  {w:"bocht", m:"poor",        pr:"bukht"},
  {w:"céilí", m:"dance night", pr:"KAY-lee"},
  {w:"buíon", m:"team",        pr:"BWEE-un"},
  {w:"fuinn", m:"melody",      pr:"fwin"},
  {w:"ríoga", m:"royal",       pr:"REE-ga"},
  {w:"aosta", m:"elderly",     pr:"EE-sta"},
  {w:"grúpa", m:"group",       pr:"GROO-pa"},
  {w:"beoir", m:"beer",        pr:"BYOHR"},
  {w:"éirim", m:"I rise",      pr:"AY-rim"},
  {w:"caife", m:"coffee",      pr:"KAF-eh"},
  // ── second 50 ──────────────────────────────
  {w:"cloch", m:"stone",       pr:"klukh"},
  {w:"bláth", m:"flower",      pr:"blaw"},
  {w:"feoil", m:"meat",        pr:"FYOHL"},
  {w:"milis", m:"sweet",       pr:"MIL-ish"},
  {w:"obair", m:"work",        pr:"UB-ir"},
  {w:"tábla", m:"table",       pr:"TAW-bla"},
  {w:"éadaí", m:"clothes",     pr:"AY-dee"},
  {w:"oifig", m:"office",      pr:"IF-ig"},
  {w:"cosán", m:"footpath",    pr:"cuh-SAWN"},
  {w:"geata", m:"gate",        pr:"GAT-a"},
  {w:"cósta", m:"coast",       pr:"KOH-sta"},
  {w:"caint", m:"speech/chat", pr:"KYANT"},
  {w:"focal", m:"word",        pr:"FUK-al"},
  {w:"litir", m:"letter",      pr:"LIT-ir"},
  {w:"droim", m:"back/ridge",  pr:"drim"},
  {w:"cluas", m:"ear",         pr:"KLOO-as"},
  {w:"naomh", m:"saint",       pr:"neev"},
  {w:"gáire", m:"laughter",    pr:"GAW-reh"},
  {w:"cúram", m:"care/duty",   pr:"KOO-rum"},
  {w:"bréag", m:"lie/untruth", pr:"BRYAG"},
  {w:"dearg", m:"red",         pr:"DYAR-ug"},
  {w:"lacha", m:"duck",        pr:"LAKH-a"},
  {w:"cearc", m:"hen",         pr:"kyark"},
  {w:"ciúin", m:"quiet/calm",  pr:"KYOO-in"},
  {w:"cróga", m:"brave",       pr:"KROH-ga"},
  {w:"fionn", m:"fair/blonde", pr:"fyun"},
  {w:"sméar", m:"blackberry",  pr:"smyar"},
  {w:"silín", m:"cherry",      pr:"SHIL-een"},
  {w:"camán", m:"hurley stick",pr:"kuh-MAWN"},
  {w:"léine", m:"shirt",       pr:"LAY-neh"},
  {w:"draoi", m:"druid",       pr:"DREE"},
  {w:"sídhe", m:"fairy folk",  pr:"SHEE"},
  {w:"baile", m:"town/home",   pr:"BAL-yeh"},
  {w:"féach", m:"look/watch",  pr:"FAY-akh"},
  {w:"cáise", m:"cheese",      pr:"KAW-sheh"},
  {w:"sicín", m:"chicken",     pr:"SHIK-een"},
  {w:"aigne", m:"mind/spirit", pr:"AIG-neh"},
  {w:"beoga", m:"lively",      pr:"BYOH-ga"},
  {w:"uasal", m:"noble",       pr:"OO-sul"},
  {w:"óstán", m:"hotel",       pr:"OH-stawn"},
  {w:"oráid", m:"speech/talk", pr:"uh-RAW-idj"},
  {w:"dánta", m:"poems",       pr:"DAWN-ta"},
  {w:"anail", m:"breath",      pr:"AN-il"},
  {w:"liath", m:"grey",        pr:"LEE-uh"},
  {w:"gorma", m:"blue",        pr:"GUR-ma"},
  {w:"caora", m:"sheep",       pr:"KWEE-ra"},
  {w:"ithim", m:"I eat",       pr:"IH-im"},
  {w:"ólaim", m:"I drink",     pr:"OH-lim"},
  {w:"meala", m:"honey",       pr:"MAL-a"},
  {w:"campa", m:"camp",        pr:"KAMP-a"},
];
const FOCAIL_EPOCH = new Date("2026-01-01");
const getFocailDay = () => Math.floor((new Date() - FOCAIL_EPOCH) / 86400000);
const getFocailWord = () => FOCAIL_WORDS[Math.abs(getFocailDay()) % FOCAIL_WORDS.length];
const focailNorm = (s="") => s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
function scoreFocailGuess(guess, answer) {
  const g=focailNorm(guess).split(""), a=focailNorm(answer).split("");
  const res=Array(5).fill("n"), used=Array(5).fill(false);
  for(let i=0;i<5;i++) if(g[i]===a[i]){res[i]="g";used[i]=true;}
  for(let i=0;i<5;i++){
    if(res[i]==="g") continue;
    for(let j=0;j<5;j++) if(!used[j]&&g[i]===a[j]){res[i]="y";used[j]=true;break;}
  }
  return res;
}
const focailEmoji = (colors) => colors.map(r=>r.map(col=>col==="g"?"🟩":col==="y"?"🟨":"⬛").join("")).join("\n");

// ── Achievement definitions ──────────────────────────────────────────────────
const ALL_ACHIEVEMENTS = [
  // First-timers
  {id:"first_lesson",  icon:"🌱", name:"Céad Lá",      nameEn:"First Day",        desc:"Completed your first lesson"},
  {id:"first_flash",   icon:"⚡", name:"Splanc!",       nameEn:"First Flash",      desc:"Played Word Flash for the first time"},
  {id:"first_focail",  icon:"🟩", name:"Focal Maith",   nameEn:"Good Word",        desc:"Played Focail for the first time"},
  // Streaks
  {id:"streak_3",      icon:"🔥", name:"3 Lá",          nameEn:"3 Days",           desc:"3-day streak"},
  {id:"streak_7",      icon:"🔥", name:"Seachtain",     nameEn:"One Week",         desc:"7-day streak"},
  {id:"streak_14",     icon:"🏅", name:"Coicís",        nameEn:"Two Weeks",        desc:"14-day streak"},
  {id:"streak_30",     icon:"🏆", name:"30 Lá!",        nameEn:"Full Month",       desc:"30-day streak"},
  // Focail
  {id:"focail_win",    icon:"🎯", name:"Cruthaithe!",   nameEn:"Solved!",          desc:"Solved Focail"},
  {id:"focail_3",      icon:"🤩", name:"3 Croí",        nameEn:"3-Streak",         desc:"Solved Focail 3 days in a row"},
  {id:"focail_genius", icon:"🧠", name:"Géinieas",      nameEn:"Genius",           desc:"Solved Focail in 2 guesses or fewer"},
  // Flash
  {id:"flash_perfect", icon:"💯", name:"Foirfe!",       nameEn:"Perfect!",         desc:"10/10 in Word Flash"},
  {id:"flash_combo",   icon:"🔥", name:"5 Combo",       nameEn:"On Fire",          desc:"5× combo in Word Flash"},
  // Lessons
  {id:"lesson_5",      icon:"📚", name:"Cúig Cheacht",  nameEn:"Five Lessons",     desc:"5 lessons completed"},
  {id:"lesson_15",     icon:"📖", name:"Leath Slí",     nameEn:"Halfway",          desc:"15 lessons completed"},
  {id:"lesson_30",     icon:"☘️", name:"Gaeilgeoir!",   nameEn:"Irish Speaker",    desc:"All 30 lessons done"},
  // XP
  {id:"xp_100",        icon:"⭐", name:"Céad XP",       nameEn:"100 XP",           desc:"Earned 100 XP"},
  {id:"xp_500",        icon:"🌟", name:"500 XP",        nameEn:"500 XP",           desc:"Earned 500 XP"},
  {id:"xp_1000",       icon:"💎", name:"Míle XP",       nameEn:"1000 XP",          desc:"Earned 1000 XP"},
];

// Share image generation — 1080×1080 Instagram-ready card
const genShareImage = (day, total, streak) => {
  const cv = document.createElement("canvas"); cv.width=1080; cv.height=1080;
  const x = cv.getContext("2d");
  const ch = CH[day-1];

  // ── Background ──────────────────────────────────────────────
  const bgGrad = x.createLinearGradient(0,0,0,1080);
  bgGrad.addColorStop(0,"#081A10"); bgGrad.addColorStop(0.5,"#0D2318"); bgGrad.addColorStop(1,"#061410");
  x.fillStyle=bgGrad; x.fillRect(0,0,1080,1080);

  // Subtle radial glow top-right
  const glow=x.createRadialGradient(1080,0,0,1080,0,700);
  glow.addColorStop(0,"rgba(64,145,108,0.18)"); glow.addColorStop(1,"rgba(64,145,108,0)");
  x.fillStyle=glow; x.fillRect(0,0,1080,1080);

  // Fine dot grid texture
  x.fillStyle="rgba(64,145,108,0.08)";
  for(let gx=40;gx<1080;gx+=54) for(let gy=40;gy<1080;gy+=54){x.beginPath();x.arc(gx,gy,1.5,0,Math.PI*2);x.fill();}

  // ── Gold top bar ────────────────────────────────────────────
  const topBar=x.createLinearGradient(0,0,1080,0);
  topBar.addColorStop(0,"#C9A227"); topBar.addColorStop(0.5,"#E8C84A"); topBar.addColorStop(1,"#C9A227");
  x.fillStyle=topBar; x.fillRect(0,0,1080,6);

  // ── Brand header ────────────────────────────────────────────
  x.textAlign="center";
  x.fillStyle="rgba(201,162,39,0.55)"; x.font="500 26px 'Arial',sans-serif";
  x.fillText("☘  GAELTACHT CONNECT  ☘",540,68);

  // ── Day pill ────────────────────────────────────────────────
  // Pill background
  const pillX=340, pillY=110, pillW=400, pillH=160, pillR=24;
  x.fillStyle="rgba(45,106,79,0.35)";
  x.beginPath(); x.roundRect(pillX,pillY,pillW,pillH,pillR); x.fill();
  x.strokeStyle="rgba(201,162,39,0.4)"; x.lineWidth=1.5;
  x.beginPath(); x.roundRect(pillX,pillY,pillW,pillH,pillR); x.stroke();

  // "Lá" text
  x.fillStyle="#FFFFFF"; x.font="bold 90px Georgia,serif"; x.textAlign="center";
  x.fillText(`Lá ${day}`,540,218);

  // "of 30" subtitle
  x.fillStyle="rgba(201,162,39,0.75)"; x.font="500 30px 'Arial',sans-serif"; x.textAlign="center";
  x.fillText(`as a ${total} lá déanta  ·  ${total} of ${CH.length} done`,540,298);

  // ── Decorative divider ──────────────────────────────────────
  x.strokeStyle="rgba(201,162,39,0.22)"; x.lineWidth=1;
  x.beginPath(); x.moveTo(120,340); x.lineTo(960,340); x.stroke();
  // Center shamrock on divider
  x.fillStyle="rgba(201,162,39,0.4)"; x.font="22px sans-serif"; x.textAlign="center";
  x.fillText("☘",540,347);

  // ── Irish phrase box ────────────────────────────────────────
  const boxX=80, boxY=370, boxW=920, boxH=300;
  const boxGrad=x.createLinearGradient(boxX,boxY,boxX,boxY+boxH);
  boxGrad.addColorStop(0,"rgba(45,106,79,0.22)"); boxGrad.addColorStop(1,"rgba(45,106,79,0.06)");
  x.fillStyle=boxGrad;
  x.beginPath(); x.roundRect(boxX,boxY,boxW,boxH,20); x.fill();
  x.strokeStyle="rgba(201,162,39,0.25)"; x.lineWidth=1.5;
  x.beginPath(); x.roundRect(boxX,boxY,boxW,boxH,20); x.stroke();
  // Gold left accent
  x.fillStyle="rgba(201,162,39,0.7)"; x.fillRect(boxX,boxY+20,4,boxH-40);

  // Word-wrap Irish phrase — max 2 lines inside box
  x.fillStyle="#C9A227"; x.font="italic bold 58px Georgia,serif"; x.textAlign="center";
  const phWords=ch.p.split(" "); let phLine1="", phLine2="", phMaxW=800;
  for(const w of phWords){
    const t=phLine1?phLine1+" "+w:w;
    if(x.measureText(t).width>phMaxW&&phLine1){phLine2=phLine2?phLine2+" "+w:w;}
    else phLine1=t;
  }
  if(phLine2){
    x.fillText(phLine1,540,460);
    x.fillText(phLine2,540,530);
  } else {
    x.fillText(phLine1,540,500);
  }

  // English meaning — fixed position below phrase box, always visible
  x.fillStyle="rgba(232,228,216,0.72)"; x.font="400 34px 'Arial',sans-serif"; x.textAlign="center";
  const meaning = ch.m.length>60 ? ch.m.slice(0,57)+"…" : ch.m;
  x.fillText(`"${meaning}"`,540,690);

  // ── Stats row ───────────────────────────────────────────────
  // Day progress pill
  const p1x=200, p1y=740, p1w=240, p1h=72;
  x.fillStyle="rgba(64,145,108,0.2)";
  x.beginPath(); x.roundRect(p1x,p1y,p1w,p1h,14); x.fill();
  x.strokeStyle="rgba(64,145,108,0.4)"; x.lineWidth=1;
  x.beginPath(); x.roundRect(p1x,p1y,p1w,p1h,14); x.stroke();
  x.fillStyle="#6FCF97"; x.font="bold 32px 'Arial',sans-serif"; x.textAlign="center";
  x.fillText(`📅 Lá ${day}/${CH.length}`,p1x+p1w/2,p1y+47);

  // Streak pill (always show, even streak=1)
  const p2x=640, p2y=740, p2w=240, p2h=72;
  x.fillStyle="rgba(201,162,39,0.15)";
  x.beginPath(); x.roundRect(p2x,p2y,p2w,p2h,14); x.fill();
  x.strokeStyle="rgba(201,162,39,0.35)"; x.lineWidth=1;
  x.beginPath(); x.roundRect(p2x,p2y,p2w,p2h,14); x.stroke();
  x.fillStyle="#C9A227"; x.font="bold 32px 'Arial',sans-serif"; x.textAlign="center";
  x.fillText(`🔥 ${streak} lá`,p2x+p2w/2,p2y+47);

  // ── Motivational text ───────────────────────────────────────
  x.fillStyle="rgba(111,207,151,0.65)"; x.font="italic 30px Georgia,serif"; x.textAlign="center";
  const pct=Math.round((day/CH.length)*100);
  x.fillText(`${pct}% of the challenge complete — keep going!`,540,860);

  // ── Bottom divider ──────────────────────────────────────────
  x.strokeStyle="rgba(201,162,39,0.15)"; x.lineWidth=1;
  x.beginPath(); x.moveTo(120,900); x.lineTo(960,900); x.stroke();

  // ── Hashtags ────────────────────────────────────────────────
  x.fillStyle="rgba(64,145,108,0.5)"; x.font="24px 'Arial',sans-serif"; x.textAlign="center";
  x.fillText("#GaeltachtConnect  ·  #Gaeilge  ·  #IrishLanguage",540,950);

  // ── Gold bottom bar ─────────────────────────────────────────
  const botBar=x.createLinearGradient(0,0,1080,0);
  botBar.addColorStop(0,"#C9A227"); botBar.addColorStop(0.5,"#E8C84A"); botBar.addColorStop(1,"#C9A227");
  x.fillStyle=botBar; x.fillRect(0,1074,1080,6);

  return cv.toDataURL("image/png");
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

// ── Irish TTS via abair.ie + IndexedDB offline cache ────────
const _audioCache = new Map(); // text → object URL (session)
let _currentAudio = null;
let _idb = null; // IndexedDB connection


function _openIDB() {
  if (_idb) return Promise.resolve(_idb);
  return new Promise((res, rej) => {
    const req = indexedDB.open("gc-audio-2", 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore("tts");
    req.onsuccess = e => { _idb = e.target.result; res(_idb); };
    req.onerror = () => rej();
  });
}

async function _idbGet(key) {
  try {
    const db = await _openIDB();
    return new Promise(res => {
      const tx = db.transaction("tts", "readonly");
      const req = tx.objectStore("tts").get(key);
      req.onsuccess = () => res(req.result || null);
      req.onerror = () => res(null);
    });
  } catch { return null; }
}

async function _idbPut(key, blob) {
  try {
    const db = await _openIDB();
    return new Promise(res => {
      const tx = db.transaction("tts", "readwrite");
      tx.objectStore("tts").put(blob, key);
      tx.oncomplete = res; tx.onerror = res;
    });
  } catch {}
}

async function _fetchAndCacheAudio(text) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 9000);
  try {
    const r = await fetch(
      `https://www.abair.ie/api2/synthesise?input=${encodeURIComponent(text)}&voice=ga_CO_pmg_nnmnkwii&audioEncoding=MP3`,
      { signal: ctrl.signal }
    );
    if (!r.ok) throw new Error();
    const d = await r.json();
    if (!d.audioContent) throw new Error();
    const bytes = Uint8Array.from(atob(d.audioContent), c => c.charCodeAt(0));
    const blob = new Blob([bytes], { type: 'audio/mpeg' });
    await _idbPut(text, blob);
    return blob;
  } finally {
    clearTimeout(timer);
  }
}

// Pre-load voices so getVoices() isn't empty on first speakIrish() call
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => { window.speechSynthesis.getVoices(); });
}

function _bestSpeechVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  return (
    voices.find(v => v.lang === 'ga-IE') ||
    voices.find(v => v.lang === 'ga') ||
    voices.find(v => v.lang === 'en-IE') ||
    voices.find(v => v.lang === 'en-GB') ||
    voices.find(v => v.lang?.startsWith('en')) ||
    null
  );
}

async function speakIrish(text) {
  if (_currentAudio) { _currentAudio.pause(); _currentAudio.src=''; _currentAudio=null; }

  // 1. Session memory cache (instant)
  if (_audioCache.has(text)) {
    _currentAudio = new Audio(_audioCache.get(text));
    _currentAudio.play().catch(()=>{});
    return "ok";
  }

  // 2. abair.ie Connacht neural TTS (best quality, works if domain is whitelisted)
  try {
    let blob = await _idbGet(text);
    if (!blob) blob = await _fetchAndCacheAudio(text);
    const url = URL.createObjectURL(blob);
    _audioCache.set(text, url);
    _currentAudio = new Audio(url);
    _currentAudio.play().catch(()=>{});
    return "ok";
  } catch {}

  // 3. Google Translate TTS for Irish (ga)
  // Audio() elements load cross-origin media without CORS restrictions
  try {
    const gtUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text.slice(0,200))}&tl=ga&client=gtx&ttsspeed=0.75`;
    await new Promise((resolve, reject) => {
      const a = new Audio(gtUrl);
      const t = setTimeout(() => reject(new Error('timeout')), 6000);
      a.onplaying = () => { clearTimeout(t); _currentAudio = a; resolve(); };
      a.onerror = () => { clearTimeout(t); reject(); };
      a.play().catch(reject);
    });
    return "ok";
  } catch {}

  // 4. Web Speech API — prefer Irish voice, fall back to any voice
  if (window.speechSynthesis) {
    let voices = window.speechSynthesis.getVoices();
    if (!voices.length) {
      await new Promise(resolve => {
        window.speechSynthesis.addEventListener('voiceschanged', resolve, {once:true});
        setTimeout(resolve, 600);
      });
      voices = window.speechSynthesis.getVoices();
    }
    const irishVoice = voices.find(v=>v.lang==='ga-IE') || voices.find(v=>v.lang==='ga');
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ga-IE';
    u.rate = 0.82;
    if (irishVoice) u.voice = irishVoice;
    window.speechSynthesis.speak(u);
    return irishVoice ? "ok" : "ok-accent";
  }

  return "no-voice";
}

// Pre-warm audio cache for all 30 day phrases in the background
async function _prewarmAudio() {
  const CONCURRENCY = 3;
  const phrases = CH.map(c=>c.p);
  let i = 0;
  async function worker() {
    while (i < phrases.length) {
      const text = phrases[i++];
      try {
        const cached = await _idbGet(text);
        if (!cached) await _fetchAndCacheAudio(text);
      } catch {} // silent — best effort
      await new Promise(r => setTimeout(r, 400)); // throttle
    }
  }
  await Promise.allSettled(Array.from({length:CONCURRENCY}, worker));
}

// Kick off pre-warm after a short delay so it doesn't block first paint
setTimeout(_prewarmAudio, 8000);

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

// ── Irish history facts ──────────────────────────────────────
const HISTORY_FACTS=[
  "In 1916, Patrick Pearse read the Proclamation of Independence outside the GPO in both Irish and English. He chose to begin in Irish — a deliberate act. Every word was planned.",
  "The Irish word 'craic' has no English equivalent. It means fun, news, lively conversation, and the feeling of a great evening — all at once. It entered English dictionaries in 1985.",
  "The Blasket Islands were abandoned in 1953. The last 22 inhabitants were evacuated to the mainland. Their Irish was considered the purest spoken anywhere. Linguists rushed to record everything before it disappeared.",
  "Douglas Hyde founded the Gaelic League in 1893. Within a decade, 600 branches were teaching Irish to adults — for free, in the evenings, after work. Michael Collins and Patrick Pearse were both members.",
  "The Book of Kells was created around 800 AD by Irish monks on the island of Iona. It contains secret illuminations scholars are still decoding after 1,200 years.",
  "During the Famine (1845–1852), Ireland continued to export food to Britain. Landlords shipped grain while a million people starved. The Irish phrase 'ocras i measc an fhlúirse' — hunger amid plenty.",
  "Newgrange in County Meath is 5,200 years old — older than Stonehenge, older than the Egyptian pyramids. On the winter solstice, sunlight enters the chamber for exactly 17 minutes. Its builders had no written language. They used stone.",
  "Peig Sayers was born in Kerry in 1873 and never learned to read or write. She dictated her life story to her son. It became one of the most important books ever written in the Irish language.",
  "In 1831, the British introduced the National Schools system. Irish was banned from classrooms. Within 50 years, the number of Irish speakers fell from 4 million to under 1 million.",
  "The word 'boycott' comes from an Irishman. Captain Charles Boycott, a land agent in Mayo, was ostracised by his community in 1880. His name entered the English language as a verb.",
  "The Claddagh ring was made in Galway in the 17th century by Richard Joyce — a goldsmith who'd been held captive by Algerian pirates for years. When he finally came home, he made the ring.",
  "Máirtín Ó Cadhain wrote his masterpiece 'Cré na Cille' while interned by the Irish government during WWII. He was a Connemara schoolteacher. The book is considered the greatest Irish-language novel ever written.",
  "In 1607, the last Gaelic chieftains — the Earl of Tyrone and the Earl of Tyrconnell — sailed from Lough Swilly in Donegal and never returned. Historians call it the end of Gaelic Ireland. The Irish call it Imeacht na nIarlaí.",
  "The Ogham alphabet dates to the 4th century. It is carved along the edges of standing stones — 400 still exist in Ireland. Each stone is a message from someone who lived 1,600 years ago. Some are still unread.",
  "Irish monks spread Christianity across Europe in the 6th and 7th centuries. They founded monasteries in France, Germany, Italy, and Switzerland — and brought the Irish language with them.",
  "The word 'slogan' comes from Irish. 'Sluagh-ghairm' — army cry. Every advertising slogan is a distant echo of an Irish war cry.",
  "Brehon Law — the ancient Irish legal system — had no prisons. It was based on compensation and community responsibility. Women had legal rights in Brehon Law centuries before English law acknowledged them.",
  "Samuel Beckett wrote 'Waiting for Godot' in French first, then translated it to English himself. He said writing in a foreign language freed him from 'the temptation of style.' The Irish solution: use a different language.",
  "In 1922, when the Irish Free State was founded, the constitution was written in Irish first, English second. Irish became the first official language. It still is.",
  "Raidió na Gaeltachta launched in 1972 — the first radio station to broadcast entirely in Irish since the language was suppressed. Today it has over 400,000 listeners.",
  "The Aran Islands (Oileáin Árann) off Galway are entirely Irish-speaking. J.M. Synge visited in 1898 on the advice of W.B. Yeats, who told him: 'Go live among the people.' He wrote 'The Playboy of the Western World' from what he heard there.",
  "St. Brigid's Day (February 1st) marks the start of spring in the Irish calendar. Brigid was a goddess long before she was a saint. The Brigid's cross was woven on that day long before Christianity arrived in Ireland.",
  "The Wild Atlantic Way stretches 2,500 km along Ireland's west coast — the longest defined coastal route in the world. Almost all of it passes through Irish-speaking areas.",
  "The Irish language has no single word for 'yes' or 'no'. Questions are answered by repeating the verb. It isn't a gap in the language — it's a different philosophy of truth.",
  "Nuala Ní Dhomhnaill is Ireland's greatest living Irish-language poet. She writes exclusively in Irish despite being offered vast audiences in English. 'Some things can only be said in Irish,' she says.",
  "The Connemara pony has been bred on Ireland's west coast for over 2,500 years. It is the only horse breed native to Ireland. The Celts brought its ancestors here before Julius Caesar was born.",
  "TG4, Ireland's Irish-language television channel, launched in 1996 with almost no budget. Today it produces award-winning drama, documentary, and sport — watched by millions.",
  "Seamus Heaney won the Nobel Prize for Literature in 1995. His acceptance speech referenced the ancient Irish tradition of poetry as a social force. 'The poet is the one who connects the living and the dead.'",
  "'Amhrán na bhFiann' — the Irish national anthem — was written by Peadar Kearney in a single night in a Dublin pub in 1907. He sold the rights for one pound.",
  "The Irish diaspora is the largest in proportion to homeland population of any country in the world. 70 million people claim Irish ancestry. Ireland's home population: 5 million.",
  "The Giant's Causeway in Antrim was formed 60 million years ago. Its Irish name is Clochán an Aifir — the stepping stones of the giant. Every rock has a name in Irish.",
  "In 1366, the English Parliament passed the Statutes of Kilkenny — banning English settlers from speaking Irish. A century later, Elizabeth I ordered the execution of Irish harpers specifically, because they were the keepers of memory.",
  "The word 'whiskey' comes from the Irish 'uisce beatha' — water of life. Irish monks first distilled it. The Scots later spelled it 'whisky'. Ireland gave the world its most beloved spirit.",
  "Croagh Patrick in Mayo has been a pilgrimage site for over 5,000 years — long before St. Patrick climbed it in 441 AD. Each year, 30,000 people still climb it barefoot. In Irish, mountains have always been sacred.",
  "The Irish language preserves words that have no equivalent anywhere else. 'Meitheal' — neighbours gathering to help each other with a task, no money involved. 'Caoineadh' — a ritual cry of grief. 'Tuiscint' — understanding that comes from the heart, not the head.",
];

function getHistoryFact(date){return HISTORY_FACTS[getDayOfYear(date)%HISTORY_FACTS.length];}

// ── Melody synthesizer (Celtic harp + tin whistle via Web Audio) ──
// Notes: [frequency_hz, duration_beats] — D major pentatonic at ~♩=160
function haptic(pattern=[10]){_unlockAudio();try{navigator.vibrate&&navigator.vibrate(pattern);}catch{}}

// ── Ceol audio player (WAV files) ────────────────────────────────────────────
let _ceolAudio=null;
function stopMelody(){
  if(_ceolAudio){_ceolAudio.pause();_ceolAudio.currentTime=0;_ceolAudio=null;}
}
function playMelody(songId,onEnd){
  stopMelody();
  const audio=new Audio(`/audio/ceol/${songId}.wav`);
  _ceolAudio=audio;
  audio.volume=0.82;
  audio.play().catch(()=>{});
  audio.onended=()=>{_ceolAudio=null;if(onEnd)onEnd();};
  audio.onerror=()=>{_ceolAudio=null;if(onEnd)onEnd();};
}

// ── Irish Songs ──────────────────────────────────────────────
const SONGS=[
  {id:"oro",title:"Óró Sé Do Bheatha Bhaile",en:"Welcome Home",era:"16th C · Rebel",emoji:"⚔️",color:"#8A1A1A",
    story:"Written for Gráinne Mhaol — Grace O'Malley — the pirate queen of Connacht who commanded 200 men and negotiated face-to-face with Queen Elizabeth I in 1593. This song was a call to arms. Patrick Pearse revived it for the 1916 Rising, changing 'Gráinne Mhaol' to 'Éire' — Ireland herself coming home.",
    irish:"Óró, sé do bheatha bhaile\nÓró, sé do bheatha bhaile\nAnois ar theacht an tsamhraidh",
    translation:"Óró, welcome home / Now that summer is coming",
    lesson:"'Sé do bheatha' = it is your life = welcome. One of the most powerful greetings in Irish.",
    yt:"Óró+Sé+Do+Bheatha+Bhaile+Wolfe+Tones"},
  {id:"fields",title:"The Fields of Athenry",en:"The Fields of Athenry",era:"1979 · Famine",emoji:"🌾",color:"#2D6A4F",
    story:"Written in 1979, set during the Great Famine of 1847. Michael steals corn to feed his starving family and is transported to Australia. Now the unofficial anthem of Irish sport — sung by 80,000 at Croke Park. The melody sounds ancient. It isn't. It only needed to sound true.",
    irish:"By a lonely prison wall\nI heard a young girl calling\nMichael they have taken you away\nFor you stole Trevelyn's corn\nSo the young might see the morn",
    translation:"A Famine love song set outside Athenry, County Galway",
    lesson:"Athenry = Áth na Rí = Ford of the Kings. Every Irish town name tells a story.",
    yt:"Fields+of+Athenry+Paddy+Reilly"},
  {id:"parting",title:"The Parting Glass",en:"The Parting Glass",era:"18th C · Farewell",emoji:"🥂",color:"#1A4A8A",
    story:"The traditional Irish farewell song, sung at the end of an evening or at a wake. Seven million people emigrated between 1845 and 1900 — most heard this song as their last memory of home. When Ed Sheeran performed it at a concert, he admitted he could barely get through it.",
    irish:"Of all the money that e'er I had\nI spent it in good company\nAnd all the harm that e'er I've done\nAlas it was to none but me",
    translation:"(Originally in English — the melody is ancient Irish)",
    lesson:"'Slán go fóill' — the words whispered as the glass is drained. You already know this one.",
    yt:"The+Parting+Glass+Luke+Kelly"},
  {id:"danny",title:"Danny Boy",en:"Danny Boy",era:"1913 · Longing",emoji:"🏔️",color:"#5A3A8A",
    story:"The melody — 'Londonderry Air' — is ancient Irish; nobody knows who wrote it or when. The English lyrics were added in 1913. It has been recorded more than almost any other song. Judy Garland sang it. Johnny Cash sang it. It was played at JFK's funeral. The Irish themselves rarely sing it — they know it too well.",
    irish:"Oh Danny boy, the pipes, the pipes are calling\nFrom glen to glen, and down the mountain side\nThe summer's gone, and all the roses falling\n'Tis you, 'tis you must go and I must bide",
    translation:"(English lyrics on an ancient Irish melody — the landscape is Donegal)",
    lesson:"'Glen' = gleann in Irish. The landscape in this song is the most Irish-speaking county.",
    yt:"Danny+Boy+Celtic+Woman"},
  {id:"raglan",title:"Raglan Road",en:"On Raglan Road",era:"1946 · Poetry",emoji:"🍂",color:"#8A6A1A",
    story:"Patrick Kavanagh wrote this poem about a woman he loved and lost. He gave it to Luke Kelly, who set it to the ancient air 'The Dawning of the Day'. Kavanagh said hearing Kelly sing it was 'the best thing that ever happened to my poem'. Kelly died at 43. Kavanagh at 63. The road is still there, in Dublin 4.",
    irish:"On Raglan Road on an autumn day I met her first and knew\nThat her dark hair would weave a snare that I might one day rue\nI saw the danger, yet I walked along the enchanted way\nAnd I said, let grief be a fallen leaf at the dawning of the day",
    translation:"(Kavanagh wrote in English — his Irish was the landscape of Monaghan)",
    lesson:"The air 'Fáinne Geal an Lae' (The Bright Ring of Day) is over 200 years old. The words are 80.",
    yt:"Raglan+Road+Luke+Kelly"},
  {id:"grace",title:"Grace",en:"Grace",era:"1985 · 1916",emoji:"🕯️",color:"#1A1A3A",
    story:"Joseph Plunkett, a leader of the 1916 Rising, married Grace Gifford in his prison cell at 2am on the morning of his execution. They had ten minutes together. He was shot at dawn. Grace outlived him by 34 years and never remarried.",
    irish:"As Loch Garman's hills I leave behind\nAnd the Lagan plains so green\nI remember all the happy times\nAnd the days that once had been",
    translation:"A love song and a history lesson dressed as each other",
    lesson:"Plunkett's poem 'I See His Blood Upon the Rose' — written the night before — is one of the most famous in Irish literature.",
    yt:"Grace+1916+Wolfe+Tones"},
  {id:"molly",title:"Molly Malone",en:"Cockles and Mussels",era:"1883 · Dublin",emoji:"🐚",color:"#C2541A",
    story:"Dublin's unofficial anthem — a fishmonger who died of fever and now wheels her barrow through the streets as a ghost. Her statue stands at the bottom of Grafton Street. Dubliners call it 'the tart with the cart'. Molly may be entirely fictional — but she is more real to Dublin than most real people.",
    irish:"In Dublin's fair city\nWhere the girls are so pretty\nI first set my eyes on sweet Molly Malone\nAs she wheeled her wheelbarrow\nThrough streets broad and narrow\nCrying cockles and mussels, alive, alive oh!",
    translation:"(Dublin = Baile Átha Cliath = town of the ford of the hurdles)",
    lesson:"'Alive, alive oh' = beo beo! The last words are pure Irish, smuggled into an English song.",
    yt:"Molly+Malone+Dublin+traditional"},
  {id:"whiskey",title:"Whiskey in the Jar",en:"Whiskey in the Jar",era:"17th C · Rogue",emoji:"🥃",color:"#8A4A1A",
    story:"One of the oldest Irish folk songs — a highwayman robs a captain, his lover betrays him, he ends up in prison. Thin Lizzy recorded it in 1972. Metallica in 1998. The melody has refused to die for 400 years. Some songs are just built different.",
    irish:"As I was going over the far-famed Kerry mountains\nI met with Captain Farrell and his money he was counting\nI first produced my pistol and then produced my rapier\nSaid 'Stand and deliver or the devil he may take ya'",
    translation:"(17th century Irish folk song in English — the melody is pure Munster)",
    lesson:"'Musha ring dum a doo dum a da' — the nonsense chorus. Even in Irish songs, joy needs no translation.",
    yt:"Whiskey+in+the+Jar+Thin+Lizzy"},
];

// ── Celtic Web Audio sound effects ──────────────────────────
// D major pentatonic — the most common scale in Irish traditional music
let _audioCtx=null;
function _unlockAudio(){
  try{
    if(!_audioCtx)_audioCtx=new(window.AudioContext||window.webkitAudioContext)();
    if(_audioCtx.state==='suspended')_audioCtx.resume().catch(()=>{});
  }catch{}
}
function _ctx(){
  if(!_audioCtx)_audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  if(_audioCtx.state==='suspended')_audioCtx.resume().catch(()=>{});
  return _audioCtx;
}
// Celtic harp: triangle wave + harmonics + fast pluck decay
function _harp(freq,delay=0,vol=0.28,dur=1.5){
  try{
    const c=_ctx(),t=c.currentTime+delay;
    [1,2,3].forEach((h,i)=>{
      const o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);
      o.frequency.value=freq*h;o.type='triangle';
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(vol/(i+1),t+0.008);
      g.gain.exponentialRampToValueAtTime(0.001,t+dur/(h*0.6));
      o.start(t);o.stop(t+dur);
    });
  }catch{}
}
// Tin whistle: sine wave + LFO vibrato
function _whistle(freq,dur,delay=0,vol=0.17){
  try{
    const c=_ctx(),t=c.currentTime+delay;
    const o=c.createOscillator(),g=c.createGain();
    const lfo=c.createOscillator(),lg=c.createGain();
    lfo.frequency.value=5.5;lg.gain.value=5;
    lfo.connect(lg);lg.connect(o.frequency);
    o.connect(g);g.connect(c.destination);
    o.frequency.value=freq;o.type='sine';
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(vol,t+0.06);
    g.gain.setValueAtTime(vol,t+Math.max(dur-0.07,0.05));
    g.gain.exponentialRampToValueAtTime(0.001,t+dur);
    lfo.start(t);o.start(t);lfo.stop(t+dur+0.1);o.stop(t+dur+0.1);
  }catch{}
}
function playSound(type){
  try{
    const c=_ctx();
    const P=[293.66,369.99,440,493.88,587.33];
    if(type==='complete'){P.forEach((f,i)=>_harp(f,i*0.11,0.26,1.6));}
    else if(type==='correct'){_whistle(P[1],0.28,0,0.16);_whistle(P[3],0.38,0.24,0.16);}
    else if(type==='wrong'){_harp(P[0]*0.5,0,0.22,0.55);}
    else if(type==='bonus'){P.forEach((f,i)=>_harp(f,i*0.07,0.24,1.4));_harp(P[0]*2,0.44,0.18,1.2);}
    else if(type==='open'){_harp(P[2],0,0.16,1.3);}
  }catch{}
}

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

// Seeded daily vocab quiz — same 5 questions for everyone on the same day
function seedRand(seed){let s=seed|0;return()=>{s=(Math.imul(1664525,s)+1013904223)|0;return(s>>>0)/0xffffffff};}
function getDailyVocabQuiz(vocab,date){
  const rand=seedRand(getDayOfYear(date)*31+date.getFullYear());
  const pool=[...vocab].sort(()=>rand()-0.5).slice(0,5);
  return pool.map(word=>{
    const others=vocab.filter(w=>w.m!==word.m).sort(()=>rand()-0.5).slice(0,3);
    const opts=[...others.map(w=>w.m),word.m].sort(()=>rand()-0.5);
    return{phrase:word.p,answer:word.m,opts,pr:word.pr};
  });
}

const COUNTIES=[
  {en:"Antrim",ga:"Aontroim",pr:"AYN-trim",g:false},
  {en:"Armagh",ga:"Ard Mhacha",pr:"ard WAH-ha",g:false},
  {en:"Carlow",ga:"Ceatharlach",pr:"KAH-her-lakh",g:false},
  {en:"Cavan",ga:"An Cabhán",pr:"un KOW-awn",g:false},
  {en:"Clare",ga:"An Clár",pr:"un klar",g:false},
  {en:"Cork",ga:"Corcaigh",pr:"KUR-kee",g:true},
  {en:"Derry",ga:"Doire",pr:"DIR-eh",g:true},
  {en:"Donegal",ga:"Dún na nGall",pr:"doon nuh nawl",g:true},
  {en:"Down",ga:"An Dún",pr:"un doon",g:false},
  {en:"Dublin",ga:"Baile Átha Cliath",pr:"BLAH-klee-uh",g:false},
  {en:"Fermanagh",ga:"Fear Manach",pr:"far MAN-ukh",g:false},
  {en:"Galway",ga:"Gaillimh",pr:"GAL-iv",g:true},
  {en:"Kerry",ga:"Ciarraí",pr:"KEER-ee",g:true},
  {en:"Kildare",ga:"Cill Dara",pr:"kill DAR-uh",g:false},
  {en:"Kilkenny",ga:"Cill Chainnigh",pr:"kill KHAN-ee",g:false},
  {en:"Laois",ga:"Laois",pr:"leesh",g:false},
  {en:"Leitrim",ga:"Liatroim",pr:"LEE-trim",g:false},
  {en:"Limerick",ga:"Luimneach",pr:"LIM-nyukh",g:false},
  {en:"Longford",ga:"An Longfort",pr:"un LONG-fort",g:false},
  {en:"Louth",ga:"Lú",pr:"loo",g:false},
  {en:"Mayo",ga:"Maigh Eo",pr:"my OH",g:true},
  {en:"Meath",ga:"An Mhí",pr:"un vee",g:true},
  {en:"Monaghan",ga:"Muineachán",pr:"MUN-uh-khawn",g:false},
  {en:"Offaly",ga:"Uíbh Fhailí",pr:"EEV AL-ee",g:false},
  {en:"Roscommon",ga:"Ros Comáin",pr:"ros KUH-mawn",g:false},
  {en:"Sligo",ga:"Sligeach",pr:"SLIG-ukh",g:false},
  {en:"Tipperary",ga:"Tiobraid Árann",pr:"TIB-rid AW-run",g:false},
  {en:"Tyrone",ga:"Tír Eoghain",pr:"cheer OH-win",g:false},
  {en:"Waterford",ga:"Port Láirge",pr:"port LAR-geh",g:true},
  {en:"Westmeath",ga:"An Iarmhí",pr:"un EER-vee",g:false},
  {en:"Wexford",ga:"Loch Garman",pr:"lokh GAR-mun",g:false},
  {en:"Wicklow",ga:"Cill Mhantáin",pr:"kill WAN-tawn",g:false},
];

// IrishTip — inline English translation, no interactive elements
const IrishTip = ({en}) => (
    <span style={{
      fontSize:"0.68rem",color:"rgba(200,150,62,0.65)",
      fontStyle:"italic",marginLeft:7,verticalAlign:"middle",
      fontFamily:"'Lato',system-ui,sans-serif",fontWeight:400,
      letterSpacing:"0.01em",lineHeight:1,
      pointerEvents:"none",userSelect:"none",
    }}>{en}</span>
);

// Generate a share card image via Canvas
async function generateShareCard({score, total, label, streak, phrase, meaning}) {
  const W=540, H=540;
  const canvas=document.createElement('canvas');
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext('2d');

  // Background
  const bg=ctx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,'#061210'); bg.addColorStop(1,'#0F2A1C');
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

  // Subtle grid texture
  ctx.strokeStyle='rgba(200,150,62,0.04)'; ctx.lineWidth=1;
  for(let x=0;x<W;x+=36){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=36){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

  // Gold top bar
  const barGrad=ctx.createLinearGradient(0,0,W,0);
  barGrad.addColorStop(0,'transparent'); barGrad.addColorStop(0.5,'#C8963E'); barGrad.addColorStop(1,'transparent');
  ctx.fillStyle=barGrad; ctx.fillRect(0,0,W,3);

  // Shamrock + branding
  ctx.textAlign='center';
  ctx.font='32px serif'; ctx.fillText('☘️',W/2,52);
  ctx.font='bold 15px sans-serif'; ctx.fillStyle='rgba(200,150,62,0.65)';
  ctx.letterSpacing='3px'; ctx.fillText('GAELTACHT CONNECT',W/2,76);

  // Score — big
  const pct=score/total;
  const scoreColor=pct>=0.9?'#C8963E':pct>=0.7?'#6FCF97':'rgba(240,237,228,0.85)';
  ctx.font='bold 130px Georgia,serif'; ctx.fillStyle=scoreColor;
  ctx.shadowColor=scoreColor; ctx.shadowBlur=pct>=0.9?40:0;
  ctx.fillText(`${score}/${total}`,W/2,220);
  ctx.shadowBlur=0;

  // Label
  ctx.font='bold 22px sans-serif'; ctx.fillStyle='rgba(240,237,228,0.55)';
  ctx.fillText(label,W/2,262);

  // Streak
  if(streak>=1){
    ctx.font='bold 20px sans-serif'; ctx.fillStyle='#FF7A00';
    ctx.fillText(`🔥 ${streak} day streak`,W/2,298);
  }

  // Divider
  const div=ctx.createLinearGradient(0,0,W,0);
  div.addColorStop(0,'transparent'); div.addColorStop(0.5,'rgba(200,150,62,0.4)'); div.addColorStop(1,'transparent');
  ctx.fillStyle=div; ctx.fillRect(60,streak>=1?322:308,W-120,1);

  // Irish phrase
  const phraseY=streak>=1?360:346;
  ctx.font='italic bold 36px Georgia,serif'; ctx.fillStyle='#C8963E';
  ctx.fillText(phrase,W/2,phraseY);
  ctx.font='18px sans-serif'; ctx.fillStyle='rgba(200,150,62,0.5)';
  ctx.fillText(meaning,W/2,phraseY+32);

  // Bottom
  ctx.font='13px sans-serif'; ctx.fillStyle='rgba(200,150,62,0.3)';
  ctx.fillText('An Ghaeilge Bheo · The Living Irish',W/2,H-18);
  ctx.fillStyle=barGrad; ctx.fillRect(0,H-3,W,3);

  return new Promise(resolve=>canvas.toBlob(resolve,'image/png',0.95));
}

// FlashTimer — counts down seconds, calls onTick and onExpire
const FlashTimer = ({seconds, onTick, onExpire}) => {
  useEffect(()=>{
    let t=seconds;
    onTick(t);
    const id=setInterval(()=>{
      t--;
      if(t<=0){clearInterval(id);onExpire();}
      else onTick(t);
    },1000);
    return()=>clearInterval(id);
  },[]);
  return null;
};

// Back button — shared across all secondary views
const BackBtn = ({onClick,c,bd,label="← Ar ais"}) => (
  <button onClick={onClick} style={{
    display:"flex",alignItems:"center",gap:6,
    background:c.card,border:`1px solid ${c.bd}`,
    borderRadius:10,padding:"8px 14px",cursor:"pointer",
    color:c.tx,...bd,fontSize:"0.85rem",fontWeight:600,
  }}>{label}</button>
);

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

// Celebration proverbs — cycle by day number
const CELEB_PROV = [
  {ga:"Mol an óige agus tiocfaidh sí",en:"Praise the young and they will flourish"},
  {ga:"Is fearr Gaeilge briste ná Béarla cliste",en:"Broken Irish beats clever English"},
  {ga:"Giorraíonn beirt bóthar",en:"Two people shorten a road"},
  {ga:"Maireann croí éadrom i bhfad",en:"A light heart lives long"},
  {ga:"Ní neart go cur le chéile",en:"No strength without unity"},
  {ga:"An rud is annamh is iontach",en:"What is rare is wonderful"},
];

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

// ── Guide view static data — module-level so they're not recreated on render ──
const GUIDE_VOWELS=[
  {spell:"a",sound:"ah",ex:"cat → KAT",note:"Short, like 'cat'"},
  {spell:"á",sound:"aw",ex:"grá → GRAW",note:"Long — love, held longer"},
  {spell:"e",sound:"eh",ex:"te → TEH",note:"Short, like 'bed'"},
  {spell:"é",sound:"ay",ex:"mé → MAY",note:"Long — I/me"},
  {spell:"i",sound:"ih",ex:"inis → IN-ish",note:"Short, like 'bit'"},
  {spell:"í",sound:"ee",ex:"síoga → SHEE-ga",note:"Long — fairies"},
  {spell:"o",sound:"uh/oh",ex:"obair → UB-ir",note:"Short, often reduced"},
  {spell:"ó",sound:"oh",ex:"mór → MOHR",note:"Long — big/great"},
  {spell:"u",sound:"uh",ex:"dul → DUL",note:"Short, like 'put'"},
  {spell:"ú",sound:"oo",ex:"cúig → KOO-ig",note:"Long — five"},
];
const GUIDE_COMBOS=[
  {spell:"bh / mh",sound:"v (w before á,ó,ú)",ex:"bhean → VAN · mhór → WOHR",note:"Most common surprise for English speakers"},
  {spell:"ch",sound:"kh — like Scottish loch",ex:"ach → AKH · Chlann → KHLAN",note:"Never like English 'church'"},
  {spell:"dh / gh (slender)",sound:"y",ex:"dhia → YEE-a · gheal → YAL",note:"Before e or i — soft y sound"},
  {spell:"dh / gh (broad)",sound:"silent or γ",ex:"fadhb → FAYV · adh → AH",note:"Before a, o, u — often silent"},
  {spell:"fh",sound:"silent",ex:"fhios → IS · fhuair → OO-ir",note:"Always silent — the most invisible letter"},
  {spell:"ph",sound:"f",ex:"pháirc → FAWRK",note:"Like Greek phi — always f"},
  {spell:"sh / th",sound:"h",ex:"shín → HEEN · thú → HOO",note:"Both give a simple h sound"},
  {spell:"-igh / -aidh / -idh",sound:"ee (or silent)",ex:"saigh → SIE · óraigh → OH-ree",note:"Verb endings — the -gh is always silent"},
  {spell:"ll / nn",sound:"held longer",ex:"mall → MOWL · binn → BIN",note:"More emphatic than single l/n"},
  {spell:"ng",sound:"ng (as in 'sing')",ex:"long → LUNG · teanga → TYANG-ga",note:"Always the 'sing' ng, never 'finger'"},
];
const GUIDE_MUTATIONS=[
  {title:"Séimhiú · Lenition",sub:"Adds -h after the first consonant",color:"#2D6A4F",colorLight:"rgba(45,106,79,0.12)",
    rule:"Triggered by: mo, do, a (his), after ní, nach, ar, faoi, le, ó, thar",
    rows:[
      {before:"cara",after:"mo chara",before_pr:"KAH-ra",after_pr:"muh KHAR-a",note:"friend → my friend"},
      {before:"bean",after:"a bhean",before_pr:"BAN",after_pr:"a VAN",note:"woman → his woman (vocative)"},
      {before:"peann",after:"ní pheann",before_pr:"PYAN",after_pr:"nee FAN",note:"pen → not a pen"},
      {before:"tír",after:"ár dtír",before_pr:"CHEER",after_pr:"awr DJEER",note:"country → our country (eclipsis here)"},
    ]},
  {title:"Urú · Eclipsis",sub:"Adds a letter before the first consonant/vowel",color:"#1A3070",colorLight:"rgba(26,48,112,0.12)",
    rule:"b→mb · c→gc · d→nd · f→bhf · g→ng · p→bp · t→dt · vowels get n-",
    rows:[
      {before:"baile",after:"i mbaile",before_pr:"BAL-yeh",after_pr:"ih MAL-yeh",note:"home → at home"},
      {before:"carr",after:"sa gcarr",before_pr:"KAR",after_pr:"sa GAR",note:"car → in the car"},
      {before:"fear",after:"ár bhfear",before_pr:"FAR",after_pr:"awr VAR",note:"man → our man"},
      {before:"Éire",after:"in Éirinn",before_pr:"AY-reh",after_pr:"in AY-rin",note:"Ireland → in Ireland (n- on vowel)"},
    ]},
];
const GUIDE_PATTERNS=[
  {title:"Tá / Níl",sub:"To be · Not to be",icon:"🟢",color:"#2D6A4F",light:"rgba(45,106,79,0.1)",
    rows:[
      {irish:"Tá mé",pr:"taw may",en:"I am"},
      {irish:"Tá sé / sí",pr:"taw shay / shee",en:"He is / She is"},
      {irish:"Níl mé",pr:"neel may",en:"I am not"},
      {irish:"An bhfuil tú?",pr:"on WILL too",en:"Are you? (question)"},
      {irish:"Tá mé tuirseach",pr:"taw may TEER-shukh",en:"I am tired"},
    ]},
  {title:"Tá X agam",sub:"I have X — literally 'X is at me'",icon:"👋",color:"#1A3070",light:"rgba(26,48,112,0.1)",
    rows:[
      {irish:"Tá Gaeilge agam",pr:"taw GAYL-geh AH-gum",en:"I have Irish"},
      {irish:"Tá carr agam",pr:"taw KAR AH-gum",en:"I have a car"},
      {irish:"Níl airgead agam",pr:"neel AR-i-gyud AH-gum",en:"I have no money"},
      {irish:"An bhfuil am agat?",pr:"on will am AH-gut",en:"Do you have time?"},
    ]},
  {title:"Is maith liom",sub:"I like X — literally 'X is good with me'",icon:"❤️",color:"#6B0F1A",light:"rgba(107,15,26,0.1)",
    rows:[
      {irish:"Is maith liom caifé",pr:"iss mah lyum KAH-fay",en:"I like coffee"},
      {irish:"Ní maith liom an aimsir",pr:"nee mah lyum on AM-shir",en:"I don't like the weather"},
      {irish:"Is fearr liom tae",pr:"iss far lyum TAY",en:"I prefer tea"},
      {irish:"Is breá liom Éire",pr:"iss BRAW lyum AY-reh",en:"I love Ireland"},
    ]},
  {title:"Tá mé ag + ainm briathartha",sub:"I am doing X — verbal noun (no infinitive in Irish)",icon:"⚡",color:"#5A3A00",light:"rgba(90,58,0,0.1)",
    rows:[
      {irish:"Tá mé ag foghlaim",pr:"taw may egg FOW-lim",en:"I am learning"},
      {irish:"Tá mé ag obair",pr:"taw may egg UB-ir",en:"I am working"},
      {irish:"Tá mé ag caint",pr:"taw may egg KANT",en:"I am talking"},
      {irish:"Tá sí ag dul abhaile",pr:"taw shee egg DUL AW-il-eh",en:"She is going home"},
    ]},
  {title:"Is + abairt aitheantais",sub:"Identity sentences — use Is, not Tá",icon:"🪪",color:"#3A0A5A",light:"rgba(58,10,90,0.1)",
    rows:[
      {irish:"Is múinteoir mé",pr:"iss MWIN-chohr may",en:"I am a teacher"},
      {irish:"Is Éireannach í",pr:"iss AY-run-ukh ee",en:"She is Irish"},
      {irish:"Ní dochtúir é",pr:"nee DOKH-toor ay",en:"He is not a doctor"},
      {irish:"Cé thú féin?",pr:"kay hoo hayn",en:"Who are you? (informal)"},
    ]},
  {title:"Ceisteanna · Questions",sub:"Question words — all you need to get by",icon:"❓",color:"#1A4A3A",light:"rgba(26,74,58,0.1)",
    rows:[
      {irish:"Cé?",pr:"kay",en:"Who?"},
      {irish:"Cad? / Céard?",pr:"KAH / KAYD",en:"What?"},
      {irish:"Cá / Cá háit?",pr:"kaw / kaw HAWT",en:"Where?"},
      {irish:"Cathain?",pr:"KAH-hin",en:"When?"},
      {irish:"Conas? / Cén chaoi?",pr:"KUN-us / kayn KHEE",en:"How?"},
      {irish:"Cé mhéad?",pr:"kay VAYD",en:"How much / many?"},
    ]},
];

export default function App() {
  const [st,setSt]=useState(null);
  const [loading,setLoading]=useState(true);
  const [view,setView]=useState("home");
  const [selDay,setSelDay]=useState(null);
  const [celeb,setCeleb]=useState(null);
  const [theme,setTheme]=useState("coill");
  const [quiz,setQuiz]=useState(null);
  const [quizIdx,setQuizIdx]=useState(0);
  const [quizScore,setQuizScore]=useState(0);
  const [quizPicked,setQuizPicked]=useState(null);
  const [quizDone,setQuizDone]=useState(false);
  const [quizType,setQuizType]=useState("week"); // "week" | "daily"
  const [search,setSearch]=useState("");
  const [filterCat,setFilterCat]=useState("all");
  const [provIdx,setProvIdx]=useState(0);
  const [communityCount,setCommunityCount]=useState(null);
  const [openSong,setOpenSong]=useState(null);
  const [playingSong,setPlayingSong]=useState(null);
  const [prevView,setPrevView]=useState("home");
  const [installPrompt,setInstallPrompt]=useState(null);
  const [installed,setInstalled]=useState(false);
  const [speakLoading,setSpeakLoading]=useState(false);
  const [speakError,setSpeakError]=useState(null);
  const [flashQ,setFlashQ]=useState([]);
  const [flashIdx,setFlashIdx]=useState(0);
  const [flashPicked,setFlashPicked]=useState(null);
  const [flashDone,setFlashDone]=useState(false);
  const [flashScore,setFlashScore]=useState(0);
  const [flashTimeLeft,setFlashTimeLeft]=useState(8);
  const [flashBest,setFlashBest]=useState(()=>parseInt(localStorage.getItem("flashBest")||"0"));
  const [flashCombo,setFlashCombo]=useState(0);
  const [flashFX,setFlashFX]=useState([]); // floating XP/combo popups
  const flashTimerRef=useRef(null);
  const [focailInput,setFocailInput]=useState("");
  const [focailShake,setFocailShake]=useState(false);
  const [focailStats,setFocailStats]=useState(null);
  const [focailDist,setFocailDist]=useState(null);
  const [showFocailStats,setShowFocailStats]=useState(false);
  const [achToast,setAchToast]=useState(null);
  const focailSubmitRef=useRef(null);
  const [authUser,setAuthUser]=useState(null);
  const [showAuth,setShowAuth]=useState(false);
  const [authEmail,setAuthEmail]=useState("");
  const [authPwd,setAuthPwd]=useState("");
  const [authMode,setAuthMode]=useState("in"); // "in"|"up"
  const [authLoading,setAuthLoading]=useState(false);
  const [authErr,setAuthErr]=useState("");
  const [showLeaderboard,setShowLeaderboard]=useState(false);
  const [leaderData,setLeaderData]=useState(null);
  const [myRankData,setMyRankData]=useState(null);
  const [leaderLoading,setLeaderLoading]=useState(false);
  const [guideTab,setGuideTab]=useState("fuaimeanna");
  const c = THEMES[theme]||THEMES.coill;
  const dk = c.dark; // keep dk as a convenience boolean for backward compat

  useEffect(()=>{
    const handler=(e)=>{e.preventDefault();setInstallPrompt(e);};
    window.addEventListener("beforeinstallprompt",handler);
    window.addEventListener("appinstalled",()=>{setInstalled(true);setInstallPrompt(null);});
    if(window.matchMedia("(display-mode: standalone)").matches)setInstalled(true);
    return()=>window.removeEventListener("beforeinstallprompt",handler);
  },[]);

  useEffect(()=>{(async()=>{
    const [s]=await Promise.all([loadS(),new Promise(r=>setTimeout(r,1700))]);
    if(s){setSt(s);if(s.theme&&THEMES[s.theme])setTheme(s.theme);}
    else{const i={done:[],bonus:[],tasksDone:[],streak:0,best:0,theme:"coill",onboarded:true,started:new Date().toISOString(),dailyLog:{},county:null,notifEnabled:false};await saveS(i);setSt(i)}
    setLoading(false);
    // Fetch community count in background
    sbGetCount(todayKey()).then(n=>{if(n!==null)setCommunityCount(n);});
  })()},[]);


  // Auth init — restore session and merge cloud progress
  useEffect(()=>{
    sbGetUser().then(user=>{
      if(!user) return;
      setAuthUser(user);
      const cloud=user.user_metadata?.progress;
      if(!cloud) return;
      setSt(prev=>{
        if(!prev) return cloud;
        const merged=mergeProgress(prev,cloud);
        saveS(merged);
        return merged;
      });
    });
  },[]);

  // Physical keyboard + stats fetch for Focail
  useEffect(()=>{
    if(view!=="focail") return;
    const h=(e)=>{
      if(e.metaKey||e.ctrlKey||e.altKey) return;
      if(e.key==="Backspace") setFocailInput(v=>v.slice(0,-1));
      else if(e.key==="Enter") focailSubmitRef.current?.();
      else if(/^[a-záéíóú]$/i.test(e.key)) setFocailInput(v=>v.length<5?v+e.key.toLowerCase():v);
    };
    window.addEventListener("keydown",h);
    const dn=getFocailDay();
    sbFocailStats(dn).then(s=>{if(s)setFocailStats(s);});
    sbFocailDistribution(dn).then(d=>{if(d)setFocailDist(d);});
    return()=>window.removeEventListener("keydown",h);
  },[view]);

  const save=useCallback(async(ns)=>{
    setSt(ns);await saveS(ns);sbSyncProgress(ns);
    if(_gcToken&&authUser?.id){
      const nm=authUser.email?.split("@")[0]||"Gaeilgeoir";
      sbUpdateScore(authUser.id,nm,ns.xp||0,(ns.done||[]).length,ns.streak||0);
    }
  },[authUser]);
  const cycleTheme=async()=>{
    const order=["coill","parchment","oiche"];
    const next=order[(order.indexOf(theme)+1)%order.length];
    setTheme(next);
    if(st)await save({...st,theme:next});
  };
  const toggle=cycleTheme; // alias so all existing toggle calls still work

  const speak=useCallback(async(text)=>{
    setSpeakLoading(true);
    setSpeakError(null);
    const result=await speakIrish(text);
    setSpeakLoading(false);
    if(result!=="ok"&&result!=="ok-accent")setSpeakError(result);
    else if(result==="ok-accent")setSpeakError("ok-accent");
  },[]);

  const markDailyDone=useCallback(async()=>{
    if(!st)return;
    const k=todayKey();
    if(st.dailyLog?.[k])return;
    const dl={...(st.dailyLog||{}),[k]:true};
    await save({...st,dailyLog:dl});
    playSound('complete');
    haptic([30,50,30,50,80]);
    sbIncrement(k).then(()=>sbGetCount(k).then(n=>{if(n!==null)setCommunityCount(n);}));
  },[st,save]);

  const startDailyQuiz=useCallback(()=>{
    const q=getDailyVocabQuiz(VOCAB,new Date());
    setQuiz(q);setQuizIdx(0);setQuizScore(0);setQuizPicked(null);setQuizDone(false);
    setQuizType("daily");setView("quiz");
  },[]);

  const saveDailyQuizScore=useCallback(async(score)=>{
    if(!st)return;
    const k=todayKey()+"_vq";
    const dl={...(st.dailyLog||{}),[k]:score};
    await save({...st,dailyLog:dl});
  },[st,save]);

  const startFlash=useCallback(()=>{
    const pool=[
      ...CH.map(d=>({p:d.p,m:d.m})),
      ...VOCAB.filter(v=>v.m.length<20),
    ];
    const shuffled=[...pool].sort(()=>Math.random()-0.5).slice(0,10);
    const questions=shuffled.map(item=>{
      const wrong=pool.filter(x=>x.p!==item.p&&x.m!==item.m)
        .sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.m);
      const options=[...wrong,item.m].sort(()=>Math.random()-0.5);
      return{irish:item.p,correct:item.m,options};
    });
    setFlashQ(questions);setFlashIdx(0);setFlashPicked(null);
    setFlashDone(false);setFlashScore(0);setFlashTimeLeft(8);
    setView("flash");
  },[]);

  const shareResult=useCallback(async(cardParams, fallbackText)=>{
    haptic([10,20,10]);
    try{
      const blob=await generateShareCard(cardParams);
      const file=new File([blob],'gaeltacht-result.png',{type:'image/png'});
      if(navigator.share&&navigator.canShare&&navigator.canShare({files:[file]})){
        await navigator.share({files:[file],title:'Gaeltacht Connect ☘️',text:fallbackText});
        return;
      }
      // fallback: share text only
      if(navigator.share){await navigator.share({title:'Gaeltacht Connect ☘️',text:fallbackText});return;}
      // last resort: download image
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;a.download='gaeltacht-result.png';a.click();
      setTimeout(()=>URL.revokeObjectURL(url),2000);
    }catch(e){
      // user cancelled — silent
    }
  },[]);

  const earnAchievement=useCallback(async(id)=>{
    if(!st)return;
    const already=(st.achievements||[]);
    if(already.includes(id))return;
    const def=ALL_ACHIEVEMENTS.find(a=>a.id===id);
    if(!def)return;
    const newAchs=[...already,id];
    await save({...st,achievements:newAchs});
    setAchToast(def);
    setTimeout(()=>setAchToast(null),3200);
  },[st,save]);

  const earnXP=useCallback(async(amount,logKey)=>{
    if(!st)return;
    const prevXP=st.xp||0;
    const xp=prevXP+amount;
    const dl=logKey?{...(st.dailyLog||{}),[logKey]:true}:(st.dailyLog||{});
    await save({...st,xp,dailyLog:dl});
    if(prevXP<100&&xp>=100) setTimeout(()=>earnAchievement("xp_100"),400);
    if(prevXP<500&&xp>=500) setTimeout(()=>earnAchievement("xp_500"),400);
    if(prevXP<1000&&xp>=1000) setTimeout(()=>earnAchievement("xp_1000"),400);
  },[st,save,earnAchievement]);

  const scheduleNotif=useCallback(()=>{
    if(Notification.permission!=="granted")return;
    const now=new Date();
    const target=new Date();
    target.setHours(9,0,0,0);
    if(target<=now){target.setDate(target.getDate()+1);}
    const delay=target-now;
    setTimeout(()=>{
      new Notification("☘️ Dúshlán an Lae",{
        body:"Today's Irish challenge is ready. Everyone's doing it.",
        icon:"/icons/apple-touch-icon.png",
        badge:"/icons/apple-touch-icon.png",
      });
      scheduleNotif();
    },delay);
  },[]);

  useEffect(()=>{
    if(st&&st.notifEnabled&&Notification.permission==="granted")scheduleNotif();
  },[st?.notifEnabled,scheduleNotif]);

  const enableNotifs=useCallback(async()=>{
    const ok = await osRequestPermission();
    if(ok){
      await save({...st,notifEnabled:true});
    } else {
      // fallback to native browser notification
      const perm=await Notification.requestPermission();
      if(perm==="granted"){
        await save({...st,notifEnabled:true});
        scheduleNotif();
        new Notification("☘️ Gaeltacht Connect",{body:"You'll get a daily reminder at 9am. Maith thú!",icon:"/icons/apple-touch-icon.png"});
      } else {
        await save({...st,notifEnabled:false});
      }
    }
  },[st,save,scheduleNotif]);

  const calcStreak=(arr)=>{if(!arr.length)return 0;const s=[...arr].sort((a,b)=>a-b);let k=1;for(let i=s.length-1;i>0;i--){if(s[i]-s[i-1]===1)k++;else break}return k};

  const doComplete=async(d)=>{
    if(!st||st.done.includes(d))return;
    const nd=[...st.done,d];const k=calcStreak(nd);
    await save({...st,done:nd,streak:k,best:Math.max(k,st.best)});
    playSound('complete');
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
    playSound('bonus');
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
    await save({done:[],bonus:[],tasksDone:[],streak:0,best:0,theme:"coill",onboarded:true,started:new Date().toISOString(),dailyLog:{},county:null,notifEnabled:false});
    setView("home");setSelDay(null);
  };

  if(loading) return (
    <div style={{
      background:"linear-gradient(160deg,#050e07 0%,#0b1e10 40%,#060e08 100%)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      position:"fixed",inset:0,overflow:"hidden",
    }}>
      <style>{`
        @keyframes shamrockIn{0%{transform:scale(0) rotate(-20deg);opacity:0}65%{transform:scale(1.2) rotate(6deg);opacity:1}100%{transform:scale(1) rotate(0deg);opacity:1}}
        @keyframes fadeUpIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes goldPulse{0%,100%{box-shadow:0 0 40px rgba(200,150,62,0.2),0 16px 60px rgba(0,0,0,0.6)}50%{box-shadow:0 0 80px rgba(200,150,62,0.45),0 16px 60px rgba(0,0,0,0.6)}}
        @keyframes barFill{from{width:0}to{width:100%}}
        @keyframes glowRing{0%,100%{opacity:0.15;transform:scale(1)}50%{opacity:0.35;transform:scale(1.05)}}
        .sp-sh{animation:shamrockIn 1s cubic-bezier(0.34,1.56,0.64,1) both}
        .sp-t1{animation:fadeUpIn 0.7s 0.6s ease both;opacity:0}
        .sp-t2{animation:fadeUpIn 0.6s 0.9s ease both;opacity:0}
        .sp-t3{animation:fadeUpIn 0.6s 1.05s ease both;opacity:0}
        .sp-dv{animation:fadeUpIn 0.5s 1.2s ease both;opacity:0}
        .sp-bar{animation:fadeUpIn 0.4s 1.35s ease both,barFill 0.9s 1.55s ease both;opacity:0;width:0}
        body{background:#060d08}
      `}</style>

      {/* ambient glow */}
      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",
        background:"radial-gradient(ellipse,rgba(45,106,79,0.18) 0%,transparent 70%)",
        top:"50%",left:"50%",transform:"translate(-50%,-60%)",pointerEvents:"none",
        animation:"glowRing 3s ease-in-out infinite"}}/>

      <div className="sp-sh" style={{
        width:100,height:100,borderRadius:32,
        background:"linear-gradient(145deg,#0E2A1C,#1B4332)",
        border:"2px solid rgba(200,150,62,0.4)",
        animation:"shamrockIn 1s cubic-bezier(0.34,1.56,0.64,1) both, goldPulse 2.5s 1s ease-in-out infinite",
        display:"flex",alignItems:"center",justifyContent:"center",
        fontSize:"3.2rem",marginBottom:32,
        boxShadow:"0 20px 60px rgba(0,0,0,0.6)",
      }}>☘️</div>

      <div className="sp-t1" style={{
        fontFamily:"'Playfair Display',Georgia,serif",
        fontSize:"2.5rem",fontWeight:900,color:"#F0EDE4",
        letterSpacing:"-0.03em",lineHeight:1,marginBottom:8,textAlign:"center",
      }}>Gaeltacht Connect</div>

      <div className="sp-t2" style={{
        fontFamily:"'Lato',system-ui,sans-serif",
        fontSize:"0.62rem",color:"rgba(200,150,62,0.85)",
        letterSpacing:"0.28em",textTransform:"uppercase",fontWeight:700,
        marginBottom:6,
      }}>An Ghaeilge Bheo</div>

      <div className="sp-t3" style={{
        fontFamily:"'Lato',system-ui,sans-serif",
        fontSize:"0.72rem",color:"rgba(240,237,228,0.4)",
        letterSpacing:"0.04em",fontWeight:400,
        marginBottom:36,textAlign:"center",
      }}>The Living Irish</div>

      <div className="sp-dv" style={{display:"flex",alignItems:"center",gap:12,width:220,marginBottom:28}}>
        <div style={{flex:1,height:1,background:"linear-gradient(90deg,transparent,rgba(200,150,62,0.4))"}}/>
        <div style={{color:"rgba(200,150,62,0.6)",fontSize:"0.7rem",letterSpacing:"0.1em"}}>✦</div>
        <div style={{flex:1,height:1,background:"linear-gradient(90deg,rgba(200,150,62,0.4),transparent)"}}/>
      </div>

      <div style={{width:140,height:2,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden"}}>
        <div className="sp-bar" style={{height:"100%",background:"linear-gradient(90deg,rgba(45,106,79,0.8),rgba(200,150,62,0.8))",borderRadius:2}}/>
      </div>
    </div>
  );
  if(!st)return null;

  const total=(st.done||[]).length;
  const nextDay=total<CH.length?total+1:CH.length;
  const pct=total/CH.length;
  const currentCh=CH[nextDay-1];
  const allDone=total===CH.length;

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
@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-5px)}40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}
@keyframes correctPop{0%{transform:scale(1)}50%{transform:scale(1.04)}100%{transform:scale(1)}}
@keyframes goldGlow{0%,100%{box-shadow:0 0 20px rgba(200,150,62,0.12)}50%{box-shadow:0 0 40px rgba(200,150,62,0.3)}}
@keyframes floatUp{0%{opacity:1;transform:translateY(0) scale(1)}60%{opacity:1;transform:translateY(-44px) scale(1.08)}100%{opacity:0;transform:translateY(-80px) scale(0.9)}}
@keyframes comboBurst{0%{transform:scale(0.4);opacity:0}50%{transform:scale(1.2);opacity:1}80%{transform:scale(0.95)}100%{transform:scale(1);opacity:1}}
@keyframes bgFlashGreen{0%,100%{background-color:transparent}40%{background-color:rgba(34,197,94,0.18)}}
@keyframes tileFlip{0%{transform:rotateX(0deg)}50%{transform:rotateX(-90deg)}100%{transform:rotateX(0deg)}}
@keyframes tilePop{0%{transform:scale(1)}50%{transform:scale(1.12)}100%{transform:scale(1)}}
@keyframes tileShake{0%,100%{transform:translateX(0)}15%{transform:translateX(-6px)}35%{transform:translateX(6px)}55%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
@keyframes slowGlow{0%,100%{opacity:0.55}50%{opacity:1}}
@keyframes driftUp{0%{transform:translateY(0)}100%{transform:translateY(-8px)}}
html{-webkit-font-smoothing:antialiased}
button:active{opacity:0.85;transform:scale(0.98)!important}
body{background:${c.bg}}
@media(min-width:520px){
  body{background:${theme==="parchment"?"linear-gradient(160deg,#E0D8C8 0%,#EDE7D8 50%,#E0D8C8 100%)":theme==="oiche"?"linear-gradient(160deg,#020508 0%,#060e15 40%,#020508 100%)":"linear-gradient(160deg,#050e07 0%,#0c2010 40%,#060e08 100%)"};min-height:100vh}
  .af{max-width:480px;margin:0 auto;position:relative;box-shadow:0 0 0 1px ${c.bd},0 8px 60px ${c.dark?"rgba(0,0,0,0.95)":"rgba(0,0,0,0.25)"},0 30px 120px ${c.dark?"rgba(0,0,0,0.8)":"rgba(0,0,0,0.15)"}}
}
`;

  const hd = {fontFamily:"'Playfair Display',Georgia,serif",letterSpacing:"0.01em"};
  const bd = {fontFamily:"'Lato',system-ui,sans-serif"};

  // ═══════════════════════════════
  // FOCAIL VIEW — Daily Irish Wordle
  // ═══════════════════════════════
  if(view==="focail"){
    const fw=getFocailWord();
    const dayNum=getFocailDay();
    const todayDate=todayKey();
    const isToday=st.focailDate===todayDate;
    const guesses=isToday?(st.focailGuesses||[]):[];
    const colors =isToday?(st.focailColors||[]):[];
    const done   =isToday?(st.focailDone||false):false;

    // Build keyboard color map
    const keyCol={};
    colors.forEach((row,ri)=>{
      const w=guesses[ri]||"";
      row.forEach((col,ci)=>{
        const l=focailNorm(w[ci]||"");
        if(!l) return;
        if(col==="g") keyCol[l]="g";
        else if(col==="y"&&keyCol[l]!=="g") keyCol[l]="y";
        else if(!keyCol[l]) keyCol[l]="n";
      });
    });

    const doSubmit=()=>{
      if(done||focailInput.length!==5){
        setFocailShake(true); setTimeout(()=>setFocailShake(false),500); return;
      }
      const result=scoreFocailGuess(focailInput,fw.w);
      const ng=[...guesses,focailInput];
      const nc=[...colors,result];
      const won=result.every(col=>col==="g");
      const lost=!won&&ng.length>=6;
      const newDone=won?"won":lost?"lost":false;
      setSt(s=>({...s,focailDate:todayDate,focailGuesses:ng,focailColors:nc,focailDone:newDone}));
      if(won) earnXP(30,"focail");
      else if(newDone==="lost") earnXP(5,"focail");
      if(newDone) {
        sbFocailRecord(dayNum,won,ng.length).then(()=>{
          sbFocailStats(dayNum).then(s=>{if(s)setFocailStats(s);});
          sbFocailDistribution(dayNum).then(d=>{if(d)setFocailDist(d);});
        });
        // Save personal history (keep last 90 games)
        setSt(s=>({...s,focailHistory:[...(s.focailHistory||[]).slice(-89),{d:dayNum,g:won?ng.length:0,s:won}]}));
        earnAchievement("first_focail");
        if(won){
          earnAchievement("focail_win");
          if(ng.length<=2) earnAchievement("focail_genius");
          // Check 3-day focail streak (simple: prev 2 days also won)
          const p1=st.focailDate===new Date(Date.now()-86400000).toISOString().slice(0,10)&&st.focailDone==="won";
          if(p1) earnAchievement("focail_3");
        }
      }
      setFocailInput("");
    };
    focailSubmitRef.current=doSubmit;

    const handleFKey=(k)=>{
      if(done) return;
      if(k==="⌫"){setFocailInput(v=>v.slice(0,-1));return;}
      if(k==="↵"){doSubmit();return;}
      const ch=k.toLowerCase();
      if(/^[a-záéíóú]$/.test(ch)&&focailInput.length<5) setFocailInput(v=>v+ch);
    };

    const ROWS=6,COLS=5;
    const getTile=(ri,ci)=>{
      const submitted=ri<guesses.length;
      const isCurrent=ri===guesses.length;
      const letter=(submitted?(guesses[ri]?.[ci]||""):isCurrent?(focailInput[ci]||""):"").toUpperCase();
      const col=submitted?(colors[ri]?.[ci]||"n"):null;
      const isNew=submitted&&ri===guesses.length-1;
      const bg=col==="g"?"#22c55e":col==="y"?"#c9a227":col==="n"?(c.dark?"#2d3748":"#9ca3af"):"transparent";
      const bdr=submitted?"2px solid transparent":
        isCurrent&&focailInput[ci]?`2px solid ${c.acc}`:
        isCurrent?`2px solid ${c.bd}`:`2px solid ${c.bd}44`;
      return(
        <div key={ci} style={{
          width:54,height:54,display:"flex",alignItems:"center",justifyContent:"center",
          background:bg,border:bdr,borderRadius:8,
          fontSize:"1.5rem",fontWeight:800,
          color:submitted?"#fff":c.tx,
          fontFamily:"Georgia,serif",
          transition:"background 0.3s,border 0.15s",
          animation:isCurrent&&focailShake?`tileShake 0.4s ease`:
                    isNew?`tileFlip 0.5s ease ${ci*0.1}s both`:"none",
        }}>{letter}</div>
      );
    };

    const KB=[
      ["q","w","e","r","t","y","u","i","o","p"],
      ["a","s","d","f","g","h","j","k","l"],
      ["↵","z","x","c","v","b","n","m","⌫"],
      ["á","é","í","ó","ú"],
    ];
    const kbBg=(k)=>{
      if(k==="↵"||k==="⌫") return c.dark?"#3d4a5c":"#5a6a7a";
      const col=keyCol[focailNorm(k)];
      return col==="g"?"#22c55e":col==="y"?"#c9a227":col==="n"?(c.dark?"#2d3748":"#9ca3af"):(c.dark?"#2a3544":"#b8c4cc");
    };

    const showIntro = !st.focailIntroSeen && guesses.length===0 && !done;

    return(
      <div className="af" style={{minHeight:"100svh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"'Lato',system-ui,sans-serif"}}>
        {/* ── HOW TO PLAY overlay (first time) ── */}
        {showIntro&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.82)",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}
            onClick={()=>setSt(s=>({...s,focailIntroSeen:true}))}>
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,padding:"28px 24px",maxWidth:340,textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"}}>
              <div style={{fontSize:"2.5rem",marginBottom:12}}>🟩</div>
              <div style={{...hd,fontSize:"1.3rem",color:c.acc,marginBottom:6}}>Conas a Imrítear?</div>
              <div style={{...bd,fontSize:"0.8rem",color:c.tx3,marginBottom:18,fontStyle:"italic"}}>How to play</div>
              <div style={{display:"flex",flexDirection:"column",gap:10,textAlign:"left",marginBottom:20}}>
                {[
                  ["🟩","Correct letter, correct position"],
                  ["🟨","Correct letter, wrong position"],
                  ["⬛","Letter not in the word"],
                ].map(([e,t])=>(
                  <div key={e} style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontSize:"1.3rem",minWidth:28}}>{e}</span>
                    <span style={{...bd,fontSize:"0.82rem",color:c.tx2}}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{...bd,fontSize:"0.75rem",color:c.tx3,marginBottom:18}}>
                Guess the 5-letter Irish word in 6 tries. A new word every day. Use the <strong style={{color:c.acc}}>Á É Í Ó Ú</strong> row for fada.
              </div>
              <button style={{
                background:c.acc,border:"none",borderRadius:10,
                padding:"12px 32px",color:"#111",...bd,fontWeight:800,fontSize:"0.95rem",cursor:"pointer",width:"100%"
              }}>Tosaigh · Start playing</button>
            </div>
          </div>
        )}

        {/* Header */}
        <div style={{width:"100%",maxWidth:420,display:"flex",alignItems:"center",padding:"10px 14px 8px",borderBottom:`1px solid ${c.bd}33`}}>
          <button onClick={()=>setView("home")} style={{background:"none",border:"none",color:c.tx2,fontSize:"1.5rem",cursor:"pointer",padding:"2px 8px",lineHeight:1}}>←</button>
          <div style={{flex:1,textAlign:"center"}}>
            <div style={{fontFamily:"Georgia,serif",fontWeight:800,fontSize:"1.35rem",letterSpacing:5,color:c.acc}}>FOCAIL</div>
            <div style={{fontSize:"0.68rem",color:c.tx3,marginTop:1,fontFamily:"'Lato',system-ui,sans-serif"}}>#{dayNum} · Focal Gaeilge an Lae</div>
          </div>
          <button onClick={()=>setShowFocailStats(true)} style={{
            background:"none",border:"none",color:c.tx3,fontSize:"1.1rem",cursor:"pointer",padding:"2px 8px",lineHeight:1
          }}>📊</button>
        </div>

        {/* ── STATS MODAL ── */}
        {showFocailStats&&(()=>{
          const hist=st.focailHistory||[];
          const total=hist.length;
          const wins=hist.filter(g=>g.s).length;
          const winRate=total>0?Math.round(wins/total*100):0;
          const myDist=[1,2,3,4,5,6].map(n=>hist.filter(g=>g.s&&g.g===n).length);
          const maxBar=Math.max(...myDist,1);
          // Focail solve streak
          let fStreak=0;
          const sorted=[...hist].sort((a,b)=>b.d-a.d);
          let prev=null;
          for(const g of sorted){
            if(!g.s) break;
            if(prev===null||prev-g.d===1){fStreak++;prev=g.d;}
            else break;
          }
          // "Better than X%" today
          const todayGame=hist.find(g=>g.d===dayNum);
          let betterThan=null;
          if(todayGame?.s&&focailStats?.plays&&focailDist){
            const worseOrFailed=focailStats.plays-focailDist.slice(0,todayGame.g).reduce((a,b)=>a+b,0);
            betterThan=Math.round(worseOrFailed/focailStats.plays*100);
          }
          return(
            <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
              onClick={e=>{if(e.target===e.currentTarget)setShowFocailStats(false);}}>
              <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:"24px 24px 0 0",
                padding:"24px 20px 36px",width:"100%",maxWidth:480,animation:"slide-up 0.3s ease"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
                  <div style={{...hd,fontSize:"1.1rem",color:c.tx,fontWeight:800}}>Mo Staitisticí · My Stats</div>
                  <button onClick={()=>setShowFocailStats(false)} style={{background:"none",border:"none",color:c.tx3,fontSize:"1.4rem",cursor:"pointer",lineHeight:1}}>×</button>
                </div>
                {/* Key stats */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:20}}>
                  {[{v:total,l:"Played"},{v:`${winRate}%`,l:"Won"},{v:fStreak,l:"Streak"},{v:wins>0?`${hist.filter(g=>g.s).reduce((a,g)=>a+g.g,0)/wins|0}/6`:"-",l:"Avg"}].map((s,i)=>(
                    <div key={i} style={{textAlign:"center",background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:10,padding:"10px 4px"}}>
                      <div style={{...hd,fontSize:"1.4rem",fontWeight:800,color:c.acc}}>{s.v}</div>
                      <div style={{...bd,fontSize:"0.6rem",color:c.tx3,marginTop:2}}>{s.l}</div>
                    </div>
                  ))}
                </div>
                {/* Guess distribution */}
                <div style={{...bd,fontSize:"0.7rem",color:c.tx3,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:10}}>Guess distribution</div>
                <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:16}}>
                  {[1,2,3,4,5,6].map(n=>{
                    const cnt=myDist[n-1];
                    const pct=Math.round(cnt/maxBar*100)||0;
                    const isToday=todayGame?.s&&todayGame?.g===n;
                    return(
                      <div key={n} style={{display:"flex",alignItems:"center",gap:8}}>
                        <span style={{...bd,fontSize:"0.82rem",color:c.tx2,width:10,textAlign:"right"}}>{n}</span>
                        <div style={{flex:1,height:22,background:c.cardAlt,borderRadius:4,overflow:"hidden"}}>
                          <div style={{width:`${Math.max(pct,cnt>0?8:0)}%`,height:"100%",
                            background:isToday?"#22c55e":c.acc,borderRadius:4,
                            display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:6,
                            transition:"width 0.6s ease",minWidth:cnt>0?28:0}}>
                            {cnt>0&&<span style={{...bd,fontSize:"0.7rem",fontWeight:700,color:"#111"}}>{cnt}</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Community line */}
                {focailStats?.plays>0&&(
                  <div style={{textAlign:"center",padding:"10px",background:c.cardAlt,borderRadius:10,border:`1px solid ${c.bd}`}}>
                    <span style={{...bd,fontSize:"0.78rem",color:c.tx2}}>
                      {focailStats.plays.toLocaleString()} players today · {Math.round(focailStats.wins/focailStats.plays*100)}% solved
                    </span>
                    {betterThan!==null&&(
                      <div style={{...bd,fontSize:"0.75rem",color:"#22c55e",marginTop:4,fontWeight:700}}>
                        🎯 You beat {betterThan}% of today's players
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })()}

        {/* Community stats bar */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:"5px 0 2px",minHeight:22}}>
          {focailStats&&focailStats.plays>0?(
            <>
              <span style={{fontSize:"0.7rem",color:c.tx3}}>
                👥 {focailStats.plays.toLocaleString()} players today
              </span>
              <span style={{fontSize:"0.62rem",color:c.bd}}>·</span>
              <span style={{fontSize:"0.7rem",color:focailStats.wins/focailStats.plays>0.5?"#22c55e":c.tx3}}>
                {Math.round(focailStats.wins/focailStats.plays*100)}% solved
              </span>
            </>
          ):(
            <span style={{fontSize:"0.68rem",color:c.tx3,fontStyle:"italic"}}>
              {!done&&guesses.length===0?"5-litir · Guess the 5-letter Irish word":""}
            </span>
          )}
        </div>

        {/* Tile grid */}
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:"4px 0"}}>
          {Array.from({length:ROWS},(_,ri)=>(
            <div key={ri} style={{display:"flex",gap:5}}>
              {Array.from({length:COLS},(_,ci)=>getTile(ri,ci))}
            </div>
          ))}
        </div>

        {/* Result banner */}
        {done&&(
          <div style={{textAlign:"center",padding:"6px 20px 4px",width:"100%",maxWidth:420,borderTop:`1px solid ${c.bd}22`}}>
            {done==="won"
              ?<div style={{color:"#22c55e",fontWeight:800,fontSize:"1.05rem",fontFamily:"Georgia,serif"}}>🎉 Maith thú! +30 XP</div>
              :<div style={{color:c.tx2,fontSize:"0.95rem"}}>
                  An focal: <span style={{color:c.acc,fontWeight:800,fontFamily:"Georgia,serif"}}>{fw.w.toUpperCase()}</span>
                </div>
            }
            <div style={{color:c.tx3,fontSize:"0.75rem",marginTop:2}}>/{fw.pr}/ · {fw.m}</div>
            <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:10,flexWrap:"wrap"}}>
              <button onClick={()=>speak(fw.w)} style={{
                background:"none",border:`1px solid ${c.bd}`,borderRadius:8,
                padding:"8px 16px",color:c.tx2,fontSize:"0.8rem",cursor:"pointer"
              }}>🔊 Éist · Listen</button>
              <button onClick={()=>{
                const score=done==="won"?`${guesses.length}/6`:"X/6";
                const txt=`Focail #${dayNum} ${score}\n${fw.w.toUpperCase()} — ${fw.m}\n\n${focailEmoji(colors)}\n\n☘️ gaeltachtconnect.com — Irish word of the day`;
                if(navigator.share) navigator.share({title:"Focail",text:txt});
                else navigator.clipboard?.writeText(txt).then(()=>alert("Copied to clipboard!"));
              }} style={{
                background:c.acc,border:"none",borderRadius:8,
                padding:"8px 20px",color:"#111",fontSize:"0.82rem",fontWeight:800,cursor:"pointer"
              }}>↗ Roinn · Share</button>
              {focailStats&&focailStats.plays>0&&(
                <div style={{width:"100%",textAlign:"center",marginTop:8,fontSize:"0.68rem",color:c.tx3}}>
                  {focailStats.plays.toLocaleString()} players today · {Math.round(focailStats.wins/focailStats.plays*100)}% solved
                </div>
              )}
            </div>
          </div>
        )}

        {/* Keyboard */}
        <div style={{width:"100%",maxWidth:440,padding:"6px 4px 16px",display:"flex",flexDirection:"column",gap:5,alignItems:"center"}}>
          {KB.map((row,ri)=>(
            <div key={ri} style={{display:"flex",gap:ri===3?10:4,justifyContent:"center",width:"100%",paddingLeft:ri===1?14:0}}>
              {row.map(k=>(
                <button key={k} onClick={()=>handleFKey(k)} style={{
                  minWidth:k==="↵"?46:k==="⌫"?46:ri===3?40:31,
                  height:ri===3?42:50,
                  background:kbBg(k),color:"#fff",border:"none",borderRadius:6,
                  fontSize:ri===3?"1.1rem":k==="↵"||k==="⌫"?"0.74rem":"0.95rem",
                  fontWeight:ri===3?700:600,
                  fontFamily:ri===3?"Georgia,serif":"inherit",
                  cursor:"pointer",transition:"background 0.2s",
                  boxShadow:"0 2px 4px rgba(0,0,0,0.25)",
                  letterSpacing:ri===3?0:0,
                  opacity:done?0.6:1,
                }}>{k==="↵"?"ENTER":k==="⌫"?"⌫":k.toUpperCase()}</button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // ONBOARDING
  // ═══════════════════════════════
  // ═══════════════════════════════
  // WORD FLASH VIEW
  // ═══════════════════════════════
  if(view==="flash"){
    const fq=flashQ[flashIdx];
    const FLASH_SEC=8;
    const pct=flashDone?0:(flashTimeLeft/FLASH_SEC)*100;
    const timerColor=flashTimeLeft<=2?"#DC2626":flashTimeLeft<=3?"#F59E0B":c.acc;

    return(
      <div className="af" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:c.bg,color:c.tx,position:"relative",overflow:"hidden"}}>
        <style>{`${css} @keyframes flashPop{0%{transform:scale(0.94);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>

        {/* Floating XP / combo effects */}
        {flashFX.map(fx=>(
          <div key={fx.id} style={{
            position:"absolute",top:"42%",left:"50%",transform:"translateX(-50%)",
            pointerEvents:"none",zIndex:99,
            animation:`floatUp 0.9s ease forwards`,
            ...bd,fontWeight:900,
            fontSize:fx.type==="combo"?"1.3rem":"1rem",
            color:fx.type==="combo"?"#FF7A00":c.gold,
            textShadow:`0 0 20px ${fx.type==="combo"?"rgba(255,122,0,0.8)":"rgba(200,150,62,0.8)"}`,
            whiteSpace:"nowrap",
            ...(fx.type==="combo"?{animation:"comboBurst 0.35s ease forwards, floatUp 0.9s 0.15s ease forwards"}:{}),
          }}>{fx.text}</div>
        ))}

        {/* Combo streak badge */}
        {flashCombo>=3&&!flashDone&&(
          <div style={{
            position:"absolute",top:70,right:16,zIndex:50,
            background:"linear-gradient(135deg,#FF7A00,#FF4500)",
            borderRadius:12,padding:"6px 12px",
            ...bd,fontSize:"0.75rem",fontWeight:800,color:"#fff",
            boxShadow:"0 4px 16px rgba(255,100,0,0.5)",
            animation:"comboBurst 0.35s ease",
          }}>🔥 {flashCombo}× Combo!</div>
        )}

        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px 0"}}>
          <button onClick={()=>{clearInterval(flashTimerRef.current);setView("home");}} style={{
            background:c.dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",border:`1px solid ${c.bd}`,
            borderRadius:10,padding:"7px 13px",cursor:"pointer",color:c.tx3,...bd,fontSize:"0.82rem",
          }}>← Baile</button>
          <div style={{...bd,fontSize:"0.7rem",color:c.tx3,letterSpacing:"0.12em",textTransform:"uppercase"}}>
            Word Flash
          </div>
          <div style={{
            ...bd,fontSize:"0.8rem",fontWeight:700,color:c.gold,
            background:`${c.gold}18`,border:`1px solid ${c.gold}40`,
            borderRadius:9,padding:"5px 11px",
          }}>🏆 {flashBest}</div>
        </div>

        {flashDone?(
          // ── RESULTS ──
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px 20px",textAlign:"center"}}>
            {flashScore>=10&&<Confetti/>}
            {flashDone&&(()=>{
              earnAchievement("first_flash");
              if(flashScore>=10) earnAchievement("flash_perfect");
              if(flashCombo>=5) earnAchievement("flash_combo");
              return null;
            })()}
            <div style={{fontSize:"4.5rem",marginBottom:12,animation:"correctPop 0.5s ease"}}>
              {flashScore>=9?"🏆":flashScore>=7?"⭐":flashScore>=5?"👏":"💪"}
            </div>
            <div style={{...hd,fontSize:"3rem",fontWeight:900,color:flashScore>=9?c.gold:c.acc,marginBottom:4,
              textShadow:flashScore>=9?`0 0 30px ${c.gold}60`:"none"}}>
              {flashScore}/10
            </div>
            <div style={{...bd,fontSize:"0.9rem",color:c.tx2,marginBottom:4,fontWeight:600}}>
              {flashScore>=9?"Foirfe! · Perfect!":flashScore>=7?"An-mhaith! · Very good!":flashScore>=5?"Go maith! · Good!":"Coinnigh ort! · Keep going!"}
            </div>
            {st?.streak>=1&&<div style={{...bd,fontSize:"0.75rem",color:"#FF7A00",marginBottom:4}}>🔥 {st.streak} lá streak</div>}
            {flashScore>flashBest&&<div style={{...bd,fontSize:"0.75rem",color:c.gold,fontWeight:700,marginBottom:16,
              animation:"comboBurst 0.4s ease"}}>✦ New best! · Taifead nua!</div>}
            {flashScore<=flashBest&&flashBest>0&&<div style={{...bd,fontSize:"0.7rem",color:c.tx3,marginBottom:16}}>Best: {flashBest}/10</div>}
            {flashScore<=flashBest&&flashBest===0&&<div style={{height:16}}/>}

            {/* Share button — primary CTA */}
            <button onClick={()=>shareResult(
              {score:flashScore,total:10,label:'Word Flash ⚡',streak:st?.streak||0,phrase:'Dia dhuit!',meaning:'Hello in Irish'},
              `⚡ ${flashScore}/10 on Word Flash! ${st?.streak>=1?`🔥 ${st.streak} day streak · `:""}☘️ Gaeltacht Connect`
            )} style={{
              background:`linear-gradient(135deg,${c.acc},${c.gold})`,
              border:"none",borderRadius:16,padding:"15px 32px",cursor:"pointer",
              color:"#fff",...bd,fontSize:"1rem",fontWeight:800,
              boxShadow:`0 6px 24px ${c.acc}50`,
              display:"flex",alignItems:"center",gap:8,marginBottom:10,
              animation:"breathe 2.2s ease infinite",
            }}>
              <span style={{fontSize:"1.1rem"}}>↗</span> Share result
            </button>

            <button onClick={startFlash} style={{
              background:"transparent",border:`1px solid ${c.bd}`,
              borderRadius:14,padding:"12px 28px",cursor:"pointer",
              color:c.tx3,...bd,fontSize:"0.9rem",
            }}>Arís · Play again</button>
          </div>
        ):(fq&&(
          // ── QUESTION ──
          <div style={{flex:1,display:"flex",flexDirection:"column",padding:"16px 16px 24px"}}>
            {/* Progress + timer */}
            <div style={{marginBottom:12}}>
              <div style={{display:"flex",justifyContent:"space-between",...bd,fontSize:"0.68rem",color:c.tx3,marginBottom:5}}>
                <span>{flashIdx+1} / 10</span>
                <span style={{color:timerColor,fontWeight:700}}>{flashPicked?"":`${flashTimeLeft}s`}</span>
              </div>
              <div style={{height:3,background:c.dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)",borderRadius:3,overflow:"hidden"}}>
                <div style={{
                  height:"100%",width:`${pct}%`,borderRadius:3,
                  background:`linear-gradient(90deg,${timerColor},${timerColor}AA)`,
                  transition:"width 1s linear",
                }}/>
              </div>
            </div>

            {/* Question card */}
            <div key={flashIdx} style={{
              flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
              background:c.dark?`linear-gradient(160deg,${c.card},${c.gold}08)`:c.card,
              border:`1px solid ${c.gold}40`,borderRadius:24,
              padding:"28px 20px",marginBottom:18,
              animation:"flashPop 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
              boxShadow:c.shadow,
            }}>
              <div style={{...bd,fontSize:"0.52rem",color:c.gold,letterSpacing:"0.25em",textTransform:"uppercase",marginBottom:14,opacity:0.7}}>
                Cad é an Béarla? · What's the English?
              </div>
              <div style={{...hd,fontSize:"2.2rem",fontWeight:700,color:c.acc,textAlign:"center",fontStyle:"italic",lineHeight:1.2}}>
                {fq.irish}
              </div>
            </div>

            {/* Options */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {fq.options.map((opt,i)=>{
                const isCorrect=opt===fq.correct;
                const isPicked=flashPicked===opt;
                const revealed=flashPicked!==null;
                let bg=c.card, border=`1px solid ${c.bd}`, col=c.tx;
                if(revealed&&isCorrect){bg=`rgba(34,197,94,0.18)`;border=`2px solid #22C55E`;col="#22C55E";}
                else if(revealed&&isPicked&&!isCorrect){bg=`rgba(220,38,38,0.15)`;border=`2px solid #DC2626`;col="#DC2626";}
                return(
                  <button key={i} onClick={()=>{
                    if(flashPicked!==null)return;
                    clearInterval(flashTimerRef.current);
                    setFlashPicked(opt);
                    const correct=opt===fq.correct;
                    const newCombo=correct?flashCombo+1:0;
                    setFlashCombo(newCombo);
                    const multiplier=newCombo>=3?2:1;
                    const xpEarned=correct?10*multiplier:0;
                    if(correct){
                      playSound("correct");haptic([10,20]);
                      const fxId=Date.now();
                      const fxItems=[{id:fxId,text:`+${xpEarned} XP`,type:"xp"}];
                      if(newCombo===3)fxItems.push({id:fxId+1,text:"🔥 Combo ×2!",type:"combo"});
                      if(newCombo>3)fxItems.push({id:fxId+1,text:`🔥 ×${newCombo}`,type:"combo"});
                      setFlashFX(fx=>[...fx,...fxItems]);
                      setTimeout(()=>setFlashFX(fx=>fx.filter(f=>!fxItems.find(x=>x.id===f.id))),900);
                    } else{playSound("wrong");haptic([30,20,30]);}
                    const newScore=flashScore+(correct?1:0);
                    setTimeout(()=>{
                      if(flashIdx+1>=10){
                        const best=Math.max(flashBest,newScore);
                        setFlashBest(best);
                        localStorage.setItem("flashBest",String(best));
                        earnXP(newScore*10, todayKey()+"_flash");
                        setFlashScore(newScore);setFlashDone(true);setFlashCombo(0);
                      } else {
                        setFlashScore(newScore);
                        setFlashIdx(i=>i+1);setFlashPicked(null);setFlashTimeLeft(FLASH_SEC);
                      }
                    },700);
                  }} style={{
                    background:bg,border,borderRadius:14,padding:"12px 8px",
                    cursor:revealed?"default":"pointer",color:col,
                    ...bd,fontSize:"0.9rem",fontWeight:600,
                    textAlign:"center",transition:"background 0.2s, border 0.2s, box-shadow 0.2s",
                    boxShadow:revealed&&isCorrect?`0 0 20px rgba(34,197,94,0.4)`:
                              revealed&&isPicked?`0 0 16px rgba(220,38,38,0.25)`:"none",
                    animation:revealed&&isPicked&&!isCorrect?"shake 0.4s ease":
                              revealed&&isCorrect?"correctPop 0.35s ease":"none",
                  }}>{opt}</button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Flash timer useEffect trigger */}
        {view==="flash"&&!flashDone&&flashPicked===null&&fq&&(
          <FlashTimer
            key={flashIdx}
            seconds={FLASH_SEC}
            onTick={t=>setFlashTimeLeft(t)}
            onExpire={()=>{
              setFlashPicked("__timeout__");
              setFlashCombo(0);
              playSound("wrong");haptic([30,20,30]);
              const newScore=flashScore;
              setTimeout(()=>{
                if(flashIdx+1>=10){
                  const best=Math.max(flashBest,newScore);
                  setFlashBest(best);localStorage.setItem("flashBest",String(best));
                  earnXP(newScore*10, todayKey()+"_flash");
                  setFlashScore(newScore);setFlashDone(true);
                } else {
                  setFlashIdx(i=>i+1);setFlashPicked(null);setFlashTimeLeft(FLASH_SEC);
                }
              },700);
            }}
          />
        )}
      </div>
    );
  }

  // ═══════════════════════════════
  // QUIZ VIEW
  // ═══════════════════════════════
  if(view==="quiz"&&quiz){
    const q=quiz[quizIdx];
    const weekNum=Math.max(1,Math.ceil((total||1)/7));
    const qPct=Math.round((quizIdx/quiz.length)*100);
    return(
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column"}}>
        <style>{css}</style>

        {/* ── TOP BAR ── */}
        <div style={{display:"flex",alignItems:"center",padding:"14px 16px",gap:10,borderBottom:`1px solid ${c.bd}`,background:c.card}}>
          <button onClick={()=>{setView(prevView||"home");setQuiz(null);setQuizDone(false);}}
            style={{background:"none",border:"none",cursor:"pointer",color:c.tx3,padding:"6px 4px",display:"flex",alignItems:"center",flexShrink:0}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
          <div style={{flex:1,height:7,borderRadius:4,background:c.progBg,overflow:"hidden"}}>
            <div style={{
              width:`${qPct}%`,height:"100%",
              background:`linear-gradient(90deg,${c.acc},${c.gold})`,
              borderRadius:4,transition:"width 0.45s ease",
            }}/>
          </div>
          <div style={{...bd,fontSize:"0.78rem",color:c.tx3,flexShrink:0,fontWeight:700,minWidth:30,textAlign:"right"}}>
            {quizIdx+1}<span style={{opacity:0.4,fontWeight:400}}>/{quiz.length}</span>
          </div>
        </div>

        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px 20px 40px",maxWidth:480,width:"100%",margin:"0 auto"}}>
          {!quizDone?(
            <>
              {/* Type label */}
              <div style={{...bd,fontSize:"0.62rem",color:c.tx3,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:22,textAlign:"center"}}>
                {quizType==="daily"?"Cluiche an Lae · Daily Quiz":`Seachtain ${weekNum} · Week Quiz`}
              </div>

              {/* Phrase card */}
              <div style={{
                width:"100%",
                background:`linear-gradient(160deg,${c.phrase},${c.card})`,
                border:`2px solid ${c.phraseBd}`,borderRadius:22,
                padding:"28px 24px 24px",marginBottom:22,textAlign:"center",
                animation:"pop 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                boxShadow:`0 8px 32px rgba(0,0,0,0.18),inset 0 1px 0 ${c.gold}20`,
                position:"relative",overflow:"hidden",
              }}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent 0%,${c.gold} 50%,transparent 100%)`}}/>
                <div style={{...hd,fontSize:"2.2rem",fontWeight:700,color:c.acc,lineHeight:1.25,marginBottom:8}}>{q.phrase}</div>
                <div style={{...bd,fontSize:"0.74rem",color:c.tx3,fontStyle:"italic",marginBottom:14,letterSpacing:"0.04em"}}>/{q.pr}/</div>
                <button onClick={()=>speak(q.phrase)} style={{
                  background:c.phraseBd,border:"none",borderRadius:20,
                  padding:"6px 16px",color:c.acc,...bd,fontSize:"0.78rem",
                  cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6,
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                  Éist · Listen
                </button>
              </div>

              {/* Question */}
              <div style={{...hd,fontSize:"1rem",fontWeight:600,color:c.tx,textAlign:"center",marginBottom:18,opacity:0.75}}>
                Cad is brí leis seo? · What does this mean?
              </div>

              {/* Options */}
              <div style={{width:"100%",display:"flex",flexDirection:"column",gap:10}}>
                {q.opts.map((opt,i)=>{
                  const picked=quizPicked!==null;
                  const correct=opt===q.answer;
                  const chosen=opt===quizPicked;
                  let bg=c.card,border=`1.5px solid ${c.bd}`,txColor=c.tx;
                  let anim="";
                  if(picked&&correct){bg=c.doneBg;border=`1.5px solid ${c.doneBd}`;txColor=c.doneTx;if(chosen)anim="correctPop 0.35s ease";}
                  else if(picked&&chosen&&!correct){bg="rgba(254,226,226,0.9)";border="1.5px solid #FCA5A5";txColor="#991B1B";anim="shake 0.4s ease";}
                  return(
                    <button key={i} onClick={()=>{
                      if(quizPicked!==null)return;
                      setQuizPicked(opt);
                      if(opt===q.answer){setQuizScore(s=>s+1);playSound('correct');haptic([15]);}else{playSound('wrong');haptic([40,30,40]);}
                      setTimeout(()=>{
                        if(quizIdx+1<quiz.length){setQuizIdx(i=>i+1);setQuizPicked(null);}
                        else{
                          const finalScore=quizScore+(opt===q.answer?1:0);
                          setQuizDone(true);
                          if(finalScore===quiz.length){playSound('bonus');haptic([30,50,30,50,100]);}
                          if(quizType==="daily"){saveDailyQuizScore(finalScore);earnXP(finalScore*15);}
                          else{earnXP(finalScore*10);}
                        }
                      },1000);
                    }} style={{
                      background:bg,border,borderRadius:14,padding:"16px 18px",
                      color:txColor,...bd,fontSize:"0.95rem",cursor:picked?"default":"pointer",
                      textAlign:"left",transition:"background 0.25s,border-color 0.25s,color 0.25s",
                      fontWeight:picked&&(chosen||correct)?600:400,
                      display:"flex",alignItems:"center",justifyContent:"space-between",
                      animation:anim,
                    }}>
                      <span style={{flex:1}}>{opt}</span>
                      {picked&&correct&&(
                        <span style={{width:22,height:22,borderRadius:"50%",background:c.doneTx,color:"#fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.72rem",fontWeight:800,flexShrink:0,marginLeft:10}}>✓</span>
                      )}
                      {picked&&chosen&&!correct&&(
                        <span style={{width:22,height:22,borderRadius:"50%",background:"#DC2626",color:"#fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.72rem",fontWeight:800,flexShrink:0,marginLeft:10}}>✗</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          ):(
            /* Quiz results */
            <div style={{textAlign:"center",animation:"riseStrong 0.55s ease",width:"100%"}}>
              {quizScore===quiz.length&&<Confetti/>}

              {/* Score circle */}
              <div style={{
                width:110,height:110,borderRadius:"50%",
                border:`4px solid ${quizScore===quiz.length?c.gold:quizScore>=Math.ceil(quiz.length/2)?c.acc:c.bd}`,
                background:quizScore===quiz.length?`${c.gold}12`:quizScore>=Math.ceil(quiz.length/2)?`${c.acc}10`:c.cardAlt,
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
                margin:"0 auto 24px",
                boxShadow:quizScore===quiz.length?`0 0 40px ${c.gold}40,0 8px 24px rgba(0,0,0,0.2)`:"0 4px 20px rgba(0,0,0,0.15)",
                animation:"pop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.05s both",
              }}>
                <span style={{...hd,fontSize:"2.5rem",fontWeight:900,color:quizScore===quiz.length?c.gold:c.acc,lineHeight:1}}>
                  {quizScore}
                </span>
                <span style={{...bd,fontSize:"0.62rem",color:c.tx3,letterSpacing:"0.04em"}}>of {quiz.length}</span>
              </div>

              <h2 style={{...hd,fontSize:"2rem",fontWeight:700,color:quizScore===quiz.length?c.gold:c.acc,marginBottom:10}}>
                {quizScore===quiz.length?"Ar fheabhas!":quizScore>=Math.ceil(quiz.length/2)?"Maith go leor!":"Coinnigh ort!"}
              </h2>
              <p style={{...bd,fontSize:"0.95rem",color:c.tx2,marginBottom:4}}>
                {quizScore===quiz.length?"Perfect score! You really know your Irish!":quizScore>=Math.ceil(quiz.length/2)?"Well done — keep practising!":"Practice makes perfect, coinnigh ort!"}
              </p>

              <div style={{
                margin:"18px 0 28px",padding:"16px 20px",
                borderTop:`1px solid ${c.bd}`,borderBottom:`1px solid ${c.bd}`,
              }}>
                <div style={{...hd,fontSize:"0.92rem",fontStyle:"italic",color:c.gold,lineHeight:1.5}}>
                  {quizScore===quiz.length?'"Is fearr Gaeilge briste ná Béarla cliste"':quizScore>=Math.ceil(quiz.length/2)?'"Mol an óige agus tiocfaidh sí"':'"Ní neart go cur le chéile"'}
                </div>
                <div style={{...bd,fontSize:"0.65rem",color:c.tx3,marginTop:5,opacity:0.6}}>
                  {quizScore===quiz.length?"Broken Irish beats clever English":quizScore>=Math.ceil(quiz.length/2)?"Praise the young and they will flourish":"No strength without unity"}
                </div>
              </div>

              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {/* Share — primary CTA */}
                <button onClick={()=>shareResult(
                  {score:quizScore,total:quiz.length,label:'Irish Quiz 🎯',streak:st?.streak||0,phrase:'Tá Gaeilge agam!',meaning:'I have Irish!'},
                  `🎯 ${quizScore}/${quiz.length} on the Irish Quiz! ${st?.streak>=1?`🔥 ${st.streak} day streak · `:""}☘️ Gaeltacht Connect`
                )} style={{
                  width:"100%",padding:"16px",borderRadius:14,
                  background:`linear-gradient(135deg,${c.acc},${c.gold})`,
                  border:"none",color:"#fff",...bd,fontSize:"1rem",fontWeight:800,cursor:"pointer",
                  display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                  boxShadow:`0 6px 24px ${c.acc}50`,
                  animation:"breathe 2.2s ease infinite",
                }}>
                  <span style={{fontSize:"1.1rem"}}>↗</span> Share result
                </button>
                <button onClick={()=>{setView("home");setQuiz(null);}} style={{
                  width:"100%",padding:"14px",borderRadius:14,background:c.card,
                  border:`1px solid ${c.bd}`,color:c.tx,...bd,fontSize:"0.95rem",fontWeight:600,cursor:"pointer",
                }}>
                  ☘️ Ar aghaidh — Continue
                </button>
                <button onClick={()=>{
                  const nq=quizType==="daily"?getDailyVocabQuiz(VOCAB,new Date()):makeQuiz(st.done);
                  setQuiz(nq);setQuizIdx(0);setQuizScore(0);setQuizPicked(null);setQuizDone(false);
                }} style={{
                  width:"100%",padding:"12px",borderRadius:14,
                  background:"none",border:`1px solid ${c.bd}`,
                  color:c.tx3,...bd,fontSize:"0.85rem",cursor:"pointer",
                }}>
                  Arís — Try again
                </button>
              </div>
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
    // mark lesson opened for today's day (for mission tracking)
    const todayDayNum=CH.findIndex(d=>!st.done.includes(d.day))+1||CH.length;
    if(selDay===todayDayNum&&!st.dailyLog?.[todayKey()+"_lesson"]){
      earnXP(20, todayKey()+"_lesson");
      earnAchievement("first_lesson");
      const doneCount=(st.done||[]).length;
      if(doneCount>=4)  earnAchievement("lesson_5");
      if(doneCount>=14) earnAchievement("lesson_15");
      if(doneCount>=29) earnAchievement("lesson_30");
      if((st.streak||0)>=3)  earnAchievement("streak_3");
      if((st.streak||0)>=7)  earnAchievement("streak_7");
      if((st.streak||0)>=14) earnAchievement("streak_14");
      if((st.streak||0)>=30) earnAchievement("streak_30");
    }

    return(
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:24}}>
        <style>{css}</style>

        {/* ── TOP NAV ── */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px"}}>
          <button onClick={()=>{setView(prevView);setSelDay(null)}} style={{display:"flex",alignItems:"center",gap:8,background:c.card,border:`1px solid ${c.bd}`,borderRadius:10,cursor:"pointer",color:c.tx,...bd,fontSize:"0.9rem",padding:"8px 14px",fontWeight:600}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Ar ais
          </button>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{...bd,fontSize:"0.72rem",color:c.tx3}}>Lá {ch.day} / 30</span>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{display:"flex",gap:3}}>
                {[1,2,3,4,5].map(i=>(
                  <div key={i} style={{width:5,height:5,borderRadius:"50%",background:i<=ch.d?dayColor:c.bd}}/>
                ))}
              </div>
              {ch.tasks&&(()=>{
                const done=(st.tasksDone||[]).filter(k=>k.startsWith(`${ch.day}-`)).length;
                return done>0?<span style={{...bd,fontSize:"0.6rem",color:dayColor,background:dayColor+"18",borderRadius:10,padding:"2px 7px",border:`1px solid ${dayColor}44`}}>{done}/{ch.tasks.length} tasks</span>:null;
              })()}
            </div>
          </div>
        </div>

        {locked?(
          <div style={{padding:"100px 32px",textAlign:"center",animation:"rise 0.5s ease"}}>
            <div style={{fontSize:"3rem",marginBottom:16,opacity:0.4}}>🔒</div>
            <div style={{...hd,fontSize:"1.3rem",color:c.tx3,marginBottom:4}}>Glasáilte <span style={{fontWeight:400,fontSize:"0.9rem",opacity:0.6}}>· Locked</span></div>
            <p style={{...bd,fontSize:"0.9rem",color:c.tx3}}>Complete Day {ch.day-1} first.</p>
          </div>
        ):(
          <div style={{maxWidth:520,margin:"0 auto",padding:"0 20px 20px",animation:"rise 0.4s ease"}}>

            {/* ── PHRASE HERO ── */}
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,overflow:"hidden",boxShadow:c.shadow,marginBottom:16}}>
              <div style={{height:4,background:dayColor}}/>
              <div style={{padding:"24px 22px 28px"}}>
                {/* Category + title */}
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:ch.story?16:16}}>
                  <span style={{fontSize:"1rem"}}>{CATS[ch.cat]}</span>
                  <div>
                    <div style={{...hd,fontSize:"1.6rem",fontWeight:700,color:c.tx,lineHeight:1.2}}>{ch.t}</div>
                    <div style={{...bd,fontSize:"0.82rem",color:c.tx3,fontStyle:"italic"}}>{ch.e}</div>
                  </div>
                </div>

                {/* ── SCÉAL ── Story of the day */}
                {ch.story&&(
                  <div style={{marginBottom:20}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                      <div style={{height:1.5,flex:1,background:`linear-gradient(90deg,${dayColor}55,transparent)`}}/>
                      <span style={{...bd,fontSize:"0.55rem",color:dayColor,letterSpacing:"0.18em",textTransform:"uppercase",fontWeight:700,opacity:0.9}}>Stair · History</span>
                      <div style={{height:1.5,flex:1,background:`linear-gradient(90deg,transparent,${dayColor}55)`}}/>
                    </div>
                    <div style={{borderLeft:`3px solid ${dayColor}`,paddingLeft:16,paddingRight:2}}>
                      {ch.story.split("\n\n").map((para,i)=>(
                        <p key={i} style={{...bd,fontSize:"0.9rem",color:c.tx2,lineHeight:1.85,margin:i>0?"14px 0 0":"0"}}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Big phrase */}
                <div style={{textAlign:"center",padding:"28px 8px 24px",margin:"0 0 20px",position:"relative",background:`radial-gradient(ellipse at center,${c.gold}09 0%,transparent 70%)`}}>
                  <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"1.5px",background:`linear-gradient(90deg,transparent,${c.gold}70,transparent)`}}/>
                  <div style={{position:"absolute",bottom:0,left:"10%",right:"10%",height:"1.5px",background:`linear-gradient(90deg,transparent,${c.gold}70,transparent)`}}/>
                  <div style={{...bd,fontSize:"0.55rem",color:c.gold,letterSpacing:"0.22em",textTransform:"uppercase",marginBottom:14,opacity:0.7}}>✦ An Frása ✦</div>
                  <div style={{...hd,fontSize:"2.4rem",fontWeight:700,fontStyle:"italic",color:c.acc,lineHeight:1.2,marginBottom:6,textAlign:"center"}}>
                    {ch.p}
                  </div>
                  <div style={{...bd,fontSize:"0.78rem",color:c.gold,opacity:0.7,letterSpacing:"0.04em",marginBottom:8,fontStyle:"italic"}}>{ch.m}</div>
                  <div style={{...bd,fontSize:"0.84rem",color:c.tx3,letterSpacing:"0.06em",marginBottom:14,fontStyle:"italic"}}>/ {ch.pr} /</div>
                  <button onClick={()=>speak(ch.p)} style={{
                    background:speakError==="no-voice"?`rgba(180,70,0,0.08)`:c.phrase,
                    border:`1px solid ${speakError==="no-voice"?`rgba(180,70,0,0.35)`:c.phraseBd}`,
                    borderRadius:20,padding:"7px 18px",
                    color:speakError==="no-voice"?`#B44600`:c.acc,
                    ...bd,fontSize:"0.85rem",cursor:"pointer",
                    display:"inline-flex",alignItems:"center",gap:7,marginBottom:speakError?6:10,
                    transition:"all 0.2s",
                  }}>
                    {speakLoading
                      ?<><span style={{animation:"breathe 0.8s ease infinite"}}>⏳</span> Ag lódáil…</>
                      :speakError==="no-voice"
                      ?<>🔇 Níl guth Gaeilge · Tap to retry</>
                      :<><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>Éist le fuaim <span style={{opacity:0.55,fontSize:"0.75rem"}}>· Listen</span></>
                    }
                  </button>
                  {speakError==="no-voice"&&(
                    <div style={{...bd,fontSize:"0.72rem",color:c.tx3,marginBottom:10,lineHeight:1.55,maxWidth:280,textAlign:"center"}}>
                      Install an Irish voice: <strong style={{color:c.tx2}}>iOS</strong> Settings → Accessibility → Spoken Content → Voices → Irish · <strong style={{color:c.tx2}}>Android</strong> Settings → Text-to-speech → Add Irish
                    </div>
                  )}
                  {speakError==="ok-accent"&&(
                    <div style={{...bd,fontSize:"0.72rem",color:c.tx3,marginBottom:10,lineHeight:1.55,maxWidth:280,textAlign:"center",opacity:0.75}}>
                      No native Irish voice — approximation only. For real pronunciation, install an Irish voice.
                    </div>
                  )}
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
                  Déanta · Done
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

        {/* ── AUTH MODAL ── */}
        {showAuth&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
            onClick={e=>{if(e.target===e.currentTarget){setShowAuth(false);setAuthErr("");}}}>
            <div style={{
              background:c.card,border:`1px solid ${c.bd}`,
              borderRadius:"24px 24px 0 0",padding:"28px 24px 40px",
              width:"100%",maxWidth:480,
              animation:"slide-up 0.3s ease",
            }}>
              {authUser?(
                // ── SIGNED IN STATE ──
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:"2.5rem",marginBottom:8}}>☁️</div>
                  <div style={{...hd,fontSize:"1.1rem",color:c.acc,marginBottom:4}}>Synced to cloud</div>
                  <div style={{...bd,fontSize:"0.8rem",color:c.tx3,marginBottom:24}}>{authUser.email}</div>
                  <div style={{background:c.dark?"rgba(34,197,94,0.1)":"rgba(27,67,50,0.05)",
                    border:`1px solid ${c.doneBd}`,borderRadius:12,padding:"12px 16px",marginBottom:20,textAlign:"left"}}>
                    <div style={{...bd,fontSize:"0.8rem",color:c.doneTx,fontWeight:700,marginBottom:4}}>✓ Your progress is safe</div>
                    <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>XP, streaks, Focail history and achievements sync automatically across devices.</div>
                  </div>
                  <button onClick={async()=>{await sbSignOut();setAuthUser(null);setShowAuth(false);setLeaderData(null);setMyRankData(null);}} style={{
                    width:"100%",padding:"12px",background:"none",
                    border:`1px solid ${c.bd}`,borderRadius:12,
                    color:c.tx3,...bd,fontSize:"0.85rem",cursor:"pointer"
                  }}>Sign out</button>
                </div>
              ):(
                // ── SIGN IN / SIGN UP ──
                <div>
                  <div style={{...hd,fontSize:"1.2rem",color:c.tx,marginBottom:4,textAlign:"center"}}>
                    {authMode==="in"?"Welcome back":"Create account"}
                  </div>
                  <div style={{...bd,fontSize:"0.75rem",color:c.tx3,marginBottom:20,textAlign:"center"}}>
                    {authMode==="in"?"Sign in to sync your progress across devices":"Save your progress to the cloud"}
                  </div>
                  <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
                    <input type="email" placeholder="Email" value={authEmail}
                      onChange={e=>setAuthEmail(e.target.value)}
                      style={{padding:"13px 14px",borderRadius:10,border:`1.5px solid ${authErr?'#ef4444':c.bd}`,
                        background:c.cardAlt,color:c.tx,...bd,fontSize:"0.9rem",outline:"none"}}/>
                    <input type="password" placeholder="Password (min 6 chars)" value={authPwd}
                      onChange={e=>setAuthPwd(e.target.value)}
                      onKeyDown={e=>e.key==="Enter"&&document.getElementById("auth-submit")?.click()}
                      style={{padding:"13px 14px",borderRadius:10,border:`1.5px solid ${authErr?'#ef4444':c.bd}`,
                        background:c.cardAlt,color:c.tx,...bd,fontSize:"0.9rem",outline:"none"}}/>
                  </div>
                  {authErr&&<div style={{...bd,fontSize:"0.75rem",color:"#ef4444",marginBottom:10,textAlign:"center"}}>{authErr}</div>}
                  <button id="auth-submit" disabled={authLoading||!authEmail||authPwd.length<6}
                    onClick={async()=>{
                      setAuthLoading(true);setAuthErr("");
                      const d=await sbAuth(authEmail,authPwd,authMode==="up");
                      setAuthLoading(false);
                      if(d.error){
                        setAuthErr(d.error.message||"Something went wrong");
                      } else {
                        const user=await sbGetUser();
                        if(user){
                          setAuthUser(user);
                          // Merge cloud with local
                          const cloud=user.user_metadata?.progress;
                          if(cloud&&st){const merged=mergeProgress(st,cloud);await save(merged);}
                          else if(st){sbSyncProgress(st);}
                        }
                        setShowAuth(false);setAuthEmail("");setAuthPwd("");
                      }
                    }} style={{
                      width:"100%",padding:"14px",borderRadius:12,border:"none",
                      background:authLoading||!authEmail||authPwd.length<6?c.bd:c.acc,
                      color:"#111",...bd,fontWeight:800,fontSize:"0.95rem",
                      cursor:authLoading||!authEmail||authPwd.length<6?"not-allowed":"pointer",
                      transition:"background 0.2s",
                    }}>{authLoading?"...":(authMode==="in"?"Sign in · Logáil isteach":"Create account · Cruthaigh cuntas")}</button>
                  <div style={{textAlign:"center",marginTop:14}}>
                    <button onClick={()=>{setAuthMode(m=>m==="in"?"up":"in");setAuthErr("");}} style={{
                      background:"none",border:"none",color:c.acc,...bd,fontSize:"0.8rem",cursor:"pointer",textDecoration:"underline"
                    }}>{authMode==="in"?"No account? Sign up →":"Have an account? Sign in →"}</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── ACHIEVEMENT TOAST ── */}
        {achToast&&(
          <div style={{
            position:"fixed",bottom:88,left:"50%",transform:"translateX(-50%)",
            background:c.dark?"rgba(20,30,20,0.97)":"rgba(255,252,245,0.97)",
            border:`1.5px solid ${c.acc}`,borderRadius:16,
            padding:"12px 20px",zIndex:200,
            display:"flex",alignItems:"center",gap:12,
            boxShadow:"0 8px 32px rgba(0,0,0,0.35)",
            animation:"slide-up 0.35s ease",
            maxWidth:320,width:"90vw",
          }}>
            <div style={{fontSize:"2rem",lineHeight:1,flexShrink:0}}>{achToast.icon}</div>
            <div>
              <div style={{...bd,fontSize:"0.62rem",color:c.acc,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:1}}>Achievement unlocked</div>
              <div style={{...hd,fontSize:"1rem",color:c.tx,fontWeight:800}}>{achToast.name}</div>
              <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{achToast.nameEn} · {achToast.desc}</div>
            </div>
          </div>
        )}

        {/* ── LEADERBOARD MODAL ── */}
        {showLeaderboard&&(
          <div onClick={e=>{if(e.target===e.currentTarget)setShowLeaderboard(false);}} style={{
            position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:120,
            display:"flex",alignItems:"flex-end",justifyContent:"center",
            backdropFilter:"blur(6px)",
          }}>
            <div style={{
              width:"100%",maxWidth:480,
              background:c.card,borderRadius:"24px 24px 0 0",
              maxHeight:"88vh",overflow:"hidden",display:"flex",flexDirection:"column",
              boxShadow:"0 -8px 40px rgba(0,0,0,0.4)",
            }}>
              {/* Handle */}
              <div style={{display:"flex",justifyContent:"center",paddingTop:10,paddingBottom:4}}>
                <div style={{width:36,height:4,borderRadius:2,background:c.dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"}}/>
              </div>
              {/* Header */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 20px 14px"}}>
                <div>
                  <div style={{...hd,fontSize:"1.3rem",fontWeight:800,color:c.tx}}>Clárbhord <span style={{color:c.gold}}>🏆</span></div>
                  <div style={{...bd,fontSize:"0.68rem",color:c.tx3,marginTop:1}}>Top players by XP · Leaderboard</div>
                </div>
                <button onClick={()=>setShowLeaderboard(false)} style={{background:"none",border:"none",fontSize:"1.4rem",cursor:"pointer",color:c.tx3,lineHeight:1}}>✕</button>
              </div>

              {/* My rank strip */}
              {authUser&&myRankData&&(
                <div style={{
                  margin:"0 16px 12px",padding:"10px 16px",
                  background:c.dark?"rgba(200,150,62,0.12)":"rgba(200,150,62,0.08)",
                  border:`1px solid ${c.gold}40`,borderRadius:14,
                  display:"flex",alignItems:"center",gap:12,
                }}>
                  <div style={{...hd,fontSize:"1.5rem",fontWeight:800,color:c.gold,minWidth:40,textAlign:"center"}}>#{myRankData.rank}</div>
                  <div style={{flex:1}}>
                    <div style={{...bd,fontSize:"0.75rem",color:c.tx,fontWeight:700}}>Your position</div>
                    <div style={{...bd,fontSize:"0.68rem",color:c.tx3}}>{myRankData.xp} XP · out of {myRankData.total} players</div>
                  </div>
                  <div style={{...bd,fontSize:"0.7rem",color:c.tx3,textAlign:"right"}}>
                    {myRankData.rank===1?"Top of the leaderboard! 🥇":myRankData.rank<=3?"Top 3! 🎉":myRankData.rank<=10?"Top 10 👏":"Keep going!"}
                  </div>
                </div>
              )}
              {authUser&&!myRankData&&!leaderLoading&&(
                <div style={{margin:"0 16px 12px",padding:"10px 16px",background:c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",borderRadius:14,...bd,fontSize:"0.75rem",color:c.tx3,textAlign:"center"}}>
                  Play lessons to appear on the leaderboard
                </div>
              )}
              {!authUser&&(
                <div onClick={()=>{setShowLeaderboard(false);setShowAuth(true);}} style={{
                  margin:"0 16px 12px",padding:"10px 16px",
                  background:c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",
                  border:`1px dashed ${c.bd}`,borderRadius:14,
                  ...bd,fontSize:"0.78rem",color:c.acc,textAlign:"center",cursor:"pointer",
                }}>
                  ☁️ Sign in to appear on the leaderboard →
                </div>
              )}

              {/* List */}
              <div style={{overflowY:"auto",flex:1,padding:"0 16px 28px"}}>
                {leaderLoading&&(
                  <div style={{textAlign:"center",padding:"32px 0",...bd,fontSize:"0.8rem",color:c.tx3}}>
                    Loading…
                  </div>
                )}
                {!leaderLoading&&leaderData&&leaderData.length===0&&(
                  <div style={{textAlign:"center",padding:"32px 0",...bd,fontSize:"0.85rem",color:c.tx3}}>
                    No scores yet. Be the first! 🌱
                  </div>
                )}
                {!leaderLoading&&leaderData&&leaderData.map((row,i)=>{
                  const medals=["🥇","🥈","🥉"];
                  const isMe=authUser?.id===row.id;
                  const isPodium=i<3;
                  return(
                    <div key={row.id||i} style={{
                      display:"flex",alignItems:"center",gap:12,
                      padding:"11px 14px",marginBottom:6,borderRadius:14,
                      background:isMe
                        ?(c.dark?"rgba(200,150,62,0.15)":"rgba(200,150,62,0.1)")
                        :(c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.025)"),
                      border:isMe?`1px solid ${c.gold}50`:`1px solid ${c.bd}`,
                      transition:"background 0.2s",
                    }}>
                      {/* Rank */}
                      <div style={{
                        ...bd,fontWeight:800,minWidth:32,textAlign:"center",
                        fontSize:isPodium?"1.4rem":"0.9rem",
                        color:i===0?"#FFD700":i===1?"#C0C0C0":i===2?"#CD7F32":c.tx3,
                      }}>
                        {isPodium?medals[i]:`${i+1}`}
                      </div>
                      {/* Avatar */}
                      <div style={{
                        width:32,height:32,borderRadius:"50%",flexShrink:0,
                        background:isMe?c.acc:(c.dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)"),
                        display:"flex",alignItems:"center",justifyContent:"center",
                        ...bd,fontWeight:800,fontSize:"0.78rem",
                        color:isMe?"#111":c.tx3,
                      }}>
                        {(row.name||"?")[0].toUpperCase()}
                      </div>
                      {/* Info */}
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{...bd,fontSize:"0.83rem",fontWeight:700,color:isMe?c.gold:c.tx,
                          overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                          {row.name||"Gaeilgeoir"}{isMe?" (you)":""}
                        </div>
                        <div style={{...bd,fontSize:"0.65rem",color:c.tx3}}>
                          {row.lessons||0} lessons · {row.streak||0} day streak
                        </div>
                      </div>
                      {/* XP */}
                      <div style={{textAlign:"right",flexShrink:0}}>
                        <div style={{...bd,fontSize:"0.9rem",fontWeight:800,color:isPodium?c.gold:c.tx}}>{(row.xp||0).toLocaleString()}</div>
                        <div style={{...bd,fontSize:"0.6rem",color:c.tx3}}>XP</div>
                      </div>
                    </div>
                  );
                })}
                {!leaderLoading&&leaderData&&leaderData.length>0&&(
                  <div style={{textAlign:"center",marginTop:8,...bd,fontSize:"0.65rem",color:c.tx3,opacity:0.6}}>
                    Earn XP by completing lessons · Updated live
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── CELEBRATIONS ── */}
        {celeb==="day"&&(()=>{
          const prov=CELEB_PROV[(selDay||1)%CELEB_PROV.length];
          return(
          <>
            <Confetti/>
            <div onClick={()=>setCeleb(null)} style={{position:"fixed",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:c.celebBg,zIndex:100,backdropFilter:"blur(10px)"}}>

              {/* Outer glow rings */}
              <div style={{position:"absolute",width:340,height:340,borderRadius:"50%",border:`1px solid ${c.gold}18`,animation:"pulse-ring 2.4s ease-out infinite"}}/>
              <div style={{position:"absolute",width:240,height:240,borderRadius:"50%",border:`1px solid ${c.gold}28`,animation:"pulse-ring 2.4s 0.5s ease-out infinite"}}/>
              <div style={{position:"absolute",width:160,height:160,borderRadius:"50%",border:`1px solid ${c.gold}40`,animation:"pulse-ring 2.4s 1s ease-out infinite"}}/>

              {/* Gold sparkle dots */}
              {[0,45,90,135,180,225,270,315].map((deg,i)=>(
                <div key={i} style={{
                  position:"absolute",
                  width:7,height:7,borderRadius:"50%",
                  background:c.gold,
                  boxShadow:`0 0 10px ${c.gold}`,
                  left:`calc(50% + ${Math.cos(deg*Math.PI/180)*130}px - 3.5px)`,
                  top:`calc(50% + ${Math.sin(deg*Math.PI/180)*130}px - 3.5px)`,
                  animation:`shimmer 1.8s ${i*0.18}s ease-in-out infinite`,
                }}/>
              ))}

              <div style={{textAlign:"center",animation:"pop 0.7s cubic-bezier(0.34,1.56,0.64,1)",padding:"0 28px",position:"relative",zIndex:1,maxWidth:340}}>

                {/* Big shamrock with golden glow */}
                <div style={{
                  fontSize:"6.5rem",marginBottom:10,lineHeight:1,
                  animation:"shamrock-spin 0.9s cubic-bezier(0.34,1.56,0.64,1) both",
                  filter:`drop-shadow(0 0 24px ${c.gold}80)`,
                }}>☘️</div>

                {/* Main headline */}
                <div style={{...hd,fontSize:"3.2rem",fontWeight:900,color:"#fff",lineHeight:1,marginBottom:4,
                  textShadow:`0 0 40px ${c.gold}60`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                  Maith thú!<IrishTip en="Well done! / You're good!"/>
                </div>

                {/* Day + streak row */}
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:18,flexWrap:"wrap"}}>
                  <div style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.18)",borderRadius:22,padding:"7px 20px"}}>
                    <span style={{...hd,fontSize:"1.05rem",color:"#fff"}}>Lá {selDay}</span>
                    <span style={{...bd,fontSize:"0.78rem",color:"rgba(255,255,255,0.45)",marginLeft:7}}>/ 30</span>
                  </div>
                  {st.streak>=2&&(
                    <div style={{background:`${c.gold}20`,border:`1px solid ${c.gold}40`,borderRadius:22,padding:"7px 16px"}}>
                      <span style={{...bd,fontSize:"0.88rem",color:c.gold}}>🔥 {st.streak} lá streak</span>
                    </div>
                  )}
                </div>

                {/* Week milestone */}
                {[7,14,21].includes(selDay)&&(
                  <div style={{background:`${c.gold}18`,border:`1px solid ${c.gold}40`,borderRadius:14,padding:"11px 20px",marginBottom:14}}>
                    <div style={{...hd,fontSize:"1rem",color:c.gold}}>⭐ Week {selDay/7} complete!</div>
                    <div style={{...bd,fontSize:"0.73rem",color:"rgba(255,255,255,0.45)",marginTop:3}}>Quiz coming up…</div>
                  </div>
                )}

                {/* 30 days! */}
                {selDay===CH.length&&(
                  <div style={{background:`${c.gold}20`,border:`1px solid ${c.gold}50`,borderRadius:14,padding:"13px 20px",marginBottom:14}}>
                    <div style={{...hd,fontSize:"1.3rem",color:c.gold,display:"flex",alignItems:"center",gap:4}}>Tá Gaeilge agat! 🏆<IrishTip en="You have Irish!"/></div>
                    <div style={{...bd,fontSize:"0.78rem",color:"rgba(255,255,255,0.55)",marginTop:4}}>All {CH.length} days. You did it.</div>
                  </div>
                )}

                {/* Irish proverb */}
                <div style={{
                  borderTop:"1px solid rgba(255,255,255,0.1)",
                  paddingTop:16,marginTop:4,
                }}>
                  <div style={{...hd,fontSize:"0.95rem",fontStyle:"italic",color:`${c.gold}DD`,lineHeight:1.4,marginBottom:5}}>
                    "{prov.ga}"
                  </div>
                  <div style={{...bd,fontSize:"0.62rem",color:"rgba(255,255,255,0.35)",letterSpacing:"0.04em"}}>
                    {prov.en}
                  </div>
                </div>

                <div style={{...bd,fontSize:"0.65rem",color:"rgba(255,255,255,0.25)",marginTop:22,letterSpacing:"0.08em"}}>tap to continue</div>
              </div>
            </div>
          </>
          );
        })()}
        {celeb==="bonus"&&(
          <div style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",zIndex:100,background:c.card,border:`1px solid ${c.gold}44`,borderRadius:12,padding:"10px 24px",...hd,fontSize:"0.9rem",color:c.gold,animation:"pop 0.3s",boxShadow:c.shadow}}>
            ⭐ Bonus déanta!
          </div>
        )}
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
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,animation:"fadeIn 0.25s ease",paddingBottom:24}}>
        <style>{css}</style>
        <div style={{background:c.hero,padding:"20px 20px 20px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button onClick={()=>setView("home")} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"rgba(255,255,255,0.85)",...bd,fontSize:"0.82rem",fontWeight:600}}>← Baile <span style={{opacity:0.5,fontWeight:400,fontSize:"0.72rem"}}>· Home</span></button>
              <h1 style={{...hd,fontSize:"1.6rem",color:"#fff"}}>📖 Foclóir</h1>
            </div>
            <button onClick={toggle} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,width:34,height:34,cursor:"pointer",color:"#fff",fontSize:"0.9rem"}}>{theme==="coill"?"🌲":theme==="parchment"?"📜":"🌊"}</button>
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
              <button onClick={()=>speak(w.p)} style={{background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:8,width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"0.95rem",opacity:speakLoading?0.5:1}}>
                {speakLoading?"⏳":speakError==="no-voice"?"🔇":"🔊"}
              </button>
            </div>
          ))}
          {filtered.length===0&&<div style={{textAlign:"center",padding:"40px",...bd,color:c.tx3,fontStyle:"italic"}}>Níor aimsíodh aon rud — Nothing found</div>}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // STATS VIEW
  // ═══════════════════════════════
  if(view==="stats"){
    const daysSince=st.started?Math.floor((Date.now()-new Date(st.started).getTime())/(1000*60*60*24)):0;
    const wkColors=["#2D6A4F","#1A5FA0","#8A3A8A","#C2541A"];
    const earned=st.achievements||[];
    const ACHIEVEMENTS=ALL_ACHIEVEMENTS.map(a=>({...a,unlocked:earned.includes(a.id)}));
    return(
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,animation:"fadeIn 0.25s ease",paddingBottom:24}}>
        <style>{css}</style>
        <div style={{background:c.hero,padding:"20px 20px 32px",textAlign:"center"}}>
          <div style={{display:"flex",justifyContent:"flex-start",marginBottom:16}}>
            <button onClick={()=>setView("home")} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"rgba(255,255,255,0.85)",...bd,fontSize:"0.82rem",fontWeight:600}}>← Baile <span style={{opacity:0.5,fontWeight:400,fontSize:"0.72rem"}}>· Home</span></button>
          </div>
          <h1 style={{...hd,fontSize:"1.4rem",fontWeight:800,color:"#fff",marginBottom:4}}>Mo Dhul Chun Cinn</h1>
          <p style={{...bd,fontSize:"0.82rem",color:"rgba(255,255,255,0.65)",marginBottom:20}}>My Progress</p>
          <div style={{position:"relative",width:120,height:120,margin:"0 auto"}}>
            <svg width="120" height="120" viewBox="0 0 120 120" style={{transform:"rotate(-90deg)"}}>
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#fff" strokeWidth="8" strokeDasharray={`${(total/CH.length)*314} 314`} strokeLinecap="round" style={{transition:"stroke-dasharray 1s ease"}}/>
            </svg>
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <span style={{...hd,fontSize:"2rem",fontWeight:800,color:"#fff",lineHeight:1}}>{total}</span>
              <span style={{...bd,fontSize:"0.6rem",color:"rgba(255,255,255,0.65)"}}>of {CH.length}</span>
            </div>
          </div>
        </div>
        <div style={{padding:"20px",maxWidth:500,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
            {[{label:"Days done",val:total,icon:"✅"},{label:"Bonus done",val:st.bonus.length,icon:"⭐"},{label:"Best streak",val:st.best,icon:"🏆"},{label:"Current streak",val:st.streak,icon:"🔥"},{label:"Days since start",val:daysSince,icon:"📅"},{label:"Complete",val:Math.round(total/CH.length*100)+"%",icon:"📊"}].map((s,i)=>(
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
              :total<30?"The first milestone is close. Keep going."
              :total<CH.length?"Almost there. The language is proud of you."
              :<span>Tá Gaeilge agat<IrishTip en="You have Irish!"/>. You did it. 🏆</span>}
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
      </div>
    );
  }

  // ═══════════════════════════════
  // ═══════════════════════════════
  // SETTINGS VIEW
  // ═══════════════════════════════
  if(view==="settings"){
    const PROVERBS=[
      {ga:"Is fearr Gaeilge briste ná Béarla cliste",pr:"iss far GAYL-geh BRISH-teh naw BAYR-lah KLISH-teh",en:"Broken Irish is better than clever English",note:"Your permission to speak imperfectly. Use it."},
      {ga:"Ní neart go cur le chéile",pr:"nee nyart guh kur leh KHAY-leh",en:"There is no strength without unity",note:"The motto carved into the soul of every Irish community."},
      {ga:"Mol an óige agus tiocfaidh sí",pr:"mul un OH-igeh AH-gus CHUK-hee shee",en:"Praise the young and they will flourish",note:"Ireland's philosophy on raising children — encouragement over criticism."},
      {ga:"Ar scáth a chéile a mhaireann na daoine",pr:"er skaw ah KHAY-leh ah WUR-un nuh DEE-neh",en:"People live in one another's shelter",note:"The Irish understanding of community: we survive by sheltering each other."},
      {ga:"Is maith an scáthán súil carad",pr:"iss mah un SKAW-hawn SOO-il KAR-ud",en:"A friend's eye is a good mirror",note:"True friends reflect who we really are — not who we pretend to be."},
      {ga:"Níl aon tinteán mar do thinteán féin",pr:"neel AYN CHIN-chawn mar duh HIN-chawn fayn",en:"There's no fireside like your own fireside",note:"Home is home. The Irish felt this most acutely after centuries of exile."},
      {ga:"Is binn béal ina thost",pr:"iss bin bayl in-uh hust",en:"Silent is the sweetest mouth",note:"Knowing when to stay quiet is wisdom. Not everything needs to be said."},
      {ga:"Ná déan deifir — déan é ceart",pr:"naw jayn JEH-fir — jayn ay kart",en:"Don't hurry — do it right",note:"Irish craftsmanship and storytelling both understood: rushing ruins everything."},
      {ga:"Bíonn an rath i measc na mbó",pr:"BEE-un un rah ih mask nuh moh",en:"Good fortune is among the cows",note:"Wealth was counted in cattle in ancient Ireland. This proverb still rings true today."},
      {ga:"Is minic a bhris béal duine a shrón",pr:"iss MIN-ik ah vrish bayl DIN-eh ah hrohn",en:"Many a time a person's mouth broke their nose",note:"Words have consequences. The Irish knew this better than most."},
      {ga:"Giorraíonn beirt bóthar",pr:"GUR-ee-un berth BOH-hur",en:"Two people shorten a road",note:"Good company makes any journey shorter. Bring someone with you."},
      {ga:"Maireann croí éadrom i bhfad",pr:"MUR-un kree AY-drum ih wad",en:"A light heart lives long",note:"Joy and lightness — the Irish cure for a hard life."},
      {ga:"An rud is annamh is iontach",pr:"un rud iss AN-uv iss UN-tukh",en:"What is rare is wonderful",note:"Scarcity creates wonder. The Irish language itself is proof."},
      {ga:"Ní bhíonn an rath ach mar a mbíonn an smacht",pr:"nee VEE-un un rah akh mar ah MBEE-un un smakht",en:"There is no luck except where there is discipline",note:"Fortune favours the prepared. Always has."},
      {ga:"Is treise tuile ná trí rí",pr:"iss TRESH-eh TIL-eh naw tree ree",en:"A flood is stronger than three kings",note:"Nature always wins. The ancient Irish understood they were guests of the land, not its masters."},
    ];
    const taskCount=st.tasksDone?st.tasksDone.length:0;
    return(
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:24,animation:"fadeIn 0.25s ease"}}>
        <style>{css}</style>
        <div style={{background:c.hero,padding:"20px 20px 20px"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
            <button onClick={()=>setView("home")} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"rgba(255,255,255,0.85)",...bd,fontSize:"0.82rem",fontWeight:600}}>← Baile <span style={{opacity:0.5,fontWeight:400,fontSize:"0.72rem"}}>· Home</span></button>
          </div>
          <h1 style={{...hd,fontSize:"1.8rem",color:"#fff"}}>⚙️ Socruithe <span style={{fontWeight:400,fontSize:"1.1rem",opacity:0.55}}>· Settings</span></h1>
        </div>
        <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px"}}>

          {/* APPEARANCE */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>TÉAMA · APPEARANCE</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0}}>
              {[
                {key:"coill",icon:"🌲",name:"Coill",sub:"Forest"},
                {key:"parchment",icon:"📜",name:"Lámhscríbhinn",sub:"Manuscript"},
                {key:"oiche",icon:"🌊",name:"Farraige",sub:"Atlantic"},
              ].map((t,i)=>(
                <button key={t.key} onClick={async()=>{setTheme(t.key);if(st)await save({...st,theme:t.key});}} style={{
                  border:"none",
                  borderRight:i<2?`1px solid ${c.bd}`:"none",
                  background:theme===t.key?c.acc+"18":"none",
                  padding:"16px 8px",cursor:"pointer",textAlign:"center",
                  outline:"none",
                }}>
                  <div style={{fontSize:"1.5rem",marginBottom:6}}>{t.icon}</div>
                  <div style={{...hd,fontSize:"0.78rem",fontWeight:700,color:theme===t.key?c.acc:c.tx,lineHeight:1.2}}>{t.name}</div>
                  <div style={{...bd,fontSize:"0.6rem",color:c.tx3,marginTop:2}}>{t.sub}</div>
                  {theme===t.key&&<div style={{width:20,height:3,borderRadius:2,background:c.acc,margin:"6px auto 0"}}/>}
                </button>
              ))}
            </div>
          </div>

          {/* COUNTY */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>YOUR COUNTY · CAD AS TÚ?</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            {st.county&&(()=>{const co=COUNTIES.find(x=>x.en===st.county);return co?(
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderBottom:`1px solid ${c.bd}`}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{fontSize:"1.1rem"}}>📍</span>
                  <div>
                    <div style={{...hd,fontSize:"1rem",color:c.tx}}>{co.ga}</div>
                    <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{co.en} · /{co.pr}/</div>
                  </div>
                  {co.g&&<span style={{...bd,fontSize:"0.65rem",color:c.acc,background:c.acc+"15",border:`1px solid ${c.acc}30`,borderRadius:6,padding:"2px 6px"}}>☘️ Gaeltacht</span>}
                </div>
                <button onClick={async()=>await save({...st,county:null})} style={{...bd,fontSize:"0.72rem",color:c.tx3,background:"none",border:`1px solid ${c.bd}`,borderRadius:8,padding:"5px 10px",cursor:"pointer"}}>Clear</button>
              </div>
            ):null;})()}
            <div style={{padding:"10px 12px"}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,maxHeight:200,overflowY:"auto"}}>
                {COUNTIES.map((co,i)=>(
                  <button key={i} onClick={async()=>await save({...st,county:co.en})}
                    style={{background:st.county===co.en?c.acc+"18":c.cardAlt,border:`1px solid ${st.county===co.en?c.acc:c.bd}`,borderRadius:10,padding:"9px 10px",cursor:"pointer",textAlign:"left"}}>
                    <div style={{...hd,fontSize:"0.82rem",fontWeight:700,color:st.county===co.en?c.acc:c.tx,lineHeight:1.2}}>{co.ga}</div>
                    <div style={{...bd,fontSize:"0.6rem",color:c.tx3}}>{co.en}</div>
                  </button>
                ))}
              </div>
              <button onClick={async()=>await save({...st,county:null})}
                style={{width:"100%",marginTop:8,padding:"8px",borderRadius:8,background:"none",border:`1px solid ${c.bd}`,color:c.tx3,...bd,fontSize:"0.72rem",cursor:"pointer"}}>
                {st.county?"Change to: No county":"No county preference"}
              </button>
            </div>
          </div>

          {/* NOTIFICATIONS */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>NOTIFICATIONS</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{fontSize:"1.2rem"}}>🔔</span>
                <div>
                  <div style={{...hd,fontSize:"1rem",color:c.tx}}>Daily reminder</div>
                  <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{st.notifEnabled&&Notification.permission==="granted"?"Every day at 9am ☘️":"Get reminded at 9am every day"}</div>
                </div>
              </div>
              {st.notifEnabled&&Notification.permission==="granted"
                ? <div style={{width:52,height:28,borderRadius:14,background:c.acc,position:"relative",cursor:"pointer"}} onClick={async()=>await save({...st,notifEnabled:false})}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:"#fff",position:"absolute",top:4,left:28,boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}}/>
                  </div>
                : <button onClick={enableNotifs} style={{...bd,fontSize:"0.8rem",fontWeight:700,color:"#fff",background:c.acc,border:"none",borderRadius:10,padding:"7px 14px",cursor:"pointer"}}>
                    Enable
                  </button>
              }
            </div>
            {Notification.permission==="denied"&&(
              <div style={{padding:"10px 18px",borderTop:`1px solid ${c.bd}`,background:c.cardAlt}}>
                <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>Notifications blocked in browser settings. Enable them there first.</div>
              </div>
            )}
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

          {/* SEANFHOCAIL */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>SEANFHOCAIL — IRISH PROVERBS</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,marginBottom:20,overflow:"hidden",boxShadow:c.shadow}}>
            <div style={{height:4,background:`linear-gradient(90deg,${c.acc},${c.gold})`}}/>
            <div style={{padding:"22px 20px 18px"}}>
              <div style={{...hd,fontSize:"1.35rem",fontWeight:700,color:c.acc,fontStyle:"italic",lineHeight:1.35,marginBottom:10}}>
                "{PROVERBS[provIdx].ga}"
              </div>
              <div style={{...bd,fontSize:"0.75rem",color:c.tx3,letterSpacing:"0.04em",marginBottom:14}}>
                /{PROVERBS[provIdx].pr}/
              </div>
              <div style={{borderTop:`1px solid ${c.bd}`,paddingTop:14,marginBottom:12}}>
                <div style={{...hd,fontSize:"1rem",color:c.tx,marginBottom:6}}>
                  {PROVERBS[provIdx].en}
                </div>
                <div style={{...bd,fontSize:"0.8rem",color:c.tx3,lineHeight:1.6,fontStyle:"italic"}}>
                  {PROVERBS[provIdx].note}
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{...bd,fontSize:"0.65rem",color:c.tx3,opacity:0.5}}>{provIdx+1} / {PROVERBS.length}</span>
                <button
                  onClick={()=>setProvIdx(i=>(i+1)%PROVERBS.length)}
                  style={{...bd,fontSize:"0.82rem",fontWeight:700,color:c.acc,background:"none",border:`1px solid ${c.bd}`,borderRadius:8,padding:"7px 16px",cursor:"pointer"}}
                >
                  Ceann eile →
                </button>
              </div>
            </div>
          </div>

          {/* AN GHAEILGE BEO */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>AN GHAEILGE BEO — THE LIVING IRISH</div>

          {/* Big hero stat */}
          <div style={{background:c.hero,borderRadius:16,padding:"22px 20px",marginBottom:10,textAlign:"center",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-10,right:-10,fontSize:"5rem",opacity:0.07,lineHeight:1}}>☘️</div>
            <div style={{...bd,fontSize:"0.65rem",color:"rgba(255,255,255,0.5)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8}}>Can speak Irish today</div>
            <div style={{...hd,fontSize:"2.8rem",fontWeight:800,color:"#fff",lineHeight:1,marginBottom:4}}>1,873,997</div>
            <div style={{...bd,fontSize:"0.72rem",color:"rgba(255,255,255,0.55)"}}>Source: Census Ireland 2022 · ↑ Growing</div>
          </div>

          {/* Stats grid */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
            {[
              {val:"272",label:"Gaelscoileanna",sub:"Irish-medium primary schools",up:true},
              {val:"96,090",label:"Gaeltacht",sub:"People in native Irish areas",up:false},
              {val:"170,000+",label:"Daily speakers",sub:"Use Irish every single day",up:true},
              {val:"100,000+",label:"In Irish education",sub:"Students learning through Irish",up:true},
            ].map((s,i)=>(
              <div key={i} style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:14,padding:"14px 14px 12px",boxShadow:c.shadow}}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4}}>
                  <div style={{...hd,fontSize:"1.35rem",fontWeight:800,color:c.acc,lineHeight:1}}>{s.val}</div>
                  {s.up&&<span style={{...bd,fontSize:"0.6rem",color:"#2D6A4F",background:"#2D6A4F18",borderRadius:6,padding:"2px 5px",fontWeight:700}}>↑</span>}
                </div>
                <div style={{...hd,fontSize:"0.78rem",fontWeight:700,color:c.tx,marginBottom:2}}>{s.label}</div>
                <div style={{...bd,fontSize:"0.65rem",color:c.tx3,lineHeight:1.4}}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Milestones timeline */}
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,padding:"18px 18px",marginBottom:20,boxShadow:c.shadow}}>
            <div style={{...hd,fontSize:"0.78rem",fontWeight:700,color:c.tx,marginBottom:14}}>Moments of revival</div>
            {[
              {year:"2023",text:"Lá Fhéile Bríde becomes Ireland's newest public holiday — a win for Irish culture",icon:"🌸"},
              {year:"2022",text:"Irish Language Act passed in Northern Ireland — Irish recognised for the first time",icon:"📜"},
              {year:"2022",text:"1.87 million people declared Irish language ability in the national census",icon:"📊"},
              {year:"2020",text:"100,000 students enrolled in Irish-medium education for the first time in history",icon:"🏫"},
              {year:"2007",text:"Irish becomes a full official working language of the European Union",icon:"🇪🇺"},
              {year:"1996",text:"TG4 launches — the first Irish-language television channel. Still going strong.",icon:"📺"},
            ].map((m,i,arr)=>(
              <div key={i} style={{display:"flex",gap:12,paddingBottom:i<arr.length-1?14:0,marginBottom:i<arr.length-1?14:0,borderBottom:i<arr.length-1?`1px solid ${c.bd}`:"none"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flexShrink:0}}>
                  <span style={{fontSize:"1rem"}}>{m.icon}</span>
                  <div style={{width:1,flex:1,background:c.bd,display:i<arr.length-1?"block":"none"}}/>
                </div>
                <div style={{paddingTop:2}}>
                  <div style={{...hd,fontSize:"0.7rem",fontWeight:700,color:c.gold,marginBottom:3}}>{m.year}</div>
                  <div style={{...bd,fontSize:"0.78rem",color:c.tx2,lineHeight:1.5}}>{m.text}</div>
                </div>
              </div>
            ))}
            <div style={{...bd,fontSize:"0.6rem",color:c.tx3,opacity:0.45,marginTop:14,textAlign:"right"}}>Source: Census 2022 · Gaelscoil.ie · Oireachtas.ie</div>
          </div>

          {/* ABOUT */}
          <div style={{...hd,fontSize:"0.65rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>ABOUT</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:12,marginBottom:20,padding:"18px",boxShadow:c.shadow,textAlign:"center"}}>
            <div style={{fontSize:"2.5rem",marginBottom:8}}>☘️</div>
            <div style={{...hd,fontSize:"1.3rem",color:c.tx,marginBottom:4}}>Gaeltacht Connect</div>
            <div style={{...bd,fontSize:"0.78rem",color:c.tx3,lineHeight:1.6,marginBottom:12}}>
              60 real-world challenges to bring Irish into your daily life.<br/>Built in Ireland. For Ireland.
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
      </div>
    );
  }

  // ═══════════════════════════════
  // CEOL VIEW (Irish music)
  // ═══════════════════════════════
  if(view==="ceol"){
    return(
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:24,animation:"rise 0.3s ease"}}>
        <style>{css}</style>
        {/* Header */}
        <div style={{background:c.hero,padding:"20px 20px 20px"}}>
          <div style={{maxWidth:520,margin:"0 auto"}}>
            <button onClick={()=>{setOpenSong(null);setView(prevView||"home");}}
              style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"7px 14px",cursor:"pointer",color:"rgba(255,255,255,0.8)",...bd,fontSize:"0.85rem",marginBottom:16}}>
              ← Ar ais <span style={{opacity:0.5,fontWeight:400,fontSize:"0.72rem"}}>· Back</span>
            </button>
            <div style={{...bd,fontSize:"0.7rem",color:"rgba(255,255,255,0.45)",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:6}}>Ceol na hÉireann</div>
            <h1 style={{...hd,fontSize:"1.7rem",fontWeight:700,color:"#fff",margin:"0 0 6px",lineHeight:1.2}}>Irish Music</h1>
            <p style={{...bd,fontSize:"0.82rem",color:"rgba(255,255,255,0.5)",margin:0}}>
              Tap a song · full recording on YouTube
            </p>
          </div>
        </div>

        <div style={{maxWidth:520,margin:"0 auto",padding:"20px 16px",display:"flex",flexDirection:"column",gap:12}}>
          {SONGS.map(song=>{
            const isOpen=openSong===song.id;
            return(
              <div key={song.id} style={{borderRadius:16,overflow:"hidden",border:`1.5px solid ${isOpen?song.color:c.bd}`,background:c.card,transition:"border-color 0.3s"}}>
                {/* Song header */}
                <button onClick={()=>{setOpenSong(isOpen?null:song.id);playSound('open');}}
                  style={{width:"100%",background:isOpen?song.color+"18":"transparent",border:"none",cursor:"pointer",padding:"16px",display:"flex",alignItems:"center",gap:14,textAlign:"left"}}>
                  <div style={{width:52,height:52,borderRadius:12,background:song.color+"CC",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",flexShrink:0}}>
                    {song.emoji}
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{...hd,fontSize:"0.97rem",fontWeight:700,color:isOpen?song.color:c.tx,marginBottom:3,lineHeight:1.2}}>{song.title}</div>
                    <div style={{...bd,fontSize:"0.78rem",color:c.tx3}}>{song.en}</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4,flexShrink:0}}>
                    <div style={{...bd,fontSize:"0.65rem",color:song.color,background:song.color+"18",padding:"3px 8px",borderRadius:20,border:`1px solid ${song.color}44`,whiteSpace:"nowrap"}}>{song.era}</div>
                    <div style={{color:c.tx3,fontSize:"0.7rem"}}>{isOpen?"▲":"▼"}</div>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen&&(
                  <div style={{borderTop:`1px solid ${c.bd}`,animation:"pop 0.2s ease"}}>

                    {/* YouTube — primary CTA */}
                    <div style={{padding:"16px 16px 12px"}}>
                      <a href={`https://www.youtube.com/results?search_query=${song.yt}`} target="_blank" rel="noopener noreferrer"
                        style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,width:"100%",padding:"14px",borderRadius:14,background:"#FF0000",color:"#fff",textDecoration:"none",...hd,fontSize:"1rem",fontWeight:700,boxShadow:"0 4px 16px rgba(255,0,0,0.3)"}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                        Éist ar YouTube · Listen
                      </a>
                    </div>

                    {/* Story */}
                    <div style={{padding:"0 16px 12px"}}>
                      <div style={{...bd,fontSize:"0.82rem",color:c.tx2,lineHeight:1.75}}>{song.story}</div>
                    </div>

                    {/* Lyrics */}
                    <div style={{margin:"0 16px",background:song.color+"14",border:`1px solid ${song.color}33`,borderRadius:12,padding:"14px 16px",marginBottom:12}}>
                      <div style={{...bd,fontSize:"0.68rem",color:song.color,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8}}>Lyrics</div>
                      <div style={{...hd,fontSize:"0.9rem",color:c.tx,whiteSpace:"pre-line",lineHeight:1.65,marginBottom:8}}>{song.irish}</div>
                      <div style={{...bd,fontSize:"0.78rem",color:c.tx3,fontStyle:"italic"}}>{song.translation}</div>
                    </div>

                    {/* Lesson */}
                    <div style={{margin:"0 16px 16px",background:c.tipBg,border:`1px solid ${c.tipBd}`,borderRadius:12,padding:"12px 14px"}}>
                      <div style={{...bd,fontSize:"0.68rem",color:c.tipTx,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6}}>Irish lesson</div>
                      <div style={{...bd,fontSize:"0.83rem",color:c.tipTx,lineHeight:1.5}}>{song.lesson}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div style={{...bd,fontSize:"0.75rem",color:c.tx3,textAlign:"center",padding:"8px 0 4px",lineHeight:1.6,opacity:0.7}}>
            In 1366, Elizabeth I ordered the execution of Irish harpers.<br/>
            The music refused to die. These songs are proof.
          </div>
        </div>
      </div>
    );
  }

  // MAP VIEW (all 30 days)
  // ═══════════════════════════════
  if(view==="guide"){
    const VOWELS=GUIDE_VOWELS, COMBOS=GUIDE_COMBOS, MUTATIONS=GUIDE_MUTATIONS, PATTERNS=GUIDE_PATTERNS;
    return(
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:40,animation:"fadeIn 0.25s ease"}}>
        <style>{css}</style>
        {/* Header */}
        <div style={{background:c.hero,padding:"20px 20px 0"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
            <button onClick={()=>setView("home")} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"rgba(255,255,255,0.85)",...bd,fontSize:"0.82rem",fontWeight:600}}>← Baile <span style={{opacity:0.5,fontWeight:400,fontSize:"0.72rem"}}>· Home</span></button>
          </div>
          <h1 style={{...hd,fontSize:"1.7rem",color:"#fff",marginBottom:4}}>📚 Fuaimeanna & Gramadach</h1>
          <p style={{...bd,fontSize:"0.75rem",color:"rgba(255,255,255,0.55)",marginBottom:0,paddingBottom:0}}>Pronunciation · Grammar · How Irish works</p>
          {/* Tabs */}
          <div style={{display:"flex",gap:0,marginTop:14,borderBottom:"2px solid rgba(255,255,255,0.12)"}}>
            {[{id:"fuaimeanna",label:"Fuaimeanna 🔊",sub:"Sounds"},{id:"gramadach",label:"Gramadach 📖",sub:"Grammar"}].map(t=>(
              <button key={t.id} onClick={()=>setGuideTab(t.id)} style={{
                flex:1,background:"none",border:"none",cursor:"pointer",
                padding:"10px 0 12px",
                borderBottom:`2px solid ${guideTab===t.id?c.gold:"transparent"}`,
                marginBottom:"-2px",
              }}>
                <div style={{...bd,fontSize:"0.78rem",fontWeight:700,color:guideTab===t.id?c.gold:"rgba(255,255,255,0.5)"}}>{t.label}</div>
                <div style={{...bd,fontSize:"0.58rem",color:"rgba(255,255,255,0.35)",marginTop:1}}>{t.sub}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px"}}>

        {guideTab==="fuaimeanna"&&(<>
          {/* Vowels */}
          <div style={{...bd,fontSize:"0.6rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>GUTAÍ · VOWELS</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,overflow:"hidden",marginBottom:20,boxShadow:c.shadow}}>
            {VOWELS.map((v,i)=>(
              <div key={i} style={{
                display:"flex",alignItems:"center",gap:12,padding:"11px 14px",
                borderBottom:i<VOWELS.length-1?`1px solid ${c.bd}`:"none",
              }}>
                <div style={{
                  width:36,height:36,borderRadius:10,flexShrink:0,
                  background:v.spell.includes("á")||v.spell==="é"||v.spell==="í"||v.spell==="ó"||v.spell==="ú"
                    ?(c.dark?"rgba(200,150,62,0.2)":"rgba(200,150,62,0.12)")
                    :(c.dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"),
                  display:"flex",alignItems:"center",justifyContent:"center",
                  ...hd,fontSize:"1.05rem",fontWeight:800,color:c.gold,
                  border:v.spell.length===1&&v.spell===v.spell.toUpperCase()?`none`:"none",
                }}>
                  {v.spell}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{...bd,fontSize:"0.8rem",fontWeight:700,color:c.tx}}>{v.sound}</span>
                    <span style={{...hd,fontSize:"0.72rem",color:c.acc,fontStyle:"italic"}}>{v.ex}</span>
                  </div>
                  <div style={{...bd,fontSize:"0.62rem",color:c.tx3,marginTop:1}}>{v.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Consonant combos */}
          <div style={{...bd,fontSize:"0.6rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>CONSAINI CASTA · TRICKY CONSONANTS</div>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,overflow:"hidden",marginBottom:20,boxShadow:c.shadow}}>
            {COMBOS.map((v,i)=>(
              <div key={i} style={{padding:"12px 14px",borderBottom:i<COMBOS.length-1?`1px solid ${c.bd}`:"none"}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
                  <div style={{
                    background:c.dark?"rgba(200,150,62,0.15)":"rgba(200,150,62,0.1)",
                    border:`1px solid ${c.gold}30`,borderRadius:8,
                    padding:"3px 8px",flexShrink:0,
                    ...hd,fontSize:"0.82rem",fontWeight:800,color:c.gold,
                  }}>{v.spell}</div>
                  <div style={{flex:1}}>
                    <div style={{...bd,fontSize:"0.78rem",fontWeight:700,color:c.tx}}>{v.sound}</div>
                    <div style={{...hd,fontSize:"0.7rem",color:c.acc,fontStyle:"italic",margin:"2px 0"}}>{v.ex}</div>
                    <div style={{...bd,fontSize:"0.62rem",color:c.tx3}}>{v.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mutations */}
          <div style={{...bd,fontSize:"0.6rem",color:c.tx3,letterSpacing:"0.12em",marginBottom:10}}>ATHRUITHE TOSAIGH · INITIAL MUTATIONS</div>
          {MUTATIONS.map((mut,mi)=>(
            <div key={mi} style={{
              background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,
              overflow:"hidden",marginBottom:16,boxShadow:c.shadow,
            }}>
              <div style={{
                padding:"12px 14px 10px",
                background:c.dark?mut.colorLight:`${mut.color}10`,
                borderBottom:`1px solid ${c.bd}`,
              }}>
                <div style={{...hd,fontSize:"0.9rem",fontWeight:800,color:mut.color}}>{mut.title}</div>
                <div style={{...bd,fontSize:"0.7rem",color:c.tx3,marginTop:1}}>{mut.sub}</div>
                <div style={{...bd,fontSize:"0.62rem",color:c.tx2,marginTop:4,fontStyle:"italic"}}>{mut.rule}</div>
              </div>
              {mut.rows.map((r,ri)=>(
                <div key={ri} style={{display:"flex",gap:10,padding:"10px 14px",borderBottom:ri<mut.rows.length-1?`1px solid ${c.bd}`:"none",alignItems:"center"}}>
                  <div style={{minWidth:0,flex:1}}>
                    <span style={{...hd,fontSize:"0.78rem",color:c.tx3,fontStyle:"italic"}}>{r.before}</span>
                    <span style={{...bd,fontSize:"0.65rem",color:c.tx3,margin:"0 4px"}}>→</span>
                    <span style={{...hd,fontSize:"0.85rem",fontWeight:700,color:mut.color,fontStyle:"italic"}}>{r.after}</span>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div style={{...bd,fontSize:"0.6rem",color:c.tx3}}>{r.note}</div>
                    <div style={{...bd,fontSize:"0.58rem",color:c.tx3,opacity:0.6}}>{r.before_pr} → {r.after_pr}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Broad/slender rule */}
          <div style={{
            background:c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",
            border:`1px solid ${c.bd}`,borderRadius:16,padding:"14px 16px",marginBottom:8,
          }}>
            <div style={{...hd,fontSize:"0.88rem",fontWeight:800,color:c.tx,marginBottom:4}}>Caol le Caol, Leathan le Leathan</div>
            <div style={{...bd,fontSize:"0.72rem",color:c.tx2,lineHeight:1.6}}>
              The golden rule of Irish spelling: slender vowels (e, i) must match on both sides of a consonant; broad vowels (a, o, u) must match on both sides. This is why "fiacail" has the same vowels on both sides of each consonant — and why Irish spelling looks strange but is actually logical.
            </div>
            <div style={{marginTop:10,display:"flex",gap:12}}>
              <div style={{flex:1,background:c.dark?"rgba(200,150,62,0.1)":"rgba(200,150,62,0.07)",borderRadius:10,padding:"8px 10px",textAlign:"center"}}>
                <div style={{...bd,fontSize:"0.58rem",color:c.tx3,marginBottom:3}}>LEATHAN · BROAD</div>
                <div style={{...hd,fontSize:"0.9rem",color:c.gold,fontStyle:"italic"}}>a·o·u</div>
                <div style={{...bd,fontSize:"0.58rem",color:c.tx3,marginTop:2}}>mar, bord, dul</div>
              </div>
              <div style={{flex:1,background:c.dark?"rgba(79,172,219,0.1)":"rgba(79,172,219,0.08)",borderRadius:10,padding:"8px 10px",textAlign:"center"}}>
                <div style={{...bd,fontSize:"0.58rem",color:c.tx3,marginBottom:3}}>CAOL · SLENDER</div>
                <div style={{...hd,fontSize:"0.9rem",color:"#4FACDB",fontStyle:"italic"}}>e·i</div>
                <div style={{...bd,fontSize:"0.62rem",color:c.tx3,marginTop:2}}>mise, féin, tine</div>
              </div>
            </div>
          </div>
        </>)}

        {guideTab==="gramadach"&&(<>
          <div style={{...bd,fontSize:"0.7rem",color:c.tx3,lineHeight:1.6,marginBottom:16,padding:"12px 14px",background:c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",borderRadius:12}}>
            Irish word order is <strong style={{color:c.tx}}>VSO — Verb · Subject · Object</strong>. The verb comes first. "I eat bread" = <em style={{color:c.acc}}>"Itheann mé arán"</em> — Eats · I · bread. You'll get used to it fast.
          </div>
          {PATTERNS.map((pat,pi)=>(
            <div key={pi} style={{
              background:c.card,border:`1px solid ${c.bd}`,
              borderRadius:16,overflow:"hidden",marginBottom:16,boxShadow:c.shadow,
            }}>
              <div style={{padding:"12px 14px 10px",background:c.dark?pat.light:`${pat.color}0E`,borderBottom:`1px solid ${c.bd}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:"1.2rem"}}>{pat.icon}</span>
                  <div>
                    <div style={{...hd,fontSize:"0.92rem",fontWeight:800,color:pat.color}}>{pat.title}</div>
                    <div style={{...bd,fontSize:"0.65rem",color:c.tx3,marginTop:1}}>{pat.sub}</div>
                  </div>
                </div>
              </div>
              {pat.rows.map((r,ri)=>(
                <div key={ri} style={{
                  display:"flex",alignItems:"center",gap:10,padding:"10px 14px",
                  borderBottom:ri<pat.rows.length-1?`1px solid ${c.bd}`:"none",
                }}>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{...hd,fontSize:"0.85rem",fontWeight:700,color:c.acc,fontStyle:"italic"}}>{r.irish}</div>
                    <div style={{...bd,fontSize:"0.6rem",color:c.tx3,marginTop:1}}>{r.pr}</div>
                  </div>
                  <div style={{...bd,fontSize:"0.75rem",color:c.tx2,textAlign:"right",flexShrink:0,maxWidth:140}}>{r.en}</div>
                </div>
              ))}
            </div>
          ))}

          <div style={{
            background:c.dark?"rgba(200,150,62,0.08)":"rgba(200,150,62,0.06)",
            border:`1px solid ${c.gold}30`,borderRadius:16,padding:"14px 16px",
          }}>
            <div style={{...hd,fontSize:"0.88rem",fontWeight:800,color:c.gold,marginBottom:6}}>Is fearr Gaeilge briste ná Béarla cliste</div>
            <div style={{...bd,fontSize:"0.72rem",color:c.tx2,lineHeight:1.6}}>Broken Irish is better than clever English. Use these patterns imperfectly, loudly, and often. Correctness comes with use — not study.</div>
          </div>
        </>)}
        </div>
      </div>
    );
  }

  if(view==="map"){
    const isNext=(day)=>day===nextDay&&!st.done.includes(day);
    return (
      <div className="af" style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:24,animation:"rise 0.3s ease"}}>
        <style>{css}</style>

        {/* ── HERO HEADER ── */}
        <div style={{background:c.hero,padding:"20px 20px 28px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button onClick={()=>setView("home")} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"7px 12px",cursor:"pointer",color:"rgba(255,255,255,0.85)",...bd,fontSize:"0.82rem",fontWeight:600}}>← Baile <span style={{opacity:0.5,fontWeight:400,fontSize:"0.72rem"}}>· Home</span></button>
              <h1 style={{...hd,fontSize:"1.3rem",fontWeight:800,color:"#fff",margin:0}}>☘️ 30 Lá <span style={{fontWeight:400,fontSize:"0.9rem",opacity:0.5}}>· Days</span></h1>
            </div>
            <button onClick={toggle} style={{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:10,width:32,height:32,cursor:"pointer",color:"#fff",fontSize:"0.85rem"}}>{theme==="coill"?"🌲":theme==="parchment"?"📜":"🌊"}</button>
          </div>
          {/* Big progress number */}
          <div style={{textAlign:"center",marginBottom:14}}>
            <div style={{...hd,fontSize:"3.2rem",fontWeight:800,color:"#fff",lineHeight:1}}>
              {total}<span style={{fontSize:"1.4rem",fontWeight:400,opacity:0.45}}>/{CH.length}</span>
            </div>
            <div style={{...bd,fontSize:"0.78rem",color:"rgba(255,255,255,0.55)",marginTop:4,fontStyle:"italic"}}>
              {total===0?"Your journey begins with a single word."
              :total<10?"Every word you speak makes the language stronger."
              :total<20?"You're not just learning — you're reviving."
              :total<30?`${30-total} days to Level 1. The old words are proud of you.`
              :total<CH.length?`${CH.length-total} days to go. Almost there.`
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
                      <button key={ch.day} onClick={()=>{setPrevView("map");setSelDay(ch.day);setView("day")}} style={{
                        background:here?`${cc}12`:dn?`${c.acc}08`:c.card,
                        border:here?`2px solid ${cc}`:dn?`1px solid ${c.acc}30`:`1px solid ${c.bd}`,
                        borderRadius:14,padding:0,cursor:lk?"not-allowed":"pointer",
                        opacity:lk?0.25:1,textAlign:"left",width:"100%",
                        boxShadow:here?`0 6px 22px ${cc}40,0 2px 8px rgba(0,0,0,0.1)`:dn?"none":nx?c.shadow:"none",
                        overflow:"hidden",transition:"all 0.2s",
                      }}>
                        <div style={{height:here?4:3,background:here?cc:dn?c.acc:lk?"transparent":cc,opacity:here?1:dn?0.7:0.5}}/>
                        <div style={{padding:"10px 12px 12px"}}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:7}}>
                            <span style={{fontSize:"1.1rem"}}>{lk?"🔒":dn?"✅":CATS[ch.cat]}</span>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2}}>
                              {bn&&<span style={{fontSize:"0.62rem",lineHeight:1}}>⭐</span>}
                              {here&&<span style={{...bd,fontSize:"0.54rem",background:cc,color:"#fff",borderRadius:5,padding:"2px 6px",fontWeight:800,letterSpacing:"0.06em"}}>NEXT</span>}
                            </div>
                          </div>
                          <div style={{...bd,fontSize:"0.58rem",color:here?cc:c.tx3,letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:3,fontWeight:here?700:400}}>Lá {ch.day}</div>
                          <div style={{...hd,fontSize:"0.86rem",fontWeight:700,color:here?cc:dn?c.acc:nx?c.tx:c.tx3,lineHeight:1.2,marginBottom:2}}>{ch.t}</div>
                          <div style={{...bd,fontSize:"0.67rem",color:c.tx3,fontStyle:"italic",lineHeight:1.3}}>{ch.e}</div>
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
          <div style={{height:16}}/>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // HOME VIEW — App menu
  // ═══════════════════════════════
  const today = new Date();
  const dailyC = getDailyChallenge(DAILY_POOL, today);
  const wod = getWordOfDay(VOCAB, today);
  const dailyDoneToday = st?.dailyLog?.[todayKey()] || false;
  const missionLesson = !!(st?.dailyLog?.[todayKey()+"_lesson"]);
  const missionFlash  = !!(st?.dailyLog?.[todayKey()+"_flash"]);
  const missionQuiz   = !!(st?.dailyLog?.[todayKey()+"_vq"]);
  const missionFocail = st?.focailDate===todayKey()&&(st?.focailDone==="won"||st?.focailDone==="lost");
  const missionsToday = [missionLesson, missionFlash, missionQuiz, missionFocail].filter(Boolean).length;
  const xp = st?.xp || 0;
  const level = Math.floor(xp / 100) + 1;
  const levelPct = xp % 100;


  const todayCh = CH[nextDay-1];
  const _st = todayCh?.story || "";
  const _two = _st.split(". ").slice(0,2).join(". ")+".";
  const storyFull = _two.length > 210 ? _st.split(". ")[0]+"…" : _two;

  return(
    <div className="af" style={{minHeight:"100vh",background:c.dark?"#071508":c.bg,color:c.tx,display:"flex",flexDirection:"column"}}>
      <style>{css}</style>

      {/* ── TOP BAR ── */}
      <div style={{display:"flex",alignItems:"center",padding:"16px 20px 0",zIndex:10,flexShrink:0}}>
        <span style={{fontSize:"1rem",marginRight:6}}>☘️</span>
        <span style={{...hd,fontSize:"0.9rem",fontWeight:800,color:c.dark?"rgba(240,237,228,0.8)":c.tx,letterSpacing:"-0.01em"}}>Gaeltacht</span>
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
          {st?.streak>=1&&(
            <div style={{display:"flex",alignItems:"center",gap:3,
              background:"rgba(255,120,0,0.13)",border:"1px solid rgba(255,120,0,0.28)",
              borderRadius:20,padding:"3px 9px"}}>
              <span style={{fontSize:"0.88rem"}}>🔥</span>
              <span style={{...bd,fontSize:"0.75rem",fontWeight:800,color:"#FF7A00"}}>{st.streak}</span>
            </div>
          )}
          <button onClick={async()=>{
            setShowLeaderboard(true);
            if(!leaderData){
              setLeaderLoading(true);
              const [rows,rank]=await Promise.all([
                sbLeaderboard(),
                authUser?.id?sbMyRank(authUser.id):Promise.resolve(null),
              ]);
              setLeaderData(rows);setMyRankData(rank);setLeaderLoading(false);
            }
          }} style={{background:"none",border:"none",fontSize:"1.05rem",cursor:"pointer",padding:4,lineHeight:1,color:"rgba(200,150,62,0.75)"}}>🏆</button>
          <button onClick={toggle} style={{background:"none",border:"none",fontSize:"1rem",cursor:"pointer",padding:4,lineHeight:1,opacity:0.6}}>
            {theme==="coill"?"🌲":theme==="parchment"?"📜":"🌊"}
          </button>
          <button onClick={()=>setShowAuth(true)} style={{background:"none",border:"none",cursor:"pointer",padding:4,lineHeight:1}}>
            {authUser
              ? <span style={{display:"flex",alignItems:"center",justifyContent:"center",width:22,height:22,borderRadius:"50%",
                  background:"rgba(200,150,62,0.85)",color:"#111",...bd,fontWeight:800,fontSize:"0.65rem"}}>
                  {authUser.email?.[0]?.toUpperCase()||"?"}
                </span>
              : <span style={{fontSize:"1rem",opacity:0.45}}>☁️</span>
            }
          </button>
          <button onClick={()=>setView("settings")} style={{background:"none",border:"none",fontSize:"1rem",cursor:"pointer",padding:4,lineHeight:1,opacity:0.45}}>⚙️</button>
        </div>
      </div>

      {/* ── PHRASE STAGE ── */}
      <div style={{
        flex:1,display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",
        background:c.dark
          ? `radial-gradient(ellipse 110% 55% at 50% -5%, rgba(200,150,62,0.11) 0%, transparent 58%),
             radial-gradient(ellipse 60% 45% at 8% 92%, rgba(45,106,79,0.16) 0%, transparent 52%),
             radial-gradient(ellipse 45% 35% at 92% 78%, rgba(200,150,62,0.07) 0%, transparent 45%),
             linear-gradient(175deg, #071208 0%, #0D2018 40%, #091612 72%, #060e08 100%)`
          : `radial-gradient(ellipse 100% 50% at 50% 0%, rgba(27,67,50,0.06) 0%, transparent 55%),
             linear-gradient(175deg, ${c.bg2||c.bg} 0%, ${c.bg} 100%)`,
      }}>
        {/* Subtle diamond texture overlay */}
        <div style={{
          position:"absolute",inset:0,pointerEvents:"none",opacity:c.dark?1:0.4,
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M22 2 L42 22 L22 42 L2 22 Z' fill='none' stroke='rgba(200,150,62,0.055)' stroke-width='0.6'/%3E%3C/svg%3E")`,
          backgroundSize:"44px 44px",
        }}/>

        {/* Slow breathing top glow */}
        <div style={{
          position:"absolute",width:"70%",height:"35%",
          background:"radial-gradient(ellipse, rgba(200,150,62,0.07) 0%, transparent 70%)",
          top:0,left:"15%",pointerEvents:"none",
          animation:"slowGlow 5s ease-in-out infinite",
        }}/>

        {/* Content */}
        <div style={{flex:1,display:"flex",flexDirection:"column",padding:"18px 26px 20px",position:"relative",zIndex:1}}>

          {/* Day badge */}
          <div style={{
            alignSelf:"center",
            ...bd,fontSize:"0.48rem",letterSpacing:"0.28em",textTransform:"uppercase",
            color:c.dark?"rgba(200,150,62,0.38)":c.tx3,
            border:`1px solid ${c.dark?"rgba(200,150,62,0.12)":c.bd}`,
            borderRadius:20,padding:"4px 12px",marginBottom:18,
          }}>
            {allDone?"Tá Gaeilge agat 🏆":`Lá ${nextDay} · ${todayCh?.e||""}`}
          </div>

          {/* ── THE STORY ── */}
          <div style={{marginBottom:20}}>
            <div style={{
              ...bd,fontSize:"0.43rem",color:c.dark?"rgba(200,150,62,0.35)":"rgba(27,67,50,0.5)",
              letterSpacing:"0.24em",textTransform:"uppercase",marginBottom:10,
            }}>Stair · History</div>
            <p style={{
              ...hd,
              fontSize:"0.87rem",
              color:c.dark?"rgba(240,237,228,0.68)":c.tx2,
              lineHeight:1.82,
              fontStyle:"italic",
              margin:0,
            }}>
              {storyFull}
            </p>
          </div>

          {/* Divider */}
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{flex:1,height:"1px",background:c.dark?"linear-gradient(90deg,transparent,rgba(200,150,62,0.18))":"linear-gradient(90deg,transparent,rgba(27,67,50,0.15))"}}/>
            <div style={{fontSize:"0.6rem",color:c.dark?"rgba(200,150,62,0.28)":"rgba(27,67,50,0.3)",letterSpacing:"0.15em"}}>✦ ✦ ✦</div>
            <div style={{flex:1,height:"1px",background:c.dark?"linear-gradient(90deg,rgba(200,150,62,0.18),transparent)":"linear-gradient(90deg,rgba(27,67,50,0.15),transparent)"}}/>
          </div>

          {/* ── THE PHRASE ── */}
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
            <div style={{
              ...bd,fontSize:"0.43rem",
              color:c.dark?"rgba(200,150,62,0.35)":"rgba(27,67,50,0.5)",
              letterSpacing:"0.24em",textTransform:"uppercase",marginBottom:14,
            }}>Frása an Lae</div>

            {/* Phrase glow backdrop */}
            <div style={{position:"relative",display:"inline-block"}}>
              <div style={{
                position:"absolute",inset:"-20px -30px",
                background:"radial-gradient(ellipse, rgba(200,150,62,0.1) 0%, transparent 70%)",
                pointerEvents:"none",
              }}/>
              <div style={{
                ...hd,
                fontSize:"clamp(2.4rem,10vw,3.5rem)",
                fontWeight:900,
                color:c.dark?"#C8963E":c.acc,
                fontStyle:"italic",
                lineHeight:1.05,
                letterSpacing:"-0.025em",
                textShadow:c.dark?"0 0 60px rgba(200,150,62,0.18), 0 4px 20px rgba(0,0,0,0.4)":"none",
                position:"relative",
              }}>
                {allDone?"Tá Gaeilge agat!":todayCh?.p}
              </div>
            </div>

            <div style={{
              ...bd,fontSize:"0.78rem",
              color:c.dark?"rgba(200,150,62,0.38)":c.tx3,
              marginTop:10,letterSpacing:"0.04em",
              fontStyle:"italic",
            }}>
              {allDone?"You have Irish":todayCh?.m}
            </div>
          </div>

          {/* ── BOTTOM ── */}
          <div style={{display:"flex",flexDirection:"column",gap:11,marginTop:16}}>
            {/* XP bar */}
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{...bd,fontSize:"0.54rem",fontWeight:800,color:c.dark?"rgba(200,150,62,0.38)":c.tx3,whiteSpace:"nowrap"}}>L{level}</span>
              <div style={{flex:1,height:2,background:c.dark?"rgba(255,255,255,0.07)":c.progBg,borderRadius:10,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${levelPct}%`,background:c.progFill,borderRadius:10,transition:"width 0.6s ease"}}/>
              </div>
              <span style={{...bd,fontSize:"0.54rem",color:c.dark?"rgba(240,237,228,0.22)":c.tx3,whiteSpace:"nowrap"}}>{xp} XP</span>
            </div>

            {/* Mission pills */}
            <div style={{display:"flex",gap:5,justifyContent:"center"}}>
              {[
                {l:"Ceacht",done:missionLesson,a:()=>{haptic();setPrevView("home");setSelDay(nextDay);setView("day");}},
                {l:"Focail",done:missionFocail,a:()=>{haptic();setView("focail");}},
                {l:"Flash",done:missionFlash,a:()=>{haptic();startFlash();}},
                {l:"Quiz",done:missionQuiz,a:()=>{haptic();startDailyQuiz();}},
              ].map(({l,done,a},i)=>(
                <button key={i} onClick={a} style={{
                  padding:"5px 10px",
                  border:`1px solid ${done?(c.dark?"rgba(111,207,151,0.35)":c.doneBd):(c.dark?"rgba(255,255,255,0.09)":c.bd)}`,
                  borderRadius:20,cursor:"pointer",
                  background:done?(c.dark?"rgba(111,207,151,0.09)":c.doneBg):"transparent",
                  ...bd,fontSize:"0.61rem",fontWeight:700,
                  color:done?(c.dark?"#6FCF97":c.doneTx):(c.dark?"rgba(240,237,228,0.32)":c.tx3),
                }}>
                  {done?"✓ ":""}{l}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button onClick={()=>{haptic([10,20,10]);setPrevView("home");
              if(allDone){setView("map");}else{setSelDay(nextDay);setView("day");}
            }} style={{
              width:"100%",padding:"17px",border:"none",cursor:"pointer",
              background:missionLesson
                ?(c.dark?"rgba(111,207,151,0.13)":"rgba(27,67,50,0.07)")
                :"linear-gradient(135deg,#2D6A4F 0%,#1B4332 100%)",
              borderRadius:14,
              display:"flex",alignItems:"center",justifyContent:"center",gap:10,
              animation:missionLesson?"none":"breathe 2.4s ease infinite",
              boxShadow:missionLesson?"none":"0 4px 22px rgba(27,67,50,0.6)",
              outline:missionLesson?`1px solid ${c.doneBd}`:"none",
            }}>
              <span style={{...bd,fontSize:"1rem",fontWeight:800,letterSpacing:"0.01em",
                color:missionLesson?c.doneTx:"#fff"}}>
                {missionLesson?"Léigh arís":"Lean ar aghaidh"}
              </span>
              {!missionLesson&&<span style={{fontSize:"1rem",color:"rgba(255,255,255,0.5)"}}>→</span>}
            </button>
          </div>
        </div>
      </div>

      {/* ── BOTTOM TAB BAR ── */}
      <div style={{
        display:"flex",flexShrink:0,
        background:c.dark?"rgba(5,10,6,0.97)":c.nav,
        borderTop:`1px solid ${c.navBd}`,
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        paddingBottom:"env(safe-area-inset-bottom,0px)",
      }}>
        {[
          {e:"☘️",l:"Baile",active:true,a:null},
          {e:"🟩",l:"Focail",active:false,a:()=>{haptic();setView("focail");}},
          {e:"🗺️",l:"Léarscáil",active:false,a:()=>{haptic();setPrevView("home");setView("map");}},
          {e:"📖",l:"Foclóir",active:false,a:()=>{haptic();setPrevView("home");setView("dict");}},
          {e:"☰",l:"Níos mó",active:false,a:()=>{haptic();setView("stats");}},
        ].map(({e,l,active,a},i)=>(
          <button key={i} onClick={a||undefined} style={{
            flex:1,padding:"10px 4px 10px",border:"none",
            cursor:a?"pointer":"default",background:"transparent",
            display:"flex",flexDirection:"column",alignItems:"center",gap:3,
          }}>
            <span style={{fontSize:"1.2rem",lineHeight:1}}>{e}</span>
            <span style={{...bd,fontSize:"0.52rem",fontWeight:active?800:400,
              color:active?c.acc:(c.dark?"rgba(240,237,228,0.28)":c.tx3),
              letterSpacing:"0.02em"}}>{l}</span>
          </button>
        ))}
      </div>

      {/* ── AUTH MODAL ── */}
      {showAuth&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
          onClick={e=>{if(e.target===e.currentTarget){setShowAuth(false);setAuthErr("");}}}>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:"24px 24px 0 0",padding:"28px 24px 40px",width:"100%",maxWidth:480,animation:"slide-up 0.3s ease"}}>
            {authUser?(
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"2.5rem",marginBottom:8}}>☁️</div>
                <div style={{...hd,fontSize:"1.1rem",color:c.acc,marginBottom:4}}>Synced to cloud</div>
                <div style={{...bd,fontSize:"0.8rem",color:c.tx3,marginBottom:24}}>{authUser.email}</div>
                <div style={{background:c.dark?"rgba(34,197,94,0.1)":"rgba(27,67,50,0.05)",border:`1px solid ${c.doneBd}`,borderRadius:12,padding:"12px 16px",marginBottom:20,textAlign:"left"}}>
                  <div style={{...bd,fontSize:"0.8rem",color:c.doneTx,fontWeight:700,marginBottom:4}}>✓ Your progress is safe</div>
                  <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>XP, streaks, Focail history and achievements sync automatically.</div>
                </div>
                <button onClick={async()=>{await sbSignOut();setAuthUser(null);setShowAuth(false);setLeaderData(null);setMyRankData(null);}} style={{width:"100%",padding:"12px",background:"none",border:`1px solid ${c.bd}`,borderRadius:12,color:c.tx3,...bd,fontSize:"0.85rem",cursor:"pointer"}}>Sign out</button>
              </div>
            ):(
              <div>
                <div style={{...hd,fontSize:"1.2rem",color:c.tx,marginBottom:4,textAlign:"center"}}>{authMode==="in"?"Welcome back":"Create account"}</div>
                <div style={{...bd,fontSize:"0.75rem",color:c.tx3,marginBottom:20,textAlign:"center"}}>{authMode==="in"?"Sign in to sync your progress across devices":"Save your progress to the cloud"}</div>
                <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
                  <input type="email" placeholder="Email" value={authEmail} onChange={e=>setAuthEmail(e.target.value)}
                    style={{padding:"13px 14px",borderRadius:10,border:`1.5px solid ${authErr?"#ef4444":c.bd}`,background:c.cardAlt,color:c.tx,...bd,fontSize:"0.9rem",outline:"none"}}/>
                  <input type="password" placeholder="Password (min 6 chars)" value={authPwd} onChange={e=>setAuthPwd(e.target.value)}
                    onKeyDown={e=>e.key==="Enter"&&document.getElementById("auth-submit-home")?.click()}
                    style={{padding:"13px 14px",borderRadius:10,border:`1.5px solid ${authErr?"#ef4444":c.bd}`,background:c.cardAlt,color:c.tx,...bd,fontSize:"0.9rem",outline:"none"}}/>
                </div>
                {authErr&&<div style={{...bd,fontSize:"0.75rem",color:"#ef4444",marginBottom:10,textAlign:"center"}}>{authErr}</div>}
                <button id="auth-submit-home" disabled={authLoading||!authEmail||authPwd.length<6}
                  onClick={async()=>{
                    setAuthLoading(true);setAuthErr("");
                    const d=await sbAuth(authEmail,authPwd,authMode==="up");
                    setAuthLoading(false);
                    if(d.error){setAuthErr(d.error.message||"Something went wrong");}
                    else{
                      const user=await sbGetUser();
                      if(user){setAuthUser(user);const cloud=user.user_metadata?.progress;if(cloud&&st){const merged=mergeProgress(st,cloud);await save(merged);}else if(st){sbSyncProgress(st);}}
                      setShowAuth(false);setAuthEmail("");setAuthPwd("");
                    }
                  }} style={{width:"100%",padding:"14px",borderRadius:12,border:"none",
                    background:authLoading||!authEmail||authPwd.length<6?c.bd:c.acc,
                    color:"#111",...bd,fontWeight:800,fontSize:"0.95rem",
                    cursor:authLoading||!authEmail||authPwd.length<6?"not-allowed":"pointer"}}>
                  {authLoading?"...":(authMode==="in"?"Sign in · Logáil isteach":"Create account · Cruthaigh cuntas")}
                </button>
                <div style={{textAlign:"center",marginTop:14}}>
                  <button onClick={()=>{setAuthMode(m=>m==="in"?"up":"in");setAuthErr("");}} style={{background:"none",border:"none",color:c.acc,...bd,fontSize:"0.8rem",cursor:"pointer",textDecoration:"underline"}}>
                    {authMode==="in"?"No account? Sign up →":"Have an account? Sign in →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── ACHIEVEMENT TOAST ── */}
      {achToast&&(
        <div style={{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",
          background:c.dark?"rgba(20,30,20,0.97)":"rgba(255,252,245,0.97)",
          border:`1.5px solid ${c.acc}`,borderRadius:16,padding:"12px 20px",zIndex:200,
          display:"flex",alignItems:"center",gap:12,
          boxShadow:"0 8px 32px rgba(0,0,0,0.35)",animation:"slide-up 0.35s ease",
          maxWidth:320,width:"90vw"}}>
          <div style={{fontSize:"2rem",lineHeight:1,flexShrink:0}}>{achToast.icon}</div>
          <div>
            <div style={{...bd,fontSize:"0.62rem",color:c.acc,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:1}}>Achievement unlocked</div>
            <div style={{...hd,fontSize:"1rem",color:c.tx,fontWeight:800}}>{achToast.name}</div>
            <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{achToast.nameEn} · {achToast.desc}</div>
          </div>
        </div>
      )}

      {/* ── LEADERBOARD MODAL ── */}
      {showLeaderboard&&(
        <div onClick={e=>{if(e.target===e.currentTarget)setShowLeaderboard(false);}} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:120,display:"flex",alignItems:"flex-end",justifyContent:"center",backdropFilter:"blur(6px)"}}>
          <div style={{width:"100%",maxWidth:480,background:c.card,borderRadius:"24px 24px 0 0",maxHeight:"88vh",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 -8px 40px rgba(0,0,0,0.4)"}}>
            <div style={{display:"flex",justifyContent:"center",paddingTop:10,paddingBottom:4}}>
              <div style={{width:36,height:4,borderRadius:2,background:c.dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"}}/>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 20px 14px"}}>
              <div>
                <div style={{...hd,fontSize:"1.3rem",fontWeight:800,color:c.tx}}>Clárbhord <span style={{color:c.gold}}>🏆</span></div>
                <div style={{...bd,fontSize:"0.68rem",color:c.tx3,marginTop:1}}>Top players by XP</div>
              </div>
              <button onClick={()=>setShowLeaderboard(false)} style={{background:"none",border:"none",fontSize:"1.4rem",cursor:"pointer",color:c.tx3,lineHeight:1}}>✕</button>
            </div>
            {authUser&&myRankData&&(
              <div style={{margin:"0 16px 12px",padding:"10px 16px",background:c.dark?"rgba(200,150,62,0.12)":"rgba(200,150,62,0.08)",border:`1px solid ${c.gold}40`,borderRadius:14,display:"flex",alignItems:"center",gap:12}}>
                <div style={{...hd,fontSize:"1.5rem",fontWeight:800,color:c.gold,minWidth:40,textAlign:"center"}}>#{myRankData.rank}</div>
                <div style={{flex:1}}>
                  <div style={{...bd,fontSize:"0.75rem",color:c.tx,fontWeight:700}}>Your position</div>
                  <div style={{...bd,fontSize:"0.68rem",color:c.tx3}}>{myRankData.xp} XP · out of {myRankData.total} players</div>
                </div>
              </div>
            )}
            {!authUser&&(
              <div onClick={()=>{setShowLeaderboard(false);setShowAuth(true);}} style={{margin:"0 16px 12px",padding:"10px 16px",background:c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)",border:`1px dashed ${c.bd}`,borderRadius:14,...bd,fontSize:"0.78rem",color:c.acc,textAlign:"center",cursor:"pointer"}}>
                ☁️ Sign in to appear on the leaderboard →
              </div>
            )}
            <div style={{overflowY:"auto",flex:1,padding:"0 16px 28px"}}>
              {leaderLoading&&<div style={{textAlign:"center",padding:"32px 0",...bd,fontSize:"0.8rem",color:c.tx3}}>Loading…</div>}
              {!leaderLoading&&leaderData&&leaderData.map((row,i)=>{
                const medals=["🥇","🥈","🥉"];
                const isMe=authUser?.id===row.id;
                const isPodium=i<3;
                return(
                  <div key={row.id||i} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",marginBottom:6,borderRadius:14,
                    background:isMe?(c.dark?"rgba(200,150,62,0.15)":"rgba(200,150,62,0.1)"):(c.dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.025)"),
                    border:isMe?`1px solid ${c.gold}50`:`1px solid ${c.bd}`}}>
                    <div style={{...bd,fontWeight:800,minWidth:32,textAlign:"center",fontSize:isPodium?"1.4rem":"0.9rem",color:i===0?"#FFD700":i===1?"#C0C0C0":i===2?"#CD7F32":c.tx3}}>
                      {isPodium?medals[i]:`${i+1}`}
                    </div>
                    <div style={{width:32,height:32,borderRadius:"50%",flexShrink:0,background:isMe?c.acc:(c.dark?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)"),display:"flex",alignItems:"center",justifyContent:"center",...bd,fontWeight:800,fontSize:"0.78rem",color:isMe?"#111":c.tx3}}>
                      {(row.name||"?")[0].toUpperCase()}
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{...bd,fontSize:"0.83rem",fontWeight:700,color:isMe?c.gold:c.tx,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{row.name||"Gaeilgeoir"}{isMe?" (you)":""}</div>
                      <div style={{...bd,fontSize:"0.65rem",color:c.tx3}}>{row.lessons||0} lessons · {row.streak||0} day streak</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{...bd,fontSize:"0.9rem",fontWeight:800,color:isPodium?c.gold:c.tx}}>{(row.xp||0).toLocaleString()}</div>
                      <div style={{...bd,fontSize:"0.6rem",color:c.tx3}}>XP</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PWA install */}
      {installPrompt&&!installed&&(
        <div style={{position:"fixed",bottom:68,left:"50%",transform:"translateX(-50%)",zIndex:50,maxWidth:440,width:"calc(100% - 32px)"}}>
          <button onClick={async()=>{installPrompt.prompt();const{outcome}=await installPrompt.userChoice;if(outcome==="accepted"){setInstalled(true);setInstallPrompt(null);}}}
            style={{width:"100%",padding:"11px 16px",borderRadius:14,
              background:c.dark?"rgba(9,21,8,0.97)":c.card,
              border:`1px solid ${c.bd}`,color:c.tx3,display:"flex",alignItems:"center",gap:10,cursor:"pointer",backdropFilter:"blur(10px)"}}>
            <span>📲</span>
            <span style={{...bd,fontSize:"0.8rem"}}>Suiteáil · Install app</span>
            <span style={{marginLeft:"auto",opacity:0.4}}>›</span>
          </button>
        </div>
      )}
    </div>
  );
}
