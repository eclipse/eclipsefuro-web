// eslint-disable-next-line max-classes-per-file
import {FBP} from './fbp.js';

/**
 * DOMFBP allows you to append FBP to any dom element.
 *
 * **Usage:**
 *
 * ```js
 * import {DOMFBP} from '@furo/fbp/src/DOMFBP.js';
 *
 * // append fbp to the body
 * new DOMFBP(document.body);
 * ```
 */
export class DOMFBP extends FBP(class DUMMY{}){
  constructor(domNode) {
    super();
    this._appendFBP(domNode);
  }
}
