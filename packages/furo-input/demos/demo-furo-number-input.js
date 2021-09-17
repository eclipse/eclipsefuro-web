import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';

/**
 * `demo-furo-element`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroNumberInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroNumberInput') ||
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
      <h2>Demo furo-number-input</h2>
      <p>description</p>
      <furo-demo-snippet style="height: 600px">
        <template>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-number-input
              min="5"
              step="4"
              leading-icon="send"
              label="Label"
              hint="Hint"
            ></furo-number-input>
            <furo-number-input
              trailing-icon="send"
              filled
              label="Label"
              value="Val"
              hint="Hint:required"
              required
            ></furo-number-input>
            <furo-number-input
              trailing-icon="send"
              leading-icon="send"
              error
              label="Label"
              errortext="errortext"
            ></furo-number-input>
            <furo-number-input
              trailing-icon="send"
              leading-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-number-input>
          </div>
          <div style="padding:30px">
            <furo-number-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-number-input>
            <furo-number-input filled label="Label" value="Val" hint="Hint"></furo-number-input>
            <furo-number-input
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-number-input>
            <furo-number-input
              trailing-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-number-input>
          </div>
          <div style="padding:30px">
            <furo-number-input
              disabled
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-number-input>
            <furo-number-input
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-number-input>
            <furo-number-input
              trailing-icon="fingerprint"
              condensed
              filled
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-number-input>
          </div>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-number-input', DemoFuroNumberInput);
