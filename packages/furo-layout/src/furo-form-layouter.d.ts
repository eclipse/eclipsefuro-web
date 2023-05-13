declare const FuroFormLayouter_base: {
    new (): {
        [x: string]: any;
        /**
         * `furo-form-layouter`
         *
         * Use furo-form-layouter to structure your forms.
         * It is based on a grid system with the following properties:
         * - full-width row (Standard)
         * - two columns
         * - four columns
         *
         * The required variant is set using an attribute.
         * e.g. two, three, four and six
         *
         * ```html
         * <!-- four coulumn layout -->
         * <furo-form-layouter four>
         *    <input-element></input-element>
         *    <input-element double></input-element>
         *    <input-element newline></input-element>
         *    <input-element full></input-element>
         * </furo-form-layouter>
         * ```
         *
         *
         * To customize the slotted elements inside furo-form-layouter there are several attributes.
         * - double | stretches the element over two units
         * - full | stretches the element to full width
         * - newline | forces a new line
         *
         * ### Responsiveness
         * Columns | narrow | narrower  |
         * ----------------|-------------|-------------|
         * `one` | one | one |
         * `two` | one | one |
         * `three` | one | one |
         * `four` | two | one |
         * `six` | three | one |
         *
         * @cssprop {0px} [--furo-form-layouter-row-gap=0px] - width of row gap
         * @cssprop {0px} [--furo-form-layouter-column-gap=0px] - width of column gap
         *
         * @slot {HTMLElement [0..n]} - default slot to add content.
         *
         *  @attribute {bool} one - One column layout.
         *  @attribute {bool} two - Two column layout, switches to one when breakpoint is reached.
         *  @attribute {bool} three - Three column layout, switches to one when breakpoint is reached.
         *  @attribute {bool} four - Three column layout, switches to two when breakpoint-big is reached and to one if breakpoint-small is reached.
         *  @attribute {bool} six - Three column layout, switches to three when breakpoint-big is reached and to one if breakpoint-small is reached.
         *
         * Tags: form
         * @summary Grid based form field row
         * @customElement
         * @demo demo-furo-form-layouter Basic forms
         * @demo demo-furo-form-layouter-complex Complex forms
         * @demo demo-furo-form-layouter-variants All variants
         * @mixes FBP
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
 * `furo-form-layouter`
 *
 * Use furo-form-layouter to structure your forms.
 * It is based on a grid system with the following properties:
 * - full-width row (Standard)
 * - two columns
 * - four columns
 *
 * The required variant is set using an attribute.
 * e.g. two, three, four and six
 *
 * ```html
 * <!-- four coulumn layout -->
 * <furo-form-layouter four>
 *    <input-element></input-element>
 *    <input-element double></input-element>
 *    <input-element newline></input-element>
 *    <input-element full></input-element>
 * </furo-form-layouter>
 * ```
 *
 *
 * To customize the slotted elements inside furo-form-layouter there are several attributes.
 * - double | stretches the element over two units
 * - full | stretches the element to full width
 * - newline | forces a new line
 *
 * ### Responsiveness
 * Columns | narrow | narrower  |
 * ----------------|-------------|-------------|
 * `one` | one | one |
 * `two` | one | one |
 * `three` | one | one |
 * `four` | two | one |
 * `six` | three | one |
 *
 * @cssprop {0px} [--furo-form-layouter-row-gap=0px] - width of row gap
 * @cssprop {0px} [--furo-form-layouter-column-gap=0px] - width of column gap
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 *  @attribute {bool} one - One column layout.
 *  @attribute {bool} two - Two column layout, switches to one when breakpoint is reached.
 *  @attribute {bool} three - Three column layout, switches to one when breakpoint is reached.
 *  @attribute {bool} four - Three column layout, switches to two when breakpoint-big is reached and to one if breakpoint-small is reached.
 *  @attribute {bool} six - Three column layout, switches to three when breakpoint-big is reached and to one if breakpoint-small is reached.
 *
 * Tags: form
 * @summary Grid based form field row
 * @customElement
 * @demo demo-furo-form-layouter Basic forms
 * @demo demo-furo-form-layouter-complex Complex forms
 * @demo demo-furo-form-layouter-variants All variants
 * @mixes FBP
 */
export class FuroFormLayouter extends FuroFormLayouter_base {
    static get properties(): {
        /**
         * Set custom breakpoint big
         * Default: "810"
         *
         * @type String
         */
        breakpointBig: string;
        /**
         * Set custom breakpoints small
         * Default: "405"
         *
         * @type String
         */
        breakpointSmall: string;
        /**
         * Set narrow-fix attribute to force
         * the layout analog to breakpoint big
         *
         * @type Boolean
         */
        narrowFix: boolean;
        /**
         * Set narrower-fix attribute to force
         * 1 column view (analog breakpoint small)
         *
         * @type Boolean
         */
        narrowerFix: boolean;
    };
    static get styles(): import("lit").CSSResult;
    narrow: boolean;
    narrower: boolean;
    breakpointBig: number;
    breakpointSmall: number;
    /**
     *
     * @param width
     * @private
     */
    private _checkSize;
    /**
     *
     * @private
     */
    private _fireResize;
    /**
     * @private
     * @returns {TemplateResult | TemplateResult}
     */
    private render;
}
export {};
