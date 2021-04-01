import { LitElement } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';

/**
 * `notification-producer`
 * Helper component to produce different notification payloads.
 * - simple message strings
 * - grpc status message
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class NotificationProducer extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  getInformationMessage() {
    this.dispatchEvent(
      new CustomEvent('information-msg-ready', {
        detail: 'This is a simple information message.',
        bubbles: true,
        composed: true,
      }),
    );
  }

  getWarningMessage() {
    this.dispatchEvent(
      new CustomEvent('warning-msg-ready', {
        detail: 'This is a simple warning message.',
        bubbles: true,
        composed: true,
      }),
    );
  }

  getErrorMessage() {
    this.dispatchEvent(
      new CustomEvent('error-msg-ready', {
        detail: 'This is a simple error message.',
        bubbles: true,
        composed: true,
      }),
    );
  }

  getSuccessMessage() {
    this.dispatchEvent(
      new CustomEvent('success-msg-ready', {
        detail: 'This is a simple success message! &lt;Yeah&gt;',
        bubbles: true,
        composed: true,
      }),
    );
  }

  getGrpcStatus() {
    const grpcStatus = {
      code: 3,
      message: 'Missing mandatory values',
      details: [
        {
          '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
          locale: 'en-GB',
          message: 'Please register all the mandatory values.',
        },
        {
          '@type': 'type.googleapis.com/google.rpc.LocalizedMessage',
          locale: 'en-GB',
          message: 'If you need help completing the data, call 0800-HELP-FURO.',
        },
        {
          '@type': 'type.googleapis.com/google.rpc.Help',
          links: [
            {
              description: 'SAP Fiori Message Handling',
              url: 'https://experience.sap.com/fiori-design-web/message-page/',
            },
          ],
        },
        {
          '@type': 'type.googleapis.com/google.rpc.BadRequest',
          field_violations: [
            {
              field: 'short_form',
              description: 'The country designation (short form) should be set.',
            },
            {
              field: 'id',
              description:
                'The id should be ISO Alpha-2 code as described in the ISO 3166 international standard',
            },
            { field: 'area', description: 'Please set a value for the field area.' },
          ],
        },
      ],
    };
    this.dispatchEvent(
      new CustomEvent('grpc-status-ready', {
        detail: grpcStatus,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

window.customElements.define('notification-producer', NotificationProducer);
