import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-checkbox-input`
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to select multiple options from a set.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-checkbox-input label="This is the Label"></furo-checkbox-input> <furo-text-input label="Label" value="Val" hint="Hint"></furo-text-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * @summary checkbox input
 * @customElement
 * @demo demo-furo-checkbox-input Basic demo
 * @appliesMixin FBP
 */
class FuroCheckboxInput extends FBP(LitElement) {

    constructor() {
        super();
    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Description
             */
            myBool: {type: Boolean}
        };
    }

  /**
  * flow is ready lifecycle method
  */
  _FBPReady(){
    super._fbpReady();
    //this._FBPTraceWires()
  }

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
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <p>Hej, welcome</p>
    `;
  }
}

window.customElements.define('furo-checkbox-input', FuroCheckboxInput);
