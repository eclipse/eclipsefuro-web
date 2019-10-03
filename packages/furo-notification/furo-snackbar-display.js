import {LitElement,html,css} from 'lit-element';
import {FBP} from '@furo/fbp';
import "@furo/input";

/**
 * `furo-snackbar-display`
 * Lit element
 *
 * @customElement
 * @demo demo/index.html
 */
class FuroSnackbarDisplay extends  FBP(LitElement) {


  constructor(){
    super();
    this._stack = [];

    this.displayObj = {"labelText":"", "actonButtonText":"","snackbar":{}};
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    this._snackbar = this.shadowRoot.getElementById("snackbar");

    this._FBPAddWireHook('--actionClicked', (e) => {

      if(e.snackbar) {
        e.snackbar.action();
      }
      this._close(e);
    });

    this._FBPAddWireHook('--closeClicked', (e) => {

      if(e.snackbar) {
        e.snackbar.closed();
      }
      this._close(e);
    });

    this._FBPTraceWires()
  }


  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
            :host {
              position: absolute;
              bottom: 0;
              width: 100%;

            }
            .hide {
              display: none;
            }
            #snackbar {
              min-width: 190px;
              font-size: 14px;
              line-height: 14px;
              background-color: #333;
              opacity:0;
              margin: auto;              
              -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
              box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
              border-radius: 4px;
            }
            
            .label {
              color: hsla(0,0%,100%,.87);
              display: inline-block;
              padding: 14px 16px;
            }
            
            #snackbar[stacked] .label {
              display: block;
            }
            
            #snackbar[stacked] .button{
              width: 100%;
            }
            
            .button {
              display: inline-block;
              text-align: right;
            }
            
            furo-button {
              color: #bb86fc;
              --on-surface: #bb86fc;
            }
            
            .center {
              margin: auto;
            }
            
            #snackbar[right] {
              float: right;
            }
            
            #snackbar[left]  {
              float: left;
            }
        `;
  }

  /**
   *@private
   */
  static get properties(){

    return {
      displayObj: {
        type: Object
      },

      _stack: {
        type: Array
      },

      /**
       * virsule element snackbar
       */
      _snackbar: {
        type: Object
      },

      _timer: {
        type: Object
      }
    };
  }

  /**
   * show snackbar
   * @param s
   */
  show(s) {

    this._pushToStack(s);

    if( !this.displayObj.isOpen ) {

      this._show();
    }
  }

  /**
   *
   * @param d {Object} snackbar
   * @private
   */
  _pushToStack(s) {

    let obj = {};
    obj.labelText = s.labelText;
    obj.icon = s.icon;
    obj.actionButtonText = s.actionButtonText;
    obj.snackbar = s;
    obj.stacked = s.stacked;
    obj.positionLeft = s.positionLeft;
    obj.positionRight = s.positionRight;
    obj.size = s.size;
    obj.maxSize = s.maxSize;

    this._stack.push(obj);
  }

  _show() {

    if(this._stack.length > 0 ) {

      this.displayObj = this._stack[0];

      this._snackbar.classList.remove("hide");

      this.fadeIn(this.shadowRoot.getElementById("snackbar"));

      this.requestUpdate();
      this.displayObj.snackbar.isOpen = true;
      this.displayObj.isOpen = true;

      let timeoutInMs = this.displayObj.snackbar.timeoutInMs;

      if(timeoutInMs > 0) {
        let self = this;
        this._timer = setInterval(function () {

          clearInterval(self._timer);
          self._snackbar.classList.add("hide");

          self._stack.shift();
          if(self._stack.length  > 0 ) {

            self._show();
          }else {
            self.displayObj.snackbar.isOpen = false;
            self.displayObj.isOpen = false;
          }

        }, timeoutInMs);

      }
      else {
        this._stack.shift();
      }
    }
  }

  _close(displayObj) {
    clearInterval(this._timer);

    if(this._stack.length >1) {

      this._snackbar.classList.add("hide");

      this._stack.shift();
      if(this._stack.length  > 0 ) {

        this._show();
      }else {
        this.displayObj.snackbar.isOpen = false;
        this.displayObj.isOpen = false;
      }
    }
    else {
      this._stack.shift();
      this._snackbar.classList.add("hide");
      this.displayObj.snackbar.isOpen = false;
      this.displayObj.isOpen = false;
    }
  }

  fadeIn(element) {
    let op = 0.1;  // initial opacity
    let timer = setInterval(function () {

      if (op >= 1){

        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.2;
    }, 10);
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render(){
    return html`
      <div id="snackbar" class="hide" 
          ?stacked="${this.displayObj.stacked}"
          ?left="${this.displayObj.positionLeft}" 
          ?right="${this.displayObj.positionRight}" style="width:${this.displayObj.size}" >
          <div class="label"> ${this.displayObj.labelText}</div>
          <div class="button">
            <furo-button label="${this.displayObj.actionButtonText}" @-click="--actionClicked(displayObj)"></furo-button>
            <furo-button icon="${this.displayObj.icon}" @-click="--closeClicked(displayObj)"></furo-button>
          </div>

      </div>
        `;
  }

}

customElements.define('furo-snackbar-display', FuroSnackbarDisplay);
