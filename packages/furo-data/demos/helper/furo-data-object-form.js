import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

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
  bindFields(EntityFields) {
    this._FBPTriggerWire('--dataObjectFields', EntityFields);
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
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `;
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
        <furo-data-text-input
          ƒ-bind-data="--dataObjectFields(*.display_name)"
        ></furo-data-text-input>
        <furo-data-date-input ƒ-bind-data="--dataObjectFields(*.start)"></furo-data-date-input>
        <furo-data-date-input ƒ-bind-data="--dataObjectFields(*.end)"></furo-data-date-input>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('furo-data-object-form', FuroDataObjectForm);
