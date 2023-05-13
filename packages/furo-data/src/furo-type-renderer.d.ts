declare const FuroTypeRenderer_base: {
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
 * The furo-type-renderer is used to display type specific data. It uses **display** as default context and will warn you
 * on the console if the requested `context-[type-name]` does not exist or was not imported.
 *
 * There is a standard set of display components @furo/ui5/src/standard-type-renderers for rendering the individual types.
 *
 * The standard ui5 set can be integrated with the import
 * - import '@furo/ui5/src/standard-type-renderers/display-registry.js'.
 *
 * The standard material set can be integrated with the import
 * - import '@furo/data-ui/src/standard-type-renderers/display-registry.js'.
 *
 * If you want to implement an individual display of a type, you need your own `context-[type-name]` component and import it.
 *
 * for repeated fields you should write your own context-[type-name]-repeated component and import it.
 * If no context-[type-name]-repeated exists, the renderer will use the display-[type] component as fallback and
 * display it repeatedly, this is ok for a lot of cases.
 *
 * ## Naming convention
 *
 * ```
 * display-google-type-timeofday
 * ------- ---------------------
 *    |             |
 * context      type-name
 *
 * # examples:
 * cell-string
 * celledit-string
 * display-string
 * yourcontext-string
 *
 * The method to evaluate the renderer is built as following:
 *
 * context-[(package.type).replaceAll('.', '-').toLocaleLowerCase()]
 * ```
 *
 *
 *
 * ## Basic Usage
 * ```html
 *   <furo-type-renderer fn-bind-data="--dao(*.data.fieldname)"></furo-type-renderer>
 * ```
 *
 * ## Writing your own renderer
 * The only API you need to implement in your component is the `bindData()` method.
 * You just have to follow the naming convention for your renderer.
 *
 * @summary dynamic type rendering
 * @customElement furo-type-renderer
 * @appliesMixin FBP
 */
export class FuroTypeRenderer extends FuroTypeRenderer_base {
    static get styles(): import("lit").CSSResult;
    /**
     *@private
     */
    private static get properties();
    context: string;
    /**
     * Bind a fieldnode of any type
     * @param fieldNode {FieldNode} Fieldnode of any type
     */
    bindData(fieldNode: FieldNode): void;
    /**
     * Evaluates the component name
     * Special treatment for google.protobuf.Any
     */
    _field: FieldNode;
    /**
     * if there exists already a field @type, the correct
     * render component according @type information will be created
     */
    renderName: string;
    defaultElement: HTMLElement;
    /**
     * Creates the component for single fields
     * @private
     */
    private _createDisplay;
    /**
     * Creates the component for repeated fields
     * Component naming: [package-type]-repeated
     *
     * Fallback: if no -repeated component is available, a flow-repeat is used...
     * @private
     */
    private _createRepeatedDisplay;
    _fallbackFlowRepeat: HTMLElement;
    /**
     * Attribute handling
     * Adding to DOM
     * @param el
     * @private
     */
    private _addElement;
    _insertedElementRef: any;
    /**
     * forward the focus to the created element
     */
    focus(): void;
    /**
     * Remove the inserted element, if the type renderer itself is removed
     * @private
     */
    private disconnectedCallback;
    /**
     * Append when reconnect
     */
    connectedCallback(): void;
    /**
     *
     * @private
     */
    private _warning;
}
export {};
