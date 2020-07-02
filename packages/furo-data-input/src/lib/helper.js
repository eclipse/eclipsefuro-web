import { CheckMetaAndOverrides } from './CheckMetaAndOverrides.js';

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
    caller.updateComplete.then(() => {
      if (!caller._theInputElement) {
        // eslint-disable-next-line no-param-reassign
        caller._theInputElement = caller.shadowRoot.getElementById('input');
      }
      if (value !== null) {
        caller._theInputElement.setAttribute(attribute, value);
      } else {
        // remove the attribute on null value
        caller._theInputElement.removeAttribute(attribute);
      }
      caller.dispatchEvent(
        new CustomEvent('input-attr-updated', {
          detail: value,
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  /**
   * Bind a entity field to the input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|caller} furo input element
   * @param {Object|FieldNode} fieldNode a Field object
   */
  static BindData(caller, fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ');
      // eslint-disable-next-line no-console
      console.log(caller);
      return;
    }
    // eslint-disable-next-line no-param-reassign
    caller.field = fieldNode;
    CheckMetaAndOverrides.UpdateMetaAndConstraints(caller);
    caller._updateField();

    if (caller.field._meta && caller.field._meta.repeated) {
      caller.field.addEventListener('this-repeated-field-changed', () => {
        caller._updateField();
        if (caller.field._meta && caller.field._meta.hint) {
          // eslint-disable-next-line no-param-reassign
          caller._hint = caller.field._meta.hint;
        }
        if (caller.hint) {
          // eslint-disable-next-line no-param-reassign
          caller._hint = caller.hint;
        }
      });
    } else {
      caller.field.addEventListener('field-value-changed', () => {
        caller._updateField();
        if (caller.field._meta && caller.field._meta.hint) {
          // eslint-disable-next-line no-param-reassign
          caller._hint = caller.field._meta.hint;
        }
        if (caller.hint) {
          // eslint-disable-next-line no-param-reassign
          caller._hint = caller.hint;
        }
      });
    }

    // update meta and constraints when they change
    caller.field.addEventListener('this-metas-changed', () => {
      CheckMetaAndOverrides.UpdateMetaAndConstraints(caller);
      caller.requestUpdate();
    });

    caller.field.addEventListener('field-became-invalid', () => {
      // updates wieder einspielen
      // eslint-disable-next-line no-param-reassign
      caller.error = true;
      if (caller.field._validity && caller.field._validity.description) {
        // eslint-disable-next-line no-param-reassign
        caller.errortext = caller.field._validity.description;
      }
      caller.requestUpdate();
    });

    caller.field.addEventListener('field-became-valid', () => {
      // updates wieder einspielen
      // eslint-disable-next-line no-param-reassign
      caller.error = false;
      caller.requestUpdate();
    });
  }
}
