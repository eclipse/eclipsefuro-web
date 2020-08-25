import * as Input from '@ui5/webcomponents/dist/Input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';

/**
 * `furo-ui5-data-input`
 * The furo-ui5-data-input is the base component for all furo-ui5-data-input components.
 * DO NOT USE DIRECTLY
 *
 * @summary data text input base
 * @customElement
 */
export class FuroUi5DataInput extends Input.default {
  constructor(props) {
    super(props);
    this._initBinder();
  }

  /**
   * init properties
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.showSuggestions = true;
    this.highlight = true;
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
   * apply the binding set to the universal field node binder
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'placeholder', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      hint: '_hint',
      icon: 'ui5Icon', // icon and leading icon maps to the same
      'leading-icon': 'ui5Icon', // icon and leading icon maps to the same
      'value-state': '_valueState',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'pattern',
      name: 'name',
      suggestions: 'suggestions', // suggestion items
      maxlength: 'maxlength', // for the input element itself
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine',
      highlight: 'highlight',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      maxlength: 'value._constraints.max.is', // for the fieldnode constraint
      minlength: 'value._constraints.min.is', // for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.min.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      max: 'maxlength',
      min: 'minlength',
      pattern: 'pattern',
      required: 'required',
    };

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
   * Set the ui5 icon
   * @param icon
   */
  set ui5Icon(icon) {
    // create element
    if (!this._icon) {
      this._icon = document.createElement('ui5-icon');
      this._icon.slot = 'icon';
    }
    // update the value
    if (icon) {
      this._icon.name = icon;
      this.appendChild(this._icon);
    } else {
      this._icon.remove();
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
      this.valueState = 'Error';
    } else if (this.valueState === 'Error') {
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
    this.valueState = state || 'None';
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
      this.setAttribute('title', h);
    } else {
      this.removeAttribute('title');
    }

    this.__hint = h;
  }

  _updateVS() {
    // set the correct valueStateMessage
    switch (this.valueState) {
      case 'Error':
        this._vsm = this._valueStateMessage || this.__errorMsg || this.__hint;
        this.removeAttribute('title');
        break;
      case 'Information':
        this._vsm = this._valueStateMessage || this.__informationMsg || this.__hint;
        this.removeAttribute('title');
        break;
      case 'Success':
        this._vsm = this._valueStateMessage || this.__successMsg || this.__hint;
        this.removeAttribute('title');
        break;
      case 'Warning':
        this._vsm = this._valueStateMessage || this.__warningMsg || this.__hint;
        this.removeAttribute('title');
        break;

      default:
        this._vsm = this._valueStateMessage || this.__hint;
        this.setAttribute('title', this._vsm);
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
      this.appendChild(this._valueStateElement);
    } else {
      this._valueStateElement.remove();
    }
  }

  /**
   * set suggestions as the ui5-suggestion-item element
   * sample data of the suggestions: [{"text":"Spain","icon":"world","type":"Active","infoState":"None","group":false,"key":0},.. ]
   * if the suggestion item has icon , the ui5 icons should be imported in your ui component
   * @param arr
   */
  set suggestions(arr) {
    // remove previous suggestion items.
    this.querySelectorAll('ui5-suggestion-item').forEach(e => {
      e.remove();
    });

    if (Array.isArray(arr) && arr.length > 0) {
      // add current suggestion items
      arr.forEach(e => {
        const suggestion = document.createElement('ui5-suggestion-item');

        // suggestions from furo.optionItem
        if (e.display_name !== undefined) {
          suggestion.text = e.display_name;
        }
        // suggestions from fat attribute
        if (e.text !== undefined) {
          suggestion.text = e.text;
        }

        // appends only when suggestion text exists
        if (suggestion.text !== undefined) {
          if (e.icon !== undefined) {
            suggestion.icon = e.icon;
          }
          if (e.image !== undefined) {
            suggestion.image = e.image;
          }
          if (e.type !== undefined) {
            suggestion.type = e.type;
          }
          if (e.infoState !== undefined) {
            suggestion.infoState = e.infoState;
          }
          if (e.group !== undefined) {
            suggestion.group = e.group;
          }
          if (e.key !== undefined) {
            suggestion.key = e.key;
          }

          this.appendChild(suggestion);
        }
      });
    }
  }
}

window.customElements.define('furo-ui5-data-input', FuroUi5DataInput);
