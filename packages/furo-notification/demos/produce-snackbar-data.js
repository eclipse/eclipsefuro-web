import { LitElement, html } from 'lit';
import { FBP } from '@furo/fbp';
import '@furo/input';

/**
 * `produce-error`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class ProduceSnackbarData extends FBP(LitElement) {
  constructor() {
    super();

    this._FBPAddWireHook('--click', () => {
      // eslint-disable-next-line wc/no-constructor-attributes
      let customEvent = new Event(`snackbar-label-${this.id}`, { composed: true, bubbles: true });
      customEvent.detail = this.snackbarLabel;
      this.dispatchEvent(customEvent);

      const customEventError = new Event('response-error', { composed: true, bubbles: true });
      customEventError.detail = {
        error: 'invalid username',
        message: 'invalid username',
        code: 3,
        details: [
          {
            '@type': 'type.googleapis.com/google.rpc.BadRequest',
            field_violations: [
              {
                code: 5432,
                field: 'display_name',
                description: ' have fancy characters',
              },
              {
                code: 5432,
                field: 'repdate.0.repstring.1',
                description: 'Bitte kein B',
              },
              {
                code: 5432,
                field: 'zeitunddatum.date',
                description: 'Deeeep',
              },
              {
                code: 5432,
                field: 'unknown_field',
                description: 'unknown',
              },
            ],
          },
        ],
      };
      this.dispatchEvent(customEventError);

      // eslint-disable-next-line wc/no-constructor-attributes
      customEvent = new Event(`snackbar-button-text-${this.id}`, { composed: true, bubbles: true });
      customEvent.detail = this.snackbarButtonText;
      this.dispatchEvent(customEvent);

      // eslint-disable-next-line wc/no-constructor-attributes
      customEvent = new Event(`show-${this.id}`, { composed: true, bubbles: true });
      customEvent.detail = this.snackbarButtonText;
      this.dispatchEvent(customEvent);
    });
  }

  /**
   *@private
   */
  static get properties() {
    return {
      label: {
        type: String,
      },
      snackbarLabel: {
        type: String,
        attribute: 'snackbar-label',
      },
      snackbarButtonText: {
        type: String,
        attribute: 'snackbar-button-text',
      },
      id: {
        type: String,
      },
    };
  }

  render() {
    // language=HTML
    return html`
      <!-- Add a style block here -->
      <style>
        :host {
          display: inline;
          cursor: pointer;
        }
      </style>
      <furo-button raised @-click="--click" label="${this.label}"></furo-button>
    `;
  }
}

window.customElements.define('produce-snackbar-data', ProduceSnackbarData);
