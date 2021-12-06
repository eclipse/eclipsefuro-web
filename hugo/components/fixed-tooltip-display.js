import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-tooltip-display`
 *  place this component as high as possible in your DOM.
 *
 * @summary helper component for tooltip
 * @customElement
 * @demo demo-furo-tooltip
 * @appliesMixin FBP
 */
class FixedTooltipDisplay extends FBP(LitElement) {
  constructor() {
    super();

    // return **this** to component which want to connect
    window.addEventListener('hide-tooltip-requested', () => {
      if (this.show) {
        clearTimeout(this.to);
        this.show = false;
      }
    });
    window.addEventListener('show-tooltip-requested', e => {
      const { cr } = e.detail;
      const x = cr.left + cr.width / 2;
      let y = cr.bottom + 16;

      const maxY = window.innerHeight - 48;
      if (y > maxY) {
        y = cr.top - 32;
      }
      // eslint-disable-next-line wc/no-constructor-attributes
      this.style.top = `${y}px`;
      this.start = true;
      this.label = e.detail.label;
      clearTimeout(this.to);

      setTimeout(() => {
        const mycr = this.getBoundingClientRect();
        const max = window.innerWidth - 8;
        // eslint-disable-next-line wc/no-constructor-attributes
        this.style.left = `${Math.min(max - mycr.width, Math.max(8, x - mycr.width / 2))}px`;

        this.show = true;
        this.to = setTimeout(() => {
          // hide if shown
          if (this.show) {
            this.show = false;
          }
        }, e.detail.duration);
        this.requestUpdate();
      }, 10);
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      start: { type: Boolean, reflect: true },
      show: { type: Boolean, reflect: true },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FixedTooltipDisplay') ||
      css`
        :host {
          position: fixed;
          display: none;
          top: 0;
          left: 0;
          transition: opacity 300ms;
          opacity: 0;
          background-color: #6d6d6d;
          color: white;
          height: 24px;
          padding: 0 8px;
          border-radius: 4px;
          font-size: 12px;
          line-height: 24px;
          z-index: 10;
          white-space: nowrap;
        }

        :host([start]) {
          display: block;
          opacity: 0;
        }

        :host([show]) {
          opacity: 1;
          display: block;
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
      ${this.label}
    `;
  }
}

window.customElements.define('fixed-tooltip-display', FixedTooltipDisplay);
