/**
 *
 * ## internal events
 * - *before-repeated-field-changed*, fired before new data is injected
 * - *this-metas-changed*, when the metas of a field changed
 * - *repeat-became-valid*, fired when all sub items are valid, after one was invalid before
 * - *repeat-became-invalid*, fired when one sub item switches to a invalid state
 * - *repeated-fields-changed*, fired when this or any child repeaters was changed (new data, add, remove)
 * - *this-repeated-field-changed*, fired when this repeater was changed (new data, add, remove)
 * - *repeated-fields-all-removed* fired when all nodes of a repeater was deleted
 * - *this-repeated-field-removed*, fired whe a node of this repeater was deleted
 * - *this-node-field-deleted*, fired when this node was deleted
 * - *node-field-deleted, fired when a child node was deleted
 * - *repeated-fields-added*, fired when a node on this or any child repeater was added
 * - *this-repeated-field-added*, fired when a node on this repeater was added
 *
 */
export class RepeaterNode {
    constructor(parentNode: any, spec: any, fieldName: any);
    __specdefinitions: any;
    _isRepeater: boolean;
    repeats: any[];
    _spec: any;
    _name: any;
    /**
     * Set this to true to clear the list on new data instead updating the current list.
     * @type {boolean}
     */
    clearListOnNewData: boolean;
    _meta: any;
    _constraints: any;
    _pristine: boolean;
    _isValid: boolean;
    _validationDisabled: any;
    set _value(arg: any[]);
    get _value(): any[];
    __initialValue: string;
    moveNode(oldIndex: any, newIndex: any): void;
    /**
     * resets the field to the initial _values from the spec
     */
    reinit(): void;
    /**
     * removes all children
     */
    reset(): void;
    /**
     * deletes all repeated fields on this node
     */
    removeAllChildren(): void;
    __childNodes: any[];
    /**
     * infinite recursive element protection
     * we can return false here, because a repeater node is not created automatically
     */
    _hasAncestorOfType(): boolean;
    deleteNode(): void;
    __updateMetaAndConstraints(metaAndConstraints: any): void;
    /**
     * Returns all not readonly field values with deep dive
     *
     * @private
     */
    private get _transmitValue();
    /**
     * Returns all modified field values with deep dive (! _pristine)
     * @private
     */
    private get _deltaValue();
    /**
     * Returns required fields with all children which are modified or
     * not readonly
     * @private
     */
    private get _requiredValue();
    /**
     * Returns all validation messages
     * @returns {undefined|*}
     * @private
     */
    private get _validityMessage();
    /**
     * delegates the trigger to all repeats
     * @param event
     * @private
     */
    private _triggerDeepNodeEvent;
    /**
     * Deletes a repeated item by index
     * @param index
     */
    deleteChild(index: any): void;
    _addSilent(): number;
    _setInvalid(error: any): void;
    _getPath(deeppath: any): any;
    _setState(state: any): void;
    add(data: any): any;
}
