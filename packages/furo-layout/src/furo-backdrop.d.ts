declare const FuroBackdrop_base: {
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
 * `furo-backdrop`
 *
 * Displays content with a backdrop.
 *
 * The element you place in to furo-backdrop will be displayed centered.
 *
 *
 * ```html
 * <furo-backdrop at-opened="--BackdropFocus" at-closed="--backdropClosed"
 *   fn-show="--expandIconClicked"
 *   fn-close="--closeRequested, --recordSelected">
 *      <any-component at-item-selected="--recordSelected" style="width: 90vw; height: 90vh"></any-component>
 * </furo-backdrop>
 *
 * ```
 *
 * You can wire and use the elements in furo-backrop as if they were local elements.
 *
 * Do not forget to add the furo-backdrop-display somewhere in the parent dom.
 *
 * @fires { FuroBackdrop } opened - The **opened** event will be fired when the content is visible on the backdrop.
 * Tipp: you can use this to focus something on the shown content.
 * Event.details {FuroBackdrop} is the reference to the emiting DOM node.
 *
 *
 * @fires { FuroBackdrop } closed - The **closed** event will be fired when the displayed content is invisible and the backdrop is closed.
 * Tipp: Maybe you want to use this event to refocus the initiator.
 * Event.details {FuroBackdrop} is the reference to the emiting DOM node.
 *
 * @fires { FuroBackdrop } register-backdrop - Internal event to move the contents to the backdrop-display.
 * Event.details {FuroBackdrop} is the reference to the emiting DOM node.
 *
 * @summary show content with backdrop
 * @demo demo-furo-backdrop Basic usage
 * @customElement
 * @appliesMixin FBP
 */
export class FuroBackdrop extends FuroBackdrop_base {
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * Initiates the backdrop and shows the content on top of the backdrop area.
     */
    show(): void;
    /**
     * Hides the display.
     *
     * **Note:** The display will also get closed when the user clicks on the backdrop.
     */
    close(): void;
}
export {};
