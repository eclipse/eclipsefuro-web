import {LitElement} from 'lit-element';
import {Env} from "@furo/framework"

/**
 * Converts hateoas to queryParams, which is useful for routing with app-flow
 *
 *
 *```html
 *  <furo-reverse-deep-link
 *      service="TaskService"
 *      rel="self" @-converted="--queryParams"
 *      ƒ-convert="--rawEntityOrCollection, --linksArray, --linkObject"
 *  ></furo-reverse-deep-link>
 *```
 *
 * @summary create query param object from HATEOAS
 * @customElement
  */
class FuroReverseDeepLink extends (LitElement) {

  constructor() {
    super();
    this.service = "";
    this._services = Env.api.services;
  }

  /**
   * converts the href of a LinkObject
   *
   * @param {object|linkObject} {object|rawEntity} {object|rawCollection} data
   * @return {object|QueryParams} Object with query params key value
   */
  convert(data) {
    let qp = {};


    if (this._services[this.service] === undefined) {
      console.warn(this.service, " service is not defined", this);
      return
    }
    this._serviceDef = this._services[this.service].services;

    let linkObject = data;


    // Entity or Collection
    if (Array.isArray(data.links)) {

      if (data && Array.isArray(data.data)) {
        // is collection
        // default rel if not set
        if (!this.rel) {
          this.rel = "list"
        }
      } else if (!this.rel) {
        this.rel = 'self';
      }

      linkObject = data.links.filter((e) => e.rel.toLowerCase() === this.rel.toLowerCase())[0]
    }


    // Links Array
    if (Array.isArray(data)) {
      linkObject = data.filter((e) => e.rel === this.rel)[0]
    }

    if (linkObject) {
      qp = this._convert(linkObject);
    }

    /**
     * @event converted
     * Fired when input was converted
     * detail payload: {object|QueryParams}
     */
    const customEvent = new Event('converted', {composed: true, bubbles: true});
    customEvent.detail = qp;
    this.dispatchEvent(customEvent);
    return qp;
  }


  _convert(link) {
    const linkObject = {
      rel : link.rel,
      href : link.href,
      method : link.method,
      type : link.type
    };

    if (linkObject.rel === "self") {
      linkObject.rel = "Get";
    }

    linkObject.rel = linkObject.rel.charAt(0).toUpperCase() + linkObject.rel.slice(1);
    let pattern = "";

    if(this._serviceDef[linkObject.rel]){
       pattern = this._serviceDef[linkObject.rel].deeplink.href;
    }

    const rgx = new RegExp("\{([^\}]*)\}", "gi");

    const keys = [];
    let m;

    while ((m = rgx.exec(pattern)) !== null) {
      keys.push(m[1]);
    }

    pattern = pattern.replace(rgx, "(.*)");

    const srgx = new RegExp( `${pattern  }$`);
    const qp = {};
    const matches = srgx.exec(linkObject.href);
    if (matches) {
      keys.forEach((e, i) => {
        qp[e] = matches[i + 1];
      });
    }

    return qp;
  }

  static get properties() {
    return {
      /**
       * Name of service
       */
      service: {type: String},
      /**
       * Optional rel to convert.
       *
       * Not needed if you inject a link object.
       *
       * If you insert an entity rel self is taken. If you insert a collection, rel list is used.
       */
      rel: {type: String}
    };
  }


}

window.customElements.define('furo-reverse-deep-link', FuroReverseDeepLink);
