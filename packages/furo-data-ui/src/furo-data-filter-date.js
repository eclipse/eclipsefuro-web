import { html } from 'lit-element';
import '@furo/data-input/src/furo-data-date-input.js';
import '@furo/data-input/src/furo-data-collection-dropdown.js';
import { BaseFilter } from './basefilter.js';

/**
 * `furo-data-filter-date`
 * Date element bindable with type filter.Condition
 *
 * ```
 * <date-filter
 *  hide-clear
 *  condensed
 *  ƒ-bind-filter-condition="--filteDO(*.due_date)"
 * ></date-filter>
 *```
 *
 * @summary date filter
 * @customElement
 * @appliesMixin FBP
 */
class FuroDataFilterDate extends BaseFilter {
  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <furo-data-collection-dropdown
          label=""
          ?condensed="${this.condensed}"
          ƒ-focus="--clear"
          ƒ-bind-data="--filternode(*.is)"
          list="${this.comparators}"
        ></furo-data-collection-dropdown>
        <furo-data-date-input
          id="val"
          ?condensed="${this.condensed}"
          trailing-icon="clear"
          @-trailing-icon-clicked="--clear"
          flex
          ƒ-bind-data="--filternode(*.val)"
        ></furo-data-date-input>
      </furo-horizontal-flex>
      <furo-keydown key="Escape" @-key="--clear"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-data-filter-date', FuroDataFilterDate);
