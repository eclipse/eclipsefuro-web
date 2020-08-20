import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp/src/fbp.js";
/**
 * `furo-ui5-form-field-container`
 * The furo-ui5-form-field-container gives the user a layout to manage
 * input field and labels according to the design specification of SAP Fiori.
 *
 * Example
 *
 * ```html
 * <furo-ui5-form-field-container>
 *   <ui5-label label slot="label" for="Custom" show-colon>Currency / Units (custom)</ui5-label>
 *   <furo-horizontal-flex id="Custom" content space>
 *     <furo-ui5-data-text-input flex ƒ-bind-data="--entity(*.data.furo_data_money_input.currency_code)"></furo-ui5-data-text-input>
 *     <furo-ui5-data-number-input flex ƒ-bind-data="--entity(*.data.furo_data_money_input.units)"></furo-ui5-data-number-input>
 *  </furo-horizontal-flex>
 * </furo-ui5-form-field-container>
 * ```
 *
 *
 * The form and simple form in size L use a two-column layout within the responsive grid layout by default.
 * That means that the form groups are placed next to each other to have all the information on one screen and to
 * avoid scrolling. In these columns, the labels are positioned in the same row as the corresponding input field or value.
 * So the form groups adopt the Z layout (reading direction in rows, not in columns).
 *
 * The label-field ratio is 4:8:0 by default:
 *
 * 4 grid columns of the responsive grid layout are used by the labels.
 * 8 grid columns of the responsive grid layout are used by fields.
 * 0 grid columns of the responsive grid layout are used by empty columns.
 *
 *
 * Size M of the form and simple form also has a single-column layout within the responsive grid layout by default.
 * However, in size M the labels are positioned in the same row as the corresponding input field or value, and form
 * groups are positioned below each other.
 *
 * The label-field ratio is 2:10:0 by default:
 *
 * 2 grid columns of the responsive grid layout are used by the labels.
 * 10 grid columns of the responsive grid layout are used by the fields.
 * 0 columns of the responsive grid layout are used by empty columns.
 *
 *
 * Size S (Smartphones and Dialogs)
 * The form and simple form use a single-column layout within the responsive grid layout in size S by default.
 * This means that the form groups are positioned below each other in a single column and the labels are positioned
 * `above` the fields to avoid truncation of the labels.
 *
 * The label-field ratio is 12:12:0 by default:
 *
 * 12 grid columns of the responsive grid layout are used by the labels.
 * (A label handles the space of a whole row.)
 * 12 grid columns of the responsive grid layout are used by the fields.
 * (A field handles the space of a whole row.)
 * 0 grid columns of the responsive grid layout are used by empty columns.
 * (There is no empty space on the right of the field.)
 *
 *
 *
 * @summary form field container
 * @customElement
 * @demo demo-furo-ui5-form-field-container Sample
 * @appliesMixin FBP
 */
class FuroUi5FormFieldContainer extends FBP(LitElement) {

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties(){
    return {};
  }

  static get styles() {
    // language=CSS
    return [
        css`
            :host {
                display: block;
            }
            :host([hidden]){
                display: none;
            }
            .container {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-gap: 1em;
            }

            ::slotted(*[content]) {
              grid-column: span 8;
              width: 100%;
            }
            ::slotted(*[label]) {
              grid-column: span 4;
              justify-self: end;
              align-self: center;
            }

            @media only screen and (max-width:600px) {
              ::slotted(*[content]) {
                grid-column: span 12;
                width: 100%;
              }
              ::slotted(*[label]) {
                grid-column: span 12;
                justify-self: start;
                align-self: center;
              }
            }

            @media only screen and (min-width: 601px) and (max-width: 768px) {
              ::slotted(*[content]) {
                grid-column: span 10;
                width: 100%;
              }
              ::slotted(*[label]) {
                grid-column: span 2;
                justify-self: end;
                align-self: center;
              }
            }


        `
    ];
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render(){
    // language=HTML
    return html`
      <div class="container">
        <slot name="label"></slot>
        <slot></slot>
      </div>
    `;
  }

}

window.customElements.define('furo-ui5-form-field-container', FuroUi5FormFieldContainer);
