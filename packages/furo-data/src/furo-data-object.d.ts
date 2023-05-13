/**
 * `furo-data-object` gives you a object which is built based on the **type** spec.
 * The types must be available in the {Env}, learn more about setting up the environment in the guide.
 *
 * The data will mostly be used in a [data-ui]/(../../data-input/doc) component or in component that yoh build, which contains one or more of them.
 *
 * `furo-data-object` receives its data regularly from a [collection-aget](furo-collection-agent) or a  [entity-aget](furo-entity-agent).
 * But you can also send json data which is formed like the raw-data of this type.
 *
 * `furo-data-object` will not do any validation or data manipulation neither will send the data. It is just responsible to
 * transform incomming data to an object and vice versa. You can access the manipulated data structure on the property
 * `.data.rawData` with javascript (if needed).
 *
 * ```html
 *  <!-- The furo-data-object will send a initial dataObject of type project.Project on at-response-ready -->
 *  <furo-data-object
 *      type="project.Project"
 *      fn-inject-raw="--response(*.data)" at-object-ready="--dataObject"></furo-data-object>
 *
 *  <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in at-response to the furo-data-object.  -->
 *  <furo-entity-agent
 *      service="ProjectService"
 *      fn-save="--saveClicked"
 *      fn-bind-request-data="--dataObject" at-response="--response" ></furo-entity-agent>
 *```
 * @fires {} data-injected -  Fired when injected data was processed (**bubbles**).
 * @fires {{Object|CollectionNode}} data-changed -  Fired when data in furo-data-object has changed  (**bubbles**). This event fires a lot, consider using a de-bounce with the event.
 * @fires {{Object|CollectionNode}} data-changed-after-inject -  Fired when data in furo-data-object has changed after injectRaw is complete (**bubbles**). This event fires a lot, consider using a de-bounce with the event.
 * @fires {{Object} the field node} field-value-changed -  Fired when a field has changed.
 * @fires {DataObject} validation-success -  Fired when validation results in a valid state.
 * @fires {DataObject} validation-failed -  Fired when validation results in a invalid state.
 * @fires {{Object|EntityNode} reference to entity} data-object-became-invalid -  Fired when the data object switches from ininvalid to invalid state (**bubbles**).
 * @fires {{Object|EntityNode} reference to entity} data-object-became-valid -  Fired when the data object switches from invalid to valid state (**bubbles**).
 * @fires {A EntityNode object} object-ready -  Fired when the object defined by `type` is built (**bubbles**).
 * @fires {A EntityNode object} init-completed -  Fired when the object init was done (**bubbles**).
 *
 * @summary Typed data object
 * @customElement
 * @demo demo-furo-data-object Basic usage
 * @demo demo-furo-data-object-validator object validator demo
 * @appliesMixin FBP
 */
export class FuroDataObject extends LitElement {
    static get properties(): {
        /**
         * The name of the type you want to use. The type must be registered in Env
         *
         * @type String
         */
        type: string;
    };
    static get styles(): import("lit").CSSResult;
    /**
     *
     * @type {{}}
     * @private
     */
    private _specs;
    /**
     * inject a raw data response from the corresonding agent.
     *
     * Input may look something like this:
     *
     * **Entity data**
     *
     * ```json
     *{
     *  "data": {},
     *  "links": [],
     *  "meta": {}
     *}
     * ```
     *
     * **Collection data**
     *
     * ```json
     *{
     *  "data": {},
     *  "links": [],
     *  "meta": {},
     *  "entities": []
     *}
     * ```
     *
     * @param jsonObj
     */
    injectRaw(jsonObj: any): Promise<any>;
    _injectingCompleted: boolean;
    _injectPromise: Promise<any>;
    _queue: any;
    _queuedInjectResolver: (value: any) => void;
    /**
     * Set all nodes to pristine
     *
     * Useful for working with deltas
     */
    setPristine(): void;
    /**
     * Clears all errors on children without any validation!
     */
    clearAllErrors(): void;
    /**
     * Triggers the validation of all fields in the data object.
     *
     * Use this before you submit some data to a server.
     *
     * Will cause a `data-object-became-valid` or `data-object-became-invalid` and a validation-success or validation-failed event.
     */
    validateAllFields(): void;
    /**
     * Append errors from custom methods or other agents or sources to the data object.
     * The error object must have a grpc status error signature like:
     * ```json
     * {
     *  "code":3,
     *  "message":"invalid username",
     *  "details":[{
     *          "@type":"type.googleapis.com/google.rpc.BadRequest",
     *          "field_violations":[{
     *              "field":"user.name",
     *              "description":"The username must only contain alphanumeric characters"
     *           }]
     *     }]
     * }
     * ```
     * @param grpcStatus
     */
    appendErrors(grpcStatus: any): void;
    /**
     * Set the type. The type must be available in the environment
     * @param type
     */
    set type(arg: any);
    _type: any;
    /**
     * get the data from the data object as raw json
     */
    get json(): any;
    /**
     * Reset the model to the last injected state.
     *
     * To set the model to the initial state use init
     */
    reset(): void;
    /**
     * Sets the model to an initial state according to the given type.
     *
     * fires *init-completed*
     *
     * To reset changed data to the last injected state, please use reset();
     */
    init(): Promise<any>;
    /**
     * get the data of the data object
     */
    getData(): EntityNode;
    /**
     *
     * @param type
     * @private
     */
    private _checkType;
    /**
     * create the entity node
     * @type {EntityNode}
     */
    data: EntityNode;
    _initial: any;
}
import { LitElement } from 'lit';
