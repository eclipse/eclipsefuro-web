#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
cd ..
pwd

./_scripts/prepare.sh
./_scripts/generateSingleFiles.sh
./_scripts/generateBundledFiles.sh
./_scripts/makeEnvFile.js


