/**
 * `api-fetch`
 *
 * api-fetch can be used for network requests via FETCH API with implemented fallback to XMLHttpRequest
 *
 * ```
 * <api-fetch ƒ-invoke-request="" ƒ-abort-request=""></api-fetch>
 * ```
 *
 * @customElement
 * @polymer
 * @demo demo/api-fetch_demo.html
 */
class ApiFetch extends HTMLElement {

    /**
     * Fired when a request is sent.
     * Payload: request
     * @event request-started
     */

    /**
     * Fired when a request was canceled.
     * Payload: request
     * @event request-aborted
     */

    /**
     * Fired when a response is received.
     * Here you will get the raw response object
     * Payload: Raw response
     * @event response-raw
     */

    /**
     * Fired when a response is received.
     * Here you will get the parsed response
     * Format depends on request header `content-type`
     * supported types:
     * - text/plain
     * - application/json
     * - image/jpeg (Blob)
     * - application/octet-stream (ArrayBuffer)
     * - application/pdf (Blob)
     *
     * Payload: parsed response
     * @event response
     */

    /**
     * Fired when an error has occoured.
     * This is a general error event. The specific error events are fired additionally.
     * @event response-error
     */

    /**
     * Fired when an error has occoured.
     * This is a specific error event.
     * @event response-error-[status-code]
     */

    constructor() {
        super();
        /**
         * LastRequest's response.
         *
         * Note that lastResponse is set when ongoing request finishes, so if loading is true,
         * then lastResponse will correspond to the result of the previous request.
         * @type {Object}
         */
        this.lastRequest = {};
        /**
         * True while request is in flight.
         * @type boolean
         */
        this.isLoading = false;
        /**
         * True if fetch API is not available
         * @type {boolean}
         */
        this.xhrFallback = !(window.hasOwnProperty('fetch'));
    }

    /**
     * Sends a HTTP request to the server
     * @param {Request} request (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request
     * @public
     */
    invokeRequest(request) {
        this.lastRequest = request;
        this._executeRequest(request);
    }

    /**
     * Aborts a pending request
     * You have to submit an AbortController
     * @param {AbortController} controller (The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
     * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     */
    abortRequest(controller) {
        console.info('The request is about to be aborted', this);
        controller.abort();
    }

    /**
     * Requests are made via the Fetch API if possible.
     * Fallback XMLHttpRequest
     *
     * @event fatal-error(payload request object)
     * @param request
     */
    _executeRequest(request) {

        /**
         * dispatches fatal-error
         * @param detail
         */
        let fatal = (detail) => {
            this.dispatchEvent(new CustomEvent('fatal-error', {
                detail: detail, bubbles: true, composed: true
            }));
        };

        /**
         * Fallback, if Fetch API ist not available
         */
        if (this.xhrFallback) {
            this._invokeXHR(request).then(response => {
                this._reworkRequest(response);
            }, function (error) {
                fatal(error);
            });
        } else {
            /**
             * Default API fetch
             * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
             */
            this.isLoading = true;

            this.dispatchEvent(new CustomEvent('request-started', {
                detail: request, bubbles: true, composed: true
            }));

            fetch(request)
                .then(response => {
                    this._reworkRequest(response);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        this.dispatchEvent(new CustomEvent('request-aborted', {
                            detail: request, bubbles: true, composed: true
                        }));

                        console.error('RequestService fetch aborted: ', err)
                    } else {
                        console.error('RequestService fatal error', err)
                    }
                    fatal(request);
                })
        }
    }

    /**
     * Requests are made via fallback XMLHttpRequest
     * @param request
     * @private
     */
    _invokeXHR(request) {

        console.info('Fetch API not available, fallback to XMLHttpRequest');
        this.isLoading = true;

        return new Promise(function (resolve, reject) {
            /**
             * map Request to XHR
             */
            let req = new XMLHttpRequest();
            req.open(request.method, request.url, true);
            if (request.headers.get('content-type').includes('json')) {
                req.responseType = 'json';
            } else {
                req.responseType = 'arraybuffer';
            }
            /**
             * Append headers from request object to XHR
             */
            for (var pair of request.headers.entries()) {
                if (/[A-Z]/.test(pair[0])) {
                    console.error('Headers must be lower case, got', pair[0]);
                } else {
                    req.setRequestHeader(pair[0], pair[1]);
                }
            }
            /**
             * XHR event handlers
             */
            req.onloadstart = () => {
                this.dispatchEvent(new CustomEvent('request-started', {
                    detail: req, bubbles: true, composed: true
                }));
            };
            req.onload = () => {
                resolve(req);
            };
            req.onerror = (err) => {
                console.error('XMLHttpRequest network error', err);
                reject(req);
            };
            req.ontimeout = (err) => {
                console.warn('XMLHttpRequest timeout', err);
                reject(req);
            };
            // Do request
            req.send();
        }.bind(this));
    }

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
     */
    _reworkRequest(response) {
        /**
         * The status code 0 is accepted as a success because some schemes - e.g.
         * file:// - don't provide status codes.
         */
        this.isLoading = false;

        let status = response.status | 0;

        if (status === 0 || (status >= 200 && status < 300)) {
            /**
             * Loaded without error, fires event `response` with full response object
             */
            this.lastResponse = response;

            this.dispatchEvent(new CustomEvent('response-raw', {
                detail: response, bubbles: true, composed: true
            }));

            /**
             * parses response object according to response heaader informationen `content-type`
             * you will find the supported content-types in the declaration area
             */
            this._parseResponse(response);

        } else {

            /**
             * Error detected
             */
            this.lastResponse = undefined;

            this.dispatchEvent(new CustomEvent('response-error-raw', {
                detail: response, bubbles: true, composed: true
            }));


            response.json().then((error) => {
                if (error) {


                    response.error = error.error;

                    this.dispatchEvent(new CustomEvent('response-error-' + response.status, {
                        detail: error, bubbles: true, composed: true
                    }));

                    this.dispatchEvent(new CustomEvent('response-error', {
                        detail: error, bubbles: true, composed: true
                    }));

                    //console.error('Looks like there was a problem. Status Code: ', response.status);
                }
            }).catch(() => {

                this.dispatchEvent(new CustomEvent('parse-error' , {
                    detail: response, bubbles: true, composed: true
                }));


            });
        }

    }

    /**
     * parses response object according to lastRequest heaader informationen `content-type`
     * you will find the supported content-types in the declaration area
     * respone Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]
     * Default response handler is json!
     * @param response
     */
    _parseResponse(response) {

        var _self = this;
        if (response) {

            let contentType = this.lastRequest.headers.get('content-type');
            let responseHandler = {
                'text/plain': (r) => {
                    r.text().then(function (text) {
                        _self.dispatchEvent(new CustomEvent('response', {
                            detail: text, bubbles: true, composed: true
                        }));
                    });
                },
                'application/json': (r) => {
                    if (this.xhrFallback) {
                        this.dispatchEvent(new CustomEvent('response', {
                            detail: r.response, bubbles: true, composed: true
                        }));
                    } else {
                        r.json().then(function (json) {
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: json, bubbles: true, composed: true
                            }));
                        });
                    }
                },
                'application/octet-stream': (r) => {
                    if (this.xhrFallback) {
                        this.dispatchEvent(new CustomEvent('response', {
                            detail: r.response, bubbles: true, composed: true
                        }));
                    } else {
                        r.arrayBuffer().then(function (buffer) {
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: buffer, bubbles: true, composed: true
                            }));
                        });
                    }
                },
                'application/pdf': (r) => {
                    if (this.xhrFallback) {
                        let blob = new Blob([r.response], {type: 'image/jpeg'});
                        let fileReader  = new FileReader();
                        fileReader.onload = function (evt) {
                            var result = evt.target.result;
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: result, bubbles: true, composed: true
                            }));
                        };
                        fileReader.readAsDataURL(blob);

                    } else {
                        r.blob().then(function (blob) {
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: URL.createObjectURL(blob), bubbles: true, composed: true
                            }));
                        });
                    }
                },
                'image/jpeg': (r) => {
                    if (this.xhrFallback) {
                        let blob = new Blob([r.response], {type: 'image/jpeg'});
                        let fileReader  = new FileReader();
                        fileReader.onload = function (evt) {
                            var result = evt.target.result;
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: result, bubbles: true, composed: true
                            }));
                        };
                        fileReader.readAsDataURL(blob);

                    } else {
                        r.blob().then(function (blob) {
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: URL.createObjectURL(blob), bubbles: true, composed: true
                            }));
                        });
                    }
                },
                'default': (r) => {
                    if (this.xhrFallback) {
                        this.dispatchEvent(new CustomEvent('response', {
                            detail: JSON.parse(r.response), bubbles: true, composed: true
                        }));
                    } else {
                        r.json().then(function (json) {
                            _self.dispatchEvent(new CustomEvent('response', {
                                detail: json, bubbles: true, composed: true
                            }));
                        });
                    }
                },
            };
            let typeHandler = responseHandler[contentType] || responseHandler['default'];
            typeHandler(response);
        }
    }

}

customElements.define('api-fetch', ApiFetch);
