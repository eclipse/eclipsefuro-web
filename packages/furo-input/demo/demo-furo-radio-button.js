import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-radio-button`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroRadioButton extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroRadioButton') || css`
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
      <h2>Demo furo-radio-button</h2>
      
      <furo-demo-snippet >
        <template>
            <table>
                <tr>
                    <th></th>
                    <th>checked</th>
                    <th>unchecked</th>
                </tr>
                <tr>
                  <td>enabled</td>
                  <td> <furo-radio-button checked></furo-radio-button></td>
                  <td> <furo-radio-button ></furo-radio-button></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td> <furo-radio-button checked disabled></furo-radio-button></td>
                    <td> <furo-radio-button disabled></furo-radio-button></td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td> <furo-radio-button checked autofocus></furo-radio-button></td>
                    <td> </td>
                </tr>
            </table>

        </template>
      </furo-demo-snippet>
    `;
    }
}

window.customElements.define('demo-furo-radio-button', DemoFuroRadioButton );
