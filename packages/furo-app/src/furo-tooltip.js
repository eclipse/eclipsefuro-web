import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-tooltip` is used to trigger a tooltip which is displayed by `furo-tooltip-display`.
 *
 *
 * @fires {MouseEvent} show-tooltip-requested - Fired when mouseover on component, catched by furo-tooltip-display.
 * @fires {MouseEvent} hide-tooltip-requested - Fired when mouseout on component, catched by furo-tooltip-display.
 * @fires show-tooltip-requested - Fired when mouseover on component, catched by furo-tooltip-display.
 *
 * @summary defines and triggers a tooltip
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
    this.parentNode.addEventListener('mouseover', () => {
      this.show();
    });

    this.parentNode.addEventListener('mouseout', () => {
      const customEvent = new Event('hide-tooltip-requested', { composed: true, bubbles: true });
      customEvent.detail = this;
      this.dispatchEvent(customEvent);
    });
  }

  /**
   * show the tooltip (usefull with a click event)
   */
  show() {
    // client rectangle
    this.cr = this.parentNode.getBoundingClientRect();

    const customEvent = new Event('show-tooltip-requested', { composed: true, bubbles: true });
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
       * Display duration in ms.
       * @type {number}
       */
      duration: { type: Number },
      /**
       * The text which should be displayed in the tooltip.
       * @type {string}
       */
      label: { type: String },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroTooltip') ||
      css`
        :host {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-tooltip', FuroTooltip);
