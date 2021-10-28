import { LitElement, html, css } from 'lit';

// eslint-disable-next-line import/no-unresolved
import '@ui5/webcomponents/dist/ColorPalette.js';

/**
 * `display-google-type-color`
 * The display-google-type-color component displays a FieldNode of type `google.type.Color` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-google-type-color Basic Usage
 */
class DisplayGoolgeTypeColor extends LitElement {
  constructor() {
    super();
    this._red = '';
    this._green = '';
    this._blue = '';
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

      :host([data-size*='size-l']),
      :host([data-size*='size-xl']) {
        padding-top: 0.5rem;
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
      if (this._field._spec.type !== 'google.type.color') {
        // eslint-disable-next-line no-console
        console.warn('Invalid fieldNode in bindData. Please bind a google.type.color field.');
        return;
      }
      this._updateValue();

      this._field.addEventListener('field-value-changed', () => {
        this._updateValue();
        this.requestUpdate();
      });

      this.requestUpdate();
    }
  }

  /**
   * update value properties rgb
   * @private
   */
  _updateValue() {
    this._red = this._field.red._value || '';
    this._green = this._field.green._value || '';
    this._blue = this._field.blue._value || '';
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    return html`
      <ui5-color-palette>
        <ui5-color-palette-item
          value="rgb(${this._red},${this._green},${this._blue})"
        ></ui5-color-palette-item
      ></ui5-color-palette>
    `;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    // prettier-ignore
    return html`${this._getTemplate()}`;
  }
}

window.customElements.define('display-google-type-color', DisplayGoolgeTypeColor);
