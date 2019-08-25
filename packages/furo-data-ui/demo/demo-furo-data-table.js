import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {Styling} from "@furo/doc-helper/styling";
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

import "@furo/data";
import "@furo/input";
import "@furo/util";

/**
 * `demo-furo-data-table`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataTable extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent(this.name) || [css`
            :host {
                display: block;
                height: 100%;
                padding-right: var(--spacing);
            }

            :host([hidden]) {
                display: none;
            }

        `, Styling.theme]
    }

    constructor() {
        super();
    }

    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
    }

    /**
     * @private
     * @returns {TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <furo-vertical-flex>
                <div>
                    <h2>furo-data-table playground</h2>
                    <furo-button label="List data" primary unelevated @-click="--btnListClicked">
                </div>
                <div class="flex">
                    <furo-data-table type="project.Project" 
                                     ƒ-bind-data="--data" @-tablerow-selected="--rowSelected"></furo-data-table>
                   
                </div>
                <furo-pretty-json ƒ-inject-data="--rowSelected"></furo-pretty-json>
            </furo-vertical-flex>

            <furo-deep-link ƒ-trigger="--btnListClicked" service="ProjectService" @-hts-out="--hts"></furo-deep-link>
            <collection-agent service="ProjectService"
                              ƒ-hts-in="--hts"
                              list-on-hts-in
                              @-response-hts-updated="--responseHts"
                              @-response="--collectionResponse">
            </collection-agent>

            <furo-data-object type="project.ProjectCollection"
                               ƒ-inject-raw="--collectionResponse"
                               @-object-ready="--data">
            </furo-data-object>

        `;

    }
}

window.customElements.define('demo-furo-data-table', DemoFuroDataTable);
