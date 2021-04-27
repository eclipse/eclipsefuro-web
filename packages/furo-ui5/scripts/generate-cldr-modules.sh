#!/usr/bin/env bash
# Generates CLDR JS Modules for every given locale.

cwd=$(pwd)

# array of given locales
allLocales=()

# path to sap cldr json files
PATH_CLDR="../../node_modules/@ui5/webcomponents-localization/dist/generated/assets/cldr/"

# CLDR Js module save path
PATH_TARGET="assets/cldr/"

i=1;
j=$#;
while [ $i -le $j ]
do
    allLocales+=( $1 );
    i=$((i + 1));
    shift 1;
done

# reads the json locale file from the installed node_module
# @ui5/webcomponents-localization/dist/generated/assets/cldr/LOCALE.json
get_json_cldr() {
 cd $PATH_CLDR
 file=$1.json
 module_name=$(sed 's/_//g' <<<"$1")

 # read json file
 file_content=$(echo "$a" | sed "s/'/\\\'/g" $file)
 # add module syntax and embed json content
 module_content=$(echo "const" $module_name "= () => {const data ='" $file_content "'; return JSON.parse(data);} export default "$module_name";")

 # write file to target path
 cd $cwd
 echo $module_content
 cd $PATH_TARGET
 if [ -f $1.js ]; then
   rm $1.js
 fi
 echo "$module_content" >> $1.js
}

# main processes the list of locales
for t in ${allLocales[@]}; do
  cd $cwd
  get_json_cldr "$t"
done
