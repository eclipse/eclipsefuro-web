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
class DemoFuroSelectInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroSelectInput') ||
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

  constructor() {
    super();
    this.options = [
      { id: 23, label: 'AAA', selected: true },
      { id: 44, label: 'BBB', selected: false },
      { id: 55, label: 'CCC', selected: false },
      { id: 66, label: 'DDA', selected: false },
      { id: 667, label: 'DDB', selected: false },
      { id: 668, label: 'DDC', selected: false },
      { id: 99, label: 'Type to get me', selected: false },
    ];
  }

  _FBPReady() {
    super._FBPReady();

    // get the snippet
    const demo = this.shadowRoot.querySelector('furo-demo-snippet');

    setTimeout(() => {
      const l = demo.shadowRoot.querySelectorAll('furo-select-input');

      Array.from(l).forEach(input => {
        input.setOptions(this.options);
      });
    }, 60);
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo furo-select-input</h2>

      <furo-demo-snippet style="height: 600px">
        <template>
          <div style="background-color: #e5e5e5; padding: 30px">
            <furo-select-input leading-icon="send" label="Label" hint="Hint"></furo-select-input>
            <furo-select-input
              trailing-icon="send"
              filled
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-select-input>
            <furo-select-input
              trailing-icon="send"
              leading-icon="send"
              error
              label="Label"
              errortext="errortext"
            ></furo-select-input>
            <furo-select-input
              trailing-icon="send"
              leading-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-select-input>
          </div>
          <div style="padding:30px">
            <furo-select-input label="Label" value="Val" hint="Hint jkfdjkdkjf"></furo-select-input>
            <furo-select-input filled label="Label" value="Val" hint="Hint"></furo-select-input>
            <furo-select-input
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-select-input>
            <furo-select-input
              trailing-icon="send"
              filled
              error
              label="Label"
              value="Val"
              errortext="errortext"
            ></furo-select-input>
          </div>
          <div style="padding:30px">
            <furo-select-input
              disabled
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-select-input>
            <furo-select-input
              trailing-icon="fingerprint"
              condensed
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-select-input>
            <furo-select-input
              trailing-icon="fingerprint"
              condensed
              filled
              label="Label"
              value="Val"
              hint="Hint"
            ></furo-select-input>
          </div>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-select-input', DemoFuroSelectInput);
