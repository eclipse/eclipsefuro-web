declare const FuroDeBounce_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void;
        __fbpAppended: boolean;
        _FBPTriggerWire(wire: any, detailData: any): void;
        __domPath: any;
        _call(detailData: any, receiver: any): void;
        _FBPAddWireHook(wire: any, cb: any, before?: any): number;
        _FBPTraceWires(): void;
        _FBPDebug(wire: any, openDebugger: any): void;
        __toCamelCase(str: any): any;
        _appendFBP(dom: any): void;
        _FBPReady(): void;
        __fbp_ready: boolean;
        __enqueueTrigger(wire: any, detailData: any): void;
        __resolveWireAndPath(w: any): {
            path: any;
            receivingWire: any;
        };
        _pathGet(root: any, path: string | (string | number)[]): any;
        _pathSet(root: any, path: string | (string | number)[], value: any): string | boolean;
        _split(path: string | (string | number)[]): string[];
    };
    [x: string]: any;
};
/**
 * The Debounce technique allow us to “group” multiple sequential calls in a single one.
 *
 * [Read more about debouncing here](https://css-tricks.com/debouncing-throttling-explained-examples/)
 *
 *
 *
 * ```html
 * <furo-de-bounce
 *     fn-trigger="--searchStringEntered" at-debounced="--debouncedSrch"
 *     ></furo-de-bounce>
 * ```
 *
 * @fires {*} debounced - Fired after N milliseconds. If `immediate`is set to TRUE, it fires on the leading edge.
 * @fires {*} out - deprecated, use debounced instead.
 *
 * // TODO: remove @out and fn-input-wire in q2 2022
 * @summary event de bouncer
 * @customElement
 * @appliesMixin FBP
 */
export class FuroDeBounce extends FuroDeBounce_base {
    static get properties(): {
        /**
         * Debounce time in milliseconds
         * Default value: 250
         * @type Number
         */
        wait: number;
        /**
         * If true, input-wire is triggered immediatley (leading edge instead of trailing)
         * Default value: false
         *
         * @type Boolean
         */
        immediate: boolean;
    };
    static get styles(): import("lit").CSSResult;
    /**
     * as taken from Underscore.js
     * @param func
     * @param wait
     * @param immediate
     * @return {(function(): void)|*}
     * @private
     */
    private _debounce;
    /**
     *
     * @type {boolean}
     * @private
     */
    private _immediate;
    /**
     *
     * @type {number}
     * @private
     */
    private _wait;
    set immediate(arg: any);
    set wait(arg: any);
    /**
     * Internal create of debounce handler function
     * @param wait
     * @param immediate
     * @private
     */
    private _createHandler;
    handler: any;
    /**
     * Trigger the debounce
     * @param {*} data - Any data, will be dispatched on the `debounced` event.
     */
    trigger(data: any): void;
    /**
     * Debounce function
     * @param wire
     * @private
     * @deprecated -  Use trigger() instead
     */
    private inputWire;
}
export {};
