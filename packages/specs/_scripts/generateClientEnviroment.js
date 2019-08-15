#!/usr/bin/env node
/**
 * Run this to create an environment.js
 * You have to run scripts/generate.sh before you run this
 */
const fs = require('fs');

let apiSpecs = "";

// Services
let s = {};
let services = JSON.parse(fs.readFileSync('_tmp/services.json'));
services.services.forEach((service)=>{
  s[service.name] = service
});
apiSpecs = `export const Services =` + JSON.stringify(s);

let t = {};
let specs = JSON.parse(fs.readFileSync('_tmp/types.json'));
specs.types.forEach((type)=>{
  t[type.type] = type
});
apiSpecs += `\nexport const Types =` + JSON.stringify(t);

fs.writeFileSync("build/api_spec.js", apiSpecs);


console.log("build/api_spec.js created");

