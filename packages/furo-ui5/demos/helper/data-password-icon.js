import { LitElement } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `data-password-icon-demo-helper`
 * help to demonstrate the password input element.
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DataPasswordIconDemoHelper extends FBP(LitElement) {
  /**
   * send event set-icon with ui5 icon name 'show'
   */
  showIcon() {
    const customEvent = new Event('set-icon', { composed: true, bubbles: true });
    customEvent.detail = 'show';
    this.dispatchEvent(customEvent);
  }

  /**
   * send event set-icon with ui5 icon name 'hide'
   */
  hideIcon() {
    const customEvent = new Event('set-icon', { composed: true, bubbles: true });
    customEvent.detail = 'hide';
    this.dispatchEvent(customEvent);
  }
}

customElements.define('data-password-icon-demo-helper', DataPasswordIconDemoHelper);
