import {CheckMetaAndOverrides} from "./CheckMetaAndOverrides";

/**
 * update Attribute on input element actively, so we dont have things like pattern="undefined" on the native element.
 * @param attribute
 * @param value
 * @private
 */

export class Helper {


  /**
   * update Attribute on input element actively, so we dont have things like pattern="undefined" on the native element.
   * @param attribute
   * @param value
   * @private
   */
  static UpdateInputAttribute(caller, attribute, value) {
    caller.updateComplete.then((d) => {
      if (!caller._theInputElement) {
        caller._theInputElement = caller.shadowRoot.getElementById("input");
      }
      if (value !== null) {
        caller._theInputElement.setAttribute(attribute, value);

      } else {
        // remove the attribute on null value
        caller._theInputElement.removeAttribute(attribute);
      }
    })
  }


  /**
   * Bind a entity field to the input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|caller} furo input element
   * @param {Object|FieldNode} fieldNode a Field object
   */
  static BindData(caller, fieldNode) {

    if (fieldNode === undefined) {
      console.warn("Invalid binding ");
      console.log(caller);
      return
    }

    caller.field = fieldNode;
    CheckMetaAndOverrides.UpdateMetaAndConstraints(caller);
    caller._updateField();

    caller.field.addEventListener('field-value-changed', (e) => {
      caller._updateField();
      if (caller.field._meta && caller.field._meta.hint) {
        caller._hint = caller.field._meta.hint;
      }
      if (caller.hint) {
        caller._hint = caller.hint;
      }
    });


    // update meta and constraints when they change
    caller.field.addEventListener('this-metas-changed', (e) => {
      CheckMetaAndOverrides.UpdateMetaAndConstraints(caller);
    });

    caller.field.addEventListener('field-became-invalid', (e) => {
      // updates wieder einspielen
      caller.error = true;
      caller.errortext = caller.field._validity.description;
      caller.requestUpdate();
    });

    caller.field.addEventListener('field-became-valid', (e) => {
      // updates wieder einspielen
      caller.error = false;
      caller.requestUpdate();
    });
  }

  /**
   * set invalid
   * @param caller
   * @param val
   */
  static setInvalidMessage(caller, val){
    // val is a ValidityState
    // https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
    if (val) {

      let msg =  "invalid value";

      if (val.patternMismatch) {
        caller._hint = caller._patternErrorMessage? caller._patternErrorMessage: msg;
      } else if (val.tooShort || val.rangeUnderflow ) {
        caller._hint = caller._minErrorMessage? caller._minErrorMessage: msg;
      } else if (val.tooLong || val.rangeOverflow ) {
        caller._hint = caller._maxErrorMessage? caller._maxErrorMessage: msg;
      } else if(val.stepMismatch) {
        caller._hint = caller._stepErrorMessage? caller._stepErrorMessage: msg;
      } else if(val.valueMissing) {
        caller._hint = caller._requiredErrorMessage ? caller._requiredErrorMessage: msg;
      }
      else {
        caller._hint = msg;
      }

      caller.requestUpdate();
    }
  }

}
