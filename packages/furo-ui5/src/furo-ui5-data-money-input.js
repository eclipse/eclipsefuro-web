import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';
import './furo-ui5-form-field-container.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';
import { Theme } from '@furo/framework';
import '@ui5/webcomponents/dist/Input';
import './furo-ui5-data-text-input.js';

/**
 * `furo-data-money-input`
 * Binds a entityObject field google.type.Money to a furo-number-input and currency dropdown fields
 *  <sample-furo-data-money-input></sample-furo-data-money-input>
 *
 *  you can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three
 *  ways have priority : currencies > options as attribute > options in meta. When no currencies is setted. Default currency will be `CHF`
 *
 *  <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ "CHF","EUR","USD" ]}'></furo-data-money-input>
 *  <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'></furo-data-money-input>
 *  <furo-data-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" currencies="CHF,EUR,USD"></furo-data-money-input>
 *
 * Tags: money input
 * @summary  Binds a entityObject field google.type.Money to a number-input and currency dropdown fields
 * @customElement
 * @demo demo-furo-ui5-data-money-input Data binding
 * @mixes FBP
 */
class FuroUi5DataMoneyInput extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this._initBinder();

    this.valid = true;
    this._currencies = [];
    // init the currency dropdown. the value will be used if no currencies are defined in attribute or in meta
    this.value = { currency_code: 'CHF', units: null, nanos: null };
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

      // update the value
      this.binder.fieldValue = val.detail;

      // set flag empty on empty strings (for fat types)
      if (val.detail) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');
    });
  }

  /**
   *
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    // update value when the amount changed
    this._FBPAddWireHook('--inputInput', e => {
      if (e.path[0]) {
        this.binder.fieldValue = this._convertDataToMoneyObj(
          '',
          e.path[0].value,
          this.binder.fieldNode._value,
        );
      }
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
    };
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

    this._FBPTriggerWire('--data', fieldNode);
  }

  /**
   * update amount field
   * @private
   */
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

    this.requestUpdate();
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
    if (this._currencies.length > 0) {
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
      Theme.getThemeForComponent('FuroDataMoneyInput') ||
      css`
        /* https://material.io/design/components/text-fields.html#theming */

        furo-ui5-data-text-input {
          width: 100px;
          min-width: 100px;
          margin-left: var(--spacing-xs);
        }

        ui5-input {
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
          type="Number"
          ?disabled=${this.readonly || this.disabled}
          ?required=${this.required}
          ƒ-.value="--valueAmount"
          @-input="--inputInput(*)"
        ></ui5-input>
        <furo-ui5-data-text-input
          ?disabled=${this.readonly || this.disabled}
          ?required=${this.required}
          ƒ-bind-data="--data(*.currency_code)"
          ƒ-.suggestions="--suggestions"
        ></furo-ui5-data-text-input>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-data-money-input', FuroUi5DataMoneyInput);
