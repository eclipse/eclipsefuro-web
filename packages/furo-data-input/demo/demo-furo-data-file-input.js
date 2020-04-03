import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog";
import "@furo/input/src/furo-button.js";
import "./helper/produce-qp-data";

/**
 * `demo-furo-data-file-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataFileInput extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroDataFileInput') || css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }

            furo-demo-snippet {
                height: 600px;
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

            <furo-vertical-flex>

                <h2>Demo furo-data-file-input</h2>
                <p>Bind the field from furo-data-object with
                    <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                    The labels, hints, defaults are comming from the furo-data-object specs.</p>

                <furo-demo-snippet>
                    <template>
                        <furo-vertical-scroller>
                            <furo-form-layouter two>
                                <furo-card header-text="Choose a markdown file"
                                           secondary-text="The textarea below is binded to a field in furo-data-object (ƒ-bind-data='--entity(*.furo_data_file_input)'). Check out the source tab.">
                                    <furo-form-layouter>
                                        <furo-data-textarea-input ƒ-bind-data="--entity(*.furo_data_file_input)"
                                                                  label="Output"></furo-data-textarea-input>
                                    </furo-form-layouter>
                                    <furo-button slot="action" label="Open .md file" unelevated primary
                                                 @-click="--openDlgReq"></furo-button>
                                    <furo-data-file-input accept=".md"
                                                          ƒ-open="--openDlgReq"
                                                          ƒ-bind-data="--entity(*.furo_data_file_input)"></furo-data-file-input>
                                </furo-card>


                                <furo-card header-text="Choose a image/jpeg">
                                    <img slot="media" ƒ-.src="--file">
                                    <furo-button slot="action" label="Open .jpg file" unelevated primary
                                                 @-click="--openImageDlgReq"></furo-button>
                                    <furo-data-file-input accept=".jpg"
                                                          ƒ-open="--openImageDlgReq"
                                                          @-value-changed="--file"></furo-data-file-input>
                                </furo-card>
                            </furo-form-layouter>

                        </furo-vertical-scroller>

                        <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
                    </template>
                </furo-demo-snippet>

            </furo-vertical-flex>

        `;
    }
}

window.customElements.define('demo-furo-data-file-input', DemoFuroDataFileInput);
