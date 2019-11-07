import {FBP} from '@furo/fbp';

/**
 * Placeholder component to describe nested filters
 *
 * `furo-filter-or` is used with `furo-filter-container`, `furo-filter-and` and `furo-filter-and` to build the filter string.
 *  With `furo-filter-or` you will set the bracket around the items inside.
 *
 *
 * ```html
 * <!-- this will result in a filter like ((description OR start) AND (end OR cost_limit))
 * <furo-filter-container>
 *  <furo-filter-and>
 *    <`furo-filter-or`>
 *      <furo-filter-field field="description" is="in" ƒ-set-value="--defaultChanged"></furo-filter-field>
 *      <furo-filter-field field="start" is="gte" ƒ-set-value="--startChanged"></furo-filter-field>
 *    </furo-filter-or>
 *    <furo-filter-or>
 *      <furo-filter-field field="end" is="lte" ƒ-set-value="--endChanged"></furo-filter-field>
 *      <furo-filter-field field="cost_limit" is="eq" ƒ-set-value="--costlimitChanged"></furo-filter-field>
 *    </furo-filter-or>
 *  </furo-filter-and>
 * </furo-filter-container>
 * ```
 *
 * @demo demo-furo-filter Basic usage
 * @appliesMixin FBP
 */
class FuroFilterContainer extends FBP(HTMLElement) {

  constructor() {
    super();
    this.style.display = "none";
    this.type = this.getAttribute("type");

    // find .querySelectorAll("simple-filter-field")
    let filterFields = this.querySelectorAll("simple-filter-field");
    if (filterFields != null) {
      filterFields.forEach((f) => {
        // set types to children
        f.type = this.type
      })
    }

    // register changes
    this.addEventListener("furo-filter-field-changed", (e) => {

      // baum für filter aufbauen
      let filter = [];
      this._scanfilterFields(this, filter);

      if (filter.length > 0) {
        // debounce filters for 16ms
        clearTimeout(this._debounce);

        this._debounce = setTimeout(() => {
          /**
           * @event filter-changed
           * Fired when filter changed
           * detail payload: filter
           */
          let customEvent = new Event('filter-changed', {composed: true, bubbles: true});
          customEvent.detail = filter;
          console.log(JSON.stringify(filter));
          this.dispatchEvent(customEvent)
        }, 16);

      }else {
        /**
         * @event filter-cleared
         * Fired when filter is empty
         * detail payload: none
         */
        let customEvent = new Event('filter-cleared', {composed: true, bubbles: true});
        this.dispatchEvent(customEvent);
      }

    }, true)
  }


  _appendAnd(node, filterArray) {
    let andFilter = filterArray;
    for (let index = 0; index < node.children.length; index++) {
      let el = node.children[index];

      if (el.tagName === "FURO-FILTER-FIELD") {
        if (el._value) {
          let f = [el._field, el._is, el._value];
          if (index + 1 < node.children.length) {
            f.push([]);
          }
          andFilter.push(f);
          andFilter = f[3];
        }
      } else {
        if (el.tagName === "FURO-FILTER-AND") {
          // append to index3
          this._appendAnd(el, andFilter);
        }
        if (el.tagName === "FURO-FILTER-OR") {
          this._appendOr(el, andFilter);
        }
      }

    }
  }

  _appendOr(node, filterArray) {
    for (let index = 0; index < node.children.length; index++) {
      let el = node.children[index];

      if (el.tagName === "FURO-FILTER-FIELD") {
        if (el._value) {
          let f = [el._field, el._is, el._value];
          // oder reinpushen
          filterArray.push(f);
        }
      } else {
        let sub = [];
        filterArray.push(sub);
        if (el.tagName === "FURO-FILTER-AND") {
          // append to index3
          this._appendAnd(el, sub);
        }
        if (el.tagName === "FURO-FILTER-OR") {
          this._appendOr(el, sub);
        }
      }
    }
  }

  _scanfilterFields(node, filterArray) {

    for (let index in node.children) {
      let el = node.children[index];

      if (el.tagName === "FURO-FILTER-AND") {
        // append to index3
        this._appendAnd(el, filterArray);
      }
      if (el.tagName === "FURO-FILTER-OR") {
        this._appendOr(el, filterArray);
      }


    }
  }
}

window.customElements.define('furo-filter-container', FuroFilterContainer);
