#!/usr/bin/env bash
echo PWD
echo "generating services and types from api specification ..."
echo "*** Prepare ***"
SPECDIR=$1


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mkdir -p $DIR/../__tmp

BASETYPEDIR="$DIR/../_baseTypes"

rm $DIR/../__tmp/types.json
# open Array
echo '{"types":[' >> $DIR/../__tmp/types.json

for t in `find $SPECDIR -name '*.type.spec'`; do (cat $t; echo ',') >> $DIR/../__tmp/tmptypes_s.json; done
for t in `find $BASETYPEDIR -name '*.type.spec'`; do (cat $t; echo ',') >> $DIR/../__tmp/tmptypes_s.json; done

cat $DIR/../__tmp/tmptypes_s.json | sed '$ s/.$//' >> $DIR/../__tmp/types.json
rm $DIR/../__tmp/tmptypes_s.json
# close Array
echo ']}' >> $DIR/../__tmp/types.json

echo "types done."


rm $DIR/../__tmp/services.json
# open Array
echo '{"services":[' >> $DIR/../__tmp/services.json

for t in `find $SPECDIR -name '*.service.spec'`; do (cat $t; echo ',') >> $DIR/../__tmp/tmpservices.json; done
echo $t
cat $DIR/../__tmp/tmpservices.json | sed '$ s/.$//' >> $DIR/../__tmp/services.json
rm $DIR/../__tmp/tmpservices.json
# close Array
echo ']}' >> $DIR/../__tmp/services.json

echo "services done."


cd $DIR

