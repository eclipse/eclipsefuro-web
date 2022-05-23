#!/usr/bin/env bash
set -e
moduleDir=$(pwd)/hugo/content/docs/modules
injectsDir=$(pwd)/hugo/content/docs/redactional
templatesDir=$(pwd)/scripts/templates

cwd=$(pwd)
# copy @furo node modules to tmp
rm -rf tmp/*
mkdir -p tmp

cd packages

packageDir=$(pwd)
tmpDir="$cwd/tmp"

# check if argument was given
if [ "$1" == "" ] || [ $# -gt 1 ]; then
  modules=$(ls -d *)
else
  modules=$1
fi


for module in $modules; do
  collection=$(cat $packageDir/$module/package.json | jq .version)
  mkdir -p $tmpDir/$module/

  # copy our manifest to the target

  cd $packageDir/$module

  $cwd/node_modules/.bin/cem analyze --litelement --globs "src/**/*.js" --exclude **/furo-catalog.js
  cp custom-elements.json $tmpDir/$module
  cp package.json $tmpDir/$module

  cd $tmpDir/$module

  mkdir -p $moduleDir/$module
  mkdir -p $injectsDir/$module

  # redactional content per module, will be included from templates/__index.md.tpl
  touch $injectsDir/$module/"_"$module"-head.md"
  touch $injectsDir/$module/"_"$module"-description.md"
  touch $injectsDir/$module/"_"$module"-footer.md"

  COMPONENTINDEX=0

  ## loop custom-elements.json
  for row in $(cat custom-elements.json | jq -r '.modules[] | @base64'); do

    _jq() {
      echo ${row} | base64 --decode | jq -r ${1}
    }
    component=$(_jq '.declarations[0].tagName')
    # echo $component

    if [ "$component" == "null" ]; then
      name=$(_jq '.declarations[0].name')

      if [ "$name" == "null" ]; then
        echo "************************ not class and not component"
      else

        echo $name
        path=$(_jq '.path')

        echo '{"path":"'$path'","module":"'$module'", "name":"'$name'"}' | jq . >base.json
        jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX].declarations[0]' custom-elements.json >$name.decl.json
        jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX]' custom-elements.json >$name.cem.json
        jq -s '. | {"decl": .[3] , "path": .[2].path,"name": .[2].name, "module": .[2].module, "pkg": .[0], "cem": .[1] }' package.json $name.cem.json base.json $name.decl.json >$name.json
        simple-generator -d $name.json -t $templatesDir/class.md.tpl >$moduleDir/$module/$name.md
      fi

    else
      echo $component
      mkdir -p $injectsDir/$module/$component
      touch $injectsDir/$module/$component/"_"$component"-head.md"

      # generate the component documentation itself
      echo '{"module":"'$module'", "component":"'$component'"}' | jq . >base.json
      jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX].declarations[0]' custom-elements.json >$component.decl.json
      jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX]' custom-elements.json >$component.cem.json
      jq -s '. | {"decl": .[3] , "component": .[2].component, "module": .[2].module, "pkg": .[0], "cem": .[1] }' package.json $component.cem.json base.json $component.decl.json >$component.json
      simple-generator -d $component.json -t $templatesDir/component.md.tpl >$moduleDir/$module/$component.md
    fi
    COMPONENTINDEX=$((COMPONENTINDEX + 1))
  done
  echo "Overview"
  # create the overview _module-inside.md
  simple-generator -d custom-elements.json -t $templatesDir/module.components.md.tpl > $moduleDir/$module/_$module-inside.md
echo "Module Index"
  # _module.md

  echo '{"module":"'$module'", "collection":'$collection'}' | jq . > base.json

  jq -s '. | {"collection": .[2].collection, "module": .[2].module, "pkg": .[0], "cem": .[1]}' package.json custom-elements.json base.json >big.json

  simple-generator -d big.json -t $templatesDir/_index.md.tpl >$moduleDir/$module/_index.md

done
