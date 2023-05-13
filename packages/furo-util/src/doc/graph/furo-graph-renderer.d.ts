declare const FuroGraphRenderer_base: {
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
 * `furo-graph-renderer`
 * Paint a SVG from the received graph data
 *
 * @fires {node} show-tooltip-requested -  Fired when
 * @fires {node} show-tooltip-requested -  Fired on mouseover of a attr node
 * @fires {node} show-tooltip-requested -  Fired on mouseover of a attr node
 *
 * @summary paints a dagree graph as svg
 * @customElement
 * @appliesMixin FBP
 */
export class FuroGraphRenderer extends FuroGraphRenderer_base {
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * Draw the graph as svg
     * @param {dagre} graph - Dagre graph
     */
    draw(graph: dagre): void;
    canvas: any;
}
export {};
