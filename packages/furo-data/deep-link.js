import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `deep-link`
 *
 * @customElement
 * @demo demo/form.html
 * @appliesMixin FBP
 */
class DeepLink extends FBP(LitElement) {

  constructor() {
    super();
    this._servicedefinitions = window.Env.services;
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


  trigger() {
    if (this._qp && this._service) {
      this._buildHTS(this._qp, this._service)
    }
  }

  _buildHTS(qp, service) {
    this._hts = [];

    // loop services
    for (let serviceName in service.services) {
      let candidate = service.services[serviceName].deeplink;

      candidate.type = service.services[serviceName].request;

      for (let param in this._qp) {
        candidate.href = candidate.href.replace("{" + param + "}", this._qp[param]);
      }
      //wenn es keine {xx} mehr hat, ist es ein treffer
      if (candidate.href.indexOf("{") === -1) {
        this._hts.push("application/" + candidate + "+json");
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

  set qp(qp) {
    // zwischenspeichern für einen ev. ƒ-trigger
    this._qp = qp;
    this.trigger();
  }

  /**
   * Inject a QueryParams (key value) Object
   * @param {object|QueryParams} qp
   */
  injectQueryParams(qp) {
    // zwischenspeichern für einen ev. ƒ-trigger
    this._qp = qp;
    this.trigger();
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
