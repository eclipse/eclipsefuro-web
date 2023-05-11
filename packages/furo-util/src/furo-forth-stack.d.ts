/**
 * `furo-forth-stack` is a declarative stack, inspired by the forth stack.
 *
 * https://hackaday.com/2017/01/27/forth-the-hackers-language/
 * http://wiki.laptop.org/go/Forth_stack_operators
 * http://galileo.phys.virginia.edu/classes/551.jvn.fall01/primer.htm#stacks
 *
 * @fires {Number} stack-size-changed -  Fired when the stack size changes with Integer with the current size of the stack.
 * @fires {the top element} rotated -  Fired when stack was rotated
 * @fires {the top element} rotated -  Fired when stack was rotated
 * @fires {the top element} stack-changed -  Fired when the stack contents changes after put, drop,...
 * @fires {void} swapped Fired when stack was swapped
 * @fires {void} empty - Fired when stack gets empty
 *
 * @summary forth like stack
 * @customElement
 */
export class FuroForthStack extends LitElement {
    /**
     * The stack, should not be edited from outside
     * @type {*[]}
     * @private
     */
    private _stack;
    set size(arg: any);
    get size(): any;
    _size: any;
    /**
     * Empties the stack and set the stack-size to 0
     */
    clearStack(): void;
    /**
     * Add an element to the stack
     * @param e
     * @return Number The actual size of the stack
     */
    put(e: any): number;
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
    swap(): void;
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
    drop(): any;
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
    dup(): number;
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
    over(): number;
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
    rot(): void;
    /**
     * rrot **( n1 n2 n3 -- n3 n1 n2 )**
     *
     *    Reverse rotation or right rotation rrot “rotates” the elements of the stack inverse to rot.
     *    The top elemen the stack gets moved to the bottom of the stack.
     *
     *    1 2 3 rot
     *    gives you:
     *
     *    3 1 2 <- Top
     */
    rrot(): void;
    /**
     * moves element of an array from index to index*
     * @param arr
     * @param fromIndex
     * @param toIndex
     * @private
     */
    private _move;
    /**
     *
     * @private
     */
    private _notifyStackChange;
}
import { LitElement } from "lit/node_modules/lit-element/lit-element";
