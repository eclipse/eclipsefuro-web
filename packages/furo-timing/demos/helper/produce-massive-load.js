import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

import '@furo/input/furo-button.js';

/**
 * `produce-massive-load`
 * Desc
 *
 * @summary
 * @customElement
 * @demo demoproduce-massive-load Sample
 * @appliesMixin FBP
 */
class ProduceMassiveLoad extends FBP(LitElement) {


    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        // this._FBPTraceWires()
        this._FBPAddWireHook('--massiveLoad', () => {
            // generate events
            for (let i = 0; i<11; i+=1) {
                const payload = {"action": `term${  i}`};
                this.dispatchEvent(new CustomEvent('action', {
                    detail: payload, bubbles: true, composed: true
                }));

            }

        });

    }

    static get properties() {
        return {};
    }

    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }
            `
        ];
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <furo-button outline autofocus label="produce massive load" @-click="--massiveLoad"></furo-button>
        `;
    }

}

window.customElements.define('produce-massive-load', ProduceMassiveLoad);
