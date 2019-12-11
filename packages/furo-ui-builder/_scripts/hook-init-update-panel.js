const U33eBuilder = require("./u33eBuilder");

class HookInitUpdatePanel {
  static getPath(ctx){
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    if (!SPEC.services.Update) {
      // abort if no update service is available
      return undefined
    }

    let basename = (SPEC.services.Update.data.request.replace(".", "-"));
    return PKGDIR + "/" + (basename + "-update-panel").toLowerCase() + ".u33e";
  }
  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    ctx.basename = (SPEC.services.Update.data.request.replace(".", "-"));
    u33e.model.component_name = (ctx.basename + "-update-panel").toLowerCase();
    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" html, css ", "lit-element");
    u33e.addImportWithMember(" Theme ", "@furo/framework/theme.js");

    u33e.addImportWithMember(" i18n ", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");
    u33e.addImportWithMember(" BasePanel ", "@furo/route/lib/BasePanel.js");


    u33e.addImport("@furo/layout/furo-vertical-flex.js");
    u33e.addImport("@furo/layout/furo-panel.js");
    u33e.addImport("@furo/navigation/furo-panel-head.js");
    u33e.addImport("@furo/data/furo-entity-agent.js");
    u33e.addImport("@furo/data/furo-data-object.js");


    let formImport = ctx.getImportPathForComponent((ctx.basename + "-form").toLowerCase());
    if (formImport) {
      u33e.addImport(formImport);
    }

    let updateActionImport = ctx.getImportPathForComponent((ctx.basename + "-update-action").toLowerCase());
    if (updateActionImport) {
      u33e.addImport(updateActionImport);
    }


    u33e.model.extends = "BasePanel";

    // styling
    u33e.addStyle(":host")
        .addCSSAttribute("display", "block")
        .addCSSAttribute("height", "100%")
        .addCSSAttribute("overflow", "hidden")
        .addCSSAttribute("background-color", "var(--update-panel-background, var(--surface, white))")
        .addCSSAttribute("color", "var(--on-update-panel-background, var(--on-surface, black))");

    u33e.addStyle(":host[hidden]")
        .addCSSAttribute("display", "none");

    u33e.addExposedWire("htsIn", "--htsIn", "Inject HATEOAS Link Object for the specific service.");

    // all components will be added to this node
    let vflex = u33e.addDomNode("furo-vertical-flex");

    let panelHead = vflex.appendChild("furo-panel-head");
    panelHead.addMethod("bind-data", "--navNode");

    let panel = vflex.appendChild("furo-panel");
    panel.addFlag("no-margin")
        .addFlag("flex")
        .addFlag("scroll");

    let banner = panel.appendChild("furo-banner");
    banner.addAttribute("icon", "error-outline")
        .addAttribute("dismiss-button-text", "${i18n.t('banner.action.close')}")
        .addMethod("set-text", "--error(*.message)")
        .addMethod("show", "--error");

    let form = panel.appendChild((ctx.basename + "-form").toLowerCase());
    form.addMethod("bind-data", "--entity(*.data)");

    let action = panel.appendChild((ctx.basename + "-update-action").toLowerCase());
    action.addMethod("bind-entity", "--entity")
        .addMethod("disable-all", "--requestStarted")
        .addMethod("enable-all", "--response, --responseError")
        .addEventListener("update-req", "--updateReq")
        .addEventListener("reset-req", "--resetReq")
        .addEventListener("self-req", "--selfReq")
        .addEventListener("delete-req", "--deleteReq");

    let agent = panel.appendChild("furo-entity-agent");
    agent.addAttribute("service", SPEC.name)
        .addMethod("hts-in", "--navNode(*._value.link), --htsIn")
        .addMethod("bind-request-data", "--entity(*.data)")
        .addMethod("load", "--selfReq")
        .addMethod("put", "--updateReq")
        .addMethod("delete", "--deleteReq")
        .addFlag("load-on-hts-in")
        .addEventListener("request-started", "--requestStarted, ^^activity-started")
        .addEventListener("response", "--response, ^^activity-stopped")
        .addEventListener("response-error", "--error, ^^activity-stopped")
        .addEventListener("fatal-error", "--error, ^^activity-stopped");

    let dao = panel.appendChild("furo-data-object");
    dao.addAttribute("type", SPEC.services.Update.data.request)
        .addMethod("reset", "--resetReq")
        .addMethod("inject-raw", "--response")
        .addEventListener("object-ready", "--entity");


    return u33e;
  }
}

module.exports = HookInitUpdatePanel;
