import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `page-title`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-page-title
 * @appliesMixin FBP
 */
class PageTitle extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      text: { type: String },
      prefix: { type: String },
    };
  }

  set() {
    document.title = this.prefix + this.text;
    /**
     * @event page-title-set
     * Fired when page title was set
     * detail payload:
     */
    const customEvent = new Event('page-title-set', { composed: true, bubbles: true });
    customEvent.detail = { text: this.text, prefix: this.prefix };
    window.dispatchEvent(customEvent);
  }

  setText(data) {
    this.text = data;
    this.set();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent(this.name) ||
      css`
        :host {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('page-title', PageTitle);
