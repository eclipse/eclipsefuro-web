import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';

/**
 * `furo-ripple` gives the ripple effect to a element
 *
 *  > Note: Add a `position:relative` to the parent element.
 *
 *  use it directly in an element:
 *<furo-demo-snippet source>
 * <template>
 * <!-- without position relative -->
 *  <button>
 *       click here
 *      <furo-ripple></furo-ripple>
 *  </button>
 * </template>
 *</furo-demo-snippet>
 *
 * ## trigger the ripple effect via wire
 *<furo-demo-snippet source>
 * <template>
 * <button @-click="--actionClicked">
 *       click here
 * </button>
 *
 * <div style="position:relative; width:80px;height:80px; border:1px solid black;">
 *   <furo-ripple noink ƒ-trigger="--actionClicked"></furo-ripple>
 *   Ripple here
 * </div>
 * </template>
 *</furo-demo-snippet>
 *
 *
 * ## style vars
 *  with variable `--furo-ripple-bg-color` you can modify the backgroud color of the ripple effect
 *
 *
 * @summary add a ripple effect
 * @customElement
 */
class FuroRipple extends LitElement {
  constructor() {
    super();
    this.noink = false;
  }

  connectedCallback() {
    this.parentNode.addEventListener('click', () => {
      if (!this.noink) {
        this.trigger();
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroRipple') ||
      css`
        :host {
          pointer-events: none;
          position: absolute;
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          display: block;
        }

        :host:after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(
            circle,
            var(--furo-ripple-bg-color, #000) 10%,
            transparent 10.01%
          );
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform 0.5s, opacity 1s;
        }

        :host([_active]):after {
          transform: scale(0, 0);
          opacity: 0.2;
          transition: 0s;
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
       * Disables the click, only ripples with `trigger()`
       */
      noink: { type: Boolean, reflect: true },
    };
  }

  /**
   * animate the ripple effect
   */
  trigger() {
    this.setAttribute('_active', '');
    setTimeout(() => {
      this.removeAttribute('_active');
    }, 50);
  }
}

customElements.define('furo-ripple', FuroRipple);
