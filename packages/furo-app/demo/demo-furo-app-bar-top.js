import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "@furo/input/src/furo-icon-button.js";

/**
 * `demo-furo-app-bar-top`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroAppBarTop extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroAppBarTop') || css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }

            furo-demo-snippet {
                height: 800px;
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
                <h2>Demo demo-furo-app-bar-top</h2>
                <p>Top App Bars are a container for items such as application title, navigation icon, and action
                    items.</p>
                <furo-demo-snippet flex>
                    <template>

                        <furo-vertical-scroller>
                            <furo-app-bar-top
                                    navigation-icon="menu"
                                    ƒ-start-activity="--start"
                                    ƒ-stop-activity="--stop">
                                <div>Your Application Title</div>
                                <furo-empty-spacer></furo-empty-spacer>

                                <furo-icon-button
                                        icon="av:play-circle-outline"
                                        title="start action"
                                        @-click="--start"
                                ></furo-icon-button>
                                <furo-icon-button
                                        icon="av:pause-circle-outline"
                                        title="stop action"
                                        @-click="--stop"
                                ></furo-icon-button>
                            </furo-app-bar-top>
                            
                        </furo-vertical-scroller>
                    </template>
                </furo-demo-snippet>

            </furo-vertical-flex>
        `;
    }
}

window.customElements.define('demo-furo-app-bar-top', DemoFuroAppBarTop);
