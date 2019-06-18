import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import "@furo/layout/furo-horizontal-flex";
import {FuroTree} from "./furo-tree"
/**
 * `furo-tree`
 * Displays a recursive entity field as a tree
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-tree.html
 * @appliesMixin FBP
 */
class FuroTreeX extends FuroTree {

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`

  <furo-horizontal-flex class="label" @-dblclick=":STOP, --openclose">   
    <span class="oc oc${this.depth}" @-click="--openclose">${this._ocSymbol}</span>    
    <div flex class="name" title="${this.field.description}">${this.field.display_name}</div>          
  </furo-horizontal-flex> 
    <template is="flow-repeat" ƒ-inject-items="--subTreeChanged">
        <furo-tree ƒ-bind-data="--itemInjected(*.item)" ?open="${this._open}" depth="${this.depth + 1}" ?deep-open="${this.deepOpen}"></furo-tree>
   </template>
  
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
        }

        :host([hidden]) {
            display: none;
        }

        :host([open]) furo-tree, :host([deep-open]) furo-tree {
            display: block;
        }


        furo-tree {
            display: none;
        }

        :host(.rootnode) {
            overflow: auto;
            position: relative;
        }

        .label {
            line-height: 24px;
            cursor: pointer;
        }

        .name {
            white-space: nowrap;
        }
 

        .label:hover {
            background-color: #eeeeee;
        }

        .oc {
            color: var(--separator-color, #b5b5b5);
            display: inline-block;
            width: 16px;
        }

        .oc0 {
            padding-left: 1em;
        }

        .oc1 {
            padding-left: 2em;
        }

        .oc2 {
            padding-left: 3em;
        }

        .oc3 {
            padding-left: 4em;
        }

        .oc4 {
            padding-left: 5em;
        }

        .oc5 {
            padding-left: 5.5em;
        }

        .oc6 {
            padding-left: 6em;
        }




    `
  }




}

window.customElements.define('furo-tree-x', FuroTreeX);
