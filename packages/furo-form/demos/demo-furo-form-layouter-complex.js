import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
import '@furo/input';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-catalog.js';

/**
 * `demo-furo-form-layouter-complex`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroFormLayouterComplex extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoFuroFormLayouterComplex') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 950px;
          --furo-form-background: white;
        }
        .hr {
          border-bottom: 1px solid gray;
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
          <furo-form
            header-text="Complex form design"
            secondary-text="Sample with different columns, double or full fields and newline attribute"
          >
            <!-- Inside a furo-form-layouter the elements are always full-width -->
            <!-- Full width, one column layout-->
            <furo-form-layouter four>
              <p full>Four column layout // condensed</p>
              <furo-date-input
                condensed
                autofocus
                hint="Only possible in current year"
                max="2020-12-31"
                min="2020-01-01"
                label="valid from"
              ></furo-date-input>
              <furo-select-input
                newline
                condensed
                label="Mutation reason on new line"
                value="New"
                list="New, mutation, remake"
              ></furo-select-input>
              <p full>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum.
              </p>

              <furo-text-input label="Text input field double" condensed double></furo-text-input>
              <furo-text-input label="Text input field double" condensed double></furo-text-input>
              <furo-text-input label="Text input field double" condensed double></furo-text-input>
              <furo-text-input label="Text input field double" condensed double></furo-text-input>
              <div class="hr" full></div>
              <p full>Section header text</p>
              <furo-date-input label="Date input field" condensed></furo-date-input>
              <furo-text-input label="Text input field" condensed></furo-text-input>
              <furo-text-input label="Number input field" condensed></furo-text-input>
              <furo-range-input label="Range input field" condensed></furo-range-input>
            </furo-form-layouter>

            <furo-button-bar slot="action">
              <furo-button label="Save" unelevated primary></furo-button>
              <furo-button label="Cancel" unelevated></furo-button>
            </furo-button-bar>
          </furo-form>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-form-layouter-complex', DemoFuroFormLayouterComplex);
