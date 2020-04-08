import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import './furo-doc-methods-item';

/**
 * `furo-doc-methods`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocMethods extends FBP(LitElement) {
  constructor() {
    super();
    this.hidden = true;
  }

  /**
   * @private
   * @return {Object}
   */
  static get methods() {
    return {
      /**
       * hide props if empty
       */
      hidden: { type: Boolean, reflect: true },
    };
  }

  data(data) {
    if (Array.isArray(data)) {
      // show public fields only hide inhterite from inheritedFrom: "LitElement"
      data = data.filter(m => 
        // todo: filter out inherited stuff like connectedCallback and so
         m.privacy === 'public' && !m.inheritedFrom
      );

      data = data.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      this._FBPTriggerWire('--data', data);
      this.removeAttribute('hidden');
    } else {
      this.setAttribute('hidden', '');
    }
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
      Theme.getThemeForComponent('FuroDocMethods') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        h2 {
          margin-top: 48px;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.0125em;
          border-bottom: 1px solid rgba(0, 0, 0, 0.87);
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
      <h2>Methods</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-methods-item ƒ-data="--item"></furo-doc-methods-item>
      </template>
    `;
  }
}

window.customElements.define('furo-doc-methods', FuroDocMethods);
