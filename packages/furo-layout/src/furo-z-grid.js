import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `z-grid`
 * is a grid which places your elements in a **z** pattern.
 * It creates a grid which can be imagined as a grid with cells of the size *8rem x 8rem*.~
 *
 * The size on the x-axis can vary a little bit, according to the the available space.
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * This component is nestable.
 *
 * ```html
 *
 *  <furo-z-grid>
 *    <your-component hspace="2" vspace="4"></your-component>
 *    <your-component hspace="2" vspace="2"></your-component>
 *  </furo-z-grid>
 *
 *  <!-- with automatic padding -->
 *  <furo-z-grid padding>
 *    <your-component hspan="2" vspan="4"></your-component>
 *    <your-component hspan="2" vspan="2"></your-component>
 *  </furo-z-grid>
 * ```
 *
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=4rem] - card content height with vspan=1, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=8rem] - card content height with vspan=2, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=12rem] - card content height with vspan=3, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=16rem] - card content height with vspan=4, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=20rem] - card content height with vspan=5, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=24rem] - card content height with vspan=6, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=28rem] - card content height with vspan=7, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=32rem] - card content height with vspan=8, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 * @cssprop {N/A} [--furo-ui5-cardContentHeight=36rem] - card content height with vspan=9, --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight
 *
 *  ## sizes
 *  The sizes are calculated from the available space that the grid becomes from its parent.
 *
 *  ### Sizes are calculated as following
 *
 *  ```
 *   |  small  |   medium   |    large    |    xlarge   |
 *   |         |            |             |             |
 *   | 0...599 | 600...1023 | 1024...1439 | 1440...nnnn |
 *
 *  ```
 *
 *  ## hspan
 *  Set the horizontal space (the width) with the *hspan* attribute.
 *
 *  Available ranges are from 1 to 9 and full.
 *
 *  To tell a element that it has to use the full width use `hspan="full"` or use the alias `full` or `full-width`.
 *
 *  `hspan="1"`, `hspan="2"`,...,`hspan="9"`, `hspan="full"`
 *
 *  ## vspan
 *  Set the vertical space (the height) with the *vspan* attribute.
 *
 *  Available ranges are from 1 to 9.
 *
 *  `vspan="1"`, `vspan="2"`,...,`vspan="9"`
 *
 *  ## newline
 *  To force a placement on a new line use `newline`
 *
 *  ## padding
 *  Set the attribute *padding* to add paddings according to the size of the furo-z-grid automatically.
 *
 *  :host([size='size-s']) ==> **0.25rem 1rem;**
 *
 *  :host([size='size-m'] ==> **0.25rem 2rem;**
 *
 *  :host([size='size-l'] ==> **1rem 2rem;**
 *
 *  :host([size='size-xl'] ==> **1rem 3rem;**
 *
 *  ## full-on-[size]
 *  To set full width on a specific current size, use `full-on-size-small` , `full-on-size-medium` , `full-on-size-large` ,`full-on-size-xlarge`.
 *
 *  When the available space has the given size, the default hspan are overridden and the full width is used.
 *
 *  ## hide-on-[size]
 *  To hide a element on a specific current size, use `hide-on-size-small` , `hide-on-size-medium` , `hide-on-size-large` ,`hide-on-size-xlarge`.
 *
 *  ## show-on-[size]
 *  To show a element only on a specific current size, use `show-on-size-small` , `show-on-size-medium` , `show-on-size-large` ,`show-on-size-xlarge`.
 *
 *  ## custom span sizes on different sizes (hspan-on-[size])
 *  To set a specific width (hspan) on a specific current size, use `hspan-on-size-small="1...9"` , `hspan-on-size-medium="1...9"` , `hspan-on-size-large="1...9"` , `hspan-on-size-xlarge="1...9"` .
 *
 *  ## Ohter attributes
 *
 *  The attributes *full* and *full-width* are aliases for `hspan="full"`.
 *
 * ## Named lines and columns
 * **last-col** refers to the last column.
 * **last-row** refers to the last line/row.
 *
 * @summary grid with a z pattern
 * @customElement
 * @demo demo-furo-z-grid
 * @appliesMixin FBP
 */
class FuroZGrid extends FBP(LitElement) {
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
      if (size > 700) {
        this.setAttribute('oversize', 'true');
      } else {
        this.setAttribute('oversize', 'false');
      }
    } else if (size > 1023 && size <= 1439) {
      this.setAttribute('size', 'size-l');
      if (size > 1256) {
        this.setAttribute('oversize', 'true');
      } else {
        this.setAttribute('oversize', 'false');
      }
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
      Theme.getThemeForComponent('FuroZGrid') ||
      css`
        :host {
          display: block;
          box-sizing: border-box;
          position: relative;
          height: 100%;
        }

        :host([hidden]) {
          display: none;
        }

        .grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr)) [last-col];
          grid-template-rows: repeat(auto-fill, minmax(1rem, 1fr)) [last-row];
          position: relative;
          height: 100%;
          box-sizing: border-box;
        }

        :host([size='size-m'][oversize='true']) .grid {
          grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)) [last-col];
        }

        :host([size='size-l']) .grid {
          grid-template-columns: repeat(auto-fill, minmax(6.6rem, 1fr)) [last-col];
        }
        :host([size='size-l'][oversize='true']) .grid {
          grid-template-columns: repeat(auto-fill, minmax(7.8rem, 1fr)) [last-col];
        }

        :host([size='size-xl']) .grid {
          grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)) [last-col];
        }

        /* minimal or default height of 1*/
        ::slotted(*[full-height]) {
          grid-row-start: 1;
          grid-row-end: span last-col;
        }

        /* --furo-ui5-cardContentHeight is calculated by span * 2 - cardHeaderHeight , cardHeaderHeight is 6rem, factor 2 comes from the gaps*/
        ::slotted(*[vspan='1']) {
          grid-row: auto / span 4;
          --furo-ui5-cardContentHeight: 4rem;
        }

        ::slotted(*[vspan='2']) {
          grid-row: auto / span 8;
          --furo-ui5-cardContentHeight: 12rem;
        }

        ::slotted(*[vspan='3']) {
          grid-row: auto / span 12;
          --furo-ui5-cardContentHeight: 18rem;
        }

        ::slotted(*[vspan='4']) {
          grid-row: auto / span 16;
          --furo-ui5-cardContentHeight: 26rem;
        }

        ::slotted(*[vspan='5']) {
          grid-row: auto / span 20;
          --furo-ui5-cardContentHeight: 34rem;
        }

        ::slotted(*[vspan='6']) {
          grid-row: auto / span 24;
          --furo-ui5-cardContentHeight: 42rem;
        }

        ::slotted(*[vspan='7']) {
          grid-row: auto / span 28;
          --furo-ui5-cardContentHeight: 50rem;
        }

        ::slotted(*[vspan='8']) {
          grid-row: auto / span 32;
          --furo-ui5-cardContentHeight: 58rem;
        }

        ::slotted(*[vspan='9']) {
          grid-row: auto / span 36;
          --furo-ui5-cardContentHeight: 66rem;
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

        /* Full width cell*/
        :host([size='size-s']) ::slotted([full-on-size-small]),
        :host([size='size-m']) ::slotted([full-on-size-medium]),
        :host([size='size-l']) ::slotted([full-on-size-large]),
        ::slotted([hspan='full']),
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
        :host([size='size-s']) ::slotted(*) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }

        /** on size m max width is 4 */

        :host([size='size-m']) ::slotted(*[hspan='5']),
        :host([size='size-m']) ::slotted(*[hspan='6']),
        :host([size='size-m']) ::slotted(*[hspan='7']),
        :host([size='size-m']) ::slotted(*[hspan='8']),
        :host([size='size-m']) ::slotted(*[hspan='9']) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }

        /** on size l max width is 8 */

        :host([size='size-l']) ::slotted(*[hspan='8']),
        :host([size='size-l']) ::slotted(*[hspan='9']) {
          grid-column-start: 1;
          grid-column-end: last-col;
        }

        /* responsive hider */
        :host([size='size-s']) ::slotted(*[hide-on-size-small]),
        :host([size='size-m']) ::slotted(*[hide-on-size-medium]),
        :host([size='size-l']) ::slotted(*[hide-on-size-large]),
        :host([size='size-xl']) ::slotted(*[hide-on-size-xlarge]) {
          display: none;
        }

        /* per size visibility for xlarge
         * Element with this attribute are only visible on x-large size
         */
        :host([size='size-s']) ::slotted(*[show-on-size-xlarge]),
        :host([size='size-m']) ::slotted(*[show-on-size-xlarge]),
        :host([size='size-l']) ::slotted(*[show-on-size-xlarge]) {
          display: none;
        }

        /* per size visibility for large
         * Element with this attribute are only visible on large size
         */
        :host([size='size-s']) ::slotted(*[show-on-size-large]),
        :host([size='size-m']) ::slotted(*[show-on-size-large]),
        :host([size='size-xl']) ::slotted(*[show-on-size-large]) {
          display: none;
        }

        /* per size visibility for large
         * Element with this attribute are only visible on medium size
         */
        :host([size='size-s']) ::slotted(*[show-on-size-medium]),
        :host([size='size-l']) ::slotted(*[show-on-size-medium]),
        :host([size='size-xl']) ::slotted(*[show-on-size-medium]) {
          display: none;
        }

        /* per size visibility for large
         * Element with this attribute are only visible on small size
         */
        :host([size='size-m']) ::slotted(*[show-on-size-small]),
        :host([size='size-l']) ::slotted(*[show-on-size-small]),
        :host([size='size-xl']) ::slotted(*[show-on-size-small]) {
          display: none;
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
      <div class="grid">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('furo-z-grid', FuroZGrid);
