/**
 * Standard mapping set for Furo UI5 input elements
 * Applies:
 * - standard attribute mappings
 * - standard label mappings
 * - Event handling
 *
 *
 */
export class Ui5StandardBindingSet {
  /**
   * constructor
   * @param target
   */
  constructor(target) {
    this.inputElement = target;
  }

  /**
   * Applies complete binding functionality to the target element binder
   * @param binder
   */
  applyToBinder() {
    // set the attribute mappings
    this.inputElement.binder.attributeMappings = {
      label: 'placeholder', // map label to placeholder
      placeholder: 'placeholder', // map placeholder to placeholder
      hint: '_hint',
      icon: 'leadingIcon', // icon and leading icon maps to the same
      'leading-icon': 'leadingIcon', // icon and leading icon maps to the same
      'value-state': '_valueState',
      'value-state-message': '_valueStateMessage',
      errortext: '_errorMsg', // name errortext is for compatibility with spec
      'error-msg': '_errorMsg',
      'warning-msg': '_warningMsg',
      'success-msg': '_successMsg',
      'information-msg': '_informationMsg',
      pattern: 'pattern',
      name: 'name',
      maxlength: 'maxlength', // for the input element itself
    };

    // set the label mappings
    this.inputElement.binder.labelMappings = {
      error: '_error',
      readonly: 'readonly',
      required: 'required',
      disabled: 'disabled',
      modified: 'modified',
      highlight: 'highlight',
      'show-suggestions': 'showSuggestions',
    };

    // set attributes to constrains mapping for furo.fat types
    this.inputElement.binder.fatAttributesToConstraintsMappings = {
      max: 'value._constraints.max.is', // for the fieldnode constraint
      min: 'value._constraints.min.is', // for the fieldnode constraint
      pattern: 'value._constraints.pattern.is', // for the fieldnode constraint
      'min-msg': 'value._constraints.max.message', // for the fieldnode constraint message
      'max-msg': 'value._constraints.max.message', // for the fieldnode constraint message
    };

    // set constrains to attributes mapping for furo.fat types
    this.inputElement.binder.constraintsTofatAttributesMappings = {
      max: 'max',
      pattern: 'pattern',
      required: 'required',
    };

    // update the value on input changes
    this.inputElement.addEventListener('input', val => {
      // set flag empty on empty strings (for fat types)
      if (val.target.value) {
        this.inputElement.binder.deleteLabel('empty');
      } else {
        this.inputElement.binder.addLabel('empty');
      }
      // if something was entered the field is not empty
      this.inputElement.binder.addLabel('modified');

      // update the value
      this.inputElement.binder.fieldValue = val.target.value;
    });
  }
}
