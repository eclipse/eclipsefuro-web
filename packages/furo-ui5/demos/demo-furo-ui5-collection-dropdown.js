import { LitElement, html, css } from 'lit-element'
import { Theme } from '@furo/framework/src/theme'
import { FBP } from '@furo/fbp/src/fbp.js'

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js'
import '@furo/data/src/furo-collection-agent.js'
import '@furo/data/src/furo-deep-link.js'
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js'
import '@furo/form/src/furo-button-bar.js'
import '@furo/data-input/demos/helper/produce-qp-data.js'
import '@furo/data-input/demos/helper/fetch-universal-json.js'

import '@ui5/webcomponents/dist/Icon.js'
import '../src/lib/ui5-icons.js'

/**
 * `demo-furo-ui5-data-collection-dropdown`
 *
 * @Summary basic usage of furo-ui5-data-collection-dropdown
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataCollectionDropdown extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataCollectionDropdown') ||
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
      <h2>Demo furo-ui5-data-collection-dropdown</h2>
      <furo-demo-snippet>
        <template>

          <furo-form-layouter one>
            <furo-ui5-data-collection-dropdown value-field="id"
                                               display-field="display_name"
                                               ƒ-inject-entities="--response(*.entities)"
                                               ƒ-bind-data="--entity(*.owner)">
            </furo-ui5-data-collection-dropdown>
            <hr>
            <furo-ui5-data-text-input ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-data-text-input>
            <furo-ui5-data-text-input ƒ-bind-data="--entity(*.owner.display_name)"></furo-ui5-data-text-input>

          </furo-form-layouter>

          <furo-button-bar>
            <ui5-button @-click="--load">load data</ui5-button>
          </furo-button-bar>

          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>
          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--hts"
            ƒ-list="--load"
            @-response="--response"
          >
          </furo-collection-agent>

          <furo-location @-location-changed="--locationChanged"></furo-location>

          <furo-deep-link
            service="PersonService"
            @-hts-out="--hts"
            ƒ-qp-in="--locationChanged(*.query)"
          ></furo-deep-link>

        </template>
      </furo-demo-snippet>
    `
  }
}

window.customElements.define('demo-furo-ui5-data-collection-dropdown', DemoFuroUi5DataCollectionDropdown)
