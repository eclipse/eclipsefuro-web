import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';
/**
 * `demo-furo-checkbox-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroCheckboxInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroCheckboxInput') ||
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
      <h2>Demo furo-checkbox-input</h2>

      <furo-demo-snippet>
        <template>
          <furo-checkbox-input label="checked" value="true"></furo-checkbox-input>
          <furo-checkbox-input
            label="autofocus"
            autofocus
            @-unchecked="--unchecked"
            @-checked="--checked"
          ></furo-checkbox-input>
          <furo-checkbox-input
            disabled
            label="disabled"
            ƒ-uncheck="--unchecked"
            ƒ-check="--checked"
          ></furo-checkbox-input>
          <furo-checkbox-input
            condensed
            label="condensed checked"
            value="true"
          ></furo-checkbox-input>
          <furo-checkbox-input
            condensed
            label="condensed unchecked"
            ƒ-uncheck="--unchecked"
            ƒ-check="--checked"
          ></furo-checkbox-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-checkbox-input', DemoFuroCheckboxInput);
