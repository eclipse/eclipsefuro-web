import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/fbp/src/flow-repeat';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';

/**
 * `demo-furo-data-property`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataPropertyDisplay extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataPropertyDisplay') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
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
          <h2>Demo furo-data-property-display</h2>
          <p>Bind your fields as usual.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form-layouter two>
                <!-- single Property -->
                <furo-data-property-display
                  condensed
                  noborder
                  ƒ-bind-data="--entity(*.single_type_property)"
                ></furo-data-property-display>

                <!-- repeated Property -->
                <furo-data-property-display
                  condensed
                  noborder
                  something
                  ƒ-bind-data="--entity(*.type_property)"
                ></furo-data-property-display>

                <!-- single Property -->
                <furo-data-property-display
                  ƒ-bind-data="--entity(*.single_type_property)"
                ></furo-data-property-display>
              </furo-form-layouter>

              <produce-qp-data auto @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
              <furo-data-object
                type="experiment.Experiment"
                @-object-ready="--entity"
                ƒ-inject-raw="--response(*.data)"
              ></furo-data-object>
              <furo-deep-link
                service="ExperimentService"
                @-hts-out="--hts"
                ƒ-qp-in="--qp"
              ></furo-deep-link>
              <furo-entity-agent
                service="ExperimentService"
                ƒ-hts-in="--hts"
                ƒ-load="--hts"
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

window.customElements.define('demo-furo-data-property-display', DemoFuroDataPropertyDisplay);
