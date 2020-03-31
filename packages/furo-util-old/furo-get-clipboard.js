import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

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
 * @summary get clipboard content
 * @customElement
 * @appliesMixin FBP
 */
class FuroGetClipboard extends FBP(LitElement) {

  trigger() {
    navigator.clipboard.readText().then(
        clipText => {
          /**
           * @event content
           * Fired when clipboard content is received
           * detail payload: {*} content of the clipboard
           */
          let customEvent = new Event('content', {composed: true, bubbles: true});
          if (this.json) {
            customEvent.detail = JSON.parse(clipText);
          } else {
            customEvent.detail = clipText;
          }

          this.dispatchEvent(customEvent)
        })
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
      json: {type: Boolean}
    };
  }

}

window.customElements.define('furo-get-clipboard', FuroGetClipboard);

