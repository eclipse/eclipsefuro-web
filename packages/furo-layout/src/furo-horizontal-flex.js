import { LitElement, html, css } from 'lit';


/**
 * `furo-horizontal-flex`
 *
 * With this component, any elements can be aligned horizontally. Similar to css flex.
 * The attribute "flex" must be set for growing elements.
 * The component takes up 100% of the space.
 *
 * ```html
 * <furo-horizontal-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-horizontal-flex>
 * ```
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * @cssprop {N/A} [--furo-horizontal-flex-space=0.5rem] - default padding (space)
 * @cssprop {N/A} [--furo-horizontal-flex-bigspace=3rem] - big padding (bigspace)
 *
 *  Tags: layout
 *
 * @summary horizontal alignment
 * @customElement
 * @demo demo-furo-horizontal-flex Basic usage
 * @appliesMixin FBP
 */
export class FuroHorizontalFlex extends LitElement {
  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          width: 100%;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }

        :host([reverse]) {
          -ms-flex-direction: row-reverse;
          -webkit-flex-direction: row-reverse;
          flex-direction: row-reverse;
        }

        ::slotted(*[flex]) {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        :host([hidden]) {
          display: none;
        }

        :host([space]) ::slotted(*:not(:first-child)) {
          margin-left: var(--furo-horizontal-flex-space, 0.5rem);
        }

        :host([space]) ::slotted(*:not(:last-child)) {
          margin-right: var(--furo-horizontal-flex-space, 0.5rem);
        }

        :host([bigspace]) ::slotted(*:not(:first-child)) {
          margin-left: var(--furo-horizontal-flex-bigspace, 3rem);
        }

        :host([bigspace]) ::slotted(*:not(:last-child)) {
          margin-right: var(--furo-horizontal-flex-bigspace, 3rem);
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
      <slot></slot>
    `;
  }
}

window.customElements.define('furo-horizontal-flex', FuroHorizontalFlex);
