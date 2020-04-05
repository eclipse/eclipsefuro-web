import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/src/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-tooltip`
 * EXPERIMENTAL, API MAY CHANGE
 *
 * @summary displays a tooltip
 * @customElement
 * @demo demo-furo-tooltip
 * @appliesMixin FBP
 */
class FuroTooltip extends FBP(LitElement) {

  constructor() {
    super();
    /**
     * display duration in ms
     * @type {number}
     */
    this.duration = 1500;
    this.parentNode.addEventListener("mouseover", (e) => {
      this.show();
    });


    this.parentNode.addEventListener("mouseout", (e) => {
      /**
       * @event show-tooltip-requested
       * Fired when mouseover on component
       * detail payload:
       */
      let customEvent = new Event('hide-tooltip-requested', {composed: true, bubbles: true});
      customEvent.detail = this;
      this.dispatchEvent(customEvent)
    });

  }

  /**
   * show the tooltip (usefull with a click event)
   */
  show() {
    // client rectangle
    this.cr = this.parentNode.getBoundingClientRect();

    /**
     * @event show-tooltip-requested
     * Fired when mouseover on component
     * detail payload:
     */
    let customEvent = new Event('show-tooltip-requested', {composed: true, bubbles: true});
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Display duration in ms
       */
      duration: {type: Number},
      label: {type: String}
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
    return Theme.getThemeForComponent('FuroTooltip') || css`
      :host {
        display: none;
      }
    `
  }


}

window.customElements.define('furo-tooltip', FuroTooltip);
