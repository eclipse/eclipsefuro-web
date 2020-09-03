import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';

import './furo-ui5-form-field-container.js';

/**
 * `furo-ui5-data-display-labeled`
 * The furo-ui5-data-display-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled display field
 * @customElement
 * @demo demo-furo-ui5-form-field-container Simple use
 * @appliesMixin FBP
 */
class FuroUi5DataDisplayLabeled extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this.label = '';
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {};
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * Orchestrates the data field connection to the inside
   * @param fieldNode
   */
  bindData(fieldNode) {
    if (fieldNode === undefined) {
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    this._field = fieldNode;
    this._FBPTriggerWire('--data', fieldNode);

    this.label = fieldNode._meta.label || '';

    /**
     * Listener on fieldNode meta changes
     */
    this._field.addEventListener('this-metas-changed', meta => {
      this.label = meta.detail._meta.label || this.label;
      this.requestUpdate();
    });

    this.requestUpdate();
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container>
        <ui5-label label slot="label" for="Input" show-colon>${this.label}</ui5-label>
        <furo-ui5-data-display content id="Input" ƒ-bind-data="--data"></furo-ui5-data-display>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define('furo-ui5-data-display-labeled', FuroUi5DataDisplayLabeled);
