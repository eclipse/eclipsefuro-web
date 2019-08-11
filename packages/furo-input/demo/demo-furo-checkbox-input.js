import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
/**
 * `demo-furo-checkbox-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCheckboxInput extends FBP(LitElement) {

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
      <h2>Demo furo-checkbox-input</h2>
      
      <furo-demo-snippet >
        <template>
          <furo-checkbox-input label="The label" value="true" text="Click to check" @-checked="--aChecked" @-unchecked="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input condensed label="The label" value="false" ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input filled label="The label" value="false" ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input filled condensed label="The label" value="false" ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
          <furo-checkbox-input disabled label="Disabled"   ƒ-uncheck="--aChecked" ƒ-check="--aUnchecked"></furo-checkbox-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-checkbox-input', DemoFuroCheckboxInput );
