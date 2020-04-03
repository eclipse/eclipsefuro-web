import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/layout/src/furo-catalog.js';

/**
 * `demo-furo-split-view`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroSplitView extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroSplitView') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
        h2 {
          margin-top: 0;
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
      <h2>Demo furo-split-view</h2>
      <p>Splits your view in a master-detail view</p>
      <furo-demo-snippet>
        <template>
          <furo-split-view>
            <div
              slot="master"
              style="height: 100%; background-image: linear-gradient(blue, violet);"
            >
              Master
            </div>
            <furo-vertical-scroller>
              <div style="height: 420px;background-image: linear-gradient(red, yellow);">
                Detail... <br />
                should be on flex side
              </div>
            </furo-vertical-scroller>
          </furo-split-view>
        </template>
      </furo-demo-snippet>

      <h2>Demo furo-split-view</h2>
      <p>Add the attribute reverse put the master on the other side</p>
      <furo-demo-snippet>
        <template>
          <furo-split-view reverse>
            <div
              slot="master"
              style="height: 100%; background-image: linear-gradient(blue, violet);"
            >
              Master
            </div>
            <furo-vertical-scroller>
              <div style="height: 420px;background-image: linear-gradient(red, yellow);">
                Detail... <br />
                should be on flex side
              </div>
            </furo-vertical-scroller>
          </furo-split-view>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-split-view', DemoFuroSplitView);
