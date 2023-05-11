/**
 *
 * ## internal events
 * - *this-field-became-invalid*, when a field gets invalid
 * - *field-became-invalid* **bubbles**, when a field gets invalid
 * - *this-field-became-valid*, when a field gets valid
 * - *field-became-valid* **bubbles**, when a field gets valid
 * - *this-field-value-changed*, when the value of a field changed
 * - *field-value-changed* **bubbles**, when the value of a field changed
 * - *this-metas-changed*, when the metas of a field changed
 * - *metas-changed* **bubbles**, when the meta of a field changed
 * - *oneof-field-cleared*, when a field in a oneof group was cleared
 * - *oneof-field-changed*, when a field in a oneof group was changed
 * - *this-node-field-added*, when a sub field was added to a field
 * - *node-field-added* **bubbles**, when a sub field was added to a field
 * - *this-node-field-deleted*, when a sub field was added to a field
 * - *node-field-deleted* **bubbles**, when a sub field was added to a field
 * - *any-type-removed*, fired before a node of type any changes its inner type
 * - *any-type-created*, fired when a node of type any is created or the type was changed
 *
 *
 * ## internal broadcasted events
 * - *parent-readonly-meta-set*, when readonly was set on a parent field
 *
 */
export class FieldNode {
    constructor(parentNode: any, fieldSpec: any, fieldName: any);
    /**
     * ref to the specs
     * @private
     */
    private __specdefinitions;
    /**
     * Reference to the current spec definition of the fieldNode
     */
    _spec: any;
    _meta: any;
    _constraints: any;
    /**
     * Name of the field
     * @private
     */
    private _name;
    /**
     *
     * @private
     */
    private __index;
    /**
     * getter setter store
     * @type {null}
     * @private
     */
    private __value;
    /**
     * Pristine state of the fieldNode, this is always set to true when new data is injected and is false if the value itself or the value of a child node gets changed.
     * @type {boolean}
     */
    _pristine: boolean;
    /**
     * Validity of the fieldNode, this is always set to true when new data is injected and is false if the value itself validates to false or the value of a child node validates to false.
     * @type {boolean}
     */
    _isValid: boolean;
    /**
     *
     * also inherit _validationDisabled from parent
     * @type {boolean|*}
     * @private
     */
    private _validationDisabled;
    _isRecursion: boolean;
    /**
     * Set the value of the field to the specified defaults.
     * @param val
     */
    set defaultvalue(arg: any);
    /**
     * store __initialValue value for setting the field back to the defaults
     * @type {string}
     * @private
     */
    private __initialValue;
    /**
     * create a field in a FieldNode, this is useful when using map<string,something>
     *   set the value option to init with values
     * @param options {"fieldName":"name","type":"string", "spec":{..}}  spec is optional
     */
    createField(options: "fieldName"): boolean;
    /**
     * infinite recursive element protection
     * @private
     */
    private _hasAncestorOfType;
    moveNode(oldIndex: any, newIndex: any): void;
    /**
     * sets the field to the initial values from the spec
     * default values are applied
     */
    reinit(): void;
    set _value(arg: null);
    /**
     * returns the raw value of the field node
     * @return {null}
     * @private
     */
    get _value(): null;
    /**
     * resets the field to empty values
     * no default values are applied
     * @param type
     * @private
     */
    private reset;
    _createVendorType(type: any): void;
    _oldvalue: any;
    _siblingIsChangeing: boolean;
    _checkConstraints(event: any): boolean;
    /**
     *
     * @param metaAndConstraints
     * @param level
     * @private
     */
    private __updateMetaAndConstraints;
    /**
     * fires a NodeEvent recursively
     * starting point is caller
     * @param event
     * @private
     */
    private _triggerDeepNodeEvent;
    _createAnyType(val: any): void;
    __anyCreated: boolean;
    _updateKeyValueMap(val: any, spec: any): void;
    _fieldIsMap: boolean;
    /**
     * deletes the fieldnode
     */
    deleteNode(): void;
    /**
     * Set the value of the data object with a base64 encoded string
     * @param encodedData
     * @private
     */
    private set _base64(arg);
    /**
     * returns the value of the data object as a base64 encoded string
     * @return {string}
     * @private
     */
    private get _base64();
    /**
     * Returns all not readonly fields values with deep dive
     * Mandatory fields (required is true) MUST always be transmitted
     * !readonly || required
     * @private
     */
    private get _transmitValue();
    /**
     * Returns all modified fields values with deep dive (! _pristine)
     * modified || required
     * @private
     */
    private get _deltaValue();
    /**
     * Returns required fields with all children
     * @private
     */
    private get _requiredValue();
    /**
     * Returns all validation messages
     * @private
     */
    private get _validityMessage();
    _validity: any;
    _clearInvalidity(): void;
    /**
     *
     * @param error {"description":"error description / message"} => used in data-input-type for hints
     * @private
     */
    private _setInvalid;
    /**
     * Resolve `Fieldnodes` by path.
     * @param deeppath {string} Path like data.name
     * @returns {FieldNode|*|FieldNode}
     * @private
     */
    private _getPath;
    _setState(state: any): void;
    _state: any;
    toString(): string;
}
