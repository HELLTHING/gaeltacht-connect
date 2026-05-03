#!/bin/bash
# Generate fallback WAV files using espeak-ng Irish voice
# These are replaced by higher-quality abair.ie versions when the user
# runs scripts/fetch-audio.mjs from a machine with internet access to abair.ie

OUT="$(dirname "$0")/../public/audio"
mkdir -p "$OUT"

declare -a PHRASES=(
  "Dia dhuit!"
  "Go raibh maith agat!"
  "Slán go fóill!"
  "Conas atá tú?"
  "Maidin mhaith!"
  "Le do thoil"
  "Dia dhuit. Conas atá tú? Go raibh maith agat. Slán!"
  "Caife, le do thoil"
  "Cé mhéad?"
  "Tá ocras orm"
  "An bhfuil bainne agaibh?"
  "Is maith liom caife!"
  "Tá sé fuar inniu!"
  "Maith go leor!"
  "Is mise. Cad is ainm duit?"
  "Cá bhfuil an leithreas?"
  "Is as mé"
  "Mo mháthair. M'athair. Mo pháiste."
  "Dearg, glas, gorm, bán, dubh"
  "A haon, a dó, a trí, a ceathair, a cúig, a sé, a seacht, a hocht, a naoi, a deich"
  "Tá sé go hálainn. Feicim crann glas."
  "Is breá liom an ceol seo!"
  "Is fearr Gaeilge briste ná Béarla cliste"
  "Tuigim! Ní thuigim."
  "Lá maith agam inniu!"
  "Pionta, le do thoil!"
  "An bhfuil Gaeilge agat?"
  "Baile, Cill, Dún, Áth, Lios"
  "Abair é arís!"
  "Tá Gaeilge agam. Tá mé bródúil."
)

for i in "${!PHRASES[@]}"; do
  DAY=$(printf "%02d" $((i+1)))
  FILE="$OUT/day-$DAY.wav"
  if [ -f "$FILE" ]; then
    echo "⏭  day-$DAY already exists"
    continue
  fi
  echo -n "⬇  day-$DAY: ${PHRASES[$i]:0:40}... "
  espeak-ng -v ga -s 130 -p 50 -w "$FILE" "${PHRASES[$i]}" 2>/dev/null
  if [ $? -eq 0 ]; then
    SIZE=$(wc -c < "$FILE")
    echo "✓ (${SIZE} bytes)"
  else
    echo "✗"
  fi
done

echo ""
echo "Done. Run 'node scripts/fetch-audio.mjs' from a machine with abair.ie access to upgrade quality."
