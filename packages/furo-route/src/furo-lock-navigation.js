import { LitElement, css } from 'lit'
import { FBP } from '@furo/fbp'

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
 * @fires {void} furo-navigation-locked -  Fired when the navigation was locked
 * @fires {void} furo-navigation-unlocked -  Fired when the navigation was unlocked
 *
 * @summary Blocks the furo-location-updater from navigating away
 * @customElement
 * @appliesMixin FBP
 */
export class FuroLockNavigation extends FBP(LitElement) {
  constructor() {
    super()
    this.message = 'You have unsaved changes, proceed anyway?'
  }

  static get properties() {
    return {
      /**
       * The warning message, which is displayed at the prompt.
       *
       * @type String
       */
      message: { type: String },
    }
  }

  /**
   * Blocks furo-location-updater and furo-app-flow-router from navigating away.
   */
  lock() {
    if (!this._locked) {
      this._lockHandler = this._lockHandler.bind(this)
      window.addEventListener('__beforeReplaceState', this._lockHandler, true)
      window.addEventListener('__beforeHistoryBack', this._lockHandler, true)
      window.addEventListener('beforeunload', this._unloadHandler, true)
      this._locked = true

      /**
       * @event furo-navigation-locked
       * Fired when Navigation is locked
       */
      this.dispatchEvent(new Event('furo-navigation-locked', { composed: true, bubbles: true }))
    }
  }

  /**
   * Removes the lock.
   */
  unlock() {
    if (this._locked) {
      window.removeEventListener('__beforeReplaceState', this._lockHandler, true)
      window.removeEventListener('__beforeHistoryBack', this._lockHandler, true)
      window.removeEventListener('beforeunload', this._unloadHandler, true)
      this._locked = false


      /**
       * @event furo-navigation-unlocked
       * Fired when Navigation is unlocked
       */
      this.dispatchEvent(new Event('furo-navigation-unlocked', { composed: true, bubbles: true }))
    }
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
      event.cancel = true
    } else {
      this.unlock()
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
    event.returnValue = this.message
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
    `
  }
}

window.customElements.define('furo-lock-navigation', FuroLockNavigation)
