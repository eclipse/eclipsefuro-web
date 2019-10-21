// Code generated by @furo/specs. DO NOT EDIT.
// source: specs/task/task.type.spec
import {html, css, LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"
import {i18n} from "@furo/framework/i18n"


import "@furo/data-input";
import "@furo/form";

/**
 * `task-task-display`
 * Task data description
 *
 * @customElement
 * @appliesMixin FBP
 */
export class TaskTaskDisplay extends FBP(LitElement) {
    static get styles() {
        // language=CSS
       return Theme.getThemeForComponent('DisplayBaseTheme') || css`
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
                <!-- Short task description  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.description)"></furo-data-display>
                <!-- Estimated time in days  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.estimated_time)"></furo-data-display>
                <!-- Owner of a task  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.owner)"></furo-data-display>
                <!-- List of subtasks  -->
                <furo-data-display condensed double noborder ƒ-bind-data="--data(*.subtasks)"></furo-data-display>
            </furo-form-layouter>
            
        `;
    }
}

window.customElements.define('task-task-display', TaskTaskDisplay);
