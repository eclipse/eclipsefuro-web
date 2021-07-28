import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import '@furo/input';

/**
 * `furo-snackbar-display`
 * Lit element
 *
 *  furo-snackbar-display should be used together witch furo-snackbar. you can place those two components into different places.
 *  best place the furo-snackbar-display on the main site. then you only need one furo-snackbar-display. it can work with n furo-snackbar.
 *
 * ### When to use
 *
 * Snackbars communicate messages that are minimally interruptive and don’t require user action.
 *
 * Component | Priority | User action
 * ----------------|------------------|----------
 * `furo-snackbar`  | Low priority |Optional: Snackbars disappear automatically
 * `furo-banner`    | Prominent, medium priority  |Optional: Banners remain until dismissed by the user, or if the state that caused the banner is resolved
 * `furo-dialog`    | Highest priority |Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available)
 *
 *
 * @cssprop {#212121} [--snackbar-background-color=--on-primary] - Color of background
 * @cssprop {#dedede} [--snackbar-label-color=--primary-variant] - Color of label in snackbar
 * @cssprop {#bb86fc} [--snackbar-button-text-color=--secondary] - Color of button text
 * @cssprop {24px} [--snackbar-border-distance=--spacing] - Distance to the border of the parent element
 *
 * @summary helper component to show a snackbar
 * @customElement
 * @demo demo-furo-snackbar-display snackbar demo
 * @demo demo-furo-snackbar-display-error snackbar display demo with error binding
 */
class FuroSnackbarDisplay extends FBP(LitElement) {
  constructor() {
    super();
    this._stack = [];

    this.displayObj = { labelText: '', actonButtonText: '', snackbar: {} };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this._snackbar = this.shadowRoot.getElementById('snackbar');

    this._FBPAddWireHook('--actionClicked', () => {
      if (this.displayObj.snackbar) {
        this.displayObj.snackbar._action();
      }
      this._close();
    });

    this._FBPAddWireHook('--closeClicked', () => {
      if (this.displayObj.snackbar) {
        this.displayObj.snackbar._dismiss();
      }
      this._close();
    });

    /**
     * listen to keyboard events
     */
    document.addEventListener('keydown', event => {
      const key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        if (this.displayObj.closeOnEscape) {
          this._close();
        }
      }
    });

    // when display not wired with show method, listening open event from window
    if (!this._isWiredWithShow()) {
      window.addEventListener('open-furo-snackbar-requested', e => {
        e.stopPropagation();
        this.show(e.detail);
      });
    }
  }

  /**
   * check if the display element is wired with show method "ƒ-show="--xxx"
   * @returns {boolean}
   * @private
   */
  _isWiredWithShow() {
    let isWired = false;
    const l = this.attributes.length;
    for (let i = 0; i < l; i += 1) {
      const { nodeName } = this.attributes.item(i);
      if (nodeName === 'ƒ-show') {
        isWired = true;
        break;
      }
    }
    return isWired;
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
      :host {
        position: absolute;
        bottom: var(--snackbar-border-distance, var(--spacing, 24px));
        left: var(--snackbar-border-distance, var(--spacing, 24px));
        right: var(--snackbar-border-distance, var(--spacing, 24px));
      }

      #snackbar {
        font-size: 14px;
        font-weight: 400;
        background-color: var(--snackbar-background-color, var(--on-primary, #212121));
        opacity: 0;
        display: flex;
        -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        z-index: 1;
      }

      #snackbar.hide,
      #snackbar[stacked].hide {
        display: none;
      }

      .label {
        color: var(--snackbar-label-color, var(--primary-variant, #dedede));
        display: inline-block;
        padding: 14px 16px;
        width: 100%;
      }

      #snackbar[stacked] .label {
        display: block;
      }

      #snackbar[stacked] {
        display: block;
      }

      #snackbar[stacked] .button {
        width: 100%;
        display: block;
      }

      .button {
        display: flex;
        text-align: right;
        margin: 3px 0;
        align-self: flex-end;
      }

      furo-button {
        --on-surface: var(--snackbar-button-text-color, var(--secondary, #bb86fc));
        --surface-dark: var(--snackbar-background-color, var(--on-primary, #212121));
        --surface-light: var(--snackbar-background-color, var(--on-primary, #212121));
        margin: auto;
      }

      .center {
        margin: auto;
      }

      .wrapper[right] {
        justify-content: flex-end;
      }

      .wrapper[left] {
        justify-content: flex-start;
      }
      .wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    `;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      displayObj: {
        type: Object,
      },

      _stack: {
        type: Array,
      },

      /**
       * virsule element snackbar
       */
      _snackbar: {
        type: Object,
      },

      _timer: {
        type: Object,
      },
    };
  }

  /**
   * show
   * @param s
   * @private
   */
  show(s) {
    this._pushToStack(s);
    if (!this.displayObj.isOpen) {
      this._show();
    }
  }

  /**
   *
   * @param s {Object} snackbar
   * @private
   */
  _pushToStack(s) {
    const obj = {};
    obj.labelText = s.labelText;
    obj.icon = s.icon;
    obj.actionButtonText = s.actionButtonText;
    obj.snackbar = s;
    obj.stacked = s.stacked;
    obj.positionLeft = s.positionLeft;
    obj.positionRight = s.positionRight;
    obj.size = s.size;
    obj.maxSize = s.maxSize;
    obj.closeOnEscape = s.closeOnEscape;

    this._stack.push(obj);
  }

  /**
   *
   * @private
   */
  _show() {
    if (this._stack.length > 0) {
      [this.displayObj] = this._stack;

      this._snackbar.classList.remove('hide');

      FuroSnackbarDisplay._fadeIn(this.shadowRoot.getElementById('snackbar'));

      this.requestUpdate();
      this.displayObj.snackbar.isOpen = true;
      this.displayObj.isOpen = true;

      const { timeoutInMs } = this.displayObj.snackbar;

      if (timeoutInMs > 0) {
        const self = this;
        this._timer = setInterval(() => {
          clearInterval(self._timer);
          self._snackbar.classList.add('hide');

          self._stack.shift();
          self.displayObj.snackbar._close();
          if (self._stack.length > 0) {
            self._show();
          } else {
            self.displayObj.snackbar.isOpen = false;
            self.displayObj.isOpen = false;
          }
        }, timeoutInMs);
      } else {
        this._stack.shift();
      }
    }
  }

  /**
   * close the CURRENT snackbar
   */
  _close() {
    clearInterval(this._timer);

    if (this._stack.length > 1) {
      this._snackbar.classList.add('hide');

      this._stack.shift();
      if (this._stack.length > 0) {
        this._show();
      } else {
        this.displayObj.snackbar.isOpen = false;
        this.displayObj.isOpen = false;
      }
    } else {
      this._stack.shift();
      this._snackbar.classList.add('hide');
      this.displayObj.snackbar.isOpen = false;
      this.displayObj.isOpen = false;
    }
  }

  /**
   *
   * @param element
   * @private
   */
  static _fadeIn(element) {
    let op = 0.1; // initial opacity
    const timer = setInterval(() => {
      if (op >= 1) {
        clearInterval(timer);
      }
      // eslint-disable-next-line no-param-reassign
      element.style.opacity = op;
      // eslint-disable-next-line no-param-reassign
      element.style.filter = `alpha(opacity=${op * 100})`;
      op += op * 0.2;
    }, 10);
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div
        class="wrapper"
        ?left="${this.displayObj.positionLeft}"
        ?right="${this.displayObj.positionRight}"
      >
        <div
          id="snackbar"
          class="hide"
          ?stacked="${this.displayObj.stacked}"
          style="width:${this.displayObj.size}; max-width:${this.displayObj.maxSize}"
        >
          <div class="label"><span>${this.displayObj.labelText}</span></div>
          <div class="button">
            <furo-button
              label="${this.displayObj.actionButtonText}"
              @-click="--actionClicked"
            ></furo-button>
            <furo-button icon="${this.displayObj.icon}" @-click="--closeClicked"></furo-button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('furo-snackbar-display', FuroSnackbarDisplay);
