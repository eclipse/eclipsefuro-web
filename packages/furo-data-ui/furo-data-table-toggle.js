import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-data-table-toggle`
 * Toggle with HTML entity
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FuroDataTableToggle extends FBP(LitElement) {

    constructor() {
        super();
        this.on = true;
        this.field = '';


    }

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
        this._FBPAddWireHook('--Pressed', () => {
            this.toggle();
        });
    }

    static get properties() {
        return {

            field: {
                type: String,
                attribute: true,
                reflect: true
            }
        };
    }

    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    display: inline-block;
                }

                :host([hidden]) {
                    display: none;
                }
                :host([sortable=false]) {
                    display: none;
                }
                span{
                    margin-left: var(--spacing, 8px);
                }
            `
        ];
    }

    /**
     * Sets an identity
     * @param name
     */
    setField(name) {
        this.field = name;
        this.setAttribute('field', name);
    }

    attributeChangedCallback(name, oldval, newval) {
        super.attributeChangedCallback(name, oldval, newval);
    }
    /**
     * Toggle state
     * @event descending Payload: identity
     * @event ascending Payload: identity
     */
    toggle() {
        this.on = !this.on;
        this.requestUpdate();
        if (this.on){
            this.dispatchEvent(new CustomEvent('ascending', {
                detail: this.field, bubbles: true, composed: true
            }));
        } else {
            this.dispatchEvent(new CustomEvent('descending', {
                detail: this.field, bubbles: true, composed: true
            }));
        }
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
         <div @-click="--Pressed">
        ${this.on
            ? html`<span>&downarrow;</span>`
            : html`<span>&uparrow;</span>`
        }
        </div>
    `;
    }

}

window.customElements.define('furo-data-table-toggle', FuroDataTableToggle);
