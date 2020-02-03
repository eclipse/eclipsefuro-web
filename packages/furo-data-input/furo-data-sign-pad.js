import {FuroSignPad} from "@furo/input/furo-sign-pad";

/**
 * `furo-data-sign-pad`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/furo-data-sign-pad
 * @appliesMixin FBP
 */
export class FuroDataSignPad extends FuroSignPad {



  bindData(entityField) {
    this.field = entityField;
    if (this.field._value) {
      this.setImage("data:image/png;base64," + this.field._value);
    }
  }



}

window.customElements.define('furo-data-sign-pad', FuroDataSignPad);
