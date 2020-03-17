import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme.js"
import {FBP} from "@furo/fbp";

/**
 * `furo-resizer`
 *  container which let you resize its width.
 *
 *  Doubleclick on the handler to reset the width.
 *  You need a counter part which flexes.
 *
 *```html
 *   <furo-horizontal-flex>
 *     <div flex> the flexible part </div>
 *     <!-- you have to set at leas one handle to resize the content -->
 *     <furo-resizer righthandle remember="logv" minwidth="280" maxwidth="780">
 *       <some-content></some-content>
 *     </furo-resizer>
 *   </furo-horizontal-flex>
 *```
 *
 * @summary resizable box
 * @demo demo-furo-resizer  Basic usage
 * @customElement
 * @appliesMixin FBP
 */
class FuroResizer extends FBP(LitElement) {

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {

      /**
       * add a handle to the left side
       */
      lefthandle: {type: Boolean},

      /**
       * add a handle to the right side
       */
      righthandle: {type: Boolean},

      /**
       * remember the size after resizing.
       * Give the id for the rememberer, you can use the id on different views
       */
      remember: {type: String},
      /**
       * Set the maximal width of the resizer
       */
      maxwidth:{type:Number},
      /**
       * Set the minimal width of the resizer
       */
      minwidth:{type:Number},

    };
  }


  constructor(props) {
    super(props);


    /**
     * remove the listeners
     * @private
     */
    this._unregister = () => {
      window.removeEventListener("mousemove", this._movementHandler);
      window.removeEventListener("mouseup", this._unregister);
      // set cursor to avoid flickering
      this.parentNode.style.cursor = "";

    };

    /**
     * capture the mouse movement and resize the width
     * @param e MouseEvent
     * @private
     */
    this._movementHandler = (e) => {
      const delta = (e.screenX - this._positions.x) * this._handleLRM;

      // todo request animation frame
      let width = this._startwidth + delta;

      if(this.minwidth && width +3 < this.minwidth){
        width = this.minwidth;
        this._unregister();
      }
      if(this.maxwidth && width -3   > this.maxwidth){
        width = this.maxwidth;
        this._unregister();
      }

      this.resizer.style.width = `${width}px`;
      if (this.remember) {
        sessionStorage.setItem(this.remember, width)
      }

    };

    /**
     * register the left handler
     * @param e
     * @private
     */
    this._startTrackingLeft = (e) => {
      this._handleLRM = -1;
      this._startTracking(e);
    };

    /**
     * register the right handler
     * @param e
     * @private
     */
    this._startTrackingRight = (e) => {
      this._handleLRM = 1;
      this._startTracking(e);
    };

    /**
     * Start mouse move tracking
     * @param e
     * @private
     */
    this._startTracking = (e) => {
      e.preventDefault();
      window.addEventListener("mousemove", this._movementHandler);
      window.addEventListener("mouseup", this._unregister);
      this._positions.x = e.screenX;
      this._startwidth = this.getBoundingClientRect().width;

      // set cursor to avoid flickering
      this.parentNode.style.cursor = "col-resize";
    };

    /**
     * removes remember and set to the initial size
     */
    this.resetSize = () =>{
      if(this.initialWidthSetByStyle){
        this.resizer.style.width = `${this.initialWidthSetByStyle}`;
      }else{
        this.resizer.style.removeProperty("width");
      }

      if (this.remember) {
        sessionStorage.removeItem(this.remember)

      }

    }
  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    this._positions = {};
    this.lefthandle = this.shadowRoot.getElementById("lefthandle");
    this.lefthandle.addEventListener("mousedown", this._startTrackingLeft);
    this.lefthandle.addEventListener("dblclick", this.resetSize);

    this.righthandle = this.shadowRoot.getElementById("righthandle");
    this.righthandle.addEventListener("mousedown", this._startTrackingRight);
    this.righthandle.addEventListener("dblclick", this.resetSize);

    this.resizer = this;

    this.initialWidthSetByStyle = this.resizer.style.width;

    // restore remembered value
    if (this.remember) {
      const width = sessionStorage.getItem(this.remember);
      if (width) {
        this.resizer.style.width = `${width}px`;
      }

    }

  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroResizer') || css`
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none;
      }

      #lefthandle {
        position: absolute;
        left: -3px;
        width: 6px;
        top: 0;
        bottom: 0;
        cursor: col-resize;
        display: none;
      }

      #righthandle {
        position: absolute;
        right: -3px;
        width: 6px;
        top: 0;
        bottom: 0;
        cursor: col-resize;
        display: none;
      }

      :host([lefthandle]) #lefthandle {
        display: block;
      }

      :host([righthandle]) #righthandle {
        display: block;
      }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div id="lefthandle"></div>
      <slot></slot>
      <div id="righthandle"></div>
    `;
  }
}

window.customElements.define('furo-resizer', FuroResizer);
