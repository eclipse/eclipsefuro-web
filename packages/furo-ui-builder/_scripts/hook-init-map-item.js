const U33eBuilder = require("./u33eBuilder");

class HookInitForm {
  static getPath(ctx) {
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    return PKGDIR + "/" + (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-map-item").toLowerCase() + ".u33e";
  }

  constructor(ctx, u33e) {
    const SPEC = ctx.spec;

    const OPTIONS = (() => {
      if (ctx.config.hook && ctx.config.hook.hook_init_form) {
        return ctx.config.hook.hook_init_form
      } else {
        return {
          "default_form_size": "four",
          "default_field_flags": ["condensed", "double"],
          "skip_fields_on_init": ["id", "display_name"]
        }
      }
    })();

    u33e.setTheme("MapItemBaseTheme");
    u33e.model.component_name = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-map-item").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember("Theme", "@furo/framework/theme.js");
    u33e.addImportWithMember("FBP", "@furo/fbp");
    u33e.addImportWithMember("i18n", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");


    u33e.addImport("@furo/data-input");
    u33e.addImport("@furo/form");

    u33e.addMethod("bindData", "data",
        " Bind your furo-data-object event @-object-ready\n @public\n @param data","dGhpcy5fRkJQVHJpZ2dlcldpcmUoJy0tZGF0YScsIGRhdGEpOwp0aGlzLmZpZWxkID0gZGF0YTsKdGhpcy5tYXBLZXkgPSBkYXRhLl9uYW1lOw==");

    u33e.addExposedWire("focus", "--focused", "Fokus");

    // header-text and secondary-text property
    u33e.addProperty("mapKey", "String", "Key of the map item", null, false, false, "map-key");

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block");

    u33e.addStyle(":host([hidden])")
        .addCSSAttribute("display", "none");


    u33e.addStyle(":host(.in-repeater)")
      .addCSSAttribute("border-bottom", "1px solid var(--separator, #FAFAFA)");


    // all field will be added to this node
    let root = u33e.addDomNode("furo-form");

    root.addAttribute("header-text", '${this.mapKey?this.mapKey:""}');

    let component = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type ).toLowerCase() + "-form";
    u33e.addImport(ctx.getImportPathForComponent(component));
    let form = root.appendChild(component );
    form.description = "the core of the map item is the form";
    form.addMethod("bind-data", "--data");

    // focus the first field
    form.addMethod("focus", "--focused");

    return u33e;
  }
}

module.exports = HookInitForm;
