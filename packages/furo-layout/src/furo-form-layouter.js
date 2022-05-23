import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-form-layouter`
 *
 * Use furo-form-layouter to structure your forms.
 * It is based on a grid system with the following properties:
 * - full-width row (Standard)
 * - two columns
 * - four columns
 *
 * The required variant is set using an attribute.
 * e.g. two, three, four and six
 *
 * ```html
 * <!-- four coulumn layout -->
 * <furo-form-layouter four>
 *    <input-element></input-element>
 *    <input-element double></input-element>
 *    <input-element newline></input-element>
 *    <input-element full></input-element>
 * </furo-form-layouter>
 * ```
 *
 *
 * To customize the slotted elements inside furo-form-layouter there are several attributes.
 * - double | stretches the element over two units
 * - full | stretches the element to full width
 * - newline | forces a new line
 *
 * ### Responsiveness
 * Columns | narrow | narrower  |
 * ----------------|-------------|-------------|
 * `one` | one | one |
 * `two` | one | one |
 * `three` | one | one |
 * `four` | two | one |
 * `six` | three | one |
 *
 * @cssprop {0px} [--furo-form-layouter-row-gap=0px] - width of row gap
 * @cssprop {0px} [--furo-form-layouter-column-gap=0px] - width of column gap
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * Tags: form
 * @summary Grid based form field row
 * @customElement
 * @demo demo-furo-form-layouter Basic forms
 * @demo demo-furo-form-layouter-complex Complex forms
 * @demo demo-furo-form-layouter-variants All variants
 * @mixes FBP
 */
class FuroFormLayouter extends FBP(LitElement) {
  constructor() {
    super();
    this.narrow = false;
    this.narrower = false;
    this.breakpointBig = 810;
    this.breakpointSmall = 405;
  }

  /**
   *
   * @param width
   * @private
   */
  _checkSize(width) {
    if (width > 0 && width < this.breakpointBig && width > this.breakpointSmall) {
      this.setAttribute('narrow', '');
      this.narrow = true;
      this.removeAttribute('narrower');
      this.narrower = false;
      this._fireResize();
    } else if (width > 0 && width <= this.breakpointSmall) {
      this.setAttribute('narrower', '');
      this.narrower = true;
      this.removeAttribute('narrow');
      this.narrow = false;
      this._fireResize();
    } else {
      this.removeAttribute('narrow');
      this.removeAttribute('narrower');
      this.narrower = false;
      this.narrow = this.narrower;
    }
  }

  /**
   *
   * @private
   */
  _fireResize() {
    this.dispatchEvent(
      new CustomEvent('layout-changed', {
        detail: this,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

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

  static get properties() {
    return {
      /**
       * Set custom breakpoint big
       * Default: "810"
       *
       * @type String
       */
      breakpointBig: { type: String, attribute: 'breakpoint-big', reflect: true },
      /**
       * Set custom breakpoints small
       * Default: "405"
       *
       * @type String
       */
      breakpointSmall: { type: String, attribute: 'breakpoint-small', reflect: true },
      /**
       * Set narrow-fix attribute to force
       * the layout analog to breakpoint big
       *
       * @type Boolean
       */
      narrowFix: {
        type: Boolean,
        attribute: 'narrow-fix',
        reflect: true,
      },
      /**
       * Set narrower-fix attribute to force
       * 1 column view (analog breakpoint small)
       *
       * @type Boolean
       */
      narrowerFix: {
        type: Boolean,
        attribute: 'narrower-fix',
        reflect: true,
      },
    };
  }

  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: grid;
          grid-row-gap: var(--furo-form-layouter-row-gap, 0px);
          grid-column-gap: var(--furo-form-layouter-column-gap, 0px);
          grid-template-columns: repeat(1, 1fr);
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted(*) {
          width: 100%;
        }

        :host([narrow]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrow]) > ::slotted(*[full]) {
          grid-column: 1 / auto;
        }

        :host([narrow-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([two]) {
          grid-template-columns: repeat(2, 1fr);
        }

        :host([two]) ::slotted(*[double]) {
          grid-column: span 1 / auto;
        }

        :host([two]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 1;
        }

        :host([two]) ::slotted(*[newline][double]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([two]) ::slotted(*[full]) {
          grid-column: span 2 / auto;
        }

        :host([two][narrow]) > ::slotted(*[full]) {
          grid-column: 1 / auto;
        }

        :host([two][narrow]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([two][narrow-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([two][narrow-fix]) ::slotted(*) {
          grid-column: span 1 / auto;
        }

        :host([three]) {
          grid-template-columns: repeat(3, 1fr);
        }

        :host([three]) ::slotted(*[double]) {
          grid-column: span 2 / auto;
        }

        :host([three]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([three]) ::slotted(*[newline][double]) {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        :host([three]) ::slotted(*[full]) {
          grid-column: span 3 / auto;
        }

        :host([three][narrow]) > ::slotted(*[full]) {
          grid-column: 1 / auto;
        }

        :host([three][narrow]) ::slotted(*[double]) {
          grid-column: span 1 / auto;
        }

        :host([three][narrow]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([three][narrow-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([three][narrow-fix]) ::slotted(*) {
          grid-column: span 1 / auto;
        }

        :host([four]) {
          grid-template-columns: repeat(4, 1fr);
        }

        :host([four]) ::slotted(*[double]) {
          grid-column: span 2 / auto;
        }

        :host([four]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([four]) ::slotted(*[newline][double]) {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        :host([four]) ::slotted(*[full]) {
          grid-column: span 4 / auto;
        }

        :host([four][narrow]) > ::slotted(*[full]) {
          grid-column: span 2 / auto;
        }

        :host([four][narrow]) {
          grid-template-columns: repeat(2, 1fr);
        }

        :host([four][narrow-fix]) {
          grid-template-columns: repeat(2, 1fr);
        }

        :host([four][narrow-fix]) > ::slotted(*) {
          grid-column: span 1 / auto;
        }

        :host([four][narrow-fix]) > ::slotted(*[double]) {
          grid-column: span 2 / auto;
        }

        :host([four][narrow-fix]) > ::slotted(*[full]) {
          grid-column: span 2 / auto;
        }

        :host([six]) {
          grid-template-columns: repeat(6, 1fr);
        }

        :host([six]) ::slotted(*[double]) {
          grid-column: span 3 / auto;
        }

        :host([six]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([six]) ::slotted(*[newline][double]) {
          grid-column-start: 1;
          grid-column-end: 4;
        }

        :host([six]) ::slotted(*[full]) {
          grid-column: span 6 / auto;
        }

        :host([six][narrow]) > ::slotted(*[full]) {
          grid-column: span 3 / auto;
        }

        :host([six][narrow]) {
          grid-template-columns: repeat(3, 1fr);
        }

        :host([six][narrow-fix]) {
          grid-template-columns: repeat(3, 1fr);
        }

        :host([six][narrow-fix]) > ::slotted(*) {
          grid-column: span 1 / auto;
        }

        :host([six][narrow-fix]) ::slotted(*[newline]) {
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([six][narrow-fix]) > ::slotted(*[double]) {
          grid-column: span 1 / auto;
        }

        :host([six][narrow-fix]) > ::slotted(*[full]) {
          grid-column: span 3 / auto;
        }

        :host([narrower]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower]) ::slotted(*[double]) {
          grid-column: 1 / auto;
        }

        :host([narrower]) ::slotted(*[full]) {
          grid-column: 1 / auto;
        }

        :host([narrower]) > ::slotted(*) {
          grid-column: 1 / auto;
        }

        :host([narrower-fix]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix][two]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix][three]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix][four]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix][six]) {
          grid-template-columns: repeat(1, 1fr);
        }

        :host([narrower-fix]) ::slotted(*[double]) {
          grid-column: 1 / auto;
        }

        :host([narrower-fix][two]) ::slotted(*[double]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix][three]) ::slotted(*[double]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix][four]) ::slotted(*[double]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix][six]) ::slotted(*[double]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix]) > ::slotted(*[full]) {
          grid-column: 1 / auto;
        }

        :host([narrower-fix][two]) ::slotted(*[full]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix][three]) ::slotted(*[full]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix][four]) ::slotted(*[full]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix][six]) ::slotted(*[full]) {
          grid-template-columns: repeat(1, 1fr);
          grid-column: 1 / auto;
        }

        :host([narrower-fix]) > ::slotted(*) {
          grid-column: 1 / auto;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult | TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('furo-form-layouter', FuroFormLayouter);
