import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout"
import "./furo-markdown"

/**
 * `furo-demo-snippet`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-demo-snippet.html
 * @appliesMixin FBP
 */
class FuroDemoSnippet extends FBP(LitElement) {

  constructor() {
    super();
    this.source = false;
    this.demo = true;

    let t = this.querySelector('template');
    this.template = t.content;
    this.markdown = "```html\n" + t.innerHTML + "\n```";
    this._FBPTriggerWire("--tpl", this.markdown);

    this.addEventListener("source", (e) => {
      this.source = true;
      this.demo = false;
    });

    this.addEventListener("demo", (e) => {
      this.source = false;
      this.demo = true;
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
      demo: {type: Boolean, reflect: true}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();


    let bind = this.shadowRoot.querySelector("#bind");

    let elem = document.createElement("empty-fbp-node");
    elem.attachShadow({mode: 'open'});
    elem.shadowRoot.appendChild(this.template.cloneNode(true));
    elem._appendFBP(elem.shadowRoot);
    elem._FBPTraceWires();
    bind.appendChild(elem.shadowRoot);
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

        furo-markdown {
            height: 100%;
            overflow: auto;
            background-color: rgb(245, 242, 240);
        }

        #bind {
            height: 100%;
        }

        :host([source]) #bind {
            display: none;
        }

        :host([demo]) furo-markdown {
            display: none;
        }
        div.flexbody{
            height: inherit;
            overflow: hidden;
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
        <div><span @-click="-^demo">demo</span> | <span @-click="-^source">source</span></div>
        <div flex class="flexbody">
          <div id="bind" flex></div>
          <furo-markdown  ƒ-parse-markdown="--tpl"></furo-markdown>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('furo-demo-snippet', FuroDemoSnippet);
