import * as Input from '@ui5/webcomponents/dist/Input.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';

/**
 * `furo-ui5-data-input`
 * The furo-ui5-data-input is the base component for all furo-ui5-data-input components.
 * DO NOT USE DIRECTLY
 *
 * @summary data text input base
 * @customElement
 * @demo demo-furo-fat-type furo fat type
 */
export class FuroUi5DataInput extends Input.default {
  /**
   * Fired when the input value changed.
   * the event detail is the value of the input field
   * @event value-changed
   */

  /**
   * constructor
   */
  constructor() {
    super();
    // default type is text
    this.type = 'text';
    this._initBinder();
  }

  /**
   * rewrite get accInfo function
   * initiate _inputAccInfo in order to avoid error
   * @private
   * @returns {*}
   */
  get accInfo() {
    if (this._inputAccInfo === undefined) {
      this._inputAccInfo = [];
    }
    return super.accInfo;
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    if (this.valueState && this.valueState !== 'None') {
      // save the value of attribute 'value-state'
      this.attributeValueState = this.valueState;
    }

    this.attributeMaxlength = this.maxlength;
    this.attributeReadonly = this.readonly;
    this.attributeRequired = this.required;
    this.attributePlaceholder = this.placeholder;

    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
  }

  /**
   * overwrite to fix error
   * @returns {*|{}}
   */
  get valueStateMessage() {
    return super.valueStateMessage || {};
  }

  /**
   * overwrite to fix error
   * @returns {*|[]}
   */
  get suggestionItems() {
    return super.suggestionItems || [];
  }

  /**
   * overwrite to fix error
   * @returns {*|[]}
   */
  get icon() {
    return super.icon || [];
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
   * apply the binding set to the universal field node binder.
   *
   * ### following labels of fat types are supported by binding:

   * - 'error': valueState of ui5 component is set as error
   * - 'readonly': ui5 component is disabled
   * - 'required': input is required
   * - 'disabled': ui5 component is disabled
   * - 'modified': data is changed
   * - 'highlight': Defines if characters within the suggestions are to be highlighted in case the input value matches parts of the suggestions text.
   *
   * ### following attributes of fat types are supported by binding:
   *
   * - 'label': label will be used as the placeholder of the ui5 input
   * - 'placeholder': placeholder of the ui5 input
   * - 'hint': title of the ui5 input
   * - 'icon': ui5 icon in the ui5 input
   * - 'leading-icon': the same as 'icon'
   * - 'value-state': Defines the state of the info.Available options are: "None" (by default), "Success", "Warning" and "Erorr".
   * - 'errortext': Defines the error value state message that will be displayed as pop up under the ui5-input.
   * - 'error-msg': the same as 'errortext'
   * - 'warning-msg': Defines the warning value state message that will be displayed as pop up under the ui5-input.
   * - 'success-msg': Defines the success value state message that will be displayed as pop up under the ui5-input.
   * - 'information-msg': Defines the information value state message that will be displayed as pop up under the ui5-input.
   * - 'pattern': Defines the pattern of the ui5-input.
   * - 'name': Defines the name of the ui5-input.
   * - 'maxlength': Sets the maximum number of characters available in the input field.
   * - 'suggestions': Defines the suggestion items. e.g. [{"text":"Spain","icon":"world","type":"Active","infoState":"None","group":false,"key":0},
   *
   * ### following constrains are mapped into the attributes of the fat types and presence in payload:

   * - 'max': is mapped to 'maxlength' attribute
   * - 'min': is mapped to 'minlength' attribute
   * - 'pattern': is mapped to 'pattern' attribute
   * - 'required': is mapped to 'required' attribute
   *
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label', // map label to placeholder
      placeholder: 'placeholder_', // map placeholder to placeholder
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
      maxlength: '_maxlength', // for the input element itself
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly_',
      required: 'required_',
      disabled: 'disabled',
      modified: 'modified',
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
      if (val.inputType === 'deleteContentBackward') {
        this.binder.fieldNode.reset();
      }
      this.binder.fieldValue = val.target.value;

      /**
       * Fired when value changed
       * @type {Event}
       */
      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = val.target.value;
      this.dispatchEvent(customEvent);

      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.addLabel('modified');
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
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this._requestUpdate();
      });

      this.binder.fieldNode.addEventListener('field-value-changed', () => {
        this._requestUpdate();
      });
    }
  }

  set readonly_(readonly) {
    if (!this.attributeReadonly) {
      this.readonly = readonly;
    }
  }

  set placeholder_(placeholder) {
    if (!this.attributePlaceholder) {
      this.placeholder = placeholder;
    }
  }

  set required_(required) {
    if (!this.attributeRequired) {
      this.required = required;
    }
  }

  set _maxlength(maxlength) {
    if (!this.attributeMaxlength) {
      this.maxlength = maxlength;
    }
  }

  /**
   * Set the ui5 icon
   * @param icon
   */
  set ui5Icon(icon) {
    if (this._icon) {
      this._icon.remove();
    }
    if (icon) {
      this._icon = document.createElement('ui5-icon');
      this._icon.slot = 'icon';
      this._icon.name = icon;
      this.appendChild(this._icon);
    }
  }

  /**
   * @private
   */
  _requestUpdate() {
    this._updateSlots();
  }

  /**
   * sets and remove the error state
   * @param err
   * @private
   */
  set _error(err) {
    if (!this.attributeValueState) {
      if (err) {
        this._lastValueState = this.valueState;
        this.valueState = 'Error';
      } else if (this.valueState === 'Error') {
        this.valueState = this._lastValueState;
      }
    }
  }

  /**
   * store the error message and update the value state message
   * @param msg
   * @private
   */
  set _errorMsg(msg) {
    this.setValueStateMessage(msg);
  }

  /**
   * store the information message and update the value state message
   * @param msg
   * @private
   */
  set _informationMsg(msg) {
    this.setValueStateMessage(msg);
  }

  setValueStateMessage(msg) {
    if (msg !== undefined && msg !== null) {
      this.__valueStateMessage = msg;
      this._updateVS();
    }
  }

  /**
   * store the warning message and update the value state message
   * @param msg
   * @private
   */
  set _warningMsg(msg) {
    this.setValueStateMessage(msg);
  }

  /**
   * store the success message and update the value state message
   * @param msg
   * @private
   */
  set _successMsg(msg) {
    this.setValueStateMessage(msg);
  }

  /**
   * Update the value state on change
   * @param state
   * @private
   */
  set _valueState(state) {
    if (!this.attributeValueState) {
      this.valueState = state || 'None';
      this._updateVS();
    }
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
    this._updateVS();
  }

  _updateVS() {
    // set the correct valueStateMessage
    this._vsm = this._valueStateMessage || this.__valueStateMessage || this.__hint;
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

    this._requestUpdate();
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
      this.showSuggestions = true;
      this.highlight = true;

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
