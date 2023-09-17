import {html, LitElement} from "lit";
// eslint-disable-next-line import/no-extraneous-dependencies
import {DOMFBP} from "./DOMFBP";
import  "./vizConnector";

export default class ReactFBP extends LitElement {
  private fbphandle: DOMFBP | undefined;
  private vizRoot: this = this;

  /**
   * @private
   */
  connectedCallback() {
    super.connectedCallback();
    this.fbphandle = new DOMFBP(this);
    this.fbphandle.tagName = this.tagName
    this.fbphandle.parentNode = this.parentNode
    this.fbphandle.nodeName = this.nodeName
    if(this.getAttribute("trace")!== null){
      this.fbphandle!._FBPTraceWires();
    }

  }

  viz(){
    // @ts-ignore
    window.viz(this)
  }

  /**
   * Activate the tracer
   */
  trace(){
    this.fbphandle!._FBPTraceWires();
  }

  /**
   * @private
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>`;
  }
}

window.customElements.define("react-fbp", ReactFBP);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "react-fbp": any
    }
  }
}
