import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';
/**
 * `sample-furo-number-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroNumberInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('SampleFuroNumberInput') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
        furo-demo-snippet {
          height: 160px;
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
      <h3>Sample</h3>

      <furo-demo-snippet>
        <template>
          <furo-number-input
            ƒ-set-value="--number"
            autofocus
            value="123.25"
            step="0.25"
            hint="Steps 0.25"
            label="Number input field"
            @-value-changed="--number"
          ></furo-number-input>
          <furo-number-input
            ƒ-set-value="--number"
            max="125"
            min="122"
            value="123"
            hint="Min max"
            label="Number input field"
            @-value-changed="--number"
          ></furo-number-input>
          <furo-number-input
            error
            errortext="something went wrong"
            ƒ-set-value="--number"
            hint="Type in some number"
            label="With error"
            @-value-changed="--number"
          ></furo-number-input>
          <furo-number-input
            disabled
            ƒ-set-value="--number"
            value="23"
            hint="Type in some number"
            label="Disabled"
            @-value-changed="--number"
          ></furo-number-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-number-input', SampleFuroNumberInput);
