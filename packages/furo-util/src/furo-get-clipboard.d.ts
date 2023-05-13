declare const FuroGetClipboard_base: {
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
 * `furo-get-clipboard`
 *  get the clipboard content from the OS.
 *
 *```html
 *
 * <furo-get-clipboard
 *     fn-trigger="--clipboardContentRequested" at-content="--contentReceived"
 *     ></furo-get-clipboard>
 *
 *```
 *
 * @fires content -  Fired when clipboard content is received
 *
 * @summary get clipboard content
 * @customElement
 * @appliesMixin FBP
 */
export class FuroGetClipboard extends FuroGetClipboard_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    trigger(): void;
}
export {};
