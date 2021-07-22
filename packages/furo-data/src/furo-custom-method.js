import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp';
import './furo-api-fetch.js';
import { Env } from '@furo/framework';
import { AgentHelper } from './lib/AgentHelper.js';

/**
 * `furo-custom-method`
 * interface component to handle custom methods.
 *
 * @fires {HTS} hts-updated -  Fired when hts was updated by `ƒ-hts-in`.
 *
 * @fires request-aborted - Fired if the request was successfully cancelled.
 *
 * @summary interface component to handle custom methods
 * @customElement
 * @demo demo-furo-custom-method Basic usage
 * @appliesMixin FBP
 */
class FuroCustomMethod extends FBP(LitElement) {
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
     * @type {*|{headers: [[string, string]], specs: {}, services: {}}}
     * @private
     */
    this._ApiEnvironment = Env.api;
    /**
     *
     * @type {*[]}
     * @private
     */
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
    /**
     *
     * @type {{}}
     * @private
     */
    this._queryParams = {};
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

  /**
   * Update query params
   * a qp like {"active":true} will just update the qp *active*
   *
   * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
   * @param {Object} key value pairs
   */
  updateQp(qp) {
    AgentHelper.updateQp(this, qp);
  }

  bindRequestData(dataObject) {
    this._requestDataObject = dataObject;
  }

  /**
   * clear the query params that you have setted before
   */
  clearQp() {
    this._queryParams = {};
  }

  /**
   *
   * @param link
   * @param dataObject
   * @return {Request}
   * @private
   */
  _makeRequest(link, dataObject) {
    this._FBPTriggerWire('--beforeRequestStart');
    let data;
    const body = {};

    // create Request object with headers and body
    const headers = new Headers(this._ApiEnvironment.headers);

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
      headers.append('Content-Type', 'application/json; charset=utf-8');
    }

    const REL_NAME = link.rel.toLowerCase() === 'self' ? 'get' : link.rel.toLowerCase();

    // generate accept field for header
    const ACCEPT = AgentHelper.generateHeaderAccept(
      this,
      this._ApiEnvironment.services[link.service].services,
      REL_NAME,
    );

    if (ACCEPT) {
      headers.append('Accept', `${ACCEPT}`);
    }

    // get existing params from href and append query params
    const params = AgentHelper.getParams(this, link);

    // rebuild qp
    const qp = AgentHelper.rebuildQPFromParams(params);
    // generate req
    const req = AgentHelper.generateReq(link, qp);

    /**
     * The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     * @type {AbortController}
     * @private
     */
    this._abortController = new AbortController();
    const { signal } = this._abortController;

    return new Request(req, {
      signal,
      method: link.method,
      headers,
      body: data,
    });
  }

  /**
   *
   * @param rel
   * @param serviceName
   * @return {boolean}
   * @private
   */
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

      const customEvent = new Event('hts-updated', { composed: true, bubbles: true });
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * Aborts a pending request
   */
  abortPendingRequest() {
    if (this._pendingRequests.length) {
      this._FBPTriggerWire('--abortDemanded', this._abortController);
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
        @-response-error="--requestFinished"
        @-fatal-error="--requestFinished"
      >
      </furo-api-fetch>
    `;
  }
}

window.customElements.define('furo-custom-method', FuroCustomMethod);
