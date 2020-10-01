import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `fetch-universal-json`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-fetch-universal-json
 * @appliesMixin FBP
 */
class FetchUniversalJson extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    if (!this.file) {
      fetch('/mockdata/tests/universalfieldnodebinder/fat-universal.json')
        .then(res => res.json())
        .then(response => {
          /**
           * @event data-loaded
           * Fired when universal.json is loaded
           * detail payload:
           */
          const customEvent = new Event('data-loaded', { composed: true, bubbles: true });
          customEvent.detail = response;
          this.dispatchEvent(customEvent);
        });
    }

    this.addEventListener('click', () => {
      fetch(this.file)
        .then(res => res.json())
        .then(response => {
          /**
           * @event data-loaded
           * Fired when universal.json is loaded
           * detail payload:
           */
          const customEvent = new Event('data-loaded', { composed: true, bubbles: true });
          customEvent.detail = response;
          this.dispatchEvent(customEvent);
        });
    });
  }

  static get properties() {
    return {
      /**
       * file to load
       */
      file: { type: String },
    };
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FetchUniversalJson') ||
      css`
        :host {
          display: block;
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
   * @private
   */
  render() {
    // language=HTML
    return html`
      <p>
        load ${this.file} <i><slot></slot></i>
      </p>
    `;
  }
}

window.customElements.define('fetch-universal-json', FetchUniversalJson);
