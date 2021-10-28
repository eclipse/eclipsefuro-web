import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/fbp/src/flow-repeat';
// eslint-disable-next-line import/no-extraneous-dependencies

/**
 * `demo-furo-ui5-data-property`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataProperty extends FBP(LitElement) {
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
        <div>
          <h2>Demo furo-ui5-data-property</h2>
          <p>Bind your fields as usual.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <!-- single Property -->

              <furo-form-layouter two>
                <!-- repeated Property -->
                <furo-ui5-data-property
                  ƒ-bind-data="--entity(*.data.type_property)"
                ></furo-ui5-data-property>
              </furo-form-layouter>

              <furo-button @-click="--reload">reload</furo-button>
              <produce-qp-data auto @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
              <furo-pretty-json
                ƒ-inject-data="--dataChanged(*.data.type_property._value)"
              ></furo-pretty-json>

              <furo-data-object
                type="experiment.ExperimentEntity"
                @-object-ready="--entity"
                @-data-changed-after-inject="--dataChanged"
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
                ƒ-load="--hts,--reload"
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

window.customElements.define('demo-furo-ui5-data-property', DemoFuroUi5DataProperty);
