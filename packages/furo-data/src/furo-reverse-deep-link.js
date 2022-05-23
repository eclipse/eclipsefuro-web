import { LitElement, css } from 'lit';
import { Env } from '@furo/framework';

/**
 * Converts hateoas to queryParams, which is useful for routing with app-flow
 *
 *
 *```html
 *<furo-reverse-deep-link
 *    service="TaskService"
 *    rel="self" at-converted="--queryParams"
 *    fn-convert="--rawEntityOrCollection, --linksArray, --linkObject"
 *></furo-reverse-deep-link>
 *```
 *
 * @fires {QueryParams} converted -  Fired when input was converted.
 *
 * @summary create query param object from HATEOAS
 * @customElement
 */
class FuroReverseDeepLink extends LitElement {
  constructor() {
    super();

    this.service = '';
    /**
     *
     * @type {{}}
     * @private
     */
    this._services = Env.api.services;
  }

  /**
   * converts the href of a LinkObject
   *
   * returns Error on undefined service
   *
   * @return {object} Object with query params key value
   * @param data  {object} rawEntity|rawCollection
   */
  convert(data) {
    let qp = {};

    if (this._services[this.service] === undefined) {
      // eslint-disable-next-line no-console
      console.warn(this.service, ' service is not defined', this);
      return new Error('Service is not defined');
    }
    this._serviceDef = this._services[this.service].services;

    let linkObject = data;

    // Entity or Collection
    if (Array.isArray(data.links)) {
      if (data && Array.isArray(data.data)) {
        // is collection
        // default rel if not set
        if (!this.rel) {
          this.rel = 'list';
        }
      } else if (!this.rel) {
        this.rel = 'self';
      }

      [linkObject] = data.links.filter(
        e =>
          e.rel.toLowerCase() === this.rel.toLowerCase() &&
          e.service.toLowerCase() === this.service.toLowerCase()
      );
    }

    // Links Array
    if (Array.isArray(data)) {
      [linkObject] = data.filter(
        e =>
          e.rel.toLowerCase() === this.rel.toLowerCase() &&
          e.service.toLowerCase() === this.service.toLowerCase()
      );
    }

    if (linkObject) {
      qp = this._convert(linkObject);
    }

    const customEvent = new Event('converted', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = qp;
    this.dispatchEvent(customEvent);
    return qp;
  }

  /**
   *
   * @param link
   * @return {{}}
   * @private
   */
  _convert(link) {
    const linkObject = {
      rel: link.rel,
      href: link.href,
      method: link.method,
      type: link.type,
    };

    if (linkObject.rel === 'self') {
      linkObject.rel = 'Get';
    }

    linkObject.rel =
      linkObject.rel.charAt(0).toUpperCase() + linkObject.rel.slice(1);
    let pattern = '';

    if (this._serviceDef[linkObject.rel]) {
      pattern = this._serviceDef[linkObject.rel].deeplink.href;
    }

    // eslint-disable-next-line no-useless-escape
    const rgx = new RegExp('{([^}]*)}', 'gi');

    const keys = [];
    let m;

    // eslint-disable-next-line no-cond-assign
    while ((m = rgx.exec(pattern)) !== null) {
      keys.push(m[1]);
    }

    pattern = pattern.replace(rgx, '(.*)');

    const srgx = new RegExp(`${pattern}$`);
    const qp = {};
    const matches = srgx.exec(linkObject.href);
    if (matches) {
      keys.forEach((e, i) => {
        qp[e] = matches[i + 1];
      });
    }

    return qp;
  }

  static get properties() {
    return {
      /**
       * Name of service
       * @type String
       */
      service: { type: String },
      /**
       * Optional rel to convert.
       *
       * Not needed if you inject a link object.
       *
       * If you insert an entity rel self is taken. If you insert a collection, rel list is used.
       * @type String
       */
      rel: { type: String },
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

window.customElements.define('furo-reverse-deep-link', FuroReverseDeepLink);
