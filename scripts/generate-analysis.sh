#!/usr/bin/env bash

set -e

packages=(`find packages -name "package.json" -maxdepth 2 | xargs -I '{}' dirname '{}'`)



for package in ${packages[@]}; do
echo ${package}
polymer analyze ${package}/*.js > ${package}/analysis.json



done
