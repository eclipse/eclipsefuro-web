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
                label="bind object which value-sub-field: id"
                display-sub-field="description"
                value-sub-field="id"
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--entity(*.data)"
                @-item-selected="--itemSelected"
              ></furo-data-collection-dropdown>

              <furo-data-collection-dropdown
                leading-icon="mail"
                trailing-icon="fingerprint"
                display-field="id"
                label="bind scalar value data.id"
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--entity(*.data.id)"
                @-item-selected="--itemSelected"
              ></furo-data-collection-dropdown>

              <furo-data-collection-dropdown
                leading-icon="mail"
                trailing-icon="fingerprint"
                display-field="id"
                value-sub-field="estimated_time"
                display-sub-field="estimated_time"
                label="bind scalar value data.estimated_time"
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--entity(*.data)"
                @-item-selected="--itemSelected"
              ></furo-data-collection-dropdown>

              <furo-data-text-input
                label="you can set this estimated_time to update the dropdown"
                ƒ-bind-data="--entity(*.data.estimated_time)"
              ></furo-data-text-input>

              <furo-data-collection-dropdown
                auto-select-first
                leading-icon="mail"
                trailing-icon="fingerprint"
                display-field="id"
                value-sub-field="estimated_time"
                display-sub-field="estimated_time"
                label="bind description, auto-select-first is set"
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--entity(*.data.description)"
                @-item-selected="--itemSelected"
              ></furo-data-collection-dropdown>

              <furo-emtpy-spacer></furo-emtpy-spacer>
              <furo-data-collection-dropdown
                label="use meta options from spec as the dropdown list"
                ƒ-bind-data="--personDO(*.sex)"
              ></furo-data-collection-dropdown>

              <furo-data-text-input
                label="sex"
                ƒ-bind-data="--personDO(*.sex)"
              ></furo-data-text-input>
            </furo-form-layouter>

            <furo-pretty-json ƒ-inject-data="--itemSelected"></furo-pretty-json>

            <furo-data-object
              ƒ-init="--reset"
              type="task.TaskEntity"
              @-object-ready="--entity"
            ></furo-data-object>
            <furo-data-object
              type="task.TaskCollection"
              @-object-ready="--collection"
              ƒ-inject-raw="--response"
            ></furo-data-object>

            <furo-data-object type="person.Person" @-object-ready="--personDO"></furo-data-object>

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
            <furo-button raised label="reset" @-click="--reset"></furo-button>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-data-collection-dropdown', DemoFuroDataCollectionDropdown);
