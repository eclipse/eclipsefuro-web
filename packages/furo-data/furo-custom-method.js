import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";
import "./furo-api-fetch"
import {Env} from "@furo/framework"

/**
 * `furo-entity-agent`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class FuroCustomMethod extends FBP(LitElement) {


    constructor() {
        super();
        this._servicedefinitions = Env.api.services;
        this._ApiEnvironment = Env.api;

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

        if (this._service.lifecycle && this._service.lifecycle.deprecated) {
            console.warn("You are using a deprecated service (" + service + ") " + this._service.lifecycle.info);
        }
    }

    bindRequestData(dataObject) {
        this._requestDataObject = dataObject;
    }

    _makeRequest(link, dataObject) {
        let data;
        let body = {};
        // check if dataObject is set and create body object
        if (dataObject) {
            for (let index in dataObject.__childNodes) {
                let field = dataObject.__childNodes[index];
                let val = field._not_readonly_value;
                if (val !== undefined) {
                    body[field._name] = val
                }
            }
            data = JSON.stringify(body);
        }
        // Daten
        let headers = new Headers(this._ApiEnvironment.headers);
        headers.append('Content-Type', 'application/' + link.type + '+json');
        headers.append('Content-Type', 'application/json');

        return new Request(link.href, {
            method: link.method,
            headers: headers,
            body: data
        })
    }

    _checkServiceAndHateoasLinkError(rel, serviceName) {
        // check Service Get
        let s = Object.keys(this._service.services).map((key) => {
            return key.toLowerCase();
        });

        if (s.indexOf(serviceName.toLowerCase()) === -1) {
            console.warn("Service " + serviceName + " is not specified", this._service, this);
            return true;
        }

        // check Hateoas
        if (!this._hts[rel]) {
            console.warn("No HATEOAS for rel " + rel + " in service " + this._service.name + " found.", this);
            let customEvent = new Event('missing-hts-' + rel, {composed: true, bubbles: false});
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
        this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts[this.method]));
    }

    /**
     * trigger the method with data
     */
    triggerWithBody(body) {

        if (this._checkServiceAndHateoasLinkError(this.method, this.method)) {
            return;
        }

        this._FBPTriggerWire("--triggerLoad", this._makeRequest(this._hts[this.method], body));
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
            let customEvent = new Event('hts-updated', {composed: true, bubbles: true});
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
            <furo-api-fetch
                    ƒ-invoke-request="--triggerLoad"
                    ƒ-abort-request="--abort-demanded">
            </furo-api-fetch>
        `;
    }

}

window.customElements.define('furo-custom-method', FuroCustomMethod);
