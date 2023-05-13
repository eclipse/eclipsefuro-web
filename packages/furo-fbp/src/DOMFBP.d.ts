declare const DOMFBP_base: {
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
 * DOMFBP allows you to append FBP to any dom element.
 *
 * **Usage:**
 *
 * ```html
 * <!DOCTYPE html>
 * <html lang="en">
 * <head>
 *   <meta charset="UTF-8">
 *   <title>Title</title>
 *   <script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@2.3.0/dist/furo-fbp.js"></script>
 *   <script>
 *     import("https://cdn.jsdelivr.net/npm/@furo/precompiled@2.3.0/dist/DOMFBP.js").then(() => {
 *       // activate FBP on body
 *       const fbphandle = new DOMFBP(document.body)
 *       // enable tracing
 *       fbphandle._FBPTraceWires();
 *     })
 *   </script>
 * </head>
 * <body>
 * <button at-click="--buttonClicked" fn-remove="--buttonClicked">remove me</button>
 * </body>
 * </html>
 * ```
 *
 * ```js
 * import {DOMFBP} from '@furo/fbp/src/DOMFBP.js';
 *
 * // append fbp to the body
 * new DOMFBP(document.body);
 *
 *
 * ```
 *
 *
 */
export class DOMFBP extends DOMFBP_base {
    constructor(domNode: any);
}
export {};
