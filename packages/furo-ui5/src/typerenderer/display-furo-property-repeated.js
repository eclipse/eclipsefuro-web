import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode';

/**
 * `display-furo-property-repeats`
 * The display-furo-property-repeats component displays a FieldNode of type `furo.Property` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-property-repeats Basic Usage
 */
export class DisplayFuroPropertyRepeated extends FBP(LitElement) {
  constructor() {
    super();
    this.elementList = [];
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
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }

  /**
   * Binds a field node to the component
   * the display-furo-property-repeats is a simple proxy element to show
   * the initial state if no data is available.
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this._typeResolved = false;
    this._field = fieldNode;
    /**
     * check if bound fieldNode is of type furo.Property and repeated
     * if the data is already available, create the renderName according the @type information.
     * If NOT, register event listener and create the component as soon as the @type information is available.
     */
    if (this._field instanceof RepeaterNode && this._field._spec.type === 'furo.Property') {
      // we want a fresh list on every update of the list, because the types and order of the list items can change
      // eslint-disable-next-line no-param-reassign
      this._field.clearListOnNewData = true;

      this._field.addEventListener('this-repeated-field-changed', () => {
        this._updateFieldList();
      });
      this._updateFieldList();
    }
  }

  _updateFieldList() {
    this.elementList.forEach(element => {
      element.remove();
    });

    if (this._field.repeats && this._field.repeats.length) {
      this._field.repeats.forEach(item => {
        const renderName = `display-${item.data['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
        const element = document.createElement(renderName);

        if (element.bindData) {
          this.elementList.push(element);
          element.bindData(item.data);
          element.setAttribute('data-type', this._field._name);
          this.parentNode.insertBefore(element, this);
        }
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
      ${this.noDataText}
    `;
  }
}

window.customElements.define('display-furo-property-repeated', DisplayFuroPropertyRepeated);
