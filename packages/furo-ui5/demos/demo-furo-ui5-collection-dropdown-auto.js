/* eslint-disable  import/no-extraneous-dependencies */
import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

import '@furo/doc-helper';
import '@furo/ui5/src/furo-ui5-data-collection-dropdown.js';
import '@furo/ui5/src/furo-ui5-data-text-input.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-collection-agent.js';
import '@furo/data/src/furo-entity-agent.js';
import '@furo/data/src/furo-deep-link.js';
import '@furo/form/src/furo-form-layouter.js';
import '@furo/form/src/furo-button-bar.js';


import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';
/**
 * `demo-furo-ui5-data-collection-dropdown`
 *
 * @Summary basic usage of furo-ui5-data-collection-dropdown
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataCollectionDropdownAuto extends FBP(LitElement) {
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

        furo-demo-snippet {
          height: 100%;
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
        <furo-demo-snippet>
          <template>
            <furo-vertical-scroller>
              <h2>Demo furo-ui5-data-collection-dropdown</h2>
              <furo-form-layouter one>
                <div>
                  <p>auto-select-first attribute</p>
                  <p>
                    In this example, the first element will be selected after injecting the entities
                    (when no data was set before)
                  </p>
                  <furo-ui5-data-collection-dropdown
                    style="width: 100%;"
                    value-sub-field="id"
                    display-sub-field="display_name"
                    auto-select-first
                    ƒ-inject-entities="--response(*.entities)"
                    ƒ-bind-data="--entityPerson(*.data)"
                    @-item-selected="--itemSelected"
                  >
                  </furo-ui5-data-collection-dropdown>
                </div>

                <furo-ui5-data-text-input-labeled
                  value-state="Success"
                  ƒ-bind-data="--entityPerson(*.data.id)"
                ></furo-ui5-data-text-input-labeled>
                <furo-ui5-data-text-input-labeled
                  ƒ-bind-data="--entityPerson(*.data.display_name)"
                ></furo-ui5-data-text-input-labeled>
              </furo-form-layouter>

              <fetch-universal-json
                style="display: none"
                ƒ-click="--loadPerson"
                file="/mockdata/persons/2/get.json"
                @-data-loaded="--responseProject"
              ></fetch-universal-json>

              <furo-button-bar>
                <ui5-button design="Emphasized" @-click="--loadPerson">
                  Load Person
                </ui5-button>

                <ui5-button design="Emphasized" @-click="--loadCollection"
                  >load and inject the collection into dropdown list</ui5-button
                >
                <ui5-button @-click="--reset">reset</ui5-button>
              </furo-button-bar>

              <furo-pretty-json ƒ-inject-data="--itemSelected"></furo-pretty-json>

              <furo-data-object
                type="person.PersonEntity"
                @-object-ready="--entityPerson"
                ƒ-inject-raw="--responseProject"
                ƒ-init="--reset"
              ></furo-data-object>

              <furo-collection-agent
                service="PersonService"
                ƒ-hts-in="--hts"
                ƒ-list="--loadCollection"
                @-response="--response"
              >
              </furo-collection-agent>

              <furo-location @-location-changed="--locationChanged"></furo-location>

              <furo-deep-link
                service="PersonService"
                @-hts-out="--hts"
                ƒ-qp-in="--locationChanged(*.query)"
              ></furo-deep-link>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define(
  'demo-furo-ui5-data-collection-dropdown-auto',
  DemoFuroUi5DataCollectionDropdownAuto,
);
