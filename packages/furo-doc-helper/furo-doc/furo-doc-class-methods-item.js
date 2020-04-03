import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";



/**
 * `furo-doc-methods-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocClassMethodsItem extends FBP(LitElement) {

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
    return Theme.getThemeForComponent('FuroDocClassMethodsItem') || css`
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

    return html`
      <strong>${this.method.name}</strong>  (<template is="flow-repeat" ƒ-inject-items="--data(*.params)">
      <span class="name" ƒ-.inner-text="--item(*.name)"></span> : 
      <span class="type" ƒ-.inner-text="--item(*.type)"></span></template>) ⟹ <span class="return">${this.method.return.type}</span>
       <span class="inherited"> Inherited from ${this.method.inheritedFrom}</span>
      <furo-markdown ƒ-parse-markdown="--data(*.description)"></furo-markdown>
      <ul>
      <template is="flow-repeat" ƒ-inject-items="--data(*.params)">
    <li><span class="paramname" ƒ-.inner-text="--item(*.name)">fd</span> <br>
    <furo-markdown ƒ-parse-markdown="--item(*.description)">></furo-markdown></li>   
</template></ul> 
    `;
  }
}

window.customElements.define('furo-doc-class-methods-item', FuroDocClassMethodsItem);
