import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import "@furo/input/furo-button"
import "@furo/layout/furo-icon"
import "@furo/doc-helper/graph/furo-show-flow"
import "@furo/util/furo-get-clipboard"
import "@furo/util/furo-key-filter"
import "@furo/util/furo-keydown"
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


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // describe view-viz itself
    this._FBPTriggerWire("--stackChanged", this.shadowRoot.innerHTML);
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
        <furo-keydown global key="v" @-key="--clipboardContentRequested"></furo-keydown>
        
        <furo-button class="nav" raised  label="◀" @-click="--arrowLeft"></furo-button>
        <furo-keydown global key="ArrowLeft" @-key="--arrowLeft"></furo-keydown>
        
        <furo-button class="nav" raised  label="▶" @-click="--arrowRight"></furo-button>
        <furo-keydown global key="ArrowRight" @-key="--arrowRight"></furo-keydown>
        
        <furo-button class="nav" raised  label="✘" @-click="--Backspace"></furo-button>
        <furo-keydown global key="Backspace" @-key="--Backspace"></furo-keydown>
        
      </div>
      
      <!-- The help button ot the top right side just links to /man. Thats all. -->
      <a href="/man">
        <furo-button outline>help</furo-button>
      </a>

      <!-- use the stack as storage for clipboard contents -->
      <furo-forth-stack ƒ-put="--clipboardContent" ƒ-rot="--arrowLeft" ƒ-rrot="--arrowRight" ƒ-drop="--Backspace"
                        @-stack-changed="--stackChanged"></furo-forth-stack>
      
      <!-- This component shows the graphed flow of the injected content. -->
      <furo-show-flow id="flow" ƒ-request-fullscreen="--keyF"
                      ƒ-parse-html="--stackChanged"></furo-show-flow>
      
      <!-- read the content from clipboard -->
      <furo-get-clipboard ƒ-trigger="--clipboardContentRequested" @-content="--clipboardContent"></furo-get-clipboard>
      

      <furo-keydown global key="f" @-key="--keyF"></furo-keydown>

    `;
  }
}

window.customElements.define('view-viz', ViewViz);
