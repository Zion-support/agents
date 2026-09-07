#!/usr/bin/env bash
# Hermes Agent route smoke: pega as URLs do sitemap que contêm 'hermes', verifica 200
set -euo pipefail
SITEMAP="https://ziontechgroup.com/sitemap.xml"
TMPFILE=$(mktemp)

# fetch sitemap
curl -sL --max-time 30 "$SITEMAP" -o "$TMPFILE" || { echo "sitemap fetch failed"; exit 1; }

fail=0; checked=0
while IFS= read -r url; do
  [[ -z "$url" ]] && continue
  status=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 15 "$url" || echo "000")
  checked=$((checked+1))
  if [[ "$status" != "200" ]]; then
    echo "${url} -> ${status}"
    fail=$((fail+1))
  fi
done < <(grep -oP '<loc>\K[^<]*(?=</loc>)' "$TMPFILE" | grep -i hermes)

rm -f "$TMPFILE"

if (( fail > 0 )); then
  echo "SUMMARY hermes_routes_checked=$checked failed=$fail"
  exit 1
fi

echo "SUMMARY hermes_routes_checked=$checked failed=0"
exit 0
