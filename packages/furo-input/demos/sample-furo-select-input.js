import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-catalog.js';
/**
 * `sample-furo-select-input`
 *
 * @customElement
 * @appliesMixin FBP
 */
class SampleFuroSelectInput extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('SampleFuroSelectInput') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
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
    // eslint-disable-next-line lit/attribute-value-entities
    return html`
      <h2>Demo sample-furo-select-input</h2>

      <furo-demo-snippet>
        <template>
          <furo-select-input
            leading-icon="fingerprint"
            trailing-icon="mail"
            @-value-changed="--val"
            label="please select"
            list="23, 44, more, items"
            value="more"
          ></furo-select-input>
          <furo-select-input
            ƒ-set-value="--val"
            autofocus
            label="please select"
            options='[{"id":23,"label":"AAA"},{"id":44,"label":"BBB"}]'
          ></furo-select-input>
          <furo-select-input
            disabled
            hint="decide"
            label="please select"
            options='[{"id":23,"label":"AAA","selected":false},{"id":44,"label":"BBB","selected":true}]'
          ></furo-select-input>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('sample-furo-select-input', SampleFuroSelectInput);
