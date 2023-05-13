declare const FuroSplitView_base: {
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
 * `furo-split-view`
 * is a layout component to visualise main / detail views (left right layout for master detail views).
 * You can add the attribute scroll on the detail view to make the content scrollable.
 *
 * ```html
 * <furo-split-view>
 *   <div slot="master">Master</div>
 *   <big-component scroll> </big-component>
 * </furo-split-view>
 * ```
 *
 * @cssprop {N/A} [--split-master-width=270px] - width of the master slot
 *
 * @slot {HTMLElement [0..n]} master - default slot to add content to the main section.
 * @slot {HTMLElement [0..n]} - default slot to add content to the detail section.
 *
 * @summary splitted layout
 * @customElement
 * @demo demo-furo-split-view Basic usage
 * @appliesMixin FBP
 */
export class FuroSplitView extends FuroSplitView_base {
    static get properties(): {
        /**
         * flip the left and right side
         *
         * @type Boolean
         */
        reverse: boolean;
    };
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
