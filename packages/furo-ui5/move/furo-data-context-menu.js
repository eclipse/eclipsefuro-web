import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/util/src/furo-keydown';

/**
 * `furo-data-context-menu`
 *  A  [material design](https://material.io/components/menus/) context menu or menu element.
 *
 *  You have to put a `furo-data-context-menu-display` element in one of the parent elements of the element where you use the `furo-data-context-menu`.
 *  The app-shell is a good place for that.
 *
 * ```html
 *  <furo-data-context-menu condensed position="below" ƒ-trigger="--menuClkd" ƒ-bind-data="--menuObject" @-menu-item-selected="--menuItem">
 *      <furo-icon-button icon="menu" @-click="--menuClkd"></furo-icon-button>
 *  </furo-data-context-menu>
 * ```
 *
 *
 * @fires {{context, menuitem}} open-furo-data-menu-requested -  Fired when context menu was triggered
 * @fires { {context, menuitem}} menu-item-selected -  Fired when a menu item is selected
 *
 * @slot {HTMLElement} - default slot to add an individual context menu opener component (e.g. furo-icon-button).
 *
 * @summary a context menu
 * @customElement
 * @demo demo-furo-data-context-menu Basic usage
 * @appliesMixin FBP
 */
export class FuroDataContextMenu extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Use this to set a string value as context.
       */
      _context: { type: String, attribute: 'context' },
      /**
       * set this for condensed mode.
       */
      condensed: { type: Boolean },
    };
  }

  /**
   * Bind your menu object with the signature of menu.Menuitem or [menu.Menuitem].
   *
   * @param {Fieldnode || RepeaterNode}
   */
  bindData(menu) {
    this._menuNode = menu;
    // queued trigger context
    if (this._queueTrigger) {
      this.triggerContext(this._context);
      this._queueTrigger = false;
    }
  }

  /**
   * Sets the context. Use this if you want to set a Object as context
   * @param ctx {*} Can be anything, will be returned at the menu-item-selected method
   */
  setContext(ctx) {
    this._context = ctx;
  }

  /**
   * Triggers the context menu. Set by keyboard to true to focus the first element for keyboard navigation
   * @param byKeyboard
   */
  trigger(byKeyboard) {
    this.triggerContext(this._context, byKeyboard);
  }

  /**
   * triggers the menu with context
   * @param context {Object}
   */
  triggerContext(context, byKeyboard) {
    // enqueue when menuNode is not set
    if (!this._menuNode) {
      this._queueTrigger = true;
    } else {
      const customEvent = new Event('open-furo-data-menu-requested', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = {
        context,
        menu: this._menuNode,
        selectCallback: item => {
          const selectEvent = new Event('menu-item-selected', { composed: true, bubbles: true });
          selectEvent.detail = { context: this._context, menuitem: item.detail };
          this.dispatchEvent(selectEvent);
        },
        onClose: () => {
          // focus the childnode
          const slottContents = this.shadowRoot.firstElementChild.assignedElements();
          if (slottContents.length > 0) {
            setTimeout(() => {
              slottContents[0].focus();
            }, 10);
          }
        },
        initiator: this,
        condensed: this.condensed,
      };

      customEvent.byKeyboard = byKeyboard;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --keynav to
     * listen on shift+F10 to open by keyboard
     */
    this._FBPAddWireHook('--keynav', () => {
      // trigger
      this.trigger(true);
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
      <furo-keydown shift key="F10" @-key="--keynav"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-data-context-menu', FuroDataContextMenu);
