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


  constructor() {
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
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   *@private
   */
  static get properties() {

    return {};
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
<furo-vertical-flex>
<div>
<h2>Demo furo-banner</h2>

</div>
  <furo-demo-snippet flex>
  <template>
    <furo-vertical-scroller>
      <furo-banner-display autofocus></furo-banner-display>     
                                           
      <furo-banner  ƒ-show="--show1" ƒ-set-Text="--setBannerText1"  icon="perm-scan-wifi" ></furo-banner>    
      <produce-banner-data id="banner1" label="banner 1"
      banner-text="Test\nNewline *stuff* \n *ddd*"
      @-banner-text-banner1="--setBannerText1" 
      @-show-banner1="--show1"
      ></produce-banner-data>
    
    <produce-banner-data @-response-error="--error" label="GRPC ERROR"></produce-banner-data>
    <furo-banner  ƒ-parse-grpc-status="--error" icon="apps"></furo-banner>
    
      <furo-button raised @-click="--show2">confirm multiline</furo-button>
      
    <furo-banner  ƒ-show="--show2" text="Wlan Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."  icon="info-outline"   dissmis-button-text="continue" confirm-button-text="confirm"></furo-banner>
    
    
    <furo-button raised @-click="--show3">oneliner</furo-button>
    <furo-banner  ƒ-show="--show3" text="oneliner."  icon="info-outline"></furo-banner>
    </furo-vertical-scroller>
  </template>
  </furo-demo-snippet>
</furo-vertical-flex>
      
 
        `;
  }

}

customElements.define('demo-furo-banner-display', DemoFuroBannerDisplay);
