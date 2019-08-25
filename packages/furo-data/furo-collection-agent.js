import {LitElement, html} from 'lit-element';
import {FBP} from '@furo/fbp';
import './furo-api-fetch.js';

import {Env} from "@furo/framework"

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
 *
 * @customElement
 * @appliesMixin FBP
 * @demo demo/collection.html
 */
class furoCollectionAgent extends FBP(LitElement) {

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

    // HTS aus response anwenden
    this._FBPAddWireHook("--responseParsed", (r) => {
      if (this._updateInternalHTS(r.links)) {
        /**
         * @event response-hts-updated
         * Fired when
         * detail payload: hts
         */
        let customEvent = new Event('response-hts-updated', {composed: true, bubbles: true});
        customEvent.detail = r.links;
        this.dispatchEvent(customEvent);
      }
    });

    this._singleElementQueue = []; //queue for calls, before hts is set
    this._queryParams = {};
  }

  static get properties() {
    return {
      /**
       * The service name. Like ProjectService
       */
      service: {type: String, attribute: true},
      pageSize: {type: Number, attribute: "page-size"},
      fields: {type: String, attribute: true},
      orderBy: {type: String, attribute: "order-by"},
      filter: {type: Array, attribute: true},
      view: {type: String, attribute: true},
      listOnHtsIn: {type: Boolean, attribute: "list-on-hts-in"},
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
      this.filter = filterstring
    }

  }

  set filter(f) {
    this._filter = f;
    /**
     * @event filter-updated
     * Fired when filter was updated with ƒ-set-filter
     * detail payload:
     */
    let customEvent = new Event('filter-changed', {composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent)
  }

  // Gewünschte Seite. Tipp: Folge dem HATEOAS

  // Seitengrösse  page_size

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
      console.error("service " + service + " does not exist", this, "Available Services:", this._servicedefinitions);
      return;
    }
    this._service = this._servicedefinitions[service];

    if (this._service.lifecycle && this._service.lifecycle.deprecated) {
      console.warn("You are using a deprecated service (" + service + ") " + this._service.lifecycle.info);
    }
    // set pagination defaults
  }

  bindRequestObject(entityTree) {
    this._entityTree = entityTree;
  }

  /**
   * Update query params
   * a qp like {"active":true} will just update the qp *active*
   *
   * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
   * @param {Object} key value pairs
   */
  updateQp(qp){
    let qpChanged = false;
    for(let key in qp){
      if (qp.hasOwnProperty(key)) {
        if(this._queryParams[key] != qp[key]){
          qpChanged = true;
        }
        this._queryParams[key] = qp[key];
      }
    }

    if(qpChanged){
      /**
      * @event qp-changed
      * Fired when query params changed
      * detail payload: qp
      */
      let customEvent = new Event('qp-changed', {composed:true, bubbles: true});
      customEvent.detail = this._queryParams;
      this.dispatchEvent(customEvent)
    }

  }

  _makeRequest(link, body) {
    let data;
    if (body) {
      data = JSON.stringify(body)
    }
    // Daten
    let headers = new Headers(this._ApiEnvironment.headers);
    headers.append('Content-Type', 'application/' + link.type + '+json');
    headers.append('Content-Type', 'application/json');

    let params = {};
    let r = link.href.split("?");
    let req = r[0];
    // add existing params from href
    if (r[1]) {
      r[1].split("&").forEach((p) => {
        let s = p.split("=");
        params[s[0]] = s[1];
      });
    }

    // append query params

    // query params

    for (let key in this._queryParams) {
      if (this._queryParams.hasOwnProperty(key)) {
        params[key] = this._queryParams[key];
      }
    }


    // Fields
    if (this.fields) {
      params.fields = this.fields.split(' ').join('');
    }

    // Sort
    if (this.orderBy) {
      params.order_by = this.orderBy.split(' ').join('');
    }

    // Filter
    if (this._filter) {
      params.filter = JSON.stringify(this._filter);
    }

    // rebuild req
    let qp = [];
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        qp.push(key + "=" + params[key]);
      }
    }
    if (qp.length > 0) {
      req = req + "?" + qp.join("&");
    }

    return new Request(req, {
      method: link.method,
      headers: headers,
      body: data
    })
  }

  _checkServiceAndHateoasLinkError(rel, serviceName) {
    // check Service Get
    if (!this._service.services[serviceName]) {
      // todo fehler werfen ???
      console.warn("Restlet " + serviceName + " is not specified", this._service, this);
      return true;
    }

    //queue if no hts is set, queue it
    if (!this._hts) {
      this._singleElementQueue = [[rel, serviceName]];
      return true;
    }
    // check Hateoas
    if (!this._hts[rel]) {
      console.warn("No HATEOAS for rel self", this._hts, this);
      return true;
    }
    return false;
  }

  _followRelService(rel, serviceName) {
    if (this._checkServiceAndHateoasLinkError(rel, serviceName)) {
      return;
    }
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts[rel]));
  }

  /**
   * loads the entity if hts is available
   */
  list() {
    this._followRelService("list", "List");
  }

  search(term) {
    if(term !== ""){
      this._queryParams.q = term;
      this.list();
    }else{
      delete this._queryParams.q;
    }

  }

  /**
   * loads the entity if hts is available
   */
  first() {
    this._followRelService("first", "List");
  }


  /**
   * loads the entity if hts is available
   */
  prev() {
    this._followRelService("prev", "List");
  }


  /**
   * loads the entity if hts is available
   */
  next() {
    this._followRelService("next", "List");
  }

  /**
   * loads the entity if hts is available
   */
  last() {
    this._followRelService("last", "List");
  }


  _updateInternalHTS(hts) {
    // convert link object to hts array
    if (hts && hts.rel && hts.method && hts.type && hts.href) {
      hts = [hts];
    }

    if (hts && hts[0] && hts[0].rel) {
      this._hts = {};
      hts.forEach((link) => {
        this._hts[link.rel] = link
      });
      /**
       * @event hts-updated
       * Fired when hateoas is updated from response
       * detail payload: {Array|HATEOAS}
       */
      let customEvent = new Event('hts-updated', {composed: true, bubbles: false});
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);
      return true;
    }
    return false;
  }

  htsIn(hts) {
    if (this._updateInternalHTS(hts)) {
      /**
       * @event hts-updated
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */
      let customEvent = new Event('hts-injected', {composed: true, bubbles: false});
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);

      if (this.listOnHtsIn) {
        this.list();
      }
      // there was a list,last,next call before the hts was set
      if (this._singleElementQueue.length > 0) {
        let q = this._singleElementQueue.pop();
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
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed">
      </furo-api-fetch>
    `;
  }

}

customElements.define('furo-collection-agent', furoCollectionAgent);
