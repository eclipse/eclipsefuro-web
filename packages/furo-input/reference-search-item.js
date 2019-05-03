import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `reference-search-item`
 * Describe your element
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/reference-search-item.html
 * @appliesMixin FBP
 */
class ReferenceSearchItem extends FBP(LitElement) {

  constructor() {
    super();
    this._item = {};
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }

  injectItem(item) {
    this._item = item.data;
    this.requestUpdate();
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
        :host {
            display: block;
            border-bottom: 1px solid var(--primary-color);
            padding: 8px;
            cursor: pointer;
        }

        :host(:hover) {
            background-color: lightgray;
        }
    `
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
<div @-click="^^item-selected(_item)">
${this._item.display_name}
</div>           
`;
  }
}

window.customElements.define('reference-search-item', ReferenceSearchItem);
