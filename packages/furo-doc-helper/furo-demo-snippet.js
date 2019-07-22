import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout"
import "@furo/util/furo-markdown"

/**
 * `furo-demo-snippet`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-demo-snippet
 * @appliesMixin FBP
 */
class FuroDemoSnippet extends FBP(LitElement) {

  constructor() {
    super();

    let t = this.querySelector('template');
    this.template = t.content;
    this.markdown = "```html\n" + t.innerHTML + "\n```";
    this._FBPTriggerWire("--tpl", this.markdown);

    this.addEventListener("source", (e) => {
      this.source = true;
      this.demo = false;
      this.flow = false;
    });

    this.addEventListener("demo", (e) => {
      this.source = false;
      this.demo = true;
      this.flow = false;
    });

    this.addEventListener("flow", (e) => {
      this.source = false;
      this.demo = false;
      this.flow = true;
    });
  }


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      source: {type: Boolean, reflect: true},
      demo: {type: Boolean, reflect: true},
      flow: {type: Boolean, reflect: true}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();

    let demo = this.shadowRoot.querySelector("#demo");

    let elem = document.createElement("empty-fbp-node");
    elem.attachShadow({mode: 'open'});
    elem.shadowRoot.appendChild(this.template.cloneNode(true));
    elem._appendFBP(elem.shadowRoot);
    elem._FBPTraceWires();
    demo.appendChild(elem.shadowRoot);

    if(!this.source && !this.flow){
      this.demo = true;
    }
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
            height: 300px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-markdown {
            height: 100%;
            overflow: auto;
            background-color: rgb(245, 242, 240);
        }

        #demo, #flow {
            height: 100%;
        }

        :host(:not([demo])) #demo {
            display: none;
        } 
        
        :host(:not([flow])) #flow {
            display: none;
        }

        :host(:not([source])) furo-markdown {
            display: none;
        }
        div.flexbody{
            height: inherit;
            overflow: hidden;
        }
        span{
            cursor: pointer;
        }
        .nav{
            border-bottom: 1px solid gainsboro;
            padding-bottom: 8px;
            margin-bottom: 24px;
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

      <furo-vertical-flex>
        <div class="nav"><span @-click="-^demo">demo</span> | <span @-click="-^source">source</span> | <span @-click="-^flow">flow</span></div>
        <div flex class="flexbody">
          <div id="demo" flex></div>
          <div  id="flow">Comming soon</div>
          <furo-markdown  ƒ-parse-markdown="--tpl"></furo-markdown>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('furo-demo-snippet', FuroDemoSnippet);
