/* eslint-disable  import/no-extraneous-dependencies */
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

import '@furo/doc-helper';
import '@furo/ui5/src/furo-catalog.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-deep-link.js';
import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';
import '@furo/input/src/furo-button.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';
import '@furo/data-input/demos/helper/fetch-universal-json.js';

import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';

/**
 * `demo-furo-ui5-data-number-input`
 *
 * @Summary basic usage of furo-ui5-data-number-input
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataNumberInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataNumberInput') ||
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

        furo-demo-snippet {
          height: 100%;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 1em;
        }

        .width-4\\/12 {
          grid-column: span 4;
          justify-self: end;
          align-self: center;
        }

        .width-8\\/12 {
          grid-column: span 8;
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
        <furo-demo-snippet>
          <template>
            <furo-vertical-scroller>
              <h2>Demo furo-ui5-data-number-input</h2>
              <furo-form-layouter two>
                <furo-ui5-data-number-input
                  ƒ-bind-data="--entity(*.data.furo_data_number_input)"
                ></furo-ui5-data-number-input>
                <furo-ui5-data-number-input
                  ƒ-bind-data="--entity(*.data.furo_data_range_input)"
                ></furo-ui5-data-number-input>
              </furo-form-layouter>

              <furo-button-bar>
                <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A2%7D"></produce-qp-data>
              </furo-button-bar>

              <p>
                furo-ui5-data-number-input with type google.protobuf.Int32Value binding.
              </p>
              <furo-form-layouter two>
                <furo-ui5-data-number-input
                  ƒ-bind-data="--entityU(*.data.wrapper_int32)"
                ></furo-ui5-data-number-input>
              </furo-form-layouter>

              <p>
                furo-ui5-data-number-input with type furo.fat.Int32 binding.
              </p>
              <furo-form-layouter two>
                <furo-ui5-data-number-input
                  ƒ-bind-data="--entityU(*.data.fat_int32)"
                ></furo-ui5-data-number-input>
              </furo-form-layouter>

              <fetch-universal-json
                file="/mockdata/ui5/demos/fat-universal.json"
                @-data-loaded="--mockdata"
              >
                mockdate with suggestions
              </fetch-universal-json>
              <fetch-universal-json
                file="/mockdata/ui5/demos/fat-universal-unset-label.json"
                @-data-loaded="--mockdata"
              ></fetch-universal-json>
              <fetch-universal-json
                file="/mockdata/ui5/demos/fat-universal-with-meta.json"
                @-data-loaded="--mockdata"
              ></fetch-universal-json>

              <furo-data-object
                type="universaltest.UniversaltestEntity"
                @-object-ready="--entityU"
                ƒ-inject-raw="--mockdata"
              ></furo-data-object>

              <furo-data-object
                type="experiment.ExperimentEntity"
                @-object-ready="--entity"
                ƒ-inject-raw="--response"
              ></furo-data-object>
              <furo-deep-link
                service="ExperimentService"
                @-hts-out="--hts"
                ƒ-qp-in="--qp"
              ></furo-deep-link>
              <furo-entity-agent
                service="ExperimentService"
                ƒ-hts-in="--hts"
                load-on-hts-in
                ƒ-bind-request-data="--entity"
                @-response="--response"
              >
              </furo-entity-agent>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-number-input', DemoFuroUi5DataNumberInput);
