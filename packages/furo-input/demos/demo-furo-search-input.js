import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';

/**
 * `demo-furo-element`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroSearchInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroSearchInput') ||
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
      <h2>Demo furo-search-input</h2>
      <p>Type some text and clear it with the Escape Key</p>
      <furo-demo-snippet>
        <template>
          <furo-search-input label="Search"></furo-search-input>
          <furo-search-input label="With value" hint="search" value="start:"></furo-search-input>
          <furo-search-input
            label="With pattern"
            hint="3 letters"
            pattern="[A-Za-z]{3}"
          ></furo-search-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-search-input', DemoFuroSearchInput);
