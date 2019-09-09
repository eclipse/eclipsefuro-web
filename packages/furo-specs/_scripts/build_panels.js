#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
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

const TPLDirForms = config.custom_template_dir || __dirname + "/templates/forms";
const FormSpecDir = config.forms_spec_out;
const BuildDir = path.normalize(process.cwd() + "/" + config.build_output_dir);

// set the path to the simple-generator binary, empty if locally available
const pathToSimpleGeneratorBinary = config.path_to_simplegenerator || "";

let cwd = process.cwd();
if (BuildDir.search(cwd) === -1) {
    // buildpath outside cwd
    console.log(BuildDir + "\nbuildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
    process.exit(1);
}

// clean the build folder of the forms
sh("rm -rf", [BuildDir + "/forms/*"]);

let walkSync = function(dir) {
    let files = fs.readdirSync(dir);
    let filelist = [];
    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(file);
        }
    });
    return filelist;
};

let formSpecFileList = walkSync(FormSpecDir);

// create build output subfolder if not exist
if (!fs.existsSync(BuildDir+"/forms/")) {
    fs.mkdirSync(BuildDir+"/forms/");
}
// Loop form specs
formSpecFileList.forEach((file) => {

    // create form components if config.forms set to true
    if (config.forms){
        if (fs.existsSync(FormSpecDir+"/"+file)) {
            specFile = JSON.parse(fs.readFileSync(FormSpecDir+"/"+file));
            let formFileName = specFile.component_name+".js";
            // call the simple-generator to build
            sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", FormSpecDir+"/"+file, "-t", TPLDirForms + "/form.tmpl", ">", BuildDir+"/forms/"+formFileName]);

        } else {
            console.log(file + " not found.");
        }
    }

});
