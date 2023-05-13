declare const FuroCustomMethod_base: {
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
 * `furo-custom-method` is a interface component to handle custom methods.
 *
 * ```html
 * <furo-custom-method
 *     service="Servicename"
 *     method="release"
 *     fn-hts-in="--hts"
 *     fn-trigger="--customClick"></furo-custom-method>
 *
 * <!-- produces a hateoas link array -->
 * <furo-deep-link
 *     service="Servicename" at-hts-out="--hts"></furo-deep-link>
 *
 * ```
 * * *before you can do any requests, the service, method and the HATEOAS must be known*
 *
 * @fires {HTS} hts-updated -  Fired when hts was updated by `fn-hts-in`.
 *
 * @fires request-aborted - Fired if the request was successfully cancelled.
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
 * @summary interface component to handle custom methods
 * @customElement
 * @demo demo-furo-custom-method Basic usage
 * @appliesMixin FBP
 */
export class FuroCustomMethod extends FuroCustomMethod_base {
    static get properties(): {
        /**
         * Name of the service.
         * @type String
         */
        service: string;
        /**
         * Name of the custom method / rel.
         * @type String
         */
        method: string;
    };
    /**
     *
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
     * @param {Object} key - value pairs
     */
    updateQp(qp: any): void;
    /**
     * Binds a furo-data-object type.
     *
     * @param dataObject
     */
    bindRequestData(dataObject: any): void;
    _requestDataObject: any;
    /**
     * clear the query params that you have setted before
     */
    clearQp(): void;
    /**
     *
     * @param link
     * @param dataObject
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
     *
     * @param rel
     * @param serviceName
     * @return {boolean}
     * @private
     */
    private _checkServiceAndHateoasLinkError;
    /**
     * trigger the method with respect for binded-requset-object
     */
    trigger(): void;
    triggerEmpty(): void;
    /**
     * trigger the method with data
     */
    triggerWithBody(body: any): void;
    htsIn(hts: any): void;
    _hts: {};
    /**
     * Aborts a pending request
     */
    abortPendingRequest(): void;
    render(): import("lit").TemplateResult<1>;
}
export {};
