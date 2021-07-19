import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-get-clipboard`
 *  get the clipboard content from the OS.
 *
 *```html
 *
 * <furo-get-clipboard ƒ-trigger="--clipboardContentRequested" @-content="--contentReceived">
 * </furo-get-clipboard>
 *
 *```
 *
 * @fires content -  Fired when clipboard content is received
 * @event {*} content of the clipboard
 *
 * @summary get clipboard content
 * @customElement
 * @appliesMixin FBP
 */
class FuroGetClipboard extends FBP(LitElement) {
  trigger() {
    navigator.clipboard.readText().then(clipText => {

      const customEvent = new Event('content', { composed: true, bubbles: true });
      if (this.json) {
        customEvent.detail = JSON.parse(clipText);
      } else {
        customEvent.detail = clipText;
      }

      this.dispatchEvent(customEvent);
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Convert clipboard content to json
       */
      json: { type: Boolean },
    };
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-get-clipboard', FuroGetClipboard);
