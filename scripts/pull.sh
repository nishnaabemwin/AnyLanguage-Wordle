#!/bin/bash

main() {
  echo '' > 01-raw.txt

  for i in $(seq 1 787); do 
    echo "Processing $i..."
    curl -s https://dictionary.nishnaabemwin.atlas-ling.ca/words/index/page:$i.json | jq -r '.words[] | .Word.nishnaabemwin' >> 01-raw.txt
  done

  cat 01-raw.txt | sed -e 's/aa/A/g' | sed -e 's/ii/I/g' | sed -e 's/oo/O/g' | sed -e 's/ch/C/g' | sed -e 's/sh/S/g' | sed -e 's/zh/Z/g' | sed -e 's/nh/N/g' > 02-replaced.txt
}

main 