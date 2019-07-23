import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout"
import {nav} from "../api/nav_config";

/**
 * `header-toolbar`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/header-toolbar.html
 * @appliesMixin FBP
 */
class HeaderToolbar extends FBP(LitElement) {

  constructor() {
    super();
    this.selected = "home"
  }


  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
    this._FBPAddWireHook("--pathChanged", (e) => {
      if(e.pathSegments[0]){
        this.selected = e.pathSegments[0];
      }

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
      selected: {type: String, reflect: true}
    };
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
            background-color: var(--primary);
            color: var(--on-primary);
            line-height: 54px;
            font-size: 18px;
            padding-left: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

        a:visited {
            color: unset;
        }

        a {
            padding: 0 var(--spacing-s);
            text-decoration: none;
            color: unset;
            border-bottom: 2px solid var(--primary);
        }

        :host([selected="home"]) a[name="home"],
        :host([selected="api"]) a[name="api"],
        :host([selected="guide"]) a[name="guide"]
        {
            border-bottom: 2px solid var(--on-secondary);
        }
       

        a:hover {
            color: var(--on-primary-variant);
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
      <furo-horizontal-flex>
        <a name="home" href="/home">フロー Furo BaseComponents</a>
        <furo-empty-spacer></furo-empty-spacer>
        <a name="guide" href="/guide/md/fbp-overview/">Guide</a>
        <a name="api" href="/api/doc/input/">API</a>
        <a href="https://github.com/veith/FuroBaseComponents">
          <furo-icon icon="furo:github"></furo-icon>
        </a>
      </furo-horizontal-flex>
      <furo-location @-location-changed="--pathChanged"></furo-location>
    `;
  }
}

window.customElements.define('header-toolbar', HeaderToolbar);
