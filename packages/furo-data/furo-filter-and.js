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
 * @summary and filter bracket
 * @customElement
 * @demo demo-furo-filter Basic usage
 */

class FuroFilterAnd extends (HTMLElement) {

  constructor() {
    super();

  }
}

window.customElements.define('furo-filter-and', FuroFilterAnd);
