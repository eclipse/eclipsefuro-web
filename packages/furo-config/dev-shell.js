import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper/src/component-doc/init.js';
import '@furo/doc-helper/src/component-doc/main-stage.js';
import './demos/demos.js';
// import with @furo/... because we are in a monorepo
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/config/src/furo-catalog.js';

/**
 * A minimal dev shell
 *
 * @customElement
 * @appliesMixin FBP
 */
class DevShell extends FBP(LitElement) {
  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          overflow: hidden;
          height: 100vh;
        }
      `,
    ];
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <main-stage
        @-app-flow="--flowEvent"
        @-response-error-401="--unauthorized"
        @-unauthorized="--unauthorized"
        @-navigate-back-clicked="--navBack"
      ></main-stage>
    `;
  }
}

window.customElements.define('dev-shell', DevShell);
