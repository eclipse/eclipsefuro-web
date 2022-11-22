import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';
import { i18n } from '@furo/framework/src/i18n.js';

/**
 * `furo-lock-navigation`
 *  Blocks the furo-location-updater from navigating away if you have unsaved changes or work to do.
 *
 *  This component also adds a listener to the unload event.
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
  /**
   * Blocks furo-location-updater from navigating away.
   */
  lock() {
    this._lockHandler = this._lockHandler.bind(this);
    window.addEventListener('__beforeReplaceState', this._lockHandler, true);
    window.addEventListener('beforeunload', this._unloadHandler, true);
  }

  /**
   * Removes the lock.
   */
  unlock() {
    window.removeEventListener('__beforeReplaceState', this._lockHandler, true);
    window.removeEventListener('beforeunload', this._unloadHandler, true);
  }

  _lockHandler(event) {
    // eslint-disable-next-line no-alert
    if (!window.confirm(i18n.t('unsaved.changes'))) {
      // eslint-disable-next-line no-param-reassign
      event.cancel = true;
    } else {
      this.unlock();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _unloadHandler(event) {
    // eslint-disable-next-line no-param-reassign
    event.returnValue = i18n.t('unsaved.changes');
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
