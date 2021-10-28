import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import { Styling } from './styling.js';
import '@furo/route';
import './furo-doc-page.js';

import './furo-demo-page.js';

/**
 * `view-api`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroComponentPage extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    const theme = Theme.getThemeForComponent('FuroComponentPage');
    if (theme) {
      return [theme, Styling.theme];
    }
    // language=CSS
    return [
      css`
        :host {
          display: block;
          height: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: var(--spacing) 0 var(--spacing) var(--spacing);
          --split-master-width: 250px;
        }

        :host([hidden]) {
          display: none;
        }
        furo-pages {
          height: 100%;
        }
      `,
      Styling.theme,
    ];
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-location @-location-changed="--pathChanged"></furo-location>

      <furo-pages ƒ-inject-location="--pathChanged" default="doc">
        <furo-doc-page name="doc"></furo-doc-page>
        <furo-demo-page name="demo"></furo-demo-page>
      </furo-pages>
    `;
  }
}

window.customElements.define('furo-component-page', FuroComponentPage);
