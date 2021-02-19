import { LitElement } from 'lit-element';

/**
 * `furo-type-renderer`
 * The furo-type-renderer is used to display type specific data.
 * There is a standard set of display components @furo/ui5/src/standard-type-renderers for rendering the individual types.
 *
 * The standard ui5 set can be integrated with the import
 * - import '@furo/ui5/src/standard-type-renderers/display-registry.js'.
 *
 * The standard material set can be integrated with the import
 * - import '@furo/data-ui/src/standard-type-renderers/display-registry.js'.
 *
 * If you want to implement an individual display of a type, you need your own display-[type] component and import it.
 *
 * for repeated field you should write your own display-[type]-repeats component and import it. if display-[type]-repeats
 * not exists, the renderer will use the display-[type] component as fallback and display it repeatedly.
 *
 * # Naming convention
 * - display-[(package.type).replaceAll('.', '-').toLocaleLowerCase()]
 * e.g. display-google-type-timeofday
 *
 * # Basic Usage
 * ```
 *   <furo-type-renderer ƒ-bind-data="--dao(*.data.fieldname)"></furo-type-renderer>
 * ```
 *
 * @summary
 * @customElement
 */
class FuroTypeRenderer extends LitElement {
  constructor() {
    super();
    // the bound fieldNode
    this._field = undefined;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * The attribute is passed to the display component. The display component
       * can decide whether the display differs
       * for a tabular form.
       * E.g. google.type.Money is displayed right-justified in a table.
       * But in a card it is left-justified.
       */
      tabularForm: {
        type: Boolean,
        attribute: 'tabular-form',
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },
    };
  }

  /**
   * bind data
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    this.renderName = `display-${this._field._spec.type.replaceAll('.', '-').toLocaleLowerCase()}`;
    this.defaultElement = document.createElement(this.renderName);
    if (!this._field._isRepeater) {
      this._createDisplay();
    } else {
      this._createRepeatedDisplay();
    }
  }

  /**
   *
   * @private
   */
  _createDisplay() {
    if (this.defaultElement.bindData) {
      this._addElement(this.defaultElement);
    } else {
      this._warning();
    }
  }

  _addElement(el) {
    // adding attributes from parent element
    if (this.tabularForm) {
      el.setAttribute('tabular-form', null);
    }

    const l = this.attributes.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < l; ++i) {
      const { nodeName } = this.attributes.item(i);
      const { nodeValue } = this.attributes.item(i);
      if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
        el.setAttribute(nodeName, nodeValue);
      }
    }

    el.bindData(this._field);
    this.replaceWith(el);

  }

  _warning() {
    // eslint-disable-next-line no-console
    console.warn(
      `No type specific renderer ${this.renderName} found. Check your imports.`,
      this._field._spec.type,
    );
  }

  /**
   *
   * @private
   */
  _createRepeatedDisplay() {
    const rRenderName = `${this.renderName}-repeats`;

    const elementRepeat = document.createElement(rRenderName);
    if (elementRepeat.bindData) {
      this._addElement(elementRepeat);
    } else if (this.defaultElement.bindData) {
      // fallback , display the display-[type] component repeatedly
      const el = document.createElement('furo-data-repeat');
      el.setAttribute('repeated-component', this.renderName);
      el.bindData(this._field);
      this.replaceWith(el);

    } else {
      this._warning();
    }
  }
}

window.customElements.define('furo-type-renderer', FuroTypeRenderer);
