import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper/src/component-doc/initWithServices.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper/src/component-doc/main-stage.js';

// import with @furo/... because we are in a monorepo
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/lib/init.js';

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
