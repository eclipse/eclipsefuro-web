/**
 * `furo-api-fetch`
 *
 * furo-api-fetch can be used for network requests via FETCH API
 *
 * ```html
 * <furo-api-fetch ƒ-invoke-request="" ƒ-abort-request=""></furo-api-fetch>
 * ```
 *
 * @summary fetch data from network
 * @customElement
 */
class FuroApiFetch extends HTMLElement {
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

  /**
   * Fired when an error has occoured.
   * This is a group error event. E.g. response-error-5xx, response-error-4xx
   * @event response-error-[status-code.firstChar]xx
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
  }

  /**
   * Sends a HTTP request to the server
   * @param {Request} request (The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request
   * @public
   */
  invokeRequest(request) {
    if (!request || !request.url) {
      // eslint-disable-next-line no-console
      console.warn('No valid request object was passed. No operation is performed!', request, this);
      return;
    }
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
    // eslint-disable-next-line no-console
    console.info('The request is about to be aborted', this);
    controller.abort();
  }

  /**
   * Requests are made via the Fetch API if possible.
   * Fallback XMLHttpRequest
   *
   * **payload** request object
   * @event fatal-error
   * @param request
   */
  _executeRequest(request) {
    /**
     * dispatches fatal-error
     * @param detail
     */
    const fatal = detail => {
      this.dispatchEvent(
        new CustomEvent('fatal-error', {
          detail,
          bubbles: true,
          composed: true,
        }),
      );
    };

    /**
     * Default API fetch
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    this.isLoading = true;

    this.dispatchEvent(
      new CustomEvent('request-started', {
        detail: request,
        bubbles: true,
        composed: true,
      }),
    );

    fetch(request)
      .then(response => {
        this._reworkRequest(response);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          this.dispatchEvent(
            new CustomEvent('request-aborted', {
              detail: request,
              bubbles: true,
              composed: true,
            }),
          );
          // eslint-disable-next-line no-console
          console.error('RequestService fetch aborted: ', err);
        }
        fatal(request);
      });
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

    const status = response.status || 0;

    if (status === 0 || (status >= 200 && status < 300)) {
      /**
       * Loaded without error, fires event `response` with full response object
       */
      this.lastResponse = response;

      this.dispatchEvent(
        new CustomEvent('response-raw', {
          detail: response,
          bubbles: true,
          composed: true,
        }),
      );

      /**
       * parses response object according to response heaader informationen `content-type`
       * you will find the supported content-types in the declaration area
       */
      this._parseResponse(response)
        .then(r => {
          this.dispatchEvent(
            new CustomEvent('response', {
              detail: r,
              bubbles: true,
              composed: true,
            }),
          );
        })
        .catch(error => {
          this.dispatchEvent(
            new CustomEvent('parse-error', {
              detail: error,
              bubbles: true,
              composed: true,
            }),
          );
        });
    } else {
      /**
       * Error detected
       */
      this.lastResponse = undefined;

      this.dispatchEvent(
        new CustomEvent('response-error-raw', {
          detail: response,
          bubbles: true,
          composed: true,
        }),
      );

      /**
       * parses response object according to response heaader informationen `content-type`
       * you will find the supported content-types in the declaration area
       */
      this._parseResponse(response)
        .then(r => {
          this.dispatchEvent(
            new CustomEvent('response-error', {
              detail: r,
              bubbles: true,
              composed: true,
            }),
          );
          this.dispatchEvent(
            new CustomEvent(`response-error-${response.status}`, {
              detail: r,
              bubbles: true,
              composed: true,
            }),
          );
          this.dispatchEvent(
            new CustomEvent(`response-error-${response.status.toString().charAt(0)}xx`, {
              detail: r,
              bubbles: true,
              composed: true,
            }),
          );
        })
        .catch(error => {
          this.dispatchEvent(
            new CustomEvent('parse-error', {
              detail: error,
              bubbles: true,
              composed: true,
            }),
          );
        });
    }
  }

  /**
   * parses response object according to lastRequest heaader informationen `content-type`
   * you will find the supported content-types in the declaration area
   * response Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]
   * Default response handler is json!
   * @param response
   */
  // eslint-disable-next-line class-methods-use-this
  _parseResponse(response) {
    return new Promise((resolve, reject) => {
      if (response) {
        const responseHandler = {
          'text/plain': r => {
            r.text()
              .then(text => {
                resolve(text);
              })
              .catch(err => {
                reject(err);
              });
          },
          'text/html': r => {
            r.text()
              .then(text => {
                resolve(text);
              })
              .catch(err => {
                reject(err);
              });
          },
          'application/json': r => {
            r.json()
              .then(json => {
                resolve(json);
              })
              .catch(err => {
                reject(err);
              });
          },
          'application/octet-stream': r => {
            r.arrayBuffer()
              .then(buffer => {
                resolve(buffer);
              })
              .catch(err => {
                reject(err);
              });
          },
          'application/pdf': r => {
            r.blob()
              .then(blob => {
                resolve(blob);
              })
              .catch(err => {
                reject(err);
              });
          },
          'image/jpeg': r => {
            r.blob()
              .then(blob => {
                resolve(blob);
              })
              .catch(err => {
                reject(err);
              });
          },
          default: r => {
            r.json()
              .then(json => {
                resolve(json);
              })
              .catch(err => {
                reject(err);
              });
          },
        };
        const contentType = response.headers.get('content-type');
        const typeHandler =
          responseHandler[contentType.split(';')[0].trim()] || responseHandler.default;
        typeHandler(response);
      } else {
        reject(new Error('no response'));
      }
    });
  }
}

customElements.define('furo-api-fetch', FuroApiFetch);
