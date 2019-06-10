import {LitElement, html} from 'lit-element';
import {Env} from "@furo/framework"

/**
 * `deep-link`
 *
 * @customElement
 * @demo demo/form.html
 * @appliesMixin FBP
 */
class DeepLink extends LitElement {

  constructor() {
    super();
    this._servicedefinitions = Env.api.services;
  }

  static get properties() {
    return {
      /**
       * @type {object|QueryParams} Query Params
       */
      qp: {type: Object},

      /**
       * Name des Services
       */
      service: {type: String, attribute: true}
    };
  }

  /**
   * Evaluates hts. Use qpIn(qp) if you have a qp object in your event.detail
   */
  trigger() {
    if (this._qp && this._service) {
      this._buildHTS(this._qp, this._service)
    }
  }

  _buildHTS(qp, service) {
    this._hts = [];

    // loop services
    for (let serviceName in service.services) {
      let candidate = {
        "rel": service.services[serviceName].deeplink.rel,
        "href": service.services[serviceName].deeplink.href,
        "method": service.services[serviceName].deeplink.method
      };


      candidate.type = service.services[serviceName].request;

      for (let param in this._qp) {
        candidate.href = candidate.href.replace("{" + param + "}", this._qp[param]);
      }
      //wenn es keine {xx} mehr hat, ist es ein treffer
      if (candidate.href.indexOf("{") === -1) {
        //candidate.type = "application/" + candidate.type + "+json"
        this._hts.push(candidate);
      }
    }
    if (this._hts.length) {
      /**
       * @event hts-out
       * Fired when hateoas is available
       * detail payload: {[]Links} Array of hateoas links
       */
      let customEvent = new Event('hts-out', {composed: true, bubbles: true});
      customEvent.detail = this._hts;
      this.dispatchEvent(customEvent)
    }

  }

  /**
   * set queryParams and evaluate for hateoas
   * @param queryParams
   */
  qpIn(queryParams) {
    this._qp = queryParams;
    this.trigger();
  }

  /**
   * Deprecated
   *
   * Set QP via attribute (for polymer 3 compatibility), use ƒ-qp-in (qpIn) instead
   * @param qp
   */
  set qp(qp) {
    // zwischenspeichern für einen ev. ƒ-trigger
    console.warn("setting the qp via attribute is deprecated, use ƒ-qp-in instead");
    console.warn("This feature will be removed in Q3-2019");
    this._qp = qp;
    this.trigger();
  }

  /**
   * Deprecated
   *
   * use ƒ-qp-in instead
   *
   * Inject a QueryParams (key value) Object
   * @param {object|QueryParams} qp
   */
  injectQueryParams(qp) {
    console.warn("injectQueryParams is deprecated, use ƒ-qp-in instead");
    console.warn("This feature will be removed in Q3-2019");
    // zwischenspeichern für einen ev. ƒ-trigger
    this._qp = qp;
    this.trigger();
  }

  /**
   * Sets the service
   *
   * Services must be registered like:
   *
   * ```
   * import {Services,Types} from "./apiConfig.js"
   * Init.registerApiServices(Services);
   * Init.registerApiTypes(Types);
   * ```
   * Usually this is done in your main-app.js
   *
   * @param serviceName
   */
  setService(serviceName) {
    this.service = serviceName;
  }

  /**
   * Setze den Service
   * @param service
   */
  set service(service) {
    if (!this._servicedefinitions[service]) {
      console.error("service " + service + " does not exist", this, "Available Services:", this._servicedefinitions);
      return
    }
    this._service = this._servicedefinitions[service];

    if (this._service.general.lifecycle.deprecated) {
      console.warn("You are using a deprecated service (" + service + ") " + this._service.general.lifecycle.info);
    }
  }


}

window.customElements.define('deep-link', DeepLink);
