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
 * `demo-furo-ui5-data-checkbox-input`
 *
 * @Summary basic usage of furo-ui5-data-checkbox-input
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataCheckboxInput extends FBP(LitElement) {
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
      <h2>Demo furo-ui5-data-checkbox-input</h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter one>
            <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data</furo-ui5-button
            >
            <p full>
              Label will be showed on the right side of the checkbox as information text.
            </p>
            <div>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
              ></furo-ui5-data-checkbox-input>
              <furo-ui5-data-checkbox-input
                value-state="Error"
                wrapping-type="Normal"
                ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
              ></furo-ui5-data-checkbox-input>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
              ></furo-ui5-data-checkbox-input>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
              ></furo-ui5-data-checkbox-input>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
              ></furo-ui5-data-checkbox-input>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
              ></furo-ui5-data-checkbox-input>
            </div>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-form-layouter one>
            <p full>
              Value with indeterminate state. Defines whether the component is displayed as
              partially checked. Only for google.protobuf.BoolValue or furo.fat.Bool
            </p>
            <div>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--daoUniversal(*.wrapper_bool)"
              ></furo-ui5-data-checkbox-input>
              <furo-ui5-data-checkbox-input
                ƒ-bind-data="--daoUniversal(*.fat_bool)"
              ></furo-ui5-data-checkbox-input>
            </div>
          </furo-form-layouter>

          <furo-button-bar>
            <produce-qp-data
              hidden
              ƒ-produce="--demoDataRequested"
              @-data="--qp"
              qpescaped="%7B%22exp%22%3A1%7D"
            ></produce-qp-data>
          </furo-button-bar>

          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>
          <furo-data-object
            type="universaltest.Universaltest"
            @-object-ready="--daoUniversal"
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

window.customElements.define('demo-furo-ui5-data-checkbox-input', DemoFuroUi5DataCheckboxInput);
