import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/icon/src/furo-catalog.js';

/**
 * `demo-furo-icon`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroIcon extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroIcon') ||
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
      <h2>Demo demo-furo-icon</h2>
      <p>Do not forgett to import the iconset</p>
      <furo-demo-snippet>
        <template>
          <furo-icon icon="mail"></furo-icon>
          <furo-icon icon="touch-app"></furo-icon>
          <furo-icon icon="av:airplay"></furo-icon>
          <furo-icon icon="com:contacts"></furo-icon>
          <furo-icon icon="device:bluetooth"></furo-icon>
          <furo-icon icon="editor:merge-type"></furo-icon>
          <furo-icon icon="hardware:phonelink"></furo-icon>
          <furo-icon icon="image:camera"></furo-icon>
          <furo-icon icon="maps:subway"></furo-icon>
          <furo-icon icon="notify:event-available"></furo-icon>
          <furo-icon icon="places:spa"></furo-icon>
          <furo-icon icon="social:public"></furo-icon>
        </template>
      </furo-demo-snippet>
      <h3>Import the needed icon sets somewhere in your init phase</h3>
      <pre>
// -- initialize application env, theme, api

import {Init} from "@furo/framework/src/furo.js";
import {Iconset} from "@furo/framework/src/furo.js";
        
import {FuroBaseIcons} from "@furo/icon/assets/iconsets/baseIcons";
Iconset.registerIconset("default", FuroBaseIcons);</pre
      >
    `;
  }
}

window.customElements.define('demo-furo-icon', DemoFuroIcon);
