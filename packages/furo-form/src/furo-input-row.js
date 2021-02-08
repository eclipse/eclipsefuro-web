import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `fd-input-row`
 * # DEPRECATED
 *
 * @summary Zweigespaltene Formularzeile
 * @customElement
 * @mixes FBP
 */
class FuroInputRow extends FBP(LitElement) {
  constructor() {
    super();
    console.warn("furo-input-row is DEPRECATED since 2020.03.21")
    /**
     *
     * @type {string}
     */
    this.label = 'set the label!';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroInputRow') ||
      css`
        :host {
          display: block;
        }

        div {
          line-height: 100%;
          width: var(--input-row-width, 140px);
        }

        ::slotted(*) {
          resize: horizontal;
        }
      `
    );
  }

  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <div>${this.label}</div>
        <slot></slot>
      </furo-horizontal-flex>
    `;
  }

  static get properties() {
    return {
      /**
       * The label for the input row
       */
      label: {
        type: String,
      },
    };
  }
}

window.customElements.define('furo-input-row', FuroInputRow);
