import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

import "@furo/util/demo/demo-furo-demo-snippet"

/**
 * `furo-demo-loader`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-demo-loader.html
 * @appliesMixin FBP
 */
class FuroDemoLoader extends FBP(LitElement) {

  constructor() {
    super();
  }

  load(location) {

    if (location.pathSegments[1]) {

      let lastDemo = this.shadowRoot.querySelector("#demo");
      lastDemo.remove();

      this.packageName = location.pathSegments[0];
      this.demoComponent = location.pathSegments[1];

      // if the element is registered append the new
      if (document.createElement(this.demoComponent).constructor !== HTMLElement) {
        // append the demo element
        let demo = document.createElement(this.demoComponent);
        demo.id = "demo";
        this.shadowRoot.appendChild(demo);
      }else{
        let demo = document.createElement("div");
        demo.id = "demo";
        demo.classList.add("error");
        demo.innerText = "404  -  " + this.demoComponent + " is not imported, nothing to show here";
        this.shadowRoot.appendChild(demo);
      }

      this.requestUpdate();

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
            height: 100%;
            overflow: auto;
            position: relative;
        }

        :host([hidden]) {
            display: none;
        }

        .goback {
            position: absolute;
            right: var(--spacing);

        }
        .error{
            font-size: 48px;
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
      <a class="goback" href="/api/doc/${this.packageName}">Back to package ${this.packageName}</a>
        <div id="demo"></div>
    `;
  }
}

window.customElements.define('furo-demo-loader', FuroDemoLoader);
