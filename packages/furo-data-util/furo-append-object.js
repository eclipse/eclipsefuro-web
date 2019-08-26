import {FBP} from '@furo/fbp/fbp.js';

/**
 * `append-object`
 * Native element
 *
 * @customElement
 */


/**
 *
 * @appliesMixin FBP
 */
class FuroAppendObject extends FBP(HTMLElement) {

  constructor() {
    super();
    this.initialObject = {};
  }

  init(o){
    this.initialObject = o;
  }
  append(o){
    for(let prop in o){
      this.initialObject[prop] = o[prop];
    }
    /**
    * @event appended
    * Fired when object appended
    * detail payload: {object}
    */
    let customEvent = new Event('appended', {composed:true, bubbles: true});
    customEvent.detail = this.initialObject;
    this.dispatchEvent(customEvent)
  }

}

window.customElements.define('furo-append-object', FuroAppendObject);
