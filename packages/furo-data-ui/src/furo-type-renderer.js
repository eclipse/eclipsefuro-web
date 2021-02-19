import { LitElement } from 'lit-element';

/**
 * `furo-type-renderer`
 * Desc
 *
 * @summary
 * @customElement
 */
class FuroTypeRenderer extends LitElement {
  constructor() {
    super();
    this._field = undefined;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * Indicates if the field is used with tabular style
       */
      tabularForm: {
        type: Boolean,
        attribute: 'tabular-form',
      }
    };
  }


  bindData(fieldNode) {
    this._field = fieldNode;
    this._createDisplay();
  }

  /**
   *
   * @private
   */
  _createDisplay() {
    let tagName = `display-${this._field._spec.type.replaceAll('.', '-').toLocaleLowerCase()}`;

    if (this._field._isRepeater) {
      tagName += '-repeats';
    }

    const element = document.createElement(tagName);

    if (element.bindData) {
      if (this.tabularForm) {
        element.setAttribute('tabular-form', null)
      }

      element.bindData(this._field);
      this.shadowRoot.appendChild(element);
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `No type specific renderer ${tagName} found. Check your imports.`,
        this._field._spec.type,
      );
    }
  }
}

window.customElements.define('furo-type-renderer', FuroTypeRenderer);
