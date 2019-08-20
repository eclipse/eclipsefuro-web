import {LitElement, html, css} from 'lit-element';
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
class DemoFuroTextInput extends FBP(LitElement) {

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
      <furo-vertical-flex>


        <div>
          <h2>Demo furo-text-input</h2>
          <p>description</p>
        </div>
        <furo-horizontal-scroller flex>
          
            <div style="background-color:var(--surface); padding: 30px">
              <furo-text-input min="5" leading-icon="send" label="Label" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="send" filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="send" leading-icon="send"  error label="Label" errortext="errortext"></furo-text-input>
              <furo-text-input trailing-icon="send" leading-icon="send"  filled error label="Label" value="Val" errortext="errortext"></furo-text-input>
            </div>
            <div style="padding:30px">
              <furo-checkbox></furo-checkbox>
              <furo-text-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-text-input>
              <furo-text-input filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input error label="Label" value="Val" hint="tex" errortext="errortext"></furo-text-input>
              
              <furo-text-input trailing-icon="send" filled condensed error label="Label" value="Val" errortext="errortext"></furo-text-input>
            </div> 
            <div style="padding:30px">
              
              <furo-text-input disabled trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed filled label="Label" value="Val" hint="Hint"></furo-text-input>
              <furo-text-input trailing-icon="fingerprint"  condensed float label="Floating"  hint="Hint"></furo-text-input>
            </div>
          
        </furo-horizontal-scroller>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-text-input', DemoFuroTextInput);
