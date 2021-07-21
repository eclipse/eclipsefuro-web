import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `produce-error`
 *
 * @customElement
 * @demo demo/index.html
 * @appliesMixin FBP
 */
class ProduceError extends FBP(LitElement) {
  constructor() {
    super();

    this._FBPAddWireHook('--click', () => {
      @fires {} response-error -  Fired when
      const customEvent = new Event('response-error', { composed: true, bubbles: true });
      customEvent.detail = {
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
      this.dispatchEvent(customEvent);
    });
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
      <button @-click="--click">trigger error</button>
    `;
  }
}

window.customElements.define('produce-error', ProduceError);
