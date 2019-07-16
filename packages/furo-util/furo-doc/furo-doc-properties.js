import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat.js";

/**
 * `furo-doc-properties`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-properties.html
 * @appliesMixin FBP
 */
class FuroDocProperties extends FBP(LitElement) {

  constructor() {
    super();
    this.hidden = true;

  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * hide props if empty
       */
      hidden: {type: Boolean, reflect: true}
    };
  }

  data(data) {
    if (Array.isArray(data)) {
      this._FBPTriggerWire("--data", data);
      this.removeAttribute("hidden");
    } else {
      this.setAttribute("hidden", "");
    }
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
        }

        :host([hidden]) {
            display: none;
        }
        h2{
            font-weight: 400;
            line-height: 28px;
            font-size: 20px;
            margin-top: 48px;
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
      <h2>Attributes & Properties</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-properties-item ƒ-data="--item"></furo-doc-properties-item>

      </template>
    `;
  }
}

window.customElements.define('furo-doc-properties', FuroDocProperties);


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
            margin-bottom: 24px;
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
    // language=HTML
    return html`
      <span class="propname">${this.prop.name}:</span>  ${this.prop.type} = <span class="default">${this.prop.defaultValue}</span>  <i>${this.prop.inheritedFrom}</i>
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `;
  }
}

window.customElements.define('furo-doc-properties-item', FuroDocPropertiesItem);
