import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `sample-furo-password-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroPasswordInput extends FBP(LitElement) {

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
      
      <furo-demo-snippet >
        <template>
          <furo-password-input hint="Hint text for password" label="Password"></furo-password-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-password-input', SampleFuroPasswordInput );
