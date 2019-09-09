#!/usr/bin/env node

const fs = require('fs');
const execSync = require('child_process').execSync;

let config;
// config öffnen
if (fs.existsSync('./panel.spec.conf.json')) {
    config = JSON.parse(fs.readFileSync('./panel.spec.conf.json'));
} else {
    console.log("panel.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
    process.exit(1);
}

function sh(command, arguments) {
    execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}

let templateDir = config.custom_template_dir || __dirname + "/templates/forms/";
let formsSpecDir = config.forms_spec_out;
// set the path to the simple-generator binary, empty if locally available
const pathToSimpleGeneratorBinary = config.path_to_simplegenerator || "";

// loop all types in config
config.init.types.forEach((type) => {
    console.log("checking " + type);
    let dir = config.spec_dir + "/" + type;
    let formspecfilename = formsSpecDir + "/"+ type + ".form.spec";
    let typespec = dir + "/" + type + ".type.spec";

    // exclude types in exclude list
    if (config.init.excludes.indexOf(type) == -1) {
        // create folder if not exist
        if (!fs.existsSync(formsSpecDir)) {
            fs.mkdirSync(formsSpecDir);
        }
        // create form spec file if not exist
        if (!fs.existsSync(formspecfilename)) {
            // call the simple-generator to build
            sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", typespec, "-t", templateDir + "form.spec.tmpl", ">", formspecfilename])
        }
    } else {
        console.log(type + " skipped, because it is in exclude list");
    }


});

