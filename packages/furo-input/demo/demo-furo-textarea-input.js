import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-element`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroTextareaInput extends FBP(LitElement) {

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
      <h2>Demo furo-textarea-input</h2>
      <p>description</p>
      <furo-demo-snippet >
        <template>
          <furo-textarea-input rows="1" label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
          <furo-text-input label="compare" value="text" hint="hint"></furo-text-input>
          <hr>
          <furo-textarea-input rows="4" label="a lot of text" hint="just type" value="aa\nss\v"></furo-textarea-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-textarea-input', DemoFuroTextareaInput );
