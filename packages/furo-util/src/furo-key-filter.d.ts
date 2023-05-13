declare const FuroKeyFilter_base: {
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
 * `furo-key-filter`
 * Allows only defined keyboard events to pass through
 *
 * ```html
 * <!-- note the asterisk on other-component keydown. Because filter needs the keyboard event. -->
 * <other-component at-keydown="--keydown(*)"></other-component>
 * <furo-key-filter
 *     fn-filter="--keydown" at-matched="--escapePressed"
 *     keys="Escape"
 *     ></furo-key-filter>
 * ```
 *
 *
 * @fires {KeyboardEvent} matched -  Fired when key matches the options
 *
 * @summary keyboard event filter
 * @customElement
 * @appliesMixin FBP
 */
export class FuroKeyFilter extends FuroKeyFilter_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    /**
     * Check the event and dispatch matched when the conditions are fulfilled.
     *
     * @param keyboardEvent
     */
    filter(keyboardEvent: any): void;
}
export {};
