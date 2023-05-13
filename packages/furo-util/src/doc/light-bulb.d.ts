declare const LightBulb_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void;
        __fbpAppended: boolean; /**
         * Switch on the bulb
         * @type Boolean
         */
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
 * `light-bulb`
 *
 *  This component is for the documentation
 *
 * @summary a light bulb for the documentation
 * @customElement
 * @appliesMixin FBP
 */
export class LightBulb extends LightBulb_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    off: boolean;
    color: string;
    set on(arg: any);
    setColor(color: any): void;
    /**
     * toggles the light bulb on off
     */
    toggle(): void;
    /**
     * @private
     * @returns {TemplateResult}
     */
    private render;
}
export {};
