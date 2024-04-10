declare const EmptyFBPNode_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void;
        __fbpAppended: boolean | undefined;
        _FBPTriggerWire(wire: any, detailData: any): void;
        __domPath: string | undefined;
        _call(detailData: any, receiver: any): void;
        _FBPAddWireHook(wire: any, cb: any, before?: any): number;
        _FBPTraceWires(): void;
        _FBPDebug(wire: any, openDebugger: any): void;
        __toCamelCase(str: any): any;
        _appendFBP(dom: any): void;
        _FBPReady(): void;
        __fbp_ready: boolean | undefined;
        __enqueueTrigger(wire: any, detailData: any): void;
        __resolveWireAndPath(w: any): {
            path: any;
            receivingWire: any;
        };
        _pathGet(root: Object, path: string | (string | number)[]): any;
        _pathSet(root: Object, path: string | (string | number)[], value: any): string | boolean;
        _split(path: string | (string | number)[]): string[];
    };
    [x: string]: any;
};
export class EmptyFBPNode extends EmptyFBPNode_base {
}
export {};
