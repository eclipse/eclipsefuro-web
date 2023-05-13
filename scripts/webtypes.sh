#!/usr/bin/env bash
set -e


cwd=$(pwd)
echo "If you run this file manually, make sure that you have run cem.sh before."

cd $cwd/packages/furo-route
jq '. + input' package.json custom-elements.json | simple-generator -t ../../scripts/templates/webtypes.tpl > web-types.json
echo "✅ furo-route web-types.json"

cd $cwd/packages/furo-data
jq '. + input' package.json custom-elements.json | simple-generator -t ../../scripts/templates/webtypes.tpl > web-types.json
echo "✅ furo-data web-types.json"

cd $cwd/packages/furo-layout
jq '. + input' package.json custom-elements.json | simple-generator -t ../../scripts/templates/webtypes.tpl > web-types.json
echo "✅ furo-layout web-types.json"

cd $cwd/packages/furo-route
jq '. + input' package.json custom-elements.json | simple-generator -t ../../scripts/templates/webtypes.tpl > web-types.json
echo "✅ furo-route web-types.json"
