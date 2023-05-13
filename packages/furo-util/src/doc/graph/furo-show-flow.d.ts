declare const FuroShowFlow_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void; /**
         * Parse a dom node
         * @param {dom} dom node
         */
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
 * `furo-show-flow`
 * Renders a flow from dom node or html source
 *
 * @summary internal helper component
 * @customElement
 * @appliesMixin FBP
 */
export class FuroShowFlow extends FuroShowFlow_base {
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * Parse html content
     * @param {string} source
     */
    parseHtml(source: string): void;
    /**
     * Parse a dom node
     * @param {dom} dom node
     */
    parseTemplate(template: any): void;
    graph: any;
    _collectedWires: {
        methods: any[];
        events: any[];
    };
    /**
     *
     * @private
     */
    private _setWireEdges;
    /**
     *
     * @param node
     * @param parentNode
     * @private
     */
    private _recursiveParse;
    /**
     * @private
     * @returns {TemplateResult}
     */
    private render;
}
export {};
