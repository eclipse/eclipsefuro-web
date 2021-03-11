import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
// eslint-disable-next-line import/no-unresolved
import '@ui5/webcomponents/dist/Link.js';

/**
 * `display-furo-reference`
 * The display-furo-reference component displays a FieldNode of type `furo.Reference` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-furo-reference Basic Usage
 */
class DisplayFuroReference extends LitElement {
  constructor() {
    super();
    this._displayValue = '';
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayFuroReference') ||
      css`
        :host {
          display: inline;
        }

        :host([hidden]) {
          display: none;
        }

        :host([disabled]) {
          opacity: var(--_ui5_input_disabled_opacity, 0.4);
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

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _formatDisplay() {
    if (this._field.display_name._value) {
      this._displayValue = this._field.display_name._value;
    } else if (this._field.id._value) {
      this._displayValue = this._field.id._value;
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
      <ui5-link href="" wrap>${this._displayValue}</ui5-link>
    `;
  }
}

window.customElements.define('display-furo-reference', DisplayFuroReference);
