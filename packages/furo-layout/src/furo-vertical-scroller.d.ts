declare const FuroVerticalScroller_base: {
    new (): {
        [x: string]: any;
        /**
         * `furo-vertical-scroller`
         *
         * ```html
         * <furo-vertical-scroller>
         *   <your-content></your-content>
         * </furo-vertical-scroller>
         * ```
         * @cssprop {N/A} [--surface=white] - Background color scrollbar
         * @cssprop {N/A} [--on-surface=black] - Background color of the draggable scrolling element
         *
         * @slot {HTMLElement [0..n]} - default slot to add content.
         *
         * @summary vertical scroll
         * @customElement
         * @demo demo-furo-vertical-scroller Basic usage
         * @appliesMixin FBP
         */
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
 * `furo-vertical-scroller`
 *
 * ```html
 * <furo-vertical-scroller>
 *   <your-content></your-content>
 * </furo-vertical-scroller>
 * ```
 * @cssprop {N/A} [--surface=white] - Background color scrollbar
 * @cssprop {N/A} [--on-surface=black] - Background color of the draggable scrolling element
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * @summary vertical scroll
 * @customElement
 * @demo demo-furo-vertical-scroller Basic usage
 * @appliesMixin FBP
 */
export class FuroVerticalScroller extends FuroVerticalScroller_base {
    /**
     *
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * @private
     * @returns {TemplateResult}
     */
    private render;
}
export {};
