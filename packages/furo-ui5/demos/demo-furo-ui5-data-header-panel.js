import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies

import '@ui5/webcomponents-icons/dist/account.js';

/**
 * `demo-furo-ui5-data-header-panel`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5DataHeaderPanel extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
      :host {
        display: block;
        height: 100%;
        padding-right: var(--spacing);
      }

      :host([hidden]) {
        display: none;
      }

    `;
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
              <h3>Default</h3>
              <furo-ui5-data-header-panel header-text="heading"
                                          sub-title="subheading"
                                          icon="card"
                                          status="enabled"

              >
                <div slot="action">
                  <furo-ui5-button>Action</furo-ui5-button>
                </div>
                <div>content goes here
                  <p>Start collapsed</p>
                </div>
              </furo-ui5-data-header-panel>

              <h3>Collapsed</h3>
              <furo-ui5-data-header-panel header-text="heading"
                                          sub-title="subheading"
                                          icon="card"
                                          collapsed

              >
                <div slot="action">
                  <furo-ui5-button>Action</furo-ui5-button>
                </div>
                <div>content goes here
                  <p>Start collapsed</p>
                </div>
              </furo-ui5-data-header-panel>
              <br>
              <br>
              <br>
              <h3>Fixed</h3>
              <furo-ui5-data-header-panel header-text="Without icon"
                                          sub-title="but with header-interactive"
                                          fixed
              >
                <div slot="action">
                  <furo-ui5-button>Action</furo-ui5-button>
                </div>
                <div>With heading-interactive</div>
              </furo-ui5-data-header-panel>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-data-header-panel', DemoFuroUi5DataHeaderPanel);
