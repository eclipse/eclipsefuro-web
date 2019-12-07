#!/usr/bin/env node

const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');

let config;
// config öffnen
if (fs.existsSync('./furo.ui.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.ui.spec.conf.json'));
} else {
  console.log("furo.ui.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}


function sh(command, arguments) {
  execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}

const TplDir = config.custom_template_dir || __dirname + "/templates";
const SpecDir = config.spec_dir;
const UiSpecDir = config.ui_spec_out;

sh("mkdir -p", [UiSpecDir]);

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));

  });
  return filelist;
};

//load template structure
let U33TEMPLATE = fs.readFileSync(TplDir + "/template.u33e");


let typelist = walkSync(SpecDir).filter((filepath) => {
  if (path.basename(filepath).indexOf("_") >= 0) {
    // ignore type_collection or type_entity
    return false;
  }
  return (path.basename(filepath).indexOf("type.spec") > 0)
});

let getBestMatchingComponent = function (field) {
  let component = "furo-data-text-input";

  // check which componet matches best with the simple types
  switch (field.type) {
    case "int":
    case "int32":
    case "int64":
      component = "furo-data-number-input";
      break;
    case "google.type.Date":
      component = "furo-data-date-input";
      break;
    case "google.type.Money":
      component = "furo-data-money-input";
      break;
    case "furo.Property":
      component = "furo-data-property";
      break;
    default:
      component = "furo-data-text-input";
  }

  // use spec ui hint as component
  if (field.__ui && field.__ui.component) {
    component = field.__ui.component;
  }

  return component;
};
let writeFile = function (target, Spec) {
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, JSON.stringify(Spec, null, 2));
  } else {
    // open file and check for "_writeprotection": false,
    let f = JSON.parse(fs.readFileSync(target));
    if (f._writeprotection === false) {
      fs.writeFileSync(target, JSON.stringify(Spec, null, 2));
    } else {
      console.log("skip " + target);
    }
  }
};

// loop all types in config
typelist.forEach((pathToTypeSpec) => {
  // types are defined as package.Typename ==> ~/package/typename.type.spec
  let t = path.basename(pathToTypeSpec).split(".");
  t = t.map((s) => {
    return s.toLowerCase()
  });

  t.pop();
  // create package folder
  sh("mkdir -p", [UiSpecDir + "/" + t[0]]);
  const PKGDIR = UiSpecDir + "/" + t[0];

  /**
   * Form
   */
  let formSpec = JSON.parse(U33TEMPLATE);
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
    let fld = {
      "description": "field: " + fieldname,
      "component": "furo-data-text-input",
      "flags": [
        "condensed"
      ],
      "attributes": {
        "ƒ-bind-data": "--data(*." + fieldname + ")"
      }
    };

    let component = getBestMatchingComponent(field);
    let arrTmpName = field.type.split(".");
    //  complex type has a cutom form component
    if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {
      component = field.type.toLowerCase().replace(".", "-") + "-form";
      // exclude self import
      if (formSpec.component !== component) {
        // check whether the imported file is under the same folder
        if (t[0] !== arrTmpName[0]) {
          formSpec.imports.push("../" + arrTmpName[0] + "/" + component + ".js");
        } else {
          formSpec.imports.push("./" + component + ".js");
        }
      }
    }

    fld.component = component;

    // repeated fields can use furo-data-repeat component
    if (field.meta && field.meta.repeated && field.type != "furo.Property") {
      let value_name = fld.component;
      fld.component = "furo-data-repeat";

      fld.attributes["repeated-component"] = value_name;

    }

    // special type furo.Reference
    if (field.type === "furo.Reference") {
      if (field.meta && field.meta.default && field.meta.default.link && field.meta.default.link.type) {
        let f = field.meta.default.link.type;
        fld.component = f.toLowerCase().replace(".", "-") + "-reference-search";

        let folder = f.split(".")[0];
        // exclude self import
        if (formSpec.component !== fld.component) {
          // check whether the imported file is under the same folder
          if (t[0] !== folder) {
            formSpec.imports.push("../" + folder + "/" + fld.component + ".js");
          } else {
            formSpec.imports.push("./" + fld.component + ".js");
          }
        }
      }
    }
    fields.push(fld);
  }

  // focus the first field
  fields[0].methods =  {"focus": "--focused"}

  formSpec.template = [{
    "description": "form",
    "component": "furo-form-layouter",
    "flags": [
      "four"
    ],
    "children": fields
  }];

  let target = PKGDIR + "/" + formSpec.component_name + ".u33e";
  writeFile(target, formSpec);

  // reset imports for create spec
  formSpec.imports = [
    "@furo/data-input",
    "@furo/form"
  ];

  formSpec.class_name = spec.__proto.package + spec.type + "CreateForm";
  formSpec.class_name = formSpec.class_name[0].toUpperCase() + formSpec.class_name.substr(1);
  formSpec.component_name = (spec.__proto.package + "-" + spec.type + "-create-form").toLowerCase();
  // fields for the create form (only req fields)
  let createFields = [];
  for (fieldname in spec.fields) {
    let field = spec.fields[fieldname];
    if (field.constraints && field.constraints.required) {
      let fld = {
        "description": "field: " + fieldname,
        "component": "furo-data-text-input",
        "flags": [
          "condensed"
        ],
        "attributes": {
          "ƒ-bind-data": "--data(*." + fieldname + ")"
        }
      };

      let component = getBestMatchingComponent(field);

      let arrTmpName = field.type.split(".");
      //  complex type has a cutom form component
      if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {
        component = field.type.toLowerCase().replace(".", "-") + "-form";

        // exclude self import
        if (formSpec.component !== component) {
          // check whether the imported file is under the same folder
          if (t[0] !== arrTmpName[0]) {
            formSpec.imports.push("../" + arrTmpName[0] + "/" + component + ".js");
          } else {
            formSpec.imports.push("./" + component + ".js");
          }
        }
      }

      fld.component = component;

      // repeated fields can use furo-data-repeat component
      if (field.meta && field.meta.repeated && field.type != "furo.Property") {
        let value_name = fld.component;
        fld.component = "furo-data-repeat";
        fld.attributes["repeated-component"] = value_name;
      }

      // special type furo.Reference
      if (field.type === "furo.Reference") {
        if (field.meta && field.meta.default && field.meta.default.link && field.meta.default.link.type) {
          let f = field.meta.default.link.type;
          fld.component = f.toLowerCase().replace(".", "-") + "-reference-search";

          let folder = f.split(".")[0];
          // exclude self import
          if (formSpec.component !== fld.component) {
            // check whether the imported file is under the same folder
            if (t[0] !== folder) {
              formSpec.imports.push("../" + folder + "/" + fld.component + ".js");
            } else {
              formSpec.imports.push("./" + fld.component + ".js");
            }
          }

        }
      }

      createFields.push(fld);

    } else {
      delete field;
    }

  }
  // focus the first field
  fields[0].methods =  {"focus": "--focused"}
  formSpec.template = [{
    "description": "form layouter",
    "component": "furo-form-layouter",
    "flags": [
      "four"
    ],
    "children": fields
  }];

  target = PKGDIR + "/" + formSpec.component_name + ".u33e";
  writeFile(target,formSpec);

  /**
   * CREATE WIDGETS
   * analog create.form.spec a create.widget.spec is created
   */
  let widgetSpec = JSON.parse(U33TEMPLATE);

  widgetSpec.theme = "WidgetBaseTheme";
  widgetSpec.class_name = spec.__proto.package + spec.type + "CreateWidget";
  widgetSpec.class_name = widgetSpec.class_name[0].toUpperCase() + widgetSpec.class_name.substr(1);
  widgetSpec.component_name = (spec.__proto.package + "-" + spec.type + "-create-widget").toLowerCase();
  widgetSpec.source = pathToTypeSpec;
  widgetSpec.description = spec.description;
  widgetSpec.template[0].fields = createFields;

  target = PKGDIR + "/" + t.join(".") + ".create.widget.spec";
  writeFile(target, widgetSpec);


  /**
   * Display
   */
  let displaySpec = JSON.parse(U33TEMPLATE);
  displaySpec.class_name = spec.__proto.package + spec.type + "Display";
  displaySpec.class_name = displaySpec.class_name[0].toUpperCase() + displaySpec.class_name.substr(1);
  displaySpec.component_name = (spec.__proto.package + "-" + spec.type + "-display").toLowerCase();
  displaySpec.description = spec.description;
  displaySpec.source = pathToTypeSpec;

  // filter out readonly fields like id, display_name,...
  fields = [];
  for (fieldname in spec.fields) {
    let field = spec.fields[fieldname];
    if (field.meta && field.meta.readonly) {
      delete field;
      continue
    }

    let component = "furo-data-display";

    let arrTmpName = field.type.split(".");
    //  complex type has a cutom form component
    if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {

      component = field.type.toLowerCase().replace(".", "-") + "-display";

      if (displaySpec.component !== component) {

        if (t[0] !== arrTmpName[0]) {
          displaySpec.imports.push("../" + arrTmpName[0] + "/" + component + ".js");
        } else {
          displaySpec.imports.push("./" + component + ".js");
        }
      }
    }

    // check which componet matches best with the simple types
    switch (field.type) {

      case "furo.Property":
        component = "furo-data-property-display";
        break;
    }

    let fld = {
      "description": "field: " + fieldname,
      "component": component,
      "flags": [
        "condensed",
      ],
      "attributes": {
        "ƒ-bind-data": "--data(*." + fieldname + ")"
      }
    };


    fld.component = component;

    // repeated fields can use furo-data-repeat component
    if (field.meta && field.meta.repeated && field.type != "furo.Property") {
      let value_name = fld.component;
      fld.component = "furo-data-repeat";

      fld.attributes["repeated-component"] = value_name;

    }

    fld.component = component;


    // repeated fields can use furo-data-repeat component
    if (field.meta && field.meta.repeated && field.type != "furo.Property") {
      fld.attributes["repeated-component"] = component;

      fld.component = "furo-data-repeat";
    }

    fields.push(fld);
  }
  // focus the first field
  fields[0].methods =  {"focus": "--focused"}

  displaySpec.template = [{
    "description": "form layouter",
    "component": "furo-form-layouter",
    "flags": [
      "four"
    ],
    "children": fields
  }];

  target = PKGDIR + "/" + displaySpec.component_name + ".u33e";
  writeFile(target, displaySpec);


});

