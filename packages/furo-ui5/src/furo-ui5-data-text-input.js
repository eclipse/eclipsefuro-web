import * as Input from '@ui5/webcomponents/dist/Input.js';
import {UniversalFieldNodeBinder} from '@furo/data/src/lib/UniversalFieldNodeBinder';
import "@ui5/webcomponents/dist/features/InputSuggestions.js";

/**
 * `furo-ui5-data-text-input`
 * The furo-ui5-data-text-input component allows the user to enter and edit text values in one line.
 * The component can be easily connected to data objects with the integrated UniversalFieldNodeBinder.
 * Additionally, you can provide suggestionItems, that are displayed in a popover right under the input.
 *
 * The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the text, the change event is fired, which enables you to react on any text change.
 *
 * @summary data text input field
 * @customElement
 * @demo demo-furo-ui5-data-text-input Basic usage (scalar , fat, wrapper values)
 * @demo demo-furo-ui5-data-text-input-together playground
 */
export class FuroUi5DataTextInput extends Input.default {
  constructor(props) {
    super(props);
    this.type = "Text";
    this.valueState = "None";
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
      'label': 'placeholder', // map label to placeholder
      'placeholder': 'placeholder', // map placeholder to placeholder
      'hint': '_hint',
      'icon': 'leadingIcon', // icon and leading icon maps to the same
      'leading-icon': 'leadingIcon',// icon and leading icon maps to the same
      'value-state': '_valueState',
      'value-state-message': '_valueStateMessage',
      'errortext': '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      'pattern': 'pattern',
      'maxlength': 'maxlength', // for the input element itself
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine'
    };

    this.binder.fatAttributesToConstraintsMappings = {
      max: 'value._constraints.max.is',// for the fieldnode constraint
      min: 'value._constraints.min.is',// for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.max.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    this.binder.constraintsTofatAttributesMappings = {
      max: 'max',
      pattern: 'pattern',
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // update the value on input changes
    this.addEventListener('input', val => {

      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

      // update the value
      this.binder.fieldValue = val.target.value;
    });
  }

  /**
   * Sets the value for the field. This will update the fieldNode.
   * @param val
   */
  setValue(val) {
    this.binder.fieldValue = val;
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
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

    }
  }


  /**
   * Set the leading icon as icon
   * @param icon
   */
  set leadingIcon(icon) {
    // create element
    if (!this._furoIcon) {
      this._furoIcon = document.createElement('furo-icon');
      this._furoIcon.slot = 'icon';
    }
    // update the value
    this._furoIcon.icon = icon;
    if (icon) {
      this.appendChild(this._furoIcon)
    } else {
      this._furoIcon.remove();
    }
  }

  /**
   * sets and remove the error state
   * @param err
   * @private
   */
  set _error(err) {
    if (err) {
      this._lastValueState = this.valueState;
      this.valueState = "Error";
    } else if (this.valueState === "Error") {
      this.valueState = this._lastValueState;
    }
  }


  /**
   * store the error message and update the value state message
   * @param msg
   * @private
   */
  set _errorMsg(msg) {
    this.__errorMsg = msg;
    this._updateVS();
  }

  /**
   * store the information message and update the value state message
   * @param msg
   * @private
   */
  set _informationMsg(msg) {
    this.__informationMsg = msg;
    this._updateVS();
  }

  /**
   * store the warning message and update the value state message
   * @param msg
   * @private
   */
  set _warningMsg(msg) {
    this.__warningMsg = msg;
    this._updateVS();
  }

  /**
   * store the success message and update the value state message
   * @param msg
   * @private
   */
  set _successMsg(msg) {
    this.__successMsg = msg;
    this._updateVS();
  }

  /**
   * Update the value state on change
   * @param state
   * @private
   */
  set _valueState(state) {
    this.valueState = state || "None";
    this._updateVS();
  }

  /**
   * Sets the title attribute when hint is given, because ui5 only shows the messages when valueState is not None
   * @param h
   * @private
   */
  set _hint(h) {
    this.__hint = h;
    // do not set an empty attribute
    if (h) {
      this.setAttribute("title", h);
    } else {
      this.removeAttribute("title");
    }

    this.__hint = h;
  }

  _updateVS() {
    // set the correct valueStateMessage
    switch (this.valueState) {
      case "Error":
        this._vsm = this._valueStateMessage || this.__errorMsg || this.__hint;
        this.removeAttribute("title");
        break;
      case "Information":
        this._vsm = this._valueStateMessage || this.__informationMsg || this.__hint;
        this.removeAttribute("title");
        break;
      case "Success":
        this._vsm = this._valueStateMessage || this.__successMsg || this.__hint;
        this.removeAttribute("title");
        break;
      case "Warning":
        this._vsm = this._valueStateMessage || this.__warningMsg || this.__hint;
        this.removeAttribute("title");
        break;

      default:
        this._vsm = this._valueStateMessage || this.__hint;
        this.setAttribute("title", this._vsm);
    }
    this._setValueStateMessage(this._vsm);


  }

  /**
   * Updates the vs and creates the element in the slot on demand
   * @param msg
   * @private
   */
  _setValueStateMessage(msg) {
    // create element
    if (!this._valueStateElement) {
      this._valueStateElement = document.createElement('div');
      this._valueStateElement.slot = 'valueStateMessage';
    }
    this._valueStateElement.innerText = msg;
    if (msg) {
      this.appendChild(this._valueStateElement)
    } else {
      this._valueStateElement.remove();
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the HTML type of the ui5-input. Available options are: Text, Email, Number, Password, Tel, and URL.
       *
       * > The particular effect of this property differs depending on the browser and the current language settings, especially for type Number.
       * > The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.
       *
       */
      type: {type: String}
    };
  }

}

window.customElements.define('furo-ui5-data-text-input', FuroUi5DataTextInput);
