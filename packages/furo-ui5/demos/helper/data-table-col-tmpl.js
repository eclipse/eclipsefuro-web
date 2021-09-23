import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-ui5-button.js';
/**
 * `data-table-col-tmpl`
 * Sample component to demostrate the functionality of column templates within furo-data-table
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class DataTableColTmpl extends FBP(LitElement) {
  constructor() {
    super();
    this.field = undefined;
    this.displayValue = '';
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    this._FBPAddWireHook('--btnClicked', () => {
      this.dispatchEvent(
        new CustomEvent('template-col-clicked', {
          detail: this.field.data._value,
          bubbles: true,
          composed: true,
        }),
      );
    });
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

        furo-ui5-button {
          border: none;
          display: block;
        }
      `,
    ];
  }

  bindData(data) {
    this.field = data;
    const members = [];
    this.field.members._value.forEach(item => {
      members.push(item.display_name);
    });

    this.displayValue = JSON.stringify(members)
      .replaceAll('[', '')
      .replaceAll(']', '')
      .replaceAll('"', '');
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-button @-click="--btnClicked">${this.displayValue}</furo-ui5-button>
    `;
  }
}

window.customElements.define('data-table-col-tmpl', DataTableColTmpl);
