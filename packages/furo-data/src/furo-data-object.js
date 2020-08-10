import { LitElement } from 'lit-element';
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
 *  <furo-data-object type="project.Project" ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></furo-data-object>
 *
 *  <!-- The furo-entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
 *  <furo-entity-agent service="ProjectService" ƒ-save="--saveClicked" ƒ-bind-request-data="--dataObject" @-response="--response" ></furo-entity-agent>
 *```
 *
 *
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
   * ```json
   *  {data:{},links:[],meta{}}
   * ```
   *
   * **Collection data**
   * ```json
   *  {data:{},links:[],meta{},entities:[]}
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
   * Triggers the validation of all fields in the data object.
   *
   * Use this before you submit some data to a server.
   *
   * Will cause a `data-object-became-valid` or `data-object-became-invalid` and a validation-success or validation-failed event.
   */
  validateAllFields() {
    // broadcast validation
    this.data.validateAllFields();
    if (this.data._isValid) {
      /**
       * @event validation-success
       * Fired when validation results in a valid state
       * detail payload: DataObject
       */
      const customEvent = new Event('validation-success', { composed: true, bubbles: true });
      customEvent.detail = this.data;
      this.dispatchEvent(customEvent);
    } else {
      /**
       * @event validation-failed
       * Fired when validation results in a invalid state
       * detail payload: DataObject
       */
      const customEvent = new Event('validation-failed', { composed: true, bubbles: true });
      customEvent.detail = this.data;
      this.dispatchEvent(customEvent);
    }
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
   * To reset changed data to the last injected state, please use reset();
   */
  init() {
    this.data.init();
    const customEvent = new Event('object-ready', { composed: true, bubbles: true });
    customEvent.detail = this.data;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);
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

    /**
     * @event object-ready
     * Fired when the object is built (based on the type).
     *
     * **detail payload:** A EntityNode object
     *
     * **bubbles**
     */
    const customEvent = new Event('object-ready', { composed: true, bubbles: true });
    customEvent.detail = this.data;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);

    this.data.addEventListener('data-object-became-valid', e => {
      /**
       * @event data-object-became-valid
       * Fired when the data object switches from invalid to valid state
       *
       * **detail payload**: {Object|EntityNode} reference to entity
       *
       * **bubbles**
       */
      const validEvent = new Event('data-object-became-valid', { composed: true, bubbles: true });
      validEvent.detail = e.detail;
      this.dispatchEvent(validEvent);
    });

    this.data.addEventListener('data-object-became-invalid', e => {
      /**
       * @event data-object-became-invalid
       * Fired when the data object switches from ininvalid to invalid state
       *
       * **detail payload**: {Object|EntityNode} reference to entity
       *
       * **bubbles**
       */
      const invalidEvent = new Event('data-object-became-invalid', {
        composed: true,
        bubbles: true,
      });
      invalidEvent.detail = e.detail;
      this.dispatchEvent(invalidEvent);
    });

    this.data.addEventListener('data-injected', e => {
      /**
       * @event data-injected
       * Fired when injected data was processed.
       *
       * **detail payload**: {Object|EntityNode} reference to entity
       *
       * **bubbles**
       */
      const injectedEvent = new Event('data-injected', { composed: true, bubbles: true });
      injectedEvent.detail = e.detail;
      this.dispatchEvent(injectedEvent);
    });

    this.data.addEventListener('field-value-changed', e => {
      /**
       * @event data-changed
       * Fired when data in furo-data-object has changed
       *
       * This event fires a lot, consider using a de-bounce with the event.
       *
       *   **detail payload:** {Object|CollectionNode}
       *
       *   **bubbles**
       */

      const dataEvent = new Event('data-changed', { composed: true, bubbles: true });
      dataEvent.detail = this.data;
      this.dispatchEvent(dataEvent);

      /**
       * @event data-changed-after-inject
       * Fired when data in furo-data-object has changed after injectRaw is complete
       *
       * This event fires a lot, consider using a de-bounce with the event.
       *
       *   **detail payload:** {Object|CollectionNode}
       *
       *   **bubbles**
       */
      if (this._injectingCompleted) {
        const dataInjectEvent = new Event('data-changed-after-inject', {
          composed: true,
          bubbles: true,
        });
        dataInjectEvent.detail = this.data;
        this.dispatchEvent(dataInjectEvent);
      }

      /**
       * @event field-value-changed
       * Fired when a field has changed
       * detail payload: {Object} the field node
       */
      const valueChangedEvent = new Event('field-value-changed', { composed: true, bubbles: true });
      valueChangedEvent.detail = e.detail;
      this.dispatchEvent(valueChangedEvent);
    });

    return true;
  }
}

window.customElements.define('furo-data-object', FuroDataObject);
