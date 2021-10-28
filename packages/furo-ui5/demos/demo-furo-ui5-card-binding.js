import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';

import '@ui5/webcomponents-icons/dist/action.js';
import '@ui5/webcomponents-icons/dist/account.js';
import '@ui5/webcomponents-icons/dist/badge.js';
import '@ui5/webcomponents-icons/dist/bell.js';
import '@ui5/webcomponents-icons/dist/card.js';

import './helper/nav-node-form.js';
/**
 * `demo-furo-ui5-card`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5CardBinding extends FBP(LitElement) {
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
          <h2>furo-ui5-card with data binding</h2>
          <p>
            The <strong>ƒ-bind-nav-node</strong> method accepts a data object with the
            tree.Navigationnode signature.
          </p>
          <p>
            This means your data object can or should have a field display_name, secondary_text and
            icon.
          </p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-horizontal-flex>
                <!-- demo -->
                <furo-ui5-card
                  flex
                  heading="heading"
                  subheading="subheading"
                  ƒ-bind-heading="--Navnode(*.description)"
                  ƒ-bind-subheading="--Navnode(*.secondary_text)"
                  ƒ-bind-icon="--Navnode(*.icon)"
                >
                  <div slot="action">
                    <furo-ui5-button>Action</furo-ui5-button>
                  </div>
                  <div slot="content">content goes here</div>
                </furo-ui5-card>

                <furo-data-object
                  type="tree.Navigationnode"
                  @-object-ready="--Navnode"
                ></furo-data-object>

                <!-- demo ends here -->

                <!-- edit a Navigationnode -->
                <furo-ui5-card
                  flex
                  heading="Display the data"
                  subheading="icons: action, account, badge, bell"
                  icon="card"
                >
                  <nav-node-form slot="content" ƒ-bind-data="--Navnode"></nav-node-form>
                </furo-ui5-card>
              </furo-horizontal-flex>
            </furo-vertical-scroller>

            <!-- Styles are only set for the demo -->
            <style>
              furo-horizontal-flex > * {
                margin: 10px;
              }
            </style>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-card-binding', DemoFuroUi5CardBinding);
