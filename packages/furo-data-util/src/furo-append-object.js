import { FBP } from '@furo/fbp/src/fbp.js';

/**
 * `append-object`
 *
 * @summary append data to object literals
 * @customElement
 */

/**
 *
 * @appliesMixin FBP
 */
class FuroAppendObject extends FBP(HTMLElement) {
  constructor() {
    super();
    /**
     * The initial object is an empty object.
     * @type {Object}
     */
    this.initialObject = {};
  }

  /**
   * Set an initial object. Otherwise you will start with an empty object, which can also be useful sometimes.
   *
   * @param object {Object}
   */
  init(object) {
    this.initialObject = object;
  }

  /**
   * Append the properties of an object to the inital object.
   * @param object {Object}
   */
  append(object) {
    // todo replace with:  Use Object.{keys,values,entries}, and iterate over the resulting array
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const prop in object) {
      this.initialObject[prop] = object[prop];
    }
    /**
     * @event appended
     * Fired when something is appended to the initial object.
     * detail payload: {object} the extended object
     */
    const customEvent = new Event('appended', { composed: true, bubbles: true });
    customEvent.detail = this.initialObject;
    this.dispatchEvent(customEvent);
  }
}

window.customElements.define('furo-append-object', FuroAppendObject);
