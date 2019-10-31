// Code generated by @furo/ui-builder. DO NOT EDIT.
// source: ../furo-specs/specs/experiment/experiment.type.spec
import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"


import "@furo/data-input";
import "@furo/form";

/**
 * `experiment-experiment-create-form`
 * experiment spec for testing
 *
 * @customElement
 * @appliesMixin FBP
 */
export class ExperimentExperimentCreateForm extends FBP(LitElement) {
    static get styles() {
        // language=CSS
       return Theme.getThemeForComponent('FormBaseTheme') || css`
            :host {
                display: block;
            }
            :host([hidden]) {
                display: none;
            }
            h1 {
                font-size: 24px;
                line-height: 24px;
                letter-spacing: 0;
                margin: 0;
                font-weight: normal;
                margin-bottom: 4px;
            }
           .caption{
                font-size: 10px;
                text-transform: uppercase;
                line-height: 32px;
                letter-spacing: 1.5px;
                font-weight: 500;
            }
            .secondary{
                color: var(--secondary-color, var(--on-primary-light,#777777));
                line-height: 22px;
                font-size: 14px;
                letter-spacing: 0.1px;
            }
        `
    }
    /**
     * Bind here your furo-data-object event @-object-ready
     * @public
     * @param data
     */
    bindData(data) {
        this._FBPTriggerWire('--data', data);
        this.field = data;
        
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
        
            <!--   -->
            
            
            
            <furo-form-layouter four>
                <!-- field for furo_data_text_input for testing  -->
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.furo_data_text_input)"></furo-data-text-input>
                <!-- field for testing money type  -->
                <furo-data-money-input condensed double ƒ-bind-data="--data(*.furo_data_money_input)"></furo-data-money-input>
            </furo-form-layouter>
            
        `;
    }
}

window.customElements.define('experiment-experiment-create-form', ExperimentExperimentCreateForm);
