import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';

/**
 * `display-string`
 * The display-string component displays a FieldNode of type `string` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 *
 * @summary
 * @customElement
 * @demo demo display-string Basic Usage
 */
export class DisplayString extends LitElement {
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayString') ||
      css`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }
        :host([disabled]) span {
          opacity: var(--_ui5_input_disabled_opacity);
        }
        span {
          margin: 0;
          font-family: var(--sapFontFamily, '72');
          color: var(--sapTextcolor, '#32363a');
          word-break: break-word;
        }
        span::first-line {
          line-height: var(--_ui5_input_height, 36px);
        }
        :host([data-size='size-s']) span::first-line {
          line-height: var(--sapElement_Compact_Height, 26px);
        }

        :host([data-size='size-l']),
        :host([data-size='size-xl']) {
          padding-top: 0.5rem;
        }
      `
    );
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this.requestUpdate();
      });

      this.requestUpdate();
    }
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    return html`
      <span
        >${this._field
          ? html`
              ${this._field._value}
            `
          : html``}
      </span>
    `;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._getTemplate()}
    `;
  }
}

window.customElements.define('display-string', DisplayString);
