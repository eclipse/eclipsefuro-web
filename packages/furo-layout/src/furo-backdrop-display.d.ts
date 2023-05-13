declare const FuroBackdropDisplay_base: {
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
 * `furo-backdrop-display`
 *
 * This components receives and displays the backdrop requests from furo-backdrop components.
 *
 * The backdrop display can be placed anywhere in the dom. The higher the better.
 *
 * Tipp: place it below or inside the component which applies the style vars. Othewise the displayed components
 * do not know these vars.
 *
 * ```html
 * <!-- place the display in your main-stage -->
 * <furo-backdrop-display></furo-backdrop-display>
 * ```
 *
 * @cssprop {0px} [--furo-backdrop-color=#6d6d6d] - background color of backdrop
 *
 * @summary Display component for furo-backdrop
 * @customElement
 * @demo demo-furo-backdrop Basic usage
 * @appliesMixin FBP
 */
export class FuroBackdropDisplay extends FuroBackdropDisplay_base {
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
     * timeout duration
     * @type {number}
     */
    toDuration: number;
    contentSource: any;
    start: boolean;
    show: boolean;
    /**
     * closes the backdrop.
     * You can close the backdrop on the display element, this is useful when you want to close the backdrops on page
     * changes.
     *
     * Usualy the component which triggers the backdrop or is displayed closes it.
     */
    close(): void;
    /**
     * @private
     * @returns {TemplateResult}
     * @private
     */
    private render;
}
export {};
