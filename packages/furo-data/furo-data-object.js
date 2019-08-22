import {LitElement, html} from 'lit-element';
import {EntityNode} from "./lib/EntityNode.js"
import {Env} from "@furo/framework"


/**
 * `furo-data-object` gives you a object which is built based on the **type** spec.
 * The types must be available in the {Env}, learn more about setting up the environment in the guide.
 *
 * The data will mostly be used in a [data-ui]/(../../data-input/doc) component or in component that yoh build, which contains one or more of them.
 *
 * `furo-data-object` receives its data regularly from a [collection-aget](collection-agent) or a  [entity-aget](entity-agent).
 * But you can also send json data which is formed like the raw-data of this type.
 *
 * `furo-data-object` will not do any validation or data manipulation neither will send the data. It is just responsible to
 * transform incomming data to an object and vice versa. You can access the manipulated data structure on the property
 * `.entity.rawData` with javascript (if needed).
 *
 * ```html
 *  <!-- The furo-data-object will send a initial dataObject of type project.Project on @-response-ready -->
 *  <furo-data-object type="project.Project" ƒ-inject-raw="--response(*.data)" @-object-ready="--dataObject"></furo-data-object>
 *
 *  <!-- The entity-agent will fetch the data from ProjectService and pass it in @-response to the furo-data-object.  -->
 *  <entity-agent service="ProjectService" ƒ-save="--saveClicked" ƒ-bind-request-data="--dataObject" @-response="--response" ></entity-agent>
 *```
 *
 *
 *
 * @summary Typed data object
 * @customElement
 * @demo demo-furo-data-object Basic usage
 * @appliesMixin FBP
 */
class FuroDataObject extends (LitElement) {

  constructor() {
    super();
    this._specs = Env.api.specs;
  }


  static get properties() {
    return {
      /**
       * The name of the type you want to use. The type must be registered in Env
       */
      type: {type: String}
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
    // queue inject bis entity bereit ist
    if (!this.entity) {
      setTimeout(() => {
        this.injectRaw(jsonObj)
      }, 0);
    } else {
      this.entity.injectRaw(jsonObj);
    }
  }

  /**
   *
   * @param type
   */
  set type(type) {
    if (this._type) {
      this._checkType(type);
    }
    this._type = type;
  }

  /**
   *
   * @param type
   * @private
   */
  _checkType(type) {

    if (this._specs[type] === undefined) {
      console.warn("Type does not exist.", type, this, this._specs);
      return
    }

    /**
     * create the entity node
     * @type {EntityNode}
     */
    this.entity = new EntityNode(null, type, this._specs);

    /**
     * @event object-ready
     * Fired when the object is built (based on the type).
     *
     * **detail payload:** A EntityNode object
     *
     * **bubbles**
     */
    let customEvent = new Event('object-ready', {composed: true, bubbles: true});
    customEvent.detail = this.entity;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);


    this.entity.addEventListener("data-injected", (e) => {
      /**
       * @event data-injected
       * Fired when injected data was processed.
       *
       * **detail payload**: {Object|EntityNode} reference to entity
       *
       * **bubbles**
       */
      let customEvent = new Event('data-injected', {composed: true, bubbles: true});
      customEvent.detail = e.detail;
      this.dispatchEvent(customEvent)
    });


    this.entity.addEventListener("field-value-changed", (e) => {
      /**
       * @event data-changed
       * Fired when data in furo-data-object has changed
       *
       *   **detail payload:** {Object|CollectionNode}
       *
       *   **bubbles**
       */
      let customEvent = new Event('data-changed', {composed: true, bubbles: true});
      customEvent.detail = this.entity.rawData;
      this.dispatchEvent(customEvent);

      /**
       * @event (field-value-changed)
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when a value on a field node changes. This event **bubbles** by default. Can be used on any node.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */

      /**
       * @event (this-field-value-changed)
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when a value on a particular field node changes. This event **does not bubble**. Can be used on any node.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */

      /**
       * @event (data-injected)
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when `ƒ-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
       *
       * This event **bubbles**.
       *
       * detail payload: **{NodeEvent}**
       */

    });
  }

  /**
   * Inits internal entity
   * References will still be valid
   */
  init() {
    this.entity.init();
    let customEvent = new Event('object-ready', {composed: true, bubbles: true});
    customEvent.detail = this.entity;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);
  }

  /**
   * @private
   */
  firstUpdated() {
    super.firstUpdated();

    // queueing
    if (this._type) {
      this._checkType(this._type);
    }
  }

}

window.customElements.define('furo-data-object', FuroDataObject);
