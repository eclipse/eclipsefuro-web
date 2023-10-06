/* eslint-disable */
import {html, LitElement} from "lit";
// eslint-disable-next-line
import {DOMFBP} from "./DOMFBP";
// eslint-disable-next-line
import  "./vizConnector";

/**
 * Adds fbp support for react
 *
 * # Usage
 * ```html
 * export default function Home() {
 *   React.useEffect(() => {
 *     import ("@furo/fbp/src/reactFBP")
 *   }, [])
 *
 *
 *   return (
 *         <react-fbp>
 *           <button at-click="--buttonClicked" fn-remove="--buttonClicked">remove me</button>
 *         </react-fbp>
 *      )
 * }
 * ```
 */
export default class ReactFBP extends LitElement {

  constructor() {
    super()
  }

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
