#! /bin/bash
if [ -z "$1" ]
then
  echo "argument type is missing"
exit 1
fi

./_scripts/makeEntityAndCollectionFromType.sh $1
./_scripts/makeServiceFromType.sh $1

