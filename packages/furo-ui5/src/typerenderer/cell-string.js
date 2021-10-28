import { LitElement, html, css } from 'lit';

/**
 * `cell-string`
 * The cell-string component displays a FieldNode of type `string` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo cell-string Basic Usage
 */
export class CellString extends LitElement {
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: inline;
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        opacity: var(--_ui5_input_disabled_opacity, 0.4);
      }

      :host([data-size*='size-l']),
      :host([data-size*='size-xl']) {
        padding-top: 0.5rem;
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
    `;
  }

  /**
   * Binds a field node to the component
   * @param {FieldNode} fieldNode
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
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._field
        ? html`
            ${this._field._value}
          `
        : html``}
    `;
  }
}

window.customElements.define('cell-string', CellString);
