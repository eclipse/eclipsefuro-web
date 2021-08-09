import { Env } from '@furo/framework';
import { DataObject } from './DataObject.js';

export class DataModelApi {
  constructor() {
    /**
     * api specification definitions
     * @type {{}}
     * @private
     */
    this._specs = Env.api.specs;
  }

  /**
   * Set the type. The type must be available in the environment
   * @param type
   */
  setType(type) {
    return new Promise((resolve, reject) => {
      if (this._checkType(type)) {
        this._type = type;
        resolve(this.data);
      } else {
        reject(new Error('Type does not exist.'));
      }
    });
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
   * type checking
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
    // store the initial value for a later init call
    this._initial = this.data._value;

    return true;
  }
}
