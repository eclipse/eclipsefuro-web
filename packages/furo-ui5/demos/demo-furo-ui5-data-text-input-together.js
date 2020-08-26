import { LitElement, html, css } from 'lit-element'
import { Theme } from '@furo/framework/src/theme.js'
import { FBP } from '@furo/fbp'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js'
import '@ui5/webcomponents/dist/Card.js'
import '@ui5/webcomponents/dist/Label.js'
import './gen-demo-data.js'
import '../src/lib/ui5-icons.js'

/**
 * `demo-furo-ui5-data-text-input-together`
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
    )
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
          <h2>Playground input fields</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>
              furo-form-layouter {
                grid-row-gap: var(--spacing-s);
              }

              div.grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 1em;
              }

              .card-content {
                margin: var(--spacing);
              }
            </style>
            <furo-vertical-scroller>
              <div class="grid">
<!--                Playground Settings-->
                <ui5-card heading="Settings" slot="master">

                  <furo-form-layouter two class="card-content">
                    <ui5-label for="LeadingIcon">Icon (e.g. play, stop, display-more, signature, ...)</ui5-label>
                    <furo-ui5-data-text-input id="LeadingIcon" placeholder="leading-icon"
                                          ƒ-bind-data="--DataObject(*.data.fat_string.attributes.leading-icon)"></furo-ui5-data-text-input>

                    <ui5-label for="ValueStates">Value States</ui5-label>
                    <furo-ui5-data-collection-dropdown id="ValueStates"
                                                       value-field="display_name"
                                                       ƒ-bind-data="--DataObject(*.data.fat_string.attributes.value-state)"
                                                       ƒ-inject-list="--valueStateList"></furo-ui5-data-collection-dropdown>

                    <ui5-label for="FieldValue">Field Value</ui5-label>
                    <furo-ui5-data-text-input id="FieldValue" placeholder="value"
                                          ƒ-bind-data="--DataObject(*.data.fat_string.value)"></furo-ui5-data-text-input>

                  </furo-form-layouter>
                </ui5-card>

<!--                Furo UI5 Input Elements-->
                <ui5-card heading="Furo UI5 Input Elements">

                  <furo-form-layouter class="card-content">
                    <!-- fat -->
                    <furo-ui5-data-text-input id="input1"
                                              ƒ-bind-data="--DataObject(*.data.fat_string)"></furo-ui5-data-text-input>
                    <furo-ui5-data-text-input id="input2" placeholder="override placeholder"
                                              ƒ-bind-data="--DataObject(*.data.fat_string_list)"></furo-ui5-data-text-input>
                  </furo-form-layouter>
                </ui5-card>
              </div>

              </furo-form-layouter>
              <furo-data-object
                type="universaltest.UniversaltestEntity"
                @-object-ready="--DataObject"
                @-data-changed="--data"
                @-data-injected="--DataInjected"
                ƒ-inject-raw="--entity"
              ></furo-data-object>
              <!-- Demo data Generator -->
              <gen-demo-data ƒ-generate="--DataObject" ƒ-generate-value-state-list="--DataObject"
                             @-data="--entity"
                             @-value-state-list="--valueStateList"></gen-demo-data>

              <furo-pretty-json ƒ-inject-data="--data(*._value)"></furo-pretty-json>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `
  }
}

window.customElements.define(
  'demo-furo-ui5-data-text-input-together',
  DemoFuroUi5DataTextInputTogether,
)
