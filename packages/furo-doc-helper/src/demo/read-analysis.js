import { LitElement, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `read-analysis`
 * todo Describe your element
 *
 * @fires {analysis} data -  Fired when analysis loaded
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class ReadAnalysis extends FBP(LitElement) {
  constructor() {
    super();

    this.element = {
      description:
        '`furo-api-fetch`\n\nfuro-api-fetch can be used for network requests via FETCH API with implemented fallback to XMLHttpRequest\n\n```html\n<furo-api-fetch ƒ-invoke-request="" ƒ-abort-request=""></furo-api-fetch>\n```',
      summary: '',
      path: 'packages/furo-data/furo-api-fetch.js',
      properties: [
        {
          name: 'lastRequest',
          type: 'Object',
          description:
            "LastRequest's response.\n\nNote that lastResponse is set when ongoing request finishes, so if loading is true,\nthen lastResponse will correspond to the result of the previous request.",
          privacy: 'public',
          sourceRange: {
            start: {
              line: 69,
              column: 8,
            },
            end: {
              line: 69,
              column: 24,
            },
          },
          metadata: {
            polymer: {
              readOnly: false,
            },
          },
          defaultValue: '{}',
        },
        {
          name: 'xhrFallback',
          type: 'boolean',
          description: 'True if fetch API is not available',
          privacy: 'public',
          sourceRange: {
            start: {
              line: 79,
              column: 8,
            },
            end: {
              line: 79,
              column: 24,
            },
          },
          metadata: {
            polymer: {
              readOnly: false,
            },
          },
          defaultValue: "!window.hasOwnProperty('fetch')",
        },
      ],
      methods: [
        {
          name: 'invokeRequest',
          description: 'Sends a HTTP request to the server',
          privacy: 'public',
          sourceRange: {
            start: {
              line: 87,
              column: 4,
            },
            end: {
              line: 90,
              column: 5,
            },
          },
          metadata: {},
          params: [
            {
              name: 'request',
              type: 'Request',
              description:
                '(The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request',
            },
            {
              name: 'request',
              type: 'Request',
              description:
                '(The Request interface of the Fetch API represents a resource request.) https://developer.mozilla.org/en-US/docs/Web/API/Request',
            },
          ],
          return: {
            type: 'void',
          },
        },
        {
          name: 'abortRequest',
          description: 'Aborts a pending request\nYou have to submit an AbortController',
          privacy: 'public',
          sourceRange: {
            start: {
              line: 98,
              column: 4,
            },
            end: {
              line: 101,
              column: 5,
            },
          },
          metadata: {},
          params: [
            {
              name: 'controller',
              type: 'AbortController',
              description:
                '(The AbortController interface represents a controller object that allows you to abort one or more DOM requests as and when desired.)\nhttps://developer.mozilla.org/en-US/docs/Web/API/AbortController',
            },
          ],
          return: {
            type: 'void',
          },
        },
        {
          name: '_executeRequest',
          description: 'Requests are made via the Fetch API if possible.\nFallback XMLHttpRequest',
          privacy: 'protected',
          sourceRange: {
            start: {
              line: 110,
              column: 4,
            },
            end: {
              line: 159,
              column: 5,
            },
          },
          metadata: {},
          params: [
            {
              name: 'request',
            },
          ],
          return: {
            type: 'void',
          },
        },
        {
          name: '_invokeXHR',
          description: 'Requests are made via fallback XMLHttpRequest',
          privacy: 'private',
          sourceRange: {
            start: {
              line: 166,
              column: 4,
            },
            end: {
              line: 214,
              column: 5,
            },
          },
          metadata: {},
          params: [
            {
              name: 'request',
            },
          ],
        },
        {
          name: '_reworkRequest',
          description:
            'Errorhandling according to Google rest-api-v3 Status Codes\n(https://developers.google.com/maps-booking/reference/rest-api-v3/status_codes)\n\nDispatches event `response-error` and a specific error event with status code',
          privacy: 'protected',
          sourceRange: {
            start: {
              line: 233,
              column: 4,
            },
            end: {
              line: 296,
              column: 5,
            },
          },
          metadata: {},
          params: [
            {
              name: 'response',
            },
          ],
          return: {
            type: 'void',
          },
        },
        {
          name: '_parseResponse',
          description:
            'parses response object according to lastRequest heaader informationen `content-type`\nyou will find the supported content-types in the declaration area\nrespone Fetch API response object [https://developer.mozilla.org/en-US/docs/Web/API/Response]\nDefault response handler is json!',
          privacy: 'protected',
          sourceRange: {
            start: {
              line: 305,
              column: 4,
            },
            end: {
              line: 402,
              column: 5,
            },
          },
          metadata: {},
          params: [
            {
              name: 'response',
            },
          ],
          return: {
            type: 'void',
          },
        },
      ],
      staticMethods: [],
      demos: [
        {
          url: 'demo/furo-api-fetch_demo.html',
          description: '',
        },
      ],
      metadata: {},
      sourceRange: {
        start: {
          line: 12,
          column: 0,
        },
        end: {
          line: 404,
          column: 1,
        },
      },
      privacy: 'public',
      superclass: 'HTMLElement',
      name: 'ApiFetch',
      attributes: [],
      events: [
        {
          type: 'CustomEvent',
          name: 'fatal-error(payload',
          description: 'Requests are made via the Fetch API if possible.\nFallback XMLHttpRequest',
          metadata: {},
        },
        {
          type: 'CustomEvent',
          name: 'request-aborted',
          description: 'Fired when a request was canceled.\nPayload: request',
          metadata: {},
        },
        {
          type: 'CustomEvent',
          name: 'request-started',
          description: 'Fired when a request is sent.\nPayload: request',
          metadata: {},
        },
        {
          type: 'CustomEvent',
          name: 'response',
          description:
            'Fired when a response is received.\nHere you will get the parsed response\nFormat depends on request header `content-type`\nsupported types:\n- text/plain\n- application/json\n- image/jpeg (Blob)\n- application/octet-stream (ArrayBuffer)\n- application/pdf (Blob)\n\nPayload: parsed response',
          metadata: {},
        },
        {
          type: 'CustomEvent',
          name: 'response-error',
          description:
            'Fired when an error has occoured.\nThis is a general error event. The specific error events are fired additionally.',
          metadata: {},
        },
        {
          type: 'CustomEvent',
          name: 'response-error-[status-code]',
          description: 'Fired when an error has occoured.\nThis is a specific error event.',
          metadata: {},
        },
        {
          type: 'CustomEvent',
          name: 'response-raw',
          description:
            'Fired when a response is received.\nHere you will get the raw response object\nPayload: Raw response',
          metadata: {},
        },
      ],
      styling: {
        cssVariables: [],
        selectors: [],
      },
      slots: [],
      tagname: 'furo-api-fetch',
    };
    setTimeout(() => {
      const customEvent = new Event('data', { composed: true, bubbles: true });
      customEvent.detail = this.element;
      this.dispatchEvent(customEvent);
    }, 16);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('read-analysis', ReadAnalysis);
