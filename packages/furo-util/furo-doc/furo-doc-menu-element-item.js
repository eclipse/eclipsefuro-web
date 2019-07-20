import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-doc-menu-element-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-menu-element-item.html
 * @appliesMixin FBP
 */
class FuroDocMenuElementItem extends FBP(LitElement) {

  constructor() {
    super();
    //forward click to a
    this.addEventListener("click",(e)=>{
      this._FBPTriggerWire("--click", e);
    })
  }

  setItem(item) {
    this.item = item;
    this.selected = item.__selected;
    if(this.selected){
      setTimeout(()=>{
        if(this.scrollIntoViewIfNeeded){
          this.scrollIntoViewIfNeeded();
        }
      },16);
  }
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
      selected: {type: Boolean, reflect:true}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: list-item;
            padding: 0 var(--spacing-s);
            line-height: 30px;
            margin-bottom: 4px;
            color: var(--on-background);
            letter-spacing: 0.0178571em;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.2s ease 0s;
            cursor: pointer;
        }
        
        :host([hidden]) {
            display: none;
        }
        

        :host(:hover), :host([selected]) {
            background-color: var(--secondary);
            border-radius: 4px;
            color: var(--on-secondary);
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
<a href="${this.item.tagname}" ƒ-click=":STOP,--click"></a>&lt;${this.item.tagname}&gt;
      
    `;
  }
}

window.customElements.define('furo-doc-menu-element-item', FuroDocMenuElementItem);
