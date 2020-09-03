const U33eBuilder = require("./u33eBuilder");

class HookInitRepeatUi5 {
  static getPath(ctx) {
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;


    /**
     * Skip generating of types if they are registrered in furo.ui.spec.conf.json
     *
     * "hook": {
     *   "hook-init-repeat": {
     *    "skip_types": [
     *      "google.protobuf.Any"
     *    ]
     *   }
     */
    if (ctx.config.hook && ctx.config.hook["hook-init-repeat-ui5"] && ctx.config.hook["hook-init-repeat-ui5"].skip_types) {
      let type = SPEC.__proto.package + "." + SPEC.type
      if (ctx.config.hook["hook-init-repeat-ui5"].skip_types.indexOf(type) > -1) {
        console.log("hook-init-repeat-ui5 skipped for type ", type)
        return
      }
    }

    return PKGDIR + "/" + (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-repeat-ui5").toLowerCase() + ".u33e";
  }

  constructor(ctx, u33e) {
    const SPEC = ctx.spec;

    u33e.setTheme("RepeatBaseTheme");
    u33e.model.component_name = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type + "-repeat-ui5").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember("Theme", "@furo/framework/src/theme.js");
    u33e.addImportWithMember("FBP", "@furo/fbp");
    u33e.addImportWithMember("i18n", "@furo/framework/src/i18n.js", "eslint-disable-next-line no-unused-vars");


    u33e.addImport("@ui5/webcomponents/dist/Button.js");
    u33e.addImport("@furo/form");

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

    u33e.addDomNode("hr")



    // add a form to place header text
    let head = u33e.addDomNode("furo-form");
    head.addAttribute("header-text", "${this.headerText}");
    head.addAttribute("secondary-text", "${this.secondaryText}");

    // all field will be added to this node
    let repeater = u33e.addDomNode("furo-data-repeat");


    let component = (SPEC.__proto.package.split(".").join("-") + "-" + SPEC.type).toLowerCase() + "-form";
    u33e.addImport(ctx.getImportPathForComponent(component));

    repeater.addAttribute("delete-icon", "delete");
    repeater.addMethod("add", "--adderTriggered");
    repeater.addAttribute("repeated-component", component);
    repeater.description = "the core of the repeat item is the form";
    repeater.addMethod("bind-data", "--data");


    let flexer = u33e.addDomNode("furo-horizontal-flex");
    let span = flexer.appendChild("span");
    let btn = flexer.appendChild("ui5-button");


    span.addFlag("flex");

    btn.addInnerText("Add " + SPEC.type);
    btn.addAttribute("design", "Positive");
    btn.addEventListener("click", "--adderTriggered");
    return u33e;
  }
}

module.exports = HookInitRepeatUi5;
