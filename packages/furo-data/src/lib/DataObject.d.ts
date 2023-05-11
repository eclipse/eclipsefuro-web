/**
 * EntityNode is usually the root node of an eventTree
 */
export class DataObject {
    /**
     * helper to set deep paths
     * @param path String a.b.c.d
     * @param value
     * @private
     */
    private static _pathSet;
    constructor(parentNode: any, type: any, specs: any);
    /**
     * reference to the specs
     * @private
     */
    private __specdefinitions;
    _spec: any;
    _type: any;
    _pristine: boolean;
    _isValid: boolean;
    validateAllFields(): void;
    /**
     * clears all errors on every fieldnode
     */
    clearAllErrors(): void;
    /**
     * set all children to pristine
     * useful for deltas
     */
    setAllToPristine(): void;
    /**
     * injects a raw model e.g. body data of a collection or entity
     * @param rawEntity
     */
    injectRaw(rawEntity: any): void;
    _rawEntity: any;
    /**
     * Resete zum letzten injected state zurück
     */
    reset(): void;
    _hasAncestorOfType(type: any): boolean;
    get rawEntity(): any;
    /**
     * This setter aliases to injectRaw. Added for compatibility reasons for the FieldNodeAdapter
     * @param rawEntity
     */
    set _value(arg: any);
    /**
     * Returns a json representation of your Data Object
     * @return {*}
     */
    get _value(): any;
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
     * Returns a json representation of your Data Object
     * @return {*}
     */
    getJson(): any;
    /**
     * Returns a json representation of all field validity messages
     * @returns {{}}
     */
    getValidityMessage(): {};
    _updateFieldValuesAndMetaFromRawEntity(node: any, data: any): void;
    /**
     * Update meta and constraint fields
     * @param metaAndConstraints
     * @private
     */
    private __updateMetaAndConstraints;
    _setInvalid(error: any): void;
    _validity: any;
    /**
     * Resolve `Fieldnodes` by path.
     * @param deeppath {string} Path like data.name
     * @returns {FieldNode|*|FieldNode}
     * @private
     */
    private _getPath;
    /**
     * Baut die Felder aufgrund der spec auf
     * @param node
     * @param fieldSpec
     * @private
     */
    private _initFieldsFromSpec;
    toString(): any;
}
