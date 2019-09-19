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
 *
 * <sample-furo-data-money-input></sample-furo-data-money-input>
 *
 * Tags: money input
 * @summary Bind a entityObject.field to a number and dropdown fields
 * @customElement
 * @demo demo-furo-data-money-input Data binding
 * @mixes FBP
 */
class FuroDataMoneyInput extends FBP(LitElement) {


  constructor() {
    super();
    this.valid = true;
    this.value = {"currency_code":"", "units":0, "nanos":0};
  }

  _FBPReady() {

    super._FBPReady();

    this.shadowRoot.getElementById("wrapper").addEventListener("value-changed", (e)=>{

      e.stopPropagation();

      if (e.path[0]) {

        if( e.path[0].nodeName == "FURO-SELECT-INPUT") {

          this.field.value = this._convertDataToMoneyObj(e.detail,"", this.field.value);
        }

        if( e.path[0].nodeName == "FURO-NUMBER-INPUT") {
          this.field.value = this._convertDataToMoneyObj("",e.detail, this.field.value);
        }
      }

      this.value = this.field.value;
      /**
       * @event value-changed
       * Fired when value has changed from inside the component
       * detail payload: google money object
       */
      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = this.field.value;
      this.dispatchEvent(customEvent);
    });

    this._FBPAddWireHook("--inputInvalid", (val) => {

      // val is a ValidityState
      // https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
      if (val) {
        if(val.rangeUnderflow) {
          this._hint = this._minErrorMessage;
        }
        else if(val.rangeOverflow)
        {
          this._hint = this._maxErrorMessage;
        }
        else if(val.stepMismatch) {
          this._hint = this._stepErrorMessage;
        }

        this.requestUpdate();
      }
    });
  }
  // convert data to google.type.Money format
  _convertDataToMoneyObj(currency, amount, obj){

    if(currency) {
      obj.currency_code = currency;
    }
    if(amount) {
      let arr = amount.split(".");
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

    //mark incomming error
    if (!this.field._isValid) {
      this.error = true;
      this.errortext = this.field._validity.description;
    }

    if(this.field.units.value !== null && this.field.nanos.value !== null) {
      let amout = Number(this.field.units.value + "." + this.field.nanos.value);
      this._FBPTriggerWire('--valueAmount', amout);
    }
    if(this.field.currency_code.value) {
      console.log(this.field.currency_code.value);
      this._FBPTriggerWire('--valueCurrency', this.field.currency_code.value);
    }
    this.requestUpdate();
  }

  /**
   * Updater for the min => minlength attr*
   * @param value
   */
  set _min(value) {
    Helper.UpdateInputAttribute(this, "min", value);
  }

  /**
   * Updater for the max attr*
   * @param value
   */
  set _max(value) {
    Helper.UpdateInputAttribute(this, "max", value);
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
   * Updater for the step attr
   * @param value
   */
  set _step(value) {
    Helper.UpdateInputAttribute(this, "step", value);
  }

  /**
   * Updater for the label attr for amount
   * @param value
   */
  set _labelAmount(value) {
    Helper.UpdateInputAttribute(this, "label", value);
  }

  /**
   * Updater for the label attr for currency
   * @param value
   */
  set _labelCurrency(value) {

    let select = this.shadowRoot.getElementById("select");

    if (value !== null) {
      select.setAttribute("label", value);

    } else {
      // remove the attribute on null value
      select.removeAttribute("label");
    }
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

      labelCurrency: {
        type: String,
        attribute: "label-currency"
      },

      labelAmount: {
        type: String,
        attribute: "label-amount"
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
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      min: {
        type: Number,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: Number,
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
   * Setter method for errortext
   * @param {String} errortext
   * @private
   */
  set errortext(v) {
    this._errortext = v;
    this.__initalErrorText = v;
  }

  /**
   * Getter method for errortext
   * @private
   */
  get errortext() {
    return this._errortext;
  }


  /**
   * Set the field to error state
   *
   * @param [{String}] The new errortext
   */
  setError(text) {
    if (typeof text === "string") {
      this._errortext = text;
    }
    this.error = true;
  }

  /**
   * clears the error and restores the errortext.
   */
  clearError() {
    this.error = false;
    this._errortext = this.__initalErrorText;
  }


  /**
   * Sets the focus on the field.
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * Sets the field to readonly
   */
  disable() {
    this.readonly = true;
  }

  /**
   * Makes the field writable.
   */
  enable() {
    this.readonly = false;
  }


  set _options(options) {

    let collection;
    if(options.list) {

      collection = options.list;
    }
    else{
      collection = options;
    }

    // convert array list to id, label structure
    if (typeof collection[0] === "string") {
      collection = collection.map((item) => {
        return {"id": item, "label": item};
      });
    }

    let arr = collection.map((e) => {
      if (e.selected) {
        this.value.currency_code.value = e.id.toString();
      }
      return {"id": e.id, "label": e.label, "selected": (this.value.currency_code.value === e.id.toString() || e.selected || false)}
    });

    this._FBPTriggerWire("--selection", arr);
  }

  set currencies(c) {
    let arr = c.split(",").map(function (item) {
      return item.trim();
    });
    this._options = arr;
  }


  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        /* https://material.io/design/components/text-fields.html#theming */

        furo-select-input {
            width: 80px;
            margin-left: var(--spacing-xs);
        }
        furo-number-input {
            width: 110px;
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
          step="any"
          ?readonly=${this._readonly || this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ?required=${this._required}
          @-value-changed="--valueChanged"
          @-input-invalid="--inputInvalid"
          ƒ-set-value="--valueAmount"></furo-number-input>      
          
       <furo-select-input id="select"
          ?readonly=${this._readonly || this.disabled} 
          ?error="${this.error}" 
          ?float="${this.float}" 
          ?condensed="${this.condensed}"          
          ƒ-set-options="--selection"
          @-value-changed="--valueChanged"
          ƒ-set-value="--valueCurrency"></furo-select-input>    
      </furo-horizontal-flex>
    `;
  }

}


customElements.define('furo-data-money-input', FuroDataMoneyInput);
