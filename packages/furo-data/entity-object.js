import {LitElement, html} from 'lit-element';
import {EntityNode} from "./lib/EntityNode.js"


/**
 * `mora-entity`
 *
 * @customElement
 * @demo demo/form.html
 * @appliesMixin FBP
 */
class EntityObject extends (LitElement) {

  constructor() {
    super();
    this._specs = window.Env.specs;
  }


  static get properties() {
    return {
      /**
       * Name der Spec
       */
      type: {type: String}
    };
  }

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
     * @event entity-ready
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
        customEvent.detail = e;
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

      this.dispatchEvent(customEvent)
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
