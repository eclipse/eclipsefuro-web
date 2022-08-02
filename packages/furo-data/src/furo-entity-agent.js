import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import './furo-api-fetch.js';
import { Env } from '@furo/framework';
import { AgentHelper } from './lib/AgentHelper.js';

/**
 * `furo-entity-agent` is an interface component to handle entity requests.
 *
 * > **Note** When you trigger the save method and there is a HTS wich allows to PATCH the record, only the deltas (changes) of
 * > the values are sent.
 *
 * > **Hint** PUT will send all fields which are not marked as **readonly**.
 * > If you want to send all data on PUT (without filtering readonly fields) set `Env.api.sendAllDataOnMethodPut = true;`
 *
 * ```html
 * <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in at-response to the furo-data-object.  -->
 * <furo-entity-agent
 *   service="ProjectService"
 *   fn-hts-in="--hts" at-response="--response"
 *   ></furo-entity-agent>
 *
 *
 * <!-- The furo-data-object will send a initial dataObject of type project.Project on at-response-ready -->
 * <furo-data-object
 *   type="project.ProjectEntity"
 *   fn-inject-raw="--response"
 *   ></furo-data-object>
 * ```
 *
 *
 *
 * @fires {hts} response-hts-updated -  Fired when hts was updated from the response.
 * @fires {response} load-success -  Fired when `load()` was successful.
 * @fires {response} load-failed -  Fired when `load()` was **not** successful.
 * @fires {response} delete-success -  Fired when `delete()` was successful.
 * @fires {response} delete-failed -  Fired when `delete()` was **not** successful.
 * @fires {response} save-success -  Fired when `save()` was successful.
 * @fires {response} save-failed -  Fired when `save()` was **not** successful.
 * @fires {response} put-success -  Fired when `update()` was successful.
 * @fires {response} put-failed -  Fired when `update()` was **not** successful.
 * @fires {response} create-success -  Fired when `create()` was successful.
 * @fires {response} create-failed -  Fired when `create()` was **not** successful.
 * @fires {{Array|HATEOAS}} hts-updated -  Fired when hateoas is updated from response.
 * @fires {Hateoas links} hts-injected -  Fired when hateoas is updated.
 * @fires {} request-aborted -  Fired if the request was successfully cancelled.
 *
 * @fires {Request} request-aborted - Fired when a request was canceled.
 * @fires {Request} request-started - Fired when a request is sent.
 * @fires {Object} response-raw - Fired when a response is received.
 * @fires {Object}  response-error - Fired when an error has occoured. This is a general error event. The specific error events are fired additionally.
 * @fires {Object} response-error-[status-code] - Fired when an error has occoured. This is a specific error event.
 * @fires {Request} fatal-error - Requests are made via the Fetch API if possible.Fallback XMLHttpRequest
 * @fires {Object} response-error-4xx - Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
 * @fires {Object} response-error-5xx - Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
 * @fires {Object} response-error-raw - Fired when a error has occoured.
 * @fires {Object} response - Fired when a response is received.
 *
 * @summary interface component to handle entity requests
 * @customElement
 * @demo demo-furo-entity-agent Basic usage
 * @appliesMixin FBP
 */
class FuroEntityAgent extends FBP(LitElement) {
  constructor() {
    super();
    /**
     * Reference to the services
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
     * This field contains the hts links
     * @type {string}
     * @private
     */
    this._linkField = 'links';

    // HTS aus response anwenden
    this._FBPAddWireHook('--responseParsed', r => {
      if (this._updateInternalHTS(r[this._linkField])) {
        const customEvent = new Event('response-hts-updated', {
          composed: true,
          bubbles: true,
        });
        customEvent.detail = r[this._linkField];
        this.dispatchEvent(customEvent);
      }
    });

    /**
     * queue for calls, before hts is set
     * @type {*[]}
     * @private
     */
    this._singleElementQueue = [];
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
       * @type String
       */
      service: { type: String, attribute: true },
      /**
       * triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
       * @type Boolean
       */
      loadOnHtsIn: { type: Boolean, attribute: 'load-on-hts-in' },
      /**
       * Creates the query param update mask according to the google api design guidelines.
       *
       * Your update service must have a query param **update_mask** to use this feature.
       *
       * https://cloud.google.com/apis/design/standard_methods#update
       *
       * You may not need it if your server can handle PATCHes without a update_mask
       * https://grpc-ecosystem.github.io/grpc-gateway/docs/patch.html
       * @type Boolean
       */
      appendUpdateMaskQP: { type: Boolean, attribute: 'with-update-mask' },
    };
  }

  /**
   * Setze den Service
   * @param service
   */
  set service(service) {
    this._requestedService = service;
    if (!this._servicedefinitions[service]) {
      // eslint-disable-next-line no-console
      console.error(
        `service ${service} does not exist`,
        this,
        'Available Services:',
        this._servicedefinitions
      );
      return;
    }
    this._service = this._servicedefinitions[service];
    if (this._service.lifecycle && this._service.lifecycle.deprecated) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are using a deprecated service (${service}) ${this._service.lifecycle.info}`
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
          // send complete object on type any
          if (field['@type']) {
            body[field._name] = field._value;
          } else if (val !== undefined) {
            // send null if null was set!!
            if (
              val !== null &&
              typeof val === 'object' &&
              !Array.isArray(val)
            ) {
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

        // check for query field update_mask
        // todo: maybe proof one query param for type google.protobuf.FieldMask like grpc-gateway does it would be better
        if (
          this.appendUpdateMaskQP &&
          this._service.services.Update.query.update_mask
        ) {
          // add the field_mask
          this._queryParams.update_mask = this._getFieldMask(body).join(',');
        }
      } else if (
        Env.api.sendAllDataOnMethodPut &&
        link.method.toLowerCase() === 'put'
      ) {
        body = dataObject._value;
      } else if (
        dataObject._spec &&
        dataObject._spec.type === 'google.protobuf.Struct'
      ) {
        // if the data object is from type Struct, set the body to the value of the data object
        // this is necessary because a Struct doesn't have child nodes
        // otherwise, copy only the non-readonly fields to the body
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

      // body = this._removeNullValues(body);
      return JSON.stringify(body);
    }
    return undefined;
  }

  /**
   * remove null value in payload
   * @param data
   * @returns {*}
   * @private
   */
  _removeNullValues(data) {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && value !== null) {
        // eslint-disable-next-line no-param-reassign
        data[key] = this._removeNullValues(value);
      } else if (value === null) {
        // eslint-disable-next-line no-param-reassign
        delete data[key];
      }
    }
    return data;
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

    const REL_NAME =
      link.rel.toLowerCase() === 'self' ? 'get' : link.rel.toLowerCase();

    if (this._ApiEnvironment.services[link.service] === undefined) {
      // eslint-disable-next-line no-console
      console.warn('unknown service', link.service);
    }
    // generate accept field for header
    const ACCEPT = AgentHelper.generateHeaderAccept(
      this,
      this._ApiEnvironment.services[link.service].services,
      REL_NAME
    );

    if (ACCEPT) {
      headers.append('Accept', `${ACCEPT}`);
    }

    // get existing params from href and append query params
    const params = AgentHelper.getParams(this, link);

    // append query params to params
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const p in this._queryParams) {
      params[p] = this._queryParams[p];
    }

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
   * find the first field of type furo.Link and use this for hts-out
   * @param fields
   * @private
   */
  _evaluateLinksField(fields) {
    Object.keys(fields).forEach(field => {
      if (fields[field].type === 'furo.Link') {
        this._linkField = field;
        // eslint-disable-next-line
        return;
      }
    });
  }

  /**
   * loads the entity if hts is available
   */
  load() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(
      this,
      'self',
      'Get'
    );
    // eslint-disable-next-line
    const responseType = this._service.services['Get'].data.response;
    this._evaluateLinksField(Env.api.specs[responseType].fields);

    if (!hts) {
      const customEvent = new Event('missing-hts-self', {
        composed: true,
        bubbles: false,
      });
      this.dispatchEvent(customEvent);
      return false;
    }
    this._attachListeners('load');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts));
    return true;
  }

  /**
   * delete the entity if hts is available
   */
  delete() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(
      this,
      'delete',
      'Delete'
    );
    if (!hts) {
      const customEvent = new Event('missing-hts-delete', {
        composed: true,
        bubbles: false,
      });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners('delete');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts));
  }

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

    const hts = AgentHelper.checkServiceAndHateoasLinkError(
      this,
      'update',
      'Update'
    );
    if (!hts) {
      const customEvent = new Event('missing-hts-update', {
        composed: true,
        bubbles: false,
      });
      this.dispatchEvent(customEvent);
      return new Error('HATEOAS update is not available');
    }

    this._attachListeners('save');
    this._FBPTriggerWire(
      '--triggerLoad',
      this._makeRequest(hts, this._requestDataObject)
    );

    return true;
  }

  /**
   * saves the entity with method put if hts is available
   */
  put() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(
      this,
      'update',
      'Update'
    );
    if (!hts) {
      const customEvent = new Event('missing-hts-update', {
        composed: true,
        bubbles: false,
      });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners('put');
    this._FBPTriggerWire(
      '--triggerLoad',
      this._makeRequest(hts, this._requestDataObject)
    );
  }

  /**
   * creating the entity if hts rel="create" is available
   */
  create() {
    const hts = AgentHelper.checkServiceAndHateoasLinkError(
      this,
      'create',
      'Create'
    );
    if (!hts) {
      const customEvent = new Event('missing-hts-create', {
        composed: true,
        bubbles: false,
      });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners('create');
    this._FBPTriggerWire(
      '--triggerLoad',
      this._makeRequest(hts, this._requestDataObject)
    );
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
      const customEvent = new Event(`${eventPrefix}-success`, {
        composed: true,
        bubbles: true,
      });
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
      if ((err.message || err.code) && err.details) {
        err.details.forEach(errorSet => {
          if (errorSet.field_violations) {
            const fieldViolations = JSON.parse(
              JSON.stringify(errorSet.field_violations)
            );
            if(this._requestDataObject !== undefined){
            fieldViolations.forEach(error => {
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
          }
        });
      }

      // we do not want req-success and req-failed outside of this component
      e.stopPropagation();
      const customEvent = new Event(`${eventPrefix}-failed`, {
        composed: true,
        bubbles: true,
      });
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

  /**
   *
   * @param hts
   * @return {boolean}
   * @private
   */
  _updateInternalHTS(hts) {
    // convert link object to hts array
    if (hts && hts.rel && hts.method && hts.href) {
      // eslint-disable-next-line no-param-reassign
      hts = [hts];
    }

    if (hts && Array.isArray(hts)) {
      this._hts = [];
      hts.forEach(link => {
        this._hts.push(link);
      });
      const customEvent = new Event('hts-updated', {
        composed: true,
        bubbles: false,
      });
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);
      return true;
    }
    return false;
  }

  htsIn(hts) {
    if (this._updateInternalHTS(hts)) {
      const customEvent = new Event('hts-injected', {
        composed: true,
        bubbles: false,
      });
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
   * Aborts a pending request
   */
  abortPendingRequest() {
    if (this._pendingRequests.length) {
      this._FBPTriggerWire('--abortDemanded', this._abortController);
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
        fn-invoke-request="--triggerLoad"
        fn-abort-request="--abortDemanded"
        at-response="--responseParsed, --requestFinished, ^^req-success"
        at-response-error="^^req-failed, --requestFinished"
        at-parse-error="^^req-failed, --requestFinished"
        at-fatal-error="--requestFinished"
      >
      </furo-api-fetch>
    `;
  }
}

window.customElements.define('furo-entity-agent', FuroEntityAgent);
