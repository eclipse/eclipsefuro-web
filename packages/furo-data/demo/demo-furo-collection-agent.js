import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/src/flow-repeat";
import "@furo/doc-helper";
import "../furo-catalog";
import "@furo/data-input/demo/helper/produce-qp-data.js";
/**
 * `demo-furo-collection-agent`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCollectionAgent extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroCollectionAgent') || css`
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

    _FBPReady(){
        super._FBPReady();
        // this._FBPTraceWires();
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
          <h2>Demo demo-furo-collection-agent</h2>
          <p>Interact with furo-collection-agent to trigger your specified services</p>
        </div>
          
        <furo-demo-snippet flex>
          <template>
              
              <furo-deep-link service="ProjectService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card style="width: 300px; margin: 30px" header-text="Some data" secondary-text="">

                <template is="flow-repeat" ƒ-inject-items="--response(*.entities)">
                    <p ƒ-.inner-text="--item(*.data.display_name)"></p>
                </template>
                
              <furo-horizontal-flex slot="action">
                <produce-qp-data @-data="--qp" qp={"prj":1}></produce-qp-data>
              </furo-horizontal-flex>
            </furo-card>
           
           <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  --> 
            <furo-collection-agent service="ProjectService" ƒ-hts-in="--hts" list-on-hts-in 
                               @-response="--response" ></furo-collection-agent>
            <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <furo-data-object type="project.ProjectCollection" ƒ-inject-raw="--response" @-object-ready="--dataObject"></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
    }
}

window.customElements.define('demo-furo-collection-agent', DemoFuroCollectionAgent);
