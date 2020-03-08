#!/usr/bin/env bash

rm ./__tmp/__speclist.json;
rm ./__tmp/speclist.json

# open Array
echo '{"types":[' >> ./__tmp/speclist.json
# repeat all spec folders
for SPECDIR in "$@"
do
for t in `find $SPECDIR"/" -name '*.type.spec'`; do
  (echo "\"$t\",") >> ./__tmp/__speclist.json
   done
done
cat ./__tmp/__speclist.json | sed '$ s/.$//' >> ./__tmp/speclist.json
# close Array
echo '],' >> ./__tmp/speclist.json



rm ./__tmp/__speclist.json;
# open Array
echo '"services":[' >> ./__tmp/speclist.json
for SPECDIR in "$@"
do
for t in `find $SPECDIR"/" -name '*.service.spec'`; do (echo "\"$t\",") >> ./__tmp/__speclist.json; done
done
cat ./__tmp/__speclist.json | sed '$ s/.$//' >> ./__tmp/speclist.json
# close Array
echo ']}' >> ./__tmp/speclist.json
