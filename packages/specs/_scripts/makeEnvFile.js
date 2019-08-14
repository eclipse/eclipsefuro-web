#!/usr/bin/env node

const fs = require('fs');

let apiConfig = "";
/*
// Services
let s = {};
let services = JSON.parse(fs.readFileSync('../_tmp/restlets.json'));
services.restlets.forEach((service)=>{
  s[service.general.name] = service
});
apiConfig = `export const Services =` + JSON.stringify(s);
*/

let t = {};
let specs = JSON.parse(fs.readFileSync('../_tmp/types.json'));
specs.types.forEach((type)=>{
  t[type.type] = type
});
apiConfig += `\nexport const Types =` + JSON.stringify(t);

fs.writeFileSync("../baseTypes.js", apiConfig);


console.log("apiConfig module created");

