import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper";
import "@furo/app/furo-card.js";
import "../furo-catalog";

/**
 * `demo-furo-file-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroFileInput extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroFileInput') || css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
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
            <h2>Demo furo-file-input</h2>
            <p>let the user choose one or more files from their device storage. </p>
            <furo-demo-snippet style="height: 600px">
                <template>
                    <furo-vertical-scroller>
                    <div style="display: grid; padding: var(--spacing); background-color: var(--surface-dark); grid-row-gap: var(--spacing); grid-column-gap: var(--spacing); grid-template-columns: repeat(3, 1fr);">
                        <furo-card header-text="Choose your media">
                            <img slot="media" ƒ-.src="--selected">
                            <li>Accept: .jpg</li>
                            <li>Multiple: false</li>
                            <li>Required: false</li>
                            <furo-file-input slot="action" label="Upload image" outline primary accept=".jpg"
                                             @-value-changed="--selected"></furo-file-input>

                        </furo-card>

                        <furo-card header-text="Look at the result"
                                   secondary-text="furo-file-input attribute accept is set to '.md'">
                            <div @-click="--btnFocusClicked">&dbkarow; Focus file input</div>
                            <p style="width: 300px; height:250px; overflow: hidden; word-break: break-all;"
                               ƒ-.inner-text="--selectedFile"></p>
                            
                            <furo-file-input slot="action" label="Upload markdown" accept=".md"
                                             @-value-changed="--selectedFile" ƒ-focus="--btnFocusClicked"></furo-file-input>

                        </furo-card>

                        <furo-card header-text="Look at the result"
                                   secondary-text="furo-file-input attribute accept is set to '.pdf'">
                            <object style="width: 300px; height:250px; overflow: hidden; word-break: break-all;"
                               ƒ-.data="--selectedPdf"></object>
                            <furo-file-input slot="action" label="Upload PDF" unelevated accent accept=".pdf"
                                             @-value-changed="--selectedPdf"></furo-file-input>

                        </furo-card>
                        <furo-card header-text="Disabled upload"
                                   secondary-text="furo-file-input attribute accept is set to '.pdf'">
                            <p style="width: 300px; height:250px; overflow: hidden; word-break: break-all;"
                               ƒ-.inner-text="--selectedPdf"></p>
                            <furo-file-input slot="action" label="Upload forbidden" unelevated accent disabled accept=".pdf"
                                             @-value-changed="--selectedPdf"></furo-file-input>

                        </furo-card>
                    </div>
                    </furo-vertical-scroller>
                </template>
            </furo-demo-snippet>
        `;
    }
}

window.customElements.define('demo-furo-file-input', DemoFuroFileInput);
