const U33eBuilder = require("./u33eBuilder");

class HookInitUpdatePanelUi5 {
  static getPath(ctx) {
    const SPEC = ctx.spec;
    const UISPECDIR = ctx.config.ui_spec_out;
    const PKGDIR = UISPECDIR + "/" + ctx.package;
    if (!SPEC.services.Update) {
      // abort if no update service is available
      return undefined
    }

    let basename = (SPEC.services.Update.data.request.split(".").join("-"));
    return PKGDIR + "/" + (basename + "-update-panel-ui5").toLowerCase() + ".u33e";
  }

  constructor(ctx, u33e) {
    const SPEC = ctx.spec;
    ctx.basename = (SPEC.services.Update.data.request.split(".").join("-"));
    u33e.model.component_name = (ctx.basename + "-update-panel-ui5").toLowerCase();

    // add to registry
    ctx.addToRegistry("edit", u33e.model.component_name, SPEC.services.Update.data.response);

    u33e.model.path = ctx.path;
    u33e.model.description = SPEC.description;

    u33e.addImportWithMember(" html, css ", "lit-element");
    u33e.addImportWithMember(" Theme ", "@furo/framework/src/theme.js");

    u33e.addImportWithMember(" i18n ", "@furo/framework/src/i18n.js", "eslint-disable-next-line no-unused-vars");
    u33e.addImportWithMember(" BasePanel ", "@furo/route/src/lib/BasePanel.js");


    u33e.addImport("@furo/layout/src/furo-vertical-flex.js");
    u33e.addImport("@furo/layout/src/furo-panel.js");
    u33e.addImport("@furo/navigation/src/furo-panel-head.js");
    u33e.addImport("@furo/data/src/furo-entity-agent.js");
    u33e.addImport("@furo/data/src/furo-data-object.js");


    let formImport = ctx.getImportPathForComponent((ctx.basename + "-form-ui5").toLowerCase());
    if (formImport) {
      u33e.addImport(formImport);
    }

    let updateActionImport = ctx.getImportPathForComponent((ctx.basename + "-update-action-ui5").toLowerCase());
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

    u33e.addStyle(":host([hidden])")
        .addCSSAttribute("display", "none");

    u33e.addExposedWire("htsIn", "--htsIn", "Inject HATEOAS Link Object for the specific service.");

    // all components will be added to this node
    let vflex = u33e.addDomNode("furo-vertical-flex");
    vflex.description = "controlls the flexing and scrolling";

    let headpanel = vflex.appendChild("furo-panel");
    headpanel.description = " ";
    headpanel.addFlag("no-margin");

    let panelHead = headpanel.appendChild("furo-panel-head");
    panelHead.description = "This will show the display_name and a description";
    panelHead.addMethod("bind-data", "--entity(*.data)");

    let panel = vflex.appendChild("furo-panel");
    panel.description = "The main panel, this panel scrolls";
    panel.addFlag("no-margin")
        .addFlag("flex")
        .addFlag("scroll");


    let form = panel.appendChild((ctx.basename + "-form-ui5").toLowerCase());
    form.description = "The form for the type " + SPEC.services.Update.data.request;
    form.addMethod("bind-data", "--entity(*.data)");

    let actionpanel = vflex.appendChild("furo-panel");
    actionpanel.description = "This panel stays on the bottom of the page";
    actionpanel.addFlag("no-margin");


    let action = actionpanel.appendChild((ctx.basename + "-update-action-ui5").toLowerCase());
    action.description = "The events of the updateaction are mostly wired to the entity-agent below";
    action.addMethod("bind-entity", "--entity")
        .addMethod("disable-all", "--requestStarted")
        .addMethod("enable-all", "--response, --responseError")
        .addEventListener("update-req", "--updateReq")
        .addEventListener("reset-req", "--resetReq")
        .addEventListener("self-req", "--selfReq")
        .addEventListener("delete-req", "--deleteReq");

    let banner = u33e.addDomNode("furo-banner");
    banner.description = "Trigger the banner on errors";
    banner.addAttribute("icon", "error-outline")
        .addAttribute("dismiss-button-text", "${i18n.t('banner.action.close')}")
        .addMethod("parse-grpc-status", "--error")
        .addMethod("show", "--error");

    let agent = u33e.addDomNode("furo-entity-agent");
    agent.description = "Agent for the service " + SPEC.name;
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

    let dao = u33e.addDomNode("furo-data-object");
    dao.description = "DAO for type " + SPEC.services.Update.data.response;
    dao.addAttribute("type", SPEC.services.Update.data.response)
        .addMethod("reset", "--resetReq")
        .addMethod("inject-raw", "--response")
        .addEventListener("object-ready", "--entity");


    return u33e;
  }
}

module.exports = HookInitUpdatePanelUi5;
