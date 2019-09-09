import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"


import "@furo/data-input";
import "@furo/form";

/**
 * `project-project-form`
 * Project description
 *
 * @customElement
 * @appliesMixin FBP
 */
export class ProjectProjectForm extends FBP(LitElement) {
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FormBaseTheme') || css`
            :host {
                display: block;
            }
            :host([hidden]) {
                display: none;
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
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`

            
            <furo-form-layouter four>
                
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.cost_limit)"></furo-data-text-input>
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.description)"></furo-data-text-input>
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.display_name)"></furo-data-text-input>
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.end)"></furo-data-text-input>
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.id)"></furo-data-text-input>
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.members)"></furo-data-text-input>
                <furo-data-text-input condensed double ƒ-bind-data="--data(*.start)"></furo-data-text-input>
            </furo-form-layouter>
            

        `;
    }
}

window.customElements.define('project-project-form', ProjectProjectForm);
