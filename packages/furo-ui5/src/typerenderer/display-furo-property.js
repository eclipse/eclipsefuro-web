import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

import { FieldNode } from '@furo/data/src/lib/FieldNode';

/**
 * `display-furo-property`
 * The display-furo-property component displays a FieldNode of type `furo.Property` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-property Basic Usage
 */
export class DisplayFuroProperty extends FBP(LitElement) {
  constructor() {
    super();
    this.noDataText = '';

    // Flag, if data part has type information
    this._typeResolved = false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the empty state display
       * With a furo.Property type, the effective type is only known when the data is transmitted.
       * Default: ''
       */
      noDataText: { type: String },
    };
  }

  /**
   * Component styles
   * @returns {*}
   */
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
   * the display-furo-property is a simple proxy element to show
   * the initial state if no data is available.
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    this._typeResolved = false;
    /**
     * check if bound fieldNode is of type furo.Property and NOT repeated
     * if the data is already available, create the renderName according the @type information.
     * If NOT, register event listener and create the component as soon as the @type information is available.
     */
    if (this._field instanceof FieldNode && this._field._spec.type === 'furo.Property') {
      this._waitForType(this._field);
    }
  }

  /**
   * furo.Property wait for @type information
   * registers event listener and creates the component as soon as the @type information is available.
   * @param field
   * @private
   */
  _waitForType(field) {
    const anyTypeHandler = () => {
      if (
        field.data['@type'] &&
        field.data['@type']._value !== undefined &&
        this._typeResolved === false
      ) {
        this._typeResolved = true;
        this.renderName = `display-${this._field.data['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
        this.defaultElement = document.createElement(this.renderName);
        this._createConcreteType();
      }
    };
    if (
      field.data['@type'] &&
      field.data['@type']._value !== undefined &&
      this._typeResolved === false
    ) {
      anyTypeHandler();
    } else {
      field.addEventListener('field-value-changed', anyTypeHandler);
    }
  }

  /**
   * Creates the concrete type specific renderer
   * @private
   */
  _createConcreteType() {
    if (this.defaultElement.bindData) {
      // adding attributes from parent element

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
      // bind field and replace host element
      this.defaultElement.bindData(this._field.data);
      this.replaceWith(this.defaultElement);
    } else {
      this._warning();
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
      ${this.noDataText}
    `;
  }
}

window.customElements.define('display-furo-property', DisplayFuroProperty);
