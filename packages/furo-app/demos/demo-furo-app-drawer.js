import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/app/src/furo-catalog.js';

/**
 * `demo-furo-app-drawer`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroAppDrawer extends FBP(LitElement) {
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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-app-drawer float-breakpoint="900" name="drawer">
              <div slot="drawer" style="background-color: var(--accent);height:100%;width: 200px;">
                drawer
              </div>
              <div style="background-color: rgb(237,237,237);height:100%;">
                <furo-app-bar-top drawer="drawer">
                  <div>Your Application Title</div>
                </furo-app-bar-top>
                <h3>Resize the window to see the drawer in action</h3>
              </div>
            </furo-app-drawer>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-app-drawer', DemoFuroAppDrawer);
