#!/usr/bin/env bash
if [ -z "$1" ]
then
PACKAGEBUNDLENAME="default"
else
PACKAGEBUNDLENAME=$1
fi

echo $PACKAGEBUNDLENAME

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
cd ..
pwd

./_scripts/prepare.sh $PACKAGEBUNDLENAME
./_scripts/generateSingleFiles.sh
./_scripts/generateBundledFiles.sh
./_scripts/makeEnvFile.js
./_scripts/genswagger.sh


