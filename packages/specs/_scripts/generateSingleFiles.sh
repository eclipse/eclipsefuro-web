#! /bin/bash

echo "make the specs"
for t in types/*.spec;
do
 protofile="`basename -s .spec $t`.proto"
 simple-generator -d $t -t _scripts/templates/single.message.proto.tmpl > protos/$protofile
done


echo "make the services"
for t in services/*.spec;
do
 protofile="`basename -s .spec $t`.proto"
 simple-generator -d $t -t _scripts/templates/single.service.proto.tmpl > protos/service_$protofile
done
