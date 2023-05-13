declare const FuroDataHideContent_base: {
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
 * `furo-data-hide-content` hides content in dependency to a boolean field value.
 *
 * It is also possible to call the `hide()` and `show()` methods to show and hide the content and update the value.
 * TODO:  support furo.fat.Bool and google.protobuf.BoolValue
 *
 *```html
 * <furo-data-hide-content animated fn-bind-data="--bind(*.bool)">
 *   <div>some content</div>
 * </furo-collapsible-box>
 *```
 *
 * The attribute animated will add a slide in slide out animation.
 *
 * @fires {Boolean} value-changed -  Fired when the visibility changed, contains the current visibility state
 * @fires {void} hid -  Fired when the content gets hid
 * @fires {void} showed -  Fired when the content gets visible
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * @summary hide content with a boolean fieldnode
 * @customElement
 * @appliesMixin FBP
 */
export class FuroDataHideContent extends FuroDataHideContent_base {
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
    set hidden(arg: any);
    get hidden(): any;
    /**
     * Bind a entity field to the date-input. You can use the entity even when no data was received.
     * When you use `at-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */
    bindData(fieldNode: any | FieldNode): void;
    field: any;
    /**
     * inverses the bool based on hideOnFalse
     * @param bool
     * @return {boolean|*}
     * @private
     */
    private _checkInversedState;
    /**
     * hides the content
     */
    hide(): void;
    /**
     * shows the content
     */
    show(): void;
    /**
     * Toggle the current visibility state.
     */
    toggle(): void;
    _h: any;
    _timeout: NodeJS.Timeout;
    _hidden: any;
    /**
     *
     * @param eventname
     * @private
     */
    private _notify;
    /**
     * @private
     * @returns {TemplateResult}
     * @private
     */
    private render;
}
export {};
