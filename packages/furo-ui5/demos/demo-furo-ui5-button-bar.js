import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-catalog.js';
import '@furo/data-input/src/furo-data-text-input.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';
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
      Theme.getThemeForComponent('DemoFuroUi5ButtonBar') ||
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
            <h2>Default furo-ui5-button-bar without bind-entity</h2>
            <furo-ui5-button outline @-click="--disableRequest">disable actions</furo-ui5-button>
            <furo-ui5-button outline @-click="--enableRequest">enable actions</furo-ui5-button>
            <div class="hr"></div>

            <furo-ui5-button-bar ƒ-disable-all="--disableRequest" ƒ-enable-all="--enableRequest">
              <furo-ui5-button design="Emphasized" unelevated>primary action</furo-ui5-button>
              <furo-ui5-button design="Default" unelevated>second action</furo-ui5-button>
              <furo-ui5-button design="Positive" unelevated>another action</furo-ui5-button>

              <furo-empty-spacer></furo-empty-spacer>
              <furo-ui5-button design="Negative">Danger Action</furo-ui5-button>
            </furo-ui5-button-bar>

            <h2>furo-ui5-button-bar with bound entity</h2>
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
            <furo-ui5-button-bar
              ƒ-bind-entity="--entity"
              ƒ-disable-all="--reqStarted"
              ƒ-enable-all="--response"
            >
              <furo-ui5-button rel="self" hide-no-rel primary unelevated
                >hidden if no relation self
              </furo-ui5-button>
              <furo-ui5-button rel="update" disable-no-rel outline
                >disabled if no relation update</furo-ui5-button
              >
              <furo-ui5-button disable-pristine disable-not-valid secondary unelevated
                >disabled if pristine (e.g. save)</furo-ui5-button
              >

              <furo-empty-spacer></furo-empty-spacer>
              <furo-ui5-button rel="delete" disable-no-rel design="Negative" unelevated
                >Danger Action</furo-ui5-button
              >
            </furo-ui5-button-bar>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-button-bar', DemoFuroUi5ButtonBar);
