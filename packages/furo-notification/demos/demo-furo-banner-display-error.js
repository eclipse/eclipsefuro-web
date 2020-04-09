import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-banner-display.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/notification/src/furo-banner.js';
import '@furo/input';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import './produce-banner-data.js';

/**
 * `demo-furo-banner-display-error`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroBannerDisplayError extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroBannerDisplayError') ||
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
   *@private
   */
  static get properties() {
    return {};
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <h2>Demo furo-banner</h2>
      <furo-demo-snippet>
        <template>
          <div>
            <furo-banner
              ƒ-show="--show1"
              ƒ-parse-grpc-status="--error"
              icon="perm-scan-wifi"
            ></furo-banner>
          </div>
          <furo-banner-display></furo-banner-display>

          <produce-banner-data
            id="banner1"
            label="banner 1"
            @-response-error="--error"
          ></produce-banner-data>
        </template>
      </furo-demo-snippet>
    `;
  }
}

customElements.define('demo-furo-banner-display-error', DemoFuroBannerDisplayError);
