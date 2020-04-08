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
 * `demo-furo-data-collection-dropdown`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroDataCollectionDropdown extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroDataCollectionDropdown') ||
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
          <h2>Demo furo-data-collection-dropdown</h2>
          <p>
            this demo show you how to bind a type to collection dropdown and how inject the
            collection data
          </p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-form-layouter two>
              <furo-data-collection-dropdown
                hint="hint override"
                leading-icon="mail"
                trailing-icon="fingerprint"
                label="Use phone as display"
                subfield="id"
                subfield-display="description"
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--entity"
              ></furo-data-collection-dropdown>

              <furo-data-collection-dropdown
                leading-icon="mail"
                trailing-icon="fingerprint"
                display-field="description"
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--entity"
              ></furo-data-collection-dropdown>

              <furo-data-collection-dropdown
                value-field="display_name"
                display-field="display_name"
                ƒ-inject-entities="--response(*.entities)"
                @-item-selected="--itemSelected"
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

window.customElements.define('demo-furo-data-collection-dropdown', DemoFuroDataCollectionDropdown);
