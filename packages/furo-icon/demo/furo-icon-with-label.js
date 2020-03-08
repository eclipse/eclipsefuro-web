import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import '@furo/layout';
/**
 * `i18n-basics`
 * Lit element
 *
 * @customElement
 */
class FuroIconWithLabel extends FBP(LitElement) {



    static get properties() {
        return {
            icon: {
                type: String
            }
        };
    }

    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    height: 48px;
                    display: inline-block;
                    width: 7em;
                    margin: 1em 0.5em;
                    text-align: center;
                }

                span{
                    display: block;
                    font-size: 8px;
                }
                
                furo-icon{
                    margin: auto;
                    display: block;
                    
                }

            `
        ];
    }


    render() {
        // language=HTML
        return html`
            <furo-icon icon="${this.icon}"></furo-icon>
            <span> ${this.icon} </span>
        `;
    }

}

window.customElements.define('furo-icon-with-label', FuroIconWithLabel);
