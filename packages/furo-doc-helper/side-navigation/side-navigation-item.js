import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `side-navigation-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/side-navigation-item.html
 * @appliesMixin FBP
 */
class SideNavigationItem extends FBP(LitElement) {

  constructor() {
    super();
    this.basePath = this.getAttribute("base-path");
    //forward click to a
    this.addEventListener("click", (e) => {
      this._FBPTriggerWire("--click", e);
    })
  }

  injectItem(item) {
    this.item = item;
    this.requestUpdate();
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
            display: list-item;
            min-height: 40px;
            line-height: 40px;
            margin-bottom: 4px;
            color: var(--on-surface);
            letter-spacing: .01785714em;
            font-size: .875rem;
            font-weight: 500;
            padding: 0 var(--spacing-xs);
            transition: all 0.2s;
        }

        :host([hidden]) {
            display: none;
        }


        :host(:hover) {
            background-color: var(--secondary);
            border-radius: 4px;
            color: var(--on-secondary);
            cursor: pointer;
        }


        a[disabled], a[disabled] li {
            color: var(--disabled-color);
            cursor: not-allowed;
            pointer-events: none;
        }

        a[disabled]:hover, a[disabled] li:hover {
            color: var(--disabled-color);
            background-color: transparent;
            cursor: not-allowed;
        }

        span {
            display: inline-block;

            vertical-align: top;
            width: 176px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        a {
            text-decoration: none;
            outline: none;
        }

        furo-icon {
            margin-right: var(--spacing);
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
      
        <a tabindex="-1" href="${this.basePath}${this.item.href}" ƒ-click=":STOP,--click"></a>     
<furo-icon icon="${this.item.icon}"></furo-icon>${this.item.label}
    `;
  }
}

window.customElements.define('side-navigation-item', SideNavigationItem);
