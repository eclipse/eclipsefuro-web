import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/util/furo-keydown.js';

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
      /**
       * set this for condensed mode
       */
      condensed:{type:Boolean}
    };
  }

  bindData(menu) {
    this._menuNode = menu;
    // queued trigger context
    if (this._queueTrigger) {
      this.trigger(this._context);
      this._queueTrigger = false;
    }
  }

  setContext(ctx) {
    this._context = ctx;
  }

  trigger(byKeyboard) {
    this.triggerContext(this._context,byKeyboard);
  }

  /**
   * triggers the menu with context
   * @param context
   */
  triggerContext(context,byKeyboard) {
    // enqueue when menuNode is not set
    if (!this._menuNode) {
      this._context = context;
      this._queueTrigger = true;
    } else {
      /**
       * @event open-furo-data-menu-requested
       * Fired when context menu was triggered
       * detail payload: {context, menuitem}
       */
      let customEvent = new Event('open-furo-data-menu-requested', { composed: true, bubbles: true });
      customEvent.detail = {
        context, menu: this._menuNode, selectCallback:
          (item) => {
            /**
             * @event menu-item-selected
             * Fired when a menu item is selected
             * detail payload: the menu node
             */
            let customEvent = new Event('menu-item-selected', { composed: true, bubbles: true });
            customEvent.detail = item.detail;
            this.dispatchEvent(customEvent);

            // focus the childnode
            const slottContents = this.shadowRoot.firstElementChild.assignedElements()
            if(slottContents.length > 0){
              setTimeout(()=>{
                slottContents[0].focus();
              },10)

            }

          }
        , initiator: this
        , condensed:this.condensed
      };

      customEvent.byKeyboard = byKeyboard;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --keynav to
     * listen on shift+F10 to open by keyboard
     */
    this._FBPAddWireHook('--keynav', (e) => {
      // trigger
      this.trigger(true);
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
      <furo-keydown shift key="F10" @-key="--keynav"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-data-context-menu', FuroDataContextMenu);
