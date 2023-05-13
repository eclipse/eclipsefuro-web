declare const FuroResizer_base: {
    new (): {
        [x: string]: any;
        /**
         * `furo-resizer`
         *  container which let you resize its width.
         *
         *  Double-click on the handler to reset the width.
         *  You need a counter part which flexes.
         *
         *
         *```html
         *   <furo-horizontal-flex>
         *     <div flex> the flexible part </div>
         *     <!-- you have to set at leas one handle to resize the content -->
         *     <furo-resizer righthandle remember="logv" minwidth="280" maxwidth="780">
         *       <some-content></some-content>
         *     </furo-resizer>
         *   </furo-horizontal-flex>
         *```
         *
         *
         * @slot {HTMLElement [0..n]} - default slot to add content.
         * @summary resizable box
         * @demo demo-furo-resizer  Basic usage
         * @customElement
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
 * `furo-resizer`
 *  container which let you resize its width.
 *
 *  Double-click on the handler to reset the width.
 *  You need a counter part which flexes.
 *
 *
 *```html
 *   <furo-horizontal-flex>
 *     <div flex> the flexible part </div>
 *     <!-- you have to set at leas one handle to resize the content -->
 *     <furo-resizer righthandle remember="logv" minwidth="280" maxwidth="780">
 *       <some-content></some-content>
 *     </furo-resizer>
 *   </furo-horizontal-flex>
 *```
 *
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 * @summary resizable box
 * @demo demo-furo-resizer  Basic usage
 * @customElement
 * @appliesMixin FBP
 */
export class FuroResizer extends FuroResizer_base {
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
    /**
     * remove the listeners
     * @private
     */
    private _unregister;
    /**
     * capture the mouse movement and resize the width
     * @param e MouseEvent
     * @private
     */
    private _movementHandler;
    /**
     * register the left handler
     * @param e
     * @private
     */
    private _startTrackingLeft;
    _handleLRM: number;
    /**
     * register the right handler
     * @param e
     * @private
     */
    private _startTrackingRight;
    /**
     * Start mouse move tracking
     * @param e
     * @private
     */
    private _startTracking;
    _startwidth: any;
    /**
     * removes remember and set to the initial size
     */
    resetSize: () => void;
    _positions: {};
    lefthandle: any;
    righthandle: any;
    resizer: FuroResizer;
    initialWidthSetByStyle: any;
    /**
     * @private
     * @returns {TemplateResult}
     * @private
     */
    private render;
}
export {};
