#!/usr/bin/env node
/**
 * Generates components from all u33e in ui_spec dir to component_output_dir
 * @type {module:fs}
 */
const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

let config;
// config öffnen
if (fs.existsSync('./furo.ui.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.ui.spec.conf.json'));
} else {
  console.log("furo.ui.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}


function sh(command, arguments) {
  return execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}

const GeneratorTemplate = config.generator_template;
const UiSpecDir = config.ui_spec_out;
const SpecDir = config.spec_dir;
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
sh("rm -rf", [BuildDir + "/*"]);

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {

    filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));

  });
  return filelist;
};

let list = walkSync(UiSpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf(".u33e") > 0)
});

let specdirsegment = UiSpecDir.replace("./","") + "/";
/**
 * build each file in spec dir to target dir
 */
list.forEach((filepath) => {
  let datafile = [cwd, filepath].join("/");
  let targetfile = [BuildDir, filepath.replace(specdirsegment, "").replace(".u33e",".js")].join("/");
  sh("mkdir -p", [path.dirname(targetfile)]);
  // run generator
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", datafile, "-t", GeneratorTemplate, ">", targetfile]);
});
