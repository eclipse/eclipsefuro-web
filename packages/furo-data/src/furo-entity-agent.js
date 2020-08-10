import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import './furo-api-fetch.js';
import { Env } from '@furo/framework';
import { AgentHelper } from './lib/AgentHelper.js';

/**
 * `furo-entity-agent` is an interface component to handle entity requests. It analyzes the hateoas data.
 *
 * If you want to send all data on PUT (without filtering readonly fields) set `Env.api.sendAllDataOnMethodPut = true;`
 *
 * @summary interface component to handle entity requests
 * @customElement
 * @demo demo-furo-entity-agent Basic usage
 * @appliesMixin FBP
 */
class FuroEntityAgent extends FBP(LitElement) {
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

    // HTS aus response anwenden
    this._FBPAddWireHook('--responseParsed', r => {
      if (this._updateInternalHTS(r.links)) {
        /**
         * @event response-hts-updated
         * Fired when
         * detail payload: hts
         */
        const customEvent = new Event('response-hts-updated', { composed: true, bubbles: true });
        customEvent.detail = r.links;
        this.dispatchEvent(customEvent);
      }
    });

    this._singleElementQueue = []; // queue for calls, before hts is set
    this._queryParams = {};
    this._specDefinedQPs = {};
  }

  static get properties() {
    return {
      /**
       * Name des Services
       */
      service: { type: String, attribute: true },
      /**
       * triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
       */
      loadOnHtsIn: { type: Boolean, attribute: 'load-on-hts-in' },
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

  /**
   * Binds a furo-data-object type. Use this if you want save data.
   *
   * @param dataObject
   */
  bindRequestData(dataObject) {
    this._requestDataObject = dataObject;
  }

  /**
   * Prepare request body depending from method
   * @param link
   * @param dataObject
   * @private
   */
  _prepareRequestPaylod(link, dataObject) {
    let body = {};

    /**
     * Check if dataObject is set
     * if TRUE => body object create
     * - Method PATCH: _deltaValue
     * - Method PUT: _transmitValue or sendAllDataOnMethodPut
     *
     * ELSE => @return undefined
     */
    if (dataObject) {
      // Method PATCH sends only modified data (.pristine)
      if (link.method.toLowerCase() === 'patch') {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const index in dataObject.__childNodes) {
          const field = dataObject.__childNodes[index];
          const val = field._deltaValue;
          if (val !== undefined) {
            if (typeof val === 'object' && !Array.isArray(val)) {
              body[field._name] = {};
              // eslint-disable-next-line guard-for-in,no-restricted-syntax
              for (const key in val) {
                if (val[key] !== null) {
                  body[field._name][key] = val[key];
                }
              }
            } else {
              body[field._name] = val;
            }
          }
        }
        // the request object MUST contain a field named 'update_mask'
        if (
          !this._ApiEnvironment.specs[
            this._service.services.Update.data.request
            // eslint-disable-next-line no-prototype-builtins
          ].fields.hasOwnProperty('update_mask')
        ) {
          // eslint-disable-next-line no-console
          console.warn(
            `The request type ${
              this._ApiEnvironment.specs[this._service.services.Update.data.request].name
            } has no specified field (update_mask) to transmit the changed fields. The operation applies to all fields!`,
            this._ApiEnvironment.specs[this._service.services.Update.data.request],
            this,
          );
        }
        // add the field_mask
        body.update_mask = {"paths":this._getFieldMask(body)};
      } else if (Env.api.sendAllDataOnMethodPut && link.method.toLowerCase() === 'put') {
        body = dataObject._value;
      } else {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const index in dataObject.__childNodes) {
          const field = dataObject.__childNodes[index];
          const val = field._transmitValue;
          if (val !== undefined) {
            body[field._name] = val;
          }
        }
      }

      return JSON.stringify(body);
    }
    return undefined;
  }

  /**
   * clear the query params that you have setted before
   */
  clearQp() {
    this._queryParams = {};
  }

  /**
   * Creates a Request object with header and body data
   * - special treatment for method PATCH
   * - body object only includes writeable fields
   * @param link
   * @param dataObject
   * @returns {Request}
   * @private
   */
  // eslint-disable-next-line no-unused-vars
  _makeRequest(link, dataObject, abortController) {
    this._FBPTriggerWire('--beforeRequestStart');

    /**
     * Preparation of the request payload
     * @type {string}
     */
    const data = this._prepareRequestPaylod(link, dataObject);

    // create Request object with headers and body
    const headers = new Headers(this._ApiEnvironment.headers);
    if (data) {
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
    const qp = AgentHelper.rebuildQPFromParams(params, this._specDefinedQPs);
    // generate req
    const req = AgentHelper.generateReq(link, qp);

    /**
     * The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     * @type {AbortController}
     * @private
     */
    this._abortController = abortController || new AbortController();
    const { signal } = this._abortController;

    return new Request(req, {
      signal,
      method: link.method,
      headers,
      body: data,
    });
  }

  /**
   * Creates an array with the path information of the object attributes (deep dive)
   * according to https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto
   *
   * `{"paths":["attr1","attr2.sub_attr"]}`
   *
   * @param obj
   * @returns {Array}
   * @private
   */
  _getFieldMask(obj) {
    const paths = [];

    const flat = this._flattenObject(obj);

    const keys = Object.keys(flat);
    keys.forEach(k => {
      paths.push(k);
    });
    return paths;
  }

  /**
   * Object flattening method
   * @param obj
   * @returns {{}}
   * @private
   */
  _flattenObject(obj) {
    const result = {};
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const i in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj.hasOwnProperty(i)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
        const flatObject = this._flattenObject(obj[i]);
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const x in flatObject) {
          // eslint-disable-next-line no-prototype-builtins
          if (!flatObject.hasOwnProperty(x)) {
            // eslint-disable-next-line no-continue
            continue;
          }
          result[`${i}.${x}`] = flatObject[x];
        }
      } else {
        result[i] = obj[i];
      }
    }
    return result;
  }

  /**
   * @event load-success
   * Fired when load was successful
   * detail payload: response
   */

  /**
   * @event load-failed
   * Fired when load was not successful
   * detail payload: response
   */

  /**
   * loads the entity if hts is available
   */
  load() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(this, 'self', 'Get');
    if (!hts) {
      const customEvent = new Event('missing-hts-self', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return false;
    }
    this._attachListeners('load');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts));
    return true;
  }

  /**
   * @event delete-success
   * Fired when load was successful
   * detail payload: response
   */

  /**
   * @event delete-failed
   * Fired when load was not successful
   * detail payload: response
   */

  /**
   * delete the entity if hts is available
   */
  delete() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(this, 'delete', 'Delete');
    if (!hts) {
      const customEvent = new Event('missing-hts-delete', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners('delete');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts));
  }

  /**
   * @event save-success
   * Fired when load was successful
   * detail payload: response
   */

  /**
   * @event save-failed
   * Fired when load was not successful
   * detail payload: response
   */

  /**
   * loads the entity if hts is available
   */
  save() {
    // if no rel self is present but a rel create exists, take create
    // rel self is consciously chosen
    const htsSelf = this._hts.find(link => link.rel === 'self');
    const htsCreate = this._hts.find(link => link.rel === 'create');

    if (!htsSelf && htsCreate) {
      return this.create();
    }

    const hts = AgentHelper.checkServiceAndHateoasLinkError(this, 'update', 'Update');
    if (!hts) {
      const customEvent = new Event('missing-hts-update', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return new Error('HATEOAS update is not available');
    }

    this._attachListeners('save');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts, this._requestDataObject));

    return true;
  }

  /**
   * @event put-success
   * Fired when update was successful
   * detail payload: response
   */

  /**
   * @event put-failed
   * Fired when update was not successful
   * detail payload: response
   */

  /**
   * saves the entity with method put if hts is available
   */
  put() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(this, 'update', 'Update');
    if (!hts) {
      const customEvent = new Event('missing-hts-update', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners('put');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts, this._requestDataObject));
  }

  /**
   * @event create-success
   * Fired when creating was successful
   * detail payload: response
   */

  /**
   * @event create-failed
   * Fired when creating was not successful
   * detail payload: response
   */

  /**
   * creating the entity if hts rel="create" is available
   */
  create() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(this, 'create', 'Create');
    if (!hts) {
      const customEvent = new Event('missing-hts-create', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners('create');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts, this._requestDataObject));
  }

  /**
   * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
   * @param eventPrefix
   * @private
   */
  _attachListeners(eventPrefix) {
    const success = e => {
      // we do not want req-success and req-failed outside of this component
      e.stopPropagation();
      const customEvent = new Event(`${eventPrefix}-success`, { composed: true, bubbles: true });
      customEvent.detail = e.detail;
      this.dispatchEvent(customEvent);

      // remove listeners
      this.removeEventListener('req-success', success, true);
      // eslint-disable-next-line no-use-before-define
      this.removeEventListener('req-failed', failed, true);
    };

    let failed = e => {
      // append error to the _requestDataObject (set the fields invalid)
      const err = e.detail;
      if (err.error && err.details) {
        err.details.forEach(errorSet => {
          if (errorSet.field_violations) {
            errorSet.field_violations.forEach(error => {
              const path = error.field.split('.');
              if (path.length > 0) {
                // rest wieder in error reinwerfen
                // eslint-disable-next-line no-param-reassign
                error.field = path.slice(1).join('.');
                if (this._requestDataObject[path[0]]) {
                  this._requestDataObject[path[0]]._setInvalid(error);
                } else {
                  // eslint-disable-next-line no-console
                  console.warn('Unknown field', path);
                }
              }
            });
          }
        });
      }

      // we do not want req-success and req-failed outside of this component
      e.stopPropagation();
      const customEvent = new Event(`${eventPrefix}-failed`, { composed: true, bubbles: true });
      customEvent.detail = e.detail;
      this.dispatchEvent(customEvent);

      // remove listeners
      this.removeEventListener('req-success', success, true);
      this.removeEventListener('req-failed', failed, true);
    };
    /**
     * do not add the listener directly to response, otherwise it kicks in before hts is updated
     * This extra "loop" is to guarante the order of handling the events
     */
    this.addEventListener('req-success', success, true);
    this.addEventListener('req-failed', failed, true);
  }

  _updateInternalHTS(hts) {
    // convert link object to hts array
    if (hts && hts.rel && hts.method && hts.type && hts.href) {
      // eslint-disable-next-line no-param-reassign
      hts = [hts];
    }

    if (hts && Array.isArray(hts)) {
      this._hts = [];
      hts.forEach(link => {
        this._hts.push(link);
      });
      /**
       * @event hts-updated
       * Fired when hateoas is updated from response
       * detail payload: {Array|HATEOAS}
       */
      const customEvent = new Event('hts-updated', { composed: true, bubbles: false });
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);
      return true;
    }
    return false;
  }

  htsIn(hts) {
    if (this._updateInternalHTS(hts)) {
      /**
       * @event hts-injected
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */
      const customEvent = new Event('hts-injected', { composed: true, bubbles: false });
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);

      if (this.loadOnHtsIn) {
        this.load();
      }

      // there was a list,last,next call before the hts was set
      if (this._singleElementQueue.length > 0) {
        this._singleElementQueue.pop();
        this.load();
      }
    }
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @return {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-api-fetch
        ƒ-invoke-request="--triggerLoad"
        ƒ-abort-request="--abortDemanded"
        @-response="--responseParsed, --requestFinished, ^^req-success"
        @-response-error="^^req-failed, --requestFinished"
        @-parse-error="^^req-failed, --requestFinished"
        @-fatal-error="--requestFinished"
      >
      </furo-api-fetch>
    `;
  }
}

window.customElements.define('furo-entity-agent', FuroEntityAgent);
