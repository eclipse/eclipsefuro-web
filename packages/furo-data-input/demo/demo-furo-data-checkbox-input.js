import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper";
import "@furo/data/furo-data-object";
import "@furo/data/furo-deep-link";
import "@furo/layout/src/furo-horizontal-flex";
import "../furo-catalog";
import "./helper/produce-qp-data";
import "@furo/data/furo-entity-agent";

/**
 * `demo-furo-data-checkbox-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCheckboxInput extends FBP(LitElement) {



    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroDataCheckboxInput') || css`
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
            <p>Bind the field from furo-data-object with <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                The labels, hints, defaults are comming from the furo-data-object specs.</p>
            <furo-demo-snippet>
                <template style="position: relative">
                    <furo-data-checkbox-input label="console warning by invalid binding" ƒ-bind-data="--entity(*.xxxy)"></furo-data-checkbox-input>
                    <furo-data-checkbox-input label="bindable no matter Disabled" readonly=true ƒ-bind-data="--entity(*.furo_data_checkbox_input)"> </furo-data-checkbox-input>
                    <furo-data-checkbox-input style="position: relative;top:-8px" condensed label="condensed" hint="condensed hint" ƒ-bind-data="--entity(*.furo_data_checkbox_input)" > </furo-data-checkbox-input>
                    <furo-data-checkbox-input></furo-data-checkbox-input>
                    <furo-horizontal-flex space>
    
                        <furo-data-checkbox-input autofocus ƒ-bind-data="--entity(*.furo_data_checkbox_input)"
                                                  @-value-changed="--checkChanged"
                                                  hint="the checked value will be sent to text input"></furo-data-checkbox-input>
    
                        <furo-text-input condensed label="wire the checkbox" ƒ-set-value="--checkChanged"></furo-text-input>

                    </furo-horizontal-flex>

                    <produce-qp-data  @-data="--qp" qp={"exp":1}></produce-qp-data>

                    <furo-data-object type="experiment.Experiment" @-object-ready="--entity"
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
