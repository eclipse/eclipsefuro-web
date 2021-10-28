import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';

import '@furo/input';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-catalog.js';

/**
 * `demo-furo-form-layouter-variants`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroFormLayouterVariants extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

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
          --furo-form-layouter-row-gap: 0px;
          --furo-form-layouter-column-gap: 12px;
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
          <furo-vertical-scroller>
            <furo-form
              header-text="All variants of furo-form-layouter"
              secondary-text="one, two, four, six columns responsive"
            >
              <!-- Inside a furo-form-layouter the elements are always full-width -->
              <furo-form-layouter two>
                <furo-text-input label="two, full" full condensed></furo-text-input>
                <furo-text-input label="two" condensed></furo-text-input>
                <furo-text-input label="two" condensed></furo-text-input>
                <furo-text-input label="two, double" double condensed></furo-text-input>
                <furo-text-input label="two" condensed></furo-text-input>
                <furo-text-input label="two, newline" newline condensed></furo-text-input>
                <furo-text-input label="two" condensed></furo-text-input>
                <furo-text-input label="two" condensed></furo-text-input>
                <furo-text-input label="two" condensed></furo-text-input>
              </furo-form-layouter>

              <furo-form-layouter three>
                <furo-text-input label="three, full" full condensed></furo-text-input>
                <furo-text-input label="three" condensed></furo-text-input>
                <furo-text-input label="three" condensed></furo-text-input>
                <furo-text-input label="three, double" double condensed></furo-text-input>
                <furo-text-input label="three" condensed></furo-text-input>
                <furo-text-input label="three, newline" newline condensed></furo-text-input>
                <furo-text-input label="three" condensed></furo-text-input>
                <furo-text-input label="three" condensed></furo-text-input>
                <furo-text-input label="three" condensed></furo-text-input>
              </furo-form-layouter>

              <furo-form-layouter four>
                <furo-text-input label="four, full" full condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
                <furo-text-input label="four, double" double condensed></furo-text-input>
                <furo-text-input label="four, newline" newline condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
                <furo-text-input label="four" condensed></furo-text-input>
              </furo-form-layouter>

              <furo-form-layouter six>
                <furo-text-input label="six, full" full condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six, double" double condensed></furo-text-input>
                <furo-text-input label="six, newline" newline condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
                <furo-text-input label="six" condensed></furo-text-input>
              </furo-form-layouter>
            </furo-form>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-form-layouter-variants', DemoFuroFormLayouterVariants);
