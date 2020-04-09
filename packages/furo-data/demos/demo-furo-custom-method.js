import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';

/**
 * `demo-furo-custom-method`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCustomMethod extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroCustomMethod') ||
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
          <h2>Demo demo-furo-custom-method</h2>
          <p>Interact with furo-custom-method to trigger your specified services</p>
        </div>

        <furo-demo-snippet flex>
          <template>
            <furo-deep-link
              service="ExperimentService"
              @-hts-out="--hts"
              ƒ-qp-in="--qp"
            ></furo-deep-link>
            <!-- Styles in furo-card are just for the demo -->
            <furo-card
              style="width: 450px; margin: 30px"
              header-text="Some data"
              secondary-text="First load test data then trigger custom method :RELEASE"
            >
              <furo-data-text-input ƒ-bind-data="--dao(*.data.description)"></furo-data-text-input>
              <furo-horizontal-flex slot="action">
                <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
                <furo-button label="Trigger custom method" @-click="--customClick"></furo-button>
              </furo-horizontal-flex>
            </furo-card>
            <furo-entity-agent
              service="ExperimentService"
              ƒ-hts-in="--hts"
              load-on-hts-in
              @-response="--response"
            ></furo-entity-agent>
            <furo-custom-method
              service="ExperimentService"
              method="release"
              ƒ-hts-in="--hts"
              ƒ-trigger="--customClick"
            ></furo-custom-method>
            <furo-data-object
              type="experiment.ExperimentEntity"
              ƒ-inject-raw="--response"
              @-object-ready="--dao"
            ></furo-data-object>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-custom-method', DemoFuroCustomMethod);
