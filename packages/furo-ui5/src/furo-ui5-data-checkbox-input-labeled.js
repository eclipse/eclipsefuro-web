import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-data-checkbox-input.js';

/**
 * `furo-ui5-data-checkbox-input-labeled`
 *
 * The furo-ui5-data-checkbox-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @fires {Boolean} field-value-changed - Fires the field value when it changes.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-data-checkbox-input-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5DataCheckboxInputLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
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
       * the label for the data-checkbox-input
       */
      label: { type: String },

      /**
       * the placeholder is the additional information beside the label. it will be showed on the right side of the checkbox.
       */
      placeholder: { type: String },

      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },

      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
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

    fieldNode.addEventListener('this-metas-changed', () => {
      this._FBPTriggerWire('--placeholder', fieldNode._meta.placeholder || '');
    });

    this._FBPTriggerWire('--placeholder', this.placeholder || fieldNode._meta.placeholder || '');
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
        <furo-ui5-data-checkbox-input
          content
          left
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ƒ-.text="--placeholder"
          ƒ-bind-data="--data"
        ></furo-ui5-data-checkbox-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-data-checkbox-input-labeled',
  FuroUi5DataCheckboxInputLabeled,
);
