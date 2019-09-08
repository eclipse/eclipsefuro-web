import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import "@furo/input/furo-button"
import "@furo/layout/furo-icon"
import "@furo/doc-helper/graph/furo-show-flow"

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
        this.requestFullscreen();
      }
    });
    this.addEventListener("keydown", (key) => {
      if (key.code === "KeyV") {
        this._readClippboard();
      }
    });

    this._store = [];
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    /**
     * Register hook on wire --readClipboardClicked to
     *
     */
    this._FBPAddWireHook("--readClipboardClicked", (e) => {
      this._readClippboard();
    });

    this.addEventListener("nav", (e) => {
      this._transformSource(e.detail);
    })
  }

  _readClippboard() {
    navigator.clipboard.readText().then(
        clipText => {
          this._addToStore(clipText);
          this._transformSource(clipText);
        })
  };

  _addToStore(source) {
    this._store.push(source);
    this._FBPTriggerWire("--storeUpdated", this._store);
  }

  _transformSource(source) {
    let tpl = document.createElement("div");
    tpl.innerHTML = source;
    this._FBPTriggerWire("--template", tpl);
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
        }

        :host([hidden]) {
            display: none;
        }

        furo-show-flow {
            height: 100vh;
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
      <furo-button class="clip" autofocus raised primary @-click="--readClipboardClicked">render from clippboard
      </furo-button>
      <div class="navigator">
        <template is="flow-repeat" ƒ-inject-items="--storeUpdated">
          <furo-button raised ƒ-.label="--index" @-click="^^nav(item)"></furo-button>
        </template>

      </div>
      <furo-show-flow id="flow" ƒ-parse-template="--template"></furo-show-flow>

    `;
  }
}

window.customElements.define('view-viz', ViewViz);
