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
export class FuroHp35 extends FuroForthStack {
    static get properties(): {
        /**
         * current x
         * @type {Number}
         */
        x: number;
        /**
         * current y
         * @type {Number}
         */
        y: number;
        /**
         * current z
         * @type {Number}
         */
        z: number;
        /**
         * current t
         * @type {Number}
         */
        t: number;
        /**
         * the stack.
         * @type {Array}
         */
        stack: any[];
        /**
         * Set to true to use rad, default is deg
         * @type {Boolean}
         */
        radMode: boolean;
        /**
         * so we dont have to calculate Math.PI / 180  every time
         * used to calculate rad from angle
         *
         * @type {Number}
         */
        _PIdivby180: number;
    };
    /**
     *
     * @type {number}
     * @private
     */
    private _PIdivby180;
    radMode: boolean;
    /**
     * Enter a number
     * @param {Number} n
     */
    enter(n: number): void;
    updateXYZT(): void;
    x: any;
    y: any;
    z: any;
    t: any;
    stack: any[];
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
    rot(): any;
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
    roll(): any;
    /**
     * Process an addition
     *
     * @param {Number} n
     * @return {number}
     */
    add(n: number): number;
    /**
     * Process a substraction
     * @param {Number} n
     * @return {number}
     */
    substract(n: number): number;
    /**
     * Perform square root operation
     * @param {Number} n
     * @return {number}
     */
    sqrt(n: number): number;
    /**
     * Perform log operation
     * @param {Number} n
     * @return {number}
     */
    ln(n: number): number;
    /**
     * Perform cos operation
     * @param {Number} n
     * @return {number}
     */
    cos(n: number): number;
    /**
     * Perform sin operation
     * @param {Number} n
     * @return {number}
     */
    sin(n: number): number;
    /**
     * Perform tan operation
     * @param {Number} n
     * @return {number}
     */
    tan(n: number): number;
    /**
     * Perform abs operation
     * @param {Number} n
     * @return {number}
     */
    abs(n: number): number;
    /**
     * Perform reciprocal operation
     * @param {Number} n
     * @return {number}
     */
    reciprocal(n: number): number;
    /**
     * Perform exp operation
     *
     * returns e^x, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms.
     * @param {Number} n
     * @return {number}
     */
    exp(n: number): number;
    xroot(n: any): number | false;
    /**
     * Process a multiplication
     * @param {Number} n
     * @return {number}
     */
    multiply(n: number): number;
    /**
     * Process power
     * @param {Number} n
     * @return {number}
     */
    pow(n: number): number;
    /**
     * Process a division
     * @param {Number} n
     * @return {number}
     */
    divide(n: number): number;
    /**
     * clear the stack
     */
    clear(): void;
}
import { FuroForthStack } from './furo-forth-stack.js';
