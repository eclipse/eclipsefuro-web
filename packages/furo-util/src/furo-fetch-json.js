import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-fetch-json`
 *  Fetches and parses json data from a source.
 *
 *  ```html
 *  <furo-fetch-json src="/example.json" ƒ-fetch="--FBPready" @-data="--contentReceived"></furo-fetch-json>
 *  ```
 *
 * @fires {{Object} json data} data -  Fired when data received and json parsed
 * @fires {error} parse-error -  Fired when json is not parseable
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
      src: { type: String },
    };
  }

  /**
   * fetch and parse the data from specified `src`.
   *
   * Use fetch-src if you want to pass the source url
   *
   * @return {Promise<any>}
   */
  // eslint-disable-next-line consistent-return
  fetch() {
    if (this.src) {
      return fetch(this.src)
        .then(res => res.json())
        .then(
          data => {

            const customEvent = new Event('data', { composed: true, bubbles: true });
            customEvent.detail = data;
            this.dispatchEvent(customEvent);
          },
          err => {

            const customEvent = new Event('parse-error', { composed: true, bubbles: true });
            customEvent.detail = err;
            this.dispatchEvent(customEvent);
          },
        );
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

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-fetch-json', FuroFetchJson);
