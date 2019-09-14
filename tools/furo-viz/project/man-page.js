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

        a.close {
            position: absolute;
            right: 24px;
            top: 16px;
            outline: none;
        }

        h1 {
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
      <h1>man viz.furo.pro </h1>
      <p><strong>v 1.5.1</strong></p>
      <p>With viz.furo.pro you can inspect fbp flows. You can paste in the template from your source code or paste
        live flows from your running apps.</p>
      <p>When you start the app, you will see the current flow of viz.furo.pro itself.</p>
      <h3>Getting the template from running apps</h3>
      <ol>
        <li>Select the element in the elements tab of your chrome dev toos</li>
        <li>type in <strong>copy($0.shadowRoot.innerHTML)</strong>
          in the console.
        </li>
        <li>Then paste the received content (already in clipboard) in viz.furo.pro to inspect live apps</li>
      </ol>

      <h2>Reading the flow graph</h2>
      <p>If you are familiar with fbp, you should not have any problem to read the graph. Otherwise we recommend to read
        <a target="_blank" href="https://furo.pro/guide/md/fbp-wires/">the guide</a> to learn more about</p>
      <p>The <strong>boxes</strong> represent the used components.</p>
      <p> Boxes with <strong>dashed lines</strong> have a comment in the source. Hover on the box to read the comment
      </p>
      <p>The <strong>blue lines</strong> are the wires. Hover on them to read the wire name, like --clipboardContent.
      </p>
      <p>The <strong>small blue boxes</strong> with an <strong>@-</strong> are the catched events. Hover on them to read
        the used name and more.</p>
      <p>The <strong>small green boxes</strong> with an <strong>ƒ-</strong> are the triggerer for the methods of the
        component.</p>
      <p>The <strong>small black boxes</strong> are <strong>boolean</strong> flags of the component which are setted.
      </p>
      <p>The <strong>small orange boxes</strong> are <strong>string</strong> attributes of the component which are
        setted. Hover on them to read the setted string.</p>

      <p>The <strong>orange dots</strong> are indicating a wire from nowhere or a wire which was triggered from the
        source (like <strong>this._FBPTriggerWire("--dataReceived",data)</strong>) or from outside (like <strong>--pageEntered</strong>
        from furo-pages).
      </p>
      <p>The <strong>orange dots</strong> are indicating a wire which goes nowhere or a wire which is cathced in the
        source
        (like <strong>this._FBPAddWireHook("--wireName",(e)=>{ ... });</strong></p>

      <h2>Keyboard shortcuts</h2>
      <p><strong>f</strong> on the buttons toggles the fullscreen mode. Press "esc" to get back.</p>
      <p><strong>ctrl v</strong> or <strong>cmd v</strong> renders the clipboard content.</p>
      <p><strong>enter</strong> on the navigation buttons or arrow-left, arrow-right ◀, ▶ re renders the last pasted content.</p>
      <p><strong>enter</strong> on the ✘ button or Backspace removes the current view.</p>
      <p><strong>enter</strong> on the parse button renders the clipboard content.</p>

      <h2>Mouse controls</h2>
      <p><strong>scroll down</strong> zooms the flow in.</p>
      <p><strong>scroll up</strong> zooms the out.</p>
      <p><strong>moving the mouse with mousedown</strong> pans the flow.</p>

      <h2>Touch controls</h2>
      <p><strong>pinch in</strong> zooms the flow in.</p>
      <p><strong>pinch out</strong> zooms the flow out.</p>
      <p><strong>paning</strong> (with 2 fingers) pans the flow.</p>

      <a class="close" href="/">
        <furo-button outline>close help</furo-button>
      </a>
    `;
  }
}

window.customElements.define('man-page', ManPage);
