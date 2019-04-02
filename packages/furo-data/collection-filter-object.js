import {FBP} from '@furo/fbp/fbp.js';

/**
 * `collection-filter-object`
 * Native element
 *
 * @customElement
 */


/**
 *
 * @appliesMixin FBP
 */
class CollectionFilterObject extends FBP(HTMLElement) {

  constructor() {
    super();
    this.style.display = "none";
    this.type = this.getAttribute("type");

    // find .querySelectorAll("simple-filter-field")
    let simpleFilters = this.querySelectorAll("simple-filter-field");
    if (simpleFilters != null) {
      simpleFilters.forEach((f) => {
        // set types to children
        f.type = this.type
      })
    }

    // register changes
    this.addEventListener("simple-filter-changed", (e) => {

      // baum für filter aufbauen
      let simplefilter = [];
      this._scanSimpleFilters(this, simplefilter);
      if (simplefilter.length > 0) {
        // debounce filters for 16ms
        clearTimeout(this._debounce);
        this._debounce = setTimeout(()=>{
         /**
          * @event filter-changed
          * Fired when filter changed
          * detail payload: filter
          */
         let customEvent = new Event('filter-changed', {composed: true, bubbles: true});
         customEvent.detail = simplefilter;
         this.dispatchEvent(customEvent)
       },16);

      }

    }, true)
  }

  _scanSimpleFilters(node, filterArray) {

    for (let index in node.children) {
      let filter = node.children[index]
      if (filter.tagName === "SIMPLE-FILTER-FIELD") {
        if (filter._value) {
          let f = [filter._field, filter._is, filter._value];
          if (node.childNodes.length > 0) {
            let sub = [];
            this._scanSimpleFilters(filter, sub);
            if (sub.length > 0) {
              f.push(sub)
            }
          }
          // oder reinpushen
          filterArray.push(f);
        }
      }
    }
  }
}

window.customElements.define('collection-filter-object', CollectionFilterObject);
