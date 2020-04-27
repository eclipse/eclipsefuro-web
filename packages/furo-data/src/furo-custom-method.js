import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp';
import './furo-api-fetch.js';
import { Env } from '@furo/framework';

/**
 * `furo-custom-method`
 * interface component to handle custom methods
 *
 * @summary interface component to handle custom methods
 * @customElement
 * @demo demo-furo-custom-method Basic usage
 * @appliesMixin FBP
 */
class FuroCustomMethod extends FBP(LitElement) {
  constructor() {
    super();
    this._servicedefinitions = Env.api.services;
    this._ApiEnvironment = Env.api;

    this._pendingRequests = [];

    /**
     * Request race condition handling
     *
     */
    this._FBPAddWireHook('--beforeRequestStart', () => {
      if (this._pendingRequests.length) {
        this._FBPTriggerWire('--abortDemanded', this._abortController);
      }
      this._pendingRequests.push('pending');
    });
    this._FBPAddWireHook('--requestFinished', () => {
      this._pendingRequests.pop();
    });
  }

  static get properties() {
    return {
      /**
       * Name des Services
       */
      service: { type: String, attribute: true },
      /**
       * Name der Methode
       */
      method: { type: String, attribute: true },
    };
  }

  /**
   * Setze den Service
   * @param service
   */
  set service(service) {
    if (!this._servicedefinitions[service]) {
      // eslint-disable-next-line no-console
      console.error(
        `service ${service} does not exist`,
        this,
        'Available Services:',
        this._servicedefinitions,
      );
      return;
    }
    this._service = this._servicedefinitions[service];

    if (this._service.lifecycle && this._service.lifecycle.deprecated) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are using a deprecated service (${service}) ${this._service.lifecycle.info}`,
      );
    }
  }

  bindRequestData(dataObject) {
    this._requestDataObject = dataObject;
  }

  _makeRequest(link, dataObject) {
    this._FBPTriggerWire('--beforeRequestStart');
    let data;
    const body = {};
    // check if dataObject is set and create body object
    if (dataObject) {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const index in dataObject.__childNodes) {
        const field = dataObject.__childNodes[index];
        const val = field._transmitValue;
        if (val !== undefined) {
          body[field._name] = val;
        }
      }
      data = JSON.stringify(body);
    }
    /**
     * The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     * @type {AbortController}
     * @private
     */
    this._abortController = new AbortController();
    const { signal } = this._abortController;

    // Daten
    const headers = new Headers(this._ApiEnvironment.headers);
    const TYPE = link.type ? `application/${link.type}+json` : 'application/json';
    headers.append('Content-Type', TYPE);

    return new Request(link.href, {
      signal,
      method: link.method,
      headers,
      body: data,
    });
  }

  _checkServiceAndHateoasLinkError(rel, serviceName) {
    // check Service Get
    const s = Object.keys(this._service.services).map(key => key.toLowerCase());

    if (s.indexOf(serviceName.toLowerCase()) === -1) {
      // eslint-disable-next-line no-console
      console.warn(`Service ${serviceName} is not specified`, this._service, this);
      return true;
    }

    // check Hateoas
    if (!this._hts[rel]) {
      // eslint-disable-next-line no-console
      console.warn(`No HATEOAS for rel ${rel} in service ${this._service.name} found.`, this);
      const customEvent = new Event(`missing-hts-${rel}`, { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return true;
    }
    return false;
  }

  /**
   * trigger the method with respect for binded-requset-object
   */
  trigger() {
    if (this._requestDataObject) {
      this.triggerWithBody(this._requestDataObject);
    } else {
      this.triggerEmpty();
    }
  }

  triggerEmpty() {
    if (this._checkServiceAndHateoasLinkError(this.method, this.method)) {
      return;
    }
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(this._hts[this.method]));
  }

  /**
   * trigger the method with data
   */
  triggerWithBody(body) {
    if (this._checkServiceAndHateoasLinkError(this.method, this.method)) {
      return;
    }

    this._FBPTriggerWire('--triggerLoad', this._makeRequest(this._hts[this.method], body));
  }

  htsIn(hts) {
    if (hts && hts[0] && hts[0].rel) {
      this._hts = {};
      hts.forEach(link => {
        this._hts[link.rel] = link;
      });

      /**
       * @event hts-updated
       * Fired when
       * detail payload:
       */
      const customEvent = new Event('hts-updated', { composed: true, bubbles: true });
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);
    }
  }

  render() {
    // language=HTML
    return html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: none;
        }
      </style>
      <furo-api-fetch
        ƒ-invoke-request="--triggerLoad"
        ƒ-abort-request="--abortDemanded"
        @-response="--requestFinished"
        @-fatal-error="--requestFinished"
      >
      </furo-api-fetch>
    `;
  }
}

window.customElements.define('furo-custom-method', FuroCustomMethod);
