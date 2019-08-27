import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper";
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "@furo/layout/furo-horizontal-flex";
import "../furo-catalog";
import "./produce-qp-data";
import "@furo/data/furo-entity-agent";

/**
 * `demo-furo-data-checkbox-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCheckboxInput extends FBP(LitElement) {

    constructor() {
        super();
    }

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
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
            <h2>Demo furo-data-checkbox-input</h2>
            <p>Bind the field from entity-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                The labels, hints, defaults are comming from the entity-object specs.</p>
            <furo-demo-snippet>
                <template>
                    <furo-data-checkbox-input label="invalid binding" ƒ-bind-data="--entity(*.xxx)"></furo-data-checkbox-input>
                    <furo-data-checkbox-input label="disabled" hint="disabled hint"
                                              disabled=true >
                    </furo-data-checkbox-input>
                    <furo-horizontal-flex space>
    
                    <furo-data-checkbox-input style="margin-top:12px" autofocus ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                              @-value-changed="--checkChanged"
                                              hint="the checked value will be sent to text input"></furo-data-checkbox-input>

                    <furo-text-input condensed label="wire the checkbox" ƒ-set-value="--checkChanged"></furo-text-input>
                    <produce-qp-data  @-data="--qp" qp={"exp":1}></produce-qp-data>

                    </furo-horizontal-flex>

                    <furo-data-object type="experiment.Experiment" @-data-injected="--entity"
                                      ƒ-inject-raw="--response(*.data)"></furo-data-object>
                    <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                    <furo-entity-agent service="ExperimentService"
                                  ƒ-hts-in="--hts"
                                  ƒ-load="--hts"
                                  ƒ-bind-request-data="--entity"
                                  @-response="--response">
                    </furo-entity-agent>
                </template>
            </furo-demo-snippet>
        `;
    }
}

window.customElements.define('demo-furo-data-checkbox-input', DemoFuroDataCheckboxInput);
