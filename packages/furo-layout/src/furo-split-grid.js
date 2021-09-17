import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `split-grid`
 * will split your screen contents horizontally (in cols) and put them vertically (left at top) when the available space is to small.
 *
 * @slot left {HTMLElement} - slot to add a component on the left hand side.
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * ```html
 *  <!-- a simple layout manager with two columns  -->
 * <furo-split-grid padding>
 *   <div hspan="2" full-on-size-medium full-on-size-small class="left">
 *      <slot name="left"></slot>
 *   </div>
 *   <!-- this will start at pos 3 and goes to the end of the screen -->
 *   <furo-z-grid hstart="3" fill>
 *     <slot></slot>
 *   </furo-z-grid>
 * </furo-split-grid>
 * ```
 *
 * ## Setting column width
 * To set the width of a column use the `hspan` attribute.
 *
 * ## Fill column to the end of the screen
 * To make a column that uses the available space you have to set a starting point. This can be done with `hstart="3"`
 * (begin on cell 3) and the attribute `fill` (fill to the right)
 *
 *  ## full-on-[size]
 *  To set full width on a specific current size, use `full-on-size-small` , `full-on-size-medium` , `full-on-size-large` ,`full-on-size-xlarge`.
 *
 *  When the available space has the given size, the default hspan are overridden and the full width is used.
 *
 *  ## hstart
 *  Set the starting point of a filling row with `hstart="3"`.
 *
 *  Available values are `hstart="2"`,...,`hstart="9"`
 *
 *  ## hspan
 *  Set the horizontal space (the width) with the *hspan* attribute.
 *
 *  Available ranges are from 1 to 9.
 *
 *  `hspan="1"`, `hspan="2"`,...,`hspan="9"`
 *
 * ## Named lines and columns
 * **last-col** refers to the last column.
 * There is no line name available
 *
 *
 * @summary a grid splitter
 * @customElement
 * @demo demo-furo-split-grid
 * @appliesMixin FBP
 */
class FuroSplitGrid extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Breakpoint size for small
       */
      sizeSmall: { type: Number, attribute: 'size-small' },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this.updateComplete.then(() => {
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(() => {
          window.requestAnimationFrame(() => {
            this._checkSize(this.getBoundingClientRect().width);
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
      this.setAttribute('size', 'size-s');
    } else if (size > 600 && size <= 1023) {
      this.setAttribute('size', 'size-m');
    } else if (size > 1023 && size <= 1439) {
      this.setAttribute('size', 'size-l');
    } else if (size > 1439) {
      this.setAttribute('size', 'size-xl');
    } else {
      this.setAttribute('size', 'size-m');
    }
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('SplitGrid') ||
      css`
        :host {
          display: block;
          box-sizing: border-box;
          position: relative;
        }

        :host([hidden]) {
          display: none;
        }

        #grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr)) [last-col];
          position: relative;

          box-sizing: border-box;
        }
        :host([size='size-l']) #grid {
          grid-template-columns: repeat(auto-fill, minmax(6.6rem, 1fr)) [last-col];
        }

        :host([size='size-xl']) #grid {
          grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)) [last-col];
        }

        ::slotted(*[hspan='1']) {
          grid-column: auto / span 1;
        }

        ::slotted(*[hspan='2']) {
          grid-column: auto / span 2;
        }

        ::slotted(*[hspan='3']),
        :host([size='size-m']) ::slotted(*[hspan-on-size-medium='3']),
        :host([size='size-l']) ::slotted(*[hspan-on-size-large='3']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='3']) {
          grid-column: auto / span 3;
        }

        ::slotted(*[hspan='4']),
        :host([size='size-m']) ::slotted(*[hspan-on-size-medium='4']),
        :host([size='size-l']) ::slotted(*[hspan-on-size-large='4']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='4']) {
          grid-column: auto / span 4;
        }

        ::slotted(*[hspan='5']),
        :host([size='size-m']) ::slotted(*[hspan-on-size-medium='5']),
        :host([size='size-l']) ::slotted(*[hspan-on-size-large='5']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='5']) {
          grid-column: auto / span 5;
        }

        ::slotted(*[hspan='6']),
        :host([size='size-l']) ::slotted(*[hspan-on-size-large='6']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='6']) {
          grid-column: auto / span 6;
        }

        ::slotted(*[hspan='7']),
        :host([size='size-l']) ::slotted(*[hspan-on-size-large='7']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='7']) {
          grid-column: auto / span 7;
        }
        ::slotted(*[hspan='8']),
        :host([size='size-l']) ::slotted(*[hspan-on-size-large='8']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='8']) {
          grid-column: auto / span 8;
        }

        ::slotted(*[hspan='9']),
        :host([size='size-xl']) ::slotted(*[hspan-on-size-xlarge='9']) {
          grid-column: auto / span 9;
        }

        /* start at position x*/
        ::slotted(*[hstart='2']) {
          grid-column-start: 2;
        }

        ::slotted(*[hstart='3']) {
          grid-column-start: 3;
        }
        ::slotted(*[hstart='4']) {
          grid-column-start: 4;
        }
        ::slotted(*[hstart='5']) {
          grid-column-start: 5;
        }

        ::slotted(*[hstart='6']) {
          grid-column-start: 6;
        }
        ::slotted(*[hstart='7']) {
          grid-column-start: 7;
        }
        ::slotted(*[hstart='8']) {
          grid-column-start: 8;
        }
        ::slotted(*[hstart='9']) {
          grid-column-start: 9;
        }

        /* fill to full width*/
        ::slotted(*[fill]) {
          grid-column-end: last-col;
        }

        /* Full width cell*/
        :host([size='size-s']) ::slotted([full-on-size-small]),
        :host([size='size-m']) ::slotted([full-on-size-medium]),
        :host([size='size-l']) ::slotted([full-on-size-large]),
        ::slotted(*[hspan='full']),
        ::slotted([full-width]),
        ::slotted([full]) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }
        /* Place the cell on a new line*/
        ::slotted([newline]) {
          grid-column-start: 1;
        }

        /**
          on size s everything is full width
         */
        :host([size='size-s']) ::slotted(*[fill]),
        :host([size='size-m']) ::slotted(*[fill]),
        :host([size='size-s']) ::slotted(*) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }

        /** on size m max width is 3 */
        :host([size='size-m']) ::slotted(*[hspan='6']),
        :host([size='size-m']) ::slotted(*[hspan='5']),
        :host([size='size-m']) ::slotted(*[hspan='4']),
        :host([size='size-m']) ::slotted(*[hspan='3']) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }

        /** on size l max width is 5 */
        :host([size='size-l']) ::slotted(*[hspan='5']),
        :host([size='size-l']) ::slotted(*[hspan='6']) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }

        /* Paddings */
        :host([size='size-s'][padding]) {
          padding: 0.25rem 1rem;
        }

        :host([size='size-m'][padding]) {
          padding: 0.25rem 2rem;
        }

        :host([size='size-l'][padding]) {
          padding: 1rem 2rem;
        }

        :host([size='size-xl'][padding]) {
          padding: 1rem 3rem;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div id="grid">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('furo-split-grid', FuroSplitGrid);
