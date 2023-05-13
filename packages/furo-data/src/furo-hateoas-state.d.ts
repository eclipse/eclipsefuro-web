declare const FuroHateoasState_base: {
    new (): {
        [x: string]: any;
        __fieldNode: {};
        __internalUpdateInProgress: boolean;
        getDataType(): any;
        isFat(): any;
        isWrapper(): any;
        bindData(fieldNode: import("./lib/FieldNode.js").FieldNode | import("./lib/RepeaterNode.js").RepeaterNode): boolean;
        __meta: {
            default: string;
            hint: string;
            label: string;
            options: {};
            readonly: boolean;
            repeated: boolean;
            typespecific: any;
        };
        setFnaFieldValue(value: any): void;
        onFnaFieldValueChanged(value: any): void;
        onFnaConstraintsChanged(constraints: any): void;
        onFnaOptionsChanged(options: any): void;
        onFnaReadonlyChanged(readonly: any): void;
        onFnaHintChanged(hint: any): void;
        onFnaLabelChanged(label: any): void;
        onFnaPlaceholderChanged(placeholder: any): void;
        onFnaFieldNodeBecameValid(): void;
        onFnaFieldStateChanged(): void;
        onFnaFieldNodeBecameInvalid(validity: any): void;
        onFnaFieldNewDataInjected(): void;
        onFnaRepeatedFieldChanged(): void;
        disconnectedCallback(): void;
        __reattachListenersAfterMove: boolean;
        connectedCallback(): void;
        __registerHandlers(): void;
        __fieldValueChangedHandler: () => any;
        ___timeout: NodeJS.Timeout;
        __fieldMetasChangedHandler: () => any;
        __constraintsStringified: any;
        __fieldBecamesValidHandler: () => any;
        __fieldFocusHandler: () => any;
        __fieldStateChangedHandler: () => any;
        __fieldNewDataInjectedHandler: () => any;
        __repeatedFieldChangedHandler: () => any;
        __fieldBecamesInvalidHandler: (event: any) => any;
        __detachEventListeners(): void;
    };
    [x: string]: any;
};
/**
 * `furo-hateoas-state` is an invisible component with a binding of type furo.Link or injection of a link array.
 *
 * It disables / enables or hides / shows components according to the injected HATEOAS links. `furo-hateoas-state` only
 * sets or remove the attributes **hidden** and **disabled** on the nodes.
 *
 * All nodes inside the same parent are taken in to control.
 *
 * Elements inside a shadow root are not selected.
 *
 * Set the attribute **data-rel="list"** on any element you want to control with `furo-hateoas-state`.
 *
 * Set the attribute **hide-no-rel** if you want to hide the node instead of being disabled.
 *
 * ```html
 * <div>
 *   <button data-rel='list'>list</button>
 *   <button hide-no-rel data-rel='list'>hide no rel</button>
 *   <button data-rel='add'>add</button>
 *   <furo-hateoas-state fn-bind-hts='--collection(*.links)'></furo-hateoas-state>
 * </div>
 * ```
 * *all elements with a data-rel="something" attribute inside the div are controlled*
 *
 * @summary disables or hide nodes based on hts
 * @customElement
 * @appliesMixin FBP
 */
export class FuroHateoasState extends FuroHateoasState_base {
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * Enable or show all nodes.
     */
    enable(): void;
    /**
     * Disable or hide all nodes.
     */
    disable(): void;
    /**
     *
     * @param fieldNode
     * @return {boolean}
     * @private
     */
    private bindData;
    /**
     * Bind a `RepeaterNode` of type `furo.Link`.
     *
     * @param Links
     */
    bindHts(Links: any): void;
    /**
     * Inject a link array directly.
     *
     * ```json
     * [
     *   {
     *     "href": "/mockdata/persons/list",
     *     "method": "GET",
     *     "rel": "list",
     *     "type": "person.PersonCollection",
     *     "service": "PersonService"
     *   }
     * ]
     * ```
     *
     * @param value {[json]} Array with raw `furo.Link` like
     */
    injectHts(value: [json]): void;
}
export {};
