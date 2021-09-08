#!/usr/bin/env bash
set -e


cwd=`pwd`

cd packages

startDir=`pwd`

# check if argument was given
if [ "$1" == "" ] || [ $# -gt 1 ]; then
modules=$(ls -d *)
else
  modules=$1
fi

for module in $modules; do

  CONF=$startDir/$module/custom-elements-manifest.config.mjs
if test -f "$CONF"; then
 echo $module
 # copy our manifest to the target
 cd $startDir/$module
 $cwd/node_modules/.bin/cem  analyze --globs "src/**/*.js" --exclude **/furo-catalog.js --litelement
else
  echo "$CONF not found, skip $module "
fi

done

cd $cwd
