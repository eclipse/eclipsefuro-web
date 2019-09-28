import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-put-clipboard`
 *  put content to the clipboard of the OS.
 *
 *```html
 *
 * <furo-put-clipboard json ƒ-trigger="--putDataToClipboard" @-content-putted="--contentInClipboard">
 * </furo-put-clipboard>
 *
 *```
 *
 * @summary write content to clipboard
 * @customElement
 */
class FuroPutClipboard extends (LitElement) {

  constructor() {
    super();
  }

  setData(data){
    this.data= data;
  }

  trigger(data) {
    if(this.data){
      data = this.data;
    }
    let d;
    if (this.json) {
      d = JSON.stringify(data, "", 2);
    } else {
      d = data;
    }

    navigator.clipboard.writeText(d).then(
        () => {
          /**
           * @event content
           * Fired when clipboard content is received
           * detail payload: {*} content of the clipboard
           */
          let customEvent = new Event('content-putted', {composed: true, bubbles: true});
          customEvent.detail = d;
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
       * Stringify JSON content
       */
      json: {type: Boolean}
    };
  }

}

window.customElements.define('furo-put-clipboard', FuroPutClipboard);
