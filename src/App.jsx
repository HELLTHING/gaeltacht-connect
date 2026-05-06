import { useState, useEffect, useCallback } from "react";
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

// Share image generation — 1080×1080 Instagram-ready card
const genShareImage = (day, total, streak) => {
  const cv = document.createElement("canvas"); cv.width=1080; cv.height=1080;
  const x = cv.getContext("2d");
  const ch = CH[day-1];

  // Deep green bg
  x.fillStyle="#0D2318"; x.fillRect(0,0,1080,1080);

  // Diagonal texture
  x.globalAlpha=0.03; x.strokeStyle="#6FCF97"; x.lineWidth=1;
  for(let i=-1080;i<2160;i+=28){x.beginPath();x.moveTo(i,0);x.lineTo(i+1080,1080);x.stroke();}
  x.globalAlpha=1;

  // Circle accents
  x.globalAlpha=0.07; x.fillStyle="#40916C";
  x.beginPath(); x.arc(950,130,340,0,Math.PI*2); x.fill();
  x.globalAlpha=0.04;
  x.beginPath(); x.arc(130,950,260,0,Math.PI*2); x.fill();
  x.globalAlpha=1;

  // Top gradient bar
  const grad=x.createLinearGradient(0,0,1080,0);
  grad.addColorStop(0,"#2D6A4F"); grad.addColorStop(1,"#C9A22700");
  x.fillStyle=grad; x.fillRect(0,0,1080,5);

  // Brand
  x.fillStyle="#40916C99"; x.font="600 28px sans-serif"; x.textAlign="left";
  x.fillText("☘  GAELTACHT CONNECT",64,76);

  // Big day number
  x.fillStyle="#FFFFFF"; x.font="bold 160px serif"; x.textAlign="left";
  x.fillText(`La ${day}`,60,280);
  // Accent on "a" — gold dot
  x.fillStyle="#C9A227"; x.font="bold 60px serif";
  x.fillText("á",60+x.measureText("L").width,280);

  x.fillStyle="#40916C"; x.font="500 36px sans-serif"; x.textAlign="left";
  x.fillText(`of 30  ·  ${total} days done`,64,330);

  // Divider
  x.strokeStyle="#2D6A4F44"; x.lineWidth=2;
  x.beginPath(); x.moveTo(64,372); x.lineTo(1016,372); x.stroke();

  // Phrase — centered, gold, word wrap
  x.fillStyle="#C9A227"; x.font="italic bold 58px serif"; x.textAlign="center";
  const maxW=900; const words=ch.p.split(" "); let line=""; let py=490;
  for(const w of words){
    const test=line?line+" "+w:w;
    if(x.measureText(test).width>maxW&&line){x.fillText(line,540,py);line=w;py+=74;}
    else line=test;
  }
  x.fillText(line,540,py);

  // Translation
  x.fillStyle="#E8E4D899"; x.font="400 36px sans-serif"; x.textAlign="center";
  x.fillText(`"${ch.m}"`,540,py+60);

  // Streak badge
  if(streak>=2){
    x.fillStyle="#C9A22718";
    x.beginPath(); x.roundRect(64,py+100,240,72,14); x.fill();
    x.strokeStyle="#C9A22744"; x.lineWidth=1; x.stroke();
    x.fillStyle="#C9A227"; x.font="bold 36px sans-serif"; x.textAlign="center";
    x.fillText(`🔥 ${streak} lá as a chéile`,64+120,py+146);
  }

  // Bottom tag
  x.fillStyle="#40916C55"; x.font="26px sans-serif"; x.textAlign="center";
  x.fillText("#GaeltachtConnect  ·  #Gaeilge  ·  #IrishLanguage",540,1036);

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

// Static audio files (espeak-ng fallback, replaced by abair.ie via fetch-audio.mjs)
const _STATIC_AUDIO = new Map([
  ["Dia dhuit!","/audio/day-01.wav"],
  ["Go raibh maith agat!","/audio/day-02.wav"],
  ["Slán go fóill!","/audio/day-03.wav"],
  ["Conas atá tú?","/audio/day-04.wav"],
  ["Maidin mhaith!","/audio/day-05.wav"],
  ["Le do thoil","/audio/day-06.wav"],
  ["Dia dhuit → Conas atá tú? → Go raibh maith agat → Slán!","/audio/day-07.wav"],
  ["Caife, le do thoil","/audio/day-08.wav"],
  ["Cé mhéad?","/audio/day-09.wav"],
  ["Tá ocras orm","/audio/day-10.wav"],
  ["An bhfuil bainne agaibh?","/audio/day-11.wav"],
  ["Is maith liom caife!","/audio/day-12.wav"],
  ["Tá sé fuar inniu!","/audio/day-13.wav"],
  ["Weeks 1 & 2 combined","/audio/day-14.wav"],
  ["Is mise ___. Cad is ainm duit?","/audio/day-15.wav"],
  ["Cá bhfuil an leithreas?","/audio/day-16.wav"],
  ["Is as ___ mé","/audio/day-17.wav"],
  ["Mo mháthair / m'athair / mo pháiste","/audio/day-18.wav"],
  ["Dearg, glas, gorm, bán, dubh","/audio/day-19.wav"],
  ["A haon → a deich","/audio/day-20.wav"],
  ["Tá sé go hálainn. Feicim crann glas.","/audio/day-21.wav"],
  ["Is breá liom an ceol seo!","/audio/day-22.wav"],
  ["Is fearr Gaeilge briste ná Béarla cliste","/audio/day-23.wav"],
  ["Tuigim! / Ní thuigim.","/audio/day-24.wav"],
  ["Lá maith agam inniu!","/audio/day-25.wav"],
  ["Pionta, le do thoil!","/audio/day-26.wav"],
  ["An bhfuil Gaeilge agat?","/audio/day-27.wav"],
  ["Baile, Cill, Dún, Áth, Lios","/audio/day-28.wav"],
  ["Any 3 phrases from this month!","/audio/day-29.wav"],
  ["Tá Gaeilge agam. Tá mé bródúil.","/audio/day-30.wav"],
]);

function _openIDB() {
  if (_idb) return Promise.resolve(_idb);
  return new Promise((res, rej) => {
    const req = indexedDB.open("gc-audio", 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore("wav");
    req.onsuccess = e => { _idb = e.target.result; res(_idb); };
    req.onerror = () => rej();
  });
}

async function _idbGet(key) {
  try {
    const db = await _openIDB();
    return new Promise(res => {
      const tx = db.transaction("wav", "readonly");
      const req = tx.objectStore("wav").get(key);
      req.onsuccess = () => res(req.result || null);
      req.onerror = () => res(null);
    });
  } catch { return null; }
}

async function _idbPut(key, blob) {
  try {
    const db = await _openIDB();
    return new Promise(res => {
      const tx = db.transaction("wav", "readwrite");
      tx.objectStore("wav").put(blob, key);
      tx.oncomplete = res; tx.onerror = res;
    });
  } catch {}
}

function _pcmToWav(pcm, sr=22050) {
  const buf = new ArrayBuffer(44 + pcm.length);
  const v = new DataView(buf);
  const s = (o, t) => { for(let i=0;i<t.length;i++) v.setUint8(o+i, t.charCodeAt(i)); };
  s(0,'RIFF'); v.setUint32(4,36+pcm.length,true);
  s(8,'WAVE'); s(12,'fmt '); v.setUint32(16,16,true);
  v.setUint16(20,1,true); v.setUint16(22,1,true);
  v.setUint32(24,sr,true); v.setUint32(28,sr*2,true);
  v.setUint16(32,2,true); v.setUint16(34,16,true);
  s(36,'data'); v.setUint32(40,pcm.length,true);
  new Uint8Array(buf,44).set(pcm);
  return new Blob([buf],{type:'audio/wav'});
}

async function _fetchAndCacheAudio(text) {
  const r = await fetch(`https://www.abair.ie/api2/synthesise?input=${encodeURIComponent(text)}&voice=ga_CO_pmg_nnmnkwii&audioEncoding=LINEAR16`);
  if (!r.ok) throw new Error();
  const d = await r.json();
  if (!d.audioContent) throw new Error();
  const pcm = Uint8Array.from(atob(d.audioContent), c=>c.charCodeAt(0));
  const blob = _pcmToWav(pcm);
  await _idbPut(text, blob);
  return blob;
}

async function speakIrish(text) {
  if (_currentAudio) { _currentAudio.pause(); _currentAudio.src=''; _currentAudio=null; }
  // 1. Session memory cache (instant)
  if (_audioCache.has(text)) {
    _currentAudio = new Audio(_audioCache.get(text));
    return _currentAudio.play().catch(()=>{});
  }
  // 2. IndexedDB (abair.ie quality, offline-capable)
  try {
    let blob = await _idbGet(text);
    if (!blob) blob = await _fetchAndCacheAudio(text); // fetches abair.ie + saves to IDB
    const url = URL.createObjectURL(blob);
    _audioCache.set(text, url);
    _currentAudio = new Audio(url);
    return _currentAudio.play().catch(()=>{});
  } catch {}
  // 3. Static bundled file (espeak-ng, always available offline)
  const staticPath = _STATIC_AUDIO.get(text);
  if (staticPath) {
    try {
      _currentAudio = new Audio(staticPath);
      return _currentAudio.play().catch(()=>{});
    } catch {}
  }
  // 4. Web Speech API (last resort)
  window.speechSynthesis?.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ga-IE'; u.rate = 0.8;
  window.speechSynthesis?.speak(u);
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
function haptic(pattern=[10]){try{navigator.vibrate&&navigator.vibrate(pattern);}catch{}}

let _melodyNodes=[];
function stopMelody(){_melodyNodes.forEach(o=>{try{o.stop(0)}catch{}});_melodyNodes=[];}
function playMelody(notes,inst,onEnd){
  stopMelody();
  const c=_ctx(),BPS=0.37; // seconds per beat
  let delay=0;
  notes.forEach(([freq,beats])=>{
    const dur=beats*BPS;
    const t=c.currentTime+delay;
    if(inst==='harp'){
      [1,2,3].forEach((h,i)=>{
        const o=c.createOscillator(),g=c.createGain();
        o.connect(g);g.connect(c.destination);
        o.frequency.value=freq*h;o.type='triangle';
        g.gain.setValueAtTime(0,t);
        g.gain.linearRampToValueAtTime(0.2/(i+1),t+0.01);
        g.gain.exponentialRampToValueAtTime(0.001,t+Math.max(dur*0.85/Math.pow(h,0.5),0.05));
        o.start(t);o.stop(t+dur*1.1);
        _melodyNodes.push(o);
      });
    } else { // tin whistle
      const o=c.createOscillator(),g=c.createGain();
      const lfo=c.createOscillator(),lg=c.createGain();
      lfo.frequency.value=5.5;lg.gain.value=5;
      lfo.connect(lg);lg.connect(o.frequency);
      o.connect(g);g.connect(c.destination);
      o.frequency.value=freq;o.type='sine';
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(0.14,t+0.05);
      g.gain.setValueAtTime(0.14,t+Math.max(dur-0.07,0.03));
      g.gain.exponentialRampToValueAtTime(0.001,t+dur);
      lfo.start(t);o.start(t);lfo.stop(t+dur+0.1);o.stop(t+dur+0.1);
      _melodyNodes.push(o,lfo);
    }
    delay+=dur;
  });
  if(onEnd)setTimeout(()=>{_melodyNodes=[];onEnd();},delay*1000+700);
}
// Melodic motifs for each song — simplified but recognisable phrases
// Frequencies: D4=293.66 E4=329.63 F#4=369.99 G4=392 A4=440 B4=493.88 D5=587.33 E5=659.25
const SONG_MELODIES={
  oro:    {inst:'whistle',notes:[[440,1],[440,0.5],[587.33,1.5],[493.88,0.5],[440,0.5],[369.99,0.5],[392,0.5],[440,2]]},
  fields: {inst:'harp',  notes:[[293.66,1],[329.63,0.5],[369.99,0.5],[440,1.5],[369.99,0.5],[329.63,0.5],[293.66,2]]},
  parting:{inst:'harp',  notes:[[587.33,1],[493.88,0.5],[440,0.5],[369.99,1],[329.63,0.5],[293.66,2]]},
  danny:  {inst:'whistle',notes:[[293.66,1],[440,0.5],[392,0.5],[440,1],[493.88,0.5],[587.33,0.5],[440,2]]},
  raglan: {inst:'whistle',notes:[[440,0.5],[392,0.5],[369.99,0.5],[329.63,0.5],[293.66,1.5],[440,0.5],[493.88,1],[440,2]]},
  grace:  {inst:'harp',  notes:[[293.66,1],[369.99,0.5],[440,0.5],[493.88,1],[440,0.5],[392,0.5],[369.99,0.5],[329.63,0.5],[293.66,2]]},
  molly:  {inst:'whistle',notes:[[293.66,0.5],[369.99,0.5],[440,1],[369.99,0.5],[293.66,0.5],[440,1],[493.88,2]]},
  whiskey:{inst:'harp',  notes:[[440,0.5],[369.99,0.5],[293.66,0.5],[329.63,0.5],[369.99,0.5],[440,1],[587.33,0.5],[440,1.5]]},
};

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
function _ctx(){
  if(!_audioCtx)_audioCtx=new(window.AudioContext||window.webkitAudioContext)();
  if(_audioCtx.state==='suspended')_audioCtx.resume();
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
    _ctx(); // ensure context exists
    // D pentatonic: D4 F#4 A4 B4 D5 (Irish traditional scale)
    const P=[293.66,369.99,440,493.88,587.33];
    if(type==='complete'){
      // Ascending harp arpeggio — like a traditional reel ending
      P.forEach((f,i)=>_harp(f,i*0.11,0.26,1.6));
    }
    else if(type==='correct'){
      // Two-note tin whistle lift
      _whistle(P[1],0.28,0,0.16);
      _whistle(P[3],0.38,0.24,0.16);
    }
    else if(type==='wrong'){
      // Low harp thud
      _harp(P[0]*0.5,0,0.22,0.55);
    }
    else if(type==='bonus'){
      // Harp flourish — fast ascending run + final chord
      P.forEach((f,i)=>_harp(f,i*0.07,0.24,1.4));
      _harp(P[0]*2,0.44,0.18,1.2);
    }
    else if(type==='open'){
      // Single soft harp pluck
      _harp(P[2],0,0.16,1.3);
    }
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

// Bottom navigation component
const BottomNav = ({view,setView,c,hd,bd}) => {
  const tabs=[
    {id:"home", icon:"🏠", label:"Baile"},
    {id:"map",  icon:"☘️", label:"30 Lá"},
    {id:"ceol", icon:"🎵", label:"Ceol"},
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
              ...bd,fontSize:"0.53rem",
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
  const [quizType,setQuizType]=useState("week"); // "week" | "daily"
  const [search,setSearch]=useState("");
  const [filterCat,setFilterCat]=useState("all");
  const [provIdx,setProvIdx]=useState(0);
  const [obStep,setObStep]=useState(0);
  const [communityCount,setCommunityCount]=useState(null);
  const [openSong,setOpenSong]=useState(null);
  const [playingSong,setPlayingSong]=useState(null);
  const [prevView,setPrevView]=useState("home");
  const [installPrompt,setInstallPrompt]=useState(null);
  const [installed,setInstalled]=useState(false);
  const c = dk ? T.dark : T.light;

  useEffect(()=>{
    const handler=(e)=>{e.preventDefault();setInstallPrompt(e);};
    window.addEventListener("beforeinstallprompt",handler);
    window.addEventListener("appinstalled",()=>{setInstalled(true);setInstallPrompt(null);});
    if(window.matchMedia("(display-mode: standalone)").matches)setInstalled(true);
    return()=>window.removeEventListener("beforeinstallprompt",handler);
  },[]);

  useEffect(()=>{(async()=>{
    const s=await loadS();
    if(s){setSt(s);if(s.dk)setDk(true)}
    else{const i={done:[],bonus:[],tasksDone:[],streak:0,best:0,dk:false,onboarded:false,started:new Date().toISOString(),dailyLog:{},county:null,notifEnabled:false};await saveS(i);setSt(i)}
    setLoading(false);
    // Fetch community count in background
    sbGetCount(todayKey()).then(n=>{if(n!==null)setCommunityCount(n);});
  })()},[]);


  const save=useCallback(async(ns)=>{setSt(ns);await saveS(ns)},[]);
  const toggle=async()=>{const n=!dk;setDk(n);if(st)await save({...st,dk:n})};

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
    await save({done:[],bonus:[],tasksDone:[],streak:0,best:0,dk,onboarded:true,started:new Date().toISOString()});
    setView("home");setSelDay(null);
  };

  if(splash && st?.onboarded) return (
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
  if(!st.onboarded && obStep===0){
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
            onClick={()=>setObStep(1)}
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

  // COUNTY PICKER (onboarding step 2)
  if(!st.onboarded && obStep===1){
    const pickCounty=async(county)=>{
      await save({done:[],bonus:[],tasksDone:[],streak:0,best:0,dk,onboarded:true,started:new Date().toISOString(),dailyLog:{},county});
      setObStep(0);
    };
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column"}}>
        <style>{css}</style>
        {/* Header */}
        <div style={{background:c.hero,padding:"28px 24px 24px",textAlign:"center"}}>
          <div style={{...bd,fontSize:"0.7rem",color:"rgba(255,255,255,0.5)",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:8}}>Cad as tú?</div>
          <h2 style={{...hd,fontSize:"1.6rem",color:"#fff",marginBottom:6}}>Where are you from?</h2>
          <p style={{...bd,fontSize:"0.82rem",color:"rgba(255,255,255,0.55)"}}>Pick your county — we'll make it personal</p>
        </div>

        {/* County grid */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 16px 100px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,maxWidth:480,margin:"0 auto"}}>
            {COUNTIES.map((co,i)=>(
              <button key={i} onClick={()=>pickCounty(co.en)} style={{
                background:c.card,border:`1px solid ${c.bd}`,borderRadius:14,
                padding:"14px 14px 12px",cursor:"pointer",textAlign:"left",
                boxShadow:c.shadow,transition:"all 0.15s",
              }}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                  <div style={{...hd,fontSize:"0.95rem",fontWeight:700,color:c.acc,lineHeight:1.2}}>{co.ga}</div>
                  {co.g&&<span style={{fontSize:"0.7rem",background:`${c.acc}15`,border:`1px solid ${c.acc}30`,borderRadius:6,padding:"1px 5px",color:c.acc,flexShrink:0,marginLeft:4}}>☘️</span>}
                </div>
                <div style={{...bd,fontSize:"0.72rem",color:c.tx3}}>{co.en}</div>
                <div style={{...bd,fontSize:"0.62rem",color:c.tx3,opacity:0.5,marginTop:2}}>/{co.pr}/</div>
              </button>
            ))}
          </div>
        </div>

        {/* Skip button */}
        <div style={{position:"fixed",bottom:0,left:0,right:0,padding:"16px 24px 32px",background:c.bg,borderTop:`1px solid ${c.bd}`}}>
          <button onClick={()=>pickCounty(null)} style={{width:"100%",padding:"14px",borderRadius:12,background:"none",border:`1px solid ${c.bd}`,color:c.tx3,...bd,fontSize:"0.9rem",cursor:"pointer"}}>
            Skip — I'd rather not say
          </button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════
  // QUIZ VIEW
  // ═══════════════════════════════
  if(view==="quiz"&&quiz){
    const q=quiz[quizIdx];
    const weekNum=Math.max(1,Math.ceil((total||1)/7));
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px"}}>
        <style>{css}</style>
        {/* Exit button */}
        <button onClick={()=>{setView(prevView||"home");setQuiz(null);setQuizDone(false);}} style={{position:"fixed",top:16,left:16,background:c.card,border:`1px solid ${c.bd}`,borderRadius:10,padding:"8px 14px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,color:c.tx,...bd,fontSize:"0.85rem",fontWeight:600,zIndex:10}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Ar ais
        </button>
        <div style={{maxWidth:420,width:"100%"}}>
          {!quizDone?(
            <>
              {/* Header */}
              <div style={{textAlign:"center",marginBottom:28,animation:"rise 0.5s ease"}}>
                <div style={{...bd,fontSize:"0.7rem",color:c.tx3,letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:8}}>
                  {quizType==="daily"?"Cluiche an Lae":`Seachtain ${weekNum} · Quiz`} · {quizIdx+1} / {quiz.length}
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
                <button onClick={()=>speakIrish(q.phrase)} style={{background:"none",border:`1px solid ${c.phraseBd}`,borderRadius:20,padding:"5px 14px",color:c.acc,...bd,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:6}}>
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
                      if(opt===q.answer){setQuizScore(s=>s+1);playSound('correct');haptic([15]);}else{playSound('wrong');haptic([40,30,40]);}
                      setTimeout(()=>{
                        if(quizIdx+1<quiz.length){setQuizIdx(i=>i+1);setQuizPicked(null);}
                        else{
                          const finalScore=quizScore+(opt===q.answer?1:0);
                          setQuizDone(true);
                          if(finalScore===quiz.length){playSound('bonus');haptic([30,50,30,50,100]);}
                          if(quizType==="daily") saveDailyQuizScore(finalScore);
                        }
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
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:ch.story?16:16}}>
                  <span style={{fontSize:"1rem"}}>{CATS[ch.cat]}</span>
                  <div>
                    <div style={{...hd,fontSize:"1.6rem",fontWeight:700,color:c.tx,lineHeight:1.2}}>{ch.t}</div>
                    <div style={{...bd,fontSize:"0.82rem",color:c.tx3,fontStyle:"italic"}}>{ch.e}</div>
                  </div>
                </div>

                {/* ── SCÉAL ── Story of the day */}
                {ch.story&&(
                  <div style={{borderLeft:`3px solid ${dayColor}`,paddingLeft:14,marginBottom:20}}>
                    {ch.story.split("\n\n").map((para,i)=>(
                      <p key={i} style={{...bd,fontSize:"0.92rem",color:c.tx2,lineHeight:1.8,margin:i>0?"12px 0 0":"0"}}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Big phrase */}
                <div style={{textAlign:"center",borderTop:`1px solid ${c.bd}`,borderBottom:`1px solid ${c.bd}`,padding:"24px 8px",margin:"0 0 20px"}}>
                  <div style={{...hd,fontSize:"2.4rem",fontWeight:700,fontStyle:"italic",color:c.acc,lineHeight:1.2,marginBottom:10}}>
                    {ch.p}
                  </div>
                  <div style={{...bd,fontSize:"0.88rem",color:c.tx3,letterSpacing:"0.05em",marginBottom:8}}>{ch.pr}</div>
                  <button onClick={()=>speakIrish(ch.p)} style={{background:c.phrase,border:`1px solid ${c.phraseBd}`,borderRadius:20,padding:"7px 18px",color:c.acc,...bd,fontSize:"0.85rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:7,marginBottom:8}}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                    Éist le fuaim
                  </button>
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
              <button onClick={()=>speakIrish(w.p)} style={{background:c.cardAlt,border:`1px solid ${c.bd}`,borderRadius:8,width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"0.95rem"}}>
                🔊
              </button>
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

  // ═══════════════════════════════
  // CEOL VIEW (Irish music)
  // ═══════════════════════════════
  if(view==="ceol"){
    return(
      <div style={{minHeight:"100vh",background:c.bg,color:c.tx,paddingBottom:88,animation:"rise 0.3s ease"}}>
        <style>{css}</style>
        {/* Header */}
        <div style={{background:"#1A0A0A",padding:"28px 20px 24px"}}>
          <div style={{maxWidth:520,margin:"0 auto"}}>
            <div style={{...bd,fontSize:"0.7rem",color:"rgba(255,255,255,0.45)",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:6}}>Ceol na hÉireann</div>
            <h1 style={{...hd,fontSize:"1.9rem",fontWeight:700,color:"#fff",margin:"0 0 6px",lineHeight:1.2}}>Irish Music</h1>
            <p style={{...bd,fontSize:"0.88rem",color:"rgba(255,255,255,0.5)",margin:0}}>
              {playingSong
                ? `♪ Playing — ${SONGS.find(s=>s.id===playingSong)?.title||""}`
                : "Tap any song to read its story · Play the melody inside the app"}
            </p>
          </div>
        </div>

        <div style={{maxWidth:520,margin:"0 auto",padding:"20px 16px",display:"flex",flexDirection:"column",gap:12}}>
          {SONGS.map(song=>{
            const isOpen=openSong===song.id;
            const isPlaying=playingSong===song.id;
            const mel=SONG_MELODIES[song.id];
            return(
              <div key={song.id} style={{borderRadius:16,overflow:"hidden",border:`1.5px solid ${isPlaying?song.color:c.bd}`,background:c.card,transition:"border-color 0.3s"}}>
                {/* Song header */}
                <button onClick={()=>{
                    if(isOpen){setOpenSong(null);}
                    else{if(playingSong&&playingSong!==song.id){stopMelody();setPlayingSong(null);}setOpenSong(song.id);playSound('open');}
                  }}
                  style={{width:"100%",background:isOpen||isPlaying?song.color+"1A":"transparent",border:"none",cursor:"pointer",padding:"16px",display:"flex",alignItems:"center",gap:14,textAlign:"left"}}>
                  <div style={{width:52,height:52,borderRadius:12,background:isPlaying?song.color:song.color+"CC",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",flexShrink:0,transition:"all 0.3s",animation:isPlaying?"breathe 1.5s ease infinite":undefined}}>
                    {isPlaying?"♪":song.emoji}
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{...hd,fontSize:"0.97rem",fontWeight:700,color:isPlaying?song.color:c.tx,marginBottom:3,lineHeight:1.2}}>{song.title}</div>
                    <div style={{...bd,fontSize:"0.78rem",color:c.tx3}}>{isPlaying?"Ag seinm anois · Playing now":song.en}</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4,flexShrink:0}}>
                    <div style={{...bd,fontSize:"0.65rem",color:song.color,background:song.color+"18",padding:"3px 8px",borderRadius:20,border:`1px solid ${song.color}44`,whiteSpace:"nowrap"}}>{song.era}</div>
                    <div style={{color:c.tx3,fontSize:"0.7rem"}}>{isOpen?"▲":"▼"}</div>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen&&(
                  <div style={{borderTop:`1px solid ${c.bd}`,animation:"pop 0.2s ease"}}>

                    {/* ── Play melody button ── */}
                    {mel&&(
                      <div style={{padding:"14px 16px 0"}}>
                        <button onClick={()=>{
                          if(isPlaying){stopMelody();setPlayingSong(null);}
                          else{if(playingSong){stopMelody();setPlayingSong(null);}
                            setPlayingSong(song.id);
                            playMelody(mel.notes,mel.inst,()=>setPlayingSong(null));
                          }
                        }} style={{width:"100%",padding:"13px",borderRadius:12,background:isPlaying?song.color+"22":song.color,border:`1.5px solid ${song.color}`,color:isPlaying?song.color:"#fff",...hd,fontSize:"0.95rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"all 0.2s"}}>
                          {isPlaying
                            ? <><span style={{fontSize:"1.1rem"}}>⏹</span> Stop</>
                            : <><span style={{fontSize:"1.1rem"}}>▶</span> Séinn an fonn · Play melody</>}
                        </button>
                        <div style={{...bd,fontSize:"0.65rem",color:c.tx3,textAlign:"center",marginTop:5,opacity:0.7}}>
                          {mel.inst==='whistle'?"🎶 Tin whistle synthesis":"🎶 Celtic harp synthesis"} · no internet needed
                        </div>
                      </div>
                    )}

                    {/* Story */}
                    <div style={{padding:"14px 16px 0"}}>
                      <div style={{...bd,fontSize:"0.82rem",color:c.tx2,lineHeight:1.7,marginBottom:14}}>{song.story}</div>
                    </div>

                    {/* Lyrics */}
                    <div style={{margin:"0 16px",background:song.color+"14",border:`1px solid ${song.color}33`,borderRadius:12,padding:"14px 16px",marginBottom:12}}>
                      <div style={{...bd,fontSize:"0.68rem",color:song.color,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:8}}>Lyrics</div>
                      <div style={{...hd,fontSize:"0.9rem",color:c.tx,whiteSpace:"pre-line",lineHeight:1.65,marginBottom:8}}>{song.irish}</div>
                      <div style={{...bd,fontSize:"0.78rem",color:c.tx3,fontStyle:"italic"}}>{song.translation}</div>
                    </div>

                    {/* Lesson */}
                    <div style={{margin:"0 16px 12px",background:c.tipBg,border:`1px solid ${c.tipBd}`,borderRadius:12,padding:"12px 14px"}}>
                      <div style={{...bd,fontSize:"0.68rem",color:c.tipTx,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6}}>Irish lesson</div>
                      <div style={{...bd,fontSize:"0.83rem",color:c.tipTx,lineHeight:1.5}}>{song.lesson}</div>
                    </div>

                    {/* YouTube — full recording */}
                    <div style={{padding:"0 16px 16px"}}>
                      <a href={`https://www.youtube.com/results?search_query=${song.yt}`} target="_blank" rel="noopener noreferrer"
                        style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:"11px",borderRadius:12,background:"#FF0000",color:"#fff",textDecoration:"none",...bd,fontSize:"0.82rem",fontWeight:700}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
                        Full recording on YouTube →
                      </a>
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
                      <button key={ch.day} onClick={()=>{setPrevView("map");setSelDay(ch.day);setView("day")}} style={{
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
  const today = new Date();
  const dailyC = getDailyChallenge(DAILY_POOL, today);
  const wod = getWordOfDay(VOCAB, today);
  const dailyDoneToday = st?.dailyLog?.[todayKey()] || false;
  const daysSinceStart = st.started ? Math.floor((Date.now()-new Date(st.started).getTime())/86400000) : 0;
  const calendarDay = Math.min(daysSinceStart+1, 30);
  const vqKey = todayKey()+"_vq";
  const vqScore = st.dailyLog?.[vqKey];
  const vqDone = vqScore !== undefined;

  const menuItems = [
    {id:"map",  icon:"☘️", label:"30 Lá",      sub:`${total} / 30 lá déanta`,  clr:c.acc},
    {id:"ceol", icon:"🎵", label:"Ceol",        sub:"8 amhráin · melodies",      clr:"#8A1A1A"},
    {id:"dict", icon:"📖", label:"Foclóir",     sub:`${VOCAB.length} focal`,     clr:"#1A4A8A"},
    {id:"stats",icon:"📊", label:"Staitisticí", sub:"Do dhul chun cinn",         clr:c.gold},
  ];

  return(
    <div style={{minHeight:"100vh",background:c.bg,color:c.tx,display:"flex",flexDirection:"column",paddingBottom:72}}>
      <style>{css}</style>

      {/* ── HEADER ── */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px 10px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:"1.4rem",lineHeight:1}}>☘️</span>
          <span style={{...hd,fontSize:"1.05rem",fontWeight:800,color:c.tx,letterSpacing:"-0.01em"}}>Gaeltacht Connect</span>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"center"}}>
          {st.streak>=1&&<div style={{...bd,fontSize:"0.8rem",color:c.gold,background:c.gold+"18",border:`1px solid ${c.gold}33`,borderRadius:20,padding:"4px 10px",fontWeight:700}}>🔥 {st.streak}</div>}
          <button onClick={toggle} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:8,width:32,height:32,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:c.tx3,fontSize:"0.85rem"}}>{dk?"☀️":"🌙"}</button>
          <button onClick={()=>setView("settings")} style={{background:"none",border:`1px solid ${c.bd}`,borderRadius:8,width:32,height:32,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:c.tx3,fontSize:"1rem"}}>⚙️</button>
        </div>
      </div>

      <div style={{flex:1,maxWidth:520,width:"100%",margin:"0 auto",padding:"0 16px",display:"flex",flexDirection:"column",gap:11}}>

        {/* ── STATS ROW ── */}
        <div style={{display:"flex",gap:8}}>
          {[
            {icon:"✅",val:total,   label:"Completed", clr:c.acc},
            {icon:"🔥",val:st.streak,label:"Streak",   clr:c.gold},
            {icon:"⭐",val:st.bonus.length,label:"Bonus",clr:c.gold},
          ].map((s,i)=>(
            <div key={i} style={{flex:1,background:c.card,border:`1px solid ${c.bd}`,borderRadius:14,padding:"11px 6px",textAlign:"center",boxShadow:c.shadow}}>
              <div style={{...hd,fontSize:"1.3rem",color:s.clr,lineHeight:1.1}}>{s.icon} {s.val}</div>
              <div style={{...bd,fontSize:"0.57rem",color:c.tx3,marginTop:3,letterSpacing:"0.04em"}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── DÚSHLÁN AN LAE ── */}
        {allDone ? (
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,padding:"28px 20px",textAlign:"center",boxShadow:c.shadow}}>
            <div style={{fontSize:"3rem",marginBottom:12}}>🏆</div>
            <div style={{...hd,fontSize:"1.8rem",color:c.acc,marginBottom:6}}>30 Lá — Déanta!</div>
            <div style={{...bd,fontSize:"0.9rem",color:c.tx3,fontStyle:"italic",lineHeight:1.6}}>You did something real.<br/>The language is proud of you.</div>
          </div>
        ) : (
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:20,overflow:"hidden",boxShadow:c.shadow}}>
            <div style={{height:3,background:`linear-gradient(90deg,${TYPE_CLR[dailyC.tp]||c.acc},${TYPE_CLR[dailyC.tp]||c.acc}44)`}}/>
            <div style={{padding:"16px 18px 14px"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                <div style={{width:30,height:30,borderRadius:8,background:(TYPE_CLR[dailyC.tp]||c.acc)+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem"}}>{TYPE_ICON[dailyC.tp]}</div>
                <div style={{flex:1}}>
                  <div style={{...bd,fontSize:"0.54rem",color:c.tx3,letterSpacing:"0.12em",textTransform:"uppercase"}}>Dúshlán an Lae · {communityCount!==null?`${communityCount} inniu`:"Today"}</div>
                  <div style={{...hd,fontSize:"1rem",fontWeight:700,color:c.tx,lineHeight:1.2}}>{dailyC.title}</div>
                </div>
                {dailyDoneToday&&<span style={{fontSize:"1.1rem"}}>✅</span>}
              </div>
              <p style={{...bd,fontSize:"0.9rem",color:c.tx2,lineHeight:1.8,margin:"0 0 10px"}}>{dailyC.ch}</p>
              {dailyC.tip&&<div style={{...bd,fontSize:"0.72rem",color:c.tx3,fontStyle:"italic",background:c.cardAlt,borderRadius:8,padding:"7px 10px",marginBottom:10}}>💡 {dailyC.tip}</div>}
              <button onClick={()=>{if(!dailyDoneToday)markDailyDone();}} style={{width:"100%",padding:"13px",borderRadius:12,background:dailyDoneToday?c.cardAlt:TYPE_CLR[dailyC.tp]||c.btn,border:`1px solid ${dailyDoneToday?c.bd:"transparent"}`,color:dailyDoneToday?c.tx3:"#fff",...hd,fontSize:"0.95rem",fontWeight:700,cursor:dailyDoneToday?"default":"pointer",transition:"all 0.2s"}}>
                {dailyDoneToday?"✅ Déanta inniu! Come back tomorrow":"Déanta — Mark as done"}
              </button>
            </div>
          </div>
        )}

        {/* ── FOCAL + CLUICHE 2-COL ── */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,padding:"13px 13px 11px",boxShadow:c.shadow}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
              <div style={{...bd,fontSize:"0.54rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase"}}>Focal an Lae</div>
              <button onClick={()=>speakIrish(wod.p)} style={{background:"none",border:"none",cursor:"pointer",fontSize:"0.85rem",padding:0,lineHeight:1}}>🔊</button>
            </div>
            <div style={{...hd,fontSize:"1.05rem",fontWeight:700,color:c.acc,fontStyle:"italic",lineHeight:1.2,marginBottom:3}}>{wod.p}</div>
            <div style={{...bd,fontSize:"0.68rem",color:c.tx3,lineHeight:1.3}}>{wod.m}</div>
            <div style={{...bd,fontSize:"0.58rem",color:c.tx3,opacity:0.5}}>/{wod.pr}/</div>
          </div>
          <div style={{background:vqDone?c.cardAlt:c.card,border:`1px solid ${vqDone?c.bd:c.acc+"44"}`,borderRadius:16,padding:"13px 13px 11px",boxShadow:c.shadow,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div>
              <div style={{...bd,fontSize:"0.54rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:5}}>Cluiche an Lae</div>
              <div style={{...hd,fontSize:"0.95rem",fontWeight:700,color:vqDone?c.tx3:c.tx,lineHeight:1.2}}>5 focal</div>
              {vqDone?<div style={{...bd,fontSize:"0.7rem",color:c.acc,marginTop:3}}>{vqScore}/5 {vqScore===5?"🏆":vqScore>=3?"🌟":"💪"}</div>:<div style={{...bd,fontSize:"0.65rem",color:c.tx3,marginTop:2}}>~2 min</div>}
            </div>
            <button onClick={startDailyQuiz} style={{marginTop:9,width:"100%",padding:"8px",borderRadius:10,background:vqDone?"none":c.btn,border:`1px solid ${vqDone?c.bd:"transparent"}`,color:vqDone?c.tx3:"#fff",...hd,fontSize:"0.8rem",fontWeight:700,cursor:"pointer"}}>
              {vqDone?"Arís →":"Tosaigh →"}
            </button>
          </div>
        </div>

        {/* ── STREAK CALENDAR ── */}
        {(()=>{
          const days=Array.from({length:7},(_,i)=>{
            const d=new Date();d.setDate(d.getDate()-(6-i));
            const key=d.toISOString().split("T")[0];
            return{key,done:!!st.dailyLog?.[key],isToday:key===todayKey(),
              dow:["Su","Mo","Tu","We","Th","Fr","Sa"][d.getDay()],date:d.getDate()};
          });
          return(
            <div style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,padding:"12px 14px",boxShadow:c.shadow}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <div style={{...bd,fontSize:"0.54rem",color:c.tx3,letterSpacing:"0.1em",textTransform:"uppercase"}}>Seachtain seo</div>
                <div style={{...bd,fontSize:"0.62rem",color:c.gold}}>{days.filter(d=>d.done).length}/7 ✓</div>
              </div>
              <div style={{display:"flex",gap:4,justifyContent:"space-between"}}>
                {days.map(d=>(
                  <div key={d.key} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                    <div style={{...bd,fontSize:"0.5rem",color:c.tx3,textTransform:"uppercase"}}>{d.dow}</div>
                    <div style={{width:"100%",aspectRatio:"1",maxWidth:34,borderRadius:7,
                      background:d.done?c.acc:d.isToday?c.acc+"22":"transparent",
                      border:`1.5px solid ${d.done?c.acc:d.isToday?c.acc+"88":c.bd}`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:"0.68rem",color:d.done?"#fff":d.isToday?c.acc:c.tx3,
                      fontWeight:d.isToday?700:400}}>
                      {d.done?"✓":d.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* ── MENU GRID ── */}
        <div>
          <div style={{...bd,fontSize:"0.54rem",color:c.tx3,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:8}}>Clár · Menu</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {menuItems.map(item=>(
              <button key={item.id} onClick={()=>setView(item.id)} style={{background:c.card,border:`1px solid ${c.bd}`,borderRadius:16,padding:"15px 15px 13px",textAlign:"left",cursor:"pointer",boxShadow:c.shadow,display:"flex",flexDirection:"column",gap:7,transition:"border-color 0.2s"}}>
                <div style={{width:38,height:38,borderRadius:10,background:item.clr+"18",border:`1px solid ${item.clr}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.15rem"}}>{item.icon}</div>
                <div>
                  <div style={{...hd,fontSize:"0.95rem",fontWeight:700,color:c.tx,lineHeight:1.15}}>{item.label}</div>
                  <div style={{...bd,fontSize:"0.63rem",color:c.tx3,marginTop:2,lineHeight:1.3}}>{item.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── PWA INSTALL PROMPT ── */}
        {installPrompt&&!installed&&(
          <button onClick={async()=>{
            installPrompt.prompt();
            const{outcome}=await installPrompt.userChoice;
            if(outcome==="accepted"){setInstalled(true);setInstallPrompt(null);}
          }} style={{width:"100%",padding:"14px 18px",borderRadius:16,background:`linear-gradient(135deg,${c.acc},${c.acc}CC)`,border:"none",color:"#fff",display:"flex",alignItems:"center",gap:12,cursor:"pointer",boxShadow:`0 4px 16px ${c.acc}44`}}>
            <span style={{fontSize:"1.4rem"}}>📲</span>
            <div style={{textAlign:"left",flex:1}}>
              <div style={{...hd,fontSize:"0.95rem",fontWeight:700,lineHeight:1.2}}>Suiteáil an aip</div>
              <div style={{...bd,fontSize:"0.68rem",opacity:0.8,marginTop:2}}>Install app · Works offline</div>
            </div>
            <span style={{fontSize:"1.1rem",opacity:0.7}}>→</span>
          </button>
        )}

      </div>

      <BottomNav view={view} setView={setView} c={c} hd={hd} bd={bd}/>
    </div>
  );
}
