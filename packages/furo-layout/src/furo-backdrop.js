import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `furo-backdrop`
 * Place your elements which have to be displayed in the backdrop.
 *
 *
 * ```html
 *   <furo-backdrop @-opened="--BackdropFocus" @-closed="--backdropClosed"
 *     ƒ-show="--expandIconClicked"
 *     ƒ-close="--closeRequested, --recordSelected"
 *     >
 *      <any-component @-item-selected="--recordSelected" style="width: 90vw; height: 90vh"></any-component>
 *   </furo-backdrop>
 *  ```
 *
 * You can wire and use the elements in furo-backrop as if they were local elements.
 *
 * Do not forget to add the furo-backdrop-display somewhere in the parent dom.
 *
 * @summary backdrop initiator
 * @demo demo-furo-backdrop Basic usage
 * @customElement
 * @appliesMixin FBP
 */
class FuroBackdrop extends FBP(LitElement) {

  _FBPReady() {
    // move the content to the backdrop display
    const customEvent = new Event('register-backdrop', { composed: true, bubbles: true });
    customEvent.detail = { handle: this }; // handle is neeeded for returning the content back
    this.dispatchEvent(customEvent);

    super._FBPReady();
  }

  /**
   * @event opened
   * Fired when displayed component on the backdrop is opened
   *
   */

  /**
   * @event closed
   * Fired when backdrop is closed.
   *
   * Tipp: Maybe you want to use this event to refocus the initiator.
   */

  /**
   * Initiates the backdrop and shows the content in the backdrop area.
   */
  show() {
    const customEvent = new Event('show-backdrop-requested', { composed: true, bubbles: true });
    customEvent.detail = { handle: this }; // handle is neeeded for returning the content back
    this.dispatchEvent(customEvent);
  }

  /**
   * Closes the display.
   * The display will also get closed when the user clicks on the background.
   */
  close() {
    const customEvent = new Event('close-backdrop-requested', { composed: true, bubbles: true });
    customEvent.detail = { handle: this }; // handle is neeeded for returning the content back
    this.dispatchEvent(customEvent);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroBackdrop') ||
      css`
        :host {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-backdrop', FuroBackdrop);
