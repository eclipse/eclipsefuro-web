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
      Theme.getThemeForComponent('DemoFuroUi5DataSegmentedButton') ||
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
            <div>
              <p>Option item from collection response. Type xxx.TypeEntity)</p>
              <p>
                The attributes value-field, sub-field and display-field are optional and by default
                set to: id, display_name and data
              </p>
              <furo-ui5-data-segmented-button
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--daoTask(*.owner)"
                @-item-selected="--itemSelected"
              >
              </furo-ui5-data-segmented-button>
            </div>
            <div>
              <p>Readonly state</p>
              <furo-ui5-data-segmented-button
                readonly
                ƒ-inject-entities="--response(*.entities)"
                ƒ-bind-data="--daoTask(*.owner)"
                @-item-selected="--itemSelected"
              >
              </furo-ui5-data-segmented-button>
            </div>
            <hr />
            <p>
              Bound input fields: owner.id and owner.display_name. If you enter a valid owner ID,
              the items in the collection drop-down list automatically display the record matching
              the ID.
            </p>
            <furo-ui5-data-text-input
              value-state="Success"
              ƒ-bind-data="--daoTask(*.owner.id)"
            ></furo-ui5-data-text-input>
            <furo-ui5-data-text-input
              ƒ-bind-data="--daoTask(*.owner.display_name)"
            ></furo-ui5-data-text-input>
          </furo-form-layouter>

          <furo-button-bar>
            <ui5-button design="Emphasized" @-click="--load">load data</ui5-button>
          </furo-button-bar>

          <furo-pretty-json ƒ-inject-data="--itemSelected"></furo-pretty-json>

          <furo-data-object type="task.Task" @-object-ready="--daoTask"></furo-data-object>

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
