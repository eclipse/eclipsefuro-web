#! /bin/bash

if [ -z "$3" ]
then
  echo './_scripts/makeMinimalType name type "description"'
exit 1
fi

if [ -z "$4" ]
then
  PROTO="string"
else
  PROTO=$4

fi

NAME=$1
echo '{"name":"'$1'","type":"'$2'","description":"'$3'","proto_type":"'$PROTO'"}' > ./_tmpType.json
OUTPUTFILESERVICE=$NAME".type.spec"

simple-generator -d ./_tmpType.json -t _scripts/templates/MinimalType.tpl > specs/$OUTPUTFILESERVICE
rm ./_tmpType.json

