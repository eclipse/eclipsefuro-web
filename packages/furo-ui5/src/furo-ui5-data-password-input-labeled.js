import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import '@ui5/webcomponents-icons/dist/shield.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-data-password-input.js';

/**
 * `furo-ui5-data-password-input-labeled`
 * The furo-ui5-data-password-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @slot {HTMLElement} icon - defines the icon to be displayed in the input element.
 *
 * @fires {String} field-value-changed - Fires the field value when it changes.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-data-password-input-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5DataPasswordInputLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
  }

  /**
   * Focuses the underlying ui5 input element
   * @param {Object} options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
   */
  focus(options) {
    this._FBPTriggerWire('--focus', options);
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * the label for the data-password-input
       */
      label: { type: String },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user and
       * appears in disabled state.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is readonly.
       */
      readonly: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * Orchestrates the data field connection to the inside
   * @param {FieldNode} fieldNode
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
        <ui5-label label slot="label" for="Input" show-colon ?required=${this.required}
          >${this.label}</ui5-label
        >
        <furo-ui5-data-password-input
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ƒ-bind-data="--data"
          ƒ-focus="--focus"
        >
          <div slot="icon"><slot name="icon"></slot></div>
        </furo-ui5-data-password-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-data-password-input-labeled',
  FuroUi5DataPasswordInputLabeled,
);
