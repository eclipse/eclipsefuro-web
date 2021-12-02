import { LitElement, css } from 'lit';
import { Env } from '@furo/framework';
import { DataObject } from './lib/DataObject.js';

/**
 * `furo-data-object` gives you a object which is built based on the **type** spec.
 * The types must be available in the {Env}, learn more about setting up the environment in the guide.
 *
 * The data will mostly be used in a [data-ui]/(../../data-input/doc) component or in component that yoh build, which contains one or more of them.
 *
 * `furo-data-object` receives its data regularly from a [collection-aget](furo-collection-agent) or a  [entity-aget](furo-entity-agent).
 * But you can also send json data which is formed like the raw-data of this type.
 *
 * `furo-data-object` will not do any validation or data manipulation neither will send the data. It is just responsible to
 * transform incomming data to an object and vice versa. You can access the manipulated data structure on the property
 * `.data.rawData` with javascript (if needed).
 *
 * ```html
 *  <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
 *  <furo-data-object
 *      type="project.Project"
 *      ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></furo-data-object>
 *
 *  <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
 *  <furo-entity-agent
 *      service="ProjectService"
 *      ƒ-save="--saveClicked"
 *      ƒ-bind-request-data="--dataObject" @-response="--response" ></furo-entity-agent>
 *```
 * @fires {} data-injected -  Fired when injected data was processed (**bubbles**).
 * @fires {{Object|CollectionNode}} data-changed -  Fired when data in furo-data-object has changed  (**bubbles**). This event fires a lot, consider using a de-bounce with the event.
 * @fires {{Object|CollectionNode}} data-changed-after-inject -  Fired when data in furo-data-object has changed after injectRaw is complete (**bubbles**). This event fires a lot, consider using a de-bounce with the event.
 * @fires {{Object} the field node} field-value-changed -  Fired when a field has changed.
 * @fires {DataObject} validation-success -  Fired when validation results in a valid state.
 * @fires {DataObject} validation-failed -  Fired when validation results in a invalid state.
 * @fires {{Object|EntityNode} reference to entity} data-object-became-invalid -  Fired when the data object switches from ininvalid to invalid state (**bubbles**).
 * @fires {{Object|EntityNode} reference to entity} data-object-became-valid -  Fired when the data object switches from invalid to valid state (**bubbles**).
 * @fires {A EntityNode object} object-ready -  Fired when the object defined by `type` is built (**bubbles**).
 * @fires {A EntityNode object} init-completed -  Fired when the object init was done (**bubbles**).
 *
 * @summary Typed data object
 * @customElement
 * @demo demo-furo-data-object Basic usage
 * @demo demo-furo-data-object-validator object validator demo
 * @appliesMixin FBP
 */
export class FuroDataObject extends LitElement {
  constructor() {
    super();
    /**
     *
     * @type {{}}
     * @private
     */
    this._specs = Env.api.specs;
  }

  static get properties() {
    return {
      /**
       * The name of the type you want to use. The type must be registered in Env
       */
      type: { type: String },
    };
  }

  /**
   * inject a raw data response from the corresonding agent.
   *
   * Input may look something like this:
   *
   * **Entity data**
   *
   * ```json
   *{
   *  "data": {},
   *  "links": [],
   *  "meta": {}
   *}
   * ```
   *
   * **Collection data**
   *
   * ```json
   *{
   *  "data": {},
   *  "links": [],
   *  "meta": {},
   *  "entities": []
   *}
   * ```
   *
   * @param jsonObj
   */
  injectRaw(jsonObj) {
    this._injectingCompleted = false;
    this._injectPromise = new Promise(resolve => {
      // queue inject bis entity bereit ist
      if (!this.data) {
        this._queue = jsonObj;
        this._queuedInjectResolver = resolve;
      } else {
        this.data.injectRaw(jsonObj);
        resolve(this.data);
      }
    });

    this._injectPromise.then(() => {
      this._injectingCompleted = true;
    });

    return this._injectPromise;
  }

  /**
   * Set all nodes to pristine
   *
   * Useful for working with deltas
   */
  setPristine() {
    this.data.setAllToPristine();
  }

  /**
   * Clears all errors on children without any validation!
   */
  clearAllErrors() {
    this.data.clearAllErrors();
  }

  /**
   * Triggers the validation of all fields in the data object.
   *
   * Use this before you submit some data to a server.
   *
   * Will cause a `data-object-became-valid` or `data-object-became-invalid` and a validation-success or validation-failed event.
   */
  validateAllFields() {
    // broadcast validation
    this.data.validateAllFields();
    setTimeout(() => {
      if (this.data._isValid) {
        const customEvent = new Event('validation-success', { composed: true, bubbles: true });
        customEvent.detail = this.data;
        this.dispatchEvent(customEvent);
      } else {
        const customEvent = new Event('validation-failed', { composed: true, bubbles: true });
        customEvent.detail = this.data;
        this.dispatchEvent(customEvent);
      }
    }, 64);
  }

  /**
   * Append errors from custom methods or other agents or sources to the data object.
   * The error object must have a grpc status error signature like:
   * ```json
   * {
   *  "code":3,
   *  "message":"invalid username",
   *  "details":[{
   *          "@type":"type.googleapis.com/google.rpc.BadRequest",
   *          "field_violations":[{
   *              "field":"user.name",
   *              "description":"The username must only contain alphanumeric characters"
   *           }]
   *     }]
   * }
   * ```
   * @param grpcStatus
   */
  appendErrors(grpcStatus) {
    grpcStatus.details.forEach(errorSet => {
      if (errorSet.field_violations) {
        const fieldViolations = JSON.parse(JSON.stringify(errorSet.field_violations));
        fieldViolations.forEach(error => {
          const path = error.field.split('.');
          if (path.length > 0) {
            // rest wieder in error reinwerfen
            // eslint-disable-next-line no-param-reassign
            error.field = path.slice(1).join('.');
            if (this.data.data[path[0]]) {
              this.data.data[path[0]]._setInvalid(error);
            } else {
              // eslint-disable-next-line no-console
              console.warn('Unknown field', path);
            }
          }
        });
      }
    });
  }

  /**
   * Set the type. The type must be available in the environment
   * @param type
   */
  set type(type) {
    if (this._checkType(type)) {
      this._type = type;
    }
  }

  /**
   * get the data from the data object as raw json
   */
  get json() {
    return this.data._value;
  }

  /**
   * Reset the model to the last injected state.
   *
   * To set the model to the initial state use init
   */
  reset() {
    this.data.reset();
  }

  /**
   * Sets the model to an initial state according to the given type.
   *
   * fires *init-completed*
   *
   * To reset changed data to the last injected state, please use reset();
   */
  init() {
    // inject the initial value created below without breaking any bindings
    this._injectingCompleted = false;
    this._injectPromise = new Promise(resolve => {
      // queue inject bis entity bereit ist
      this.data.injectRaw(this._initial);
      resolve(this.data);
    });

    this._injectPromise.then(() => {
      this._injectingCompleted = true;
      const customEvent = new Event('init-completed', { composed: true, bubbles: true });
      customEvent.detail = this.data;
      this.dispatchEvent(customEvent);
    });

    return this._injectPromise;
  }

  /**
   * get the data of the data object
   */
  getData() {
    return this.data;
  }

  /**
   *
   * @param type
   * @private
   */
  _checkType(type) {
    if (this._specs[type] === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Type does not exist.', type, this, this._specs);
      return false;
    }

    /**
     * create the entity node
     * @type {EntityNode}
     */

    this.data = new DataObject(null, type, this._specs);
    // if data is on queue inject it.
    if (this._queue !== undefined) {
      this.data.injectRaw(this._queue);
      this._queue = undefined;
      this._queuedInjectResolver(this.data);
    }

    const customEvent = new Event('object-ready', { composed: true, bubbles: true });
    customEvent.detail = this.data;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);

    this.data.addEventListener('data-object-became-valid', e => {
      const validEvent = new Event('data-object-became-valid', { composed: true, bubbles: true });
      validEvent.detail = e.detail;
      this.dispatchEvent(validEvent);
    });

    this.data.addEventListener('data-object-became-invalid', e => {
      const invalidEvent = new Event('data-object-became-invalid', {
        composed: true,
        bubbles: true,
      });
      invalidEvent.detail = e.detail;
      this.dispatchEvent(invalidEvent);
    });

    this.data.addEventListener('data-injected', e => {
      const injectedEvent = new Event('data-injected', { composed: true, bubbles: true });
      injectedEvent.detail = e.detail;
      this.dispatchEvent(injectedEvent);
    });

    this.data.addEventListener('field-value-changed', e => {
      const dataEvent = new Event('data-changed', { composed: true, bubbles: true });
      dataEvent.detail = this.data;
      this.dispatchEvent(dataEvent);

      if (this._injectingCompleted) {
        const dataInjectEvent = new Event('data-changed-after-inject', {
          composed: true,
          bubbles: true,
        });
        dataInjectEvent.detail = this.data;
        this.dispatchEvent(dataInjectEvent);
      }

      const valueChangedEvent = new Event('field-value-changed', { composed: true, bubbles: true });
      valueChangedEvent.detail = e.detail;
      this.dispatchEvent(valueChangedEvent);
    });
    // store the initial value for a later init call
    this._initial = this.data._value;

    return true;
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

window.customElements.define('furo-data-object', FuroDataObject);
