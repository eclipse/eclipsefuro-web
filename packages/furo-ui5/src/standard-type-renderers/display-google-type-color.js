import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
// eslint-disable-next-line import/no-unresolved
import '@ui5/webcomponents/dist/ColorPalette.js';

/**
 * `display-google-type-color`
 *  need  @ui5/webcomponents v1.0.0-rc.12
 * The display-google-type-color component displays a FieldNode of type `google.type.Color` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-type-color Basic Usage
 */
class DisplayGoolgeTypeColor extends LitElement {
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayGoolgeTypeColor') ||
      css`
        :host {
          display: block;
          word-break: keep-all;
        }

        :host([tabular-form]) {
          text-align: right;
        }

        :host([hidden]) {
          display: none;
        }
        :host([disabled]) span {
          opacity: var(--_ui5_input_disabled_opacity);
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
      if (this._field._spec.type !== 'google.type.color') {
        // eslint-disable-next-line no-console
        console.warn('Invalid fieldNode in bindData. please bind a google.type.color field.');
        return;
      }
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
      <ui5-color-palette>
        <ui5-color-palette-item
          value="rgb(${this._field.red._value},${this._field.green._value},${this._field.blue
            ._value})"
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
    return html`
      ${this._getTemplate()}
    `;
  }
}

window.customElements.define('display-google-type-color', DisplayGoolgeTypeColor);
