import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";



/**
 * `furo-doc-methods-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
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
    if (data.privacy === "private") {
      this.setAttribute("hidden", "")
    }

    this._FBPTriggerWire("--data", data);

    this.requestUpdate();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDocMethodsItem') || css`
        :host {
            display: block;
            font-size: 13px;
            margin-bottom: 36px;
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
            font-weight: 900;
        }


        span.type:after {
            content: ","
        }
        .inherited{
            font-style: italic;
            line-height: 24px;
            color: #7f7f7f;
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
    this.cname =  this.method.name.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    return html`
      <strong>${this.cname}</strong>  (<template is="flow-repeat" ƒ-inject-items="--data(*.params)">
      <span class="name" ƒ-.inner-text="--item(*.name)"></span> : 
      <span class="type" ƒ-.inner-text="--item(*.type)"></span></template>) ⟹ <span class="return">${this.method.return.type}</span>
      
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <ul>
      <template is="flow-repeat" ƒ-inject-items="--data(*.params)">
    <li><span class="paramname" ƒ-.inner-text="--item(*.name)">fd</span> <br>
    <furo-markdown ƒ-parse-markdown="--item(*.description)">></furo-markdown></li>   
</template></ul> 
    `;
  }
}

window.customElements.define('furo-doc-methods-item', FuroDocMethodsItem);
