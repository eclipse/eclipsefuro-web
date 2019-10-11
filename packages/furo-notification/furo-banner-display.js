import {LitElement,html,css} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-banner-display`
 * Lit element
 *
 *  furo-banner-display should be used together witch furo-banner. you can place those two components into different places.
 *  best place the furo-banner-display on the main site. then you only need one furo-banner-display. it can work with n furo-banner.
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--banner-background-color` | Color of background |`--background` |  #000000
 * `--banner-button-text-color` | Color of button text | `--accent` | #3f83e3

 *
 * @customElement
 * @demo demo-furo-banner-display snackbar demo
 */
class FuroBannerDisplay extends FBP(LitElement) {


  constructor(){
    super();
    this.banner = {"text":"", "dismissButtonText":"", "confirmButtonText":"" ,"icon":"perm-scan-wifi", "banner": {}};
    this._stack=[];
    this.setAttribute("hidden", "");
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    window.addEventListener("open-furo-banner-requested", (e)=>{
      this._show(e.detail);
    });

    window.addEventListener("close-furo-banner-requested", (e)=>{
      this._close();
    });

    this._FBPAddWireHook('--confirmClicked', (e) => {

      if(e.banner) {
        e.banner.action();
        e.banner.closed();
      }
      this._close();
    });

    this._FBPAddWireHook('--dismissClicked', (e) => {

      if(e.banner) {
        e.banner.closed();
      }
      this._close();
    });
  }


  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
            :host {
              width: 100%;
              background-color: var(--banner-background-color, var(--background,#000000));
              display:flex;
              transition: all .3s ease-in-out;
              overflow:hidden;
            }
            
             :host([hidden]) {
              height: 0;
            }
             
             furo-icon {
              margin-right: 10px;
              height: 40px;
              width: 40px;
              display: inline-block;
              
            }
             .wrapper {
              width: 100%;
              border-bottom: solid 1px #e0e0e0;
            }
            
            furo-button {
             margin: 2px 10px 0 20px;
             color: var(--banner-button-text-color, --accent, #3f83e3));
              --on-surface: var(--accent);
              margin-right: 5px;
            }
            
            span {
              display: inline-block;
              line-height: 40px;
            }
            
            .button {
              display: flex;
              align-self: flex-end;
              justify-content:flex-end;
            }

        `;
  }

  /**
   *@private
   */
  static get properties(){

    return {
      banner: {
        type: Object
      },
      _stack: {
        type: Array
      },
      _isOpen: {
        type: Boolean
      },

      _timer: {
        type: Object
      }
    };
  }

  /**
   * show
   * @param b
   * @private
   */
  _show(b) {

    this._pushToStack(b);

    if( !this._isOpen ) {

      this.__show();
    }
  }

  /**
   *
   * @param d {Object} banner
   * @private
   */
  _pushToStack(b) {

    let obj = {};
    obj.text = b.text;
    obj.dismissButtonText = b.dismissButtonText;
    obj.confirmButtonText = b.confirmButtonText;
    obj.icon = b.icon;
    obj.banner = b;
    this._stack.push(obj);
  }

  /**
   *
   * @private
   */
  __show() {

    if (this._stack.length > 0) {

      this.banner = this._stack[0];

      this.removeAttribute("hidden");

      this.requestUpdate();
      this._isOpen = true;
    }
  }

  /**
   * close the CURRENT banner
   */
  _close() {

    if(this._stack.length >1) {

      this.setAttribute("hidden", "");

      this._stack.shift();
      if(this._stack.length  > 0 ) {
        let self = this;
        this._timer = setInterval(function () {
          clearInterval(self._timer);
          self.__show();

        }, 300);
      }else {
        this._isOpen = false;
      }
    }
    else {
      this._stack.shift();
      this.setAttribute("hidden", "");
      this._isOpen = false;
    }
  }



  /**
   * @private
   * @returns {TemplateResult}
   */
  render(){
    return html`
          <div class="wrapper">
            <furo-icon icon="${this.banner.icon}"></furo-icon>
            <span>${this.banner.text}</span>
            <div class="button">
                <furo-button label="${this.banner.dismissButtonText}" @-click="--dismissClicked"></furo-button>          
                <furo-button label="${this.banner.confirmButtonText}" @-click="--confirmClicked"></furo-button>   
            </div>
          </div>
   
        `;
  }

}

customElements.define('furo-banner-display', FuroBannerDisplay);
