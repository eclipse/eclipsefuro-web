import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `produce-qp-data`
 *  produce query param data
 *
 * @summary produce query param data
 * @customElement
 * @appliesMixin FBP
 */
class ProduceQpData extends FBP(LitElement) {

    constructor() {
        super();

        this.addEventListener("click", this.produce)
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

            qp: {type: Object, reflect: true}
        };
    }


    produce() {

        let customEvent = new Event('data', {composed: true, bubbles: true});
        customEvent.detail = this.qp ;
        this.dispatchEvent(customEvent);
    }

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('ProduceQpData') || css`
        :host {
            display: inline-block;
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
      <furo-button label="load test data" outline></furo-button>
    `;
    }
}

window.customElements.define('produce-qp-data', ProduceQpData);
