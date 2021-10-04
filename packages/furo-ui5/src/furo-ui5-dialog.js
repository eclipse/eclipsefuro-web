import Dialog from '@ui5/webcomponents/dist/Dialog.js'

/**
 * `furo-ui5-dialog`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5Dialog extends Dialog {

  show() {
    
    // only register once
    if(!this._furoDialogRegistered){
      let customEvent = new Event('register-furo-ui5-dialog', {composed: true, bubbles: true});
      customEvent.detail = this
      this.dispatchEvent(customEvent)
      this._furoDialogRegistered = true
    }
    super.show();
  }
}

window.customElements.define('furo-ui5-dialog', FuroUi5Dialog);
