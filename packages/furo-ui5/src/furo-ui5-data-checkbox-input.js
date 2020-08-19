import * as CheckBox from '@ui5/webcomponents/dist/CheckBox.js'
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder'
// eslint-disable-next-line import/no-extraneous-dependencies


/**
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 * The furo-ui5-data-checkbox-input component consists of a box and a label that describes its purpose. If it's checked,
 * an indicator is displayed inside the box. To check/uncheck the furo-ui5-data-checkbox-input, the user has to click or tap the square box or its label.
 *
 * The furo-ui5-data-checkbox-input component only has 2 states - checked and unchecked. Clicking or tapping toggles
 * the furo-ui5-data-checkbox-input between checked and unchecked state.
 *
 * Usage
 * You can manually set the width of the element containing the box and the label using the width property.
 * If the text exceeds the available width, it is truncated. The touchable area for toggling the
 * furo-ui5-data-checkbox-input ends where the text ends.
 *
 * You can disable the furo-ui5-data-checkbox-input by setting the disabled property to true, or use the
 * furo-ui5-data-checkbox-input in read-only mode by setting the readonly property to true.
 *
 * @summary data checkbox input field
 * @customElement
 * @demo demo-furo-ui5-data-text-input Basic usage (scalar , fat, wrapper values)
 * @demo demo-furo-ui5-data-text-input-together playground
 */
export class FuroUi5DataCheckboxInput extends CheckBox.default {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event change
   */

  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.valueState = 'None';
    this._initBinder();
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
   * apply the binding set to the binder
   * binding set can be customised here otherwise the standard set in the ui5-data-input will be used
   * @param fieldNode
   */
  applyBindingSet() {
    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'text', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      'value-state': '_valueState',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'pattern',
      name: 'name'
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine',
      highlight: 'highlight',
      wrap: 'wrap'
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      required: 'value._constraints.required.is', // for the fieldnode constraint
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      required: 'required'
    };

    // update the value on input changes
    this.addEventListener('change', val => {
      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

      // update the value
      this.binder.fieldValue = val.target.checked;
    });
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
window.customElements.define('furo-ui5-data-checkbox-input', FuroUi5DataCheckboxInput);
