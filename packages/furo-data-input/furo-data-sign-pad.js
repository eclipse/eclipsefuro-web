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


  /**
   * Encodes the image using the type and encodingOptions (quality) defined.
   * The encoded image is available in the `image` property.
   */
  encodeImage() {
    this.image = this.canvas.toDataURL(this.type, this.encodingOptions);
    if (this.field) {

      this.field.value = this.image.split(",")[1];
    }
    this._setEmpty(this.signaturePad.isEmpty());
    /**
     * @event sign-updated
     * Fired when sign gets new painting
     * detail payload: base encoded image
     */
    let customEvent = new Event('sign-updated', {composed: true, bubbles: true});
    customEvent.detail = this.image;
    this.dispatchEvent(customEvent)
  }

}

window.customElements.define('furo-data-sign-pad', FuroDataSignPad);
