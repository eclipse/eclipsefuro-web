import { LitElement, css } from 'lit';
import { Env } from '@furo/framework';

/**
 * `furo-deep-link`
 * Resolve deep links HATEOAS based on the query params and the selected service.
 *
 * ```html
 * <furo-deep-link
 *  service="TaskService"
 *  ƒ-qp-in="--pageQueryChanged(*.query)" @-hts-out="--serviceHTS">
 *  </furo-deep-link>
 * ```
 * *Deeplink inside of a furo-page*
 *
 *
 * The services must be registered in the Env:
 *
 * ```html
 * import {Services,Types} from "./furo-spec.js"
 * Init.registerApiServices(Services);
 * Init.registerApiTypes(Types);
 * ```
 *
 *
 * Usually this is done in your src/configs/init.js
 *
 *
 * @fires {[]HTSLinks} hts-out Fired when hateoas is available
 *
 *
 * @summary Resolve deep links HATEOAS based on  query params
 * @customElement
 * @appliesMixin FBP
 */
class FuroDeepLink extends LitElement {
  constructor() {
    super();
    /**
     *
     * @type {{}}
     * @private
     */
    this._servicedefinitions = Env.api.services;
    /**
     *
     * @type {{}}
     * @private
     */
    this._qp = {};
  }

  static get properties() {
    return {
      /**
       * Name of the service
       */
      service: { type: String, attribute: true },
    };
  }

  /**
   *
   * @param qp
   * @param service
   * @private
   */
  _buildHTS(qp, service) {
    this._hts = [];

    // loop services
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const serviceName in service.services) {
      const candidate = {
        rel: service.services[serviceName].deeplink.rel,
        href: service.services[serviceName].deeplink.href,
        method: service.services[serviceName].deeplink.method,
        service: this._requestedService,
      };

      candidate.type = service.services[serviceName].request;

      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const param in this._qp) {
        candidate.href = candidate.href.replace(`{${param}}`, this._qp[param]);
      }
      // wenn es keine {xx} mehr hat, ist es ein treffer
      if (candidate.href.indexOf('{') === -1) {
        // candidate.type = "application/" + candidate.type + "+json"
        this._hts.push(candidate);
      }
    }
    if (this._hts.length) {
      const customEvent = new Event('hts-out', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = this._hts;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * Furo-deep-link consumes a object literal with key value pairs.
   *
   * This can come from the `*.query` part of an event from furo-location.
   *
   * Or from a furo-pages wire.
   *
   * Relevant wires from furo-pages:
   * - --pageQueryChanged(*.query)
   * - --pageActivated(*.query)
   * - --pageHashChanged(*.query)
   *
   * @param queryParams
   */
  qpIn(queryParams) {
    this._qp = queryParams;
    this.trigger();
  }

  /**
   * Evaluates hts. Use qpIn(qp) if you have a qp object in your event.detail
   * This method have no effect as long _qp is not set.
   */
  trigger() {
    if (this._qp && this._service) {
      this._buildHTS(this._qp, this._service);
    }
  }

  /**
   * Sets the service by wire
   *
   * @param serviceName
   */
  setService(serviceName) {
    this.service = serviceName;
  }

  /**
   * Set the service name like `TaskService`.
   *
   * Services must be registered before.
   *
   * @param service
   */
  set service(service) {
    this._requestedService = service;
    if (this._servicedefinitions[service]) {
      this._service = this._servicedefinitions[service];
      if (this._service.lifecycle && this._service.lifecycle.deprecated) {
        // eslint-disable-next-line no-console
        console.warn(
          `You are using a deprecated service (${service}) ${this._service.lifecycle.info}`
        );
      }
    } else {
      // eslint-disable-next-line no-console
      console.error(
        `service ${service} does not exist`,
        this,
        'Available Services:',
        this._servicedefinitions
      );
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

window.customElements.define('furo-deep-link', FuroDeepLink);
