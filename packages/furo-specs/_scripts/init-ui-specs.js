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

const TplDir = config.custom_template_dir || __dirname + "/templates/ui";
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
let FORMTPL = fs.readFileSync(TplDir + "/form.spec.json");
let WIDGETTPL = fs.readFileSync(TplDir + "/create.widget.spec.json");
let DISPLAYTPL = fs.readFileSync(TplDir + "/display.spec.json");


let typelist = walkSync(SpecDir).filter((filepath) => {
  if (path.basename(filepath).indexOf("_") >= 0) {
    // ignore type_collection or type_entity
    return false;
  }
  return (path.basename(filepath).indexOf("type.spec") > 0)
});

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
  let formSpec = JSON.parse(FORMTPL);
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
      "field": fieldname,
      "component":"furo-data-text-input",
      "flags": [
        "condensed",
        "double"
      ],
      "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
    };

    let component_name = "furo-data-text-input";

    // check which componet matches best with the simple types
    switch(field.type) {

      case "int":
      case "int32":
      case "int64":
        component_name = "furo-data-number-input";
        break;
      case "google.type.Date":
        component_name = "furo-data-date-input";
        break;
      case "google.type.Money":
        component_name = "furo-data-money-input";
        break;
      case "furo.Property":
        component_name = "furo-data-property";
        break;
    }

    let arrTmpName = field.type.split(".");
    //  complex type has a cutom form component
    if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {
      component_name = field.type.toLowerCase().replace(".", "-") + "-form";
      formSpec.imports.push("../" + arrTmpName[0] + "/" + component_name);
    }

    fld.component = component_name;

    // repeated fields can use furo-data-repeat component
    if (field.meta && field.meta.repeated && field.type != "furo.Property") {
      let value_name = fld.component;
      fld.component = "furo-data-repeat";

      fld.attrs = [
        {"name": "repeated-component", "value": value_name }
      ]
    }

    // special type furo.Reference
    if (field.type === "furo.Reference") {
      if (field.meta && field.meta.default && field.meta.default.link && field.meta.default.link.type) {
        let t = field.meta.default.link.type;
        fld.component = t.toLowerCase().replace(".", "-") + "-reference-search";
        formSpec.imports.push("../" + t.split(".")[0] + "/" + fld.component);

      }
    }

    fields.push(fld);
  }


  formSpec.fieldgroups[0].fields = fields;

  let target = PKGDIR + "/" + t.join(".") + ".form.spec";
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
  } else {
    // open file and check for "_writeprotection": false,
    let f = JSON.parse(fs.readFileSync(target));
    if (f._writeprotection === false) {
      fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
    } else {
      console.log("skip " + target);
    }
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
        "field": fieldname,
        "flags": [
          "condensed",
          "double"
        ],
        "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
      })
    } else {
      delete field;
    }


  }
  formSpec.fieldgroups[0].fields = createFields;

  target = PKGDIR + "/" + t.join(".") + ".create.form.spec";
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
  } else {
    // open file and check for "_writeprotection": false,
    let f = JSON.parse(fs.readFileSync(target));
    if (f._writeprotection === false) {
      fs.writeFileSync(target, JSON.stringify(formSpec, null, 2));
    } else {
      console.log("skip " + target);
    }
  }

  /**
   * CREATE WIDGETS
   * analog create.form.spec a create.widget.spec is created
   */
  let widgetSpec = JSON.parse(WIDGETTPL);

  widgetSpec.theme = "WidgetBaseTheme";
  widgetSpec.class_name = spec.__proto.package + spec.type + "CreateWidget";
  widgetSpec.class_name = widgetSpec.class_name[0].toUpperCase() + widgetSpec.class_name.substr(1);
  widgetSpec.component_name = (spec.__proto.package + "-" + spec.type + "-create-widget").toLowerCase();
  widgetSpec.source = pathToTypeSpec;
  widgetSpec.description = spec.description;
  widgetSpec.fieldgroups[0].fields = createFields;

  target = PKGDIR + "/" + t.join(".") + ".create.widget.spec";
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, JSON.stringify(widgetSpec, null, 2));
  } else {
    // open file and check for "_writeprotection": false,
    let f = JSON.parse(fs.readFileSync(target));
    if (f._writeprotection === false) {
      fs.writeFileSync(target, JSON.stringify(widgetSpec, null, 2));
    } else {
      console.log("skip " + target);
    }
  }


  /**
   * Display
   */
  let displaySpec = JSON.parse(DISPLAYTPL);
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

    let component_name = "furo-data-display";

    let arrTmpName = field.type.split(".");
    //  complex type has a cutom form component
    if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {

      component_name = field.type.toLowerCase().replace(".", "-") + "-display";
      displaySpec.imports.push("../" + arrTmpName[0] + "/" + component_name);
    }

    let fld = {
      "field": fieldname,
      "component": component_name,
      "flags": [
        "condensed",
        "double",
        "noborder"
      ],
      "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
    };

    // repeated fields can use furo-data-repeat component
    if (field.meta && field.meta.repeated && field.type != "furo.Property") {

      fld.attrs = [
        {"name": "repeated-component", "value": component_name }
      ]

      fld.component = "furo-data-repeat";
    }


    fields.push(fld);
  }


  displaySpec.fieldgroups[0].fields = fields;
  target = PKGDIR + "/" + t.join(".") + ".display.spec";
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, JSON.stringify(displaySpec, null, 2));
  } else {
    // open file and check for "_writeprotection": false,
    let f = JSON.parse(fs.readFileSync(target));
    if (f._writeprotection === false) {
      fs.writeFileSync(target, JSON.stringify(displaySpec, null, 2));
    } else {
      console.log("skip " + target);
    }
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

servicelist.forEach((pathToService) => {
  let t = path.basename(pathToService).split(".");
  const PKGDIR = UiSpecDir + "/" + t[0];
  let updatespec = JSON.parse(UpdateTPL);
  let serviceSpec = JSON.parse(fs.readFileSync(pathToService));
  if (serviceSpec.services.Update) {
    updatespec.class_name = serviceSpec.services.Update.data.request.replace(".", "") + "UpdatePanel";
    updatespec.class_name = updatespec.class_name[0].toUpperCase() + updatespec.class_name.substr(1);
    updatespec.component_name = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-update-panel";
    updatespec.description = serviceSpec.services.Update.description;
    updatespec.source = "./" + pathToService;
    updatespec.service_name = serviceSpec.name;
    updatespec.request_type = serviceSpec.services.Update.data.request;
    updatespec.response_type = serviceSpec.services.Update.data.response;
    updatespec.form.name = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-form";
    updatespec.imports.push("./" + updatespec.form.name);
    let updateAction = serviceSpec.services.Update.data.request.toLowerCase().replace(".", "-") + "-update-action";
    updatespec.imports.push("./" + updateAction);
    updatespec.action.name = updateAction;


    let target = PKGDIR + "/" + serviceSpec.services.Update.data.request.toLowerCase() + ".update.panel.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(updatespec, null, 2));
    } else {
      // open file and check for "_writeprotection": false,
      let f = JSON.parse(fs.readFileSync(target));
      if (f._writeprotection === false) {
        fs.writeFileSync(target, JSON.stringify(updatespec, null, 2));
      } else {
        console.log("skip " + target);
      }
    }
  }
});


/**
 * DISPLAY PANELS Section
 */
//load template structure
let DisplayTPL = fs.readFileSync(TplDir + "/display.panel.spec.json");

servicelist = walkSync(SpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("service.spec") > 0)
});

servicelist.forEach((pathToService) => {
  let t = path.basename(pathToService).split(".");
  const PKGDIR = UiSpecDir + "/" + t[0];

  let displayspec = JSON.parse(DisplayTPL);
  let serviceSpec = JSON.parse(fs.readFileSync(pathToService));
  if (serviceSpec.services.Get) {
    displayspec.class_name = serviceSpec.services.Get.data.response.replace("Entity", "").replace(".", "") + "DisplayPanel";
    displayspec.class_name = displayspec.class_name[0].toUpperCase() + displayspec.class_name.substr(1);
    displayspec.component_name = serviceSpec.services.Get.data.response.replace("Entity", "").toLowerCase().replace(".", "-") + "-display-panel";
    displayspec.description = serviceSpec.services.Get.description;
    displayspec.source = "./" + pathToService;
    displayspec.service_name = serviceSpec.name;
    displayspec.request_type = serviceSpec.services.Get.data.request;
    displayspec.response_type = serviceSpec.services.Get.data.response;
    displayspec.display.name = serviceSpec.services.Get.data.response.replace("Entity", "").toLowerCase().replace(".", "-") + "-display";
    displayspec.imports.push("./" + displayspec.display.name);


    let target = PKGDIR + "/" + serviceSpec.services.Get.data.response.replace("Entity", "").toLowerCase() + ".display.panel.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(displayspec, null, 2));
    } else {
      // open file and check for "_writeprotection": false,
      let f = JSON.parse(fs.readFileSync(target));
      if (f._writeprotection === false) {
        fs.writeFileSync(target, JSON.stringify(displayspec, null, 2));
      } else {
        console.log("skip " + target);
      }
    }
  }
});


/**
 * Reference-searcher Section
 */
//load template structure
let ReferencesearchTPL = fs.readFileSync(TplDir + "/referencesearch.spec.json");

let refservicelist = walkSync(SpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("service.spec") > 0)
});

refservicelist.forEach((pathToService) => {
  let t = path.basename(pathToService).split(".");
  const PKGDIR = UiSpecDir + "/" + t[0];
  let referencesearchspec = JSON.parse(ReferencesearchTPL);

  let serviceSpec = JSON.parse(fs.readFileSync(pathToService));
  // check for param q
  if (serviceSpec.services.List && serviceSpec.services.List.query && serviceSpec.services.List.query.q) {
    let type = serviceSpec.services.List.data.response.replace("Collection", "");
    referencesearchspec.class_name = type.replace(".", "") + "ReferenceSearch";
    referencesearchspec.class_name = referencesearchspec.class_name[0].toUpperCase() + referencesearchspec.class_name.substr(1);
    referencesearchspec.component_name = type.toLowerCase().replace(".", "-") + "-reference-search";
    referencesearchspec.source = type.toLowerCase() + ".referencesearch.spec";
    referencesearchspec.service_name = serviceSpec.name;
    referencesearchspec.type = type;
    let target = PKGDIR + "/" + type.toLowerCase() + ".referencesearch.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(referencesearchspec, null, 2));
    } else {
      // open file and check for "_writeprotection": false,
      let f = JSON.parse(fs.readFileSync(target));
      if (f._writeprotection === false) {
        fs.writeFileSync(target, JSON.stringify(referencesearchspec, null, 2));
      } else {
        console.log("skip " + target);
      }
    }

  }
});


/**
 * Reference-dropdown Section
 */
//load template structure
let ReferencedropdownTPL = fs.readFileSync(TplDir + "/Referencedropdown.spec.json");

let coldropservicelist = walkSync(SpecDir).filter((filepath) => {
  return (path.basename(filepath).indexOf("service.spec") > 0)
});

coldropservicelist.forEach((pathToService) => {
  let t = path.basename(pathToService).split(".");
  const PKGDIR = UiSpecDir + "/" + t[0];
  let Referencedropdownspec = JSON.parse(ReferencedropdownTPL);

  let serviceSpec = JSON.parse(fs.readFileSync(pathToService));
  // check for param q
  if (serviceSpec.services.List && serviceSpec.services.List.query && serviceSpec.services.List.query.q) {
    let type = serviceSpec.services.List.data.response.replace("Collection", "");
    Referencedropdownspec.class_name = type.replace(".", "") + "Referencedropdown";
    Referencedropdownspec.class_name = Referencedropdownspec.class_name[0].toUpperCase() + Referencedropdownspec.class_name.substr(1);
    Referencedropdownspec.component_name = type.toLowerCase().replace(".", "-") + "-reference-dropdown";
    Referencedropdownspec.source = type.toLowerCase() + ".referencedropdown.spec";
    Referencedropdownspec.service_name = serviceSpec.name;
    Referencedropdownspec.type = type;
    let target = PKGDIR + "/" + type.toLowerCase() + ".referencedropdown.spec";
    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(Referencedropdownspec, null, 2));
    } else {
      // open file and check for "_writeprotection": false,
      let f = JSON.parse(fs.readFileSync(target));
      if (f._writeprotection === false) {
        fs.writeFileSync(target, JSON.stringify(Referencedropdownspec, null, 2));
      } else {
        console.log("skip " + target);
      }
    }

  }
});



/**
 * ACTIONS Section
 */
//load template structure
let ActionUpdateTPL = fs.readFileSync(TplDir + "/update.action.spec.json");


servicelist.forEach((pathToService) => {
  let t = path.basename(pathToService).split(".");
  const PKGDIR = UiSpecDir + "/" + t[0];

  let updatespec = JSON.parse(ActionUpdateTPL);
  let serviceSpec = JSON.parse(fs.readFileSync(pathToService));
  if (serviceSpec.services.Update) {
    let target = PKGDIR + "/" + serviceSpec.services.Update.data.request.toLowerCase() + ".update.action.spec";

    updatespec.class_name = serviceSpec.services.Update.data.request.replace(".", "") + "UpdateAction";
    updatespec.class_name = updatespec.class_name[0].toUpperCase() + updatespec.class_name.substr(1);
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
        "flags": [
          "primary",
          "unelevated"
        ],
        "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
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
        "flags": [
          "outline"
        ],
        "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
      })
    }

    updatespec.items.push({"component": "furo-empty-spacer"});
    updatespec.items.push({
      "label": "cancel",
      "rel": "reset",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^reset-req",
      "flags": [
        "outline"
      ],
      "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
    });

    // items based on spec
    if (serviceSpec.services.Delete) {
      updatespec.items.push({
        "label": "delete",
        "rel": "delete",
        "icon": "delete",
        "component": "furo-button",
        "onclick": "-^delete-req",
        "flags": [
          "unelevated",
          "danger",
        ],
        "attrs": [] //https://html.spec.whatwg.org/multipage/syntax.html#attributes-2, Attributes have a name and a value
      })
    }

    if (!fs.existsSync(target)) {
      fs.writeFileSync(target, JSON.stringify(updatespec, null, 2));
    } else {
      // open file and check for "_writeprotection": false,
      let f = JSON.parse(fs.readFileSync(target));
      if (f._writeprotection === false) {
        fs.writeFileSync(target, JSON.stringify(updatespec, null, 2));
      } else {
        console.log("skip " + target);
      }
    }
  }
});


