import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import  '@furo/util/furo-keydown.js';

/**
 * `furo-data-menu`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-menu
 * @appliesMixin FBP
 */
export class FuroDataContextMenu extends FBP(LitElement) {


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * ??? Context string
       */
      context: { type: String },
    };
  }

  bindData(menu) {
    this._menuNode = menu;
    // queued trigger context
    if(this._queueTrigger){
      this.trigger(this._context);
      this._queueTrigger = false;
    }
  }

  setContext(ctx){
    this._context = ctx;
  }

  trigger(){
    this.triggerContext(this._context);
  }

  /**
   * triggers the menu with context
   * @param context
   */
  triggerContext(context){
    // enqueue when menuNode is not set
    if(!this._menuNode){
      this._context = context;
      this._queueTrigger = true;
    }else{
      /**
       * @event open-furo-data-menu-requested
       * Fired when context menu was triggered
       * detail payload: {context, menuitem}
       */
      let customEvent = new Event('open-furo-data-menu-requested', {composed:true, bubbles: true});
      customEvent.detail = {context, menu: this._menuNode, selectCallback:this._itemSelectedCallback, initiator:this};
      this.dispatchEvent(customEvent);
    }
  }

  _itemSelectedCallback(item){
    console.log(this)
    console.log(item)

  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --keynav to
     * listen on shift+F10
     */
    this._FBPAddWireHook("--keynav",(e)=>{
       console.log(e)
      // check for shift

      // trigger
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataMenu') || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `;
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
      <furo-keydown key="F10" @-key="--keynav"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-data-context-menu', FuroDataContextMenu);
