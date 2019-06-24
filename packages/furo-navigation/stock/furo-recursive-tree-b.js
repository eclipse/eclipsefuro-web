import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import "@furo/input/furo-bool-icon";
import "@furo/layout/furo-horizontal-flex";
import {FuroRecursiveTree} from "./furo-recursive-tree"

/**
 * `furo-tree`
 * Displays a recursive entity field as a tree
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-tree.html
 * @appliesMixin FBP
 */
class FuroRecursiveTreeB extends FuroRecursiveTree {

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`

  <div class="label" @-click="--labelClicked" @-dblclick=":STOP, --dblclicked">   
  <span class="oc">
    <furo-bool-icon ?hidden="${!this.field.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-bool-icon>
    </span>       
    <span class="name">${this.field.display_name}</span>          
    <span class="desc">${this.field.description}</span>             
  </div> 
  <div class="children">
    <template is="flow-repeat" ƒ-inject-items="--subTreeChanged">
        <furo-recursive-tree-b ƒ-bind-data="--itemInjected(*.item)" ?open="${this._open}" depth="${this.depth + 1}"></furo-recursive-tree-b>
   </template>
   </div>
  
`;
  };


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
            padding-left: 8px;
        }

        :host([hidden]) {
            display: none;
        }

        :host([open]) furo-recursive-tree-b {
            display: block;
        }


        furo-recursive-tree-b {
            display: none;
        }

        :host([rootnode]) {
            overflow: auto;
            position: relative;
            box-sizing: border-box;
        }

        .label {
            line-height: 24px;
            cursor: pointer;
            white-space: nowrap;
            user-select: none;
        }

        .name {

        }

        .desc {
            font-size: smaller;
            white-space: nowrap;
        }


        :host([selected]) .label {
            background-color: var(--hover-color, #eeeeee);
        }

        .label:hover {
            background-color: #eeeeee;
        }
        
        .oc {
            color: var(--separator-color, #b5b5b5);
            width: 16px;
            font-size: 8px;
            display: inline-block;
        }

        .children {
            border-left: 1px solid lightgray;
            margin-left: 3px;
        }


    `
  }


}

window.customElements.define('furo-recursive-tree-b', FuroRecursiveTreeB);
