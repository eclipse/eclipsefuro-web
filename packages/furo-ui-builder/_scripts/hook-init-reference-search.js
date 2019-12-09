class HookInitReferenceSearch {
  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.parts[0];
    if (SPEC.services.List && SPEC.services.List.query && SPEC.services.List.query.q) {
      let type = SPEC.services.List.data.response.replace("Collection", "");

      u33e.model.component_name = type.toLowerCase().replace(".", "-") + "-reference-search".toLowerCase();
      u33e.model.path = PKGDIR + "/" + u33e.model.component_name + ".u33e";
      u33e.model.description = SPEC.description;

      u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
      u33e.addImportWithMember("Theme", "@furo/framework/theme.js");
      u33e.addImportWithMember("FBP", "@furo/fbp");
      u33e.addImportWithMember("i18n", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");

      u33e.addMethod("bindData", "field",
          " Bind your furo-data-object event @-object-ready\n @public\n @param data",
          "ICAgIHRoaXMuZmllbGQgPSBmaWVsZDsKICAgIHRoaXMuX0ZCUFRyaWdnZXJXaXJlKCItLWZpZWxk\n" +
          "LWluamVjdGVkIiwgZmllbGQpOwoKICAgIHRoaXMuZmllbGQuYWRkRXZlbnRMaXN0ZW5lcigiZmll\n" +
          "bGQtdmFsdWUtY2hhbmdlZCIsIChlKT0+ewoKICAgICAgaWYoZS5kZXRhaWwuX25hbWUgPT09ICJ0\n" +
          "eXBlIikgewogICAgICAgIHRoaXMuX0ZCUFRyaWdnZXJXaXJlKCItLWh0c1VwZGF0ZWQiLCB0aGlz\n" +
          "LmZpZWxkLmxpbmsuX3ZhbHVlKTsKICAgICAgfQogICAgfSk7");


      u33e.addProperty("condensed", "Boolean", "The default style (md like) supports a condensed form. It is a little bit smaller then the default");
      u33e.addExposedWire("focus", "--focused", "Fokus");

      let s = u33e.addStyle(":host");
      u33e.addStyleAttribute(s, "display", "block");
      u33e.addStyleAttribute(u33e.addStyle("furo-data-reference-search"), "width", "100%");


      let refSearch = u33e.addDomNode("furo-data-reference-search");
      refSearch.addAttribute("value-field", "id")
          .addAttribute("display-field", "display_name")
          .addAttribute("?condensed", "$(this.condensed)")
          .addAttribute("min-term-length", "1")
          .addEvent("search", "--term")
          .addMethod("collection-in", "--collection")
          .addMethod("focus", "--focused")
          .addMethod("bind-data", "----field-injected");

      let agent = u33e.addDomNode("furo-collection-agent");
      agent.addAttribute("service", SPEC.name)
          .addMethod("hts-in", "--field-injected(*.link._value), --htsUpdated")
          .addMethod("search", "--term")
          .addEvent("response", "--collection");

      return u33e;


    }
  }
}

module.exports = HookInitReferenceSearch;
