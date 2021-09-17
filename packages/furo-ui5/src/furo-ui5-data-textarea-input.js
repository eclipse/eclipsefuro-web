import * as TextArea from '@ui5/webcomponents/dist/TextArea.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * The 'furo-ui5-data-textarea-input' component allows the user to enter and edit texts with data binding.
 *
 * It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).
 *
 * You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.
 *
 * ```html
 *  <furo-ui5-data-textarea-input
 *     ƒ-bind-data="--daoCountry(*.data.name)"
 *  ></furo-ui5-data-textarea-input>
 * ```
 *
 * ### Specificity
 * 1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
 * 2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.
 *
 * ** meta 	<  fat 	< html 	**
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"required":"true"** set the element to required
 *  - **"disabled":"true"** set the element to disabled
 *  - **"placeholder":"string"** set the placeholder for the element
 *  - **"rows":"number"** set the number of rows.
 *  - **"growing":"true"** Enables the ui5-textarea to automatically grow and shrink dynamically with its content.
 *  - **"show-exceeded-text":"true"** if set to true. the characters exceeding the maxlength value are selected on paste and the counter below the ui5-textarea displays their number. If set to false, the user is not allowed to enter more characters than what is set in the maxlength property.
 *  - **"growing-max-lines":"number"** Defines the maximum number of lines that the Web Component can grow.
 *  - **"max":"number"** set the maximum number of characters available in the input field.
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 * - **max:"number"** set the maximum number of characters available in the input field.
 *
 * The constraint **required** will mark the element as required
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind a entity field. You can use the entity even when no data was received.
 *
 * When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {`text`} change -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @fires {} input -  Fired when the value of the ui5-input changes at each keystroke.
 * @fires {} xxxx -  All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).
 * @fires {String} field-value-changed - Fires the field value when it changes.
 *
 * @summary data textarea input field
 * @customElement
 *
 * @demo demo-furo-ui5-data-textarea-input Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataTextareaInput extends FieldNodeAdapter(TextArea.default) {
  constructor() {
    super();
    this.value = '';

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = { state: 'None', message: '' };

    this._attributesFromFNA = {
      readonly: undefined,
      placeholder: undefined,
    };

    this._constraintsFromFNA = {
      required: undefined,
      max: undefined, // maps to maxlength
    };

    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
      required: undefined,
    };

    this._attributesFromFAT = {
      placeholder: undefined,
      max: undefined, // maps to maxlength
      rows: undefined,
      growing: undefined,
      growingMaxLines: undefined,
      showExceededText: undefined,
    };

    // a list of privileged attributes. when those attributes are set in textarea-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
      maxlength: null,
      rows: null,
      growing: null,
      growingMaxLines: null,
      showExceededText: null,
    };

    this.addEventListener('input', this._updateFNA);

    // changed is fired when the input operation has finished by pressing Enter or on focusout.
    this.addEventListener('change', () => {
      // set 0 for skalar type on blur if value was ""
      if (!this.isFat() && !this.isWrapper() && this.value === '') {
        this.value = '';
      }
    });
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();

    // created to avoid the default messages from ui5
    const vse = this.querySelector('div[slot="valueStateMessage"]');
    if (vse === null) {
      this._valueStateElement = document.createElement('div');
      this._valueStateElement.setAttribute('slot', 'valueStateMessage');
      // eslint-disable-next-line wc/no-constructor-attributes
      this.appendChild(this._valueStateElement);
    } else {
      this._valueStateElement = vse;
      this._previousValueState.message = vse.innerText;
    }
  }

  // overwrite. fix for ui5 input error under rc14
  //
  //  @private
  //
  // eslint-disable-next-line class-methods-use-this
  get nativeInputAttributes() {
    return {};
  }

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `value-state`, `value-state-message`,  `placeholder`, `required`,`readonly`,`disabled`
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
   * Handler function for the input value changes.
   * This is done to be able to remove the event-listeners as a protection for multiple calls
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA() {
    const { value } = this;
    if (this.isFat()) {
      if (value === '') {
        this._tmpFAT.value = null;
        // add empty state
        if (this._tmpFAT.labels === null) {
          this._tmpFAT.labels = {};
        }
        this._tmpFAT.labels.empty = true;
      } else {
        this._tmpFAT.value = value;
        // remove empty state
        if (this._tmpFAT.labels && this._tmpFAT.labels.empty) {
          delete this._tmpFAT.labels.empty;
        }
        // init labels in_tmpFAT
        if (this._tmpFAT.labels === null) {
          this._tmpFAT.labels = {};
        }
        // set modified on changes
        this._tmpFAT.labels.modified = true;
      }
      this.setFnaFieldValue(this._tmpFAT);
    } else if (this.isWrapper()) {
      this.setFnaFieldValue(value === '' ? null : value);
    } else {
      this.setFnaFieldValue(value === '' ? '' : value);
    }

    const customEvent = new Event('field-value-changed', { composed: true, bubbles: true });
    customEvent.detail = this.value;
    this.dispatchEvent(customEvent);
  }

  /**
   * labels are map <string,bool>, we handle every boolean attribute with the labels
   *
   * @param fatLabels
   * @private
   */
  _updateLabelsFromFat(fatLabels) {
    if (fatLabels === null || fatLabels === undefined) {
      return;
    }
    // this is needed to check the specifity in the onFnaXXXXChanged callback functions
    this._labelsFromFAT.readonly = fatLabels.readonly;
    this._labelsFromFAT.required = fatLabels.required;

    // readonly
    if (this._privilegedAttributes.readonly === null) {
      if (fatLabels.readonly !== undefined) {
        // apply from fat
        this.readonly = fatLabels.readonly;
      } else if (this._attributesFromFNA.readonly !== undefined) {
        // apply from fieldnode (meta)
        this.readonly = this._attributesFromFNA.readonly;
      }
    }

    // CONSTRAINT required
    if (this._privilegedAttributes.required === null) {
      if (fatLabels.required !== undefined) {
        this.required = fatLabels.required;
      } else if (this._constraintsFromFNA.required !== undefined) {
        this.required = this._constraintsFromFNA.required.is === 'true';
      }
    }

    // disabled
    if (this._privilegedAttributes.disabled === null) {
      if (fatLabels.disabled !== undefined) {
        this.disabled = fatLabels.disabled;
      }
    }
  }

  /**
   * sync input attributes according to fat attributes
   * @private
   */
  _updateAttributesFromFat(fatAttributes) {
    if (fatAttributes === null || fatAttributes === undefined) {
      return;
    }

    // this is needed to check the specifity in the onFnaXXXXChanged callback functions
    this._attributesFromFAT.disabled = fatAttributes.disabled;
    this._attributesFromFAT.placeholder = fatAttributes.placeholder;
    this._attributesFromFAT.max = fatAttributes.max;

    // placeholder
    if (this._privilegedAttributes.placeholder === null) {
      if (fatAttributes.placeholder !== undefined) {
        this.placeholder = fatAttributes.placeholder;
      } else if (this._attributesFromFNA.placeholder !== undefined) {
        this.placeholder = this._attributesFromFNA.placeholder;
      }
    }

    // value-state and corresponding message
    if (fatAttributes['value-state'] !== undefined) {
      // save state as previous state
      this._previousValueState = {
        state: fatAttributes['value-state'],
        message: fatAttributes['value-state-message'],
      };
      this._setValueStateMessage(
        fatAttributes['value-state'],
        fatAttributes['value-state-message'],
      );
    } else {
      // remove state if fat does not have state, even it is set in the html
      this._previousValueState = { state: 'None', message: fatAttributes['value-state-message'] };
      this._setValueStateMessage('None', fatAttributes['value-state-message']);
    }

    // maxlength
    if (this._privilegedAttributes.maxlength === null) {
      if (fatAttributes.max !== undefined) {
        this.maxlength = parseInt(fatAttributes.max, 10);
      } else if (this._constraintsFromFNA.max !== undefined && this._constraintsFromFNA.max.is) {
        this.maxlength = parseInt(this._constraintsFromFNA.max.is, 10);
      }
    }

    // rows, Defines the number of visible text lines for the component.
    if (this._privilegedAttributes.rows === null) {
      if (fatAttributes.rows !== undefined) {
        this.rows = parseInt(fatAttributes.rows, 10);
      }
    }

    // growing, Enables the ui5-textarea to automatically grow and shrink dynamically with its content.
    if (this._privilegedAttributes.growing === null) {
      if (fatAttributes.growing !== undefined) {
        this.growing = fatAttributes.growing === 'true';
      }
    }

    // growingMaxLines, Defines the maximum number of lines that the Web Component can grow.
    if (this._privilegedAttributes.growingMaxLines === null) {
      if (fatAttributes['growing-max-lines'] !== undefined) {
        this.growingMaxLines = parseInt(fatAttributes['growing-max-lines'], 10);
      }
    }

    // showExceededText, Determines whether the characters exceeding the maximum allowed character count are visible in the ui5-textarea.
    if (this._privilegedAttributes.showExceededText === null) {
      if (fatAttributes['show-exceeded-text'] !== undefined) {
        this.showExceededText = fatAttributes['show-exceeded-text'] === 'true';
      }
    }
  }

  /**
   * overwrite to fix error
   * @private
   * @returns {*|{}}
   */
  get valueStateMessage() {
    return super.valueStateMessage || {};
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      this.value = val.value || '';
      // set empty value when label empty was given
      if (this._tmpFAT.labels && this._tmpFAT.labels.empty) {
        this.value = null;
      }
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
    } else {
      this.value = val || '';
    }
  }

  /**
   * overwrite onFnaPlaceholderChanged function
   * @private
   * @param placeholder
   */
  onFnaPlaceholderChanged(placeholder) {
    this._attributesFromFNA.placeholder = placeholder;
    if (
      this._privilegedAttributes.placeholder === null &&
      this._attributesFromFAT.placeholder === undefined
    ) {
      this.placeholder = placeholder;
    }
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (
      this._privilegedAttributes.readonly === null &&
      this._labelsFromFAT.readonly === undefined
    ) {
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
      if (
        this._privilegedAttributes.required === null &&
        this._labelsFromFAT.required === undefined
      ) {
        this.required = constraints.required.is === 'true';
      }
    }

    if (constraints.max !== undefined) {
      this._constraintsFromFNA.max = constraints.max;
      if (this._privilegedAttributes.maxlength === null) {
        this.maxlength = parseInt(constraints.max.is, 10);
      }
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      // this value state should not be saved as a previous value state
      this._setValueStateMessage('Error', validity.description);
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueStateMessage();
  }

  /**
   * update the value state and the value state message on demand
   *
   * @param valueState
   * @param message
   * @private
   */
  _setValueStateMessage(valueState, message) {
    this.valueState = valueState;
    // element was created in constructor
    this._valueStateElement.innerText = message;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueStateMessage() {
    this._setValueStateMessage(this._previousValueState.state, this._previousValueState.message);
  }
}

window.customElements.define('furo-ui5-data-textarea-input', FuroUi5DataTextareaInput);
