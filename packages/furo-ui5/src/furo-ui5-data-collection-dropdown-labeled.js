import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import '@ui5/webcomponents/dist/Label.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-data-collection-dropdown.js';

/**
 * `furo-ui5-data-collection-dropdown-labeled`
 * The furo-ui5-data-collection-dropdown-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-form-field-container Simple use
 * @appliesMixin FBP
 */
class FuroUi5DataCollectionDropdownLabeled extends FBP(LitElement) {
  /**
   * @event value-changed
   * Fired when value has changed from the component inside.
   *
   * detail payload: {*} the value from the value-field. By default the value field is "id"
   *
   *  **bubbles**
   */

  constructor(props) {
    super(props);
    this.label = '';

    this.subField = 'data';
    this.displayField = 'display_name';
    this.valueField = 'id';
    this.valueSubField = null;
    this.displaySubField = 'display_name';
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
       * the label for the data-collection-dropdown
       */
      label: { type: String },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * If you inject an array with complex objects, declare here the path where display_name and value_field are located.
       *
       * This is only needed if display_name and value_field are not located in the root of the object.
       * @property sub-field
       */
      subField: { type: String, attribute: 'sub-field', reflect: true },
      /**
       * The name of the field from the injected collection that contains the label for the dropdown array.
       * @property display-field
       */
      displayField: { type: String, attribute: 'display-field', reflect: true },
      /**
       * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
       * If you bind a scalar, you dont need this attribute.
       * @property value-field
       */
      valueField: { type: String, attribute: 'value-field', reflect: true },
      /**
       * if you bind a complex type, declare here the field which gets updated of value by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       * @property value-sub-field
       */
      valueSubField: { type: String, attribute: 'value-sub-field', reflect: true },
      /**
       * if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
       *
       * If you bind a scalar, you dont need this attribute.
       * @property display-sub-field
       */
      displaySubField: { type: String, attribute: 'display-sub-field', reflect: true },
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
   * inject list
   * @param arr
   */
  injectList(arr) {
    this._FBPTriggerWire('--injectList', arr);
  }

  /**
   * Inject the array of a collection
   * @param entities
   */
  injectEntities(entities) {
    this._FBPTriggerWire('--injectList', entities);
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
        <furo-ui5-data-collection-dropdown
          content
          id="Input"
          ?disabled=${this.disabled}
          sub-field="${this.subField}"
          display-field="${this.displayField}"
          value-field="${this.valueField}"
          value-sub-field="${this.valueSubField}"
          display-sub-field="${this.displaySubField}"
          ƒ-bind-data="--data"
          ƒ-inject-list="--injectList"
        ></furo-ui5-data-collection-dropdown>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-data-collection-dropdown-labeled',
  FuroUi5DataCollectionDropdownLabeled,
);
