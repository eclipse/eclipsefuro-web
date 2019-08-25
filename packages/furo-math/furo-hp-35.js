import {ForthStack} from "@furo/logic/furo-forth-stack.js"

  /**
   * `hp-35` is a declarative rpn calculator component.
   *
   * see https://hansklav.home.xs4all.nl/rpn/
   * http://h10032.www1.hp.com/ctg/Manual/c01579350
   *
   * @customElement
   * @polymer
   * @demo demo/hp35.html
   */
  class FuroHp35 extends ForthStack {
    constructor() {
      super();
    }

    static get properties() {
      return {
        /**
         * current x
         */
        x: {type: Number, value: 0, notify: true},
        /**
         * current y
         */
        y: {type: Number, value: 0, notify: true},
        /**
         * current z
         */
        z: {type: Number, value: 0, notify: true},
        /**
         * current t
         */
        t: {type: Number, value: 0, notify: true},
        /**
         * the stack.
         */
        stack: {type: Array, readOnly: true, notify: true},
        /**
         * Set to true to use rad, default is deg
         */
        radMode: {type: Boolean, value:false},
        /**
         * so we dont have to calculate Math.PI / 180  every time
         * used to calculate rad from angle
         */
        _PIdivby180:{type:Number, value:0.017453292519943295}
      }
    }

    static get observers() {
      return ['_stackchange(_stack)']
    }

    /**
     * publish the stack
     */
    _stackchange() {
      this.set('stack', this._stack);
    }

    /**
     * Enter a number
     * @param n
     */
    enter(n) {
      if (n !== undefined && n !== '') {
        this.put(parseFloat(n));
      }
      this.updateXYZT();
    }

    updateXYZT() {
      this.set('x', this._stack[this._stack.length - 1] || 0);
      this.set('y', this._stack[this._stack.length - 2] || 0);
      this.set('z', this._stack[this._stack.length - 3] || 0);
      this.set('t', this._stack[this._stack.length - 4] || 0);
      /**
       * Fired when something in stack changes
       * detail payload:
       * @event stackchange
       */
      let customEvent = new Event('stackchange', {composed: true, bubbles: true});
      this.dispatchEvent(customEvent)
    }

    swap() {
      super.swap();
      this.updateXYZT();
    }


    rot() {
      super.rot();
      this.updateXYZT();
      return this._stack[this._stack.length - 1];
    }

    roll() {
      return this.rot();
    }

    /**
     * Process an addition
     * @return Number
     */
    add(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res = 0;
      if (this.size > 1) {
        res = this.drop() + this.drop();
      } else {
        if (this.size == 1) {
          res = this.drop();
        }
      }

      this.put(res);
      this.updateXYZT();
      return res;
    }

    /**
     * Process an addition
     * @return Number
     */
    substract(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res = 0;
      if (this.size > 1) {
        this.swap();
        res = this.drop() - this.drop();
      } else {
        if (this.size == 1) {
          res = -this.drop();
        }
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }

    /**
     * Perform square root operation
     */
    sqrt(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }

      if (this.size >= 1) {
        let res;
        res = Math.sqrt(this.drop());
        this.put(res);
        this.updateXYZT();
        return res;
      }

    }

    /**
     * Perform log operation
     */
    ln(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size >= 1) {
        res = Math.log(this.drop());
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }

    /**
     * Perform cos operation
     */
    cos(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size >= 1) {
        if (!this.radMode) {
          res = Math.cos(this.drop() * this._PIdivby180);
        }else{
          res = Math.cos(this.drop());
        }
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }

    /**
     * Perform sin operation
     */
    sin(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size >= 1) {
        if (!this.radMode) {
          res = Math.sin(this.drop() * this._PIdivby180);
        }else{
          res = Math.sin(this.drop());
        }
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }

    /**
     * Perform tan operation
     */
    tan(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size >= 1) {
        if (!this.radMode) {
          res = Math.tan(this.drop() * Math.PI / 180);
        }else{
          res = Math.tan(this.drop());
        }
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }


    /**
     * Perform abs operation
     */
    abs(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size >= 1) {
        res = Math.abs(this.drop());
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }


    /**
     * Perform reciprocal operation
     */
    reciprocal(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size >= 1) {
        res = 1 / this.drop();
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }


    /**
     * Perform exp operation
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

    }

    xroot(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res;
      if (this.size > 1) {
        this.swap();
        res = Math.pow(this.drop(), 1 / this.drop());
        this.put(res);
        this.updateXYZT();
        return res;
      }

    }

    /**
     * Process a multiplication
     * @return Number
     */
    multiply(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res = 0;
      if (this.size > 1) {
        res = this.drop() * this.drop();
      } else {
        if (this.size == 1) {
          res = 0;
        }
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }

    /**
     * Process power
     * @return Number
     */
    pow(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }

      if (this.size > 1) {
        this.swap();
        let res = Math.pow(this.drop(), this.drop());
        this.put(res);
        this.updateXYZT();
        return res;
      }

    }

    /**
     * Process a division
     * @return Number
     */
    divide(n) {
      if (n !== undefined && n !== '') {
        this.enter(n);
      }
      let res = 0;
      if (this.size > 1) {
        this.swap();
        res = this.drop() / this.drop();
      } else {
        if (this.size == 1) {
          res = 0;
        }
      }
      this.put(res);
      this.updateXYZT();
      return res;
    }

    clear() {
      super.clearStack();
      this.updateXYZT();

    }
  }

  window.customElements.define("furo-hp-35", FuroHp35);

