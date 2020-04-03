const U33eBuilder = require("./u33eBuilder");

class HookInitCreateWidget {

  static getPath(ctx){
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    return PKGDIR + "/" + (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-create-widget").toLowerCase() + ".u33e";
  }

  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    u33e.setTheme("CreateWidgetBaseTheme");
    u33e.model.component_name = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-create-widget").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember(" Theme ", "@furo/framework/src/theme.js");
    u33e.addImportWithMember(" FBP ", "@furo/fbp");
    u33e.addImportWithMember(" i18n ", "@furo/framework/src/i18n.js", "eslint-disable-next-line no-unused-vars");


    u33e.addImport("@furo/data-input");
    u33e.addImport("@furo/form/furo-form-layouter.js");
    u33e.addImport("@furo/input/src/furo-button.js");
    u33e.addImport("@furo/app/furo-card.js");
    u33e.addImport("@furo/layout/src/furo-horizontal-flex.js");

    u33e.addMethod("bindData", "data",
        " Bind your furo-data-object event @-object-ready\n @public\n @param data",
        "CiAgICB0aGlzLl9GQlBUcmlnZ2VyV2lyZSgnLS1kYXRhJywgZGF0YSk7CiAgICB0aGlzLmZpZWxkID0gZGF0YTs=");

    u33e.addExposedWire("focus", "--focused", "Fokus");

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block");

    u33e.addStyle(":host([hidden])")
        .addCSSAttribute("display", "none");

    let card = u33e.addDomNode("furo-card");
    card.description = "The card is the main container";

    // all field will be added to this node
    let form = card.appendChild("furo-form-layouter");
    form.description = "the form layouter will contain all required fields";
    //form.addFlag("four");

    let action = card.appendChild("furo-horizontal-flex");
    action.addAttribute("slot","action")
        .addFlag("space");

    let button = action.appendChild("furo-button");
    button.addFlag("primary")
        .addAttribute("rel","create")
        .addAttribute("label","${i18n.t('create')}")
        .addEventListener("click","-^create-requested", "fired when the create button was pressed");


    //fields
    for (let fieldname in SPEC.fields) {
      let field = SPEC.fields[fieldname];
      /**
       * skip field if it is readonly
       */
      if (field.meta && field.meta.readonly) {
        continue
      }
      // use only required fields
      if (!(field.constraints && field.constraints.required)) {
        continue
      }

      let component = U33eBuilder.getBestMatchingComponent(field);
      let arrTmpName = field.type.split(".");
      //  complex type has a cutom form component
      if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google") {
        component = field.type.toLowerCase().split(".").join("-") + "-form";
        // exclude self import
        let importComponent = ctx.getImportPathForComponent(component);
        if (importComponent) {
          u33e.addImport(importComponent);
        }
      }


      let fld = form.appendChild(component);

      fld.description = "field: " + fieldname;
      fld.addFlag("condensed");
      fld.addMethod("bind-data", "--data(*." + fieldname + ")");


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
          fld.component = f.toLowerCase().split(".").join("-") + "-reference-search";

          let folder = f.split(".")[0];
          // exclude self import
          let importComponent = ctx.getImportPathForComponent(fld.component);
          if (importComponent) {
            u33e.addImport(importComponent);
          }
        }
      }
    }

    // focus the first field
    if (form.children.length > 0) {
      form.children[0].addMethod("focus", "--focused");
    }


    return u33e;
  }
}

module.exports = HookInitCreateWidget;
