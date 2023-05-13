import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `furo-key-filter`
 * Allows only defined keyboard events to pass through
 *
 * ```html
 * <!-- note the asterisk on other-component keydown. Because filter needs the keyboard event. -->
 * <other-component at-keydown="--keydown(*)"></other-component>
 * <furo-key-filter
 *     fn-filter="--keydown" at-matched="--escapePressed"
 *     keys="Escape"
 *     ></furo-key-filter>
 * ```
 *
 *
 * @fires {KeyboardEvent} matched -  Fired when key matches the options
 *
 * @summary keyboard event filter
 * @customElement
 * @appliesMixin FBP
 */
export class FuroKeyFilter extends FBP(LitElement) {
  /**
   * Check the event and dispatch matched when the conditions are fulfilled.
   *
   * @param keyboardEvent
   */
  filter(keyboardEvent) {
    const key = keyboardEvent.key || keyboardEvent.keyCode;

    // check shift, alt, command,...
    if (this.shift && !keyboardEvent.shiftKey) {
      return;
    }
    if (this.alt && !keyboardEvent.altKey) {
      return;
    }
    if ((this.meta || this.command) && !keyboardEvent.metaKey) {
      return;
    }
    if (this.control && !keyboardEvent.controlKey) {
      return;
    }

    if (this.keys.split(/\W+/).indexOf(key) !== -1) {
      const customEvent = new Event('matched', { composed: true, bubbles: true });
      customEvent.detail = keyboardEvent;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Coma separated list with allowed keys to pass. i.e "Enter, ArrowUp"
       *
       * @type String
       */
      keys: { type: String },
      /**
       * Modifier key **shift** must be pressed too to match
       *
       * @type Boolean
       */
      shift: { type: Boolean },
      /**
       * Modifier key **alt** must be pressed too to match
       *
       * @type Boolean
       */
      alt: { type: Boolean },
      /**
       * Alias for meta.
       *
       * Modifier key **meta** must be pressed too to match.
       *
       * @type Boolean
       */
      command: { type: Boolean },
      /**
       * Modifier key **meta** must be pressed too to match
       *
       * @type Boolean
       */
      meta: { type: Boolean },
      /**
       * Modifier key **control** must be pressed too to match
       *
       * @type Boolean
       */
      control: { type: Boolean },
      // stopPropagation, disableDefault??
    };
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-key-filter', FuroKeyFilter);
