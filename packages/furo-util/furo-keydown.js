import { LitElement, html, css } from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-key-press`
 *  Listen to keypress events on parent element
 *
 *  [more about keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)
 *
 * @summary keypress listener
 * @customElement
 * @demo demo-furo-key-press
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
            key: {type: String},
          /**
           * Set this attribute to listen to the keydown event global (window).
           */
            global: {type: Boolean},
            alt: {type: Boolean},
            ctrl: {type: Boolean},
            meta: {type: Boolean},
          preventDefault: {type: Boolean, attribute: "prevent-default"},
          stopPropagation: {type: Boolean, attribute: "stop-propagation"}

        };
    }

  /**
  * flow is ready lifecycle method
  */
  _FBPReady(){
    super._FBPReady();
    let target;
    if(this.global){
      target = window;
    }else{
      target = this.parentNode;
    }
    target.addEventListener("keydown", (keyevent) => {
      if (keyevent.key === this.key) {
        if(this.preventDefault){
          keyevent.preventDefault();
        }
        if(this.stopPropagation){
          keyevent.stopPropagation();
        }
        /**
        * @event key
        * Fired when key was catched on target
        * detail payload: keyevent
        */
        let customEvent = new Event('key', {composed:true, bubbles: true});
        customEvent.detail = keyevent;
        this.dispatchEvent(customEvent)
      }
    });
  }
}

window.customElements.define('furo-keydown', FuroKeydown);
