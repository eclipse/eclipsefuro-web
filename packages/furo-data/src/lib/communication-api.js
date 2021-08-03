/**
 * `communication-api`
 *
 * can be used for network requests via FETCH API
 *
 * @fires {Request} request-aborted - Fired when a request was canceled.
 * @fires {Request} request-started - Fired when a request is sent.
 * @fires {Object} response-raw - Fired when a response is received.
 *
 * @fires {Object} response - Fired when a response is received.
 * Here you will get the parsed response
 * Format depends on request header `content-type`
 * supported types:
 * - text/plain
 * - application/json
 * - image/jpeg (Blob)
 * - application/octet-stream (ArrayBuffer)
 * - application/pdf (Blob)
 *
 * @fires {Object}  response-error Fired when an error has occoured. This is a general error event. The specific error events are fired additionally.
 * @fires {Object} response-error-[status-code] Fired when an error has occoured. This is a specific error event.
 * @fires {Request} fatal-error - * Requests are made via the Fetch API if possible.Fallback XMLHttpRequest
 * @fires response-error-[status-code.firstChar]xx -    * Fired when an error has occoured.
 * This is a group error event. E.g. response-error-5xx, response-error-4xx
 *
 */
export class CommunicationApi {

  constructor() {
    /**
     * LastRequest's response.
     *
     * Note that lastResponse is set when ongoing request finishes, so if loading is true,
     * then lastResponse will correspond to the result of the previous request.
     * @type {Object}
     */
    this.lastRequest = {}
    /**
     * True while request is in flight.
     * @type boolean
     */
    this.isLoading = false
  }

  registerResponseErrorCallback(errorFunction){
    this.cb_responseError = errorFunction;
  }

  registerRequestStartedCallback(requestStarted){
    this.cb_requestStarted = requestStarted;
  }

  /**
   * Sends a HTTP request to the backend
   * @param {Request} request (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request
   * @public
   */
  invokeRequest(request) {
    return new Promise((resolve, reject) => {
      if (!request || !request.url) {
        reject(new TypeError('No valid request object was passed. No operation is performed!', 'ApiFetch.js', '61'))
      }
      this.lastRequest = request
      this._executeRequest(request)
        .then((r) => {
          resolve(r)
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  /**
   * Aborts a pending request
   * You have to submit an AbortController
   * @param {AbortController} controller (The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)
   * https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  abortRequest(controller) {
    // eslint-disable-next-line no-console
    console.info('The request is about to be aborted', this)
    controller.abort()
  }

  /**
   * Internal use of the FETCH API
   * @param request
   * @returns {Promise<unknown>}
   * @private
   */
  _executeRequest(request) {
    return new Promise((resolve, reject) => {

      this.isLoading = true

      if (this.cb_requestStarted && typeof this.cb_requestStarted === 'function') {
        this.cb_requestStarted(request);
      }

      // this.dispatchEvent(
      //   new CustomEvent('request-started', {
      //     detail: request,
      //     bubbles: true,
      //     composed: true,
      //   }),
      // )
      /**
       * Default API fetch
       * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
       */
      fetch(request)
        .then(response => {
          this._reworkRequest(response).then((r) => {
              resolve(r)
            },
          ).catch((r) => {
            reject(r)
          })
        })
        .catch(err => {
          this.isLoading = false

          if (err.name === 'AbortError') {
            // this.dispatchEvent(
            //   new CustomEvent('request-aborted', {
            //     detail: request,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
            // eslint-disable-next-line no-console
            console.error('RequestService fetch aborted: ', err)
          }
          if (this.cb_responseError && typeof this.cb_responseError === 'function') {
            this.cb_responseError(request);
          }
          reject(request)
        })
    })
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
   * @private
   */
  _reworkRequest(response) {
    return new Promise((resolve, reject) => {


      /**
       * The status code 0 is accepted as a success because some schemes - e.g.
       * file:// - don't provide status codes.
       */
      this.isLoading = false

      const status = response.status || 0

      if (status === 0 || (status >= 200 && status < 300)) {
        /**
         * Loaded without error, fires event `response` with full response object
         */
        this.lastResponse = response

        // this.dispatchEvent(
        //   new CustomEvent('response-raw', {
        //     detail: response,
        //     bubbles: true,
        //     composed: true,
        //   }),
        // )

        /**
         * parses response object according to response header information `content-type`
         * you will find the supported content types in the declaration area
         */
        this._parseResponse(response)
          .then(r => {
            resolve(r)
            // this.dispatchEvent(
            //   new CustomEvent('response', {
            //     detail: r,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
          })
          .catch(error => {
            reject(error)
            // this.dispatchEvent(
            //   new CustomEvent('parse-error', {
            //     detail: error,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
          })
      } else {
        /**
         * Error detected
         */
        this.lastResponse = undefined
        reject(response)

        // this.dispatchEvent(
        //   new CustomEvent('response-error-raw', {
        //     detail: response,
        //     bubbles: true,
        //     composed: true,
        //   }),
        // )

        /**
         * parses response object according to response heaader informationen `content-type`
         * you will find the supported content-types in the declaration area
         */
        this._parseResponse(response)
          .then(r => {
            if (this.cb_responseError && typeof this.cb_responseError === 'function') {
              this.cb_responseError(r);
            }
            // this.dispatchEvent(
            //   new CustomEvent('response-error', {
            //     detail: r,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
            // this.dispatchEvent(
            //   new CustomEvent(`response-error-${response.status}`, {
            //     detail: r,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
            // this.dispatchEvent(
            //   new CustomEvent(`response-error-${response.status.toString().charAt(0)}xx`, {
            //     detail: r,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
          })
          /**
           * error parsing is not possible, empty response
           * the dispatched event will have the raw error object in the event detail
           */
          .catch(error => {
            if (this.cb_responseError && typeof this.cb_responseError === 'function') {
              this.cb_responseError(error);
            }
            // this.dispatchEvent(
            //   new CustomEvent('parse-error', {
            //     detail: error,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
            // this.dispatchEvent(
            //   new CustomEvent('response-error', {
            //     detail: error,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
            // this.dispatchEvent(
            //   new CustomEvent(`response-error-${response.status}`, {
            //     detail: error,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
            // this.dispatchEvent(
            //   new CustomEvent(`response-error-${response.status.toString().charAt(0)}xx`, {
            //     detail: error,
            //     bubbles: true,
            //     composed: true,
            //   }),
            // )
          })
      }
    })
  }


  /**
   * parses response object according to lastRequest heaader informationen `content-type`
   * you will find the supported content-types in the declaration area
   * response Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]
   * Default response handler is json!
   * @param response
   * @private
   */
// eslint-disable-next-line class-methods-use-this
  _parseResponse(response) {
    return new Promise((resolve, reject) => {
      if (response) {
        const responseHandler = {
          'text/plain': r => {
            r.text()
              .then(text => {
                resolve(text)
              })
              .catch(err => {
                reject(err)
              })
          },
          'text/html': r => {
            r.text()
              .then(text => {
                resolve(text)
              })
              .catch(err => {
                reject(err)
              })
          },
          'application/json': r => {
            r.json()
              .then(json => {
                resolve(json)
              })
              .catch(err => {
                reject(err)
              })
          },
          'application/octet-stream': r => {
            r.arrayBuffer()
              .then(buffer => {
                resolve(buffer)
              })
              .catch(err => {
                reject(err)
              })
          },
          'application/pdf': r => {
            r.blob()
              .then(blob => {
                resolve(blob)
              })
              .catch(err => {
                reject(err)
              })
          },
          'image/jpeg': r => {
            r.blob()
              .then(blob => {
                resolve(blob)
              })
              .catch(err => {
                reject(err)
              })
          },
          default: r => {
            r.json()
              .then(json => {
                resolve(json)
              })
              .catch(err => {
                reject(err)
              })
          },
        }
        const contentType = response.headers.get('content-type')
        const typeHandler =
          responseHandler[contentType.split(';')[0].trim()] || responseHandler.default
        typeHandler(response)
      } else {
        reject(new Error('no response'))
      }
    })
  }


}
