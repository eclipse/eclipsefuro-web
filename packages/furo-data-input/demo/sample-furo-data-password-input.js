import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../src/furo-catalog"
/**
 * `sample-furo-data-password-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroDataPasswordInput extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('SampleFuroDataPasswordInput') || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
        furo-demo-snippet {
            height: 130px;
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
      
      <furo-demo-snippet>
        <template>
          <furo-data-password-input hint="Hint text for password" label="Password"></furo-data-password-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-data-password-input', SampleFuroDataPasswordInput );
