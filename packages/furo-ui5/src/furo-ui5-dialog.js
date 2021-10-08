import Dialog from '@ui5/webcomponents/dist/Dialog.js';

/**
 * `furo-ui5-dialog` is a extended ui5-dialog which can attach itself to a parent dom element.
 *
 * This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-dialog behind the backdrop.
 *
 * Use this component like a regular ui5-dialog and do not forget to place the furo-ui5-dialog-display in one of the parent elements.
 *
 * @summary Dialog element
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5Dialog extends Dialog {
  show() {
    // only register once
    if (!this._furoDialogRegistered) {
      const customEvent = new Event('register-furo-ui5-dialog', { composed: true, bubbles: true });
      customEvent.detail = this;
      this.dispatchEvent(customEvent);
      this._furoDialogRegistered = true;
    }
    super.show();
  }
}

window.customElements.define('furo-ui5-dialog', FuroUi5Dialog);
