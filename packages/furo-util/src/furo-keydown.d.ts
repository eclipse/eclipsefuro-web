declare const FuroKeydown_base: {
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
 * `furo-keydown` attaches a keypress listener to the parent element and gives you handy events to work with.
 *
 * When you set `alt`, `ctrl` or any of the other arguments, the key event will be triggered only if the corresponding key was pressed too.
 *
 *  [more about keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)
 *
 * ```html
 * <furo-keydown key="Enter" at-key="--enterPressed"></furo-keydown>
 * <furo-keydown ctrl key="c" at-key="--copyRequested"></furo-keydown>
 * ```
 * @fires {KeyboardEvent} key - Fired when key was catched on target
 *
 * @summary keyboard event listener
 * @customElement
 * @appliesMixin FBP
 */
export class FuroKeydown extends FuroKeydown_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
}
export {};
