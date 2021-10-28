import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies

import '@ui5/webcomponents-icons/dist/card.js';
/**
 * `demo-furo-ui5-card`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroUi5Card extends FBP(LitElement) {
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
            <furo-vertical-scroller style="padding: var(--spacing)">
              <furo-ui5-card heading="heading" subheading="subheading" icon="card" status="enabled">
                <div slot="action"><furo-ui5-button>Action</furo-ui5-button></div>
                <div slot="content">
                  content goes here
                  <p>Status is set (enabled), so the action is not visible</p>
                </div>
              </furo-ui5-card>

              <furo-ui5-card
                heading="Without icon"
                subheading="but with header-interactive"
                header-interactive
              >
                <div slot="action"><furo-ui5-button>Action</furo-ui5-button></div>
                <div slot="content">With heading-interactive</div>
              </furo-ui5-card>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-ui5-card', DemoFuroUi5Card);
