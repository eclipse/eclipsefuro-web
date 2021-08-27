import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
import '@furo/app/src/furo-card.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/experiments/src/furo-catalog.js';

/**
 * `demo-furo-qr-scanner`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroQrScanner extends FBP(LitElement) {

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
          <h2>Demo ...</h2>
          <p>Describe your demo</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <style>        furo-card {
              width: 300px;
              margin: 18px;
            }</style>
            <furo-vertical-scroller>
              <furo-card header-text="QR-Scanner">
                <furo-qr-scanner slot="media" ƒ-start="--start" ƒ-stop="--stop" @-qr-code="--qr"></furo-qr-scanner>
                <div ƒ-.inner-text="--qr">code</div>
                <div slot="action">
                  <furo-button primary @-click="--start">start</furo-button>
                  <furo-button danger @-click="--stop">stop</furo-button>
                </div>
              </furo-card>
            </furo-vertical-scroller>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-qr-scanner', DemoFuroQrScanner);
