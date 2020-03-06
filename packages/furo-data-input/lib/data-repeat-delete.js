import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/icon/furo-icon"

/**
 * `data-repeat-delete`
 * Deletes a repeated item. Built for furo-data-repeat
 *
 * @customElement
 * @appliesMixin FBP
 */
class DataRepeatDelete extends FBP(LitElement) {

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      icon: {type: String}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * Register hook on wire --delClicked to
     * delete the item
     */
    this.addEventListener("click",(e)=>{
      this.field.deleteNode()
    });


  }

  bindItem(repeatedNode) {
    this.field = repeatedNode;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('DataRepeatDelete') || css`
        :host {
            display: block;
            box-sizing: border-box;
            padding-top:  26px;
            cursor: pointer;
        }

        :host([condensed]){
            padding-top:  18px;
        }
        :host([hidden]) {
            display: none;
           
        }

        furo-icon {
          width: 24px;
          height: 24px;
            
        }

      
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      
      <furo-icon icon="${this.icon}"></furo-icon>     
       
    `;
  }
}

window.customElements.define('data-repeat-delete', DataRepeatDelete);
