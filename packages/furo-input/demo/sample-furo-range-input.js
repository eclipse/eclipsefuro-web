import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `sample-furo-range-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroRangeInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('SampleFuroRangeInput') || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 160px;
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
          <furo-range-input ƒ-set-value="--number" autofocus value="123.25" step="0.25" hint="Steps 0.25" label="Range input field" @-value-changed="--number"></furo-range-input>
          <furo-range-input ƒ-set-value="--number" max="125" min="50" value="123" hint="Min max" label="Range input field" @-value-changed="--number"></furo-range-input>
          <furo-range-input error errortext="out of range" ƒ-set-value="--number" hint="Slide for some number" label="With error" @-value-changed="--number"></furo-range-input>
          <furo-range-input disabled ƒ-set-value="--number" value="23" hint="Slide for some number" label="Disabled" @-value-changed="--number"></furo-range-input>
        </template>
      </furo-demo-snippet>
      
    `;
  }
}

window.customElements.define('sample-furo-range-input', SampleFuroRangeInput );
