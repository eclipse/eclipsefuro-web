const U33eBuilder = require("./u33eBuilder");

class HookInitUpdatePanel {
    constructor(ctx, u33e) {
        const SPEC = ctx.spec;
        const SERVICE = ctx.service;
        const UISPECDIR = ctx.config.ui_spec_out;
        const PKGDIR = UISPECDIR + "/" + ctx.package;
        u33e.model.component_name = (SPEC.__proto.package + "-" + SPEC.type + "-update-panel").toLowerCase();
        u33e.model.path = PKGDIR + "/" + u33e.model.component_name + ".u33e";
        u33e.model.description = SPEC.description;

        u33e.addImportWithMember(" html, css ", "lit-element");
        u33e.addImportWithMember(" Theme ", "@furo/framework/theme.js");
        u33e.addImportWithMember(" FBP ", "@furo/fbp");
        u33e.addImportWithMember(" i18n ", "@furo/framework/i18n.js", "eslint-disable-next-line no-unused-vars");

        u33e.addImport("@furo/layout/furo-vertical-flex.js");
        u33e.addImport("@furo/layout/furo-panel.js");
        u33e.addImport("@furo/navigation/furo-panel-head.js");
        u33e.addImport("@furo/data/furo-entity-agent.js");
        u33e.addImport("@furo/data/furo-data-object.js");

        u33e.addImport("./" + (SPEC.__proto.package + "-" + SPEC.type + "-form").toLowerCase());
        u33e.addImport("./" + (SPEC.__proto.package + "-" + SPEC.type + "-update-action").toLowerCase());

        // styling
        u33e.addStyle(":host")
            .addCSSAttribute("display", "block")
            .addCSSAttribute("height", "100%")
            .addCSSAttribute("overflow", "hidden")
            .addCSSAttribute("background-color", "var(--update-panel-background, var(--surface, white))")
            .addCSSAttribute("color", "var(--on-update-panel-background, var(--on-surface, black))");

        u33e.addStyle(":host[hidden]")
            .addCSSAttribute("display", "none");

        u33e.addExposedWire("htsIn", --htsIn, "Inject HATEOAS Link Object for the specific service.");

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

        let form = panel.appendChild((SPEC.__proto.package + "-" + SPEC.type + "-form").toLowerCase());
        form.addMethod("bind-data", "--entity(*.data)");

        let action = panel.appendChild((SPEC.__proto.package + "-" + SPEC.type + "-update-action").toLowerCase());
        action.addMethod("bind-entity", "--entity")
            .addMethod("disable-all", "--requestStarted")
            .addMethod("enable-all", "--response, --responseError")
            .addEventListener("update-req", "--updateReq")
            .addEventListener("reset-req", "--resetReq")
            .addEventListener("self-req", "--selfReq")
            .addEventListener("delete-req", "--deleteReq");

        let agent = panel.appendChild("furo-entity-agent");
        agent.addAttribute("service", SERVICE.service_name)
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
        dao.addAttribute("type", SERVICE.response_type)
            .addMethod("reset", "--resetReq")
            .addMethod("inject-raw", "--response")
            .addEventListener("object-ready", "--entity");


        return u33e;
    }
}

module.exports = HookInitUpdatePanel;
