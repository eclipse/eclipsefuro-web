import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import {FieldNode} from "@furo/data/lib/FieldNode";

/**
 * `furo-tree`
 * Displays a recursive entity field as a tree
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-tree.html
 * @appliesMixin FBP
 */
class FuroTree extends FBP(LitElement) {

  constructor() {
    super();
    this.deepOpen = false;
    this.depth = 0;
    this._open = false;
    this.field = {};
    this._ocSymbol = "▶";
    this._FBPAddWireHook("--openclose", () => {
      this.field.open.value = !this.field.open.value;
    });
  }


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Open children of tree item
       */
      _open: {type: Boolean, reflect: true, attribute: "open"},
      deepOpen: {type: Boolean, attribute: "deep-open"},
      depth: {type: Number}
    };
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`

  <div class="label" @-dblclick=":STOP, --openclose">   
    <span class="oc oc${this.depth}" @-click="--openclose">${this._ocSymbol}</span>${this.field.display_name}  ${this.field.description}  
  </div> 
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
            white-space: nowrap;
            display: inline-block;
            min-width: 100%;
            padding-right: 8px;
        }


        .label:hover {
            background-color: #eeeeee;
        }
 
        .oc {
            color: var(--separator-color, #b5b5b5);
            display: inline-block;
            width: 16px;
            padding: 0 4px;
        }
        
        .oc0{
            padding-left: 8px;
        }

        .oc1{
            padding-left: 16px;
        }
        
        .oc2{
            padding-left: 24px;
        }
        
        .oc3{
            padding-left: 32px;
        }
        
        .oc4{
            padding-left: 40px;
        }

        .oc5{
            padding-left: 44px;
        }

        .oc6{
            padding-left: 48px;
        }




    `
  }


  bindData(d) {
    if (d === undefined) {
      return
    }

    this.field = d;

    // open field if entity contains a field open with true
    if (!this.field.open) {
      this.field.addChildProperty("open", new FieldNode(this.field, {type: "Boolean"}, "open"))
    }
    this.field.open.addEventListener("field-value-changed", (e) => {
      e.cancelBubble = true;
      this._open = !!this.field.open.value;
      this._updateSymbol();

    });

    // connect the dom node with the entity object
    this.field._treeNode = this;

    // render on changed data
    this.field.addEventListener("field-value-changed", (e) => {
      e.cancelBubble = true;
      this.requestUpdate();
    });

    // forward changed children
    this.field.children.addEventListener('repeated-fields-changed', (e) => {

      this._updateSymbol();

      // updates wieder einspielen
      this._FBPTriggerWire('--subTreeChanged', e.detail);

    });


    // init
    this._FBPTriggerWire('--subTreeChanged', this.field.children.repeats);
    this._updateSymbol();

    // check if this node is the root node
    if (this.field.__parentNode.__parentNode === null) {
      this.classList.add("rootnode")


    }
  }


  _updateSymbol() {
    if (this.field.children.repeats.length === 0) {
      this._ocSymbol = " "
    } else {
      this._ocSymbol = this.deepOpen || this._open ? "▼" : "▶";
    }
  }


}

window.customElements.define('furo-tree', FuroTree);
