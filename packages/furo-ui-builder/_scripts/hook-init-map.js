const U33eBuilder = require("./u33eBuilder");

class HookInitForm {
  static getPath(ctx) {
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    return PKGDIR + "/" + (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-map").toLowerCase() + ".u33e";
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

    u33e.setTheme("MapBaseTheme");
    u33e.model.component_name = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-map").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember("Theme", "@furo/framework/theme.js");
    u33e.addImportWithMember("FBP", "@furo/fbp");
    u33e.addImportWithMember("i18n", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");


    u33e.addImport("@furo/data-input");
    u33e.addImport("@furo/form");

    u33e.addMethod("bindData", "data",
        " Bind your furo-data-object event @-object-ready\n @public\n @param data",
        "CiAgICB0aGlzLl9GQlBUcmlnZ2VyV2lyZSgnLS1kYXRhJywgZGF0YSk7CiAgICB0aGlzLmZpZWxkID0gZGF0YTs=");

    u33e.addExposedWire("focus", "--focused", "Fokus");

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block");

    u33e.addStyle(":host[hidden]")
        .addCSSAttribute("display", "none");

    u33e.addStyle("furo-horizontal-flex")
        .addCSSAttribute("margin-bottom", "6px");


    u33e.addStyle("furo-button")
        .addCSSAttribute("margin", "12px 0 0 6px");

    let head = u33e.addDomNode("furo-form")

    head.addAttribute("header-text", "${i18n.t('" + (SPEC.__proto.package + "." + SPEC.type + ".map").toLowerCase() + ".headertext')}");


    // all field will be added to this node
    let repeater = u33e.addDomNode("furo-data-repeat");

    let repeatedComponent = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type).toLowerCase() + "-map-item";
    u33e.addImport(ctx.getImportPathForComponent(repeatedComponent));

    repeater.addAttribute("delete-icon", "delete");
    repeater.addMethod("create-attribute-by-string","--adderTriggered");
    repeater.addAttribute("repeated-component", repeatedComponent);
    repeater.description = "the core of the map item is the form";
    repeater.addMethod("bind-data", "--data");


    let flexer = u33e.addDomNode("furo-horizontal-flex");
    let input = flexer.appendChild("furo-text-input");
    let btn =  flexer.appendChild("furo-button");

    input.addFlag("condensed");
    input.addFlag("flex");
    input.addAttribute("label","name for " + SPEC.__proto.package + "." + SPEC.type)
    input.addEventListener("value-changed","((park))");

    btn.addAttribute("label","add");
    btn.addFlag("outline");
    btn.addEventListener("click","--adderTriggered(park)");
    return u33e;
  }
}

module.exports = HookInitForm;
