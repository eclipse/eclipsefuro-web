import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
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
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/fetch-universal-json.js';

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
      Theme.getThemeForComponent('DemoFuroUi5DataSelect') ||
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
            <furo-ui5-button full design="Emphasized" @-click="--demoDataRequested"
              >Load Demo Data</furo-ui5-button
            >
            <furo-ui5-form-field-container>
              <ui5-label label slot="label" for="Custom" show-colon
                >Use it without option binding
              </ui5-label>
              <furo-ui5-data-select
                content
                style="max-width: 100%;"
                value-state="Information"
                ƒ-bind-data="--entity(*.data.id)"
              >
                <ui5-option data-id="1" selected>Tomato</ui5-option>
                <ui5-option data-id="2">Salad</ui5-option>
                <ui5-option data-id="3">Strawberry</ui5-option>
                <ui5-option data-id="4">Red Chili Pepper</ui5-option>
                <div slot="valueStateMessage">
                  Information message. If you use ui5-option elements without data-id attribute, the
                  selected value is the innerText of the option.
                </div>
              </furo-ui5-data-select>
            </furo-ui5-form-field-container>

            <furo-ui5-form-field-container>
              <ui5-label label slot="label" for="Custom" show-colon
                >Use it with option binding (RepeaterNode)
              </ui5-label>
              <furo-ui5-data-select
                content
                style="max-width: 100%;"
                ƒ-bind-data="--entity(*.data.display_name)"
                ƒ-bind-options="--collection(*.entities)"
                id-field-path="data.id"
                display-field-path="data.display_name"
                value-field-path="data.id"
                value-state="Information"
              >
                <ui5-option data-id="" selected>Options not yet available</ui5-option>
                <div slot="valueStateMessage">
                  Information message. This is a <a href="#">Link</a>. Extra long text used as an
                  information message. Extra long text used as an information message - 2. Extra
                  long text used as an information message - 3.
                </div>
              </furo-ui5-data-select>
            </furo-ui5-form-field-container>
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
            furo-ui5-data-select with type Google wrapper String bindings.
          </p>
          <furo-form-layouter two> </furo-form-layouter>

          <p>
            furo-ui5-data-select with type furo.fat.String bindings.
          </p>
          <furo-form-layouter two> </furo-form-layouter>

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

window.customElements.define('demo-furo-ui5-data-select', DemoFuroUi5DataSelect);
