import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import { Theme } from '@furo/framework';

/**
 * `furo-type-renderer`
 * The furo-type-renderer is used to display type specific data. It uses **display** as default context and will warn you
 * on the console if the requested `context-[type-name]` does not exist or was not imported.
 *
 * There is a standard set of display components @furo/ui5/src/standard-type-renderers for rendering the individual types.
 *
 * The standard ui5 set can be integrated with the import
 * - import '@furo/ui5/src/standard-type-renderers/display-registry.js'.
 *
 * The standard material set can be integrated with the import
 * - import '@furo/data-ui/src/standard-type-renderers/display-registry.js'.
 *
 * If you want to implement an individual display of a type, you need your own `context-[type-name]` component and import it.
 *
 * for repeated fields you should write your own context-[type-name]-repeated component and import it.
 * If no context-[type-name]-repeated exists, the renderer will use the display-[type] component as fallback and
 * display it repeatedly, this is ok for a lot of cases.
 *
 * ## Naming convention
 *
 * ```
 * display-google-type-timeofday
 * ------- ---------------------
 *    |             |
 * context      type-name
 *
 * # examples:
 * cell-string
 * celledit-string
 * display-string
 * yourcontext-string
 *
 * The method to evaluate the renderer is built as following:
 *
 * context-[(package.type).replaceAll('.', '-').toLocaleLowerCase()]
 * ```
 *
 *
 *
 * ## Basic Usage
 * ```
 *   <furo-type-renderer ƒ-bind-data="--dao(*.data.fieldname)"></furo-type-renderer>
 * ```
 *
 * ## Writing your own renderer
 * The only API you need to implement in your component is the `bindData()` method.
 * You just have to follow the naming convention for your renderer.
 *
 * @summary type rendering
 * @customElement
 * @demo demo-furo-type-renderer Display context (default)
 * @demo demo-furo-type-renderer-cell cell context
 * @demo demo-furo-type-renderer-celledit celledit context
 * @appliesMixin FBP
 */
class FuroTypeRenderer extends FBP(LitElement) {
  constructor() {
    super();
    this.tpl = html``;
    this.context = 'display';
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
       * Value State
       */
      valueState: { type: String, reflect: true, attribute: 'value-state' },
      /**
       * A Boolean attribute which, if present, means this field is displayed in disabled state.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * Set the context if you need another then display.
       * Prebuilt context renderers exist for display, cell, celledit.
       *
       */
      context: { type: String },
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
        this.renderName = `${this.context}-${this._field['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .replaceAll('_', '-')
          .toLocaleLowerCase()}`;
      } else {
        /**
         * all other types
         */
        this.renderName = `${this.context}-${this._field._spec.type
          .replaceAll('.', '-')
          .replaceAll('_', '-')
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
   * Component naming: [package-type]-repeated
   *
   * Fallback: if no -repeated component is available, a flow-repeat is used...
   * @private
   */
  _createRepeatedDisplay() {

    const rRenderName = `${this.renderName}-repeated`;
    const elementRepeat = document.createElement(rRenderName);
    if (elementRepeat.bindData) {
      this._addElement(elementRepeat);
    } else if (this.defaultElement.bindData) {
      // fallback , display the display-[type] component repeatedly
      this._fallbackFlowRepeat = document.createElement('flow-repeat');
      const tpl = document.createElement('template');
      tpl.innerHTML = `<${this.renderName} ƒ-bind-data="--item"></${this.renderName}>`;
      this._fallbackFlowRepeat.appendChild(tpl);

      this.parentNode.insertBefore(this._fallbackFlowRepeat, this);

      this._fallbackFlowRepeat.injectItems(this._field.repeats);


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
