import { LitElement, html, css } from 'lit';

import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/accept.js';
import '@ui5/webcomponents-icons/dist/border.js';

/**
 * `cell-bool`
 * The cell-bool component displays a FieldNode of type `bool` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary
 * @customElement
 * @demo demo cell-bool Basic Usage
 */
export class CellBool extends LitElement {
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        text-align: center;
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

      :host([value-state='Positive']) ui5-icon,
      :host([value-state='Success']) ui5-icon {
        color: var(--sapPositiveColor, #107e3e);
      }
      :host([value-state='Informative']) ui5-icon,
      :host([value-state='Information']) ui5-icon {
        color: var(--sapInformativeColor, #0a6ed1);
      }
      :host([value-state='Negative']) ui5-icon,
      :host([value-state='Error']) ui5-icon {
        color: var(--sapNegativeColor, #b00);
      }
      :host([value-state='Critical']) ui5-icon,
      :host([value-state='Warning']) ui5-icon {
        color: var(--sapCrticalColor, #e9730c);
      }
    `;
  }

  /**
   * Binds a field node to the component
   * @param {FieldNode} fieldNode of type bool, furo.fat.Bool, google.wrapper.BoolValue
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
    let tmpl = '';
    if (this._field) {
      if (!this._field._value || this._field._value === 'false') {
        tmpl = html`
          <ui5-icon name="border"></ui5-icon>
        `;
      } else {
        tmpl = html`
          <ui5-icon name="accept"></ui5-icon>
        `;
      }
    }
    return tmpl;
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

window.customElements.define('cell-bool', CellBool);
