declare const FuroConfigLoader_base: {
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
 * `furo-config-loader` loads a configuration json in to the defined section.
 *
 * To access the config values, use `furo-config`.
 *
 * ```html
 * <furo-config-loader
 *     src="/custom/view-config.json"
 *     section="views"
 *     ></furo-config-loader>
 * ```
 *
 * @fires {Object} config-loaded - Fired when the config is loaded with the loaded config as detail.
 *
 * @summary load config files
 * @customElement
 * @appliesMixin FBP
 */
export class FuroConfigLoader extends FuroConfigLoader_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    attributeChangedCallback(name: any, oldval: any, newval: any): void;
    /**
     * @returns {TemplateResult}
     * @private
     */
    private render;
}
export {};
