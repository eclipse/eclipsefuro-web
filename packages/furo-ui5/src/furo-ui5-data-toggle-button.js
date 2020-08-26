import * as ToggleButton from '@ui5/webcomponents/dist/ToggleButton.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';

/**
 * The furo-ui5-data--toggle-button component is an enhanced ui5-button that can be toggled between pressed and normal states.
 * Users can use the furo-ui5-data--toggle-button as a switch to turn a setting on or off. It can also be used to
 * represent an independent choice similar to a check box.
 *
 * Clicking or tapping on a furo-ui5-data--toggle-button changes its state to pressed. The button returns to its initial
 * state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give
 * a different style to any furo-ui5-data--toggle-button.
 *
 * @summary data toggle button
 * @customElement
 * @demo demo-furo-ui5-data-toggle-button Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5DataToggleButton extends ToggleButton.default {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event click
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
    this.binder.targetValueField = 'pressed';
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
      icon: 'icon', // icon and leading icon maps to the same
      'leading-icon': 'icon', // icon and leading icon maps to the same
      'trailing-icon': 'icon', // icon and leading icon maps to the same
      design: 'design',
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
      readonly: 'disabled',
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
    this.addEventListener('click', val => {
      // set flag empty on empty strings (for fat types)
      if (val.target.pressed) {
        this.binder.deleteLabel('empty');
      } else {
        this.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.binder.deleteLabel('pristine');

      // update the value
      this.binder.fieldValue = val.target.pressed;
    });
  }

  /**
   *
   * @param label
   * @private
   */
  _addLabel(label) {
    if (label && label.length) {
      this.innerText = label;
    }
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      if (this.binder.virtualNode && this.binder.virtualNode.attributes) {
        this._addLabel(this.binder.virtualNode.attributes.label);
      }
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
        if (this.binder.virtualNode && this.binder.virtualNode.attributes) {
          this._addLabel(this.binder.virtualNode.attributes.label);
        }
      });
    }
  }
}
window.customElements.define('furo-ui5-data-toggle-button', FuroUi5DataToggleButton);
