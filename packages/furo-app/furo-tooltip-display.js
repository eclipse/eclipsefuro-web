import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-tooltip`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-tooltip
 * @appliesMixin FBP
 */
class FuroTooltipDisplay extends FBP(LitElement) {

  constructor() {
    super();

    // return **this** to component which want to connect
    window.addEventListener("hide-tooltip-requested", (e) => {
      if (this.show) {
        clearTimeout(this.to)
        this.show = false;
      }
    });
    window.addEventListener("show-tooltip-requested", (e) => {


      let cr = e.detail.cr;
      let x = cr.left + cr.width / 2;
      let y = cr.bottom + 16;

      let max_y = window.innerHeight - 48;
      if(y > max_y){
        y = cr.top - 32;
      }
      this.style.top = y + "px";
      this.start = true;
      this.label = e.detail.label;
      clearTimeout(this.to);

      setTimeout(() => {
        let mycr = this.getBoundingClientRect();
        let max = window.innerWidth - 8;
        this.style.left = Math.min(max - mycr.width , Math.max(8,x - mycr.width / 2)) + "px";

        this.show = true;
        this.to = setTimeout(() => {
          // hide if shown
          if (this.show) {
            this.show = false;
          }
        }, e.detail.duration)
      }, 0)


    })

  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      start: {type: Boolean, reflect: true},
      show: {type: Boolean, reflect: true}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires()

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
        position: absolute;
        display: block;
        transition: opacity 300ms;
        opacity: 0;
        background-color: #6d6d6d;
        color: white;
        height: 24px;
        padding: 0 8px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 24px;
        z-index: 10;
        white-space: nowrap;
      }

      :host([start]) {
        display: block;
        opacity: 0;
      }

      :host([show]) {
        opacity: 1;
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
      ${this.label}
    `;
  }
}

window.customElements.define('furo-tooltip-display', FuroTooltipDisplay);
