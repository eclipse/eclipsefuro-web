import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/util/src/furo-markdown.js';
import './furo-doc/furo-doc-properties.js';
import './furo-doc/furo-doc-class-methods.js';
import './furo-doc/furo-doc-events.js';

/**
 * `furo-doc-element`
 * Renders a analysis file
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocClass extends FBP(LitElement) {
  constructor() {
    super();
    this.class = {};
  }

  hide() {
    this.setAttribute('hidden', '');
  }

  print(analysisElement) {
    this.class = analysisElement;
    this._FBPTriggerWire('--data', this.class);
    this.removeAttribute('hidden');
    this.requestUpdate();
    this.scrollTop = 0;
  }

  /**
   * flow is ready lifecycle method
   * @private
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
      Theme.getThemeForComponent('FuroDocClass') ||
      css`
        :host {
          display: block;
          font-weight: 400;
          font-size: 14px;
          max-width: 1024px;
        }

        :host([hidden]) {
          display: none;
        }
        h1 {
          font-size: 2.8rem;
          font-weight: 400;
          line-height: 3.5rem;
          margin-top: 0;
          letter-spacing: normal;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h2.description {
          margin-top: 20px;
          margin-bottom: 24px;
          max-width: 600px;
          color: #999;
          border-bottom: none;
        }
        h2 {
          font-weight: 400;
          line-height: 28px;
          font-size: 20px;
          margin-top: 48px;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML

    return html`
      <h1>${this.class.name}</h1>
      <h2 class="description">${this.class.summary}</h2>
      <h2>Description</h2>
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <furo-doc-properties ƒ-data="--data(*.properties)"></furo-doc-properties>
      <furo-doc-class-methods ƒ-data="--data(*.methods)"></furo-doc-class-methods>
    `;
  }
}

window.customElements.define('furo-doc-class', FuroDocClass);
