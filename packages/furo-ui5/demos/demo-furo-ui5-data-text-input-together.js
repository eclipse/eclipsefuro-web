import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@ui5/webcomponents/dist/Label.js';
import './gen-demo-data.js';

/**
 * `demo-furo-ui5-data-text-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataTextInputTogether extends FBP(LitElement) {
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
            <style>
              furo-form-layouter {
                grid-row-gap: var(--spacing-s);
              }
            </style>
            <furo-vertical-scroller>
              <furo-split-view>
                <furo-form header-text="UI5">
                  <furo-form-layouter  style="align-items: end;">

                    <!-- fat -->

                    <furo-ui5-data-text-input id="input1" ƒ-bind-data="--DataObject(*.data.fat_string)"></furo-ui5-data-text-input>


                    <furo-ui5-data-text-input id="input2" placeholder="override placeholder"
                                    ƒ-bind-data="--DataObject(*.data.fat_string_list)"></furo-ui5-data-text-input>

                  </furo-form-layouter>
                </furo-form>



                <furo-form header-text="Settings" slot="master">
                  <furo-form-layouter two style="align-items: end; margin-right: 12px">
                    <furo-data-text-input condensed label="leading-icon"
                                          ƒ-bind-data="--DataInjected(*.data.fat_string.attributes.leading-icon)"></furo-data-text-input>
                    <furo-data-text-input condensed label="trailing-icon"
                                          ƒ-bind-data="--DataInjected(*.data.fat_string.attributes.trailing-icon)"></furo-data-text-input>
                    <furo-data-collection-dropdown condensed label="value-state"
                                          list=",None, Error, Information, Warning, Success"
                                          ƒ-bind-data="--DataInjected(*.data.fat_string.attributes.value-state)"></furo-data-collection-dropdown>
                    <furo-data-text-input condensed label="value"
                                          ƒ-bind-data="--DataInjected(*.data.fat_string.value)"></furo-data-text-input>


                  </furo-form-layouter>
                </furo-form>

              </furo-split-view>


              <!--possible component composition-->
              <div>
                <ui5-label style="display: block" for="input1" required show-colon>Display name</ui5-label>
                <furo-ui5-data-text-input style="width: 100%" id="input1" value-state="Information"
                                ƒ-bind-data="--DataObject(*.display_name)">
                  <div slot="valueStateMessage">This is an information message. Extra long text used as an information
                    message.
                  </div>
                </furo-ui5-data-text-input>
              </div>

              </furo-form-layouter>
              <furo-data-object
                      type="universaltest.UniversaltestEntity"
                      @-object-ready="--DataObject"
                      @-data-changed="--data"
                      @-data-injected="--DataInjected"
                      ƒ-inject-raw="--entity"
              ></furo-data-object>
              <gen-demo-data ƒ-generate="--DataObject" @-data="--entity"></gen-demo-data>
              <furo-pretty-json ƒ-inject-data="--data(*._value)"></furo-pretty-json>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define(
  'demo-furo-ui5-data-text-input-together',
  DemoFuroUi5DataTextInputTogether,
);
