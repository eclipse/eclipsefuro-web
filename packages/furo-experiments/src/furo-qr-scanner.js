import { LitElement, html, css } from 'lit-element';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import QrScanner from 'qr-scanner';

/**
 * `furo-qr-scanner`
 * Scans a qr code
 *
 * @fires {string} qr-code -  Fired when a qr-code is detected
 *
 * @summary qr code scanner
 * @customElement
 * @demo demo-furo-qr-scanner
 * @appliesMixin FBP
 */
class FuroQrScanner extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      stopOnCodeFound: { type: Boolean, attribute: 'stop-on-code-found' },
      worker: { type: String },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    this.vid = this.shadowRoot.getElementById('vid');
    QrScanner.WORKER_PATH = this.worker || '/worker/qr-scanner-worker.min.js';
    // this._FBPTraceWires()
    this.qrScanner = new QrScanner(this.vid, result => {

      const customEvent = new Event('qr-code', { composed: true, bubbles: true });
      customEvent.detail = result;
      this.dispatchEvent(customEvent);
      if (this.stopOnCodeFound) {
        this.qrScanner.stop();
      }
    });
  }

  start() {
    this.qrScanner.start();
  }

  stop() {
    this.qrScanner.stop();
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroQrScanner') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
        video {
          width: 100%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <video id="vid"></video>
    `;
  }
}

window.customElements.define('furo-qr-scanner', FuroQrScanner);
