const U33eBuilder = require("./u33eBuilder");

class HookInitForm {
  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    u33e.model.component_name = (SPEC.__proto.package + "-" + SPEC.type + "-display").toLowerCase();
    u33e.model.path = PKGDIR + "/" + u33e.model.component_name + ".u33e";
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember("Theme", "@furo/framework/theme.js");
    u33e.addImportWithMember("FBP", "@furo/fbp");
    u33e.addImportWithMember("i18n", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");


    u33e.addImport("@furo/data-input");
    u33e.addImport("@furo/form");

    u33e.addMethod("bindData","data",
        " Bind your furo-data-object event @-object-ready\n @public\n @param data",
        "CiAgICB0aGlzLl9GQlBUcmlnZ2VyV2lyZSgnLS1kYXRhJywgZGF0YSk7CiAgICB0aGlzLmZpZWxkID0gZGF0YTs=");
    u33e.addExposedWire("focus", "--focused", "Fokus");

    // all field will be added to this node
    let form = u33e.addDomNode("furo-form-layouter");
    form.addFlag("four");

    //fields
    for (let fieldname in SPEC.fields) {
      let field = SPEC.fields[fieldname];

      let component = "furo-data-display";
      // check which componet matches best with the simple types
      switch(field.type) {
        case "furo.Property":
          component = "furo-data-property-display";
          break;
      }


      let arrTmpName = field.type.split(".");
      //  complex type has a cutom form component
      if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {
        component = field.type.toLowerCase().replace(".", "-") + "-display";
        // exclude self import
        if (u33e.model.component_name !== component) {
          // check whether the imported file is under the same folder
          if (ctx.package !== arrTmpName[0]) {
           u33e.addImport("../" + arrTmpName[0] + "/" + component + ".js");
          } else {
            u33e.addImport("./" + component + ".js");
          }
        }
      }


      let fld = form.appendChild(component);

      fld.description = "field: " + fieldname;
      fld.addFlag("condensed");
      fld.addMethod("bind-data","--data(*." + fieldname + ")");



      // repeated fields can use furo-data-repeat component
      if (field.meta && field.meta.repeated && field.type != "furo.Property") {
        let value_name = component;
        fld.component = "furo-data-repeat";
        fld.addAttribute("repeated-component", value_name);
      }


      // special type furo.Reference
      if (field.type === "furo.Reference") {
        if (field.meta && field.meta.default && field.meta.default.link && field.meta.default.link.type) {
          let f = field.meta.default.link.type;
          fld.component = f.toLowerCase().replace(".", "-") + "-reference-search";

          let folder = f.split(".")[0];
          // exclude self import
          if (u33e.model.component_name !== fld.component) {
            // check whether the imported file is under the same folder
            if (ctx.package !== folder) {
              u33e.addImport("../" + folder + "/" + fld.component + ".js");
            } else {
              u33e.addImport("./" + fld.component + ".js");
            }
          }
        }
      }
    }

    // focus the first field
    if(form.children.length > 0){
      form.children[0].addMethod("focus","--focused");
    }

    return u33e;
  }
}

module.exports = HookInitForm;
