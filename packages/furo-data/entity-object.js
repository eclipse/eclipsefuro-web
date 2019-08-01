import {LitElement, html} from 'lit-element';
import {EntityNode} from "./lib/EntityNode.js"
import {Env} from "@furo/framework"


/**
 * `entity-object`
 *
 * @summary Typed entity object
 * @customElement
 * @demo demo/entity-object.html
 * @appliesMixin FBP
 */
class EntityObject extends (LitElement) {

  constructor() {
    super();
    this._specs = Env.api.specs;
  }


  static get properties() {
    return {
      /**
       * Name der Spec
       */
      type: {type: String}
    };
  }

  injectPlainData(data){
    this.injectRaw({data:data});
  }
  /**
   * inject a raw entity json {data:..,links:...,meta,..-}
   * @param jsonObj
   */
  injectRaw(jsonObj) {
    // queue inject bis entity bereit ist
    if(!this.entity){
      setTimeout(()=>{this.injectRaw(jsonObj)},0);
    }else{
      this.entity.injectRaw(jsonObj);
    }
  }

  set type(type) {
    if (this._type) {
      this._checkType(type);
    }
    this._type = type;
  }

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
     * Fired when
     * detail payload:
     */
    let customEvent = new Event('object-ready', {composed: true, bubbles: true});
    customEvent.detail = this.entity;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);


    this.entity.addEventListener("data-injected",(e)=>{
        /**
        * @event data-injected
        * Fired when injected data was processed.
        * detail payload: {Object|EntityNode} reference to entity
        */
        let customEvent = new Event('data-injected', {composed:true, bubbles: true});
        customEvent.detail = e.detail;
        this.dispatchEvent(customEvent)
    });


    this.entity.addEventListener("field-value-changed",(e)=>{
      /**
       * @event data-changed
       * Fired when data in collection has changed
       * detail payload: {Object|CollectionNode}
       */
      let customEvent = new Event('data-changed', {composed:true, bubbles: true});
      customEvent.detail = this.entity.rawData;
      this.dispatchEvent(customEvent);

      /**
       * @event (field-value-changed)
       *
       * ✋ Internal Event!
       *
       * Fired when a value on a field node changes. This event **bubbles** by default. Can be used on any node.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */

      /**
       * @event (this-field-value-changed)
       *
       * ✋ Internal Event!
       *
       * Fired when a value on a particular field node changes. This event **does not bubble**. Can be used on any node.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */

      /**
       * @event (data-injected)
       *
       * ✋ Internal Event!
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

  firstUpdated() {
    super.firstUpdated();

    // queueing
    if (this._type) {
      this._checkType(this._type);
    }

    // data objects
    this._entityFields = this.querySelectorAll("entity-field");
   // console.log("todo",this._entityFields);

  }

}

window.customElements.define('entity-object', EntityObject);
