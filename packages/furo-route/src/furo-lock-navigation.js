import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `furo-lock-navigation`
 *  Blocks the furo-location-updater and furo-app-flow-router from navigating away if you have unsaved changes or work to do.
 *
 *  This component also adds a listener to the unload event, which kicks in at a reload or close of the window.
 *
 *  ```html
 *  <furo-lock-navigation fn-lock="--dataChanged" fn-unlock="--saveSuccess"></furo-lock-navigation>
 *  ```
 *
 * @summary Blocks the furo-location-updater from navigating away
 * @customElement
 * @appliesMixin FBP
 */
class FuroLockNavigation extends FBP(LitElement) {
  constructor() {
    super();
    this.message = "You have unsaved changes, proceed anyway?"
  }

  static get properties() {
    return {
      /**
       * The warning message, which is displayed at the prompt.
       *
       * @type String
       */
      message: {type: String},
    }
  }

  /**
   * Blocks furo-location-updater and furo-app-flow-router from navigating away.
   */
  lock() {
    if (!this._locked) {
    this._lockHandler = this._lockHandler.bind(this);
    window.addEventListener('__beforeReplaceState', this._lockHandler, true);
    window.addEventListener('beforeunload', this._unloadHandler, true);
      this._locked = true
    }
  }

  /**
   * Removes the lock.
   */
  unlock() {
    this._locked = false
    window.removeEventListener('__beforeReplaceState', this._lockHandler, true);
    window.removeEventListener('beforeunload', this._unloadHandler, true);
  }

  /**
   *
   * @param event
   * @private
   */
  _lockHandler(event) {
    // eslint-disable-next-line no-alert
    if (!window.confirm(this.message)) {
      // eslint-disable-next-line no-param-reassign
      event.cancel = true;
    } else {
      this.unlock();
    }
  }

  /**
   *
   * @param event
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _unloadHandler(event) {
    // eslint-disable-next-line no-param-reassign
    event.returnValue = this.message;
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
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-lock-navigation', FuroLockNavigation);
