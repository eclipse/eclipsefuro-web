import * as RadioButton from '@ui5/webcomponents/dist/RadioButton.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';
// eslint-disable-next-line import/no-extraneous-dependencies

/**
 * The furo-ui5-data-radio-button component enables users to select a single option from a set of options. When a furo-ui5-data-radio-button
 * is selected by the user, the select event is fired. When a furo-ui5-data-radio-button that is within a group is selected,
 * the one that was previously selected gets automatically deselected. You can group radio buttons by using the name property.
 * Note: If furo-ui5-data-radio-button is not part of a group, it can be selected once, but can not be deselected back.
 *
 * Keyboard Handling
 * Once the furo-ui5-data-radio-button is on focus, it might be selected by pressing the Space and Enter keys.
 * The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous
 * radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group.
 * Note: On entering radio button group, the focus goes to the currently selected radio button.
 *
 * @summary data radio button
 * @customElement
 * @demo demo-furo-ui5-data-radio-button Basic usage (scalar , fat, wrapper values)
 * @demo demo-furo-ui5-data-radio-button-group Single and Group
 */
export class FuroUi5DataRadioButton extends RadioButton.default {
  /**
   * Fired when the furo-ui5-data-radio-button selected state changes.
   * @event select
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
    this.binder.targetValueField = 'selected';
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
      name: 'name',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      pristine: 'pristine',
      highlight: 'highlight',
      wrap: 'wrap',
    };

    // set attributes to constrains mapping for furo.fat types
    this.binder.fatAttributesToConstraintsMappings = {
      required: 'value._constraints.required.is', // for the fieldnode constraint
    };

    // set constrains to attributes mapping for furo.fat types
    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    // update the value on input changes
    this.addEventListener('select', val => {
      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

      // update the value
      this.binder.fieldValue = val.target.selected;
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
window.customElements.define('furo-ui5-data-radio-button', FuroUi5DataRadioButton);
