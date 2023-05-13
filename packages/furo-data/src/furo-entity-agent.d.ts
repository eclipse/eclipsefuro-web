declare const FuroEntityAgent_base: {
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
 * `furo-entity-agent` is an interface component to handle entity requests.
 *
 * > **Note** When you trigger the save method and there is a HTS wich allows to PATCH the record, only the deltas (changes) of
 * > the values are sent.
 *
 * > **Hint** PUT will send all fields which are not marked as **readonly**.
 * > If you want to send all data on PUT (without filtering readonly fields) set `Env.api.sendAllDataOnMethodPut = true;`
 *
 * ```html
 * <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in at-response to the furo-data-object.  -->
 * <furo-entity-agent
 *   service="ProjectService"
 *   fn-hts-in="--hts" at-response="--response"
 *   ></furo-entity-agent>
 *
 *
 * <!-- The furo-data-object will send a initial dataObject of type project.Project on at-response-ready -->
 * <furo-data-object
 *   type="project.ProjectEntity"
 *   fn-inject-raw="--response"
 *   ></furo-data-object>
 * ```
 *
 *
 *
 * @fires {hts} response-hts-updated -  Fired when hts was updated from the response.
 * @fires {response} load-success -  Fired when `load()` was successful.
 * @fires {response} load-failed -  Fired when `load()` was **not** successful.
 * @fires {response} delete-success -  Fired when `delete()` was successful.
 * @fires {response} delete-failed -  Fired when `delete()` was **not** successful.
 * @fires {response} save-success -  Fired when `save()` was successful.
 * @fires {response} save-failed -  Fired when `save()` was **not** successful.
 * @fires {response} put-success -  Fired when `update()` was successful.
 * @fires {response} put-failed -  Fired when `update()` was **not** successful.
 * @fires {response} create-success -  Fired when `create()` was successful.
 * @fires {response} create-failed -  Fired when `create()` was **not** successful.
 * @fires {{Array|HATEOAS}} hts-updated -  Fired when hateoas is updated from response.
 * @fires {Hateoas links} hts-injected -  Fired when hateoas is updated.
 * @fires {} request-aborted -  Fired if the request was successfully cancelled.
 *
 * @fires {Request} request-aborted - Fired when a request was canceled.
 * @fires {Request} request-started - Fired when a request is sent.
 * @fires {Object} response-raw - Fired when a response is received.
 * @fires {Object}  response-error - Fired when an error has occoured. This is a general error event. The specific error events are fired additionally.
 * @fires {Object} response-error-[status-code] - Fired when an error has occoured. This is a specific error event.
 * @fires {Request} fatal-error - Requests are made via the Fetch API if possible.Fallback XMLHttpRequest
 * @fires {Object} response-error-4xx - Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
 * @fires {Object} response-error-5xx - Fired when an error has occoured. This is a group error event. E.g. response-error-5xx, response-error-4xx
 * @fires {Object} response-error-raw - Fired when a error has occoured.
 * @fires {Object} response - Fired when a response is received.
 *
 * @summary interface component to handle entity requests
 * @customElement
 * @demo demo-furo-entity-agent Basic usage
 * @appliesMixin FBP
 */
export class FuroEntityAgent extends FuroEntityAgent_base {
    static get properties(): {
        /**
         * Name des Services
         * @type String
         */
        service: string;
        /**
         * triggers a load when link rel="self" is in the injected hts (after hts-injected is fired)
         * @type Boolean
         */
        loadOnHtsIn: boolean;
        /**
         * Creates the query param update mask according to the google api design guidelines.
         *
         * Your update service must have a query param **update_mask** to use this feature.
         *
         * https://cloud.google.com/apis/design/standard_methods#update
         *
         * You may not need it if your server can handle PATCHes without a update_mask
         * https://grpc-ecosystem.github.io/grpc-gateway/docs/patch.html
         * @type Boolean
         */
        appendUpdateMaskQP: boolean;
    };
    /**
     *
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * Reference to the services
     * @type {{}}
     * @private
     */
    private _servicedefinitions;
    /**
     *
     * @type {*|{headers: [[string, string]], specs: {}, services: {}}}
     * @private
     */
    private _ApiEnvironment;
    /**
     *
     * @type {*[]}
     * @private
     */
    private _pendingRequests;
    /**
     * This field contains the hts links
     * @type {string}
     * @private
     */
    private _linkField;
    /**
     * queue for calls, before hts is set
     * @type {*[]}
     * @private
     */
    private _singleElementQueue;
    /**
     *
     * @type {{}}
     * @private
     */
    private _queryParams;
    /**
     * Setze den Service
     * @param service
     */
    set service(arg: any);
    _requestedService: any;
    _service: any;
    /**
     * Update query params
     * a qp like {"active":true} will just update the qp *active*
     *
     * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
     * @param {Object} key value pairs
     */
    updateQp(qp: any): void;
    /**
     * Binds a furo-data-object type. Use this if you want save data.
     *
     * @param dataObject
     */
    bindRequestData(dataObject: any): void;
    _requestDataObject: any;
    /**
     * Prepare request body depending from method
     * @param link
     * @param dataObject
     * @private
     */
    private _prepareRequestPaylod;
    /**
     * remove null value in payload
     * @param data
     * @returns {*}
     * @private
     */
    private _removeNullValues;
    /**
     * clear the query params that you have setted before
     */
    clearQp(): void;
    /**
     * Creates a Request object with header and body data
     * - special treatment for method PATCH
     * - body object only includes writeable fields
     * @param link
     * @param dataObject
     * @returns {Request}
     * @private
     */
    private _makeRequest;
    /**
     * The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     * @type {AbortController}
     * @private
     */
    private _abortController;
    /**
     * Creates an array with the path information of the object attributes (deep dive)
     * according to https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto
     *
     * `{"paths":["attr1","attr2.sub_attr"]}`
     *
     * @param obj
     * @returns {Array}
     * @private
     */
    private _getFieldMask;
    /**
     * Object flattening method
     * @param obj
     * @returns {{}}
     * @private
     */
    private _flattenObject;
    /**
     * find the first field of type furo.Link and use this for hts-out
     * @param fields
     * @private
     */
    private _evaluateLinksField;
    /**
     * loads the entity if hts is available
     */
    load(): boolean;
    /**
     * delete the entity if hts is available
     */
    delete(): void;
    /**
     * loads the entity if hts is available
     */
    save(): true | void | Error;
    /**
     * saves the entity with method put if hts is available
     */
    put(): void;
    /**
     * creating the entity if hts rel="create" is available
     */
    create(): void;
    /**
     * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
     * @param eventPrefix
     * @private
     */
    private _attachListeners;
    /**
     *
     * @param hts
     * @return {boolean}
     * @private
     */
    private _updateInternalHTS;
    _hts: any[];
    htsIn(hts: any): void;
    /**
     * Aborts a pending request
     */
    abortPendingRequest(): void;
    /**
     * @private
     * @return {TemplateResult}
     */
    private render;
}
export {};
