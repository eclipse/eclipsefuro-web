import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-fetch-json`
 *  Fetches and parses json data from a source.
 *
 *  ```html
 *  <furo-fetch-json src="/example.json" ƒ-fetch="--FBPready" @-data="--contentReceived"></furo-fetch-json>
 *  ```
 *
 * @summary fetch json data
 * @customElement
 * @appliesMixin FBP
 */
class FuroFetchJson extends FBP(LitElement) {

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * the url you want to fetch
       */
      src: {type: String}
    };
  }

  /**
   * fetch and parse the data from specified `src`.
   *
   * Use fetch-src if you want to pass the source url
   *
   * @return {Promise<any>}
   */
  fetch() {
    if (this.src) {
      return fetch(this.src).then(res => res.json()).then(data => {
        /**
         * @event data
         * Fired when data received and json parsed
         * detail payload: {Object} json data
         */
        let customEvent = new Event('data', {composed: true, bubbles: true});
        customEvent.detail = data;
        this.dispatchEvent(customEvent);
      });
    }
  }

  /**
   * fetch json data from source
   * @param String source
   *
   * @return {Promise<any>}
   */
  fetchSrc(source) {
    this.src = source;
    return this.fetch();
  }

}

window.customElements.define('furo-fetch-json', FuroFetchJson);
