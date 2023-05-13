import { LitElement, css } from 'lit';

// to ensure that data is of type FuroAppFlow
function TypeAppFlow(name) {
  this.event = name;
  this.data = {};
}

/**
 * `furo-app-flow` triggers the flow events for the `app-flow-router`.
 *
 * @fires {data} app-flow -  App-flow event with app-flow object will be fired when you trigger the `emit` function.
 *
 * @summary Application Flow => routing
 * @customElement
 * @appliesMixin FBP
 */
export class FuroAppFlow extends LitElement {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.style.display = 'none';
  }

  static get properties() {
    return {
      /**
       * Name of your app-flow event object
       *
       * i.e. 'task-clicked', 'wizard-step1-completed',...
       *
       * @type String
       */
      event: { type: String },
    };
  }

  /**
   * Use this to explicitly set the query params.
   *
   * This is useful if you use the `trigger` method.
   * @param qp {Object} Object with key value pairs
   */
  setQp(qp) {
    this._qp = qp;
  }

  /**
   * Deprecated, use the setQp method instead
   */
  static set qp(qp) {
    this._qp = qp;
  }

  /**
   * Triggers the flow event (with the qp that was set before)
   */
  trigger() {
    this.emit(this._qp);
  }

  /**
   * fire the app-flow event
   * @param {object|QueryParams} QueryParam Object
   */
  emit(queryParams) {
    const data = new TypeAppFlow(this.event);

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const param in queryParams) {
      data.data[param] = queryParams[param];
    }

    const customEvent = new Event('app-flow', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = data;
    this.dispatchEvent(customEvent);
    return customEvent;
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-app-flow', FuroAppFlow);
