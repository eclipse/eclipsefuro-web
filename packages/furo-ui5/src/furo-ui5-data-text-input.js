import * as Input from '@ui5/webcomponents/dist/Input.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';
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
 * @demo demo-furo-ui5-data-text-input Basic usage (scalar values)
 */
export class FuroUi5DataTextInput extends Input.default {
  constructor(props) {
    super(props);
    this.type = "Text";

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
      label: 'placeholder',
      pattern: 'pattern',
      valueState: 'value-state',
      max: 'maxlength',
    };

    // set the label mappings
    this.binder.labelMappings = {
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine'
    };

    this.binder.fatAttributesToConstraintsMappings = {
      maxlength: 'value._constraints.max.is', // for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      required: 'value._constraints.required.is', // for the fieldnode constraint
      hint: 'value._constraints.max.message', // for the fieldnode constraint message
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

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = 'value';

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
    // set flag empty on empty strings (for fat types)
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

}

window.customElements.define('furo-ui5-data-text-input', FuroUi5DataTextInput);
