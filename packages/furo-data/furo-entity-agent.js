import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import "./furo-api-fetch"
import {Env} from "@furo/framework"

/**
 * `furo-entity-agent` is an interface component to handle entity requests. It analyzes the hateoas data.
 *
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class FuroEntityAgent extends FBP(LitElement) {


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

  }

  static get properties() {
    return {
      /**
       * Name des Services
       */
      service: {type: String, attribute: true},
      /**
       * triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
       */
      loadOnHtsIn: {type: Boolean, attribute: "load-on-hts-in"},
    };
  }

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
   * Creates a Request object with header and body data
   * - special treatment for method PATCH
   * - body object only includes writeable fields
   * @param link
   * @param dataObject
   * @returns {Request}
   * @private
   */
  _makeRequest(link, dataObject) {
    let data;
    let body = {};
    // check if dataObject is set and create body object
    if (dataObject) {
      // Method PATCH sends only modified data (.pristine)
      if (link.method.toLowerCase() === 'patch'){
        for (let index in dataObject.__childNodes) {
          let field = dataObject.__childNodes[index];
          let val = field._modified_value;
          if (val !== undefined) {body[field._name] = val}
        }
      } else {
        for (let index in dataObject.__childNodes) {
          let field = dataObject.__childNodes[index];
          let val = field._not_readonly_value;
          if (val !== undefined) {body[field._name] = val}
        }
      }
      data = JSON.stringify(body);
    }
    // Daten
    let headers = new Headers(this._ApiEnvironment.headers);
    headers.append('Content-Type', 'application/' + link.type + '+json');

    if (link.method.toLowerCase() !== 'put') {
      headers.append('Content-Type', 'application/json');
    }
    return new Request(link.href, {
      method: link.method,
      headers: headers,
      body: data
    })
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
      console.warn("Service " + serviceName + " is not specified", this._service, this);
      return undefined;
    }

    //queue if no hts is set, queue it
    if (!this._hts) {
      this._singleElementQueue = [[rel, serviceName]];
      return undefined;
    }
    // check rel and type
    let htsFound = this._hts.find((link) => {
      if (link.rel === rel && link.service === this._service.name){
        return link;
      }
    });
    if (!htsFound) {
      console.warn("No HATEOAS for rel " + rel + " in service " + this._service.name + " found.", this._hts, this);
      return undefined;
    }
    return htsFound;
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
    let hts = this._checkServiceAndHateoasLinkError('self', 'Get');
    if (!hts) {
      let customEvent = new Event( 'missing-hts-self', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent);
      return false;
    }
    this._attachListeners('load');
    this._FBPTriggerWire('--triggerLoad', this._makeRequest(hts));

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
    let hts = this._checkServiceAndHateoasLinkError('delete', 'Delete');
    if (!hts) {
      let customEvent = new Event( 'missing-hts-delete', {composed: true, bubbles: false});
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
    let hts_self = this._hts.find((link) =>{
      if (link.rel === 'self') return link;
    });
    let hts_create = this._hts.find((link) =>{
      if (link.rel === 'create') return link;
    });

    if (!hts_self && hts_create) {
      this.create();
      return;
    }

    let hts = this._checkServiceAndHateoasLinkError('update', 'Update');
    if (!hts) {
      let customEvent = new Event( 'missing-hts-update', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent);
      return;
    }

    this._attachListeners("save");
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(hts, this._requestDataObject));

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
    let hts = this._checkServiceAndHateoasLinkError('update', 'Update');
    if (!hts) {
      let customEvent = new Event( 'missing-hts-update', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners("put");
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(hts, this._requestDataObject));
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
    let hts = this._checkServiceAndHateoasLinkError('create', 'Create');
    if (!hts) {
      let customEvent = new Event( 'missing-hts-create', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent);
      return;
    }
    this._attachListeners("create");
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(hts, this._requestDataObject));
  }

  /**
   * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
   * @param eventPrefix
   * @private
   */
  _attachListeners(eventPrefix) {
    let success = (e) => {
      // we do not want req-success and req-failed outside of this component
      e.stopPropagation();
      let customEvent = new Event(eventPrefix + '-success', {composed: true, bubbles: true});
      customEvent.detail = e.detail;
      this.dispatchEvent(customEvent);

      // remove listeners
      this.removeEventListener("req-success", success, true);
      this.removeEventListener("req-failed", failed, true);

    };

    let failed = (e) => {

      // append error to the _requestDataObject (set the fields invalid)
      let err = e.detail;
      if (err.error && err.details) {
        err.details.forEach((errorSet) => {
          if (errorSet["field_violations"]) {

            errorSet["field_violations"].map((error) => {
              let path = error.field.split(".");
              if (path.length > 0) {
                // rest wieder in error reinwerfen
                error.field = path.slice(1).join(".");
                if (this._requestDataObject[path[0]]) {
                  this._requestDataObject[path[0]]._setInvalid(error);
                } else {
                  console.warn("Unknown field", path)
                }
              }
            });
          }
        });
      }


      // we do not want req-success and req-failed outside of this component
      e.stopPropagation();
      let customEvent = new Event(eventPrefix + '-failed', {composed: true, bubbles: true});
      customEvent.detail = e.detail;
      this.dispatchEvent(customEvent);


      // remove listeners
      this.removeEventListener("req-success", success, true);
      this.removeEventListener("req-failed", failed, true);
    };
    /**
     * do not add the listener directly to response, otherwise it kicks in before hts is updated
     * This extra "loop" is to guarante the order of handling the events
     */
    this.addEventListener("req-success", success, true);
    this.addEventListener("req-failed", failed, true);
  }

  _updateInternalHTS(hts) {
    // convert link object to hts array
    if (hts && hts.rel && hts.method && hts.type && hts.href) {
      hts = [hts];
    }

    if (hts && Array.isArray(hts)) {
      this._hts = [];
      hts.forEach((link) => {
        this._hts.push(link);
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
       * @event hts-injected
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */
      let customEvent = new Event('hts-injected', {composed: true, bubbles: false});
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
    `
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
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed,^^req-success"
              @-response-error="^^req-failed"
              @-parse-error="^^req-failed">
      </furo-api-fetch>
    `;
  }


}

window.customElements.define('furo-entity-agent', FuroEntityAgent);
