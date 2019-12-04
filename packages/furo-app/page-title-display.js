import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

/**
 * `page-title-display`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-page-title-display
 * @appliesMixin FBP
 */
class PageTitleDisplay extends FBP(LitElement) {
  constructor() {
    super();
    window.addEventListener('page-title-set', d => {
      this._title = d.detail.text;
      this._prefix = d.detail.prefix;

      this.requestUpdate();
    });
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
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      ${this._title}
    `;
  }
}

window.customElements.define('page-title-display', PageTitleDisplay);
