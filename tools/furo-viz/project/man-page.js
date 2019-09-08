import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `man-page`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/man-page.html
 * @appliesMixin FBP
 */
class ManPage extends FBP(LitElement) {

  constructor() {
    super();
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
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            background: var(--surface);
            padding: 16px 140px 24px 24px;
            
            height: 100%;
            overflow: auto;
            box-sizing: border-box;
        }

        :host([hidden]) {
            display: none;
        }
        a{
            position: absolute;
            right: 24px;
            top: 16px;
            outline: none;
        }
        h1{
            margin-top: 0;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <h1>man viz.furo.pro</h1>
      <p>With viz.furo.pro you can inspect fbp flows. You can paste in the template from your source code or paste
        live flows from your running apps.</p>
      <p>On start, you will see the flow of viz.furo.pro itself.</p>
      <h3>Getting the template from running apps</h3>
      <ol>
        <li>Select the element in the elements tab of your chrome dev toos</li>
        <li>type in <strong>copy($0.shadowRoot.innerHTML)</strong>
          in the console.
        </li>
        <li>Then paste the received content (already in clipboard) in viz.furo.pro to inspect live apps</li>
      </ol>
        
      <h2>Keyboard shortcuts</h2>
      <p><strong>f</strong> on the buttons toggles the fullscreen mode. Press "esc" to get back.</p>
      <p><strong>ctrl v</strong> or <strong>cmd v</strong> renders the clipboard content.</p>
      <p><strong>enter</strong> on the navigation buttons [0...n] re renders the last pasted content.</p>
      <p><strong>enter</strong> on the parse button renders the clipboard content.</p>

      <h2>Mouse controls</h2>
      <p><strong>scroll down</strong> zooms the flow in.</p>
      <p><strong>scroll up</strong> zooms the out.</p>
      <p><strong>moving the mouse with mousedown</strong> pans the flow.</p>

      <h2>Touch controls</h2>
      <p><strong>pinch in</strong> zooms the flow in.</p>
      <p><strong>pinch out</strong> zooms the flow out.</p>
      <p><strong>paning</strong> (with 2 fingers) pans the flow.</p>

      <a href="/">
        <furo-button  outline>close help</furo-button>
      </a>
    `;
  }
}

window.customElements.define('man-page', ManPage);
