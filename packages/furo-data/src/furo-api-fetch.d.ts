/**
 * Use `furo-api-fetch` to fetch data from the network.
 *
 *
 * ```html
 * <furo-api-fetch fn-invoke-request="--Request"></furo-api-fetch>
 * ```
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
 * Here you will get the parsed response
 * Format depends on request header `content-type`
 *
 * supported types:
 * - text/plain
 * - application/json
 * - image/jpeg (Blob)
 * - application/octet-stream (ArrayBuffer)
 * - application/pdf (Blob)
 *
 * @summary fetch data from network
 * @customElement
 */
export class FuroApiFetch extends HTMLElement {
    /**
     * LastRequest's response.
     *
     * Note that lastResponse is set when ongoing request finishes, so if loading is true,
     * then lastResponse will correspond to the result of the previous request.
     * @type {Object}
     */
    lastRequest: any;
    /**
     * True while request is in flight.
     * @type boolean
     */
    isLoading: boolean;
    /**
     * Sends a HTTP request to the server
     * @param {Request} request (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request
     * @public
     */
    public invokeRequest(request: Request): void;
    /**
     * Aborts a pending request
     * You have to submit an AbortController
     * @param {AbortController} controller (The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     */
    abortRequest(controller: AbortController): void;
    /**
     *
     * @param request
     * @private
     */
    private _executeRequest;
    /**
     * Rework of Request
     * @param response
     */
    /**
     * Succeeded is true if the request succeeded. The request succeeded if it
     * loaded without error, wasn't aborted, and the status code is ≥ 200, and
     * < 300, or if the status code is 0.
     */
    /**
     * Errorhandling according to Google rest-api-v3 Status Codes
     * (https://developers.google.com/maps-booking/reference/rest-api-v3/status_codes)
     *
     * Dispatches event `response-error` and a specific error event with status code
     * @private
     */
    private _reworkRequest;
    /**
     * Loaded without error, fires event `response` with full response object
     */
    lastResponse: any;
    /**
     * parses response object according to lastRequest heaader informationen `content-type`
     * you will find the supported content-types in the declaration area
     * response Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]
     * Default response handler is json!
     * @param response
     * @private
     */
    private _parseResponse;
}
