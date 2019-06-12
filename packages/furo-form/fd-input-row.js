import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `fd-input-row`
 *
 *
 * @summary Zweigespaltene Formularzeile
 * @customElement
 * @polymer
 * @mixes FBP
 */
class FdInputRow extends FBP(LitElement) {

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || css`
            :host {
                display: block;
                margin-bottom: 16px;
                margin-top: 8px;
            }

            div {
                line-height: 40px;
                width: 120px;
                
            }

            ::slotted(*) {
                resize: horizontal;
            }
        `
    }

    render() {
        // language=HTML
        return html`
            <furo-horizontal-flex>
                <div>${this.label}</div>
                <slot></slot>
            </furo-horizontal-flex>
        `;
    }

    static get properties() {
        return {
            /**
             * label
             * Die Bezeichnung der Zeile
             */
            label: {
                type: String,
                value: "set the label!",
            },
        };
    }

}

window.customElements.define('fd-input-row', FdInputRow);
