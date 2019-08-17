#!/usr/bin/env bash

echo "generating services and types from api specification ..."
echo "*** Prepare ***"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mkdir -p $DIR/../_tmp

rm $DIR/../_tmp/types.json
# open Array
echo '{"bundlepackage":"'$1'", "types":[' >> $DIR/../_tmp/types.json

for t in `find ./specs -name '*.type.spec'`; do (cat $t; echo ',') >> $DIR/../_tmp/tmptypes.json; done


cat $DIR/../_tmp/tmptypes.json | sed '$ s/.$//' >> $DIR/../_tmp/types.json
rm $DIR/../_tmp/tmptypes.json
# close Array
echo ']}' >> $DIR/../_tmp/types.json

echo "types done."


rm $DIR/../_tmp/services.json
# open Array
echo '{"bundlepackage":"'$1'","services":[' >> $DIR/../_tmp/services.json

for t in `find ./specs -name '*.service.spec'`; do (cat $t; echo ',') >> $DIR/../_tmp/tmpservices.json; done
echo $t
cat $DIR/../_tmp/tmpservices.json | sed '$ s/.$//' >> $DIR/../_tmp/services.json
rm $DIR/../_tmp/tmpservices.json
# close Array
echo ']}' >> $DIR/../_tmp/services.json

echo "services done."


cd $DIR

