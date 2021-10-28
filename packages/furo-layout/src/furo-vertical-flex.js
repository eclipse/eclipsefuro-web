import { LitElement, html, css } from 'lit';


/**
 * `furo-vertical-flex`
 *
 * With this component, any elements can be aligned vertically. Similar to css flex.
 * The attribute "flex" must be set for growing elements.
 * The component takes up 100% of the space
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * ```html
 * <furo-vertical-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-vertical-flex>
 * ```
 *  Tags: layout
 *
 * @summary vertical alignment
 * @customElement
 * @demo demo-furo-vertical-flex Basic usage
 * @appliesMixin FBP
 */
class FuroVerticalFlex extends LitElement {
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
          display: block;
          height: 100%;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: column;
          -webkit-flex-direction: column;
          flex-direction: column;
        }

        :host([hidden]) {
          display: none;
        }

        :host([reverse]) {
          -ms-flex-direction: column-reverse;
          -webkit-flex-direction: column-reverse;
          flex-direction: column-reverse;
        }

        ::slotted(*[flex]) {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        ::slotted([scroll]) {
          height: 100%;
          overflow-y: auto;
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

window.customElements.define('furo-vertical-flex', FuroVerticalFlex);
