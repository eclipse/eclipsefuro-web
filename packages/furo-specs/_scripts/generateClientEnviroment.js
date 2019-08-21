#!/usr/bin/env node
/**
 * Run this to create an environment.js
 * You have to run scripts/generate.sh before you run this
 */
const fs = require('fs');

let apiSpecs = "";
let bundledImport = new Set();
// Services
let s = {};
let services = JSON.parse(fs.readFileSync('_tmp/services.json'));
services.services.forEach((service) => {
    s[service.name] = service;
    //collect all imports
    (s[service.name].__proto.imports).forEach((el)=>{
        if(el.indexOf('/') === -1){
            bundledImport.add(s[service.name].__proto.package + "/" + el);

        }else {
            console.log(el)
            bundledImport.add(el);

        }


    })
});


services.imports = Array.from(bundledImport);
fs.writeFileSync("_tmp/services.json", JSON.stringify(services));
apiSpecs = `export const Services =` + JSON.stringify(s);

let t = {};
let specs = JSON.parse(fs.readFileSync('_tmp/types.json'));
specs.types.forEach((type) => {
    t[type.__proto.package + "." + type.type] = type
});
apiSpecs += `\nexport const Types =` + JSON.stringify(t);

fs.writeFileSync("build/data_environment.js", apiSpecs);


console.log("build/data_environment.js created");
