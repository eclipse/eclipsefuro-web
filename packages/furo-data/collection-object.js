import {LitElement, html} from 'lit-element';
import {CollectionNode} from "./lib/CollectionNode.js"
import {Env} from "@furo/framework"

/**
 * `collection-object`
 * This component is deprecated, use data-object instead
 *
 * This component will be removed in Q4 2019
 *
 * @customElement
 * @demo demo/form.html
 * @appliesMixin FBP
 */
class CollectionObject extends (LitElement) {

  constructor() {
    super();
    this._specs = Env.api.specs;
    console.warn("collection-object is deprecated, use data-object instead");
    console.warn("This component will be removed in Q4-2019",this);
    //@veith, do not forget to remov lib/CollectionNode too
  }

  injectRaw(jsonObj) {
    this.collection.injectRaw(jsonObj);
  }

  // make the collection Object empty
  clear(){
    this.collection.injectRaw({data:[]});
  }

  set type(type) {
    if (this._type) {
      this._checkType(type);
    }
    this._type = type;
  }

  _checkType(type) {

    if (this._specs[type] === undefined) {
      /**
       * @event spec-error
       * Fired when spec could not be loaded
       * detail payload: {string} spec name
       */
      let customEvent = new Event('spec-error', {composed: true, bubbles: true});
      customEvent.detail = type;
      setTimeout(() => {

        this.dispatchEvent(customEvent);
      }, 0);
      return
    }

    this.collection = new CollectionNode(null, type, this._specs);
    this.collection.addEventListener("data-changed",(e)=>{
      /**
      * @event data-changed
      * Fired when data in collection has changed
      * detail payload: {Object|CollectionNode}
      */
      let customEvent = new Event('data-changed', {composed:true, bubbles: true});
      customEvent.detail = this.collection;
      this.dispatchEvent(customEvent)
    });
    /**
     * @event object-ready
     * Fired when
     * detail payload:
     */
    let customEvent = new Event('object-ready', {composed: true, bubbles: true});
    customEvent.detail = this.collection;
    setTimeout(() => {
      this.dispatchEvent(customEvent);
    }, 0);
  }

  static get properties() {
    return {
      /**
       * Ein Entitätenbaum mit allen Feldern
       */
      collection: {type: Object},
      /**
       * Name der Spec
       */
      type: {type: String}
    };
  }

  firstUpdated() {
    super.firstUpdated();

    // queueing
    if (this._type) {
      this._checkType(this._type);
    }


  }

}

window.customElements.define('collection-object', CollectionObject);
