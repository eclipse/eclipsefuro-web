import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";

/**
 * `produce-empty-data`
 *  produce query param data
 *
 * @summary produce query param data
 * @customElement
 * @appliesMixin FBP
 */
class ProduceEmptyData extends FBP(LitElement) {

    constructor() {
        super();
        this.data = {};
    }

    _FBPReady() {
        super._FBPReady();
        if (this.auto) {
            this.produce();
        }
    }

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Description
             */
            auto: {type: Boolean},

            data: {type: Object, reflect: true}
        };
    }


    produce() {

        const customEvent = new Event('data', {composed: true, bubbles: true});
        customEvent.detail = this.data ;
        this.dispatchEvent(customEvent);
    }

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('ProduceEmptyData') || css`
        :host {
            display: inline-block;
            margin-top: 18px;
        }

        :host([hidden]) {
            display: none;
        }
    `
    }


    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
    `;
    }
}

window.customElements.define('produce-empty-data', ProduceEmptyData);
