#!/usr/bin/env bash
if [ -z "$1" ]
then
PACKAGEBUNDLENAME="default"
else
PACKAGEBUNDLENAME=$1
fi


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
cd ..

echo "clean proto dir"
rm -rf build/*

./_scripts/prepareBundled.sh $PACKAGEBUNDLENAME
./_scripts/generateBundledFiles.sh

./_scripts/prepare.sh $PACKAGEBUNDLENAME
./_scripts/generateClientEnviroment.js

./_scripts/generateSingleFiles.sh


./_scripts/protocHelper.sh person
./_scripts/protocHelper.sh project
./_scripts/protocHelper.sh task
./_scripts/protocHelper.sh tree


./_scripts/protocHelper.sh protobuf
./_scripts/protocHelper.sh google
./_scripts/protocHelper.sh furo


./_scripts/protocHelper.sh bundled


