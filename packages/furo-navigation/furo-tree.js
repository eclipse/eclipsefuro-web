import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat"

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
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
  ${this._objectReady ? html`<div>+ ${this.field.display_name.value} <span @-click="--add">++</span></div>` : html``}
  <div class="subs">
  <template is="flow-repeat" ƒ-inject-items="--subTreeChanged">
        <furo-tree ƒ-bind-data="--itemInjected(*.item)" open></furo-tree>
   </template>
   </div>
`;
  };


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      open: {type: Boolean}
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
        }

        :host([hidden]) {
            display: none;
        }

        :host([open]) .subs {
            display: block;
        }

        .subs {
            display: none;
            padding-left: 4px;
        }
    `
  }

  bindData(d) {
    if (d === undefined) {

      return
    }

    this.field = d;


    this.field.addEventListener("field-value-changed", (e) => {
      e.cancelBubble = true;
      this.requestUpdate();
    });

    this.field._dom = this;

    this.field.children.addEventListener('repeated-fields-changed', (e) => {
      // updates wieder einspielen
      this._FBPTriggerWire('--subTreeChanged', e.detail);
      this.requestUpdate();
    });


    // init
    this._FBPTriggerWire('--subTreeChanged', this.field.children.repeats);
    this._objectReady = true;

    this._FBPAddWireHook('--add',()=>{
      this.field.children.add({display_name:"new"})
    })
  }


}

window.customElements.define('furo-tree', FuroTree);
