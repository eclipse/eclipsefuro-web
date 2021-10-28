import { LitElement, html, css } from 'lit';

// eslint-disable-next-line import/no-unresolved
import '@ui5/webcomponents/dist/Link.js';

/**
 * `cell-furo-reference`
 * The cell-furo-reference component displays a FieldNode of type `furo.Reference` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo cell-furo-reference Basic Usage
 */
class CellFuroReference extends LitElement {
  constructor() {
    super();
    /**
     *
     * @type {string}
     * @private
     */
    this._displayValue = '';
  }

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
        this._formatCell();
      });
      this._formatCell();
    }
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  /**
   *
   * @private
   */
  _formatCell() {
    if (this._field.display_name._value) {
      this._displayValue = this._field.display_name._value;
    } else if (this._field.id._value) {
      this._displayValue = this._field.id._value;
    }
    this.requestUpdate();
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

window.customElements.define('cell-furo-reference', CellFuroReference);
