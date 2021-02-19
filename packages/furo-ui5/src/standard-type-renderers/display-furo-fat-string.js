import { LitElement, html, css } from 'lit-element';

/**
 * `display-furo-fat-string`
 * The display-furo-fat-string component displays a FieldNode of type `furo.fat.String` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-furo-fat-string Basic Usage
 */
class DisplayFuroFatString extends LitElement {
  constructor() {
    super();
    this._field = undefined;
  }

  static get styles() {
    // language=CSS
    return [
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
        span[data-size='size-s']::first-line {
          line-height: var(--sapElement_Compact_Height, 26px);
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
      `,
    ];
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
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
        this.requestUpdate();
      });
    }
  }

  _updateMeta(){
    /**
     * Sets the attributes from the field node
     */
    Object.keys(this._field.attributes).forEach(key => {
      if (!key.startsWith('_')) {
        this.setAttribute(this._field.attributes[key]._name, this._field.attributes[key]._value);
      }
    });
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    return html`
      <span>${this._field._value.value}</span>
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

window.customElements.define('display-furo-fat-string', DisplayFuroFatString);
