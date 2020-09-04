const U33eBuilder = require("./u33eBuilder");

class HookInitCreateFormUi5 {
  static getPath(ctx){
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    return PKGDIR + "/" + (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-create-form-ui5").toLowerCase() + ".u33e";
  }

  constructor(ctx, u33e) {
    const SPEC = ctx.spec;

    const OPTIONS = (() => {
      if (ctx.config.hook && ctx.config.hook.hook_init_create_form_ui5) {
        return ctx.config.hook.hook_init_create_form_ui5
      } else {
        return {
          "default_form_size": "one",
          "default_field_flags": [],
          "skip_fields_on_init" : ["id", "display_name"]
        }
      }
    })();

    u33e.setTheme("CreateFormBaseTheme");
    u33e.model.component_name = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-create-form-ui5").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember("Theme", "@furo/framework/src/theme.js");
    u33e.addImportWithMember("FBP", "@furo/fbp");
    u33e.addImportWithMember("i18n", "@furo/framework/src/i18n.js", "eslint-disable-next-line no-unused-vars");

    u33e.addImport("@furo/ui5/src/furo-catalog.js;");
    u33e.addImport("@furo/form");

    u33e.addMethod("bindData", "data",
        " Bind your furo-data-object event @-object-ready\n @public\n @param data",
        "CiAgICB0aGlzLl9GQlBUcmlnZ2VyV2lyZSgnLS1kYXRhJywgZGF0YSk7CiAgICB0aGlzLmZpZWxkID0gZGF0YTs=");

    u33e.addExposedWire("focus", "--focused", "Fokus");

    // header-text and secondary-text property
    u33e.addProperty("headerText", "String", "Header text to label the form", null, false, false, "header-text");
    u33e.addProperty("secondaryText", "String", "Secondary text for a detailed description", null, false, false, "secondary-text");

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block");

    u33e.addStyle(":host([hidden])")
        .addCSSAttribute("display", "none");


    // all field will be added to this node
    let root = u33e.addDomNode("furo-form");

    root.addAttribute("header-text", '${this.headerText?this.headerText:""}');
    root.addAttribute("secondary-text", '${this.secondaryText?this.secondaryText:""}');


    // all field will be added to this node
    let form = root.appendChild("furo-form-layouter");
    form.addFlag(OPTIONS.default_form_size || "one");


    //fields
    for (let fieldname in SPEC.fields) {
      let field = SPEC.fields[fieldname];
      /**
       * skip field if it is skip list or skipped in spec
       */
      if (OPTIONS.skip_fields_on_init.indexOf(fieldname) !== -1 || (field.__ui && field.__ui.no_init)) {
        continue
      }

      // use only required fields
      if (!(field.constraints && field.constraints.required)) {
        continue
      }

      let component = U33eBuilder.getBestMatchingUI5Component(field);
      let fld = form.appendChild(component);


      // add a furo-form > furo-form-layouter  for type furo.Property
      if (field.type === "furo.Property") {
        fld.component = "furo-form";
        fld.addFlag("full");

        fld.addAttribute("header-text", "${i18n.t('" + (SPEC.__proto.package + "." + SPEC.type + ".properties").toLowerCase() + ".header.text')}");
        fld.addAttribute("secondary-text", "${i18n.t('" + (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + ".properties").toLowerCase() + ".secondary.text')}");

        let f = fld.appendChild("furo-form-layouter");
        f.addFlag(OPTIONS.default_form_size || "one");
        fld = f.appendChild(component);
      }

      fld.description = "field: " + fieldname;

      // add default flags if no __ui.flags are set
      if(field.__ui && field.__ui.flags &&  field.__ui.flags.length > 0){
        field.__ui.flags.forEach((flag) => {
          fld.addFlag(flag);
        });
      }else{
        // add default options
        if (OPTIONS.default_field_flags) {
          OPTIONS.default_field_flags.forEach((flag) => {
            fld.addFlag(flag);
          });
        }
      }

      fld.addMethod("bind-data", "--data(*." + fieldname + ")");

      let arrTmpName = field.type.split(".");
      //  complex type has a custom form component
      if (arrTmpName.length > 1 && arrTmpName[0] != "furo" && arrTmpName[0] != "google" && !component.endsWith("-map") && !component.endsWith("-repeat")) {
        component = field.type.toLowerCase().split(".").join("-") + "-form";
        fld.component = component;
        // change flag double to full
        let flagIndex = fld.flags.indexOf("double");
        if(flagIndex === -1){
          fld.addFlag("full");
        }else{
          fld.flags[flagIndex] = "full";
        }

        fld.addAttribute("header-text", "${i18n.t('createform."  +  (SPEC.__proto.package + "." + SPEC.type).toLowerCase() + "." + fieldname.toLowerCase() + ".header.text')}");
        fld.addAttribute("secondary-text", "${i18n.t('createform."  +  (SPEC.__proto.package + "." + SPEC.type).toLowerCase() + "." + fieldname.toLowerCase() + ".secondary.text')}");

        /**
         * check if component have a replacement in the config
         *
         * "hook": {
         *   "hook_init_form": {
         *     "replace": {
         *       "premium-premiumgui-form": {
         *         "with": "premium-field",
         *         "import": "../../src/components/form-fields/premium-field.js"
         *       }
         *     }
         *   }
         * }
         */
        if (OPTIONS.replace && OPTIONS.replace[component]) {
          let replace = OPTIONS.replace[component];
          fld.component = replace.with;
          fld.flags = replace.field_flags;
          u33e.addImport(replace.import_path);
          // set flags from config

        } else {
        // exclude self import
        let importComponent = ctx.getImportPathForComponent(component);
        if (importComponent) {
          u33e.addImport(importComponent);
        }
      }

      }


      // add header text on maps and repeats
      if(component.endsWith("-map") || component.endsWith("-repeat")){
        fld.addAttribute("header-text", "${i18n.t('createform."  +  (SPEC.__proto.package + "." + SPEC.type).toLowerCase() + "." + fieldname.toLowerCase() + ".header.text')}");
        fld.addAttribute("secondary-text", "${i18n.t('createform."  +  (SPEC.__proto.package + "." + SPEC.type).toLowerCase() + "." + fieldname.toLowerCase() + ".secondary.text')}");
      }


      // repeated fields can use furo-data-repeat component
      if (field.meta && field.meta.repeated && field.type != "furo.Property") {
        let value_name = component;
        fld.component = "furo-data-repeat";
        fld.addAttribute("repeated-component", value_name);
      }

      // add a form for type furo.Property
      if (field.type === "furo.Property") {

      }

      // special type furo.Reference
      if (field.type === "furo.Reference") {
        if (field.meta && field.meta.default && field.meta.default.link && field.meta.default.link.type) {
          let f = field.meta.default.link.type;
          fld.component = f.toLowerCase().split(".").join("-") + "-reference-search-ui5";


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

module.exports = HookInitCreateFormUi5;
