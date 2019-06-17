import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-toast`
 * Not implemented yet.
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/furo-toast.html
 * @appliesMixin FBP
 */
class FuroToast extends FBP(LitElement) {

    constructor() {
        super();
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
            persitent: {type: Boolean}
        };
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
                 display: block;
                 position: fixed;
                 background-color: var(--paper-toast-background-color, #323232);
                 color: var(--paper-toast-color, #f1f1f1);
                 min-height: 48px;
                 min-width: 288px;
                 padding: 16px 24px;
                 box-sizing: border-box;
                 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
                 border-radius: 2px;
                 margin: 12px;
                 font-size: 14px;
                 cursor: default;
                 -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
                 transition: transform 0.3s, opacity 0.3s;
                 opacity: 0;
                 -webkit-transform: translateY(100px);
                 transform: translateY(100px);
                 @apply --paper-font-common-base;
             }
            :host(.capsule) {
                border-radius: 24px;
            }
            :host(.fit-bottom) {
                width: 100%;
                min-width: 0;
                border-radius: 0;
                margin: 0;
            }
            :host(.paper-toast-open) {
                opacity: 1;
                -webkit-transform: translateY(0px);
                transform: translateY(0px);
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
            <slot></slot>
        `;
    }
}

window.customElements.define('furo-toast', FuroToast);
