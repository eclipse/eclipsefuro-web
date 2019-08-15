#! /bin/bash

if [ -z "$1" ]
then
exit 1
fi

BASETYPE=$1
OUTPUTFILEENTITY=$BASETYPE"_entity.type.spec"
OUTPUTFILECOLLECTION=$BASETYPE"_collection.type.spec"
simple-generator -d specs/$BASETYPE.type.spec -t _scripts/templates/EntityFromType.tmpl > specs/$OUTPUTFILEENTITY
simple-generator -d specs/$BASETYPE.type.spec -t _scripts/templates/CollectionFromType.tmpl > specs/$OUTPUTFILECOLLECTION

