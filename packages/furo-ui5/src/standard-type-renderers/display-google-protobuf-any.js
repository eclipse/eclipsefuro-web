import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework';

import '@furo/data-ui/src/furo-type-renderer';

/**
 * `display-google-protobuf-any`
 * The display-google-protobuf-any component is a wrapper displays of type `google.protobuf.Any` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 * @summary
 * @customElement
 * @demo demo display-google-protobuf-any Basic Usage
 */
class DisplayGoolgeProtobufAny extends LitElement {
  constructor(props) {
    super(props);
    this.noDataText = 'N/A';
    this.tabularForm = false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the empty state display
       * With a google.protobuf.Any type, the effective type is only known when the data is transmitted.
       * Default: N/A
       */
      noDataText: { type: String },
    };
  }

  /**
   * CSS Styles
   * @returns {*}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayString') ||
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
   * the display-google-protobuf-any is a simple proxy element to show
   * the initial state if no data is available.
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    /**
     * check if bound fieldNode is of type google.protobuf.Any
     * if the data is already available, create the renderName according the @type information.
     * If NOT, register event listener and create the component as soon as the @type information is available.
     */
    if (this._field['@type'] === undefined && this._field._spec.type === 'google.protobuf.Any') {
      this._waitForType(this._field);
    }
  }

  /**
   * google.protobuf.Any wait for @type information
   * registers event listener and creates the component as soon as the @type information is available.
   * @param field
   * @private
   */
  _waitForType(field) {
    const anyTypeHandler = () => {
      if (field['@type'] && field['@type']._value !== undefined) {
        this.renderName = `display-${this._field['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
        this.defaultElement = document.createElement(this.renderName);
        this._createContreteType();
        // field.removeEventListener('field-value-changed', anyTypeHandler, true)
      }
    };
    field.addEventListener('field-value-changed', anyTypeHandler);
  }

  /**
   * Creates the concrete type specific renderer
   * @private
   */
  _createContreteType() {
    if (this.defaultElement.bindData) {
      // adding attributes from parent element
      if (this.tabularForm) {
        this.defaultElement.setAttribute('tabular-form', null);
      }

      const l = this.attributes.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < l; ++i) {
        const { nodeName } = this.attributes.item(i);
        const { nodeValue } = this.attributes.item(i);
        // eslint-disable-next-line eqeqeq
        if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
          this.defaultElement.setAttribute(nodeName, nodeValue);
        }
      }
      this.defaultElement.bindData(this._field);
      this.replaceWith(this.defaultElement);
    } else {
      this._warning();
    }
  }

  /**
   * warns if diynamic component is not imported
   * @private
   */
  _warning() {
    // eslint-disable-next-line no-console
    console.warn(
      `No type specific renderer ${this.renderName} found. Check your imports.`,
      this._field._spec.type,
    );
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this.noDataText}
    `;
  }
}

window.customElements.define('display-google-protobuf-any', DisplayGoolgeProtobufAny);
