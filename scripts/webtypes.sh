#!/usr/bin/env bash
set -e


cwd=$(pwd)

cd $cwd/packages/furo-route
jq '. + input' package.json custom-elements.json | simple-generator -t ../../scripts/templates/webtypes.tpl > web-types.json
echo "✅ furo-route web-types.json"
