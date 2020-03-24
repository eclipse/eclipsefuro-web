import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/fbp/flow-repeat.js';
import '@furo/util/furo-navigation-pad.js';
import './furo-data-context-menu-item';

/**
 * `furo-data-menu-display`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-menu-display
 * @appliesMixin FBP
 */
export class FuroDataContextSubmenu extends FBP(LitElement) {

  constructor(props) {
    super(props);
    this.borderDistance = 48;



  }


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Depth of the submenu
       */
      depth: { type: Number },
    };
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    /**
     * Register hook on wire --nav to
     * listen to the navigation pad
     */
    this._FBPAddWireHook('--nav', (e) => {
      this.triggerNavigation(e);
    });



    /**
     * Listen to item-selected to pass it back to furo-context-menu (callback)
     *
     */
    this.addEventListener("item-selected",(e)=>{
      this.hideMenu();
    });

  }

  init(e, display){

    this.menuObject = e.detail;

    this._repeater = this.shadowRoot.getElementById('repeater');

    const menucontainer = this.shadowRoot.getElementById('menu');

    this._FBPTriggerWire('--menuObject', this.menuObject.menu.children.repeats);



    this.initiator = e.detail.initiator;

    let side = 'right';
    let thisCR = display.getBoundingClientRect();


    let initiatorCR = this.initiator.getBoundingClientRect();

    menucontainer.style.removeProperty('maxHeight');
    menucontainer.style.removeProperty('bottom');
    menucontainer.style.removeProperty('height');
    menucontainer.style.removeProperty('left');
    menucontainer.style.removeProperty('right');


    // find the ideal position and direction
    const initiatorCoordinates = {
      left: { x: initiatorCR.left, y: (initiatorCR.top + initiatorCR.bottom) / 2 },
      right: { x: initiatorCR.right, y: (initiatorCR.top + initiatorCR.bottom) / 2 },
    };
    if (initiatorCoordinates.left.x > thisCR.width - initiatorCoordinates.right.x) {
      side = 'left';
      menucontainer.style.right = (thisCR.width - initiatorCoordinates.left.x) + 'px';
      menucontainer.style.top = initiatorCoordinates.left.y + 'px';
    } else {
      side = 'right';
      menucontainer.style.removeProperty('right');
      menucontainer.style.left = initiatorCoordinates.right.x + 'px';
      menucontainer.style.top = initiatorCoordinates.right.y + 'px';
    }


    // calculate container positions from bottom when the initator is in the under third of the screen
    let onUpperSide = true;
    if (initiatorCoordinates.right.y * 2.5 > thisCR.height) {
      // we are in the under half of the screen
      menucontainer.style.removeProperty('top');
      menucontainer.style.bottom = (thisCR.height - initiatorCoordinates.right.y) + 'px';
      onUpperSide = false;
    }

    this._start = true;
    this.requestUpdate();


    // delay fade in effect set height
    setTimeout(() => {
      const menucontainerCr = menucontainer.getBoundingClientRect();

      let maxHeight = thisCR.height - initiatorCoordinates.left.y - this.borderDistance;
      if (!onUpperSide) {
        maxHeight = initiatorCoordinates.left.y - this.borderDistance;
      }

      menucontainer.style.maxHeight = maxHeight + 'px';
      // max height of ctxmenu should  not go outside the screen
      if (menucontainerCr.height > maxHeight) {
        menucontainer.style.height = maxHeight + 'px';
      }

      this._show = true;
      this.requestUpdate();

      setTimeout(() => {
        menucontainer.focus();
      }, 100);

    }, 10);


  }

  hideMenu() {
    this.removeAttribute('backdrop');
    this._start = false;
    this._show = false;
    this.initiator.parentNode.parentNode.focus()
    this.requestUpdate();


  }


  /**
   * Interface for the furo navigation pad
   * @param key
   */
  triggerNavigation(key) {
    switch (key) {
      case 'Enter':
        this._repeater.triggerSelected(key);
        break;

      case 'ArrowDown':
        this._repeater.selectNextIndex();
        break;
      case 'ArrowUp':
        this._repeater.selectPreviousIndex();
        break;
      case 'PageDown':

        break;
      case 'PageUp':
        this._repeater.select(0);
        break;

      case 'End':
        this.focusLast();
        break;
      case 'Home':
        this._repeater.select(0);
        break;

      case 'ArrowLeft':
// closes subnav
        this._repeater.triggerSelected(key);
        break;

      case 'ArrowRight':
// opens subnav
        this._repeater.triggerSelected(key);
        break;

      case'Escape':
// closes the menu
        this.hideMenu();
        break;
    }
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDataMenuDisplay') || css`

      :host {
        z-index: 10;
      }

      :host([backdrop]) {
        display: block;
      }

      #menu {
        position: absolute;
        display: none;
        transition: opacity 350ms;
        opacity: 0;
        background-color: var(--surface);
        overflow: auto;
        border-radius: 4px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12),
        0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      #menu[start] {
        display: block;
        opacity: 0;
      }

      #menu[show] {
        opacity: 1;
        display: block;
      }

      .clickcatcher {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      /*  only focus is needed, because the menu closes on select */
      furo-data-context-menu-item:hover, furo-data-context-menu-item[focused] {
        background-color: rgba(var(--primary-rgb), var(--state-hover));
        color: var(--primary);
      }



    `;
  }


  /**
   * The host is the backdrop
   *
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
    <div id="menu" tabindex="0" ?start="${this._start}" ?show="${this._show}" @-mousefocus="--mousefocus"  >
    <!-- the wires --itemSelected and --itemDeSelected means focus, they come from flow-repeat -->
       <template id="repeater" is="flow-repeat" ƒ-inject-items="--menuObject" ƒ-select="--mousefocus">    
      <div class="separator">       
          <furo-data-context-menu-item ƒ-index="--index" ƒ-select="--trigger" ƒ-set-focused="--itemSelected"  ƒ-unset-focused="--itemDeSelected"          
          ƒ-bind-data="--itemInjected(*.item)"></furo-data-context-menu-item>
      </div>              
      </template>
      <furo-navigation-pad @-navigated="--nav"></furo-navigation-pad>
    </div>
      
      
      
    `;
  }
}

window.customElements.define('furo-data-context-submenu', FuroDataContextSubmenu);
