declare const FuroLocationUpdater_base: {
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
            receivingWire: any; /**
             * Set hash values by giving an object with key-value pairs.
             *
             * Keep in mind, that this values goes to the url, so setting objects as values is not a good idea
             * @param newHASH
             */
        };
        _pathGet(root: any, path: string | (string | number)[]): any;
        _pathSet(root: any, path: string | (string | number)[], value: any): string | boolean;
        _split(path: string | (string | number)[]): string[];
    };
    [x: string]: any;
};
/**
 * `furo-location-updater`
 * updates parts of the url location with pushState
 *
 * You can set query params and hashes. Use this component for proper deep linking.
 * The furo-location component will fire the location events as usual.
 *
 * ```html
 *
 *  <furo-location-updater
 *     fn-set-qp="--QueryParamKeyValuePairs"
 *     fn-set-hash="--HashKeyValuePairs"></furo-location-updater>
 *
 * ```
 *
 * @fires {Number} __beforeReplaceState -  Fired when before the state will be updated, with `window.performance.now()`.
 *
 * @summary deep linking helper
 * @customElement
 * @demo demo-furo-panel-coordinator update qp from tree
 * @appliesMixin FBP
 */
export class FuroLocationUpdater extends FuroLocationUpdater_base {
    static get properties(): {
        /**
         * Comma separated list of qp keys to clear if they are not explicitly set with `fn-set-qp`
         *
         * @type String
         */
        clearQp: string;
        /**
         * Comma separated list of hashes to clear if they are not explicitly set with `fn-set-hash`
         *
         * @type String
         */
        clearHash: string;
    };
    static get styles(): import("lit").CSSResult;
    /**
     * Set query params by giving an object with key-value pairs.
     *
     * Keep in mind, that this values goes to the url, so setting objects as values is not a good idea
     * @param newQP
     */
    setQp(newQP: any): void;
    /**
     * Set hash values by giving an object with key-value pairs.
     *
     * Keep in mind, that this values goes to the url, so setting objects as values is not a good idea
     * @param newHASH
     */
    setHash(newHASH: any): void;
}
export {};
