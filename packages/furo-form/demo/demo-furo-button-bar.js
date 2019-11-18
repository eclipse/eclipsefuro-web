import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

import "@furo/data-input/demo/helper/produce-qp-data.js"

/**
 * `demo-furo-button-bar`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroButtonBar extends FBP(LitElement) {

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
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires()
        this._FBPTriggerWire('--qpIn', {query: {tsk: 1}});

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
                    <furo-vertical-scroller>
                        <h2>Default furo-button-bar without bind-entity</h2>
                        <furo-button outline @-click="--disableRequest">disable actions</furo-button>
                        <furo-button outline @-click="--enableRequest">enable actions</furo-button>
                        <hr>
                        <furo-button-bar ƒ-disable-all="--disableRequest" ƒ-enable-all="--enableRequest">
                            <furo-button primary unelevated>primary action</furo-button>
                            <furo-button unelevated>second action</furo-button>
                            <furo-button unelevated>another action</furo-button>

                            <furo-empty-spacer></furo-empty-spacer>
                            <furo-button danger unelevated>Danger Action</furo-button>
                        </furo-button-bar>

                        <h2>furo-button-bar with binded entity</h2>
                        <p>Please throttle your network connection in the dev console to see the pending request state.</p>
                        
                        <produce-qp-data ƒ-produce="--load" @-data="--qp" qp={"tsk":1}></produce-qp-data>
                        
                        <furo-deep-link service="TaskService" ƒ-qp-in="--qp" @-hts-out="--hts"></furo-deep-link>
                        <furo-entity-agent service="TaskService" ƒ-hts-in="--hts" ƒ-load="--load" load-on-hts-in
                                           @-request-started="--reqStarted"
                                           @-response="--response"></furo-entity-agent>
                        <furo-data-object type="task.TaskEntity" @-object-ready="--entity"
                                          ƒ-inject-raw="--response"></furo-data-object>

                       
                        <furo-horizontal-flex>
                            <furo-data-text-input flex ƒ-bind-data="--entity(*.data.description)"></furo-data-text-input>    
                        </furo-horizontal-flex>
                        <hr>
                        <furo-button-bar ƒ-bind-entity="--entity" ƒ-disable-all="--reqStarted" ƒ-enable-all="--response">
                            <furo-button rel="self" hide-no-rel primary unelevated>hidden if no relation self
                            </furo-button>
                            <furo-button rel="update" disable-no-rel unelevated>disabled if no relation update</furo-button>
                            <furo-button disable-pristine unelevated>disabled if pristine</furo-button>

                            <furo-empty-spacer></furo-empty-spacer>
                            <furo-button rel="delete" disable-no-rel danger unelevated>Danger Action</furo-button>
                        </furo-button-bar>
                    </furo-vertical-scroller>
                </template>
            </furo-demo-snippet>
        `;
    }
}

window.customElements.define('demo-furo-button-bar', DemoFuroButtonBar);
