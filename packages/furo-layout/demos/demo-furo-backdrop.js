import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/timing/src/furo-de-bounce.js';

/**
 * `demo-furo-backdrop`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroBackdrop extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
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
        <furo-backdrop-display></furo-backdrop-display>
        <div>
          <h2>Demo furo-backdrop and furo-backdrop-display</h2>
          <p>Click on the button to trigger ƒ-show on the backdrop</p>
          <p>Click somewhere on the background to close the backdrop</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <button @-click="--btnClicked" ƒ-focus="--itemClosed">show</button>
              <furo-backdrop ƒ-show="--btnClicked" ƒ-close="--closeClicked" @-closed="--itemClosed">
                <div style="background: gold; padding: 50px;">
                  Here goes the content
                  <br />
                  <button @-click="--closeClicked">close me</button>
                </div>
              </furo-backdrop>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-backdrop', DemoFuroBackdrop);
