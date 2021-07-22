import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import '@furo/layout/src/furo-horizontal-flex';
import { FBP } from '@furo/fbp';

/**
 * `furo-collapsible-box` is a card which can be toggled to be open and closed
 *
 *```
 * <furo-collapsible-box label="label" open>
 *  <div>flex content in default slot</div>
 *  <div slot="context">CTX on right side</div>
 * </furo-collapsible-box>
 *```
 *
 * @fires {void} opened -  Fired when collapsible box was opened.
 * @fires {void} closed -  Fired when collapsible box was closed.
 * @fires {Boolean} toggled -  Fired when collapsible-box was toggled,  true for open, false for closed.
 *
 * @summary collapsible box with head
 * @customElement
 * @demo demo-furo-collapsible-box
 * @appliesMixin FBP
 */
class FuroCollapsibleBox extends FBP(LitElement) {
  constructor() {
    super();
    /**
     * @type {boolean}
     */
    this._open = false;
    /**
     * @type {string}
     */
    this.iconOpen = 'expand-more';
    /**
     *
     * @type {string}
     */
    this.iconClosed = 'expand-less';
    /**
     *
     * @type {number}
     */
    this.tabindex = 0;
    this.icon = this._open ? this.iconOpen : this.iconClosed;

    // toggle method
    this._FBPAddWireHook('--toggleClicked', () => {
      this.toggle();
    });

    /**
     * minimal keyboard navigation
     */
    this._FBPAddWireHook('--keystrokes', e => {
      switch (e.code) {
        case 'ArrowRight':
          this.open();
          break;
        case 'ArrowLeft':
          this.close();
          break;
        case 'Enter':
          this.toggle();
          break;
        default:
      }
    });
    this._FBPAddWireHook('--blured', () => {
      if (this.closeOnBlur) {
        this.close();
      }
    });
  }

  /**
   * Opens the Box
   */
  open() {
    this._open = true;
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();
  }

  /**
   * closes the box
   */
  close() {
    this._open = false;
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();
  }

  /**
   * Toggles the box open/close
   */
  toggle() {
    this._open = !this._open;
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();

    if (this._open === true) {
      const customEvent = new Event('opened', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
    } else {
      const customEvent = new Event('closed', { composed: true, bubbles: false });
      this.dispatchEvent(customEvent);
    }

    const customEvent = new Event('toggled', { composed: true, bubbles: false });
    customEvent.detail = this._open;
    this.dispatchEvent(customEvent);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.icon = this._open ? this.iconOpen : this.iconClosed;
    this.requestUpdate();
  }

  /**
   * focus the box (focuses the icon)
   */
  focus() {
    this._FBPTriggerWire('--focus');
    if (this.openOnFocus) {
      this.open();
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Label der Collapsible
       */
      label: {
        type: String,
      },
      /**
       * Label der Collapsible
       */ secondaryText: {
        type: String,
        attribute: 'secondary-text',
      },
      /**
       * Opens the box on focus
       */
      openOnFocus: {
        type: Boolean,
        attribute: 'open-on-focus',
      },
      /**
       * Closes the box on blur (icon)
       */
      closeOnBlur: {
        type: Boolean,
        attribute: 'close-on-blur',
      },
      /**
       * https://developer.mozilla.org/de/docs/Web/HTML/Globale_Attribute/tabindex
       */
      tabindex: {
        type: Number,
      },
      /**
       * Indicates the collapse state, set the collapse state
       */
      _open: {
        type: Boolean,
        reflect: true,
        attribute: 'open',
      },
      /**
       * The icon for the open state.
       *
       */
      iconOpen: {
        type: String,
        attribute: 'icon-open',
      },
      /**
       * The icon for the closed state.
       *
       */
      iconClosed: {
        type: String,
        attribute: 'icon-closed',
      },
      /**
       * reserved flag
       * todo implement remember component
       */
      rememberState: {
        type: Boolean,
      },
    };
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroCollapsibleBox') ||
      css`
        :host {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
            0 3px 1px -2px rgba(0, 0, 0, 0.2);
          padding: var(--furo-collapsible-box-padding, 16px);
          background: var(--furo-collapsible-box-background, white);
          display: block;
          margin: var(--furo-collapsible-box-margin, 16px);
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none;
        }

        label {
          display: block;
          padding-left: 8px;
          cursor: pointer;

          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0;
          margin: 0;
          font-weight: normal;
        }

        .secondary {
          padding-left: var(--spacing, 24px);
          font-size: 14px;
          letter-spacing: 0.1px;
        }
        .content {
          display: none;
        }

        :host([open]) .content {
          display: block;
        }

        .head {
          border-bottom: 1px solid var(--separator-color, gainsboro);
        }

        furo-icon {
          width: 24px;
          height: 24px;
          cursor: pointer;
          outline: none;
        }

        furo-icon:focus {
          color: var(--primary, #cdcdcd);
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex class="head">
        <furo-icon
          tabindex="${this.tabindex}"
          ƒ-focus="--focus"
          icon="${this.icon}"
          @-keydown="--keystrokes(*)"
          @-click="--toggleClicked"
          @-blur="--blured"
        ></furo-icon>
        <label @-click="--toggleClicked">${this.label}</label>
        <div flex class="secondary" @-click="--toggleClicked">${this.secondaryText}</div>
        <slot name="context"></slot>
      </furo-horizontal-flex>
      <div class="content"><slot></slot></div>
    `;
  }
}

window.customElements.define('furo-collapsible-box', FuroCollapsibleBox);
