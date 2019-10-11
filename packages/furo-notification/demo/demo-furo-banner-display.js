import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from '@furo/fbp';
import "../furo-banner-display";
import "../furo-banner";
import "@furo/input";
import "@furo/doc-helper"

/**
 * `demo-furo-banner-display`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class DemoFuroBannerDisplay extends FBP(LitElement) {


  constructor(){
    super();

    this._FBPAddWireHook("--clicked", ()=>{
      this.shadowRoot.getElementById("banner").setText("this is a text for testingthis is a text for testingthis is a text for testingthis is a text for testing");
      this.shadowRoot.getElementById("banner").setIcon("perm-scan-wifi");
      this.shadowRoot.getElementById("banner").setDismissButtonText("cancele3333");
      this.shadowRoot.getElementById("banner").setConfirmButtonText("confirm33333");
      this._FBPTriggerWire("--show");
    });
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
            display: block;
            height: 100%;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   *@private
   */
  static get properties(){

    return {
    };
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render(){
    return html`
      <h2>Demo furo-banner</h2>
          <div>  
              <furo-banner id="banner" ƒ-show="--show" ></furo-banner>
          </div>
          <furo-banner-display></furo-banner-display>
          <div>
          
            <furo-button label="show" @-click="--clicked"></furo-button>  
            <span>place holder</span>
          </div>  
        `;
  }

}

customElements.define('demo-furo-banner-display', DemoFuroBannerDisplay);
