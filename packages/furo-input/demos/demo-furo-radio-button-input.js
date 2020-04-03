import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';
/**
 * `demo-furo-radio-button-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroRadioButtonInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroRadioButtonInput') ||
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
      <h2>Demo furo-radio-button-input</h2>

      <furo-demo-snippet>
        <template>
          <furo-radio-button-input
            label="checked"
            value="true"
            ƒ-uncheck="--unchecked"
            ƒ-check="--checked"
          ></furo-radio-button-input>
          <furo-radio-button-input
            label="autofocus"
            autofocus
            @-unchecked="--unchecked"
            @-checked="--checked"
          ></furo-radio-button-input>
          <furo-radio-button-input
            disabled
            label="disabled"
            ƒ-uncheck="--unchecked"
            ƒ-check="--checked"
          ></furo-radio-button-input>
          <furo-radio-button-input
            condensed
            label="condensed checked"
            value="true"
          ></furo-radio-button-input>
          <furo-radio-button-input
            condensed
            label="condensed unchecked"
            ƒ-uncheck="--unchecked"
            ƒ-check="--checked"
          ></furo-radio-button-input>
          <br />
          <furo-button
            raised
            condensed
            @-click="--unchecked"
            label="uncheck the radio buttons"
          ></furo-button>
          <furo-button
            raised
            condensed
            @-click="--checked"
            label="check the radio buttons"
          ></furo-button>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-radio-button-input', DemoFuroRadioButtonInput);
