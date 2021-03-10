import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';

/**
 * `display-furo-link`
 * The display-furo-link component displays a FieldNode of type `furo.Link` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-furo-link Basic Usage
 */
class DisplayFuroLink extends LitElement {
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayFuroLink') ||
      css`
        :host {
          display: inline;
        }

        :host([disabled]) span {
          opacity: var(--_ui5_input_disabled_opacity, 0.4);
        }

        :host([hidden]) {
          display: none;
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
    return html`
      ${this._field
        ? html`
            <span
              >[${this._field.rel._value}][this._field.method._value][${this._field.href
                ._value}]</span
            >
          `
        : html``}
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

window.customElements.define('display-furo-link', DisplayFuroLink);
