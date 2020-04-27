import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp';
import './furo-api-fetch.js';

import { Env } from '@furo/framework';

/**
 * `furo-collection-agent` is an interface component to handle collection requests. It helps you with paginating collection data.
 *
 *
 *
 *
 * How to use:
 * ```html
 * <furo-collection-agent ƒ-hts-in="--x"
 *                      service=""
 *                      ƒ-prev-page=""
 *                      ƒ-next-page=""
 *                      ƒ-last-page=""
 *                      ƒ-first-page=""
 *                      ƒ-list="--triggerGetCollection"
 *                      ƒ-hts-in="--hts"
 *                      list-on-hts-in
 *                      @-hts-out="--x"
 *                    >
 * </furo-collection-agent>
 * ```
 * @summary interface component to handle collection requests
 * @customElement
 * @demo demo-furo-collection-agent Basic usage
 * @appliesMixin FBP
 */
class FuroCollectionAgent extends FBP(LitElement) {
  /**
   * @event ALL_BUBBLING_EVENTS_FROM_furo-api-fetch
   *
   * All bubbling events from [furo-api-fetch](furo-api-fetch) will be fired, because furo-collection-agent uses furo-api-fetch internally.
   *
   */

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
    this.addEventListener('req-aborted', failed, true);
  }

  static get properties() {
    return {
      /**
       * The service name. Like ProjectService
       */
      service: { type: String, attribute: true },
      pageSize: { type: Number, attribute: 'page-size' },
      fields: { type: String, attribute: true },
      orderBy: { type: String, attribute: 'order-by' },
      filter: { type: Array, attribute: true },
      view: { type: String, attribute: true },
      listOnHtsIn: { type: Boolean, attribute: 'list-on-hts-in' },
    };
  }

  /**
   * https://cloud.google.com/apis/design/design_patterns
   */

  /**
   * Partielle Repräsentation
   * https://cloud.google.com/apis/design/design_patterns#partial_response
   *
   * etwas seltsam, aber google sieht hier $fields vor. Wird aber nicht so verwendet
   *
   */
  setFields(fields) {
    this.fields = fields;
  }

  /**
   * Sortierreihenfolge
   * https://cloud.google.com/apis/design/design_patterns#sorting_order
   *
   * To avoid sql injection errors we do not send sql like syntax!
   *
   * order-by="foo,-bar"  means foo asc and bar desc
   */
  setOrderBy(order) {
    this.orderBy = order;
  }

  /**
   * clear filter
   */
  clearFilter() {
    this._filter = undefined;
  }

  // Filtern  [["user","eq","12345"], ["abgeschlossen","eq", true]]
  setFilter(filterstring) {
    if (Array.isArray(filterstring)) {
      this.filter = filterstring;
    }
  }

  set filter(f) {
    this._filter = f;
    /**
     * @event filter-changed
     * Fired when filter was updated with ƒ-set-filter
     * detail payload:
     */
    const customEvent = new Event('filter-changed', { composed: true, bubbles: true });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * Sets pagination size in the List request.
   * @param s
   */
  setPageSize(size) {
    this.pageSize = size;
  }

  // Meta für die Anzahl der Elemente der Resource

  /**
   * contextbezogene Darstellung
   *
   * https://cloud.google.com/apis/design/design_patterns#resource_view
   *
   * view=smallcards
   *
   */

  /**
   * Setze den Service
   * @param service
   */
  set service(service) {
    if (!this._servicedefinitions[service]) {
      // eslint-disable-next-line no-console
      console.warn(
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
    let qpChanged = false;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in qp) {
      // eslint-disable-next-line no-prototype-builtins
      if (qp.hasOwnProperty(key)) {
        if (this._queryParams[key] !== qp[key]) {
          qpChanged = true;
        }
        this._queryParams[key] = qp[key];
      }
    }

    if (qpChanged) {
      /**
       * @event qp-changed
       * Fired when query params changed
       * detail payload: qp
       */
      const customEvent = new Event('qp-changed', { composed: true, bubbles: true });
      customEvent.detail = this._queryParams;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * clear the query params that you have setted before
   */
  clearQp() {
    this._queryParams = {};
  }

  _makeRequest(link, body) {
    this._FBPTriggerWire('--beforeRequestStart');

    let data;
    if (body) {
      data = JSON.stringify(body);
    }
    // Daten
    const headers = new Headers(this._ApiEnvironment.headers);
    const TYPE = link.type ? `application/${link.type}+json` : 'application/json';
    headers.append('Content-Type', TYPE);

    const params = {};
    const r = link.href.split('?');
    let req = r[0];
    // add existing params from href
    if (r[1]) {
      r[1].split('&').forEach(p => {
        const s = p.split('=');
        // eslint-disable-next-line prefer-destructuring
        params[s[0]] = s[1];
      });
    }

    /**
     * Append query params
     */
    // eslint-disable-next-line no-restricted-syntax
    for (const key in this._queryParams) {
      // eslint-disable-next-line no-prototype-builtins
      if (this._queryParams.hasOwnProperty(key)) {
        params[key] = this._queryParams[key];
      }
    }

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
      params.filter = JSON.stringify(this._filter);
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

    // rebuild req
    const qp = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in params) {
      // eslint-disable-next-line no-prototype-builtins
      if (params.hasOwnProperty(key)) {
        qp.push(`${key}=${params[key]}`);
      }
    }
    if (qp.length > 0) {
      req = `${req}?${qp.join('&')}`;
    }

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
   * @returns {undefined|object}
   * @private
   */
  _checkServiceAndHateoasLinkError(rel, serviceName) {
    // check Service Get
    if (!this._service.services[serviceName]) {
      // eslint-disable-next-line no-console
      console.warn(`Service ${serviceName} is not specified`, this._service, this);
      return undefined;
    }

    // queue if no hts is set, queue it
    if (!this._hts) {
      this._singleElementQueue = [[rel, serviceName]];
      return undefined;
    }
    // check rel and type
    const htsFound = this._hts.find(
      link => link.rel === rel && link.service === this._service.name,
    );
    if (!htsFound) {
      // eslint-disable-next-line no-console
      console.warn(
        `No HATEOAS for rel ${rel} in service ${this._service.name} found.`,
        this._hts,
        this,
      );
      return undefined;
    }
    return htsFound;
  }

  /**
   * If HATEOAS is present, the wire --triggerLoad is fired with the
   * corresponding request object as payload.
   * @param rel
   * @param serviceName
   * @private
   */
  _followRelService(rel, serviceName) {
    const hts = this._checkServiceAndHateoasLinkError(rel, serviceName);
    if (!hts) {
      const customEvent = new Event(`missing-hts-${rel}`, { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners(rel);
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts));
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

  search(term) {
    if (term !== '') {
      this._queryParams.q = term;
      this.list();
    } else {
      delete this._queryParams.q;
    }
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

      if (this.listOnHtsIn) {
        this.list();
      }
      // there was a list,last,next call before the hts was set
      if (this._singleElementQueue.length > 0) {
        const q = this._singleElementQueue.pop();
        this._followRelService(q[0], q[1]);
      }
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
        @-response="--responseParsed, --requestFinished, ^^req-success"
        @-response-error="^^req-failed"
        @-request-aborted="^^req-aborted"
        @-parse-error="^^req-failed"
        @-fatal-error="--requestFinished"
      >
      </furo-api-fetch>
    `;
  }
}

customElements.define('furo-collection-agent', FuroCollectionAgent);
