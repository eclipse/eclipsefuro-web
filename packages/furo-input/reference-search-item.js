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
    this.addEventListener("mouseenter",(e)=>{
      /**
      * @event mouse-over-select
      * Fired when mouseenter
      * detail payload: index
      */
      let customEvent = new Event('mouse-over-selected', {composed:true, bubbles: true});
      customEvent.detail = this.index;
      this.dispatchEvent(customEvent)

    })
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

        }
        
        :host([hover]) div {
            background-color: lightgray;
        }

        div {
            border-bottom: 1px solid var(--primary-color);
            padding: 8px;
            cursor: pointer;
        }
    `
  }

  deselect(){
    this.removeAttribute("hover");

  }
  preselect(){
    this.setAttribute("hover","");

  }

 select(){
    /**
    * @event item-selected
    * Fired when item is selected
    * detail payload: item
    */
    let customEvent = new Event('item-selected', {composed:true, bubbles: true});
    customEvent.detail = this._item;
    this.dispatchEvent(customEvent)
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
