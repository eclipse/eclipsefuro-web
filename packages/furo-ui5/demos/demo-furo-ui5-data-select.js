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
 * `demo-furo-ui5-data-select`
 *
 * @Summary basic usage of furo-ui5-data-text-input
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataSelect extends FBP(LitElement) {
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
        Demo furo-ui5-data-select
      </h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter two>
            <furo-ui5-button design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data
            </furo-ui5-button>
            <furo-ui5-button design="Neutral" @-click="--demoDataReloadRequest"
              >Reload Demo Data
            </furo-ui5-button>
            <h4 full>furo-ui5-data-select without ANY type binding.</h4>
            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it without any binding (no option binding, no field binding).
              </ui5-label>
              <furo-ui5-data-select content style="max-width: 100%;">
                <ui5-option>Tomato</ui5-option>
                <ui5-option>Salad</ui5-option>
                <ui5-option>Strawberry</ui5-option>
                <ui5-option>Red Chili Pepper</ui5-option>
                <div slot="valueStateMessage">
                  Information message. If you use ui5-option elements without data-id attribute, the
                  selected value is the innerText of the option.
                </div>
              </furo-ui5-data-select>
            </furo-ui5-form-field-container>

            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it with option list binding (RepeaterNode). Without data field binding.
              </ui5-label>
              <furo-ui5-data-select
                content
                style="max-width: 100%;"
                ƒ-bind-options="--collection(*.entities)"
                id-field-path="data.id"
                display-field-path="data.display_name"
                value-field-path="data.display_name"
                value-state="Information"
              >
                <ui5-option data-id="">Options not yet available</ui5-option>
                <div slot="valueStateMessage">
                  Information message. This furo-ui5-data-select has no active field binding. When
                  the user selects a value, the value-changed event is fired (Payload: ui5-option
                  element or object from the option list).
                </div>
              </furo-ui5-data-select>
            </furo-ui5-form-field-container>
          </furo-form-layouter>

          <furo-form-layouter two>
            <h4 full>furo-ui5-data-select with SCALAR type bindings.</h4>
            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it with data field binding. The options are provided from the spec of the bound
                field.
              </ui5-label>
              <furo-horizontal-flex id="Custom" content space>
                <furo-ui5-data-select
                  flex
                  ƒ-bind-data="--entity(*.data.type_with_options)"
                  value-state="Information"
                >
                  <ui5-option data-id="">Options not yet available</ui5-option>
                  <div slot="valueStateMessage">
                    Information message. This furo-ui5-data-select has an active field binding but
                    no option list binding. The options are provided from the bound field
                    specification. When the user selects a value, the value-changed event is fired
                    (Payload: ui5-option element or object from the option list) and the value is
                    set to the bound field.
                  </div>
                </furo-ui5-data-select>
                <furo-ui5-data-text-input
                  flex
                  ƒ-bind-data="--entity(*.data.type_with_options)"
                ></furo-ui5-data-text-input>
              </furo-horizontal-flex>
            </furo-ui5-form-field-container>

            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it with data field binding. The options are provided from the meta field of the
                response.
              </ui5-label>
              <furo-horizontal-flex id="Custom" content space>
                <furo-ui5-data-select
                  flex
                  ƒ-bind-data="--entity(*.data.description)"
                  id-field-path="id"
                  display-field-path="display_name"
                  value-field-path="id"
                  value-state="Information"
                >
                  <ui5-option data-id="">Options not yet available</ui5-option>
                  <div slot="valueStateMessage">
                    Information message. This furo-ui5-data-select has an active field binding but
                    no option list binding. The options are provided from the meta field of the
                    response. When the user selects a value, the value-changed event is fired
                    (Payload: ui5-option element or object from the option list) and the value is
                    set to the bound field.
                  </div>
                </furo-ui5-data-select>
                <furo-ui5-data-text-input
                  flex
                  ƒ-bind-data="--entity(*.data.description)"
                ></furo-ui5-data-text-input>
              </furo-horizontal-flex>
            </furo-ui5-form-field-container>

            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it with option list binding (RepeaterNode) and data field binding.
              </ui5-label>
              <furo-horizontal-flex id="Custom" content space>
                <furo-ui5-data-select
                  flex
                  ƒ-bind-data="--entity(*.data.description)"
                  ƒ-bind-options="--collection(*.entities)"
                  id-field-path="data.id"
                  display-field-path="data.display_name"
                  value-field-path="data.id"
                  value-state="Information"
                >
                  <ui5-option data-id="">Options not yet available</ui5-option>
                  <div slot="valueStateMessage">
                    Information message. This furo-ui5-data-select has an active field binding. When
                    the user selects a value, the value-changed event is fired (Payload: ui5-option
                    element or object from the option list) and the value is set to the bound field.
                  </div>
                </furo-ui5-data-select>

                <furo-ui5-data-text-input
                  flex
                  ƒ-bind-data="--entity(*.data.description)"
                ></furo-ui5-data-text-input>
              </furo-horizontal-flex>
            </furo-ui5-form-field-container>
          </furo-form-layouter>

          <h4>furo-ui5-data-select with google.protobuf.StringValue (Wrapper) bindings.</h4>
          <furo-form-layouter two>
            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it with option list binding (RepeaterNode)
              </ui5-label>
              <furo-ui5-data-select
                content
                style="max-width: 100%;"
                ƒ-bind-data="--entityU(*.data.wrapper_string)"
                ƒ-bind-options="--collection(*.entities)"
                id-field-path="data.id"
                display-field-path="data.display_name"
                value-field-path="data.id"
                value-state="Information"
              >
                <ui5-option data-id="">Options not yet available</ui5-option>
                <div slot="valueStateMessage">
                  Information message. This furo-ui5-data-select has a field binding to a
                  google.protobuf.StringValue.
                </div>
              </furo-ui5-data-select>
            </furo-ui5-form-field-container>
            <furo-ui5-data-text-input-labeled
              ƒ-bind-data="--entityU(*.data.wrapper_string)"
            ></furo-ui5-data-text-input-labeled>
          </furo-form-layouter>

          <h4>furo-ui5-data-select with furo.fat.String (FAT) bindings.</h4>
          <furo-form-layouter two>
            <furo-ui5-form-field-container>
              <ui5-label label slot="label" show-colon wrap
                >Use it with option list binding (RepeaterNode)
              </ui5-label>
              <furo-ui5-data-select
                content
                style="max-width: 100%;"
                ƒ-bind-data="--entityU(*.data.fat_string)"
                ƒ-bind-options="--collection(*.entities)"
                id-field-path="data.id"
                display-field-path="data.display_name"
                value-field-path="data.id"
                value-state="Information"
              >
                <ui5-option data-id="">Options not yet available</ui5-option>
                <div slot="valueStateMessage">
                  Information message. This furo-ui5-data-select has a field binding to a
                  furo.fat.String.
                </div>
              </furo-ui5-data-select>
            </furo-ui5-form-field-container>
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
            ƒ-list="--demoDataReloadRequest"
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

window.customElements.define('demo-furo-ui5-data-select', DemoFuroUi5DataSelect);
