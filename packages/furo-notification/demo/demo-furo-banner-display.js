import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from '@furo/fbp';
import "../furo-banner-display";
import "../furo-banner";
import "@furo/input";
import "@furo/doc-helper"
import "./produce-banner-data"

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
      <furo-demo-snippet >
        <template>
  
          <div>        
              <furo-banner  ƒ-show="--show1" ƒ-set-Text="--setBannerText1"  icon="perm-scan-wifi" ></furo-banner>
              <furo-banner  ƒ-show="--show2" ƒ-set-Text="--setBannerText2"  icon="info-outline"   dissmis-button-text="continue" confirm-button-text="fix it"></furo-banner>
          </div>
          <furo-banner-display></furo-banner-display>
          
          <produce-banner-data id="banner1" label="banner 1"
            banner-text="Banner 1 , Wlan Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
             @-banner-text-banner1="--setBannerText1" 
             @-show-banner1="--show1"
           ></produce-banner-data>
          <produce-banner-data id="banner2"  label="banner 2"
            banner-text="Banner 2 , Information et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
             @-banner-text-banner2="--setBannerText2" 
             @-show-banner2="--show2"
           ></produce-banner-data>
        </template>
      </furo-demo-snippet>
        `;
  }

}

customElements.define('demo-furo-banner-display', DemoFuroBannerDisplay);
