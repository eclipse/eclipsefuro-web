import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-vertical-scroller";


/**
 * `furo-doc-menu`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-doc-menu.html
 * @appliesMixin FBP
 */
class FuroDocMenu extends FBP(LitElement) {

  constructor() {
    super();
  }


  analysis(analysis) {
    this._FBPTriggerWire("--elements", analysis.elements);
    this._FBPTriggerWire("--classes", analysis.classes);

    // trigger first item
    let firstItem = this.shadowRoot.querySelector("li")
    if(firstItem){
      firstItem.click();
    }
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
            height: 100%;
        }

        :host([hidden]) {
            display: none;
        }

        h3 {

            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: #717171;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            line-height: 30px;
            cursor: pointer;
        }
        li:hover {
             color: rgb(12, 107, 22);
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
      
        <h3>Elements</h3>
        <ul>
          <template is="flow-repeat" ƒ-inject-items="--elements">
            <li @-click="^^element(item)">&lt;<span ƒ-.inner-text="--item(*.tagname)"></span>&gt;</li>
          </template>
        </ul>     
        <h3>Classes</h3>
        <ul>
          <template is="flow-repeat" ƒ-inject-items="--classes">
            <li @-click="^^class(item)"><span ƒ-.inner-text="--item(*.name)"></span></li>
          </template>
        </ul>
      
    `;
  }
}

window.customElements.define('furo-doc-menu', FuroDocMenu);
