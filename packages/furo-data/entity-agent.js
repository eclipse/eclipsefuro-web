import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import "./api-fetch"

/**
 * `entity-agent`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class EntityAgent extends FBP(LitElement) {


  constructor() {
    super();
    this._servicedefinitions = window.Env.services;
    this._ApiEnvironment = window.Env.api;


    // HTS aus response anwenden
    this._FBPAddWireHook("--responseParsed", (r)=>{
      if(Array.isArray(r.links)){
        this.htsIn(r.links);
        /**
         * @event response-hts-updated
         * Fired when hateoas is updated from response
         * detail payload: {Array|HATEOAS}
         */
        let customEvent = new Event('response-hts-updated', {composed:true, bubbles: false});
        customEvent.detail = r.links;
        this.dispatchEvent(customEvent);
      }
    });
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

    if (this._service.general.lifecycle.deprecated) {
      console.warn("You are using a deprecated service (" + service + ") " + this._service.general.lifecycle.info);
    }
  }

  bindRequestObject(entityTree) {
    this._entityTree = entityTree;
  }



  _makeRequest(link, body) {
    let data ;
    if(body){
      data = JSON.stringify(body)
    }
    // Daten
    let headers = new Headers(this._ApiEnvironment.headers);
    headers.append('Content-Type', 'application/' + link.type + '+json');
    headers.append('Content-Type', 'application/json');

    return new Request(link.href, {
      method: link.method,
      headers: headers,
      body:data
    })
  }

  _checkServiceAndHateoasLinkError(rel,serviceName){
      // check Service Get
      if (!this._service.services[serviceName]) {
        console.warn("Restlet " + serviceName + " is not specified", this._service, this);
        return true;
      }

      // check Hateoas
      if (!this._hts[rel]) {
        console.warn("No HATEOAS for rel self", this._hts, this);
        return true;
      }
      return false;
  }

  /**
   * loads the entity if hts is available
   */
  load() {
    if(this._checkServiceAndHateoasLinkError("self","Get")){
      return;
    }

    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.self));

  }

  /**
   * delete the entity if hts is available
   */
  delete() {
    if(this._checkServiceAndHateoasLinkError("delete","Delete")){
      return;
    }

    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.self));

  }

  /**
   * loads the entity if hts is available
   */
  save() {
    // wen kein rel self vorhanden ist, aber ein rel create existiert, verwendenn wir create
    // rel self ist bewusst gewählt
    if (!this._hts["self"]) {
      this.create();
      return;
    }
    if(this._checkServiceAndHateoasLinkError("update","Update")){
      return;
    }

    // TODO nur delta senden
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.update,this._entityTree.rawData));

  }

  /**
   * loads the entity if hts is available
   */
  create() {
    if(this._checkServiceAndHateoasLinkError("create","Create")){
      return
    }

    // TODO nur delta senden
    this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts.create,this._entityTree.rawData));

  }


  htsIn(hts) {
    if (hts && hts[0] && hts[0].rel) {
      this._hts = {};
      hts.forEach((link) => {
        this._hts[link.rel] = link
      });
      /**
       * @event hts-updated
       * Fired when hateoas is updated
       * detail payload:
       */
      let customEvent = new Event('hts-updated', {composed:true, bubbles: false});
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
      <api-fetch
              ƒ-invoke-request="--triggerLoad"
              ƒ-abort-request="--abort-demanded"
              @-response="--responseParsed">
      </api-fetch>
    `;
  }


}

window.customElements.define('entity-agent', EntityAgent);
