import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/input"
import "../furo-catalog"

/**
 * `demo-furo-form-layouter`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroFormLayouter extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroFormLayouter') || css`
            :host {
                display: block;
            }

            :host([hidden]) {
                display: none;
            }

            furo-demo-snippet {
                height: 950px;
                --furo-form-background: white;
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
            <h3>Sample</h3>

            <furo-demo-snippet>
                <template>
                    <furo-form header-text="Basic form design"
                               secondary-text="Please fill in the form and click save. You will be automatically redirected to the edit form.">
                        <!-- Inside a furo-form-layouter the elements are always full-width -->
                        <!-- Full width, one column layout-->
                        <furo-form-layouter>
                            <furo-date-input hint="Only possible in current year" max="2020-12-31" min="2020-01-01"
                                             label="valid from"></furo-date-input>
                            <furo-select-input label="Mutation reason" value="New"
                                               list="New, mutation, remake"></furo-select-input>
                            <p>Put your additional information here...</p>
                        </furo-form-layouter>
                        <!-- Full width, two column layout-->
                        <furo-form-layouter two>
                            <furo-text-input label="Owner"></furo-text-input>
                            <furo-text-input label="Special hint newline"></furo-text-input>
                            <furo-text-input label="Owner"></furo-text-input>
                        </furo-form-layouter>

                        <furo-form-layouter two>
                                <furo-checkbox-input condensed label="One"></furo-checkbox-input>
                                <furo-checkbox-input condensed label="two"></furo-checkbox-input>
                                <furo-checkbox-input condensed label="Three"></furo-checkbox-input>
                                <furo-checkbox-input condensed label="Four"></furo-checkbox-input>
                        </furo-form-layouter>

                        <!-- Full width, four column layout with condensed input fields -->
                        <furo-form-layouter>
                            <p>Full width, four column layout with condensed input fields</p>
                            <furo-select-input condensed label="Brand" value="Pepsi"
                                               list="RedBull, Coca-Cola, Pepsi, Sprite, 7Up"></furo-select-input>
                        </furo-form-layouter>
                        
                        <furo-button-bar slot="action">
                            <furo-button label="Save" unelevated primary></furo-button>
                            <furo-button label="Cancel" unelevated></furo-button>
                        </furo-button-bar>
                    </furo-form>
                </template>
            </furo-demo-snippet>
        `;
    }
}

window.customElements.define('demo-furo-form-layouter', DemoFuroFormLayouter);
