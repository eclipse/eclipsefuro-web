import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/input/src/furo-number-input';
import '@furo/input/src/furo-select-input';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-money-input`
 * Binds a entityObject field google.type.Money to a furo-number-input and currency dropdown fields
 *  <sample-furo-data-money-input></sample-furo-data-money-input>
 *
 *  you can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three
 *  ways have priority : currencies > options as attribute > options in meta. When no currencies is setted. Default currency will be `CHF`
 *
 *  <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ "chf","eur","usd" ]}'></furo-data-money-input>
 *  <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'></furo-data-money-input>
 *  <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" currencies="chf,eur,usd"></furo-data-money-input>
 *
 * ### following labels of fat types are supported by default:
 *
 * - 'error': state of input is error
 * - 'readonly': input is disabled
 * - 'required': input is required
 * - 'disabled': input is disabled
 * - 'pristine': data is not changed. it is pristine
 * - 'condensed': input has condensed display
 *
 * ### following attributes of fat types are supported by default:
 *
 * - 'label': input label
 * - 'hint': input hint
 * - 'errortext': the error text of the input
 * - 'error-msg': the same as errortext
 *
 * ### following constrains are mapped into the attributes of the fat types and presence in payload:
 *
 * - 'required': is mapped to 'required' attribute
 *
 *
 * Tags: money input
 * @summary  Binds a entityObject field google.type.Money to a furo-number-input and currency dropdown fields
 * @customElement
 * @demo demo-furo-data-money-input Data binding
 * @mixes FBP
 */
class FuroDataMoneyInput extends FBP(LitElement) {
  constructor() {
    super();
    this.valid = true;
    this._currencies = [];
    // init the currency dropdown. the value will be used if no currencies are defined in attribute or in meta
    this.value = { currency_code: 'CHF', units: null, nanos: null };

    this._initBinder();
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label',
      hint: 'hint',
      errortext: 'errortext',
      'error-msg': 'errortext',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      condensed: 'condensed',
    };

    this.binder.fatAttributesToConstraintsMappings = {
      required: 'value._constraints.required.is', // for the fieldnode constraint
    };

    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('value-changed', val => {
      // set flag empty on empty strings (for fat types)
      if (val.detail) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

      // update the value
      this.binder.fieldValue = val.detail;
    });
  }

  _FBPReady() {
    super._FBPReady();
    this.shadowRoot.getElementById('wrapper').addEventListener('value-changed', e => {
      e.stopPropagation();

      if (e.path[0]) {
        if (e.path[0].nodeName === 'FURO-SELECT-INPUT') {
          this.binder.fieldValue = this._convertDataToMoneyObj(
            e.detail,
            '',
            this.binder.fieldNode._value,
          );
        }

        if (e.path[0].nodeName === 'FURO-NUMBER-INPUT') {
          this.binder.fieldValue = this._convertDataToMoneyObj(
            '',
            e.detail,
            this.binder.fieldNode._value,
          );
        }
      }

      this.error = false;

      /**
       * @event value-changed
       * Fired when value has changed from inside the component
       * detail payload: google money object
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = this.binder.fieldValue;
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
        obj.nanos = Number.parseInt(Number(`0.${arr[1]}`) * 100000000, 10);
      } else {
        // eslint-disable-next-line no-param-reassign
        obj.nanos = 0;
      }
    }
    return obj;
  }

  /**
   * Bind a entity field to the money-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine');
      } else {
        this.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine');
      });

      this.binder.fieldNode.addEventListener('field-value-changed', () => {
        this._updateField();
      });
    }
  }

  _updateField() {
    if (
      this.binder.fieldNode.units &&
      this.binder.fieldNode.units._value !== null &&
      this.binder.fieldNode.nanos._value !== null
    ) {
      const amout = Number(
        `${this.binder.fieldNode.units._value}.${this.binder.fieldNode.nanos._value}`,
      );
      this._FBPTriggerWire('--valueAmount', amout);
    }
    if (this.binder.fieldNode.currency_code && this.binder.fieldNode.currency_code._value) {
      this._FBPTriggerWire('--valueCurrency', this.binder.fieldNode.currency_code._value);
    }

    this.requestUpdate();
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: { type: Boolean, reflect: true },
      /**
       * The start value. Changes will be notified with the `@-value-changed` event
       */
      value: {
        type: Object,
      },
      /**
       * The list of currencies. Can be a simple list like ["A","B","C"]. In this case the value is equals the label
       *
       * With ids (key value):
       *
       * [{"id":1,"label":"AAA"},{"id":2,"label":"BBB"}]
       *
       *
       * With preselect state in data:
       *
       * [{"id":23,"label":"AAA","selected":false},{"id":44,"label":"BBB","selected":true}]
       */
      options: {
        type: Array,
        reflect: true,
      },
      /**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"]
       */
      currencies: {
        type: String,
        reflect: true,
      },
      /**
       * amount field label
       */
      label: {
        type: String,
        reflect: true,
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      readonly: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
        reflect: true,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */
      filled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  /**
   * Set the options programmatically
   * @param {Array} Array with options
   */
  setOptions(optionArray) {
    this.options = optionArray;
  }

  /**
   * Set the list programmatically
   * @param {String} list with options
   */
  setCurrencies(currencies) {
    this.currencies = currencies;
  }

  /**
   * Sets the field to readonly
   */
  disable() {
    this.disabled = true;
    this.requestUpdate();
  }

  /**
   * Makes the field writable.
   */
  enable() {
    this.disabled = false;
    this.requestUpdate();
  }

  set _options(options) {
    // the attribute currencies has priority than the options in meta
    if (this._currencies.length > 0) {
      this.updateSelectOptions(this._currencies);
    } else {
      let collection;
      if (options.list) {
        collection = options.list;
      } else {
        collection = options;
      }

      this.updateSelectOptions(collection);
    }
  }

  set currencies(c) {
    const arr = c.split(',').map(item => item.trim());
    this._currencies = arr;
    this.updateSelectOptions(arr);
  }

  updateSelectOptions(collection) {
    // convert array list to id, label structure
    if (typeof collection[0] === 'string') {
      // eslint-disable-next-line no-param-reassign
      collection = collection.map(item => ({ id: item, label: item }));
    }

    const arr = collection.map(e => {
      let selected = false;
      if (e.selected) {
        this.value.currency_code = e.id.toString();
        this.binder.fieldNode.currency_code._value = this.value.currency_code;
        selected = true;
      } else if (this.value.currency_code === e.id.toString()) {
        // init the currency code in field
        this.binder.fieldNode.currency_code._value = this.value.currency_code;
        selected = true;
      }

      return { id: e.id, label: e.label, selected };
    });

    this._FBPTriggerWire('--selection', arr);
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDataMoneyInput') ||
      css`
        /* https://material.io/design/components/text-fields.html#theming */

        furo-select-input {
          width: 90px;
          margin-left: var(--spacing-xs);
        }
        furo-number-input {
          width: calc(100% - var(--spacing-xs) - 90px);
        }
        :host {
          width: 190px;
        }
      `
    );
  }

  /**
   *
   * @return {TemplateResult | TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex id="wrapper">
        <furo-number-input
          id="input"
          ?autofocus=${this.autofocus}
          ?disabled=${this.readonly || this.disabled}
          ?error="${this.error}"
          ?float="${this.float}"
          ?condensed="${this.condensed}"
          ?required=${this.required}
          @-value-changed="--valueChanged"
          ƒ-set-value="--valueAmount"
        ></furo-number-input>

        <furo-select-input
          id="select"
          ?disabled=${this.readonly || this.disabled}
          ?float="${this.float}"
          list="CHF,EUR"
          ?condensed="${this.condensed}"
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--valueCurrency"
        ></furo-select-input>
      </furo-horizontal-flex>
    `;
  }
}

customElements.define('furo-data-money-input', FuroDataMoneyInput);
