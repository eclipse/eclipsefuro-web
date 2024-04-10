declare const FlowRepeat_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void;
        __fbpAppended: boolean | undefined;
        _FBPTriggerWire(wire: any, detailData: any): void;
        __domPath: string | undefined;
        _call(detailData: any, receiver: any): void;
        _FBPAddWireHook(wire: any, cb: any, before?: any): number;
        _FBPTraceWires(): void;
        _FBPDebug(wire: any, openDebugger: any): void;
        __toCamelCase(str: any): any;
        _appendFBP(dom: any): void;
        _FBPReady(): void;
        __fbp_ready: boolean | undefined;
        __enqueueTrigger(wire: any, detailData: any): void;
        __resolveWireAndPath(w: any): {
            path: any;
            receivingWire: any;
        };
        _pathGet(root: Object, path: string | (string | number)[]): any;
        _pathSet(root: Object, path: string | (string | number)[], value: any): string | boolean;
        _split(path: string | (string | number)[]): string[];
    };
    [x: string]: any;
};
/**
 * `flow-repeat`
 *
 * Custom element to repeat Arrays. The repeated items are injected *before* the `flow-repeat` element. If you need the repeated items inside of an other dom node, use [`setInsertRef`](./flow-repeat/#setinsertref)
 *
 *
 * ```html
 * <flow-repeat ƒ-inject-items="--dataArray">
 *   <template>
 *     <repeated-item index="${this.index}" ƒ-inject="--init">
 *   </template>
 * </flow-repeat>
 * ```
 * > **Note**: if you want to bind a repeater node, use `furo-data-flow-repeat`.
 *
 *
 *  ## Available wires in the template:
 *
 *  > **Note**: Each repeated item has its own closed scope. You can not use the wires outside of the `template`.
 *  > Use events to interact with components outside of the template.
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
 * -  `--itemSelected` : contains `true`, is triggered with select(index).
 * -  `--itemDeSelected` : contains `false`, is triggered when another item is selected with select(index).
 *
 * ## Available attributes
 * **index** contains the current index of the item. Use this to fire a event with an index like `@-click="^^item-clicked(index)"`
 * **item** contains the current index of the item. Use this to fire a event with the repeated item like `@-click="^^item-selected(item)"`
 *
 *
 * @summary Custom element to allow using FBPs template features in repeated template
 *
 * @fires {index of the element} last-element-selected -  Fired when the last element is selected. Use this to trigger a load next.
 * @fires {Number} items-in-dom -  Fired when items are attached to the dom, with Number of items.
 *
 * @customElement
 * @mixes FBP
 */
export class FlowRepeat extends FlowRepeat_base {
    /**
     * @private
     */
    private template;
    /**
     * @private
     */
    private _insertedItems;
    /**
     * Clear the list
     */
    clear(): void;
    /**
     * Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item.
     *
     * @param index {int} - Index of item to select
     */
    select(index: int): void;
    selectedIndex: any;
    /**
     * Select item by its identity.
     *
     * Using this method only works when you have set the `identity-path`.
     *
     * @param identifier {*} Identity from `identity-path`
     */
    selectIdentity(identifier: any): void;
    _selIdentityQueue: any;
    /**
     * Selects next index.  If none was selected, the first index will be selected.
     *
     * If you reached the last index, the first index will be selected.
     *
     * If you reach the last element, `last-element-selected` will fire.
     *
     * Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item
     */
    selectNextIndex(): void;
    /**
     * Selects the previous index.
     *
     * If you are on the first item, the last will be selected.
     *
     * Triggers the wire `--itemSelected` on selected item and `--itemDeSelected` on last selected Item
     */
    selectPreviousIndex(): void;
    /**
     * Triggers the currently selected item.
     *
     * Triggers the wire `--trigger` on the every item.
     *
     * Triggers the wire `--triggerIndex` on the every item.
     *
     * @param data {*} - Data to forward.
     */
    triggerSelected(data: any): void;
    /**
     * Triggers all nodes.
     *
     * Triggers the wire `--trigger` on the every item.
     *
     * Triggers the wire `--triggerIndex` on the every item.
     *
     * @param data {*} - data to forward
     */
    triggerAll(data: any): void;
    /**
     * Triggers the wire `--itemDeSelected` on the last selected item
     */
    deselect(): void;
    /**
     * Set a reference to append the repeated elements in to the ref instead of appending them before the repeater itself.
     *
     * @param ref {DomNode} - Node to append the repeated items.
     */
    setInsertRef(ref: DomNode): void;
    _insertMode: string | undefined;
    _insertTarget: any;
    /**
     *
     * @param attachedElem
     * @param reference
     * @private
     */
    private _insertToDom;
    /**
     * Triggers the wire `--itemDeSelected` on all items
     */
    deselectAll(): void;
    /**
     *
     * @param parent
     * @return {null|*}
     * @private
     */
    private _findFirstHost;
    /**
     * Inject items to repeat.
     *
     * @param items {Array} - Items to repeat
     */
    injectItems(items: any[]): void;
    _firstHost: any;
    /**
     *
     * @param identity
     * @param i
     * @return {HTMLElement}
     * @private
     */
    private _buildDomNode;
    /**
     * @private
     */
    private connectedCallback;
    /**
     * Identity path of a single item.
     * Use this if you have a field which identifies the item.
     * @type {*string}
     */
    identityPath: any;
    _internalWire: any;
    /**
     * Triggers the wire `--trigger` on the first item.
     *
     * Triggers the wire --triggerFirst on the first item.
     *
     * @param data {*} - data to forward to the item.
     */
    triggerFirst(data: any): void;
    /**
     * Triggers the wire `--trigger` on the last item.
     *
     * Triggers the wire --triggerLast on the last item.
     *
     * @param data {*} - data to forward to the item.
     */
    triggerLast(data: any): void;
    /**
     * Triggers the wire `--trigger` on the  item.
     *
     * Triggers the wire `--triggerIndex` on the  item.
     *
     *
     * @param i {int} - index of item that you want to trigger.
     * @param data {*} - data to forward to the item.
     */
    triggerIndex(i: int, data: any): void;
}
export {};
