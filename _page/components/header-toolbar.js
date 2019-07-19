import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout"

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
      myBool: {type: Boolean}
    };
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
            background-color: var(--primary);
            color: var(--on-primary);
            line-height: 54px;
            font-size: 18px;
            padding-left: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        
        a:visited{
            color: unset;
        }

        a {
            padding: 0 var(--spacing-s);
            text-decoration: none;
            color: unset;
            border-bottom: 2px solid var(--primary);
        }

        a[selected]{
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
        <a href="/home" selected>フロー Furo BaseComponents</a>
        <furo-empty-spacer></furo-empty-spacer>
        <a href="/guide">Guide</a>
        <a href="/api">API</a>
        <a href="https://github.com/veith/FuroBaseComponents">
          <furo-icon icon="furo:github"></furo-icon>
        </a>
      </furo-horizontal-flex>

    `;
  }
}

window.customElements.define('header-toolbar', HeaderToolbar);
