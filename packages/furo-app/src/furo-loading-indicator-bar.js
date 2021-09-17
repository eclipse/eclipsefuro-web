import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import { Theme } from '@furo/framework/src/theme';

/**
 * `loading-indicator`
 * Indicates that something is in progress.
 *
 * todo: make it like https://material.io/design/components/progress-indicators.html#
 *
 * @slot {HTMLElement [0..n]} - this is an unnamed default slot.
 *
 * @summary progress bar
 * @customElement
 * @demo demo-furo-app-bar-top Inside of the app bar
 * @appliesMixin FBP
 */
class FuroLoadingIndicatorBar extends FBP(LitElement) {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.setAttribute('hidden', '');
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroLoadingIndicatorBar') ||
      css`
        :host {
          display: block;
          width: 100%;
          height: 4px;
          pointer-events: none;
          opacity: 0.8;
          background-color: var(--secondary);
          animation: colorchange 5s infinite;
        }

        :host([hidden]) {
          display: none;
        }

        @keyframes colorchange {
          0% {
            background: var(--secondary, red);
          }
          25% {
            background: var(--primary-light, yellow);
          }
          50% {
            background: var(--primary-variant, blue);
          }
          75% {
            background: var(--accent, green);
          }
          100% {
            background: var(--secondary, red);
          }
        }
      `
    );
  }

  start() {
    this.removeAttribute('hidden');
  }

  stop() {
    this.setAttribute('hidden', '');
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('furo-loading-indicator-bar', FuroLoadingIndicatorBar);
