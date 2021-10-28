import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-panel-head`
 *  Displays a navigation node as title
 *
 * @summary dislay a navigationNode as title
 * @customElement
 * @appliesMixin FBP
 */
class FuroPanelHead extends FBP(LitElement) {
  constructor() {
    super();
    this._field = {};
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
   * binds a fieldNode to the internal _field
   * is listenting to field-value-changed event
   * @param fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ');
      return;
    }

    this._field = fieldNode;

    this._field.addEventListener('field-value-changed', () => {
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
