#!/bin/bash

main() {
  echo '' > nish-dict.txt

  for i in $(seq 1 787); do 
    echo "Processing $i..."
    curl -s https://dictionary.nishnaabemwin.atlas-ling.ca/words/index/page:$i.json \
      | jq -r '.words[] as $in| [$in.Sense[].definition_en] as $defs | [$in.Word.nishnaabemwin, "[" + $in.Ps.ps + "]", ($defs | join("; "))] | join(" ")' >> nish-dict.txt
  done

}

main 


