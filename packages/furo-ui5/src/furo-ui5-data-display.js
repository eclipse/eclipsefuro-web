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
 * @demo demo-furo-ui5-form-field-container Sample Form
 * @appliesMixin FBP
 */
class FuroUi5DataDisplay extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this.label = '';
    this.valueState = '';
    this.displayField = '';
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
       * Display Field
       * For complex type the standard behaviour is to display the field
       * display_name. With this attribute you can choose another field of the type.
       */
      displayField: { type: String, reflect: true, attribute: 'display-field' },
      /**
       * Value State
       */
      valueState: { type: String, reflect: true, attribute: 'value-state' },
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
        p {
          margin: 0;
          font-family: var(--sapFontFamily, '72');
          color: var(--sapTextcolor, '#32363a');
          word-break: break-word;
        }
        :host([value-state='Information']) p {
          color: var(--sapInformativeColor, #0a6ed1);
        }
        :host([value-state='Error']) p {
          color: var(--sapNegativeColor, #b00);
        }
        :host([value-state='Success']) p {
          color: var(--sapPositiveColor, #107e3e);
        }
        :host([value-state='Warning']) p {
          color: var(--sapCrticalColor, #e9730c);
        }
        ui5-icon[value-state='Success'] {
          color: var(--sapPositiveColor, #107e3e);
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
    this.binder.fieldNode.addEventListener('field-value-changed', () => {
      this._updateField();
    });
  }

  /**
   * Finds the best string representation solution for scalar, complex and fat types
   * @private
   */
  _updateField() {
    if (this.binder.fieldFormat === 'fat') {
      this.value = this.binder.fieldNode.value._value;
    } else if (
      typeof this.binder.fieldNode._value === 'object' &&
      !Array.isArray(this.binder.fieldNode._value) &&
      this.binder.fieldNode._value !== null
    ) {
      this.value = this.binder.fieldNode._value.value || this.binder.fieldNode._value;
    } else {
      this.value = this.binder.fieldNode._value.toString();
    }

    if (this.displayField && this.displayField.length && this.binder.fieldNode[this.displayField]) {
      this.value = this.binder.fieldNode[this.displayField]._value;
    } else if (this.binder.fieldNode.display_name) {
      this.value = this.binder.fieldNode.display_name;
    }

    if (this.value && this.value.toString() === undefined) {
      this.value = '';
    }
    this.requestUpdate();
  }

  /**
   * Update the value state on change
   * @param state
   * @private
   */
  set _valueState(state) {
    this.valueState = state || 'None';
  }

  /**
   * Template logic
   * For boolean value an icon representation is used
   * @returns {*}
   * @private
   */
  _getTemplate() {
    if (this.binder.fieldNode && this.binder.fieldNode._spec.type === 'bool') {
      if (this.value === "true") {
        return html`
          <ui5-icon name="accept" value-state="Success"></ui5-icon>
        `;
      }
      return html`
        <ui5-icon name="border"></ui5-icon>
      `;
    }
    return html`
      <p content id="Input">${this.value}</p>
    `;
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
        ${this._getTemplate()}
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define('furo-ui5-data-display', FuroUi5DataDisplay);
