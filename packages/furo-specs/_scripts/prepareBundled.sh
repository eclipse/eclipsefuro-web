#!/usr/bin/env bash

echo "preparing services and types from api specification ..."
echo "*** Prepare ***"
SPECDIR=$1

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
mkdir -p ./__tmp
BASETYPEDIR="./_baseTypes"

rm ./__tmp/types_bundled.json
# open Array
echo '{"types":[' >> ./__tmp/types_bundled.json

for t in `find $SPECDIR -name '*.type.spec'`; do (cat $t; echo ',') >> ./__tmp/tmptypes.json; done
#for t in `find $BASETYPEDIR -name '*.type.spec'`; do (cat $t; echo ',') >> ./__tmp/tmptypes.json; done
cat ./__tmp/tmptypes.json | sed '$ s/.$//' >> ./__tmp/types_bundled.json
rm ./__tmp/tmptypes.json
# close Array
echo ']}' >> ./__tmp/types_bundled.json

echo "bundled types done."


rm ./__tmp/services_bundled.json
# open Array
echo '{"services":[' >> ./__tmp/services_bundled.json

for t in `find $SPECDIR -name '*.service.spec'`; do (cat $t; echo ',') >> ./__tmp/tmpservices.json; done
echo $t
cat ./__tmp/tmpservices.json | sed '$ s/.$//' >> ./__tmp/services_bundled.json
rm ./__tmp/tmpservices.json
# close Array
echo ']}' >> ./__tmp/services_bundled.json

echo "bundled services done."


cd $DIR

