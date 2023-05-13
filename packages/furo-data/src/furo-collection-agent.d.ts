declare const FuroCollectionAgent_base: {
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
 * `furo-collection-agent` is an interface component to handle collection requests.
 *
 *
 * ```html
 * <furo-collection-agent
 *    service="Servicename"
 *    fn-hts-in="--hts"></furo-collection-agent>
 *
 * <!-- produces a hateoas link array -->
 * <furo-deep-link
 *     service="Servicename" at-hts-out="--hts"></furo-deep-link>
 *
 * ```
 *
 *
 *
 * *before you can do any requests, the service and the HATEOAS must be defined*
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
 * @fires {hts} response-hts-updated -  Fired when the hts was updated by the received response.
 * @fires {} filter-changed -  Fired when filter was updated with `fn-set-filter`.
 * @fires {Array|HATEOAS} hts-updated -  Fired when hateoas was updated from response.
 * @fires {Hateoas links} hts-injected -  Fired when hateoas was updated
 * @fires request-aborted - Fired if the request was successfully cancelled
 *
 * @summary interface component to handle collection requests
 * @customElement
 * @demo demo-furo-collection-agent Basic usage
 * @appliesMixin FBP
 */
export class FuroCollectionAgent extends FuroCollectionAgent_base {
    static get properties(): {
        /**
         * The service name from the specs.
         * @type String
         */
        service: string;
        /**
         * Sets pagination size in the List request.
         *
         * Only useful if your service supports pagination.
         * @type Number
         */
        pageSize: number;
        /**
         * Comma separated list of fields (like a fieldmask)
         * used for partial representation / partial responses.
         *
         * If your services supports this feature, you will receive a subset of the fields.
         * @type String
         */
        fields: string;
        /**
         * Sorting order
         *
         * order-by="foo,-bar"  means foo asc and bar desc
         *
         * https://cloud.google.com/apis/design/design_patterns#sorting_order
         *
         * To avoid sql injection errors we do not send any sql like syntax!
         *
         * Only useable if your service has implemented this feature.
         * @type String
         */
        orderBy: string;
        /**
         * Set the filter.
         *
         * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.
         *
         * Only useable if your service has implemented this feature.
         * @type String
         */
        filter: string;
        /**
         * Parameter for contextual representations
         *
         * To reduce network traffic, it is sometimes useful to allow the client to limit which parts of the resource the server should return in its responses,
         * returning a view of the resource (i.e. specialized version for dropdowns ) instead of the full resource representation.
         *
         * https://cloud.google.com/apis/design/design_patterns#resource_view
         *
         * view=smallcards
         *
         * Only useable if your service has implemented this feature.
         * @type String
         */
        view: string;
        /**
         * Executes a list when a rel="list" is injected.
         * @type Boolean
         */
        listOnHtsIn: boolean;
        /**
         * Executes a loadRel when a rel="XXXX" is injected.
         *
         * You have to set the attributes *rel* and *method* to have this working.
         *
         * This is useful for getting "custom" collections.
         * @type Boolean
         */
        loadRelOnHtsIn: boolean;
        /**
         * rel which should be used on load rel
         * @type String
         */
        rel: string;
        /**
         * for compatibility reasons you have to specify the method inside of the service.
         *
         * This attribute should not be needed in future versions, because the rel already contains all relevant information.
         * @type String
         */
        method: string;
    };
    /**
     * easy access to the services
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
     * Attaches temporary listeners to fire load-success, load-fail, delete-success,...
     * @param eventPrefix
     * @private
     */
    private _attachListeners;
    set view(arg: any);
    /**
     *
     * Comma separated list of fields (like a fieldmask)
     * used for partial representation / partial responses.
     *
     * If your services supports this feature, you will receive a subset of the fields.
     *
     * @param fields {String} - Comma separated list of fields
     */
    setFields(fields: string): void;
    fields: string;
    /**
     * Binds a furo-data-object type. Use this if you want save data.
     *
     * @param dataObject
     */
    bindRequestData(dataObject: any): void;
    _requestDataObject: any;
    /**
     * Sorting order
     *
     * order-by="foo,-bar"  means foo asc and bar desc
     *
     * https://cloud.google.com/apis/design/design_patterns#sorting_order
     *
     * To avoid sql injection errors we do not send any sql like syntax!
     *
     * Only useable if your service has implemented this feature.
     *
     * @param order {String} - Comma separated list of sort orders
     */
    setOrderBy(order: string): void;
    orderBy: string;
    /**
     * clear the setted filter
     */
    clearFilter(): void;
    _filter: string;
    /**
     * Set the filter.
     *
     * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.
     *
     * Only useable if your service has implemented this feature.
     *
     * @param filterstring {String} - String for your filter.
     */
    setFilter(filterstring: string): void;
    /**
     * Set the filter.
     *
     * Hint: use the FieldNode._base64 property to send complex objects as a filter and decode it on the server side.
     *
     * Only useable if your service has implemented this feature.
     *
     * @param filterstring {String} - String for your filter.
     */
    set filter(arg: string);
    /**
     * Sets pagination size in the List request.
     *
     * Only useful if your service supports pagination.
     *
     * @param size {Number} - requested size of a page.
     */
    setPageSize(size: number): void;
    pageSize: number;
    /**
     * Setze den Service
     * @param service {String} -
     */
    set service(arg: string);
    _requestedService: string;
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
     * Set query params
     * All existing query params are replaced by the transferred parameters
     * If the transferred object is empty, all the values will be removed!
     * The AgentHelper fires a qp-set event after the query params are replaced.
     * @param {Object} key value pairs
     */
    setQp(qp: any): void;
    /**
     * clear the query params that you have setted before
     */
    clearQp(): void;
    /**
     *
     * @param link
     * @param body
     * @return {Request}
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
     * Prepare request body depending from method
     * @param link
     * @param dataObject
     * @private
     */
    private _prepareRequestPaylod;
    /**
     * find the first field of type furo.Link and use this for hts-out
     * @param fields
     * @private
     */
    private _evaluateLinksField;
    /**
     * If HATEOAS is present, the wire --triggerLoad is fired with the
     * corresponding request object as payload.
     * @param rel
     * @param serviceName
     * @private
     */
    private _followRelService;
    /**
     * loads the entity if hts is available
     */
    list(): void;
    /**
     * loads the entity if hts is available
     */
    load(): void;
    /**
     * loads the entity following the link which is specified on the attribute **rel** if it is available.
     */
    loadRel(): void;
    /**
     * search for a term following the link which is specified on the attribute **rel**
     *
     * This will set the query param q and execute the query.
     *
     * @param term
     */
    searchRel(term: any): void;
    /**
     * search for a term.
     *
     * This will set the query param q and triggers a list()
     *
     * @param term
     */
    search(term: any): void;
    /**
     * loads the entity if hts is available
     */
    first(): void;
    /**
     * loads the entity if hts is available
     */
    prev(): void;
    /**
     * loads the entity if hts is available
     */
    next(): void;
    /**
     * loads the entity if hts is available
     */
    last(): void;
    /**
     *
     * @param hts
     * @return {boolean}
     * @private
     */
    private _updateInternalHTS;
    _hts: any[];
    /**
     * Inject HATEOAS links.
     * @param hts
     */
    htsIn(hts: any): void;
    /**
     * Aborts a pending request
     */
    abortPendingRequest(): void;
    /**
     * @private
     * @return {*}
     */
    private render;
}
export {};
