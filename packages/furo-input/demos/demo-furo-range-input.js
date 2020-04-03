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
class DemoFuroRangeInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroRangeInput') ||
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
      <furo-vertical-flex>
        <div>
          <h2>Demo furo-range-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-range-input
              trailing-icon="dashboard"
              label="Range"
              step="0.25"
              value="11"
              min="10"
              max="20"
              hint="Slide for a number"
              @-value-changed="--rval"
              ƒ-set-value="--nval"
            ></furo-range-input>
            <furo-number-input
              label="Number"
              hint="type in a number"
              ƒ-set-value="--rval"
              @-value-changed="--nval"
            ></furo-number-input>
            <furo-text-input
              label="Text"
              hint="type something like a number"
              ƒ-set-value="--rval"
              @-value-changed="--rval,--nval"
            ></furo-text-input>
            <div></div>

            <furo-range-input
              leading-icon="dashboard"
              label="Range"
              step="0.25"
              min="10"
              max="20"
              hint="Slide for a number"
            ></furo-range-input>
            <furo-range-input
              condensed
              leading-icon="dashboard"
              label="Range"
              step="0.25"
              min="10"
              max="20"
              hint="Slide for a number"
            ></furo-range-input>
            <furo-range-input
              filled
              leading-icon="dashboard"
              trailing-icon="dashboard"
              label="Range"
              step="0.25"
              min="10"
              max="20"
              hint="Slide for a number"
            ></furo-range-input>
            <furo-range-input
              filled
              condensed
              leading-icon="dashboard"
              label="Range"
              step="0.25"
              min="10"
              max="20"
              hint="Slide for a number"
            ></furo-range-input>
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-range-input', DemoFuroRangeInput);
