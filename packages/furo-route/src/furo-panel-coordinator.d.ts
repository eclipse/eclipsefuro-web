declare const FuroPanelCoordinator_base: {
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
 * `furo-panel-coordinator`
 *
 *
 * @fires {RepeaterNode} controls-ready - Fired when Controls for panels are ready, initially it starts with an empty set.
 *
 * @summary Complex content switcher based on furo-tree
 * @customElement
 * @demo demo-furo-panel-coordinator with deep link
 * @appliesMixin FBP
 */
export class FuroPanelCoordinator extends FuroPanelCoordinator_base {
    /**
     * array of navigation nodes
     * @private
     */
    private _openPanels;
    /**
     * array of panel names
     * @private
     */
    private _loadedPanels;
    /**
     *
     * @private
     */
    private _furoPage;
    /**
     *
     * @private
     */
    private _notifiyOpenPanels;
    /**
     * Loads and shows the page based on the NavigationNode
     *
     * @param NavigationNode
     * @return {Promise<void>}
     */
    showPage(NavigationNode: any): Promise<void>;
    /**
     * This will trigger a `close-request` event all panels. Which should close themself then.
     */
    closeAll(): void;
    /**
     * closes all open panels without asking
     */
    forceCloseAll(): void;
    /**
     * removes a panel from the view
     * @param nodeName
     * @private
     */
    private _removeNodeById;
}
export {};
