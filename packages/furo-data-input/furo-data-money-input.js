import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-number-input";
import "@furo/input/furo-select-input";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

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
    this.value= {"currency_code":"CHF", "units":null, "nanos":null};
  }

  _FBPReady() {

    super._FBPReady();

    // reset hint, label etc..
    CheckMetaAndOverrides.UpdateMetaAndConstraints(this);


    this.shadowRoot.getElementById("wrapper").addEventListener("value-changed", (e)=>{

      e.stopPropagation();

      if (e.path[0]) {

        if( e.path[0].nodeName == "FURO-SELECT-INPUT") {

          this.field._value= this._convertDataToMoneyObj(e.detail,"", this.field._value);
        }

        if( e.path[0].nodeName == "FURO-NUMBER-INPUT") {
          this.field._value= this._convertDataToMoneyObj("",e.detail, this.field._value);
        }
      }

      this._value= this.field._value;
      this.error = false;

      /**
       * @event value-changed
       * Fired when value has changed from inside the component
       * detail payload: google money object
       */
      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = this.field._value;
      this.dispatchEvent(customEvent);
    });
  }



  // convert data to google.type.Money format
  _convertDataToMoneyObj(currency, amount, obj){

    if(obj==null) {
      obj = {};
    }

    if(currency) {
      obj.currency_code = currency;
    }
    if(amount) {
      let arr = String(amount).split(".");
      obj.units = Number(arr[0]);
      if(arr[1]) {
        obj.nanos = Number("0."+arr[1])*100000000;
      }
      else {
        obj.nanos = 0;
      }
    }
    return obj;
  }

  /**
   * Bind a entity field to the number-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    Helper.BindData(this, fieldNode);
  }

  _updateField() {
    if(this.field.units && this.field.units._value!== null && this.field.nanos._value!== null) {
      let amout = Number(this.field.units._value+ "." + this.field.nanos._value);
      this._FBPTriggerWire('--valueAmount', amout);
    }
    if(this.field.currency_code && this.field.currency_code._value) {
      this._FBPTriggerWire('--valueCurrency', this.field.currency_code._value);
    }

    this.requestUpdate();
  }
  /**
   * Updater for the hint attr
   * @param value
   */
  set _hint(value) {
    Helper.UpdateInputAttribute(this, "hint", value);
  }

  /**
   * Updater for the errortext attr
   * @param value
   */
  set errortext(value) {
    Helper.UpdateInputAttribute(this, "errortext", value);
  }

  /**
   * Updater for the label attr for amount
   * @param value
   */
  set _label(value) {
    Helper.UpdateInputAttribute(this, "label", value);
  }

  /**
   * Updater for the readonly attr
   * @param value
   */
  set _readonly(value) {
    Helper.UpdateInputAttribute(this, "readonly", value);
  }



  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: {type: Boolean, reflect: true},
      /**
       * The start value. Changes will be notified with the `@-value-changed` event
       */
      value: {
        type: Object
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
        type: Array
      },
      /**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"]
       */
      currencies: {
        type: String
      },
      /**
       * amount field label
       */
      label: {
        type: String
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean, reflect: true
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      readonly: {
        type: Boolean, reflect: true
      },

      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean
      },
      /**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */
      filled: {
        type: Boolean
      }
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
    if(this._currencies.length >0 ) {
      this.updateSelectOptions(this._currencies);
    }
    else {
      let collection;
      if(options.list) {

        collection = options.list;
      }
      else{
        collection = options;
      }

      this.updateSelectOptions(collection);
    }
  }

  set currencies(c) {
    let arr = c.split(",").map(function (item) {
      return item.trim();
    });
    this._currencies = arr;
    this.updateSelectOptions(arr);
  }

  updateSelectOptions(collection) {
    // convert array list to id, label structure
    if (typeof collection[0] === "string") {
      collection = collection.map((item) => {
        return {"id": item, "label": item};
      });
    }

    let arr = collection.map((e) => {
      let selected = false;
      if (e.selected) {
        this.value.currency_code = e.id.toString();
        this.field.currency_code._value= this.value.currency_code;
        selected = true;
      }
      else {

        if(this.value.currency_code  === e.id.toString()) {
          // init the currency code in field
          this.field.currency_code._value= this.value.currency_code;
          selected = true;
        }
      }

      return {"id": e.id, "label": e.label, "selected": selected }
    });

    this._FBPTriggerWire("--selection", arr);
  }


  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataMoneyInput') || css`
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
          <furo-number-input id="input"
          ?autofocus=${this.autofocus} 
          ?disabled=${this._readonly || this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ?required=${this._required}
          @-value-changed="--valueChanged"
          ƒ-set-value="--valueAmount"></furo-number-input>      
          
       <furo-select-input id="select"
          ?disabled=${this._readonly || this.disabled} 
          ?float="${this.float}" 
          list="CHF"
          ?condensed="${this.condensed}"          
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--valueCurrency"></furo-select-input>    
      </furo-horizontal-flex>
    `;
  }

}


customElements.define('furo-data-money-input', FuroDataMoneyInput);
