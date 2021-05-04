import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';
import { Theme } from '@furo/framework';

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
 * @summary type rendering
 * @customElement
 * @demo demo-furo-type-renderer Basic Usage
 * @appliesMixin FBP
 */
class FuroTypeRenderer extends FBP(LitElement) {
  constructor() {
    super();
    this.tpl = html``;
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroTypeRenderer') ||
      css`
        :host {
          display: none;
        }
      `
    );
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
       * Value State
       */
      valueState: { type: String, reflect: true, attribute: 'value-state' },
      /**
       * A Boolean attribute which, if present, means this field is displayed in disabled state.
       */
      disabled: {
        type: Boolean,
      },
    };
  }

  /**
   * Evaluates the component name
   * Special treatment for google.protobuf.Any
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      if (this._field['@type']) {
        /**
         * if there exists already a field @type, the correct
         * render component according @type information will be created
         */
        this.renderName = `display-${this._field['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
      } else {
        /**
         * all other types
         */
        this.renderName = `display-${this._field._spec.type
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
      }

      this.defaultElement = document.createElement(this.renderName);

      if (!this._field._isRepeater) {
        this._createDisplay();
      } else {
        this._createRepeatedDisplay();
      }
    }
  }

  /**
   * Creates the component for single fields
   * @private
   */
  _createDisplay() {
    if (this.defaultElement.bindData) {
      this._addElement(this.defaultElement);
    } else {
      this._warning();
    }
  }

  /**
   * Creates the component for repeated fields
   * Component naming: [package-type]-repeats
   * Default: furo-ui5-data-repeat with single component
   * @private
   */
  _createRepeatedDisplay() {
    const rRenderName = `${this.renderName}-repeats`;
    const elementRepeat = document.createElement(rRenderName);

    if (elementRepeat.bindData) {
      this._addElement(elementRepeat);
    } else if (this.defaultElement.bindData) {
      // fallback , display the display-[type] component repeatedly
      const el = document.createElement('furo-ui5-data-repeat');
      el.setAttribute('repeated-component', this.renderName);
      el.bindData(this._field);
      this.parentNode.insertBefore(el, this);
    } else {
      this._warning();
    }
  }

  /**
   * Attribute handling
   * Adding to DOM
   * @param el
   * @private
   */
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
      // eslint-disable-next-line eqeqeq
      if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
        el.setAttribute(nodeName, nodeValue);
      }
    }
    el.bindData(this._field);
    this.parentNode.insertBefore(el, this);
  }

  _warning() {
    // eslint-disable-next-line no-console
    console.warn(
      `No type specific renderer ${this.renderName} found. Check your imports.`,
      this._field._spec.type,
    );
  }
}

window.customElements.define('furo-type-renderer', FuroTypeRenderer);
