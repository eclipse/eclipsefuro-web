const U33eBuilder = require("./u33eBuilder");

class HookInitUpdateAction {
  static getPath(ctx){
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    if (!SPEC.services.Update) {
      // abort if no update service is available
      return undefined
    }

    let basename = (SPEC.services.Update.data.request.split(".").join("-"));
    return PKGDIR + "/" + (basename + "-update-action").toLowerCase() + ".u33e";
  }
  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    ctx.basename = (SPEC.services.Update.data.request.split(".").join("-"));
    u33e.model.component_name = (ctx.basename + "-update-action").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" LitElement, html, css ", "lit-element");
    u33e.addImportWithMember(" FBP ", "@furo/fbp");
    u33e.addImportWithMember(" Theme ", "@furo/framework/theme.js");
    u33e.addImportWithMember(" i18n ", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");

    u33e.addImport("@furo/form/furo-button-bar.js");
    u33e.addImport("@furo/input/furo-button.js");

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block");

    u33e.addStyle(":host([hidden])")
        .addCSSAttribute("display", "none");

    // exposed wires / public methods with _FBPTriggerWire
    u33e.addExposedWire("bindEntity", "--entityObjectInjected", "Bind an entity data object. This will be forwarded to the furo-button-bar element inside this element.");
    u33e.addExposedWire("disableAll", "--disableAllReq", "Disables all elements inside furo-button-bar");
    u33e.addExposedWire("enableAll", "--enableAllReq", "Enables all elements inside furo-button-bar");

    // all components will be added to this node
    let bar = u33e.addDomNode("furo-button-bar");
    bar.addMethod("bind-entity", "--entityObjectInjected")
        .addMethod("disable-all", "--disableAllReq")
        .addMethod("enable-all", "--enableAllReq");

    for (let service in SPEC.services) {



      switch (service) {

        case "Update":
          let updatebtn = bar.appendChild("furo-button");
          updatebtn.addFlag("primary")
              .addFlag("unelevated")
              .addFlag("hide-no-rel")
              .addFlag("disable-not-valid")
              .addFlag("disable-pristine")
              .addAttribute("rel", SPEC.services[service].deeplink.rel)
              .addAttribute("label", "${i18n.t('action.update')}")
              .addEventListener("click", "-^update-req");
          break;

        case "Delete":
          let deletebtn = bar.appendChild("furo-button");
          deletebtn.addFlag("danger")
              .addFlag("unelevated")
              .addFlag("hide-no-rel")
              .addAttribute("rel", SPEC.services[service].deeplink.rel)
              .addAttribute("label", "${i18n.t('action.delete')}")
              .addEventListener("click", "-^delete-req");
          break;


      }

    }
    return u33e;
  }
}

module.exports = HookInitUpdateAction;
