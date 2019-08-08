import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework";
import {Styling} from "../components/styling";

import '../components/style-category-sample';

/**
 * `page-styling`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class PageStyling extends FBP(LitElement) {

    constructor() {
        super();

    }

    /**
     * flow is ready lifecycle method
     */
    __fbpReady() {
        super.__fbpReady();
        //this._FBPTraceWires()
    }

    static get properties() {
        return {};
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || [css`
            :host {
                display: block;
                overflow: auto;
                height: 100%;
                padding: 0 var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }
            furo-markdown{
                background-color: white;
            }
        `, Styling.theme]
    }

    render() {
        // language=HTML
        return html`
        
            <furo-markdown unsafe mdsrc="/_page/markdown/styling-top.md"></furo-markdown>
            <style-category-sample></style-category-sample>
            <furo-markdown unsafe mdsrc="/_page/markdown/styling-bottom.md"></furo-markdown>
        `;
    }

}

window.customElements.define('page-styling', PageStyling);
