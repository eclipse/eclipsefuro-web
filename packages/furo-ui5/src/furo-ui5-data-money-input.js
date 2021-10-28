import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import './furo-ui5-form-field-container.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';


import '@ui5/webcomponents/dist/Input.js';
import './furo-ui5-data-text-input.js';
import { FieldNode } from '@furo/data/src/lib/FieldNode';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode';

/**
 * `furo-data-money-input`
 * Binds a entityObject field google.type.Money to a furo-number-input and currency dropdown fields
 *  <sample-furo-data-money-input></sample-furo-data-money-input>
 *
 *  you can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three
 *  ways have priority : currencies > options as attribute > options in meta. When no currencies is setted. Default currency will be `CHF`
 *
 *  <furo-ui5-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ "CHF","EUR","USD" ]}'></furo-data-money-input>
 *  <furo-ui5-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'></furo-data-money-input>
 *  <furo-ui5-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" currencies="CHF,EUR,USD"></furo-data-money-input>
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **required: true** , set the element to required
 *
 * Tags: money input
 * @fires {Money} value-changed -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @summary  Binds a entityObject field google.type.Money to a number-input and currency dropdown fields
 * @customElement
 * @demo demo-furo-ui5-data-money-input Basic Usage
 * @mixes FBP
 */
export class FuroUi5DataMoneyInput extends FBP(FieldNodeAdapter(LitElement)) {
  constructor() {
    super();

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = { state: 'None', message: '' };

    this._attributesFromFNA = {
      readonly: undefined,
    };

    this._constraintsFromFNA = {
      required: undefined,
    };

    // a list of privileged attributes. when those attributes are set in number-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      required: null,
      disabled: null,
    };
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();
  }

  /**
   * Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    // check if we have a FieldNode or RepeaterNode
    if (!(fieldNode instanceof FieldNode || fieldNode instanceof RepeaterNode)) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ', fieldNode, 'is not a FieldNode', this, this.parentNode);
      return false;
    }

    // initial empty metas
    this.__meta = {
      default: '',
      hint: '',
      label: '',
      options: {},
      readonly: false,
      repeated: false,
      typespecific: null,
    };

    // protection against multiple calls of bindData
    if (this.__fieldNode.removeEventListener) {
      this.__detachEventListeners();
    }

    // add the main event listeners
    fieldNode.addEventListener('field-value-changed', this.__fieldValueChangedHandler);
    fieldNode.addEventListener('field-became-valid', this.__fieldBecamesValidHandler);
    fieldNode.addEventListener('field-became-invalid', this.__fieldBecamesInvalidHandler);
    fieldNode.addEventListener('this-metas-changed', this.__fieldMetasChangedHandler);

    // this is for easier debugging with the inspector
    this.__fieldNode = fieldNode;

    // notify for initial data
    this.__fieldValueChangedHandler();

    // run meta checks on initial bind
    this.__fieldMetasChangedHandler();

    this._FBPTriggerWire('--data', fieldNode);

    return true;
  }

  /**
   * Reads the attributes which are set on the component dom.
   * Attributes that can be se are   `required`,`readonly`,`disabled` ,
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
    this._previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';

    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (this._privilegedAttributes.readonly === null) {
      this.readonly = readonly;
    }
  }

  /**
   * overwrite onFnaConstraintsChanged function
   * @private
   * @param constraints
   */
  onFnaConstraintsChanged(constraints) {
    // required
    if (constraints.required !== undefined) {
      this._constraintsFromFNA.required = constraints.required;
      if (this._privilegedAttributes.required === null) {
        this.required = constraints.required.is === 'true';
      }
    }
  }

  /**
   *
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this._tmpValue = {};

    // update value when the amount changed
    this._FBPAddWireHook('--inputInput', e => {
      if (e.inputType === 'deleteContentBackward') {
        // this.binder.fieldNode.reset();
        // this.binder.fieldNode.currency_code._value = '';
        // this._FBPTriggerWire('--valueAmount', '');
      }

      let value = {};
      if (e.composedPath()[0].nodeName === 'UI5-INPUT') {
        value = this._convertDataToMoneyObj('', e.composedPath()[0].value, this._tmpValue);
        this.setFnaFieldValue(value);
      } else {
        value = this._convertDataToMoneyObj(e.composedPath()[0].value, '', this._tmpValue);
        this.setFnaFieldValue(value);
      }

      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = value;
      this.dispatchEvent(customEvent);
    });
  }

  // convert data to google.type.Money format
  // eslint-disable-next-line class-methods-use-this
  _convertDataToMoneyObj(currency, amount, obj) {
    if (obj == null) {
      // eslint-disable-next-line no-param-reassign
      obj = {};
    }

    if (currency) {
      // eslint-disable-next-line no-param-reassign
      obj.currency_code = currency;
    }
    if (amount) {
      const arr = String(amount).split('.');
      // eslint-disable-next-line no-param-reassign
      obj.units = Number(arr[0]);
      if (arr[1]) {
        // eslint-disable-next-line no-param-reassign
        obj.nanos =
          obj.units > 0
            ? Number.parseInt(Number(`0.${arr[1]}`) * 100000000, 10)
            : Number.parseInt(Number(`0.${arr[1]}`) * 100000000, 10) * -1;
      } else {
        // eslint-disable-next-line no-param-reassign
        obj.nanos = 0;
      }
    }
    return obj;
  }

  /**
   *
   * @returns {{options: {type: ObjectConstructor}, currencies: {type: StringConstructor}}}
   */
  static get properties() {
    return {
      /**
       * the string list of currencies for the dropdown. e.g. "CHF,EUR,USD"
       */
      currencies: {
        type: String,
      },
      /**
       * the option object defines the currencies dropdown
       * '{"list": [ "chf","eur","usd" ]}'
       * '{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'
       */
      options: {
        type: Object,
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

  /**
   * update amount field
   * One issue with number inputs is that their step size is 1 by default.
   * If you try to enter a number with a decimal (such as "1.0"), it will be considered invalid.
   * If you want to enter a value that requires decimals, you'll need to reflect this in the step value
   * (e.g. step="0.01" to allow decimals to two decimal places).
   * @private
   */
  _updateField(value) {
    let numberStr = '';

    if (value.units && value.units !== 0) {
      numberStr = value.units;
    }
    if (value.nanos && value.nanos !== 0) {
      let nanoValue = value.nanos;
      if (nanoValue < 0) {
        nanoValue *= -1;
      }
      numberStr += `.${nanoValue}`;
    }
    const amount = Number(numberStr);
    this._FBPTriggerWire('--valueAmount', amount);

    this.requestUpdate();
  }

  /**
   * @private
   */
  onFnaFieldValueChanged(value) {
    const type = this.getDataType();
    switch (type) {
      case 'google.type.Money':
        this._tmpValue = value;
        this._updateField(value);
        break;
      default:
        break;
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      this._getElements();

      // created to avoid the default messages from ui5
      const vse = this.amount.querySelector('div[slot="valueStateMessage"]');
      if (vse === null) {
        this._valueStateElement = document.createElement('div');
        this._valueStateElement.setAttribute('slot', 'valueStateMessage');
        // eslint-disable-next-line wc/no-constructor-attributes
        this.amount.appendChild(this._valueStateElement);
      } else {
        this._valueStateElement = vse;
        this._previousValueState.message = vse.innerText;
      }

      this.amount.valueState = 'Error';
      // element was created in constructor
      this._valueStateElement.innerText = validity.description;

      this.currency._setValueStateMessage('Error', validity.description);
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._getElements();

    this.currency._resetValueStateMessage();
    this.amount.valueState = this._previousValueState.state;
    // element was created in constructor
    this._valueStateElement.innerText = this._previousValueState.message;
  }

  _getElements() {
    if (!this.amount) {
      this.amount = this.shadowRoot.getElementById('amount');
    }
    if (!this.currency) {
      this.currency = this.shadowRoot.getElementById('currency');
    }
  }

  /**
   * option setter
   * @param options
   */
  set options(options) {
    this.setOptions(options);
  }

  /**
   * set options for currencies dropdown
   * @param options
   */
  setOptions(options) {
    // the attribute currencies has priority than the options in meta
    if (this._currencies && this._currencies.length > 0) {
      this.updateSuggestions(this._currencies);
    } else {
      let collection;
      if (options.list) {
        collection = options.list;
      } else {
        collection = options;
      }
      this._collection = collection;
      this.updateSuggestions();
    }
  }

  /**
   * set currencies
   * @param c
   */
  set currencies(c) {
    const arr = c.split(',').map(item => item.trim());
    this._currencies = arr;
    this._collection = arr;

    this.updateSuggestions();
  }

  /**
   * inject the currency entities for dropdown
   * @param entities
   */
  injectEntities(entities) {
    const ent = { list: [] };
    entities.forEach(e => {
      if (e.data) {
        const o = {};
        o.id = e.id;
        o.label = e.display_name;
        ent.list.push(o);
      }
    });
    this.setOptions(ent);
  }

  updateSuggestions() {
    const collection = this._collection;
    let arr = [];
    // convert array list to id, label structure
    if (typeof collection[0] === 'string') {
      // eslint-disable-next-line no-param-reassign
      arr = collection.map(item => ({ text: item }));
    } else {
      arr = collection.map(e => ({ text: e.id }));
    }

    this._FBPTriggerWire('--suggestions', arr);
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        #currency {
          width: 100px;
          min-width: 100px;
          margin-left: var(--spacing-xs);
        }

        #amount {
          width: calc(100% - var(--spacing-xs) - 100px);
        }

        :host {
          width: 190px;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <ui5-input
          id="amount"
          type="Number"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          ƒ-.value="--valueAmount"
          @-input="--inputInput(*)"
        ></ui5-input>
        <furo-ui5-data-text-input
          id="currency"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          ƒ-bind-data="--data(*.currency_code)"
          ƒ-.suggestions="--suggestions"
          @-field-value-changed=":STOP, --inputInput(*)"
        ></furo-ui5-data-text-input>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-data-money-input', FuroUi5DataMoneyInput);
