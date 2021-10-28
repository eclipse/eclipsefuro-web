import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';

/**
 * `demo-furo-ui5-button-bar`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5ButtonBar extends FBP(LitElement) {
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
          --furo-form-layouter-row-gap: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    this._FBPTriggerWire('--qpIn', { query: { tsk: 1 } });
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <h2>Sample</h2>

        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <ui5-panel header-text="Default furo-ui5-button-bar without bind-entity">
                <furo-form-layouter two>
                  <furo-ui5-button outline @-click="--disableRequest">disable actions</furo-ui5-button>
                  <furo-ui5-button outline @-click="--enableRequest">enable actions</furo-ui5-button>
                </furo-form-layouter>
                </br>
                <furo-ui5-button-bar ƒ-disable-all="--disableRequest" ƒ-enable-all="--enableRequest">
                  <furo-ui5-button design="Negative">Danger Action</furo-ui5-button>
                  <furo-empty-spacer></furo-empty-spacer>

                  <furo-ui5-button design="Emphasized" unelevated>primary action</furo-ui5-button>
                  <furo-ui5-button design="Default" unelevated>second action</furo-ui5-button>
                  <furo-ui5-button design="Positive" unelevated>another action</furo-ui5-button>
                </furo-ui5-button-bar>
              </ui5-panel>

              <ui5-panel header-text="Furo-ui5-button-bar with bound entity and design='Footer'">
                <p>
                  Please throttle your network connection in the dev console to see the pending
                  request state.
                </p>
                <furo-form-layouter two>
                  <furo-ui5-button @-click="--load">Load response with HATEOAS</furo-ui5-button>
                </furo-form-layouter>
                </br>
                <furo-ui5-button-bar design="Footer"
                  ƒ-bind-entity="--entity"
                  ƒ-disable-all="--reqStarted"
                  ƒ-enable-all="--response"
                >
                  <furo-ui5-button rel="delete" disable-no-rel design="Negative" unelevated
                  >Danger Action
                  </furo-ui5-button>
                  <furo-empty-spacer></furo-empty-spacer>

                  <furo-ui5-button rel="self" hide-no-rel design="Emphasized"
                  >hidden if no relation self
                  </furo-ui5-button>
                  <furo-ui5-button rel="update" disable-no-rel
                  >disabled if no relation update
                  </furo-ui5-button>
                  <furo-ui5-button disable-pristine disable-not-valid
                  >disabled if pristine (e.g. save)
                  </furo-ui5-button>
                </furo-ui5-button-bar>

                <produce-qp-data
                  hidden
                  ƒ-produce="--load"
                  @-data="--qp"
                  qpescaped="%7B%22tsk%22%3A1%7D"
                ></produce-qp-data>
              </ui5-panel>

              <furo-deep-link
                service="TaskService"
                ƒ-qp-in="--qp"
                @-hts-out="--hts"
              ></furo-deep-link>
              <furo-entity-agent
                service="TaskService"
                ƒ-hts-in="--hts"
                load-on-hts-in
                @-request-started="--reqStarted"
                @-response="--response"
              ></furo-entity-agent>
              <furo-data-object
                type="task.TaskEntity"
                @-object-ready="--entity"
                ƒ-inject-raw="--response"
              ></furo-data-object>


            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-button-bar', DemoFuroUi5ButtonBar);
