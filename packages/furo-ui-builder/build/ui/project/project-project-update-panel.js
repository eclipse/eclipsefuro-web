// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ./../furo-specs/specs/project/project.service.spec
import {html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"
import {BasePanel} from "@furo/route/lib/BasePanel";

import '@furo/data';
import '@furo/layout';
import '@furo/form';
import '@furo/notification';


import "./project-project-form";
import "./project-project-update-action";

/**
 * Updates a Project, partial updates are supported
 *
 * @customElement
 * @appliesMixin BasePanel
 */
export class ProjectProjectUpdatePanel extends (BasePanel) {

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
    }

    /**
    * Inject hts for the ProjectService agent.
    *
    * Use this, if you do not work with a panel coordinator.
    */
    htsIn(hts){
        this._FBPTriggerWire("--htsIn",hts);
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('PanelBaseTheme') || css`
                :host {
                    display: block;
                    height: 100%;
                    overflow: hidden;
                    background-color: var(--surface);
                    color: var(--on-surface);
                }

                :host([hidden]) {
                    display: none;
                }

                .content {
                    padding: 0;
                    box-sizing: border-box;
                }

                .form {
                    padding: var(--spacing-s);
                }

                .action {
                    padding: var(--spacing-s) var(--spacing-s) var(--spacing-xs) var(--spacing-s);
                }
            `
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
          <furo-vertical-flex class="content">
              <project-project-form flex scroll class="form" flex ƒ-bind-data="--entity(*.data)"></project-project-form>
              <project-project-update-action class="action" @-update="--updateReq" ƒ-bind-entity="--entity" ƒ-start-activity="--requestStarted" ƒ-stop-activity="--response, --responseError" @-update-req="--updateReq"  @-reset-req="--resetReq"  @-self-req="--selfReq"  @-delete-req="--deleteReq"></project-project-update-action>
          </furo-vertical-flex>

          <furo-banner ƒ-set-text="--error(*.message)" ƒ-show="--error"
                                 icon="error-outline"
                                 dismiss-button-text="${i18n.t('furo.banner.close')}"></furo-banner>

          <furo-entity-agent service="ProjectService"
                             @-request-started="--requestStarted, ^^activity-started"
                             @-response="--response, ^^activity-stopped"
                             @-response-error="--error, ^^activity-stopped"
                             @-fatal-error="--error, ^^activity-stopped"
                             ƒ-hts-in="--navNode(*._value.link), --htsIn"
                             ƒ-bind-request-data="--entity(*.data)"
                             ƒ-put="--updateReq"
                             ƒ-load="--selfReq"
                             ƒ-delete="--deleteReq"
                             load-on-hts-in></furo-entity-agent>

          <furo-data-object type="project.ProjectEntity"
                            @-object-ready="--entity"
                            ƒ-reset="--resetReq"
                            ƒ-inject-raw="--response"></furo-data-object>

        `;
    }


}

window.customElements.define('project-project-update-panel', ProjectProjectUpdatePanel);
