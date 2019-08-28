import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/data"

import "../furo-catalog"
/**
 * `sample-furo-number-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroDataNumberInput extends FBP(LitElement) {

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
          <furo-data-number-input autofocus ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
          <furo-data-number-input  hint="Type in a number" label="label" ƒ-bind-data="--entity(*.furo_data_number_input)"></furo-data-number-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-data-number-input', SampleFuroDataNumberInput );
