import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-pages`
 *
 * @customElement
 * @demo demo/furo-pages.html
 * @appliesMixin FBP
 */
class FuroPages extends FBP(LitElement) {

    constructor() {
        super();
        this._fallback = this.getAttribute("default");

        this._default = this.querySelector("*[name=" + this._fallback + "]");
        this._lastQP = [];
        this._lastHash = [];
        this._lastPageName = "";
    }

    /**
     * set location via attribute
     * will forward to ƒ-inject-location
     * @param location
     */
    set location(location) {
        this.injectLocation(location);
    }

    /**
     * Inject the location Object from furo-location
     *
     * @param location
     */
    injectLocation(location) {

        let page = location.pathSegments[0] || this._fallback;

        if (this._lastPage && page !== this._lastPageName) {
            if(this._lastPage._FBPTriggerWire !== undefined){
                this._lastPage._FBPTriggerWire('--pageDeActivated');
            }
            this._lastPage.removeAttribute("f-p-active")
        }

        this._lastPage = this.querySelector("*[name=" + page + "]");

        if (!this._lastPage) {
            // 404
            this._lastPage = this.querySelector('*[name="404"]');
            if (this._lastPage) {
            }else{
                this._lastPage = this._default;
            }
        }
        if (this._lastPage) {

            if(page !== this._lastPageName){
                this._lastPageName = page;
                if(this._lastPage._FBPTriggerWire !== undefined){
                    this._lastPage._FBPTriggerWire('--pageActivated',location);
                }
                this._lastPage.setAttribute("f-p-active", '');
            }

            // QP
            if(this._lastQP[page] !== location.querystring){
                this._lastQP[page] = location.querystring;
                // fire --pageParamsChanged if we have a fbp component
                if(this._lastPage._FBPTriggerWire !== undefined){
                    this._lastPage._FBPTriggerWire('--pageQueryChanged',location);
                }
            }

            // Hash
            if(this._lastHash[page] !== location.hashstring){
                this._lastHash[page] = location.hashstring;
                // fire --pageParamsChanged if we have a fbp component
                if(this._lastPage._FBPTriggerWire !== undefined){
                    this._lastPage._FBPTriggerWire('--pageHashChanged',location);
                }
            }

        }else{
            console.warn("default page not found and 404 page not found");
        }
    }


    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <style>
                :host {
                    display: block;
                }

                ::slotted(*:not([f-p-active])) {
                    display: none;
                }
            </style>
            <slot></slot>
        `;
    }

}

window.customElements.define('furo-pages', FuroPages);
