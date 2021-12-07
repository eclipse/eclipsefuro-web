import { LitElement, css } from 'lit';

/**
 * `furo-put-clipboard`
 *  put content to the clipboard of the OS.
 *
 *```html
 *
 * <furo-put-clipboard
 *     json
 *     ƒ-trigger="--data" @-content-put="--contentInClipboard"
 *     ></furo-put-clipboard>
 *
 *```
 *
 * @fires {*} content-put - Fired when content is written to clipboard
 *
 * @summary write content to clipboard
 * @customElement
 */
class FuroPutClipboard extends LitElement {
  /**
   * Set data that you want to put to clipboard.
   *
   * @param  {Object} data - Serializable data to put
   */
  setData(data) {
    this.data = data;
  }

  /**
   * Write data to the clipboard
   *
   * If you trigger without data, the data which sas set with `setData` will be written to the clipboard.
   *
   * @param {Object|null} data Serializable data
   */
  trigger(data) {
    let ndata = data;
    if (this.data) {
      ndata = this.data;
    }
    let d;
    if (this.json) {
      d = JSON.stringify(ndata, '', 2);
    } else {
      d = ndata;
    }

    navigator.clipboard.writeText(d).then(() => {
      const customEvent = new Event('content-put', { composed: true, bubbles: true });
      customEvent.detail = d;
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
       * Stringify JSON content. Set this to true to auto stringify your JSON object with a 2 indention.
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

window.customElements.define('furo-put-clipboard', FuroPutClipboard);
