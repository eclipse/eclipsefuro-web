declare const FuroFetchJson_base: {
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
 * `furo-fetch-json`
 *  Fetches and parses json data from a source.
 *
 *  ```html
 *  <furo-fetch-json src="/example.json" fn-fetch="|--FBPready" at-data="--contentReceived"></furo-fetch-json>
 *  ```
 *
 * @fires {{Object} json data} data -  Fired when data received and json parsed
 * @fires {error} parse-error -  Fired when json is not parseable
 *
 * @summary fetch json data
 * @customElement
 * @appliesMixin FBP
 */
export class FuroFetchJson extends FuroFetchJson_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    /**
     * fetch and parse the data from specified `src`.
     *
     * Use fetch-src if you want to pass the source url
     *
     * @return {Promise}
     */
    fetch(): Promise<any>;
    /**
     * fetch json data from source
     * @param String source
     *
     * @return {Promise}
     */
    fetchSrc(source: any): Promise<any>;
    src: any;
}
export {};
