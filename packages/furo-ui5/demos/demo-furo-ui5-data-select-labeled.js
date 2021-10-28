import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-collection-agent.js';
import '@furo/data/src/furo-deep-link.js';
import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-button.js';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies


/**
 * `demo-furo-ui5-data-select-labeled`
 *
 * @Summary basic usage of furo-ui5-data-select-labeled
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataSelectLabeled extends FBP(LitElement) {
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
        Demo furo-ui5-data-select-labeled
      </h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter>
            <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data
            </furo-ui5-button>
          </furo-form-layouter>

          <furo-form-layouter>
            <h4 full>furo-ui5-data-select with SCALAR type bindings.</h4>

            <furo-ui5-data-select-labeled
              ƒ-bind-data="--entity(*.data.type_with_options)"
              value-state="Information"
            >
            </furo-ui5-data-select-labeled>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.data.type_with_options)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <h4>furo-ui5-data-select with google.protobuf.StringValue (Wrapper) bindings.</h4>
          <furo-form-layouter two>
            <furo-ui5-data-select-labeled
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
              ƒ-bind-options="--collection(*.entities)"
              id-field-path="data.id"
              display-field-path="data.display_name"
              value-field-path="data.id"
            >
            </furo-ui5-data-select-labeled>
            <furo-ui5-data-text-input-labeled
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-text-input-labeled>
          </furo-form-layouter>

          <h4>furo-ui5-data-select with furo.fat.String (FAT) bindings.</h4>
          <furo-form-layouter two>
            <furo-ui5-data-select-labeled
              ƒ-bind-data="--entityU(*.data.fat_string)"
              ƒ-bind-options="--collection(*.entities)"
              id-field-path="data.id"
              display-field-path="data.display_name"
              value-field-path="data.id"
              value-state="Information"
            >
            </furo-ui5-data-select-labeled>
            <furo-ui5-data-text-input-labeled
              ƒ-bind-data="--entityU(*.data.fat_string)"
            ></furo-ui5-data-text-input-labeled>
          </furo-form-layouter>

          <furo-button-bar>
            <produce-qp-data
              hidden
              ƒ-produce="--demoDataRequested"
              @-data="--qp"
              qpescaped="%7B%22exp%22%3A1%7D"
            ></produce-qp-data>
          </furo-button-bar>

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

          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
            ƒ-inject-raw="--responseCollection"
          ></furo-data-object>

          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--htsPerson"
            list-on-hts-in
            @-response="--responseCollection"
          >
          </furo-collection-agent>

          <furo-deep-link
            service="PersonService"
            @-hts-out="--htsPerson"
            ƒ-trigger="--qp"
          ></furo-deep-link>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-select-labeled', DemoFuroUi5DataSelectLabeled);
