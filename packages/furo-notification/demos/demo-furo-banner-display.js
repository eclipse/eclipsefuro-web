import { LitElement, html, css } from 'lit';

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
 * `demo-furo-banner-display`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroBannerDisplay extends FBP(LitElement) {
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
    // eslint-disable-next-line lit/no-invalid-html
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-banner</h2>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-vertical-scroller>
              <furo-banner-display autofocus></furo-banner-display>

              <h2>Simple usage</h2>
              <furo-button ƒ-focus="--confirmed" raised @-click="--show3">oneliner</furo-button>
              <furo-banner
                ƒ-show="--show3"
                @-dismissed="--dm3"
                text="oneliner."
                icon="info-outline"
              ></furo-banner>
              <hr />

              <h2>Multiline with markdown usage</h2>
              <p>To insert multiline text you can use the markdown syntax</p>
              <furo-banner
                ƒ-show="--show2"
                @-confirmed="--confirmed"
                icon="info-outline"
                dissmis-button-text="continue"
                confirm-button-text="confirm"
                text="Wlan https://www.Lorem.com  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
              ></furo-banner>
              <furo-button ƒ-focus="--dm3" raised @-click="--show2">confirm multiline</furo-button>
              <hr />

              <h2>Parse grpc status object</h2>
              <produce-banner-data
                @-response-error="--error"
                label="GRPC ERROR"
              ></produce-banner-data>
              <furo-banner ƒ-parse-grpc-status="--error" icon="apps"></furo-banner>
              <hr />

              <h2>Set text with wire</h2>
              <furo-banner
                ƒ-show="--show1"
                ƒ-set-Text="--setBannerText1"
                icon="perm-scan-wifi"
              ></furo-banner>
              <produce-banner-data
                id="banner1"
                label="banner 1"
                banner-text="Test
Newline
*stuff*  *ddd* (c) (C) (r) (R) (tm) (TM) (p) (P) +-"
                @-banner-text-banner1="--setBannerText1"
                @-show-banner1="--show1"
              ></produce-banner-data>
              <hr />
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

customElements.define('demo-furo-banner-display', DemoFuroBannerDisplay);
