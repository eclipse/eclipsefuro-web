import { LitElement, html, css } from 'lit';

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

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/route/src/furo-pages.js';

import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';

import './helper/form-section-one.js';
import './helper/form-section-two.js';
import './helper/form-section-three.js';
import './helper/form-section-four.js';

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
            <ui5-tab text="Read Only Section" data-id="four"></ui5-tab>
          </ui5-tabcontainer>

          <furo-button-bar slot="action">
            <produce-qp-data
              hidden
              ƒ-produce="--demoDataRequested"
              @-data="--qp"
              qpescaped="%7B%22exp%22%3A1%7D"
            ></produce-qp-data>
            <furo-empty-spacer></furo-empty-spacer>
            <furo-ui5-button @-click="--demoDataRequested">Load Demo Data</furo-ui5-button>
            <furo-ui5-button @-click="--disable">Disable input fields</furo-ui5-button>
          </furo-button-bar>

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
              <form-section-four
                name="four"
                ƒ-inject-entity="--entity"
                ƒ-disable="--disable"
              ></form-section-four>
            </furo-pages>
          </div>

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
