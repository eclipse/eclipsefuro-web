import { FuroSignPad } from '@furo/input/src/furo-sign-pad';

/**
 * `furo-data-sign-pad`
 * Describe your element
 *
 * @summary Bind a entityObject.field to a sign-pad input
 * @customElement
 * @demo demo-furo-data-sign-pad
 * @appliesMixin FBP
 */
export class FuroDataSignPad extends FuroSignPad {
  constructor() {
    super();
    this.field = {}; // ensure that field is available
  }

  /**
   * bind a entity field
   * @param entityField
   */
  bindData(entityField) {
    this.field = entityField;
    if (this.field._value) {
      this.setImage(this.field._value);
    }
    // update drawing on changes from outside
    this.field.addEventListener('this-field-value-changed', () => {
      this.signaturePad.clear();
      this.setImage(this.field._value);
    });
  }

  clear() {
    // super.clear();
    this.field._value = '';
  }

  /**
   * update field._value  on new drawing
   */
  encodeImage() {
    this.field._value = super.encodeImage();
    return this.field._value;
  }
}

window.customElements.define('furo-data-sign-pad', FuroDataSignPad);
