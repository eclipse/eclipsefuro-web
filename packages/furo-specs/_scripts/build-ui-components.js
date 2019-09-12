#!/usr/bin/env node

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

const TplDir = config.custom_template_dir || __dirname + "/templates/ui";
const FormSpecDir = config.form_spec_out;
const DisplaySpecDir = config.display_spec_out;
const PanelSpecDir = config.panel_spec_out;
const ActionSpecDir = config.action_spec_out;
const DisplayPanelSpecDir = config.displaypanel_spec_out;
const SpecDir = config.spec_dir;
const BuildDir = path.normalize(process.cwd() + "/" + config.build_output_dir);
const TmpDir = "./__tmp/ui";

// set the path to the simple-generator binary, empty if locally available
const pathToSimpleGeneratorBinary = config.path_to_simplegenerator || "";

let cwd = process.cwd();
if (BuildDir.search(cwd) === -1) {
  // buildpath outside cwd
  console.log(BuildDir + "\nbuildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
  process.exit(1);
}

// clean the build folder of the forms
sh("rm -rf", [BuildDir + "/ui/*"]);

sh("mkdir -p", [BuildDir + "/ui/forms"]);
sh("mkdir -p", [BuildDir + "/ui/actions"]);
sh("mkdir -p", [BuildDir + "/ui/panels"]);
sh("mkdir -p", [BuildDir + "/ui/displays"]);
sh("mkdir -p", [BuildDir + "/ui/displaypanels"]);
sh("mkdir -p", [TmpDir]);

// get all *.form.spec and build temporal data file

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {

    filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));

  });
  return filelist;
};

let list = walkSync(FormSpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("form.spec") > 0)
});

// generate tmp data file for each file in list
list.forEach((filepath) => {
  let formspec = JSON.parse(fs.readFileSync(filepath));
  // load spec
  let typespec = JSON.parse(fs.readFileSync(formspec.source));
  //mix specs with formspec
  formspec.fieldgroups.forEach((group) => {
    group.fields.forEach((field) => {
      if (field.field) {
        // use component from typespec, when not in formspec
        if (!field.component) {

          if (typespec.fields[field.field] && typespec.fields[field.field].__ui && typespec.fields[field.field].__ui.component) {
            field.component = typespec.fields[field.field].__ui.component;
          } else {
            // use furo-data-text-input as fallback
            field.component = "furo-data-text-input";
          }
        }
        if (typespec.fields[field.field]) {
          field.spec = typespec.fields[field.field];
        }
      }
    });
  });

  // save to __tmp
  let datafile = [TmpDir, path.basename(filepath)].join("/");
  fs.writeFileSync(datafile, JSON.stringify(formspec));
  // run generator
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", datafile, "-t", TplDir + "/form.tmpl", ">", BuildDir + "/ui/forms/" + formspec.component_name + ".js"]);

});

/**
 * DISPLAY SECTION
 *
 */


list = walkSync(DisplaySpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("display.spec") > 0)
});

// generate tmp data file for each file in list
list.forEach((filepath) => {

  let displayspec = JSON.parse(fs.readFileSync(filepath));
  // load spec
  let typespec = JSON.parse(fs.readFileSync(displayspec.source));
  //mix specs with displayspec
  displayspec.fieldgroups.forEach((group) => {
    group.fields.forEach((field) => {
      if (field.field) {
        // use component from typespec, when not in displayspec
        if (!field.component) {

          if (typespec.fields[field.field] && typespec.fields[field.field].__ui && typespec.fields[field.field].__ui.component) {
            field.component = typespec.fields[field.field].__ui.component;
          } else {
            // use furo-data-text-input as fallback
            field.component = "furo-data-display";
          }
        }
        if (typespec.fields[field.field]) {
          field.spec = typespec.fields[field.field];
        }
      }
    });
  });

  // save to __tmp
  let datafile = [TmpDir, path.basename(filepath)].join("/");
  fs.writeFileSync(datafile, JSON.stringify(displayspec));
  // run generator
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", datafile, "-t", TplDir + "/display.tmpl", ">", BuildDir + "/ui/displays/" + displayspec.component_name + ".js"]);

});


/**
 * Panel section
 */

let panellist = walkSync(PanelSpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("panel.spec") > 0)
});
// collect data for the panel registry
let registry = {"imports": new Set, panels: {}};

// generate tmp data file for each file in list
panellist.forEach((datafile) => {
  let panelspec = JSON.parse(fs.readFileSync(datafile));
  // register imports for registry
  registry.imports.add("./panels/" + panelspec.component_name);
  if (!registry.panels[panelspec.response_type]) {
    registry.panels[panelspec.response_type] = {};
  }
  registry.panels[panelspec.response_type].edit = panelspec.component_name;
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", datafile, "-t", TplDir + "/update.panel.tmpl", ">", BuildDir + "/ui/panels/" + panelspec.component_name + ".js"]);
});


/**
 * Displaypanel section
 */

let displaypanellist = walkSync(DisplayPanelSpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("display.panel.spec") > 0)
});
// collect data for the displaypanel registry


// generate tmp data file for each file in list
displaypanellist.forEach((datafile) => {
  let displaypanelspec = JSON.parse(fs.readFileSync(datafile));
  // register imports for registry
  registry.imports.add("./displaypanels/" + displaypanelspec.component_name);

  if (!registry.panels[displaypanelspec.response_type]) {
    registry.panels[displaypanelspec.response_type] = {};
  }
  registry.panels[displaypanelspec.response_type].display = displaypanelspec.component_name;

  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", datafile, "-t", TplDir + "/display.panel.tmpl", ">", BuildDir + "/ui/displaypanels/" + displaypanelspec.component_name + ".js"]);
});


/**
 * Action section
 */

let actionlist = walkSync(ActionSpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("action.spec") > 0)
});

// generate tmp data file for each file in list
actionlist.forEach((datafile) => {

  let actionspec = JSON.parse(fs.readFileSync(datafile));
  sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", datafile, "-t", TplDir + "/update.action.tmpl", ">", BuildDir + "/ui/actions/" + actionspec.component_name + ".js"]);
});


/**
 * Registry
 */

// convert imports to array
registry.imports = Array.from(registry.imports);
let registryjson = TmpDir + "/registry.json";
fs.writeFileSync(registryjson, JSON.stringify(registry));

sh(pathToSimpleGeneratorBinary + "simple-generator", ["-d", registryjson, "-t", TplDir + "/registry.tmpl", ">", BuildDir + "/ui/registry.js"]);
