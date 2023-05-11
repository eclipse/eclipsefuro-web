declare const BasePanel_base: {
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
 * Extend BasePanel to build a panel which is controllable by furo-panel-coordinator.
 *
 * @customElement
 * @appliesMixin FBP
 */
export class BasePanel extends BasePanel_base {
    /**
     * Callback function to interact with close requests
     * Return a true if closing is allowed or false if not
     *
     * @return {boolean}
     */
    onCloseRequest: () => boolean;
    treeNode: any;
    /**
     * Close the panel
     */
    closePanel(): void;
}
export {};
