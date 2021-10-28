import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-data-context-menu-item` is a helper component for `furo-data-context-menu`.
 *
 * Use [`furo-data-context-menu`](?t=FuroDataContextMenu) to show a context menu.
 *
 *
 * @fires {index} mousefocus -  Fired when hovered with mouse
 * @fires { menu: this.menuitem, initiator: this } opensub-requested -  Fired when submenu should be opened
 * @fires {item} item-selected -  Fired when item was selected
 *
 * @summary helper
 * @customElement
 * @appliesMixin FBP
 */
export class FuroDataContextMenuItem extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * focused state
       */
      focused: { type: Boolean, reflect: true },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    this.addEventListener('mouseover', () => {
      this._mouseFocus = true;
      // do not reopen when submenu exist

      const customEvent = new Event('mousefocus', { composed: true, bubbles: true });
      customEvent.detail = this._index;
      this.dispatchEvent(customEvent);
    });
  }

  bindData(menuNode) {
    this.menuitem = menuNode;
    if (this.menuitem.children.repeats.length > 0) {
      this._FBPTriggerWire('--submenu', this.menuitem);
    }
    if (this.menuitem.leading_divider._value === true) {
      const separator = document.createElement('div');
      separator.classList.add('separator');
      this.parentNode.insertBefore(separator, this);
    }
  }

  /**
   * send event to open the submenu

   * @param byKeyboard Boolean
   * @private
   */
  _openSub(byKeyboard) {
    const customEvent = new Event('opensub-requested', { composed: true, bubbles: true });
    customEvent.detail = { menu: this.menuitem, initiator: this };
    customEvent.byKeyboard = byKeyboard;
    this.dispatchEvent(customEvent);
    this._submenu = customEvent.submenu;
  }

  /**
   * The submenu item was set from the _openSub() event response
   * @private
   */
  _closeSub() {
    if (this._submenu) {
      this._submenu.hideMenu();
    }
  }

  /**
   * Select the item, furo-data-context-menu callback will be called
   * @private
   */
  _selectItem() {
    const customEvent = new Event('item-selected', { composed: true, bubbles: true });
    customEvent.detail = this.menuitem;
    this.dispatchEvent(customEvent);
  }

  /**
   * selects the item if it does not have child elements
   */
  select(key) {
    switch (key) {
      case 'Enter':
        // select
        if (this.menuitem.children.repeats.length === 0) {
          this._selectItem();
        }
        break;

      case 'ArrowLeft':
        // closes subnav
        if (this.menuitem.children.repeats.length > 0) {
          this._closeSub();
        }
        break;

      case 'ArrowRight':
        // opens subnav
        if (this.menuitem.children.repeats.length > 0) {
          this._openSub(true);
        }
        break;
      default:
    }
  }

  /**
   * Open the item if it have children
   * @private
   */
  _mouseSelect() {
    // select
    if (this.menuitem.children.repeats.length === 0) {
      this._selectItem();
    }
  }

  /**
   * store the index for mouseover focus
   * @param i
   */
  index(i) {
    this._index = i;
  }

  /**
   * mark item as focused
   */
  setFocused() {
    this.focused = true;
    // opens subnav on mousefocus
    if (this._mouseFocus && this.menuitem.children.repeats.length > 0) {
      this._openSub();
      this._mouseFocus = false;
    }
  }

  /**
   * mark item as unfocused
   */
  unsetFocused() {
    this.focused = false;
    if (this.menuitem.children.repeats.length > 0) {
      this._closeSub();
    }
  }

  disconnectedCallback() {
    this._closeSub();
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
        display: block;
        padding: 8px 0;
      }

      :host([hidden]) {
        display: none;
      }

      .children {
        display: none;
        padding-right: 24px;
      }

      furo-icon[children] {
        display: block;
      }

      /* 4px from left comes from horizontal-flex*/
      furo-icon {
        padding: 6px 4px 0px 20px;
      }

      /* the display name */
      .name {
        padding: 0 16px;
        overflow: hidden;
      }

      .command {
        color: #838383;
        padding-right: 24px;
      }

      furo-horizontal-flex {
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        box-sizing: border-box;

        padding-left: 4px;
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
      <furo-horizontal-flex @click="${this._mouseSelect}"
        ><furo-icon ?hidden="${this.menuitem._noicon}" icon="${this.menuitem.icon}"></furo-icon>
        <div flex class="name">${this.menuitem.display_name}</div>
        <div class="command">${this.menuitem.command}</div>

        <furo-icon
          icon="chevron-right"
          class="children"
          @click="${this._openSub}"
          ?children="${this.menuitem.children.repeats.length > 0}"
        ></furo-icon>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-data-context-menu-item', FuroDataContextMenuItem);
