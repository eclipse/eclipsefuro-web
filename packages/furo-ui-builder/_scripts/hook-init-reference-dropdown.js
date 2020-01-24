class HookInitReferenceSearch {
  static getPath(ctx){
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    if (SPEC.services.List && SPEC.services.List.query && SPEC.services.List.query.q) {
      let type = SPEC.services.List.data.response.replace("Collection", "");
      return PKGDIR + "/" + type.toLowerCase().split(".").join("-") + "-reference-dropdown".toLowerCase() + ".u33e";
    }
    else return "";
  }
  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    if (SPEC.services.List && SPEC.services.List.query && SPEC.services.List.query.q) {
      let type = SPEC.services.List.data.response.replace("Collection", "");
      u33e.setTheme("ReferenceDropdownBaseTheme");
      u33e.model.component_name = type.toLowerCase().split(".").join("-") + "-reference-dropdown".toLowerCase();
      u33e.model.path = ctx.path;
      u33e.model.description = SPEC.description;

      u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
      u33e.addImportWithMember("Theme", "@furo/framework/theme.js");
      u33e.addImportWithMember("FBP", "@furo/fbp");
      u33e.addImportWithMember("i18n", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");

      u33e.addImport("@furo/data");
      u33e.addImport("@furo/data-input");

      // https://www.base64encode.org/
      u33e.addMethod("bindData", "field",
          " Bind your furo-data-object event @-object-ready\n @public\n @param data",
          "dGhpcy5maWVsZCA9IGZpZWxkOw0KICB0aGlzLl9GQlBUcmlnZ2VyV2lyZSgiLS1maWVsZC1pbmplY3RlZCIsIGZpZWxkKTsNCiAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKCJicmFuY2gtdmFsdWUtY2hhbmdlZCIsICgpPT57DQogICAgICBpZiggdGhpcy5maWVsZC5saW5rLl92YWx1ZSAmJg0KICAgICAgICB0aGlzLmZpZWxkLmxpbmsuX3ZhbHVlLmhyZWYgJiYgdGhpcy5maWVsZC5saW5rLl92YWx1ZS5zZXJ2aWNlKSB7DQogICAgICAgIHRoaXMuX0ZCUFRyaWdnZXJXaXJlKCctLWh0c1VwZGF0ZWQnLCB0aGlzLmZpZWxkLmxpbmsuX3ZhbHVlKTsNCiAgICAgIH0NCiAgfSk7");


      u33e.addProperty("condensed", "Boolean",
          "The default style (md like) supports a condensed form. " +
          "It is a little bit smaller then the default",
      );
      u33e.addExposedWire("focus", "--focused", "Fokus");

      u33e.addStyle(":host")
          .addCSSAttribute("display", "block");

      u33e.addStyle(":host[hidden]")
          .addCSSAttribute("display", "none");

      u33e.addStyle("furo-data-collection-dropdown")
          .addCSSAttribute("width", "100%");



      let refSearch = u33e.addDomNode("furo-data-collection-dropdown");
      refSearch.addAttribute("value-field", "id")
          .addAttribute("display-field", "display_name")
          .addAttribute("subfield", "id")
          .addAttribute("subfield-display", "display-name")
          .addAttribute("?condensed", "${this.condensed}")

          .addMethod("inject-entities", "--collection(*.entities)")
          .addMethod("focus", "--focused")
          .addMethod("bind-data", "--field-injected");

      let agent = u33e.addDomNode("furo-collection-agent");
      agent.addAttribute("service", SPEC.name)
          .addFlag("list-on-hts-in")
          .addMethod("hts-in", "--field-injected(*.link._value), --htsUpdated")
          .addEventListener("response", "--collection");

      return u33e;


    }
  }
}

module.exports = HookInitReferenceSearch;
