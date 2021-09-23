import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
/**
 * `data-table-col-tmpl-link`
 * Sample component to demostrate the functionality of column templates within furo-data-table
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class DataTableColTmplLink extends FBP(LitElement) {
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
          text-align: center;
        }
        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  bindData(data) {
    this.field = data;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <ui5-icon
        style="cursor: zoom-in"
        interactive
        name="navigation-right-arrow"
        @-click="--btnClicked"
      ></ui5-icon>
    `;
  }
}

window.customElements.define('data-table-col-tmpl-link', DataTableColTmplLink);
