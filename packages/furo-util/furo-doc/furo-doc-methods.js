import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat.js";

/**
 * `furo-doc-methods`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-methods.html
 * @appliesMixin FBP
 */
class FuroDocMethods extends FBP(LitElement) {

  constructor() {
    super();
    this.hidden = true;

  }

  /**
   * @private
   * @return {Object}
   */
  static get methods() {
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
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Methods</h2>
      <template is="flow-repeat" ƒ-inject-items="--data">
        <furo-doc-methods-item ƒ-data="--item"></furo-doc-methods-item>

      </template>
    `;
  }
}

window.customElements.define('furo-doc-methods', FuroDocMethods);


/**
 * `furo-doc-methods-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-methods-item.html
 * @appliesMixin FBP
 */
class FuroDocMethodsItem extends FBP(LitElement) {

  constructor() {
    super();
    this.method;
  }

  data(data) {
    this.method = data;

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
            border-bottom: 1px solid var(--separator-color,#DEDEDE);
            margin-bottom: 16px;
            
        }

        :host([hidden]) {
            display: none;
        }
        span.default{
            color:green;
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
      <strong>${this.method.name}</strong>  ( ${this.method.type}) : ${this.method.return.type}
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      
    `;
  }
}

window.customElements.define('furo-doc-methods-item', FuroDocMethodsItem);
