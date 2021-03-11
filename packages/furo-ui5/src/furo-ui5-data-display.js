import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/accept.js';
import '@ui5/webcomponents-icons/dist/border.js';

import './furo-ui5-form-field-container.js';

/**
 * `furo-ui5-data-display`
 * The furo-ui5-data-display is a composition to easily use a display field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @customElement
 * @demo demo-furo-ui5-data-display Simple use
 * @demo demo-furo-ui5-readonly-card Card Sample
 * @demo demo-furo-ui5-data-display-form Read only Form
 * @demo demo-furo-ui5-form-field-container Mixed Form
 * @appliesMixin FBP
 */
class FuroUi5DataDisplay extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this.label = '';
    this.valueState = '';
    this._initBinder();
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
       * Value State
       */
      valueState: { type: String, reflect: true, attribute: 'value-state' },
      /**
       * Disabled State
       */
      disabled: { type: Boolean, reflect: true, attribute: 'disabled' },
    };
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          --furo-ui5-form-field-container-grid-row-gap: 0;
        }
        :host([hidden]) {
          display: none;
        }

        ui5-label[data-size='size-s'],
        ui5-label[data-size='size-m'] {
          padding-top: 0;
        }
      `,
    ];
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    this.applyBindingSet();
  }

  /**
   * apply the binding set to the binder
   * binding set can be customised here otherwise the standard set in the ui5-data-input will be used
   * @param fieldNode
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      hint: '_hint',
      icon: 'ui5Icon', // icon and leading icon maps to the same
      'leading-icon': 'ui5Icon', // icon and leading icon maps to the same
      'value-state': '_valueState',
      name: 'name',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      disabled: 'disabled',
      readonly: 'disabled',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {};

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {};
  }

  /**
   * Binds the fieldNode to the component
   * binding set can be customised here otherwise the standard bindData in the ui5-data-input will be used
   * @param fieldNode
   */
  bindData(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    Ui5LabelDataBinding.bindData(this, fieldNode);

    this.binder.bindField(fieldNode);
    this._FBPTriggerWire('--data', this.binder.fieldNode);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container ?disabled=${this.disabled}>
        <ui5-label label slot="label" for="Input" show-colon>${this.label}</ui5-label>
        <furo-type-renderer
          content
          ƒ-bind-data="--data"
          value-state=${this.valueState}
        ></furo-type-renderer>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define('furo-ui5-data-display', FuroUi5DataDisplay);
