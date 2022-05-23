import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `furo-keydown` attaches a keypress listener to the parent element and gives you handy events to work with.
 *
 * When you set `alt`, `ctrl` or any of the other arguments, the key event will be triggered only if the corresponding key was pressed too.
 *
 *  [more about keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)
 *
 * ```html
 * <furo-keydown key="Enter" at-key="--enterPressed"></furo-keydown>
 * <furo-keydown ctrl key="c" at-key="--copyRequested"></furo-keydown>
 * ```
 * @fires {KeyboardEvent} key - Fired when key was catched on target
 *
 * @summary keyboard event listener
 * @customElement
 * @appliesMixin FBP
 */
class FuroKeydown extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Key to listen on. Like Enter, Backspace, ArrowLeft, A,B,C, a,b,c
       */
      key: { type: String },
      /**
       * Set this attribute to listen to the keydown event global (window).
       */
      global: { type: Boolean },
      /**
       * `alt` key must be pressed to trigger the `key` event.
       */
      alt: { type: Boolean },
      /**
       * `ctrl` key must be pressed to trigger the `key` event.
       */
      ctrl: { type: Boolean },
      /**
       * `meta` key must be pressed to trigger the `key` event.
       */
      meta: { type: Boolean },
      /**
       * `shift` key must be pressed to trigger the `key` event.
       */
      shift: { type: Boolean },
      /**
       * Set this attribute to prevent the event default of the keypress event.
       */
      preventDefault: { type: Boolean, attribute: 'prevent-default' },
      /**
       * Set this to true to stop the event propagation of the keypress event.
       */
      stopPropagation: { type: Boolean, attribute: 'stop-propagation' },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    let target;
    if (this.global) {
      target = window;
    } else {
      target = this.parentNode;
    }
    target.addEventListener('keydown', keyevent => {
      if (this.meta && !keyevent.metaKey) {
        return;
      }
      if (this.ctrl && !keyevent.ctrlKey) {
        return;
      }
      if (this.option && !keyevent.altKey) {
        return;
      }

      if (this.shift && !keyevent.shiftKey) {
        return;
      }
      if (keyevent.key === this.key) {
        if (this.preventDefault) {
          keyevent.preventDefault();
        }
        if (this.stopPropagation) {
          keyevent.stopPropagation();
        }

        const customEvent = new Event('key', { composed: true, bubbles: true });
        customEvent.detail = keyevent;
        this.dispatchEvent(customEvent);
      }
    });
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

window.customElements.define('furo-keydown', FuroKeydown);
