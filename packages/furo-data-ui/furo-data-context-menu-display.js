import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';
import '@furo/fbp/flow-repeat.js';
import './lib/furo-data-context-menu-item';

/**
 * `furo-data-menu-display`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-menu-display
 * @appliesMixin FBP
 */
export class FuroDataContextMenuDisplay extends FBP(LitElement) {

  constructor(props) {
    super(props);
    this.borderDistance = 48;

    // for bindData
    this._repeatsChanged = ()=>{
      this._FBPTriggerWire('--menuObject', this.menuObject.menu.children.repeats);
    }

  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    const menucontainer = this.shadowRoot.getElementById('menu');

    window.addEventListener('open-furo-data-menu-requested', (e) => {

      this.menuObject = e.detail;

      // listener is de registred in hideMenu()
      this.menuObject.menu.children.addEventListener("this-repeated-field-changed",this._repeatsChanged);
      this._FBPTriggerWire('--menuObject', this.menuObject.menu.children.repeats);


      this.setAttribute('backdrop', '');
      const initiator = e.detail.initiator;
      let side = 'right';
      let thisCR = this.getBoundingClientRect();


      let initiatorCR = initiator.getBoundingClientRect();

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

      }, 10);


    });


    /**
     * Register hook on wire --backdropClick to
     * remove the menu
     */
    this._FBPAddWireHook('--backdropClick', (e) => {
      this.hideMenu();
    });
  }


  hideMenu() {
    this.removeAttribute('backdrop');
    this._start = false;
    this._show = false;
    this.requestUpdate();


    // unregister the event listener from open-furo-data-menu-requested
    this.menuObject.menu.children.removeEventListener("this-repeated-field-changed",this._repeatsChanged);

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
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
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
        padding: 0 8px;
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
    <div class="clickcatcher" @-click="--backdropClick"></div>
      <div id="menu" ?start="${this._start}" ?show="${this._show}">
         <template is="flow-repeat" ƒ-inject-items="--menuObject">    
        <div class="separator">
            <furo-data-context-menu-item ƒ-bind-data="--itemInjected(*.item)"></furo-data-context-menu-item>
        </div>              
        </template>
      </div>
      
      
      
    `;
  }
}

window.customElements.define('furo-data-context-menu-display', FuroDataContextMenuDisplay);
