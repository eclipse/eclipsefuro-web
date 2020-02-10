import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper";
import "../furo-catalog";
import "@furo/data-input/demo/helper/produce-qp-data.js";
/**
 * `demo-furo-entity-agent`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroEntityAgent extends FBP(LitElement) {

    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('DemoFuroEntityAgent') || css`
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
          <h2>Demo demo-furo-entity-agent</h2>
          <p>Interact with furo-entity-agent to trigger your specified services</p>
        </div>
          
        <furo-demo-snippet flex>
          <template>
              
              <furo-deep-link service="ProjectService" @-hts-out="--hts" ƒ-qp-in="--qp"></furo-deep-link>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card style="width: 300px; margin: 30px" header-text="Some data" secondary-text="">
                <furo-data-text-input ƒ-bind-data="--dataObject(*.display_name)"></furo-data-text-input>
                <furo-data-date-input ƒ-bind-data="--dataObject(*.start)"></furo-data-date-input>
                <furo-data-date-input ƒ-bind-data="--dataObject(*.end)"></furo-data-date-input>
              <furo-horizontal-flex slot="action">
                <produce-qp-data @-data="--qp" qp={"prj":1}></produce-qp-data>
              </furo-horizontal-flex>
            </furo-card>
           
           <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  --> 
            <furo-entity-agent service="ProjectService" ƒ-hts-in="--hts" load-on-hts-in 
                               ƒ-load="--getClicked" 
                               @-response="--response" ></furo-entity-agent>
            <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <furo-data-object type="project.Project" ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
    }
}

window.customElements.define('demo-furo-entity-agent', DemoFuroEntityAgent);
