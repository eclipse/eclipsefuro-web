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
 * `demo-furo-ui5-data-repeat`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataRepeat extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-form header-text="Head" hasmedia hasaction>
                <furo-form-layouter two>
                  <div>ui5</div>
                  <div>classic</div>
                  <furo-ui5-data-repeat
                    ƒ-bind-data="--entity(*.data.fat_string_repeated)"
                    repeated-component="furo-ui5-data-text-input"
                    delete-icon="delete"
                    focus-on-create
                    ƒ-add="--addClkd"
                  ></furo-ui5-data-repeat>

                  <furo-data-repeat
                    ƒ-bind-data="--entity(*.data.fat_string_repeated)"
                    repeated-component="furo-data-text-input"
                    delete-icon="delete"
                    focus-on-create
                    ƒ-add="--add2Clkd"
                  ></furo-data-repeat>

                  <furo-ui5-button @-click="--addClkd">add</furo-ui5-button>
                  <furo-ui5-button @-click="--add2Clkd">add</furo-ui5-button>
                </furo-form-layouter>
              </furo-form>

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
                @-data-changed-after-inject="--data"
                ƒ-init="--init"
                ƒ-inject-raw="--mockdata"
              ></furo-data-object>
              <furo-pretty-json
                ƒ-inject-data="--data(*.data.fat_string_repeated._value)"
              ></furo-pretty-json>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-repeat', DemoFuroUi5DataRepeat);
