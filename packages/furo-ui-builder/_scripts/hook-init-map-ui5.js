const U33eBuilder = require("./u33eBuilder");

class HookInitMapUi5 {

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
          "default_form_size": "one",
          "default_field_flags": [],
          "skip_fields_on_init": ["id", "display_name"]
        }
      }
    })();

    u33e.setTheme("MapUi5BaseTheme");
    u33e.model.component_name = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-map").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember("LitElement, html, css ", "lit-element");
    u33e.addImportWithMember("Theme", "@furo/framework/src/theme.js");
    u33e.addImportWithMember("FBP", "@furo/fbp");
    u33e.addImportWithMember("i18n", "@furo/framework/src/i18n.js", "eslint-disable-next-line no-unused-vars");

    u33e.addImport("@furo/ui5/src/furo-catalog.js");
    u33e.addImport("@furo/form/src/furo-form.js");
    u33e.addImport("@furo/layout/src/furo-horizontal-flex.js");
    u33e.addImport("@ui5/webcomponents/dist/Label.js");
    u33e.addImport("@ui5/webcomponents/dist/Button.js");

    u33e.addMethod("bindData", "data",
        " Bind your furo-data-object event @-object-ready\n @public\n @param data",
        "CiAgICB0aGlzLl9GQlBUcmlnZ2VyV2lyZSgnLS1kYXRhJywgZGF0YSk7CiAgICB0aGlzLmZpZWxkID0gZGF0YTs=");

    u33e.addExposedWire("focus", "--focused", "Fokus");

    // properties
    u33e.addProperty("headerText","String","Header text of the form",null,false,false,"header-text");
    u33e.addProperty("secondaryText","String","Secondary text of the form",null,false,false,"secondary-text");

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block");

    u33e.addStyle(":host([hidden])")
        .addCSSAttribute("display", "none");

    u33e.addStyle("furo-horizontal-flex")
        .addCSSAttribute("margin-bottom", "6px");

    u33e.addStyle("ui5-button")
        .addCSSAttribute("margin", "12px 0 0 6px");

    // add a form to place header text
    let head = u33e.addDomNode("furo-form");
    head.addAttribute("header-text", "${this.headerText}");
    head.addAttribute("secondary-text", "${this.secondaryText}");

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
    let label = flexer.appendChild("ui5-label");
    let input = flexer.appendChild("furo-ui5-text-input");
    let btn =  flexer.appendChild("ui5-button");

    label.addAttribute("for", "Type");
    label.innerText("name for " + SPEC.__proto.package + "." + SPEC.type);

    input.addFlag("flex");
    input.addAttribute("id","Type")
    input.addEventListener("value-changed","((park))");

    btn.addInnerText("add");
    btn.addEventListener("click","--adderTriggered(park)");
    return u33e;
  }
}

module.exports = HookInitMapUi5;
