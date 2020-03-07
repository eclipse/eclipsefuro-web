import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme"

/**
 * `furo-panel`
 * Simple content panel with predefined margins.
 *
 * ### Styling
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--furo-panel-margin` | Margin size | 0 var(--spacing-s) 0 var(--spacing-s) | --
 *
 * @summary content panel with predefined margins
 * @customElement
 * @demo demo-furo-panel Sample
 * @appliesMixin FBP
 */
class FuroPanel extends FBP(LitElement) {

    constructor() {
        super();

        // Initialize properties
        this.bordered = false;
        this.marginM = false;
        this.marginL = false;
    }
    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires()
    }

    static get properties() {
        return {
            /**
             * Gives the panel a border
             */
            bordered: { type: Boolean, reflect: true },
            /**
             * Changes margin to spacing-m
             */
            marginM: { type: Boolean, reflect: true, attribute: 'margin-m' },
            marginL: { type: Boolean, reflect: true, attribute: 'margin-l' },
        };
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FuroPanel') ||
            css`
                :host {
                    display: block;
                    margin: var(--furo-panel-margin, 0 var(--spacing-s) 0 var(--spacing-s));
                }

                :host([hidden]) {
                    display: none;
                }

                :host([margin-m]) {
                    margin: var(--furo-panel-margin-m, 0 var(--spacing-m) 0 var(--spacing-m));
                }

                :host([margin-l]) {
                    margin: var(--furo-panel-margin-l, 0 var(--spacing-l) 0 var(--spacing-l));
                }
                
                :host([no-margin]) {
                    margin: 0;
                }
                
                :host([bordered]) {
                    border-radius: 4px;
                    border: 1px solid var(--primary, black);
                }
                
                ::slotted(*){
                    margin: var(--spacing-s, 16px);
                }
      `
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
      <slot></slot>

    `;
    }

}

window.customElements.define('furo-panel', FuroPanel);
