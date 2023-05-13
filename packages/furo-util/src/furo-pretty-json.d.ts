declare const FuroPrettyJson_base: {
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
 * `furo-pretty-json`
 * Pretty json with highlighting
 *
 * ```html
 * <furo-pretty-json
 *   fn-inject-json="--data"></furo-pretty-json>
 * ```
 *
 * @summary pretty prints json data
 * @customElement
 */
export class FuroPrettyJson extends FuroPrettyJson_base {
    static get styles(): import("lit").CSSResult;
    /**
     *
     * @param json
     * @return {string}
     * @private
     */
    private static _syntaxHighlight;
    /**
     * Inject JSON data
     * @param {JSON} json - Json literal
     */
    injectData(json: JSON): void;
    markedText: any;
    render(): import("lit").TemplateResult<1>;
}
export {};
