import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import SignaturePad from 'signature_pad/dist/signature_pad.js';

/**
 * `furo-sign-pad`
 *  Simple pad to sign or draw something
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-sign-pad @-sign-updated="--signed"></furo-sign-pad>
 *     <img ƒ-.src="--signed" alt="" width="150px">
 *   </template>
 *  </furo-demo-snippet>
 *
 * @fires {Base64} sign-updated - Fired when sign gets new painting, with base encoded image.
 *
 * @summary draw or sign
 * @customElement
 * @demo demo-furo-sign-pad Basic usage
 * @demo demo-furo-sign-pad-img with injected image
 * @appliesMixin FBP
 */
export class FuroSignPad extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this.canvas = this.shadowRoot.querySelector('canvas');

    this.signaturePad = new SignaturePad(this.canvas, {
      onBegin: this._onBegin.bind(this),
      onEnd: this._onEnd.bind(this),
    });

    setTimeout(() => {
      this.resize();

      if (this.getAttribute('image')) {
        this.setImage(this.getAttribute('image'));
      }
    }, 1);

    this.signaturePad.clear();
  }

  resize() {
    if (this.canvas) {
      const ratio = 1;
      this.canvas.width = this.canvas.offsetWidth * ratio;
      this.canvas.height = this.canvas.offsetHeight * ratio;
      this.canvas.getContext('2d').scale(ratio, ratio);
    }
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        height: 184px;
        width: 300px;
        cursor: pointer;
        position: relative;
      }

      canvas {
        width: 100%;
        height: 100%;
      }

      div.dots {
        position: absolute;
        top: 24px;
        bottom: 24px;
        left: 24px;
        right: 24px;
        pointer-events: none;
        border: 1px dashed black;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <canvas></canvas>
      <div class="dots"></div>
    `;
  }

  /**
  unlock() {
    this.signaturePad.on();
  }

  lock() {
    this.signaturePad.off();
  }
  */

  _setEmpty(b) {
    this.empty = b;
  }

  _setActive(b) {
    this.active = b;
  }

  /**
   * Clears the image
   */
  clear() {
    this.signaturePad.clear();
    this.encodeImage();
  }

  setImage(encodedImage) {
    const img = new Image();
    img.src = encodedImage;
    const ctx = this.canvas.getContext('2d');

    img.onload = () => {
      ctx.drawImage(img, 0, 0); // Or at whatever offset you like
    };
    img.src = encodedImage;
  }

  /**
   * Encodes the image using the type and encodingOptions (quality) defined.
   * The encoded image is available in the `image` property.
   */
  encodeImage() {
    this.image = this.canvas.toDataURL(this.type, this.encodingOptions);
    this._setEmpty(this.signaturePad.isEmpty());
    const customEvent = new Event('sign-updated', { composed: true, bubbles: true });
    customEvent.detail = this.image;
    this.dispatchEvent(customEvent);
    return this.image;
  }

  _onBegin() {
    this._setActive(true);
  }

  _onEnd() {
    this._setActive(false);
    this.encodeImage();
  }

  _dotSizeChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.dotSize = newValue;
  }

  _minWidthChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.minWidth = newValue;
  }

  _maxWidthChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.maxWidth = newValue;
  }

  _backgroundColorChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.backgroundColor = newValue;
  }

  _penColorChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.penColor = newValue;
  }

  _velocityFilterWeightChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.velocityFilterWeight = newValue;
  }

  // todo implement type and encoderOptions
  // eslint-disable-next-line no-unused-vars
  _onEncodingChanged(type, encoderOptions) {
    if (this.signaturePad) {
      this.encodeImage();
    }
  }
}

window.customElements.define('furo-sign-pad', FuroSignPad);
