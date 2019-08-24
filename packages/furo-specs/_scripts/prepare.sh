#!/usr/bin/env bash

echo "preparing services and types from api specification ..."
echo "*** Prepare ***"
SPECDIR=$1


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mkdir -p ./__tmp

BASETYPEDIR="./_baseTypes"

rm ./__tmp/types.json
# open Array
echo '{"types":[' >> ./__tmp/types.json

for t in `find $SPECDIR -name '*.type.spec'`; do (cat $t; echo ',') >> ./__tmp/tmptypes_s.json; done
for t in `find $BASETYPEDIR -name '*.type.spec'`; do (cat $t; echo ',') >> ./__tmp/tmptypes_s.json; done

cat ./__tmp/tmptypes_s.json | sed '$ s/.$//' >> ./__tmp/types.json
rm ./__tmp/tmptypes_s.json
# close Array
echo ']}' >> ./__tmp/types.json

echo "single types done."


rm ./__tmp/services.json
# open Array
echo '{"services":[' >> ./__tmp/services.json

for t in `find $SPECDIR -name '*.service.spec'`; do (cat $t; echo ',') >> ./__tmp/tmpservices.json; done
cat ./__tmp/tmpservices.json | sed '$ s/.$//' >> ./__tmp/services.json
rm ./__tmp/tmpservices.json
# close Array
echo ']}' >> ./__tmp/services.json

echo "single services done."


cd $DIR

