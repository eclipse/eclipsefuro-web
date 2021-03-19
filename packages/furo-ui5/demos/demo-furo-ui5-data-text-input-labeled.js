import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
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
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/fetch-universal-json.js';

import '@ui5/webcomponents-icons/dist/filter.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/accept.js';

import './helper/ui5-demo-playground.js';

/**
 * `demo-furo-ui5-data-text-input-labeled`
 *
 * @Summary basic usage of furo-ui5-data-text-input-labeled
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTextInputLabeled extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataTextInputLabeled') ||
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
        Basic usage of furo-ui5-data-text-input-labeled
      </h2>
      <furo-demo-snippet>
        <template>
          <ui5-demo-playground
            heading="Text Input Playground"
            @-test-data-requested="--demoDataRequested"
          >
            <furo-ui5-data-text-input-labeled
              placeholder="Fill in a description"
              value-state="Critical"
              title="The title attribute specifies extra information about an element."
              ƒ-bind-data="--entity(*.data.description)"
            >
              <ui5-icon slot="icon" name="filter"></ui5-icon>
              <div slot="valueStateMessage">
                This is an error message. Extra long text used as an error message.
              </div>
            </furo-ui5-data-text-input-labeled>

            <furo-ui5-data-text-input-labeled
              placeholder="Fill in a text"
              value-state="None"
              title="The title attribute specifies extra information about an element."
              ƒ-bind-data="--entity(*.data.furo_data_text_input)"
            >
              <ui5-icon slot="icon" name=""></ui5-icon>
            </furo-ui5-data-text-input-labeled>
          </ui5-demo-playground>

          <produce-qp-data
            hidden
            ƒ-produce="--demoDataRequested"
            @-data="--qp"
            qpescaped="%7B%22exp%22%3A1%7D"
          ></produce-qp-data>

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

window.customElements.define(
  'demo-furo-ui5-data-text-input-labeled',
  DemoFuroUi5DataTextInputLabeled,
);
