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
class DemoFuroUi5HeaderPanel extends FBP(LitElement) {
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
                  header-text="heading"
                  secondary-text="a secondary text"
                  icon="card"
                  status="enabled"
                >
                  <div slot="action">
                    <furo-ui5-button>Action</furo-ui5-button>
                  </div>
                  <div>
                    <p>content goes here</p>
                  </div>
                </furo-ui5-header-panel>
              </div>

              <h3>Collapsed</h3>
              <p>The panel can be started in collapsed mode too</p>
              <div class="demopanel">
                <furo-ui5-header-panel
                  header-text="heading"
                  secondary-text="a secondary text"
                  icon="card"
                  collapsed
                >
                  <div slot="action">
                    <furo-ui5-button>Action</furo-ui5-button>
                  </div>
                  <div>
                    content goes here
                    <p>Start collapsed</p>
                  </div>
                </furo-ui5-header-panel>
              </div>

              <h3>Fixed</h3>
              <p>With the fixed attribute, the panel is not collapsible.</p>
              <div class="demopanel">
                <furo-ui5-header-panel
                  header-text="Without icon"
                  secondary-text="but with header-interactive"
                  fixed
                >
                  <div slot="action">
                    <furo-ui5-button>Action</furo-ui5-button>
                  </div>
                  <div>With heading-interactive</div>
                </furo-ui5-header-panel>
              </div>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-header-panel', DemoFuroUi5HeaderPanel);
