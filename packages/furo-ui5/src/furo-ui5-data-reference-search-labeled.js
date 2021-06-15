import {LitElement, html, css} from 'lit-element';
import {Theme} from '@furo/framework/src/theme';
import {FBP} from '@furo/fbp/src/fbp.js';
import {Ui5LabelDataBinding} from './lib/Ui5LabelDataBinding.js';
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
 * @demo demo-furo-ui5-form-field-container Simple use
 * @appliesMixin FBP
 */
class FuroUi5DataReferenceSearchLabeled extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this.label = '';
    this.extendedSearcher = '';
    this.disableSearchList = false;
    this.icon = "search";
    this.searchResponsePath = "entities";
    this.valueFieldPath = "data.id";
    this.displayFieldPath = "data.display_name";

    this.extendedValueFieldPath = "data.id";
    this.extendedDisplayFieldPath = "data.display_name";
  }

  /**
   * Focuses the underlying ui5 input element
   * @param e
   */
  focus(e) {
    this._FBPTriggerWire('--focus', e);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
    this._searcher = this.shadowRoot.getElementById('input');
  }

  static get properties() {
    return {
      /**
       * the label for the data-reference-search
       */
      label: {type: String},
      valueFieldPath: {type: String, attribute: "value-field-path"},
      displayFieldPath: {type: String, attribute: "display-field-path"},
      searchResponsePath: {type: String, attribute: "search-response-path"},
      extendedValueFieldPath: {type: String, attribute: "extended-value-field-path"},
      extendedDisplayFieldPath: {type: String, attribute: "extended-display-field-path"},
      placeholder: {type: String},
      /**
       * Use this attribute to set a custom icon for your searcher
       */
      icon: {type: String},
      /**
       * A Boolean attribute which, if present, means this field can not be searched.
       *
       * This is very useful when you want enforce the usage of the extended search
       */
      disableSearchList: {
        type: Boolean,
        attribute: 'disable-search-list'
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
       *
       *
       */
      extendedSearcher: {
        type: String, attribute: "extended-searcher",
      },
    };
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
          display-field-path="${this.displayFieldPath}"
          extended-value-field-path="${this.extendedValueFieldPath}"
          extended-display-field-path="${this.extendedDisplayFieldPath}"
          ƒ-bind-data="--data"
          ƒ-focus="--focus"
        ></furo-ui5-data-reference-search>
      </furo-ui5-form-field-container>
    `;
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5DataReferenceSearchLabeled') ||
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
