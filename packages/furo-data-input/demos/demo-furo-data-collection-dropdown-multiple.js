import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/src/furo-catalog.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link';
import './helper/produce-qp-data.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/form/src/furo-form-layouter.js';

/**
 * `demo-furo-data-collection-dropdown-multiple`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCollectionDropdownMultiple extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataCollectionDropdownMultiple') ||
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
          <h2>Demo furo-data-collection-dropdown with multiple selection</h2>
          <p>
            this demo show you how to bind a type to collection dropdown and how inject the
            collection data
          </p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-data-collection-dropdown
                value-field="id"
                display-field="display_name"
                subfield="data.id"
                ƒ-bind-data="--collectionDO(*.entities)"
                ƒ-inject-entities="--response(*.entities)"
                @-item-selected="--itemSelected"
                size="3"
                hint="Holding down the Ctrl to select"
              ></furo-data-collection-dropdown>
            </furo-form-layouter>

            <furo-pretty-json ƒ-inject-data="--itemSelected"></furo-pretty-json>

            <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>

            <furo-collection-agent
              service="TaskService"
              ƒ-hts-in="--hts"
              ƒ-list="--load"
              @-response="--response"
            >
            </furo-collection-agent>

            <furo-data-object
              type="task.TaskCollection"
              @-object-ready="--collectionDO"
              ƒ-inject-raw="--response"
            ></furo-data-object>

            <furo-location @-location-changed="--locationChanged"></furo-location>

            <furo-deep-link
              service="TaskService"
              @-hts-out="--hts"
              ƒ-qp-in="--locationChanged(*.query)"
            ></furo-deep-link>

            <furo-button raised label="load" @-click="--load"></furo-button>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define(
  'demo-furo-data-collection-dropdown-multiple',
  DemoFuroDataCollectionDropdownMultiple,
);
