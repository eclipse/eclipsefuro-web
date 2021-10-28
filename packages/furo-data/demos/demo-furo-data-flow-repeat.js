import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';

import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-button.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/fetch-universal-json.js';

/**
 * `demo-furo-data-flow-repeat`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataFlowRepeat extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        height: 100%;
        padding-right: var(--spacing);
      }

      :host([hidden]) {
        display: none;
      }
    `;
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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form header-text="Data repeat demo" hasmedia hasaction>
                <furo-form-layouter four>
                  <furo-data-flow-repeat
                    ƒ-bind-data="--entity(*.data.fat_string_repeated)"
                    focus-added-item
                    ƒ-add="--addClkd"
                  >
                    <template>
                      <furo-ui5-data-text-input-labeled
                        ƒ-bind-data="--init"
                        ƒ-focus="--itemSelected"
                      ></furo-ui5-data-text-input-labeled>
                    </template>
                  </furo-data-flow-repeat>
                </furo-form-layouter>
              </furo-form>
              <furo-ui5-button @-click="--addClkd">add</furo-ui5-button>

              <furo-ui5-button @-click="--init">Reset</furo-ui5-button>
              <p>Click on the links below to load data</p>
              <fetch-universal-json
                file="/mockdata/ui5/demos/fat-universal.json"
                @-data-loaded="--mockdata"
              >
                mockdata with suggestions
              </fetch-universal-json>

              <fetch-universal-json
                file="/mockdata/ui5/demos/fat-universal-readonly.json"
                @-data-loaded="--mockdata"
              >
                Readonly
              </fetch-universal-json>

              <furo-data-object
                type="universaltest.UniversaltestEntity"
                @-object-ready="--entity"
                ƒ-init="--init"
                ƒ-inject-raw="--mockdata"
              ></furo-data-object>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-flow-repeat', DemoFuroDataFlowRepeat);
