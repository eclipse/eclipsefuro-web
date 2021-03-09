import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/accept.js';
import '@ui5/webcomponents-icons/dist/border.js';

/**
 * `display-bool`
 * The display-bool component displays a FieldNode of type `bool` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-bool Basic Usage
 */
export class DisplayBool extends LitElement {
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayBool') ||
      css`
        :host {
          display: inline-block;
          word-break: keep-all;
          text-align: left;
        }

        :host([tabular-form]) {
          display: block;
          text-align: center;
        }

        :host([disabled]) {
          opacity: var(--_ui5_input_disabled_opacity, 0.4);
        }

        :host([hidden]) {
          display: none;
        }

        :host([data-size='size-l']),
        :host([data-size='size-xl']) {
          padding-top: 0.5rem;
        }

        ui5-icon[value-state='Positive'],
        ui5-icon[value-state='Success'] {
          color: var(--sapPositiveColor, #107e3e);
        }
        ui5-icon[value-state='Informative'],
        ui5-icon[value-state='Information'] {
          color: var(--sapInformativeColor, #0a6ed1);
        }
        ui5-icon[value-state='Negative'],
        ui5-icon[value-state='Error'] {
          color: var(--sapNegativeColor, #b00);
        }
        ui5-icon[value-state='Critical'],
        ui5-icon[value-state='Warning'] {
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
          <ui5-icon name="accept" value-state="Success"></ui5-icon>
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

window.customElements.define('display-bool', DisplayBool);
