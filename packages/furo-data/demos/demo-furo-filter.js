import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme.js"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "@furo/util";

// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/data/src/furo-catalog.js";
import "./helper/demo-project-filter-form.js"

/**
 * `demo-furo-filter`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroFilter extends FBP(LitElement) {

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        this._FBPTraceWires();
    }

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroFilter') || css`
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
                <div>
                    <h2>Demo demo-furo-filter</h2>
                    <p>Basic usage of the furo filter pattern.</p>
                    <p>We use a singleton resource to deliver possible filter options. Here we use /projects/filter</p>
                </div>
                <furo-demo-snippet flex>
                    <template>

                        <!-- filter input form, options from ProjectfilterService -->
                        <div style="width: 75%; margin: 0 auto;">

                            <furo-button unelevated label="Load filter options" @-click="--go"></furo-button>
                            <p>Search in projects (default filter)</p>
                            <!-- filter default input -->
                            <furo-horizontal-flex>
                                <furo-data-text-input label="Search in projects" condensed ƒ-bind-data="--entity(*.data.description)" flex leading-icon="search"></furo-data-text-input> <furo-button label="clear filter" @-click="--filterCleared"></furo-button>
                            </furo-horizontal-flex>
                            
                            <demo-project-filter-form ƒ-bind-data="--entity" @-filter-changed="--filterChanged" @-filter-cleared="--filterChanged"></demo-project-filter-form>

                            <p>Filter Array</p>
                            <furo-pretty-json ƒ-inject-data="--filterChanged, --filterCleared(*.dummy)"></furo-pretty-json>
                        </div>
                       
                        <!-- Loading filter options from singleton resource projects/filter -->
                        <furo-deep-link ƒ-trigger="--go" service="ProjectfilterService"
                                        @-hts-out="--hts"></furo-deep-link>
                        
                        <furo-entity-agent service="ProjectfilterService"
                                           @-response="--response"
                                           ƒ-hts-in="--hts"
                                           load-on-hts-in></furo-entity-agent>

                        <furo-data-object type="projectfilter.ProjectfilterEntity"
                                          @-object-ready="--entity"
                                          ƒ-inject-raw="--response" ƒ-reset="--filterCleared"></furo-data-object>

                    </template>
                </furo-demo-snippet>
            </furo-vertical-flex>
        `;
    }
}

window.customElements.define('demo-furo-filter', DemoFuroFilter);
