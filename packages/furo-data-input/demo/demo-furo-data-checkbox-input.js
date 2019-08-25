import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper";
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "@furo/layout/furo-horizontal-flex";
import "../furo-catalog";
import "@furo/data/entity-agent";

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
                    <furo-data-checkbox-input trailing-icon="dashboard"
                                              ƒ-bind-data="--entity(*.fields.open)"></furo-data-checkbox-input>
                    <furo-data-checkbox-input leading-icon="dashboard" label="disabled" hint="disabled hint"
                                              disabled=true
                                              ƒ-bind-data="--entity(*.fields.open)"></furo-data-checkbox-input>
                    <furo-horizontal-flex space>

                        <furo-data-checkbox-input style="margin-top:12px" autofocus ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                  @-value-changed="--checkChanged"
                                                  hint="the checked value will be sent to text input"></furo-data-checkbox-input>

                        <furo-text-input condensed label="wire the checkbox" ƒ-set-value="--checkChanged"></furo-text-input>
                        <furo-button style="margin-top:18px" @-click='--qpIn' label="load test data"  raised></furo-button>
                    </furo-horizontal-flex>


                    <furo-data-object type="experiment.Experiment" @-data-injected="--entity"
                                      ƒ-inject-raw="--response(*.data)"></furo-data-object>
                    <furo-deep-link service="ExperimentService" @-hts-out="--hts" ƒ-trigger="--qpIn" qp='{"exp": 1}'></furo-deep-link>
                    <entity-agent service="ExperimentService"
                                  ƒ-hts-in="--hts"
                                  ƒ-load="--hts"
                                  ƒ-bind-request-data="--entity"
                                  @-response="--response">
                    </entity-agent>
                </template>
            </furo-demo-snippet>
        `;
    }
}

window.customElements.define('demo-furo-data-checkbox-input', DemoFuroDataCheckboxInput);
