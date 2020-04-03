import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper";
import "@furo/util/src/furo-pretty-json.js";
import "@furo/input/src/furo-search-input.js";
import "@furo/data";
import "@furo/layout";
import "./helper/produce-massive-load.js";
// import "@furo/data-input/demo/helper/produce-qp-data.js";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/timing/src/furo-catalog.js";


/**
 * `demo-furo-de-bounce-immediately`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDeBounceImmediately extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroDeBounceImmediately') || css`
            :host {
                display: block;
                height: 100%;
                overflow: auto;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }
            
            furo-demo-snippet {
                height: 100%;
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
                <furo-vertical-scroller>
                <h2>Demo furo-de-bounce with attribute immediate</h2>
                <p>A component with a input-wire, that, as long as it continues to be triggered, will not
                    be invoked. The wire will be triggerd after it stops being called for
                    N milliseconds. If \`immediate\` is passed as a attribute, it triggers the input-wire on the
                    leading edge, instead of the trailing.</p>

                <furo-demo-snippet>
                    <template>
                        <p>Initialise with LOAD TEST DATA. Type Search and check network console.</p>
                        <furo-deep-link service="ProjectService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
                        <furo-search-input label="Input search term"
                                           @-value-changed="--defaultChanged"></furo-search-input>
                        <furo-de-bounce immediate ƒ-input-wire="--term" @-out="--debouncedTerm"></furo-de-bounce>

                        <furo-filter-container @-filter-changed="--term">
                            <furo-filter-and>
                                <furo-filter-field field="description" is="in"
                                                   ƒ-.value="--defaultChanged"></furo-filter-field>
                            </furo-filter-and>
                        </furo-filter-container>

                        <furo-collection-agent service="ProjectService" ƒ-hts-in="--hts" ƒ-set-filter="--term"
                                               ƒ-list="--debouncedTerm"></furo-collection-agent>
                        <br>
                        <produce-qp-data @-data="--qp" qpescaped="%7B%22prj%22%3A1%7D"></produce-qp-data>
                        <furo-pretty-json ƒ-inject-data="--term"></furo-pretty-json>
                        <furo-pretty-json ƒ-inject-data="--debouncedTerm"></furo-pretty-json>
                    </template>
                </furo-demo-snippet>
                </furo-vertical-scroller>
            </furo-vertical-flex>
        `;
    }
}

window.customElements.define('demo-furo-de-bounce-immediately', DemoFuroDeBounceImmediately);
