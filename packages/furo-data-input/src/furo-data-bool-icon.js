import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-bool-icon`
 * Displays a icon/symbol for a boolean value
 *
 * This component uses utf-8 symbols for true and false at the moment.
 *
 * @summary  Displays a icon/symbol for a boolean value
 * @customElement
 * @demo demo-furo-data-bool-icon
 * @appliesMixin FBP
 */
class FuroDataBoolIcon extends FBP(LitElement) {
  constructor() {
    super();

    this._initBinder();

    this.symboltrue = '▼';
    this.symbolfalse = '▶';
    this.field = {};
    /**
     * open close symbol
     * @type {string}
     * @private
     */
    this._ocSymbol = this.symbolfalse;
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    // set the attribute mappings
    this.binder.attributeMappings = {};

    // set the label mappings
    this.binder.labelMappings = {};

    this.binder.fatAttributesToConstraintsMappings = {};

    this.binder.constraintsTofatAttributesMappings = {};

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';

    this.addEventListener('click', () => {
      this.toggle();
    });
  }

  /**
   * Toggles the icon.
   */
  toggle() {
    this.binder.fieldNode._value = !this.binder.fieldNode._value;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the symbol for the true state
       */
      symboltrue: { type: String },
      /**
       * Defines the symbol for the false state
       */
      symbolfalse: { type: String },
    };
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: inline-block;
          width: 16px;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * Bind a fieldNode.
   * @param {FieldNode} d of type bool
   */
  bindData(d) {
    if (d === undefined) {
      return;
    }

    if (d._spec.type !== 'bool') {
      // eslint-disable-next-line no-console
      console.warn('wrong type binded', this);
      return;
    }
    this.binder.bindField(d);

    // render on changed data
    this.binder.fieldNode.addEventListener('field-value-changed', () => {
      this._updateSymbol();
    });

    this._updateSymbol();
  }

  _updateSymbol() {
    this._ocSymbol = this.binder.fieldNode._value ? this.symboltrue : this.symbolfalse;
    this.requestUpdate();
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      ${this._ocSymbol}
    `;
  }
}

window.customElements.define('furo-data-bool-icon', FuroDataBoolIcon);
