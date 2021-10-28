import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import '@ui5/webcomponents/dist/List.js';

import '@ui5/webcomponents/dist/MessageStrip.js';

/**
 * `furo-ui5-message-strip-display`
 *
 *  The furo-ui5-message-strip-display is the render component for the furo-ui5-message-strip component.
 *  The display component can be controlled by several furo-ui5-message-strip components.
 *
 * ```
 *  <furo-ui5-message-strip-display></furo-ui5-message-strip-display>
 *
 *  <furo-ui5-message-strip ƒ-show-information="--wire"></furo-ui5-message-strip>
 *  <furo-ui5-message-strip ƒ-show-warning="--wire" message="Static warning message"></furo-ui5-message-strip>
 *  ```
 *
 * @summary furo ui5 message strip
 * @customElement
 * @demo demo-furo-ui5-message-strip-display Basic Usage
 */
export class FuroUi5MessageStripDisplay extends FBP(LitElement) {
  constructor() {
    super();
    this.headerText = '';
    this._messageStrips = []; // holds a list (reference to dom node) of displayed strips
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * listening the 'notification-grpc-status' event
     * the message in the event detail should be GRPC status.
     * https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.
     */
    this.parentNode.addEventListener('open-furo-ui5-message-strip-requested', e => {
      e.stopPropagation();
      this.target = e.detail;

      this.show(e.detail);
    });

    /**
     * listening the 'close' event from messageStrip. when the close button is clicked, close the messageStrip
     * trigger the close event from target element.
     */
    this.shadowRoot.addEventListener('close', e => {
      e.target.target._close();
      this.shadowRoot.removeChild(e.target);
    });
  }

  /**
   * Removes all strips
   */
  clearAll() {
    this._messageStrips.forEach(s => {
      s.remove();
    });
  }

  /**
   * show notification list item.
   * @param text
   */
  show(source) {
    const messagestrip = document.createElement('ui5-messagestrip');
    messagestrip.setAttribute('design', source.type ? source.type : 'Information');

    if (source.noCloseButton) {
      messagestrip.setAttribute('no-close-button', true);
    }

    if (source.noIcon) {
      messagestrip.setAttribute('no-icon', true);
    }

    if (source.size) {
      messagestrip.setAttribute('style', `width: ${source.size}`);
    }

    messagestrip.target = source;
    messagestrip.innerHTML = source.displayMessage;

    const i = this._messageStrips.push(this.shadowRoot.appendChild(messagestrip));
    const to = source.getAttribute('timeout');
    if (to !== null) {
      setTimeout(() => {
        this._messageStrips[i - 1].remove();
      }, parseInt(to, 10));
    }
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
          display: block;
        }

        ui5-messagestrip {
          margin-bottom: 0.6875rem;
        }
      `
    );
  }
}

customElements.define('furo-ui5-message-strip-display', FuroUi5MessageStripDisplay);
