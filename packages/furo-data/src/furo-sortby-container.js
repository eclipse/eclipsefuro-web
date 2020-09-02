/**
 * `furo-sortby-container`
 *
 * The string value should follow SQL syntax: comma separated list of fields. For example: "foo,bar".
 * The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be
 * appended to the field name. For example: "foo desc,bar".
 * Redundant space characters in the syntax are insignificant. "foo,bar desc" and "  foo ,  bar  desc  " are equivalent.
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FuroSortbyContainer extends HTMLElement {

  constructor(){
    super();
    this.sorter = {};
  }

  /**
   * foo,bar
   * @param field
   */
  addAscendingField(field){
    if (field && field.length){
      this.sorter[field] = {'order': ''};
      this._mapSorterToQuery();
    }
  }

  /**
   * foo,bar desc
   * @param field
   */
  addDescendingField(field){
    if (field && field.length){
      this.sorter[field] = {'order': 'desc'};
      this._mapSorterToQuery();
    }
  }

  /**
   * https://cloud.google.com/apis/design/design_patterns#sorting_order
   * @private
   */
  _mapSorterToQuery(){
    const sortQuery = [];
    for (const [key, value] of Object.entries(this.sorter)) {
      sortQuery.push(value.order === 'desc' ? `${key  }%20${ value.order}` : key);
    }

    /**
     * Is fired if a new sort condition is set.
     * @event sortby-condition-updated
     */
    this.dispatchEvent(new CustomEvent('sortby-condition-updated', {
      detail: sortQuery.join(','), bubbles: true, composed: true
    }));
  }
}

window.customElements.define('furo-sortby-container', FuroSortbyContainer);
