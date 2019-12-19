import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-data-object-form`
 * A simple form for the demo-furo-data-object component
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-data-object-form.html
 * @appliesMixin FBP
 */
class FuroDataObjectForm extends FBP(LitElement) {

    constructor() {
        super();
    }

    bindFields(EntityFields){
      this._FBPTriggerWire("--dataObjectFields",EntityFields)
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
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataObjectForm') || css`
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
      Some fields are readonly:
      <furo-form-layouter>
        <furo-data-text-input ƒ-bind-data="--dataObject(*.fields.display_name)"></furo-data-text-input>
        <furo-data-date-input ƒ-bind-data="--dataObject(*.fields.start)"></furo-data-date-input>
        <furo-data-date-input ƒ-bind-data="--dataObject(*.fields.end)"></furo-data-date-input>
      </furo-form-layouter>
        Thank you
    `;
  }
}

window.customElements.define('furo-data-object-form', FuroDataObjectForm);
