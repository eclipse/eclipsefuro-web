import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"
import {FieldNode} from "@furo/data/lib/FieldNode";
import "@furo/layout/furo-horizontal-flex";
import "@furo/data-input/furo-bool-icon";
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"

/**
 * `furo-recursive-tree`
 * Displays a recursive entity field as a tree
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-recursive-tree.html
 * @appliesMixin FBP
 */
export class FuroRecursiveTree extends FBP(LitElement) {

  constructor() {
    super();
    this.depth = 0;
    this._open = this.getAttribute("open") !== null;
    this.field = {};
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
      selected: {type: Boolean, reflect: true},
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

  <furo-horizontal-flex class="label" @-click="--labelClicked" @-dblclick=":STOP, --dblclicked">   
        
    <span class="oc oc${this.depth}">
    <furo-bool-icon ?hidden="${!this.field.children.repeats.length}" ƒ-toggle="--dblclicked" ƒ-bind-data="--fieldOpen"></furo-bool-icon>
    </span> 
    <div flex class="name" title="${this.field.description}">${this.field.display_name}</div>          
  </furo-horizontal-flex> 
    <template is="flow-repeat" ƒ-inject-items="--subTreeChanged">
        <furo-recursive-tree ƒ-bind-data="--itemInjected(*.item)" ?open="${this._open}" depth="${this.depth + 1}"></furo-recursive-tree>
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

        :host([open]) furo-recursive-tree {
            display: block;
        }


        furo-recursive-tree {
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
            user-select: none;
        }

        .name {
            white-space: nowrap;
        }


        :host([selected]) .label {
            background-color: var(--hover-color, #eeeeee);
        }

        .label:hover {
            background-color: var(--hover-color, #eeeeee);
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


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()

    this._FBPAddWireHook("--labelClicked", (e) => {
      // dispatch a selection
      this.field.dispatchNodeEvent(new NodeEvent('tree-node-selected', this, true));
      this.field._isSelected.value = true;
    });

  }


  bindData(d) {
    if (d === undefined) {
      return
    }

    this.field = d;

    // open field if entity contains a field open with true
    if (!this.field.open) {
      this.field.addChildProperty("open", new FieldNode(this.field, {type: "Boolean"}, "open"));
      this.field.open.value = this._open;
    }

    // _isSelected
    if (!this.field._isSelected) {
      this.field.addChildProperty("_isSelected", new FieldNode(this.field, {type: "Boolean"}, "_isSelected"));
    }

    this._FBPTriggerWire("--fieldOpen", this.field.open);


    this.field.open.addEventListener("field-value-changed", (e) => {

      this._open = !!this.field.open.value;
    });

    this.field._isSelected.addEventListener("field-value-changed", (e) => {

      this.selected = !!this.field._isSelected.value;

      //Notify about selection
      /**
       * @event node-selected
       * Fired when
       * detail payload:
       */
      let customEvent = new Event('node-selected', {composed: true, bubbles: true});
      customEvent.detail = this.field;
      this.dispatchEvent(customEvent);
      if (this.field.children.repeats.length === 0) {
        /**
         * @event branch-selected
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('branch-selected', {composed: true, bubbles: true});
        customEvent.detail = this.field;
        this.dispatchEvent(customEvent);
      } else {
        /**
         * @event leaf-selected
         * Fired when
         * detail payload:
         */
        let customEvent = new Event('leaf-selected', {composed: true, bubbles: true});
        customEvent.detail = this.field;
        this.dispatchEvent(customEvent);
      }
    });

    // connect the dom node with the entity object
    this.field._treeNode = this;
    // Just update element itself, do not bubble
    this.field.addEventListener("field-value-changed", (e) => {
      // track changes on this field only
      if (e.target.__parentNode === this.field) {
        this.requestUpdate();
      }

    });


    // forward changed children
    this.field.children.addEventListener('repeated-fields-changed', (e) => {
      // updates wieder einspielen
      this._FBPTriggerWire('--subTreeChanged', e.detail);
    });


    // init
    this._FBPTriggerWire('--subTreeChanged', this.field.children.repeats);

    // check if this node is the root node
    if (this.field.__parentNode.__parentNode === null) {
      this.setAttribute("rootnode", "");
      this.setAttribute("tabindex", 0);

      // Internal Event, when a node gets selected
      this.field.addEventListener("tree-node-selected", (e) => {
        // broadcast deselect
        this.field.broadcastEvent(new NodeEvent('tree-node-unselection-requested', this));
        this._selectedField = this.field;
      });

      // keyboard navigation on top node only
      this.addEventListener("keydown", (event) => {
        let key = event.key || event.keyCode;

        switch (key) {
          case "Enter":
            event.preventDefault();

            break;
          case "ArrowDown":
            event.preventDefault();
            console.log("ArrowDown")
            break;
          case "ArrowUp":
            event.preventDefault();
            console.log("ArrowUp")
            break;

          case "ArrowLeft":
            event.preventDefault();
            console.log("ArrowLeft")
            break;
          case "ArrowRight":
            event.preventDefault();
            console.log("ArrowRight")
            break;
        }


      });
    }

    this.field.addEventListener("tree-node-unselection-requested", (e) => {
      this.field._isSelected.value = false;
    });


    this._open = !!this.field.open.value;
    this.requestUpdate();
  }


}

window.customElements.define('furo-recursive-tree', FuroRecursiveTree);
