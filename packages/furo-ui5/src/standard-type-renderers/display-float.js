import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-float`
 * The display-float component displays a FieldNode of type `float` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-float Basic Usage
 */
export class DisplayFloat extends LitElement {
  constructor() {
    super();
    this._displayValue = '';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayFloat') ||
      css`
        :host {
          display: inline;
          white-space: nowrap;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          opacity: var(--_ui5_input_disabled_opacity, 0.4);
        }

        :host([tabular-form]) {
          display: block;
          text-align: right;
        }

        :host([value-state='Positive']),
        :host([value-state='Success']) {
          color: var(--sapPositiveColor, #107e3e);
        }

        :host([value-state='Informative']),
        :host([value-state='Information']) {
          color: var(--sapInformativeColor, #0a6ed1);
        }

        :host([value-state='Negative']),
        :host([value-state='Error']) {
          color: var(--sapNegativeColor, #b00);
        }

        :host([value-state='Critical']),
        :host([value-state='Warning']) {
          color: var(--sapCrticalColor, #e9730c);
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
        this._formatDisplay();
      });
      this._formatDisplay();
    }
  }

  _formatDisplay() {
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field);
    if (displayValue !== 'NaN') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._displayValue}
    `;
  }
}

window.customElements.define('display-float', DisplayFloat);
