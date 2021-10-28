import { LitElement, html, css } from 'lit';

/**
 * `display-furo-fat-string`
 * The display-furo-fat-string component displays a FieldNode of type `furo.fat.String` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-string Basic Usage
 */
class DisplayFuroFatString extends LitElement {
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

    /**
     * Sets the attributes from the field node
     */
    this._updateMeta();

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this._updateMeta();
        this._formatDisplay();
      });
      this._formatDisplay();
    }
  }

  _updateMeta() {
    /**
     * Sets the attributes from the field node
     */
    Object.keys(this._field.attributes).forEach(key => {
      if (!key.startsWith('_') && key !== 'label') {
        this.setAttribute(this._field.attributes[key]._name, this._field.attributes[key]._value);
      }
    });
  }

  _formatDisplay() {
    this._displayValue = this._field._value.value;
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
      ${this._displayValue}
    `;
  }
}

window.customElements.define('display-furo-fat-string', DisplayFuroFatString);
