#!/usr/bin/env bash

echo "preparing services and types from api specification ..."
echo "*** Prepare ***"
SPECDIR=$1

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mkdir -p $DIR/../__tmp
BASETYPEDIR="$DIR/../_baseTypes"

rm $DIR/../__tmp/types_bundled.json
# open Array
echo '{"types":[' >> $DIR/../__tmp/types_bundled.json

for t in `find $SPECDIR -name '*.type.spec'`; do (cat $t; echo ',') >> $DIR/../__tmp/tmptypes.json; done
#for t in `find $BASETYPEDIR -name '*.type.spec'`; do (cat $t; echo ',') >> $DIR/../__tmp/tmptypes.json; done
cat $DIR/../__tmp/tmptypes.json | sed '$ s/.$//' >> $DIR/../__tmp/types_bundled.json
rm $DIR/../__tmp/tmptypes.json
# close Array
echo ']}' >> $DIR/../__tmp/types_bundled.json

echo "bundled types done."


rm $DIR/../__tmp/services_bundled.json
# open Array
echo '{"services":[' >> $DIR/../__tmp/services_bundled.json

for t in `find $SPECDIR -name '*.service.spec'`; do (cat $t; echo ',') >> $DIR/../__tmp/tmpservices.json; done
echo $t
cat $DIR/../__tmp/tmpservices.json | sed '$ s/.$//' >> $DIR/../__tmp/services_bundled.json
rm $DIR/../__tmp/tmpservices.json
# close Array
echo ']}' >> $DIR/../__tmp/services_bundled.json

echo "bundled services done."


cd $DIR

