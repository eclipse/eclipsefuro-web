import { LitElement, html } from 'lit';
import { FBP } from '@furo/fbp';
import './furo-api-fetch.js';

import { Env } from '@furo/framework';
import { AgentHelper } from './lib/AgentHelper.js';

/**
 * `furo-collection-agent` is an interface component to handle collection requests.
 *
 *
 * ```html
 * <furo-collection-agent
 *    service="Servicename"
 *    fn-hts-in="--hts"></furo-collection-agent>
 *
 * <!-- produces a hateoas link array -->
 * <furo-deep-link
 *     service="Servicename" at-hts-out="--hts"></furo-deep-link>
 *
 * ```
 *
 *
 *
 * *before you can do any requests, the service and the HATEOAS must be defined*
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
 * @fires {hts} response-hts-updated -  Fired when the hts was updated by the received response.
 * @fires {} filter-changed -  Fired when filter was updated with `fn-set-filter`.
 * @fires {Array|HATEOAS} hts-updated -  Fired when hateoas was updated from response.
 * @fires {Hateoas links} hts-injected -  Fired when hateoas was updated
 * @fires request-aborted - Fired if the request was successfully cancelled
 *
 * @summary interface component to handle collection requests
 * @customElement
 * @demo demo-furo-collection-agent Basic usage
 * @appliesMixin FBP
 */
class FuroCollectionAgent extends FBP(LitElement) {
  constructor() {
    super();
    /**
     * easy access to the services
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
    this.addEventListener('req-aborted', failed, true);
  }

  static get properties() {
    return {
      /**
       * The service name from the specs.
       * @type String
       */
      service: { type: String, attribute: true },
      /**
       * Sets pagination size in the List request.
       *
       * Only useful if your service supports pagination.
       * @type Number
       */
      pageSize: { type: Number, attribute: 'page-size' },
      /**
       * Comma separated list of fields (like a fieldmask)
       * used for partial representation / partial responses.
       *
       * If your services supports this feature, you will receive a subset of the fields.
       * @type String
       */
      fields: { type: String, attribute: true },
      /**
       * Sorting order
       *
       * order-by="foo,-bar"  means foo asc and bar desc
       *
       * https://cloud.google.com/apis/design/design_patterns#sorting_order
       *
       * To avoid sql injection errors we do not send any sql like syntax!
       *
       * Only useable if your service has implemented this feature.
       * @type String
       */
      orderBy: { type: String, attribute: 'order-by' },
      /**
       * Set the filter.
       *
       * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.
       *
       * Only useable if your service has implemented this feature.
       * @type String
       */
      filter: { type: String, attribute: true },
      /**
       * Parameter for contextual representations
       *
       * To reduce network traffic, it is sometimes useful to allow the client to limit which parts of the resource the server should return in its responses,
       * returning a view of the resource (i.e. specialized version for dropdowns ) instead of the full resource representation.
       *
       * https://cloud.google.com/apis/design/design_patterns#resource_view
       *
       * view=smallcards
       *
       * Only useable if your service has implemented this feature.
       * @type String
       */
      view: { type: String, attribute: true },
      /**
       * Executes a list when a rel="list" is injected.
       * @type Boolean
       */
      listOnHtsIn: { type: Boolean, attribute: 'list-on-hts-in' },
      /**
       * Executes a loadRel when a rel="XXXX" is injected.
       *
       * You have to set the attributes *rel* and *method* to have this working.
       *
       * This is useful for getting "custom" collections.
       * @type Boolean
       */
      loadRelOnHtsIn: { type: Boolean, attribute: 'load-rel-on-hts-in' },
      /**
       * rel which should be used on load rel
       * @type String
       */
      rel: { type: String, attribute: true },
      /**
       * for compatibility reasons you have to specify the method inside of the service.
       *
       * This attribute should not be needed in future versions, because the rel already contains all relevant information.
       * @type String
       */
      method: { type: String, attribute: true },
    };
  }

  set view(v) {
    this._queryParams.view = v;
  }

  /**
   *
   * Comma separated list of fields (like a fieldmask)
   * used for partial representation / partial responses.
   *
   * If your services supports this feature, you will receive a subset of the fields.
   *
   * @param fields {String} - Comma separated list of fields
   */
  setFields(fields) {
    this.fields = fields;
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
   * Sorting order
   *
   * order-by="foo,-bar"  means foo asc and bar desc
   *
   * https://cloud.google.com/apis/design/design_patterns#sorting_order
   *
   * To avoid sql injection errors we do not send any sql like syntax!
   *
   * Only useable if your service has implemented this feature.
   *
   * @param order {String} - Comma separated list of sort orders
   */
  setOrderBy(order) {
    this.orderBy = order;
  }

  /**
   * clear the setted filter
   */
  clearFilter() {
    this._filter = undefined;
  }

  /**
   * Set the filter.
   *
   * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.
   *
   * Only useable if your service has implemented this feature.
   *
   * @param filterstring {String} - String for your filter.
   */
  setFilter(filterstring) {
    this.filter = filterstring;
  }

  /**
   * Set the filter.
   *
   * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.
   *
   * Only useable if your service has implemented this feature.
   *
   * @param filterstring {String} - String for your filter.
   */
  set filter(filterstring) {
    this._filter = filterstring;
    const customEvent = new Event('filter-changed', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * Sets pagination size in the List request.
   *
   * Only useful if your service supports pagination.
   *
   * @param size {Number} - requested size of a page.
   */
  setPageSize(size) {
    this.pageSize = size;
  }

  /**
   * Setze den Service
   * @param service {String} -
   */
  set service(service) {
    this._requestedService = service;
    if (!this._servicedefinitions[service]) {
      // eslint-disable-next-line no-console
      console.warn(
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
    // set pagination defaults
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
   * Set query params
   * All existing query params are replaced by the transferred parameters
   * If the transferred object is empty, all the values will be removed!
   * The AgentHelper fires a qp-set event after the query params are replaced.
   * @param {Object} key value pairs
   */
  setQp(qp) {
    AgentHelper.setQp(this, qp);
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
   * @param body
   * @return {Request}
   * @private
   */
  _makeRequest(link, dataObject) {
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
      ['prev', 'first', 'next', 'last'].indexOf(link.rel.toLowerCase()) >= 0
        ? 'get'
        : link.rel.toLowerCase();

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

    /**
     * ?fields="id,foo,bar"
     * Partial Response
     */
    if (this.fields) {
      params.fields = this.fields.split(' ').join('');
    }

    /**
     * ?order_by="foo desc,bar"
     * Lets client specify sorting order for list results
     */
    if (this.orderBy) {
      params.order_by = this.orderBy.split(' ').join('');
    }

    /**
     * ?filter=[["id","eq","1"]]"
     * The response message will be filtered by the fields before being sent back to the client.
     */
    if (this._filter) {
      if (typeof this._filter !== 'string') {
        params.filter = JSON.stringify(this._filter);
      } else {
        params.filter = this._filter;
      }
    }

    /**
     * ?page_size=15
     * use this field to specify the maximum number of results to be returned by the server.
     * The server may further constrain the maximum number of results returned in a single page.
     * If the page_size is 0, the server will decide the number of results to be returned.
     */
    if (this.pageSize) {
      params.page_size = JSON.stringify(this.pageSize);
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
   * If HATEOAS is present, the wire --triggerLoad is fired with the
   * corresponding request object as payload.
   * @param rel
   * @param serviceName
   * @private
   */
  _followRelService(rel, serviceName) {
    const responseType = this._service.services[serviceName].data.response;
    this._evaluateLinksField(Env.api.specs[responseType].fields);

    const hts = AgentHelper.checkServiceAndHateoasLinkError(
      this,
      rel,
      serviceName
    );
    if (!hts) {
      const customEvent = new Event(`missing-hts-${rel}`, {
        composed: true,
        bubbles: false,
      });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners(rel);

    this._FBPTriggerWire(
      '--triggerLoad',
      this._makeRequest(hts, this._requestDataObject)
    );
  }

  /**
   * loads the entity if hts is available
   */
  list() {
    return this._followRelService('list', 'List');
  }

  /**
   * loads the entity if hts is available
   */
  load() {
    return this.list();
  }

  /**
   * loads the entity following the link which is specified on the attribute **rel** if it is available.
   */
  loadRel() {
    return this._followRelService(this.rel, this.method);
  }

  /**
   * search for a term following the link which is specified on the attribute **rel**
   *
   * This will set the query param q and execute the query.
   *
   * @param term
   */
  searchRel(term) {
    this._queryParams.q = term;
    this.loadRel();
  }

  /**
   * search for a term.
   *
   * This will set the query param q and triggers a list()
   *
   * @param term
   */
  search(term) {
    this._attachListeners('search');
    this._queryParams.q = term;
    this._followRelService('list', 'List');
  }

  /**
   * loads the entity if hts is available
   */
  first() {
    this._followRelService('first', 'List');
  }

  /**
   * loads the entity if hts is available
   */
  prev() {
    this._followRelService('prev', 'List');
  }

  /**
   * loads the entity if hts is available
   */
  next() {
    this._followRelService('next', 'List');
  }

  /**
   * loads the entity if hts is available
   */
  last() {
    this._followRelService('last', 'List');
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

  /**
   * Inject HATEOAS links.
   * @param hts
   */
  htsIn(hts) {
    if (this._updateInternalHTS(hts)) {
      const customEvent = new Event('hts-injected', {
        composed: true,
        bubbles: false,
      });
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);

      if (this.listOnHtsIn) {
        this.list();
      }
      if (this.loadRelOnHtsIn) {
        this.loadRel();
      }
      // there was a list,last,next call before the hts was set
      if (this._singleElementQueue.length > 0) {
        const q = this._singleElementQueue.pop();
        this._followRelService(q[0], q[1]);
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
   * @private
   * @return {*}
   */
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
        fn-invoke-request="--triggerLoad"
        fn-abort-request="--abortDemanded"
        at-response="--responseParsed, --requestFinished, ^^req-success"
        at-response-error="^^req-failed, --requestFinished"
        at-request-aborted="^^req-aborted"
        at-parse-error="^^req-failed, --requestFinished"
        at-fatal-error="--requestFinished"
      >
      </furo-api-fetch>
    `;
  }
}

customElements.define('furo-collection-agent', FuroCollectionAgent);
