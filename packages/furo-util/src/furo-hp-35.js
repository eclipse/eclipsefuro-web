import { FuroForthStack } from './furo-forth-stack.js';

/**
 * `hp-35` is a declarative rpn calculator component.
 *
 * see https://hansklav.home.xs4all.nl/rpn/
 *
 * http://h10032.www1.hp.com/ctg/Manual/c01579350
 *
 * @fires {void} stackchange - Fired when something in stack changes
 *
 * @summary calculator component
 * @customElement
 */
class FuroHp35 extends FuroForthStack {
  constructor() {
    super();
    this._PIdivby180 = 0.017453292519943295;
    this.radMode = false;
  }

  static get properties() {
    return {
      /**
       * current x
       * @type {Number}
       */
      x: { type: Number, value: 0, notify: true },
      /**
       * current y
       * @type {Number}
       */
      y: { type: Number, value: 0, notify: true },
      /**
       * current z
       */
      z: { type: Number, value: 0, notify: true },
      /**
       * current t
       */
      t: { type: Number, value: 0, notify: true },
      /**
       * the stack.
       */
      stack: { type: Array, readOnly: true, notify: true },
      /**
       * Set to true to use rad, default is deg
       */
      radMode: { type: Boolean },
      /**
       * so we dont have to calculate Math.PI / 180  every time
       * used to calculate rad from angle
       */
      _PIdivby180: { type: Number },
    };
  }

  /**
   * Enter a number
   * @param {Number} n
   */
  enter(n) {
    if (n !== undefined && n !== '') {
      this.put(parseFloat(n));
    }
    this.updateXYZT();
  }

  updateXYZT() {
    this.x = this._stack[this._stack.length - 1] || 0;
    this.y = this._stack[this._stack.length - 2] || 0;
    this.z = this._stack[this._stack.length - 3] || 0;
    this.t = this._stack[this._stack.length - 4] || 0;

    this.stack = this._stack;

    const customEvent = new Event('stackchange', { composed: true, bubbles: true });
    this.dispatchEvent(customEvent);
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
    super.swap();
    this.updateXYZT();
  }

  /**
   * rot **( n1 n2 n3 -- n2 n3 n1 )**
   *
   *    Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.
   *
   *    1 2 3 rot
   *    gives you:
   *
   *    2 3 1 <- Top
   */
  rot() {
    super.rot();
    this.updateXYZT();
    return this._stack[this._stack.length - 1];
  }

  /**
   * rot **( n1 n2 n3 -- n2 n3 n1 )**
   *
   *    Finally, rot “rotates” the top three elements of the stack. The third element from the top of the stack gets moved to the top of the stack, pushing the other two elements down.
   *
   *    1 2 3 rot
   *    gives you:
   *
   *    2 3 1 <- Top
   */
  roll() {
    return this.rot();
  }

  /**
   * Process an addition
   *
   * @param {Number} n
   * @return {number}
   */
  add(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res = 0;
    if (this.size > 1) {
      res = this.drop() + this.drop();
    } else if (this.size === 1) {
      res = this.drop();
    }

    this.put(res);
    this.updateXYZT();
    return res;
  }

  /**
   * Process a substraction
   * @param {Number} n
   * @return {number}
   */
  substract(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res = 0;
    if (this.size > 1) {
      this.swap();
      res = this.drop() - this.drop();
    } else if (this.size === 1) {
      res = -this.drop();
    }
    this.put(res);
    this.updateXYZT();
    return res;
  }

  /**
   * Perform square root operation
   * @param {Number} n
   * @return {number}
   */
  sqrt(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }

    if (this.size >= 1) {
      const res = Math.sqrt(this.drop());
      this.put(res);
      this.updateXYZT();
      return res;
    }
    return false;
  }

  /**
   * Perform log operation
   * @param {Number} n
   * @return {number}
   */
  ln(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      res = Math.log(this.drop());
      this.put(res);
      this.updateXYZT();
      return res;
    }
    return Math.log(0);
  }

  /**
   * Perform cos operation
   * @param {Number} n
   * @return {number}
   */
  cos(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      if (!this.radMode) {
        res = Math.cos(this.drop() * this._PIdivby180);
      } else {
        res = Math.cos(this.drop());
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }
    // fallback with no number uses 0
    res = Math.cos(0);

    return res;
  }

  /**
   * Perform sin operation
   * @param {Number} n
   * @return {number}
   */
  sin(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      if (!this.radMode) {
        res = Math.sin(this.drop() * this._PIdivby180);
      } else {
        res = Math.sin(this.drop());
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }
    // fallback with no number uses 0
    res = Math.sin(0);

    return res;
  }

  /**
   * Perform tan operation
   * @param {Number} n
   * @return {number}
   */
  tan(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      if (!this.radMode) {
        res = Math.tan((this.drop() * Math.PI) / 180);
      } else {
        res = Math.tan(this.drop());
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }
    // fallback with no number uses 0
    res = Math.tan(0);

    return res;
  }

  /**
   * Perform abs operation
   * @param {Number} n
   * @return {number}
   */
  abs(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      res = Math.abs(this.drop());
      this.put(res);
      this.updateXYZT();
      return res;
    }
    return 0;
  }

  /**
   * Perform reciprocal operation
   * @param {Number} n
   * @return {number}
   */
  reciprocal(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      res = 1 / this.drop();
      this.put(res);
      this.updateXYZT();
      return res;
    }
    return NaN;
  }

  /**
   * Perform exp operation
   *
   * returns e^x, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms.
   * @param {Number} n
   * @return {number}
   */
  exp(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size >= 1) {
      res = Math.exp(this.drop());
      this.put(res);
      this.updateXYZT();
      return res;
    }
    // fallback returns calculation for 0
    return 1;
  }

  xroot(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res;
    if (this.size > 1) {
      this.swap();
      res = this.drop() ** (1 / this.drop());
      this.put(res);
      this.updateXYZT();
      return res;
    }
    return false;
  }

  /**
   * Process a multiplication
   * @param {Number} n
   * @return {number}
   */
  multiply(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res = 0;
    if (this.size > 1) {
      res = this.drop() * this.drop();
    } else if (this.size <= 1) {
      res = 0;
    }
    this.put(res);
    this.updateXYZT();
    return res;
  }

  /**
   * Process power
   * @param {Number} n
   * @return {number}
   */
  pow(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }

    if (this.size > 1) {
      const res = this.drop() ** this.drop();
      this.put(res);
      this.updateXYZT();
      return res;
    }
    return NaN;
  }

  /**
   * Process a division
   * @param {Number} n
   * @return {number}
   */
  divide(n) {
    if (n !== undefined && n !== '') {
      this.enter(n);
    }
    let res = 0;
    if (this.size > 1) {
      this.swap();
      res = this.drop() / this.drop();
      this.put(res);
      this.updateXYZT();
      return res;
    }
    // fallback div by 0 returns Infinity
    return Infinity;
  }

  /**
   * clear the stack
   */
  clear() {
    super.clearStack();
    this.updateXYZT();
  }
}

window.customElements.define('furo-hp-35', FuroHp35);
