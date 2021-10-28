import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';
import '@ui5/webcomponents/dist/Label.js';

import './furo-ui5-data-reference-search.js';
import './furo-ui5-form-field-container.js';

/**
 * `furo-ui5-data-reference-search-labeled`
 * The furo-ui5-data-reference-search-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-data-reference-search Simple use
 * @appliesMixin FBP
 */
export class FuroUi5DataReferenceSearchLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.service = '';
    this.label = '';
    this.extendedSearcher = '';
    this.disableSearchList = false;
    this.icon = 'search';
    this.searchResponsePath = 'entities';
    this.valueFieldPath = 'data.id';
    this.displayFieldPath = 'data.display_name';

    this.extendedValueFieldPath = 'data.id';
    this.extendedDisplayFieldPath = 'data.display_name';
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
    this._searcher = this.shadowRoot.getElementById('input');
  }

  static get properties() {
    return {
      /**
       * the service name
       */
      service: { type: String },
      /**
       * the label for the data-reference-search
       */
      label: { type: String },
      /**
       * Path to response value item which is used for the id.
       * By default this goes to *data.id*
       */
      valueFieldPath: { type: String, attribute: 'value-field-path' },
      /**
       * Path to selection value node which is used for the display.
       * By default this goes to *data.display_name*
       */
      displayFieldPath: { type: String, attribute: 'display-field-path' },
      /**
       * Path to the node in the response value which contains the array with the selection items.
       * By default this goes to *entitites*
       */
      searchResponsePath: { type: String, attribute: 'search-response-path' },
      /**
       * Path to response value item of the exteded search which is used for the id.
       * By default this goes to *data.id*.
       * Only needed when your extended searcher does not have the id, display_name signature in the response.
       */
      extendedValueFieldPath: { type: String, attribute: 'extended-value-field-path' },
      /**
       * Path to response value item of the exteded search which is used for the display.
       * By default this goes to *data.display_name*.
       * Only needed when your extended searcher does not have the id, display_name signature in the response.
       */
      extendedDisplayFieldPath: { type: String, attribute: 'extended-display-field-path' },
      /**
       * Overrides the hint text from the **specs**.
       * Use with caution, normally the specs defines this value.
       */
      placeholder: { type: String },
      /**
       * Use this attribute to set a custom icon for your searcher
       */
      icon: { type: String },
      /**
       * A Boolean attribute which, if present, means this field can not be searched.
       *
       * This is very useful when you want enforce the usage of the extended search
       */
      disableSearchList: {
        type: Boolean,
        attribute: 'disable-search-list',
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },
      readonly: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * Define the extended searcher. Do not forget to import the searcher you want to use.
       */
      extendedSearcher: {
        type: String,
        attribute: 'extended-searcher',
      },
    };
  }

  /**
   * Orchestrates the data field connection to the inside
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);
  }

  /**
   * sets the filter to the inner furo-ui5-data-reference-search
   * @param filter
   */
  setFilter(filter) {
    this._FBPTriggerWire('--filter', filter);
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
          >${this.label}
        </ui5-label>
        <furo-ui5-data-reference-search
          content
          id="Input"
          extended-searcher="${this.extendedSearcher}"
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          ?disable-search-list=${this.disableSearchList}
          search-response-path="${this.searchResponsePath}"
          value-field-path="${this.valueFieldPath}"
          icon="${this.icon}"
          service="${this.service}"
          display-field-path="${this.displayFieldPath}"
          extended-value-field-path="${this.extendedValueFieldPath}"
          extended-display-field-path="${this.extendedDisplayFieldPath}"
          ƒ-bind-data="--data"
          ƒ-focus="--focus"
          ƒ-set-filter="--filter"
        ></furo-ui5-data-reference-search>
      </furo-ui5-form-field-container>
    `;
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
}

window.customElements.define(
  'furo-ui5-data-reference-search-labeled',
  FuroUi5DataReferenceSearchLabeled,
);
