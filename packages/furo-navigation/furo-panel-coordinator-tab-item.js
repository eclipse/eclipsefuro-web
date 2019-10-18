import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {NodeEvent} from "@furo/data/lib/EventTreeNode.js"
import "@furo/layout/furo-ripple"

/**
 * `furo-mini-tab-item`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-mini-tab-item.html
 * @appliesMixin FBP
 */
class FuroPanelCoordinatorTabItem extends FBP(LitElement) {

  constructor() {
    super();
    this.selected = false;
    this.hovered = false;
    this.inedit = false;
    this.haserror = false;
    this.addEventListener("click", (e) => {
      this.field.selectItem();
    });

  }


  bindData(fieldNode) {
    this.field = fieldNode;
    this.field.addEventListener("this-node-selected", (n) => {
      this.selected = true;
    });

    this.field.addEventListener("tree-node-unselection-requested", (n) => {
      this.selected = false;
    });
    this.field.addEventListener("modified", (n) => {
      this.inedit = true;
    });
    this.field.addEventListener("has-error", (n) => {
      this.haserror = true;
    });

  }

  _closeTab(e) {

    e.stopPropagation();
    this.field.dispatchNodeEvent(new NodeEvent('close-requested', this, false));
  }

  /**
   * @private
   * @return {Object}
   */
  static
  get properties() {
    return {
      /**
       * Description
       */
      selected: {type: Boolean, reflect: true},
      haserror: {type: Boolean, reflect: true},
      inedit: {type: Boolean, reflect: true}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady(){
    super._FBPReady();
    //this._FBPTraceWires();
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static
  get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
            line-height: 38px;

            border-bottom: 2px solid var(--surface, #FAFAFA);
            transition: all 0.5s;
            cursor: pointer;
            position: relative;
            min-width: 136px;

            font-family: "Roboto", "Noto", sans-serif;

            color: var(--on-surface);
            
            text-transform: uppercase;

        }


        :host([inedit]) {
            font-style: italic;
        }

        :host([haserror]) {
            color: var(--error, red);
        }

        :host([hidden]) {
            display: none;
        }

        :host([selected]) {
            border-bottom: 2px solid var(--separator, #686868);
        }

       
        .label{
            padding: 0 var(--furo-button-padding, var(--spacing-s, 16px));;
            text-align: center;
        }
        .close{
            color:var(--separator)
        }  
        
        .close:hover{
            color:var(--primary)
        }
        furo-icon{
            margin-bottom: 2px;
            margin-right: var(--spacing-s);
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
   <div flex class="label"> <furo-icon ?hidden="${this.noicon}" icon="${this.field.icon}" ?error="${this.field.has_error._value}"></furo-icon> ${this.field.display_name} </div>
   
   <furo-ripple></furo-ripple>
</furo-horizontal-flex>
       
    `;
  }
}

window.customElements.define('furo-panel-coordinator-tab-item', FuroPanelCoordinatorTabItem);
