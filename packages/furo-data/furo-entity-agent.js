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
      service: {type: String, attribute: true}
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
    this._entityTree = dataObject;
  }


  _makeRequest(link, body) {
    let data;
    if (body) {
      data = JSON.stringify(body)
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

  _checkServiceAndHateoasLinkError(rel, serviceName) {
    // check Service Get
    if (!this._service.services[serviceName]) {
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
      console.warn("No HATEOAS for rel " + rel, this._hts, this);
      return true;
    }
    return false;
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
    if (this._checkServiceAndHateoasLinkError("self", "Get")) {
      return false;
    }
    this._attachListeners("load");
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.self));

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
    if (this._checkServiceAndHateoasLinkError("delete", "Delete")) {
      return;
    }
    this._attachListeners("delete");
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.delete));

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
    // wen kein rel self vorhanden ist, aber ein rel create existiert, verwendenn wir create
    // rel self ist bewusst gewählt
    if (!this._hts["self"] && this._hts["create"]) {
      this.create();
      return;
    }
    if (this._checkServiceAndHateoasLinkError("update", "Update")) {
      let customEvent = new Event( 'missing-hts-update', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent);
      return;
    }

    this._attachListeners("save");
    // TODO nur modifizierte daten senden (.pristine)
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.update, this._entityTree.rawData));

  }

  /**
   * @event create-success
   * Fired when load was successful
   * detail payload: response
   */

  /**
   * @event create-failed
   * Fired when load was not successful
   * detail payload: response
   */

  /**
   * loads the entity if hts is available
   */
  create() {
    if (this._checkServiceAndHateoasLinkError("create", "Create")) {
      return
    }
    this._attachListeners("create");
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.create, this._entityTree.rawData));

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
       * @event hts-injected
       * Fired when hateoas is updated
       * detail payload: Hateoas links
       */
      let customEvent = new Event('hts-injected', {composed: true, bubbles: false});
      customEvent.detail = hts;
      this.dispatchEvent(customEvent);

      // there was a list,last,next call before the hts was set
      if (this._singleElementQueue.length > 0) {
        let q = this._singleElementQueue.pop();
        this._followRelService(q[0], q[1]);
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
              @-response-error="^^req-failed">
      </furo-api-fetch>
    `;
  }


}

window.customElements.define('furo-entity-agent', FuroEntityAgent);
