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
      // show public fields only
      data = data.filter((m) => {
        return m.privacy === "public";
      });
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

        h2 {
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

    if (data.privacy === "protected") {
      this.setAttribute("hidden", "")
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

        strong {
            font-weight: 700;
            font-family: "Roboto Mono";
           
        }

        :host([hidden]) {
            display: none;
        }

        span.name {
            color: green;
        }

        span.paramname {
            font-family: "Roboto Mono";
            color: #717171;
        }

        span.type, span.return {
            color: #717171;
        }

        span.type:after {
            content: ","
        }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    if (!this.method.return) {
      this.method.return = {};

    }
    return html`
      <strong>ƒ-${this.method.name}</strong>  (<template is="flow-repeat" ƒ-inject-items="--data(*.params)">
      <span class="name" ƒ-.inner-text="--item(*.name)"></span> : 
      <span class="type" ƒ-.inner-text="--item(*.type)"></span></template>) => <span class="return">${this.method.return.type}</span>
      
      <furo-markdown ƒ-parse-markdown="--data(*.description)">></furo-markdown>
      <ul>
      <template is="flow-repeat" ƒ-inject-items="--data(*.params)">
    <li><span class="paramname" ƒ-.inner-text="--item(*.name)">fd</span> <br>
    <furo-markdown ƒ-parse-markdown="--item(*.description)">></furo-markdown></li>   
</template></ul> 
    `;
  }
}

window.customElements.define('furo-doc-methods-item', FuroDocMethodsItem);
