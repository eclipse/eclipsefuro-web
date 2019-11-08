import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

import '@furo/input/furo-icon-button';
import '@furo/layout';

/**
 * # Experimental
 * The API may change, documentation will follow
 *
 * `furo-app-bar-top`
 *
 * @customElement
 * @demo demo/index.html
 */
class FuroAppBarTop extends FBP(LitElement) {

  constructor() {
    super();
    this._navigationIcon = "menu";
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();

    if (this.drawer) {
      /**
       * @event connect-to-drawer-requested
       * Fired when drawer name is set
       * detail payload: {name}
       */
      let customEvent = new Event('connect-to-drawer-requested', {composed: true, bubbles: true});
      customEvent.detail = {name: this.drawer};
      this.dispatchEvent(customEvent);

      this._drawer = customEvent.detail.drawer;
      if (this._drawer) {
        // add regular event listener to the drawer
        this._drawer.addEventListener("is-floating", () => {
          this.showNavigationIcon();
        });

        this._drawer.addEventListener("is-pinned", () => {
          this.hideNavigationIcon();
        });

        if (this._drawer.isFloating) {
          this.showNavigationIcon();
        } else {
          this.hideNavigationIcon();
        }
      }
    }

    /**
     * Register hook on wire --navigationClicked to
     * open the drawer
     */
    this._FBPAddWireHook("--navigationClicked", (e) => {

      if (this._navigationIcon === "menu") {
        this._drawer.open();
        /**
         * @event navigation-clicked
         * Fired when navigation is clicked
         */

        /**
         * @event navigation-menu-clicked
         * Fired when icon is menu and navigation is clicked
         */
        let customEvent = new Event('navigation-menu-clicked', {composed: true, bubbles: true});
        this.dispatchEvent(customEvent)
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
       * Use method open or set this attribute to open a drawer in float mode
       */
      _navigationIcon: {type: String, attribute: "navigation-icon"},
      /**
       * drawer to connect the ƒ-show-navigation-icon="--drawerFloats" ƒ-hide-navigation-icon="--drawerPinned"
       */
      drawer: {type: String}
    }
  }

// ƒ-show-navigation-icon="--drawerFloats" ƒ-hide-navigation-icon="--drawerPinned"

  /**
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
        :host {
            display: block;
            color: var(--on-primary);
            background: linear-gradient(315deg, var(--primary-light, #7f7f7f) 0%, var(--primary-dark, #aFAFAF) 100%);
            box-shadow: 0 -15px 10px -15px rgba(0, 0, 0, 0.12);
            transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
            font-size: 20px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-horizontal-flex {
            height: 56px;
            line-height: 56px;
        }

        ::slotted(*) {
            margin-left: var(--spacing-s, 16px);
            margin-right: var(--spacing-s, 16px);
        }

        ::slotted(furo-icon-button), furo-icon-button.navigation {
            cursor: pointer;
            margin: 4px 0;
        }

        furo-icon-button.navigation {
            display: none;
        }

        :host([navigation]) furo-icon-button.navigation {
            display: block;
        }

    `;
  }

  showNavigationIcon() {
    this.setAttribute("navigation", "");
  }

  hideNavigationIcon() {
    this.removeAttribute("navigation");
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
      <furo-icon-button class="navigation" icon="${this._navigationIcon}" @-click="^^navigation-clicked, --navigationClicked"></furo-icon-button>
       <div flex>
        <slot></slot>
</div>
      </furo-horizontal-flex>
    `;
  }

}

window.customElements.define('furo-app-bar-top', FuroAppBarTop);
