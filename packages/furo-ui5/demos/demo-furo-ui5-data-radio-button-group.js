import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
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
import '@furo/data-input/demos/helper/produce-qp-data.js';

import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';

/**
 * `demo-furo-ui5-data-radio-button-group`
 *
 * @Summary basic usage of furo-ui5-data-radio-button-group
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataRadioButtonGroup extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5DataRadioButton') ||
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
      <h2>Demo furo-ui5-data-radio-button Group</h2>
      <furo-demo-snippet>
        <template>
          <furo-form-layouter one>
            <p>
              Option items from spec. Type furo.Optionitem.
            </p>
            <furo-ui5-data-radio-button-group
              style="width: 100%;"
              ƒ-bind-data="--daoPerson(*.sex)"
            ></furo-ui5-data-radio-button-group>
            <hr />
            <furo-ui5-data-text-input
              value-state="Success"
              ƒ-bind-data="--daoPerson(*.sex)"
            ></furo-ui5-data-text-input>
            <div>
              <p>
                Option items from an array of objects with injectList(). Display field is set to
                field first_name
              </p>
              <furo-ui5-data-radio-button-group
                style="width: 100%;"
                ƒ-bind-data="--entity(*.owner)"
                ƒ-inject-list="--response(*.entities)"
              ></furo-ui5-data-radio-button-group>
            </div>
            <hr />
            <p>
              Bound input fields: owner.id and owner.display_name. If you enter a valid owner ID,
              the items in the collection drop-down list automatically display the record matching
              the ID.
            </p>
            <furo-ui5-data-text-input
              value-state="Success"
              ƒ-bind-data="--entity(*.owner.id)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--entity(*.owner.display_name)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-button-bar>
            <ui5-button design="Emphasized" @-click="--load">load data</ui5-button>
          </furo-button-bar>

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

window.customElements.define(
  'demo-furo-ui5-data-radio-button-group',
  DemoFuroUi5DataRadioButtonGroup,
);
