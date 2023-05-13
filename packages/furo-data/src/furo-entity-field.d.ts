/**
 * Use this component to interact with fields from a furo-data-object.
 *
 * You can update the field value or listen to changes of a field.
 *
 * ```html
 * <furo-entity-field fn-bind-data="--dataObject(*.field)"></furo-entity-field>
 * ```
 *
 * @fires {*} value-changed -  Fired when the field value or a child value of it was changed.
 * @summary interact with single field of a data object
 * @customElement
 * @mixes FBP
 */
export class FuroEntityField extends LitElement {
    static get styles(): import("lit").CSSResult;
    /**
     * Set the value of the field.
     * @param value {*}
     */
    setValue(value: any): void;
    /**
     * Set a value to update the fieldnode
     * @param v {*}
     */
    set value(arg: any);
    get value(): any;
    _queue: any;
    _value: any;
    _pristine: boolean;
    _isValid: boolean;
    /**
     * Bind a FieldNode to the date-input.
     *
     * `--personDO(*.person.firstname)`
     *
     * @param {Object|FieldNode} fieldNode a Field object
     */
    bindData(fieldNode: any | FieldNode): any;
    field: any;
    /**
     * Trigger deleteNode on the `FieldNode`.
     */
    deleteNode(): void;
}
import { LitElement } from 'lit';
