#!/usr/bin/env node


const fs = require('fs');
const os = require('os');
const path = require('path');
const exec = require('child_process').exec;

let config;
// config öffnen
if (fs.existsSync('./furo.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.spec.conf.json'));
} else {
  console.log("furo.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}

function sh(command, arguments) {
  exec(command + " " + arguments.join(" "),
      (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      });
}



// check if the folder is a sub directory of the project
let buildpath = path.normalize(process.cwd() + "/" + config.build_output_dir);
let cwd = process.cwd();
if(buildpath.search(cwd)===-1){
  // buildpath outside cwd
  console.log("buildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
  process.exit(1);
}
// clean the build folder
sh("rm -rf", [buildpath + "/*"]);

// preprocess
sh(__dirname + "/prepare.sh", [config.spec_dir]);
sh(__dirname + "/prepareBundled.sh", [config.spec_dir]);



// Mix conf with services_bundled

// Create proto files


// erstellen des protoc commands


// single build


// bundled build


// environment build


// gateway build


