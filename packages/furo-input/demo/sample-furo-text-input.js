import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `sample-furo-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroTextInput extends FBP(LitElement) {

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
            checkbox
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
          <furo-text-input ƒ-set-value="--text" autofocus value="some text" hint="With autofocus" label="Text input field" @-value-changed="--text"></furo-text-input>
          <furo-text-input ƒ-set-value="--text" hint="Type in some text" label="Text input field" @-value-changed="--text"></furo-text-input>
          <furo-text-input error errortext="something went wrong" ƒ-set-value="--text" hint="Type in some text" label="With error" @-value-changed="--text"></furo-text-input>
          <furo-text-input disabled ƒ-set-value="--text" hint="Type in some text" label="With error" @-value-changed="--text"></furo-text-input>
        </template>
      </furo-demo-snippet>
      
    `;
  }
}

window.customElements.define('sample-furo-text-input', SampleFuroTextInput );
