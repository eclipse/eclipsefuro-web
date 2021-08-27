import { html } from 'lit';
import '@furo/data-input/src/furo-data-checkbox-input.js';
import { BaseFilter } from './basefilter.js';
/**
 * INITIAL VERSION
 * `furo-data-filter-text`
 * Text element bindable with type filter.Condition
 *
 * @summary text filter
 * @customElement
 * @appliesMixin FBP
 */
class FuroDataFilterCheckbox extends BaseFilter {
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

        <furo-data-checkbox-input
          id="val"
          label="${this.label}"
          ?condensed="${this.condensed}"
          trailing-icon="clear"
          @-trailing-icon-clicked="--clear"
          flex
          ƒ-bind-data="--filternode(*.val)"
        ></furo-data-checkbox-input>
      </furo-horizontal-flex>
      <furo-keydown key="Escape" @-key="--clear"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-data-filter-checkbox', FuroDataFilterCheckbox);
