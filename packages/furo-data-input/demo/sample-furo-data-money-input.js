import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data"

import "../src/furo-catalog"
/**
 * `sample-furo-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroDataMoneyInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('SampleFuroDataMoneyInput') || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 230px;
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
      <h3>Sample</h3>
      
      <furo-demo-snippet >
        <template>
          <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
          <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)"></furo-data-money-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-data-money-input', SampleFuroDataMoneyInput );
