import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog";
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
        return Theme.getThemeForComponent(this.name) || css`
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
            <furo-vertical-flex>
                <h2>Demo furo-data-file-input</h2>
                <p>Bind the field from furo-data-object with
                    <strong>ƒ-bind-data="--entityReady(*.fields.fieldname)"</strong>.
                    The labels, hints, defaults are comming from the furo-data-object specs.</p>
                <furo-demo-snippet flex>
                    <template>
                        <furo-card header-text="Choose a markdown file">
                            <furo-form-layouter>
                                <furo-data-textarea-input ƒ-bind-data="--entity(*.furo_data_file_input)"
                                                          label="Output"></furo-data-textarea-input>
                            </furo-form-layouter>
                            <furo-data-file-input slot="action" required unelevated primary accept=".md" label="Open .md file"
                                                  ƒ-bind-data="--entity(*.furo_data_file_input)"></furo-data-file-input>
                        </furo-card>
                        <furo-data-object type="experiment.Experiment" @-object-ready="--entity"></furo-data-object>
                    </template>
                </furo-demo-snippet>
            </furo-vertical-flex>
        `;
    }
}

window.customElements.define('demo-furo-data-file-input', DemoFuroDataFileInput);
