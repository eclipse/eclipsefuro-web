#! /bin/bash

echo "make the base types"
for t in `find ./_baseTypes -name '*.type.spec'`;
do
 protofile="`basename -s .type\.spec $t`.proto"

FOLDER=$(cat $t \
 | grep package \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]' \
 | sed 's/\./\//g')


PROTOFILE=$(cat $t \
 | grep name \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]')

mkdir -p protos/$FOLDER

 simple-generator -d $t -t _scripts/templates/single.message.proto.tmpl > protos/$FOLDER/$PROTOFILE.proto
done


echo "make the specs"
for t in `find ./specs -name '*.type.spec'`;
do
 protofile="`basename -s .type\.spec $t`.proto"

FOLDER=$(cat $t \
 | grep package \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]' \
 | sed 's/\./\//g')


PROTOFILE=$(cat $t \
 | grep name \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]')

mkdir -p protos/$FOLDER

 simple-generator -d $t -t _scripts/templates/single.message.proto.tmpl > protos/$FOLDER/$PROTOFILE.proto
done


echo "make the services"
for t in `find ./specs -name '*.service.spec'`;
do

 FOLDER=$(cat $t \
 | grep package \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]' \
 | sed 's/\./\//g')


PROTOFILE=$(cat $t \
 | grep name \
 | head -1 \
 | awk -F: '{ print $2 }' \
 | sed 's/[",]//g' \
 | tr -d '[[:space:]]')

 mkdir -p protos/$FOLDER
 simple-generator -d $t -t _scripts/templates/single.service.proto.tmpl > protos/$FOLDER/$PROTOFILE.proto
done
