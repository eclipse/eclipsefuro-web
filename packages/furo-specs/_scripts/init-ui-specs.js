#!/usr/bin/env node

const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');

let config;
// config öffnen
if (fs.existsSync('./ui.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./ui.spec.conf.json'));
} else {
  console.log("ui.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}


const TplDir = config.custom_template_dir || __dirname + "/templates/ui";
const FormSpecDir = config.form_spec_out;
const ActionSpecDir = config.action_spec_out;
const PanelSpecDir = config.panel_spec_out;
const SpecDir = config.spec_dir;
const TmpDir = "./__tmp/ui";

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {

    filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));

  });
  return filelist;
};

//load template structure
let TPL = fs.readFileSync(TplDir + "/form.spec.json");

// loop all types in config
config.init.types.forEach((type) => {
  // types are defined as package.Typename ==> ~/package/typename.type.spec
  console.log("checking " + type);
  let t = type.split(".");
  t = t.map((s) => {
    return s.toLowerCase()
  });

  let pathToTypeSpec = config.spec_dir + "/" + t.join("/") + ".type.spec";


  // exclude types in exclude list
  if (config.init.excludes.indexOf(type) == -1) {
    let formSpec = JSON.parse(TPL);
    let spec = JSON.parse(fs.readFileSync(pathToTypeSpec));
    formSpec.class_name = spec.__proto.package + spec.type + "Form";
    formSpec.class_name = formSpec.class_name[0].toUpperCase() + formSpec.class_name.substr(1);
    formSpec.component_name = (spec.__proto.package + "-" + spec.type + "-form").toLowerCase();
    formSpec.description = spec.description;
    formSpec.source = pathToTypeSpec;

    // filter out readonly fields like id, display_name,...
    let fields = [];
    for (fieldname in spec.fields) {
      let field = spec.fields[fieldname];
      if (field.meta && field.meta.readonly) {
        delete field;
        continue
      }
      fields.push({
        "field": fieldname, "attrs": [
          "condensed",
          "double"
        ]
      })
    }


    formSpec.fieldgroups[0].fields = fields;
    let target = FormSpecDir + "/" + t.join(".") + ".form.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
    }

    formSpec.class_name = spec.__proto.package + spec.type + "CreateForm";
    formSpec.class_name = formSpec.class_name[0].toUpperCase() + formSpec.class_name.substr(1);
    formSpec.component_name = (spec.__proto.package + "-" + spec.type + "-create-form").toLowerCase();
    // fields for the create form (only req fields)
    let createFields = [];
    for (fieldname in spec.fields) {
      let field = spec.fields[fieldname];
      if (field.constraints && field.constraints.required) {
        createFields.push({
          "field": fieldname, "attrs": [
            "condensed",
            "double"
          ]
        })
      } else {
        delete field;
      }


    }
    formSpec.fieldgroups[0].fields = createFields;
    target = FormSpecDir + "/" + t.join(".") + ".create.form.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
    }

  } else {
    console.log(type + " skipped, because it is in exclude list");
  }


});


/**
 * PANELS Section
 */


//load template structure
let UpdateTPL = fs.readFileSync(TplDir + "/update.panel.spec.json");

let servicelist = walkSync(SpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("service.spec") > 0)
});

servicelist.forEach((service) => {

  let updatespec = JSON.parse(UpdateTPL);
  let serviceSpec = JSON.parse(fs.readFileSync(service));
  if (serviceSpec.services.Update) {
    updatespec.class_name = serviceSpec.services.Update.data.request.replace(".", "") + "UpdatePanel";
    updatespec.component_name = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-update-panel";
    updatespec.description = serviceSpec.services.Update.description;
    updatespec.source = "./" + service;
    updatespec.service_name = serviceSpec.name;
    updatespec.request_type = serviceSpec.services.Update.data.request;
    updatespec.response_type = serviceSpec.services.Update.data.response;
    updatespec.form.name = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-form";
    updatespec.imports.push("../forms/" + updatespec.form.name);
    let updateAction = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-update-action";
    updatespec.imports.push("../actions/" + updateAction);
    updatespec.action.name = updateAction;


    let target = PanelSpecDir + "/" + serviceSpec.services.Update.data.request.toLowerCase() + ".update.panel.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(updatespec, null, 2));
    }
  }
});


/**
 * ACTIONS Section
 */


//load template structure
let ActionUpdateTPL = fs.readFileSync(TplDir + "/update.action.spec.json");



servicelist.forEach((service) => {

  let updatespec = JSON.parse(ActionUpdateTPL);
  let serviceSpec = JSON.parse(fs.readFileSync(service));
  if (serviceSpec.services.Update) {
    let target = ActionSpecDir + "/" + serviceSpec.services.Update.data.request.toLowerCase() + ".update.action.spec";

    updatespec.class_name = serviceSpec.services.Update.data.request.replace(".", "") + "UpdateAction";
    updatespec.component_name = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-update-action";
    updatespec.description = serviceSpec.description;
    updatespec.source = target;
    updatespec.service_name = serviceSpec.name;
    updatespec.request_type = serviceSpec.services.Update.data.request;
    updatespec.response_type = serviceSpec.services.Update.data.response;

    // items based on spec
    if (serviceSpec.services.Update) {
      updatespec.items.push({
        "label": "save",
        "rel": "update",
        "icon": null,
        "component": "furo-button",
        "onclick": "-^update-req",
        "attrs": [
          "primary",
          "unelevated"
        ]
      })
    }

    // items based on spec
    if (serviceSpec.services.Get) {
      updatespec.items.push({
        "label": "reload",
        "rel": "self",
        "icon": null,
        "component": "furo-button",
        "onclick": "-^self-req",
        "attrs": [
          "outline"
        ]
      })
    }

    updatespec.items.push({"component": "furo-empty-spacer"});
    updatespec.items.push({
      "label": "cancel",
      "rel": "reset",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^reset-req",
      "attrs": [
        "outline"
      ]
    });

    // items based on spec
    if (serviceSpec.services.Delete) {
      updatespec.items.push({
        "label": "delete",
        "rel": "delete",
        "icon": "delete",
        "component": "furo-button",
        "onclick": "-^delete-req",
        "attrs": [
          "unelevated",
          "danger",
        ]
      })
    }

    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(updatespec, null, 2));
    }
  }
});


