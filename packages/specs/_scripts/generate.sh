#!/usr/bin/env bash

echo "generating restlets and types from api specification ..."
echo "*** Prepare ***"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mkdir -p $DIR/../_tmp

rm $DIR/../_tmp/types.json
# open Array
echo '{"types":[' >> $DIR/../_tmp/types.json

for t in $DIR/../types/*.spec; do (cat $t; echo ',') >> $DIR/../_tmp/tmptypes.json; done

cat $DIR/../_tmp/tmptypes.json | sed '$ s/.$//' >> $DIR/../_tmp/types.json
rm $DIR/../_tmp/tmptypes.json
# close Array
echo ']}' >> $DIR/../_tmp/types.json

echo "types done."

cd $DIR

./makeEnvFile.js
