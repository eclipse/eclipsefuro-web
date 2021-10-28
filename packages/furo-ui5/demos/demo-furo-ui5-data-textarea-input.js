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


/**
 * `demo-furo-ui5-data-textarea-input`
 *
 * @Summary basic usage of furo-ui5-data-textarea-input
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTextareaInput extends FBP(LitElement) {
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
      <h2>Demo furo-ui5-data-textarea-input</h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter one>
            <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data</furo-ui5-button
            >
            <furo-ui5-data-textarea-input
              ƒ-bind-data="--entity(*.data.description)"
            ></furo-ui5-data-textarea-input>
            <furo-ui5-data-textarea-input
              ƒ-bind-data="--entity(*.data.furo_data_text_input)"
            ></furo-ui5-data-textarea-input>
            <furo-ui5-data-textarea-input
              value-state="Information"
              growing
              ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
            >
              <div slot="valueStateMessage">Informative</div>
            </furo-ui5-data-textarea-input>
            <furo-ui5-data-textarea-input
              maxlength="10"
              show-exceeded-text
              ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
            ></furo-ui5-data-textarea-input>
          </furo-form-layouter>
          <furo-button-bar>
            <produce-qp-data
              hidden
              ƒ-produce="--demoDataRequested"
              @-data="--qp"
              qpescaped="%7B%22exp%22%3A1%7D"
            ></produce-qp-data>
          </furo-button-bar>
          <h3>ui5-data-textarea-input with valueState</h3>
          <furo-form-layouter>
            <furo-ui5-data-textarea-input
              ƒ-bind-data="--UniEntity(*.data.fat_string)"
            ></furo-ui5-data-textarea-input>
          </furo-form-layouter>
          <furo-button-bar>
            <ui5-button design="Emphasized">
              <fetch-universal-json
                file="/mockdata/ui5/demos/fat-universal.json"
                @-data-loaded="--mockdata"
              ></fetch-universal-json
            ></ui5-button>
          </furo-button-bar>

          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-data-object
            type="universaltest.UniversaltestEntity"
            @-object-ready="--UniEntity"
            ƒ-inject-raw="--mockdata"
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

window.customElements.define('demo-furo-ui5-data-textarea-input', DemoFuroUi5DataTextareaInput);
