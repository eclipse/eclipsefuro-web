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
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-input/demos/helper/produce-qp-data.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/route/src/furo-pages.js';

import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';

import './helper/form-section-one.js';
import './helper/form-section-two.js';
import './helper/form-section-three.js';

/**
 * `demo-furo-ui5-form-field-container`
 *
 * @Summary basic usage of furo-ui5-form-field-container
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5FormFieldContainer extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroUi5FormFieldContainer') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
          --_ui5_input_width: 24px;
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
      <h2>Demo furo-ui5-form-field-container</h2>
      <furo-demo-snippet>
        <template>
          <!-- Sub navigation bar -->
          <ui5-panel>
            <ui5-tabcontainer
              class="full-width"
              collapsed
              fixed
              show-overflow
              @-tab-select="--subTabSelected"
            >
              <ui5-tab text="First Section" data-id="one" selected></ui5-tab>
              <ui5-tab text="Second Section" data-id="two"></ui5-tab>
              <ui5-tab text="Third Section" data-id="three"></ui5-tab>
            </ui5-tabcontainer>
          </ui5-panel>

          <div
            style="padding: var(--spacing) var(--spacing); background-color: var(--sapBackgroundColor)"
          >
            <furo-pages ƒ-activate-page="--subTabSelected(*.tab.dataset.id)" default="one">
              <form-section-one
                name="one"
                ƒ-inject-entity="--entity"
                ƒ-disable="--disable"
              ></form-section-one>
              <form-section-two
                name="two"
                ƒ-inject-entity="--entity"
                ƒ-disable="--disable"
              ></form-section-two>
              <form-section-three
                name="three"
                ƒ-inject-entity="--entity"
                ƒ-disable="--disable"
              ></form-section-three>
            </furo-pages>
          </div>

          <furo-button-bar slot="action">
            <produce-qp-data @-data="--qp" qpescaped="%7B%22exp%22%3A1%7D"></produce-qp-data>
            <furo-button @-click="--disable" outline label="disable"></furo-button>
          </furo-button-bar>

          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>
          <furo-deep-link
            service="ExperimentService"
            @-hts-out="--hts"
            ƒ-qp-in="--qp"
          ></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            load-on-hts-in
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-ui5-form-field-container', DemoFuroUi5FormFieldContainer);
