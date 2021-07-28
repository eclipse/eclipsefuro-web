import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import { Theme } from '@furo/framework/src/theme';

import '@furo/input/src/furo-icon-button';
import '@furo/layout/src/furo-horizontal-flex';
import './furo-loading-indicator-bar.js';

/**
 * `furo-app-bar-top`
 * Application top bar
 *
 * @cssprop {#7f7f7f} [--furo-app-bar-top-background-light=--primary-light] - Light background color
 * @cssprop {#aFAFAF} [--furo-app-bar-top-background-dark=--primary-dark] - Dark background color
 *
 * @fires {name} connect-to-drawer-requested -Fired when drawer name is set
 * @fires {MouseEvent} navigation-clicked - Fired when navigation icon is clicked
 * @fires {MouseEvent} navigation-menu-clicked - Fired when icon is menu and navigation is clicked
 *
 * @slot {HTMLElement [0..n]} - default slot to add elements to the app bar top.
 * @slot {HTMLElement [0..n]} extended - named slot to place additional elements.
 *
 * @summary Toolbar to place on top
 * @customElement
 * @demo demo-furo-app-bar-top Usage
 */
export class FuroAppBarTop extends FBP(LitElement) {
  constructor() {
    super();
    this._navigationIcon = 'menu';
  }

  /**
   * You can show a progress indicator while you have pending requests or work
   * Shows furo-loading-indicator-bar
   */
  startActivity() {
    this._FBPTriggerWire('--activityStarted');
  }

  /**
   * Stop loading indicator
   * Hides furo-loading-indicator-bar
   */
  stopActivity() {
    this._FBPTriggerWire('--activityStopped');
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    if (this.drawer) {
      const customEvent = new Event('connect-to-drawer-requested', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = { name: this.drawer };
      this.dispatchEvent(customEvent);

      this._drawer = customEvent.detail.drawer;
      if (this._drawer) {
        // add regular event listener to the drawer
        this._drawer.addEventListener('is-floating', () => {
          this.showNavigationIcon();
        });

        this._drawer.addEventListener('is-pinned', () => {
          this.hideNavigationIcon();
        });

        if (this._drawer.__isFloating) {
          this.showNavigationIcon();
        } else {
          this.hideNavigationIcon();
        }
      }
    }

    /**
     * Register hook on wire --navigationClicked to
     * open the drawer
     * @private
     */
    this._FBPAddWireHook('--navigationClicked', () => {
      if (this._navigationIcon === 'menu') {
        this._drawer.open();

        const customEvent = new Event('navigation-menu-clicked', { composed: true, bubbles: true });
        this.dispatchEvent(customEvent);
      }
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Set the icon for the navigation.
       * @type {string}
       */
      _navigationIcon: { type: String, attribute: 'navigation-icon' },
      /**
       * Name of the drawer to connect.
       * @type {string}
       */
      drawer: { type: String },
    };
  }

  /**
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroAppBarTop') ||
      css`
        :host {
          display: block;
          position: relative;
          color: var(--on-primary);
          background: linear-gradient(
            315deg,
            var(--furo-app-bar-top-background-light, var(--primary-light, #7f7f7f)) 0%,
            var(--furo-app-bar-top-background-dark, var(--primary-dark, #afafaf)) 100%
          );
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          transition: all var(--transition-duration, 200ms) cubic-bezier(0.25, 0.8, 0.25, 1);
          font-size: 20px;
          z-index: 1;
        }

        :host([hidden]) {
          display: none;
        }

        furo-horizontal-flex {
          height: 56px;
          line-height: 56px;
        }

        ::slotted(.small),
        ::slotted(.small) {
          font-weight: 100;
        }

        ::slotted(*) {
          margin-left: var(--spacing-s, 16px);
          margin-right: var(--spacing-s, 16px);
        }

        ::slotted(furo-icon-button),
        furo-icon-button.navigation {
          cursor: pointer;
          margin: var(--spacing-xxs, 4px) 0;
        }

        furo-icon-button.navigation {
          display: none;
        }

        :host([navigation]) furo-icon-button.navigation,
        :host([navigation-icon]) furo-icon-button.navigation {
          display: block;
          margin-right: var(--spacing-xs, 8px);
        }

        furo-loading-indicator-bar {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .extended {
          display: none;
          height: 72px;
          line-height: 32px;
          padding-left: 56px;
        }

        /* pos bottom 20 with line-height 32 will result in 28px distance to the bottom (https://material.io/components/app-bars-top/#specs)  */
        .extended ::slotted(*) {
          position: absolute;
          bottom: 20px;
          right: 96px;
          left: 56px;
        }

        :host([extended]) .extended {
          display: block;
        }
      `
    );
  }

  /**
   * Shows the navigation icon.
   */
  showNavigationIcon() {
    this.setAttribute('navigation', '');
  }

  /**
   * Hides the navigation icon.
   */
  hideNavigationIcon() {
    this.removeAttribute('navigation');
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <furo-icon-button
          class="navigation"
          icon="${this._navigationIcon}"
          @-click="^^navigation-clicked, --navigationClicked"
        ></furo-icon-button>
        <slot></slot>
      </furo-horizontal-flex>
      <furo-horizontal-flex class="extended">
        <slot name="extended"></slot>
      </furo-horizontal-flex>
      <furo-loading-indicator-bar
        ƒ-start="--activityStarted"
        ƒ-stop="--activityStopped"
      ></furo-loading-indicator-bar>
    `;
  }
}

window.customElements.define('furo-app-bar-top', FuroAppBarTop);
