import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

/**
 * `furo-ui5-form-field-container`
 * The furo-ui5-form-field-container gives the user a layout to manage
 * input field and labels according to the design specification of SAP Fiori.
 *
 * @slot {HTMLElement} label - defines the label to be displayed.
 * @slot {HTMLElement} - defines the form field to be displayed in the container element.
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
 * The label-field ratio is 3:9:0 by default:
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
 * @cssprop {N/A} [--furo-ui5-form-field-container-grid-row-gap=0] - grid row gap
 * @cssprop {N/A} [--furo-ui5-form-field-container-grid-column-gap=1em] - grid column gap
 * @cssprop {N/A} [--furo-ui5-form-field-container-label-justify-gap=end] - label alignment (start, end)
 *
 * @summary form field container
 * @customElement
 * @demo demo-furo-ui5-form-field-container Sample
 * @appliesMixin FBP
 */
export class FuroUi5FormFieldContainer extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    this.updateComplete.then(() => {
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(entries => {
          window.requestAnimationFrame(() => {
            for (const entry of entries) {
              this._checkSize(entry.contentRect.width);
            }
          });
        });
        ro.observe(this);
      } else {
        // fallback, just listen to the resize event
        setTimeout(() => {
          const cr = this.getBoundingClientRect();
          this._checkSize(cr.width);
        }, 1);

        window.addEventListener('resize', () => {
          const cr = this.getBoundingClientRect();
          this._checkSize(cr.width);
        });
      }
    });
  }

  /**
   * Form breakpoints according to SAP Fiori Design System
   * https://experience.sap.com/fiori-design-web/form/
   * @param size
   * @private
   */
  _checkSize(size) {
    if (size <= 600) {
      this._setSizeAttribute('size-s');
    } else if (size > 600 && size <= 1023) {
      this._setSizeAttribute('size-m');
    } else if (size > 1023 && size <= 1439) {
      this._setSizeAttribute('size-l');
    } else if (size > 1439) {
      this._setSizeAttribute('size-xl');
    } else {
      this._setSizeAttribute('size-m');
    }
  }

  /**
   * Sets data-size attribute
   * @param attrValue
   * @private
   */
  _setSizeAttribute(attrValue) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].setAttribute('data-size', attrValue);
    }
  }

  static get properties() {
    return {};
  }

  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        .container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-row-gap: var(--furo-ui5-form-field-container-grid-row-gap, 0);
          grid-column-gap: var(--furo-ui5-form-field-container-grid-column-gap, 1em);
        }

        ::slotted(*[content]) {
          grid-column: span 8;
          width: 100%;
        }

        ::slotted(*[label]) {
          grid-column: span 4;
          place-self: start var(--furo-ui5-form-field-container-label-justify, end);
          padding-top: 0.5rem;
        }

        :host([disabled]) ::slotted(*[content]) {
          opacity: var(--_ui5_input_disabled_opacity);
        }

        ::slotted(*[content][data-size*='size-s']) {
          grid-column: span 12;
          width: 100%;
        }

        ::slotted(*[label][data-size*='size-s']) {
          padding-top: 0;
          grid-column: span 12;
          justify-self: start;
        }

        ::slotted(*[content][data-size*='size-m']) {
          grid-column: span 9;
          width: 100%;
        }

        ::slotted(*[label][data-size*='size-m']) {
          grid-column: span 3;
          place-self: start var(--furo-ui5-form-field-container-label-justify, end);
        }

        ::slotted(*[content][data-size*='size-l']) {
          grid-column: span 8;
          width: 100%;
        }

        ::slotted(*[label][data-size*='size-l']) {
          grid-column: span 4;
          place-self: start var(--furo-ui5-form-field-container-label-justify, end);
        }

        ::slotted(*[content][data-size*='size-xl']) {
          grid-column: span 8;
          width: 100%;
        }

        ::slotted(*[label][data-size*='size-xl']) {
          grid-column: span 4;
          place-self: start var(--furo-ui5-form-field-container-label-justify, end);
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
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
