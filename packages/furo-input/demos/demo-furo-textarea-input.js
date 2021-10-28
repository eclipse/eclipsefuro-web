import { LitElement, html, css } from 'lit';

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
class DemoFuroTextareaInput extends FBP(LitElement) {
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
          <h2>Demo furo-textarea-input</h2>
          <p>description</p>
        </div>
        <furo-demo-snippet flex>
          <template>
            <furo-textarea-input
              rows="1"
              label="a lot of text"
              hint="just type"
              value="aa ss "
            ></furo-textarea-input>
            <furo-text-input label="compare" value="text" hint="hint"></furo-text-input>
            <div class="hr"></div>
            <furo-textarea-input
              rows="11"
              cols="60"
              label="a lot of text"
              hint="just type"
              value="aa ss "
            ></furo-textarea-input>
            <br />
          </template>
        </furo-demo-snippet>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-furo-textarea-input', DemoFuroTextareaInput);
