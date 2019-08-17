#! /bin/bash

if [ -z "$1" ]
then
exit 1
fi

BASETYPE=$1
OUTPUTFILESERVICE=$BASETYPE".service.spec"

simple-generator -d specs/$BASETYPE.type.spec -t _scripts/templates/ServiceFromType.tmpl > specs/$OUTPUTFILESERVICE



