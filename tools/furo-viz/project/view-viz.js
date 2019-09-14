import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import "@furo/input/furo-button"
import "@furo/layout/furo-icon"
import "@furo/doc-helper/graph/furo-show-flow"
import "@furo/util/furo-get-clipboard"
import "@furo/util/furo-key-filter"
import "@furo/logic/furo-forth-stack"


/**
 * `view-viz`
 * Visualize your flow
 *
 * @customElement
 * @demo demo/view-viz.html
 * @appliesMixin FBP
 */
class ViewViz extends FBP(LitElement) {

  constructor() {
    super();
    this.addEventListener("keypress", (key) => {
      if (key.code === "KeyF") {
        this._FBPTriggerWire("--keypress", key);
      }
    });
    this.addEventListener("keydown", (key) => {
      if (key.code === "KeyV") {
        this._FBPTriggerWire("--clipboardContentRequested");
      }
      if (key.code === "ArrowLeft") {
        this._FBPTriggerWire("--rotateLeft");
      }
      if (key.code === "ArrowRight") {
        this._FBPTriggerWire("--rotateRight");
      }
      if (key.code === "Backspace") {
        this._FBPTriggerWire("--remove");
      }

    });

  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // describe view-viz itself
    this._FBPTriggerWire("--initialContent", this.shadowRoot.innerHTML);
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

        furo-show-flow {
            height: 100vh;
            background: var(--surface);
        }

        .clip {
            position: absolute;
            left: 24px;
            top: 16px
        }

        
        .nav {
            min-width: 35px;
            padding: 0;
        }

        a {
            position: absolute;
            right: 24px;
            top: 16px;
            outline: none;
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
      <!-- This is the button, you see on the top left corner of the app. Everything starts with pressing this button (as long you have some content in your clipboard) -->
      <div class="clip">
        <furo-button  autofocus raised primary @-click="--clipboardContentRequested">render from clippboard</furo-button>
        <furo-button class="nav" raised  label="◀" @-click="--rotateLeft"></furo-button>
        <furo-button class="nav" raised  label="▶" @-click="--rotateRight"></furo-button>
        <furo-button class="nav" raised  label="✘" @-click="--remove"></furo-button>
      </div>
      
      <!-- The help button ot the top right side just links to /man. Thats all. -->
      <a href="/man">
        <furo-button outline>help</furo-button>
      </a>
      <!-- The nav event is fired from the repeated content and contains the pasted contents -->
    
      
      <!-- This component shows the graphed flow of the injected content. -->
      <furo-show-flow id="flow" ƒ-request-fullscreen="--fullscreenRequested"
                      ƒ-parse-html="--stackChanged, --initialContent"></furo-show-flow>

      <!-- read the content from clipboard -->
      <furo-get-clipboard ƒ-trigger="--clipboardContentRequested" @-content="--clipboardContent"></furo-get-clipboard>
      
      <!-- keypress wire comes from event listener in constructor -->
      <furo-key-filter ƒ-filter="--keypress" @-matched="--fullscreenRequested" keys="f"></furo-key-filter>
      
      <!-- use the stack as storage for clipboard contents -->
      <furo-forth-stack ƒ-put="--clipboardContent" ƒ-drop="--remove" ƒ-rot="--rotateLeft" ƒ-rrot="--rotateRight"
                        @-stack-changed="--stackChanged"></furo-forth-stack>
    `;
  }
}

window.customElements.define('view-viz', ViewViz);
