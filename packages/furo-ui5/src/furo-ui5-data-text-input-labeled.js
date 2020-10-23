import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-data-text-input.js';

/**
 * `furo-ui5-data-text-input-labeled`
 * The furo-ui5-data-text-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-form-field-container Simple use
 * @appliesMixin FBP
 */
class FuroUi5DataTextInputLabeled extends FBP(LitElement) {
  /**
   * Fired when the input value changed.
   * the event detail is the input value
   * @event value-changed
   */

  constructor(props) {
    super(props);
    this.label = '';
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * the label for the data-text-input
       */
      label: { type: String },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * Orchestrates the data field connection to the inside
   * @param fieldNode
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container>
        <ui5-label label slot="label" for="Input" show-colon>${this.label}</ui5-label>
        <furo-ui5-data-text-input
          content
          id="Input"
          ?disabled=${this.disabled}
          ƒ-bind-data="--data"
        ></furo-ui5-data-text-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define('furo-ui5-data-text-input-labeled', FuroUi5DataTextInputLabeled);
