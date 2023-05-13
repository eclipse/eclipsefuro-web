/**
 *
 * `furo-head-tail`
 *  Splits an iterable (i.e. Array) in its head and tail part.
 *
 *```
 *  <furo-head-tail fn-split="--arrayData" at-head="--firstElement" at-tail="--restOfArray"></furo-head-tail>
 *```
 *
 * @fires {{Any} } head -  Fired when Array was splitted, contains the first element of array.
 * @fires {Array | Any} tail -  Fired when Array was splitted. {Array || Any} is the tail from the injected array (e1 - 1n)
 *
 * @summary split an array
 * @customElement
 */
export class FuroHeadTail extends HTMLElement {
    /**
     * Splits an iterable to its head (first item) and its tail (the rest) parts.
     *
     * ```
     * ["a", "b", "c", "d"]
     *  |_|  |___________|
     *   ^      ^
     *   |      |
     *   |     TAIL   => ["b", "c", "d"]
     *  HEAD          => "a"
     * ```
     *
     * @param iterable
     */
    split(iterable: any): void;
}
