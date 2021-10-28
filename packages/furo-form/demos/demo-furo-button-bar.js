import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-catalog.js';
import '@furo/data-input/src/furo-data-text-input.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';
import '@furo/data/src/furo-catalog.js';

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
    return (

      css`
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
        .hr {
          border-bottom: 1px solid gray;
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
      <h3>Sample</h3>

      <furo-demo-snippet>
        <template>
          <furo-vertical-scroller>
            <h2>Default furo-button-bar without bind-entity</h2>
            <furo-button outline @-click="--disableRequest">disable actions</furo-button>
            <furo-button outline @-click="--enableRequest">enable actions</furo-button>
            <div class="hr"></div>

            <furo-button-bar ƒ-disable-all="--disableRequest" ƒ-enable-all="--enableRequest">
              <furo-button primary unelevated>primary action</furo-button>
              <furo-button unelevated>second action</furo-button>
              <furo-button unelevated>another action</furo-button>

              <furo-empty-spacer></furo-empty-spacer>
              <furo-button danger unelevated>Danger Action</furo-button>
            </furo-button-bar>

            <h2>furo-button-bar with bound entity</h2>
            <p>
              Please throttle your network connection in the dev console to see the pending request
              state.
            </p>

            <produce-qp-data
              ƒ-produce="--load"
              @-data="--qp"
              qpescaped="%7B%22tsk%22%3A1%7D"
            ></produce-qp-data>

            <furo-deep-link service="TaskService" ƒ-qp-in="--qp" @-hts-out="--hts"></furo-deep-link>
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

            <furo-horizontal-flex>
              <furo-data-text-input
                flex
                ƒ-bind-data="--entity(*.data.description)"
              ></furo-data-text-input>
            </furo-horizontal-flex>
            <div class="hr"></div>
            <furo-button-bar
              ƒ-bind-entity="--entity"
              ƒ-disable-all="--reqStarted"
              ƒ-enable-all="--response"
            >
              <furo-button rel="self" hide-no-rel primary unelevated
                >hidden if no relation self
              </furo-button>
              <furo-button rel="update" disable-no-rel outline
                >disabled if no relation update</furo-button
              >
              <furo-button disable-pristine disable-not-valid secondary unelevated
                >disabled if pristine (e.g. save)</furo-button
              >

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
