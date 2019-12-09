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


      return u33e;
    }
  }
}

module.exports = HookInitReferenceSearch;
