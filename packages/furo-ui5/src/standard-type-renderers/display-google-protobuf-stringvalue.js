import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';

/**
 * `display-google-protobuf-stringvalue`
 * The display-google-protobuf-stringvalue component displays a FieldNode of type `google.protobuf.Stringvalue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-stringvalue Basic Usage
 */
class DisplayGoogleProtobufStringvalue extends LitElement {
  constructor() {
    super();
    this._displayValue = '';
  }

  /**
   * Component styles
   * @returns {*}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayGoogleProtobufStringValue') ||
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
        this._updateValue();
      });

      this._updateValue();
    }
  }

  _updateValue() {
    if (this._field && this._field.value) {
      this._displayValue = this._field.value._value;
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
      ${this._displayValue
        ? html`
            ${this._displayValue}
          `
        : html``}
    `;
  }
}

window.customElements.define(
  'display-google-protobuf-stringvalue',
  DisplayGoogleProtobufStringvalue,
);
