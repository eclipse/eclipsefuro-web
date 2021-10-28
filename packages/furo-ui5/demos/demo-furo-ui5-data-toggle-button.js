import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-button.js';
// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';

/**
 * `demo-furo-ui5-data-toggle-button`
 *
 * @Summary basic usage of furo-ui5-data-toggle-button
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataToggleButton extends FBP(LitElement) {
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

        furo-demo-snippet {
          height: 100%;
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
      <h2>Demo furo-ui5-data-toggle-button</h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter two>
            <furo-ui5-data-toggle-button
              design="Emphasized"
              ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
              >Checkbox Input
            </furo-ui5-data-toggle-button>

            <furo-ui5-data-toggle-button
              design="Negative"
              value-state="Information"
              wrap
              ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
              >Bool Icon
            </furo-ui5-data-toggle-button>

            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>
          <furo-button-bar>
            <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
          </furo-button-bar>

          <p>furo-ui5-data-toggle-button with FAT and Google Wrapper bindings.</p>
          <furo-form-layouter two>
            <furo-ui5-data-toggle-button ƒ-bind-data="--entityU(*.data.fat_bool)" icon-end
              >Fat Bool
            </furo-ui5-data-toggle-button>

            <furo-ui5-data-toggle-button ƒ-bind-data="--entityU(*.data.wrapper_bool)"
              >Wrapper Bool
            </furo-ui5-data-toggle-button>

            <furo-ui5-data-text-input
              ƒ-bind-data="--entityU(*.data.fat_bool)"
            ></furo-ui5-data-text-input>

            <furo-ui5-data-text-input
              ƒ-bind-data="--entityU(*.data.wrapper_bool"
            ></furo-ui5-data-text-input>
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
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-toggle-button', DemoFuroUi5DataToggleButton);
