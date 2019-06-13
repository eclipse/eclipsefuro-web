import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import '@furo/fbp/flow-repeat.js';

/**
 * `markdown-menu`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/markdown-menu.html
 * @appliesMixin FBP
 */
class MarkdownMenu extends FBP(LitElement) {

  inject(nodeList) {
    let menuItems = [...nodeList].map((node) => {
      return {"display_name": node.textContent, "id": node.id}
    })

    this._FBPTriggerWire("--listReceived", menuItems)
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

        li {
            color: #333;
            padding: 0 24px;
            display: block;
            text-decoration: none;
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        ul {
            list-style: none;
            margin: 0 8px 0 8px;
            padding: 8px 0;
            border-bottom: 1px solid var(--llm-color);
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
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--listReceived">
            <li ƒ-.inner-text="--item(*.display_name)" @-click="^^navigate-clicked(item.id)"></li>
        </template>
      </ul>
    `;
  }
}

window.customElements.define('markdown-menu', MarkdownMenu);
