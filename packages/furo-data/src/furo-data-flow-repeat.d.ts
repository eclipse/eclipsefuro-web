declare const FuroDataFlowRepeat_base: {
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
 * `furo-data-flow-repeat` Is a bindable repeater.
 *
 *
 *  ```html
 *  <furo-data-flow-repeat identity-path="id" fn-bind-data="--data(*.repeaterfield)">
 *    <template>
 *      <furo-ui5-data-text-input-labeled
 *          fn-bind-data="--init"></furo-ui5-data-text-input-labeled>
 *    </template>
 *  </furo-data-flow-repeat>
 *  ```
 *  *The wire `--init` is fired from furo-data-flow-repeat*
 *
 *  If you want to delete a repeated item, implement something which triggers the `deleteNode` method on the fieldNode itself.
 *
 *  ## Available wires in the template:
 *
 * -  `--init` : contains the repeated item, fired only once on creation of the repeated node
 * -  `--item` : contains the repeated item, fired on every inject
 * -  `--firstItem` : contains the repeated item, fired on the first element.
 * -  `--lastItem` : contains the repeated item, fired on the last element.
 * -  `--index` : contains a number with the index of the element.
 * -  `--host` : contains a reference to the host component.
 * -  `--trigger` : contains what was passed in to the triggering method.
 * -  `--triggerFirst` : contains what was passed in to the triggering method.
 * -  `--triggerLast` : contains what was passed in to the triggering method.
 * -  `--itemSelected` : contains nothing, is triggered with select(index).
 * -  `--itemDeSelected` : contains nothing, is triggered when another item is selected with select(index).
 *
 * ## Available attributes
 * **index** contains the current index of the item. Use this to fire a event with an index like `at-click="^^item-clicked(index)"`
 * **item** contains the current index of the item. Use this to fire a event with the repeated item like `at-click="^^item-selected(item)"`
 *
 * @summary automatic display of repeated fields
 * @customElement
 * @demo demo-furo-data-flow-repeat
 * @appliesMixin FlowRepeat
 */
export class FuroDataFlowRepeat extends FuroDataFlowRepeat_base {
    /**
     * Enable this to select the created item. This will trigger a wire `--itemSelected` which can be wired to
     * `fn-focus="--itemSelected"`.
     * @type {boolean}
     */
    selectAddedItem: boolean;
    /**
     * By setting this param, the repeater has not to rebuild the list on new data. It only updates the parts that have changed.
     *
     * The path is a field, relative to the root of the repeated item.
     *
     * @type {String}
     */
    identityPath: string;
    /**
     * Bind a repeater node.
     *
     * If `identity-path` is not set, the list will be cleared every time it receives new data.
     *
     * @param fieldNode {RepeaterNode} Must be a repeater node.
     * @return {boolean}
     */
    bindData(fieldNode: RepeaterNode): boolean;
    /**
     * Adds a repeated item of the same type.
     *
     * If  no object is set, a initial FieldNode of the same type is added to the repeats.
     *
     * @param data {Object} Object that match the type of the repeated node.
     */
    add(data: any): void;
}
export {};
