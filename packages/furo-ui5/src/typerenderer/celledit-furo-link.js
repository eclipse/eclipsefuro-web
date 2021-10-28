import { LitElement, html, css } from 'lit';

/**
 * `celledit-furo-link`
 * The celledit-furo-link component displays a FieldNode of type `furo.Link` in read only mode.
 *
 * Every celledit-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @customElement
 * @demo demo celledit-furo-link Basic Usage
 */
class CelleditFuroLink extends LitElement {
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
            TODO [${this._field.rel._value}][this._field.method._value][${this._field.href._value}]
          `
        : html``}
    `;
  }
}

window.customElements.define('celledit-furo-link', CelleditFuroLink);
