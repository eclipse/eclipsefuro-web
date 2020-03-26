import {LitElement} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-key-filter`
 * Allows only defined keyboard events to pass through
 *
 * ```
 * <!-- note the asterisk on other-component keydown. Because filter needs the keyboard event. -->
 * <other-component @-keydown="--keydown(*)"></other-component>
 * <furo-key-filter ƒ-filter="--keydown" @-matched="--escapePressed" keys="Escape"></furo-key-filter>
 * ```
 *
 *
 * @summary keyboard event filter
 * @customElement
 * @appliesMixin FBP
 */
class FuroKeyFilter extends FBP(LitElement) {

    constructor() {
        super();

    }

    /**
     * Check the event and dispatch matched when the conditions are fulfilled.
     *
     * @param keyboardEvent
     */
    filter(keyboardEvent) {
        let key = keyboardEvent.key || keyboardEvent.keyCode;

        // check shift, alt, command,...
        if (this.shift && !keyboardEvent.shiftKey) {
            return
        }
        if (this.alt && !keyboardEvent.altKey) {
            return
        }
        if ((this.meta || this.command) && !keyboardEvent.metaKey) {
            return
        }
        if ((this.control) && !keyboardEvent.controlKey) {
            return
        }


        if(this.keys.split(/\W+/).indexOf(key) !== -1){
            /**
            * @event matched
            * Fired when key matches the options
            * detail payload: keyboardEvent
            */
            let customEvent = new Event('matched', {composed:true, bubbles: true});
            customEvent.detail = keyboardEvent;
            this.dispatchEvent(customEvent)
        }



    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Coma separated list with allowed keys to pass. i.e "Enter, ArrowUp"
             */
            keys: {type: String},
            /**
             * Modifier key **shift** must be pressed too to match
             */
            shift: {type: Boolean},
            /**
             * Modifier key **alt** must be pressed too to match
             */
            alt: {type: Boolean},
            /**
             * Alias for meta.
             *
             * Modifier key **meta** must be pressed too to match.
             */
            command: {type: Boolean},
            /**
             * Modifier key **meta** must be pressed too to match
             */
            meta: {type: Boolean},
            /**
             * Modifier key **control** must be pressed too to match
             */
            control: {type: Boolean}
            // stopPropagation, disableDefault??
        };
    }

}

window.customElements.define('furo-key-filter', FuroKeyFilter);
