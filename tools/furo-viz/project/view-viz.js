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
    });
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // describe view-viz itself
    this._FBPTriggerWire("--storedContent", this.shadowRoot.innerHTML);
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

        furo-button.clip {
            position: absolute;
            left: 24px;
            top: 16px
        }

        .navigator {
            position: absolute;
            left: 24px;
            top: 64px
        }

        .navigator furo-button {
            display: block;
            margin-bottom: 12px;
            min-width: 40px;
            padding: 0;
        }

        a{
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
      <furo-button class="clip" autofocus raised primary @-click="--clipboardContentRequested">render from clippboard
      </furo-button>
      <!-- The help button ot the top right side just links to /man. Thats all. -->
      <a href="/man">
        <furo-button outline>help</furo-button>
      </a>
      <!-- The nav event is fired from the repeated content and contains the pasted contents -->
      <div class="navigator" @-nav="--storedContent">
        <!-- Repeat the stack to fire a nav event with the current item. You can only see what is defined in the current component. For documentation purposes, this is the content of the template:  
<furo-button raised ƒ-.label="--index" @-click="^^nav(item)"></furo-button>   -->
        <template is="flow-repeat" ƒ-inject-items="--stackChanged">
          <furo-button raised ƒ-.label="--index" @-click="^^nav(item)"></furo-button>
        </template>
      </div>
      
      <!-- This component shows the graphed flow of the injected content. -->
      <furo-show-flow id="flow" ƒ-request-fullscreen="--fullscreenRequested"
                      ƒ-parse-html="--clipboardContent, --storedContent"></furo-show-flow>

      <!-- read the content from clipboard -->
      <furo-get-clipboard ƒ-trigger="--clipboardContentRequested" @-content="--clipboardContent"></furo-get-clipboard>
      <!-- keypress wire comes from event listener in constructor -->
      <furo-key-filter ƒ-filter="--keypress" @-matched="--fullscreenRequested" keys="f"></furo-key-filter>
      <!-- Misuse the stack as storage for clipboard contents -->
      <furo-forth-stack ƒ-put="--clipboardContent" @-stack-changed="--stackChanged"></furo-forth-stack>
    `;
  }
}

window.customElements.define('view-viz', ViewViz);
