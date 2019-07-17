import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat.js";

/**
 * `furo-doc-properties-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-properties-item.html
 * @appliesMixin FBP
 */
class FuroDocPropertiesItem extends FBP(LitElement) {

  constructor() {
    super();
    this.prop;
  }

  data(data) {
    this.prop = data;
    if(data.privacy === "protected"){
      this.setAttribute("hidden","")
    }
    this._FBPTriggerWire("--data", data);

    this.requestUpdate();
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
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
        }


        :host([hidden]) {
            display: none;
        }
        span.default{
            color:green;
        }
        span.propname{
            font-family: 'Roboto Mono', 'Courier New', 'Courier', monospace;
            font-weight: 900;
        }
       
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    this.cname =  this.prop.name.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    // language=HTML
    return html`
      <span class="propname">${this.cname}</span>   <span class="propname">(${this.prop.name}):</span>  ${this.prop.type} = <span class="default">${this.prop.defaultValue}</span>  <i>${this.prop.inheritedFrom}</i>
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `;
  }
}

window.customElements.define('furo-doc-properties-item', FuroDocPropertiesItem);
