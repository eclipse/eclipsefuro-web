import {LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-de-bounce`
 *  is a component with a input-wire, that, as long as it continues to be triggered, will not
 *  be invoked. The wire will be triggered after it stops being called for
 *  N milliseconds. If `immediate` is passed as a attribute, it triggers the input-wire on the
 *  leading edge, instead of the trailing.
 *
 * @summary
 * @customElement
 * @demo demo-furo-de-bounce Basic usage
 * @demo demo-furo-de-bounce-immediately Immediate usage
 * @appliesMixin FBP
 */
class FuroDeBounce extends FBP(LitElement) {

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
    }

    static get properties() {
        return {
            /**
             * Debounce time in milliseconds
             * Default value: 250
             */
            wait: {type: Number, attribute: 'wait'},
            /**
             * If true, input-wire is triggered immediatley (leading edge instead of trailing)
             * Default value: false
             */
            immediate: {type: Boolean, attribute: 'immediate'}
        };
    }

    constructor() {
        super();

        // as taken from Underscore.js
        this._debounce = function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };
        this._immediate = false;
        this._wait = 250;
        this._createHandler(this._wait, this._immediate);
    }

    set immediate(i){
        this._immediate = i;
        this._createHandler(this._wait ? this._wait : 250, i);
    }

    set wait(w){
        this._wait = w;
        this._createHandler(w, this._immediate ? this._immediate : false);
    }

    /**
     * Internal create of debounce handler function
     * @param wait
     * @param immediate
     * @private
     */
    _createHandler(wait, immediate){
        /**
         * Fired after `input-wire` stops being called for N milliseconds.
         * If `immediate`is set to TRUE, it fires on the leading edge.
         * @event out
         * detail payload: object param from inputWire
         * @type {function(...[*]=)}
         */
        this.handler = this._debounce((wire)=>{
            this.dispatchEvent(new CustomEvent('out', {
                detail: wire, bubbles: true, composed: true
            }));
        }, wait, immediate);
    }


    /**
     * Debounce function
     * @param wire
     */
    inputWire(wire) {
        this.handler(wire);
    }

}

window.customElements.define('furo-de-bounce', FuroDeBounce);
