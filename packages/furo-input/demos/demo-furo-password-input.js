import { LitElement, html, css } from 'lit-element';
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
class DemoFuroPasswordInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroPasswordInput') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --primary: blue;
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
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-password-input</h2>
          <p>description</p>

          <furo-password-input
            value="1234"
            hint="under your keyboard or on postit below monitor"
            label="super secret password"
            ƒ-make-visible="--showPasswordClicked"
            ƒ-make-invisible="--hidePasswordClicked"
          ></furo-password-input>
          <furo-button @-click="--showPasswordClicked" label="show password"></furo-button>
          <furo-button @-click="--hidePasswordClicked" label="hide password"></furo-button>
        </div>
        <furo-horizontal-scroller flex>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-password-input
              min="5"
              leading-icon="send"
              label="Label"
              hint="Hint"
            ></furo-password-input>
            <furo-password-input
              trailing-icon="send"
              filled
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-password-input>
            <furo-password-input
              trailing-icon="send"
              leading-icon="send"
              error
              label="Label"
              errortext="errortext"
            ></furo-password-input>
            <furo-password-input
              trailing-icon="send"
              leading-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-password-input>
          </div>
          <div style="padding:30px">
            <furo-password-input
              label="Label"
              value="Val"
              hint="Hint jkfdjkdkjf"
            ></furo-password-input>
            <furo-password-input filled label="Label" value="Val" hint="Hint"></furo-password-input>
            <furo-password-input
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-password-input>
            <furo-password-input
              trailing-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-password-input>
          </div>
          <div style="padding:30px">
            <furo-password-input
              disabled
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-password-input>
            <furo-password-input
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-password-input>
            <furo-password-input
              trailing-icon="fingerprint"
              condensed
              filled
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-password-input>
          </div>
        </furo-horizontal-scroller>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-password-input', DemoFuroPasswordInput);
