import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-location-updater`
 * updates parts of the url location.
 *
 * You can set the query params and hashes. Use this component for proper deep linking.
 * The furo-location component will fire the location events as ususal.
 *
 * ```html
 *  <furo-location-updater ƒ-set-qp="--QueryParamKeyValuePairs" ƒ-set-hash="--HashKeyValuePairs"></furo-location-updater>
 * ```
 *
 *
 *
 * @summary deep linking helper
 * @customElement
 * @demo demo-furo-panel-coordinator update qp from tree
 * @appliesMixin FBP
 */
class FuroLocationUpdater extends FBP(LitElement) {
  static get properties() {
    return {
      /**
       * Comma separated list of qp to clear if they are not explizitly set with `setQp`
       */
      clearQp: { type: String, attribute: 'clear-qp' },
      /**
       * Comma separated list of hashes to clear if they are not explizitly set with `setQp`
       */
      clearHash: { type: String, attribute: 'clear-hash' },
    };
  }

  /**
   * Set query params by giving an object with key-value pairs.
   *
   * Keep in mind, that this values goes to the url, so setting objects as values is not a good idea
   * @param newQP
   */
  setQp(newQP) {
    // read current qp and update incomming qp

    const newQuery = window.location.search.slice(1);
    const queryObject = {};
    if (newQuery.length > 0) {
      newQuery.split('&').forEach(qstr => {
        const p = qstr.split('=');
        // eslint-disable-next-line prefer-destructuring
        queryObject[p[0]] = p[1];
      });
    }

    // clear qps
    if (this.clearQp) {
      this.clearQp.split(',').forEach(ps => {
        delete queryObject[ps.trim()];
      });
    }

    // append qps
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const param in newQP) {
      queryObject[param] = newQP[param];
    }

    const qp = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const segment in queryObject) {
      // eslint-disable-next-line no-prototype-builtins
      if (queryObject.hasOwnProperty(segment)) {
        qp.push(`${segment}=${queryObject[segment]}`);
      }
    }
    const location = `${window.location.pathname}?${qp.join('&')}${window.location.hash}`;
    if (this._lastLocation !== location) {
      // notify furo location
      window.history.pushState({}, '', location);

      const now = window.performance.now();
      const customEvent = new Event('__furoLocationChanged', { composed: true, bubbles: true });
      customEvent.detail = now;
      this.dispatchEvent(customEvent);
      this._lastLocation = location;
    }
  }

  /**
   * Set hash values by giving an object with key-value pairs.
   *
   * Keep in mind, that this values goes to the url, so setting objects as values is not a good idea
   * @param newHASH
   */
  setHash(newHASH) {
    // read current hash and update incomming hash

    const currentHash = window.location.hash.slice(1);

    const hashObject = {};
    if (currentHash.length > 0) {
      currentHash.split('&').forEach(qstr => {
        const p = qstr.split('=');
        // eslint-disable-next-line prefer-destructuring
        hashObject[p[0]] = p[1];
      });
    }

    // clear hashs
    if (this.clearHash) {
      this.clearHash.split(',').forEach(ps => {
        delete hashObject[ps.trim()];
      });
    }

    // append hashs
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const param in newHASH) {
      hashObject[param] = newHASH[param];
    }

    const hash = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const segment in hashObject) {
      // eslint-disable-next-line no-prototype-builtins
      if (hashObject.hasOwnProperty(segment)) {
        hash.push(`${segment}=${hashObject[segment]}`);
      }
    }
    window.location.hash = hash.join('&');
    // eslint-disable-next-line prefer-destructuring
    const location = window.location;

    if (this._lastLocation !== location) {
      // notify furo location
      window.history.pushState({}, '', location);

      const now = window.performance.now();
      const customEvent = new Event('__furoLocationChanged', { composed: true, bubbles: true });
      customEvent.detail = now;
      this.dispatchEvent(customEvent);
      this._lastLocation = location;
    }
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

window.customElements.define('furo-location-updater', FuroLocationUpdater);
