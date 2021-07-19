import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-key-press`
 *  Listen to keypress events on parent element
 *
 *  [more about keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)
 *
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
      alt: { type: Boolean },
      ctrl: { type: Boolean },
      meta: { type: Boolean },
      shift: { type: Boolean },
      preventDefault: { type: Boolean, attribute: 'prevent-default' },
      stopPropagation: { type: Boolean, attribute: 'stop-propagation' },
    };
  }

  /**
   * flow is ready lifecycle method
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
