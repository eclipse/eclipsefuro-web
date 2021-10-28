import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';
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
    return (

      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
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
            <furo-deep-link
              service="ProjectService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card style="width: 420px; margin: 30px" header-text="Some data" secondary-text="">
              <furo-data-text-input
                ƒ-bind-data="--dataObject(*.data.display_name)"
              ></furo-data-text-input>
              <furo-data-text-input
                ƒ-bind-data="--dataObject(*.data.description)"
              ></furo-data-text-input>
              <furo-data-money-input
                ƒ-bind-data="--dataObject(*.data.cost_limit)"
              ></furo-data-money-input>
              <furo-data-date-input ƒ-bind-data="--dataObject(*.data.start)"></furo-data-date-input>
              <furo-data-date-input ƒ-bind-data="--dataObject(*.data.end)"></furo-data-date-input>
              <furo-horizontal-flex slot="action">
                <produce-qp-data @-data="--qp" qpescaped="%7B%22prj%22%3A1%7D"></produce-qp-data>
              </furo-horizontal-flex>
            </furo-card>

            <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
            <furo-entity-agent
              service="ProjectService"
              ƒ-hts-in="--hts"
              load-on-hts-in
              @-response="--response"
            ></furo-entity-agent>
            <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
            <furo-data-object
              type="project.ProjectEntity"
              ƒ-inject-raw="--response"
              @-object-ready="--dataObject"
            ></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-entity-agent', DemoFuroEntityAgent);
