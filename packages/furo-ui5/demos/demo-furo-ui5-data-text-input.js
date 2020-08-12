import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';
import '@furo/input/src/furo-button.js';
import '@furo/data-input/demos/helper/produce-qp-data.js';
import '@furo/data-input/demos/helper/fetch-universal-json.js';

import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/icons/example.js'
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
      Theme.getThemeForComponent('DemoFuroUi5DataTextInput') ||
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
    )
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo furo-ui5-data-text-input</h2>
      <furo-demo-snippet>
        <template>

          <furo-form-layouter one>
            <div>
              <p>furo-ui5-data-text-input with icon slot</p>
              <furo-ui5-data-text-input ƒ-bind-data="--entity(*.data.display_name)" value-state="Information">
                <ui5-icon slot="icon" name="example"></ui5-icon>
              </furo-ui5-data-text-input>
            </div>

            <furo-ui5-data-text-input ƒ-bind-data="--entity(*.data.description)"></furo-ui5-data-text-input>
            <furo-ui5-data-text-input ƒ-bind-data="--entity(*.data.description)"></furo-ui5-data-text-input>
            <furo-ui5-data-text-input ƒ-bind-data="--entity(*.data.furo_data_text_input)"></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-button-bar>
            <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
          </furo-button-bar>

          <p>
            ui5-text-input with type furo.fat.String bindings.
          </p>
          <furo-form-layouter two>
            <furo-ui5-data-text-input
              autofocus
              ƒ-bind-data="--entityU(*.data.fat_string)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              autofocus
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              autofocus
              condensed
              ƒ-bind-data="--entityU(*.data.fat_string)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              autofocus
              condensed
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>
          <fetch-universal-json
            file="/mockdata/ui5/demos/fat-universal.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>
          <fetch-universal-json
            file="/mockdata/ui5/demos/fat-universal-unset-label.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>
          <fetch-universal-json
            file="/mockdata/ui5/demos/fat-universal-with-meta.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>

          <fetch-universal-json @-data-loaded="--mockdata"></fetch-universal-json>
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
    `
  }
}

window.customElements.define('demo-furo-ui5-data-text-input', DemoFuroUi5DataTextInput)
