import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-collection-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies


/**
 * `demo-furo-ui5-data-segmented-button`
 *
 * @Summary basic usage of furo-ui5-data-segmented-button
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataSegmentedButton extends FBP(LitElement) {
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
      <h2>Demo furo-ui5-data-segmented-button</h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter one>
            <ui5-button full design="Emphasized" @-click="--load">load data</ui5-button>

            <p>
              Option items from spec. Type furo.Optionitem.
            </p>

            <furo-ui5-data-segmented-button
              ƒ-bind-data="--daoPerson(*.sex)"
            ></furo-ui5-data-segmented-button>

            <furo-ui5-data-text-input
              value-state="Success"
              ƒ-bind-data="--daoPerson(*.sex)"
            ></furo-ui5-data-text-input>

            <hr />

            <p>
              Option items from an array of objects with bindOptions(). Display field is set to
              field display_name. Additional static ui5-radiobuttons set in the markup.
            </p>
            <furo-ui5-data-segmented-button
              value-field-path="data.id"
              id-field-path="data.id"
              display-field-path="data.display_name"
              ƒ-bind-options="--collection(*.entities)"
              ƒ-bind-data="--entity(*.owner.id)"
            >
              <ui5-segmented-button-item data-id="A" icon="menu"
                >Option A</ui5-segmented-button-item
              >
              <ui5-segmented-button-item data-id="B"
                >Option B with a very long text</ui5-segmented-button-item
              >
              <ui5-segmented-button-item data-id="C">Option C</ui5-segmented-button-item>
              <ui5-segmented-button-item data-id="D" design="Negative"
                >Option D</ui5-segmented-button-item
              >
            </furo-ui5-data-segmented-button>

            <div>
              <p>
                Option items from an array of objects with bindOptions(). Display field is set to
                field first_name
              </p>
              <furo-ui5-data-segmented-button
                value-field-path="data.id"
                id-field-path="data.id"
                display-field-path="data.first_name"
                ƒ-bind-options="--collection(*.entities)"
                ƒ-bind-data="--entity(*.owner.id)"
              ></furo-ui5-data-segmented-button>
            </div>
            <hr />
            <p>
              Bound input field: owner.id. If you enter a valid owner ID, the items in the
              collection drop-down list automatically display the record matching the ID.
            </p>
            <furo-ui5-data-text-input
              value-state="Success"
              ƒ-bind-data="--entity(*.owner.id)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-data-object type="task.Task" @-object-ready="--entity"></furo-data-object>

          <furo-data-object type="person.Person" @-object-ready="--daoPerson"></furo-data-object>

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
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-segmented-button', DemoFuroUi5DataSegmentedButton);
