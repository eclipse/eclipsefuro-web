import {LitElement} from 'lit';


/**
 * `furo-ui5-dialog-display`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5DialogDisplay extends (LitElement) {
  
  connectedCallback() {
    this.parentNode.addEventListener('register-furo-ui5-dialog', e => {
      e.stopPropagation();
      this.parentNode.appendChild(e.detail);
    });
  }
}

window.customElements.define('furo-ui5-dialog-display', FuroUi5DialogDisplay);
