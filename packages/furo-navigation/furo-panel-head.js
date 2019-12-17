import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import {CheckMetaAndOverrides} from "@furo/data-input/lib/CheckMetaAndOverrides";

/**
 * `furo-panel-head`
 *  Displays a navigation node as title
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-panel-head
 * @appliesMixin FBP
 */
class FuroPanelHead extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  bindData(fieldNode) {
    this._field = fieldNode;


    if (fieldNode === undefined) {
      console.warn("Invalid binding ");
      console.log(caller);
      return
    }

    this._field = fieldNode;


    this._field.addEventListener('field-value-changed', (e) => {
      this.requestUpdate();
    });


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
          position: relative;
          margin-bottom: var(--spacing-s);
        }

        :host([hidden]) {
          display: none;
        }

        h1 {
          margin: 0;
          margin-top: var(--spacing-xs);
          letter-spacing: 0;
          font-weight: 200;
          font-size: 32px;
        }

        p.secondary {
          margin: 0;
          font-size: 14px;
          letter-spacing: 0.1px;
          color: rgba(var(--on-surface-rgb), var(--medium-emphasis-surface));
          line-height: 20px;
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
      <h1>${this._field.display_name}</h1>
      <p class="secondary">${this._field.description}</p>
    `;
  }
}

window.customElements.define('furo-panel-head', FuroPanelHead);
