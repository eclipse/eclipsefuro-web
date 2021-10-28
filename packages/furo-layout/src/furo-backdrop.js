import { LitElement, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-backdrop`
 *
 * Displays content with a backdrop.
 *
 * The element you place in to furo-backdrop will be displayed centered.
 *
 *
 * ```html
 *   <furo-backdrop @-opened="--BackdropFocus" @-closed="--backdropClosed"
 *     ƒ-show="--expandIconClicked"
 *     ƒ-close="--closeRequested, --recordSelected"
 *     >
 *      <any-component @-item-selected="--recordSelected" style="width: 90vw; height: 90vh"></any-component>
 *   </furo-backdrop>
 *
 * ```
 *
 * You can wire and use the elements in furo-backrop as if they were local elements.
 *
 * Do not forget to add the furo-backdrop-display somewhere in the parent dom.
 *
 * @fires { handle: this } opened - The **opened** event will be fired when the content is visible on the backdrop.
 * Tipp: you can use this to focus something on the shown content.
 *
 * @fires { handle: this } closed - The **closed** event will be fired when the displayed content is invisible and the backdrop is closed.
 * Tipp: Maybe you want to use this event to refocus the initiator.
 *
 * @fires { handle: this } register-backdrop - Internal event to move the contents to the backdrop-display.
 *
 * @summary show content with backdrop
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
   * Initiates the backdrop and shows the content on top of the backdrop area.
   */
  show() {
    const customEvent = new Event('show-backdrop-requested', { composed: true, bubbles: true });
    customEvent.detail = { handle: this }; // handle is neeeded for returning the content back
    this.dispatchEvent(customEvent);
  }

  /**
   * Hides the display.
   *
   * **Note:** The display will also get closed when the user clicks on the backdrop.
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

      css`
        :host {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-backdrop', FuroBackdrop);
