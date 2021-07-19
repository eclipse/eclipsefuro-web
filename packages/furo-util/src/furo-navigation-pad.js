import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-navigation-pad` listens to different keyboard navigation events like the arrow keys. It will attach the listeners
 *  to the parent node and cancel the default and stop the propagation of the events.
 *
 *  The events are available as standalone events or as combined event in the `navigated` event.
 *
 *  ```html
 *  <!-- forward all navigation events except the Escape  -->
 *  <furo-navigation-pad ignored-keys="Escape" @-navigated="--navpad"></furo-navigation-pad>
 *
 *  ```
 *
 *
 * @fires {String} navigated - Generic navigation event, fired when one of the navigation keys was pressed, detail contains
 * one of these: Escape | Enter | ArrowDown | ArrowUp |ArrowLeft|ArrowRight| PageUp | PageDown | Home | End
 * @fires {KeyboardEvent} enter-pressed -  Fired when Enter key was pressed.
 * @fires {KeyboardEvent} arrow-down-pressed -  Fired when ArrowDown key was pressed.
 * @fires {KeyboardEvent} arrow-up-pressed -  Fired when ArrowUp key was pressed.
 * @fires {KeyboardEvent} arrow-left-pressed -  Fired when ArrowLeft key was pressed.
 * @fires {KeyboardEvent} arrow-right-pressed -  Fired when ArrowRight key was pressed.
 * @fires {KeyboardEvent} escape-pressed -  Fired when Escape key was pressed.
 * @fires {KeyboardEvent} page-up-pressed -  Fired when PageUp key was pressed.
 * @fires {KeyboardEvent} page-down-pressed -  Fired when PageDown key was pressed.
 * @fires {KeyboardEvent} home-pressed -  Fired when Home key was pressed.
 * @fires {KeyboardEvent} end-pressed -  Fired when End key was pressed.
 *
 *
 * @summary keyboard navigation helper
 * @customElement
 * @appliesMixin FBP
 */
class FuroNavigationPad extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Enter the keys you want to ignore as comma seperated values.
       *
       * i.e. "Escape, ArrowLeft"
       */
      ignoredKeys: { type: String, attribute: 'ignored-keys' },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    this.parentNode.addEventListener('keydown', event => {
      const key = event.key || event.keyCode;

      // abort on modifier keys
      if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
        return;
      }

      // abort on ignoredKeys
      if (
        this.ignoredKeys &&
        this.ignoredKeys.split(',').filter(k => k.trim() === key).length > 0
      ) {
        return;
      }

      const navigatedEvent = new Event('navigated', { composed: true, bubbles: true });
      navigatedEvent.initiatorEvent = event;

      const enterEvent = new Event('enter-pressed', { composed: true, bubbles: true });
      const arrowDownEvent = new Event('arrow-down-pressed', { composed: true, bubbles: true });
      const arrowUpEvent = new Event('arrow-up-pressed', { composed: true, bubbles: true });
      const endEvent = new Event('end-pressed', { composed: true, bubbles: true });
      const homeEvent = new Event('home-pressed', { composed: true, bubbles: true });
      const pageDownEvent = new Event('page-down-pressed', { composed: true, bubbles: true });
      const pageUpEvent = new Event('page-up-pressed', { composed: true, bubbles: true });
      const escapeEvent = new Event('escape-pressed', { composed: true, bubbles: true });
      const arrowLeftEvent = new Event('arrow-left-pressed', { composed: true, bubbles: true });
      const arrowRightEvent = new Event('arrow-right-pressed', { composed: true, bubbles: true });

      switch (key) {
        case 'Enter':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          enterEvent.detail = event;
          this.dispatchEvent(enterEvent);
          break;

        case 'ArrowDown':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          arrowDownEvent.detail = event;
          this.dispatchEvent(arrowDownEvent);
          break;

        case 'ArrowUp':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          arrowUpEvent.detail = event;
          this.dispatchEvent(arrowUpEvent);
          break;

        case 'ArrowLeft':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);

          arrowLeftEvent.detail = event;
          this.dispatchEvent(arrowLeftEvent);
          break;

        case 'ArrowRight':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          arrowRightEvent.detail = event;
          this.dispatchEvent(arrowRightEvent);
          break;

        case 'Escape':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          escapeEvent.detail = event;
          this.dispatchEvent(escapeEvent);
          break;

        case 'PageUp':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          pageUpEvent.detail = event;
          this.dispatchEvent(pageUpEvent);
          break;

        case 'PageDown':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);
          pageDownEvent.detail = event;
          this.dispatchEvent(pageDownEvent);
          break;

        case 'Home':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);

          homeEvent.detail = event;
          this.dispatchEvent(homeEvent);
          break;

        case 'End':
          event.stopPropagation();

          navigatedEvent.detail = key;
          this.dispatchEvent(navigatedEvent);


          endEvent.detail = event;
          this.dispatchEvent(endEvent);
          break;
        default:
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-navigation-pad', FuroNavigationPad);
