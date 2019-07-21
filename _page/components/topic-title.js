import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `topic-title`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class TopicTitle extends FBP(LitElement) {

    constructor() {
        super();

    }

    static get properties() {
        return {
            title: {type: String}
        };
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
                h2{
                    font-size: 1.25rem;
                    font-weight: 500;
                    letter-spacing: .0125em;
                    border-bottom: 1px solid rgba(0,0,0,.87);
                }
            `
        ];
    }

    render() {
        // language=HTML
        return html`
            <h2>${this.title}</h2>
        `;
    }

}

window.customElements.define('topic-title', TopicTitle);
