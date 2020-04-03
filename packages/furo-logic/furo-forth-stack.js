import {LitElement, html, css} from 'lit-element';



/**
 * `furo-forth-stack` is a declarative stack, inspired by the forth stack.
 *
 * https://hackaday.com/2017/01/27/forth-the-hackers-language/
 * http://wiki.laptop.org/go/Forth_stack_operators
 * http://galileo.phys.virginia.edu/classes/551.jvn.fall01/primer.htm#stacks
 *
 * @summary forth like stack
 * @customElement
 */
export class FuroForthStack extends (LitElement) {

  constructor() {
    super();
    this._stack = [];
    /**
     * Current size of the stack
     * @type {number}
     */
    this.size = 0;
  }

  set size(val) {
    if (this._size !== val) {
    this._size = val;
    /**
     * @event stack-size-changed
     * Fired when the stack size changes
     * detail payload: {Number} Integer with the current size of the stack
     */
    let customEvent = new Event('stack-size-changed', {composed: true, bubbles: true});
    customEvent.detail = val;
    this.dispatchEvent(customEvent);
      this._notifyStackChange();
    }
  }

  get size(){
    return this._size;
  }
  /**
   * Empties the stack and set the stack-size to 0
   */
  clearStack() {
    this._stack = [];
    this.size = 0;
  }

  /**
   * Add an element to the stack
   * @param e
   * @return Number The actual size of the stack
   */
  put(e) {
    this._stack.push(e);
    this.size = this._stack.length;
    return this._stack.length;
  }

  /**
   *
   * swap **( n1 n2 -- n2 n1 )**
   *
   * swap, as you may have guessed, swaps the top two elements of the stack. For example:
   *
   * 1 2 3 4 swap
   * will give you:
   *
   * 1 2 4 3 <- Top
   *
   */
  swap() {
    if (this._stack.length > 1) {
    this._move(this._stack, this._stack.length - 1, this._stack.length - 2);
    /**
     * Fired when stack was swapped
     * @event swapped
     */
    let customEvent = new Event('swapped', {composed: true, bubbles: false});
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * drop **( n -- )**
   *
   *  drop simply drops the top element of the stack. Running:
   *
   *  1 2 3 drop
   *  gives you a stack of:
   *
   *  1 2 <- Top
   */
  drop() {
    if (this._stack.length > 0) {
      let e = this._stack.pop();
      this.size = this._stack.length;
      if (this._stack.length === 0) {
        /**
         * Fired when stack is empty
         * @event empty
         */
        let customEvent = new Event('empty', {composed: true, bubbles: true});
        this.dispatchEvent(customEvent)
      }
      return e;
    }

  }

  /**
   * dup **( n -- n n )**
   *
   *     dup is short for “duplicate” – it duplicates the top element of the stack. For example, try this out:
   *
   *     1 2 3 dup
   *
   *     You should end up with the following stack:
   *
   *     1 2 3 3 <- Top
   */
  dup() {
    this._stack.push(this._stack[this._stack.length - 1]);
    this.size = this._stack.length;
    return this._stack.length;
  }

  /**
   *
   * over **( n1 n2 -- n1 n2 n1 )**
   *
   *    over is a bit less obvious: it takes the second element from the top of the stack and duplicates it to the top of the stack. Running this:
   *
   *    1 2 3 over
   *    will result in this:
   *
   *    1 2 3 2 <- Top
   */
  over() {
    this._stack.push(this._stack[this._stack.length - 2]);
    this.size = this._stack.length;
    return this._stack.length;
  }

  /**
   * rot **( n1 n2 n3 -- n2 n3 n1 )**
   *
   *    Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.
   *
   *    1 2 3 rot
   *    gives you:
   *
   *    2 3* 1 <- Top
   */
  rot() {
    if (this._stack.length >= 3) {
      this._move(this._stack, 0, this._stack.length - 1);

    } else {
      this.swap();
    }
    if (this._stack.length > 1) {
    /**
     * Fired when stack was rotated
     * @event rotated
     */
    let customEvent = new Event('rotated', {composed: true, bubbles: false});
      customEvent.detail = this._stack[this._stack.length - 1];
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * rrot **( n1 n2 n3 -- n3 n1 n2 )**
   *
   *    Reverse rotation or right rotation rrot “rotates” the elements of the stack inverse to rot.
   *    The top elemen the stack gets moved to the bottom of the stack.
   *
   *    1 2 3 rot
   *    gives you:
   *
   *    2 3* 1 <- Top
   */
  rrot() {
    if (this._stack.length >= 3) {
      this._move(this._stack, this._stack.length - 1, 0);
    } else {
      this.swap();
    }
    if (this._stack.length > 1) {
      /**
       * Fired when stack was rotated
       * @event rotated
       */
      let customEvent = new Event('rotated', {composed: true, bubbles: false});
      customEvent.detail = this._stack[this._stack.length - 1];
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * moves element of an array from index to index*
   * @param arr
   * @param fromIndex
   * @param toIndex
   * @private
   */
  _move(arr, fromIndex, toIndex) {
    var e = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, e);
    this._notifyStackChange();
  }

  _notifyStackChange() {
    /**
     * @event stack-changed
     * Fired when the stack contents changes after put, drop,...
     *
     * detail payload: the top element
     */
    let stackEvent = new Event('stack-changed', {composed: true, bubbles: true});
    stackEvent.detail = this._stack[this._stack.length - 1];
    this.dispatchEvent(stackEvent);
  }
}


window.customElements.define('furo-forth-stack', FuroForthStack);
