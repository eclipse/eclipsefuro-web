import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';
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
class DemoFuroTextInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroTextInput') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --surface-light: #f2f2f2;
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
          <h2>Demo furo-text-input</h2>
          <p>description</p>
        </div>
        <furo-horizontal-scroller flex>
          <div style="background-color:var(--surface); padding: 30px">
            <furo-text-input
              min="5"
              max="8"
              leading-icon="send"
              label="Label"
              hint="Hint: length between 5 and 8"
            ></furo-text-input>
            <furo-text-input
              trailing-icon="send"
              filled
              label="Label"
              value="Val"
              hint="Hint: filled, required"
              required
            ></furo-text-input>
            <furo-text-input
              trailing-icon="send"
              leading-icon="send"
              error
              label="Label"
              errortext="errortext"
            ></furo-text-input>
            <furo-text-input
              trailing-icon="send"
              leading-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-text-input>
          </div>
          <div style="padding:30px">
            <furo-text-input
              label="Label"
              value="Val"
              pattern="a.*"
              hint="Pattern hint: shoud beginn with a"
            ></furo-text-input>
            <furo-text-input filled label="Label" value="Val" hint="Hint"></furo-text-input>
            <furo-text-input
              error
              label="Label"
              value="Val"
              hint="tex"
              errortext="errortext"
            ></furo-text-input>
            <furo-checkbox-input
              label="This is the Label"
              hint="This is the hint"
            ></furo-checkbox-input>
          </div>
          <div style="padding:30px">
            <furo-text-input
              disabled
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-text-input>
            <furo-text-input
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-text-input>
            <furo-text-input
              trailing-icon="fingerprint"
              condensed
              filled
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-text-input>
            <furo-text-input
              trailing-icon="fingerprint"
              condensed
              float
              label="Floating"
              hint="Hint"
            ></furo-text-input>
            <furo-checkbox-input
              condensed
              label="This is the Label"
              hint="This is the hint"
            ></furo-checkbox-input>
          </div>
        </furo-horizontal-scroller>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-text-input', DemoFuroTextInput);
