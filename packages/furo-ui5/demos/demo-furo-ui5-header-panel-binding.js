import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies

import '@ui5/webcomponents-icons/dist/account.js';

/**
 * `demo-furo-ui5-header-panel`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5HeaderPanelBinding extends FBP(LitElement) {
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
          <h2>Simple usage without data binding</h2>
          <p>The attribute **header-interactive** makes the card reachable by Tabulator.</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <style>
                .demopanel {
                  padding: 15px;
                  margin-bottom: 40px;
                  height: 190px;
                  background: #eee;
                  background-image: linear-gradient(
                      45deg,
                      rgba(0, 0, 0, 0.2) 25%,
                      transparent 0,
                      transparent 75%,
                      rgba(0, 0, 0, 0.2) 0
                    ),
                    linear-gradient(
                      45deg,
                      rgba(0, 0, 0, 0.2) 25%,
                      transparent 0,
                      transparent 75%,
                      rgba(0, 0, 0, 0.2) 0
                    );
                  background-size: 30px 30px;
                  background-position: 0 0, 15px 15px;
                  border: 1px solid #666666;
                }
              </style>
              <h3>Default</h3>
              <p>By default the panel is collapsible</p>
              <div class="demopanel">
                <furo-ui5-header-panel
                  ƒ-bind-header-text="--Navnode(*.description)"
                  ƒ-bind-secondary-text="--Navnode(*.secondary_text)"
                  ƒ-bind-icon="--Navnode(*.icon)"
                >
                  <div>
                    <p>content goes here</p>
                  </div>
                </furo-ui5-header-panel>
              </div>

              <furo-data-object
                type="tree.Navigationnode"
                @-object-ready="--Navnode"
              ></furo-data-object>

              <!-- demo ends here -->

              <!-- edit a Navigationnode -->
              <furo-ui5-card
                flex
                heading="Edit the data"
                subheading="icons: action, account, badge, bell"
                icon="card"
              >
                <nav-node-form slot="content" ƒ-bind-data="--Navnode"></nav-node-form>
              </furo-ui5-card>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-header-panel-binding', DemoFuroUi5HeaderPanelBinding);
