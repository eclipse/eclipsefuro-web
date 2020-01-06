import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-chip`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroChip extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroChip') || css`
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
      <h2>Demo furo-choice-chip</h2>
      
      <furo-demo-snippet style="height: 500px">
        <template >
            <table>
                <tr>
                    <th></th>
                    <th>checked</th>
                    <th>unchecked</th>
                </tr>
                <tr>
                  <td>enabled</td>
                  <td> <furo-choice-chip  checked condensed text="Checked"  ></furo-choice-chip></td>
                  <td> <furo-choice-chip  text="unchecked" ></furo-choice-chip></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td> <furo-choice-chip checked disabled  text="Checked disabled" ></furo-choice-chip></td>
                    <td> <furo-choice-chip disabled text="Unchecked disabled"></furo-choice-chip></td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td> <furo-choice-chip  autofocus checked condensed text="auto focus"></furo-choice-chip></td>
                    <td> </td>
                </tr>
            </table>
            <h3>outlined</h3>

            <table>
                <tr>
                    <th></th>
                    <th>checked</th>
                    <th>unchecked</th>
                </tr>
                <tr>
                    <td>enabled</td>
                    <td> <furo-choice-chip checked outlined condensed leading-icon="schedule" trailing-icon="close" text="hallo world" ></furo-choice-chip></td>
                    <td> <furo-choice-chip  outlined leading-icon="schedule" trailing-icon="close" text="hallo world" ></furo-choice-chip></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td> <furo-choice-chip outlined checked disabled  text="Checked disabled" ></furo-choice-chip></td>
                    <td> <furo-choice-chip outlined disabled text="Unchecked disabled"></furo-choice-chip></td>
                </tr>
                <tr>
  
                </tr>
            </table>
        </template>
      </furo-demo-snippet>
    `;
    }
}

window.customElements.define('demo-furo-chip', DemoFuroChip );
