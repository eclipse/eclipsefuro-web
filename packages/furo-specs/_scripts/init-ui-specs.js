#!/usr/bin/env node

const fs = require('fs');
const execSync = require('child_process').execSync;

let config;
// config öffnen
if (fs.existsSync('./ui.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./ui.spec.conf.json'));
} else {
  console.log("ui.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}

let templateDir = config.custom_template_dir || __dirname + "/templates/ui/";
let formsSpecDir = config.forms_spec_out;

//load template structure
let TPL = fs.readFileSync(templateDir + "form.spec.json");

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
    let target = formsSpecDir + "/" + t.join(".") + ".form.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
    }


  } else {
    console.log(type + " skipped, because it is in exclude list");
  }


});

