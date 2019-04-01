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
class CustomMethod extends FBP(LitElement) {


    constructor() {
        super();
        this._servicedefinitions = window.Env.services;
        this._ApiEnvironment = window.Env.api;

    }

    static get properties() {
        return {
            /**
             * Name des Services
             */
            service: {type: String, attribute: true},
            /**
             * Name der Methode
             */
            method: {type: String, attribute: true}
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

    bindData(entityTree) {
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
        let s = Object.keys(this._service.services).map((key)=>{
            return key.toLowerCase();
        });

        if (s.indexOf(serviceName.toLowerCase()) === -1) {
            // todo fehler werfen ???
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
     * trigger the method with respect for binded-requset-object
     */
    trigger() {

        if(this._entityTree){
            this.triggerWithBody(this._entityTree.rawData);
        }else{
            this.triggerEmpty();
        }
    }

    triggerEmpty(){
        if(this._checkServiceAndHateoasLinkError(this.method,this.method)){
            return;
        }
        this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts[this.method]));
    }
    /**
     * trigger the method with data
     */
    triggerWithBody(body) {

        if(this._checkServiceAndHateoasLinkError(this.method,this.method)){
            return;
        }

        this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts[this.method],body));
    }


    htsIn(hts) {
        if (hts && hts[0] && hts[0].rel) {
            this._hts = {};
            hts.forEach((link) => {
                this._hts[link.rel] = link
            });

            /**
            * @event hts-updated
            * Fired when
            * detail payload:
            */
            let customEvent = new Event('hts-updated', {composed:true, bubbles: true});
            customEvent.detail = hts;
            this.dispatchEvent(customEvent)
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

window.customElements.define('custom-method', CustomMethod);
