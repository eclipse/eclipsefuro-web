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

// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';

/**
 * `demo-furo-ui5-data-text-input`
 *
 * @Summary basic usage of furo-ui5-data-text-input
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTextInput extends FBP(LitElement) {
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
      <h2>
        Demo furo-ui5-data-text-input, furo-ui5-data-textarea-input and furo-ui5-password-input
      </h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter two>
            <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data</furo-ui5-button
            >
            <furo-ui5-data-text-input
              style="width: 100%"
              ƒ-bind-data="--entity(*.data.display_name)"
              value-state="Error"
            >
              <div slot="valueStateMessage">
                This is an error message. Extra long text used as an error message.
              </div>
              <ui5-icon slot="icon" name="signature"></ui5-icon>
            </furo-ui5-data-text-input>

            <div style="display: grid; grid-template-columns: repeat(12, 1fr); grid-gap: 1em;">
              <div style="grid-column: span 4; justify-self: end; align-self: center;">
                <ui5-label for="Input" show-colon>Description</ui5-label>
              </div>
              <div style="grid-column: span 8;">
                <furo-ui5-data-text-input
                  id="Input"
                  style="width: 100%"
                  placeholder="Please fill in a description"
                  ƒ-bind-data="--entity(*.data.description)"
                ></furo-ui5-data-text-input>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(12, 1fr); grid-gap: 1em;">
              <div style="grid-column: span 4; justify-self: end; align-self: center;">
                <ui5-label for="Input" wrapping-type="Normal" show-colon
                  >Description (with a lot of chars)</ui5-label
                >
              </div>
              <div style="grid-column: span 8;">
                <furo-ui5-data-text-input
                  id="Input"
                  style="width: 100%"
                  ƒ-bind-data="--entity(*.data.description)"
                ></furo-ui5-data-text-input>
              </div>
            </div>

            <furo-ui5-data-textarea-input
              ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
            ></furo-ui5-data-textarea-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.furo_data_text_input)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.furo_data_number_input)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-password-input
              ƒ-bind-data="--entity(*.data.furo_data_textarea_input)"
            ></furo-ui5-data-password-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.google_timestamp)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-button-bar>
            <produce-qp-data
              hidden
              ƒ-produce="--demoDataRequested"
              @-data="--qp"
              qpescaped="%7B%22exp%22%3A1%7D"
            ></produce-qp-data>
          </furo-button-bar>

          <p>
            furo-ui5-data-text-input with type Google wrapper String bindings.
          </p>
          <furo-form-layouter two>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <p>
            furo-ui5-data-text-input with type furo.fat.String bindings.
          </p>
          <furo-form-layouter two>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entityU(*.data.fat_string)"
            ></furo-ui5-data-text-input>

            <furo-ui5-data-text-input
              ƒ-bind-data="--entityU(*.data.fat_string)"
            ></furo-ui5-data-text-input>

            <furo-ui5-data-password-input
              ƒ-bind-data="--entityU(*.data.fat_string))"
            ></furo-ui5-data-password-input>
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

window.customElements.define('demo-furo-ui5-data-text-input', DemoFuroUi5DataTextInput);
