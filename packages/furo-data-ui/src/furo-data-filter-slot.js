import { html } from 'lit';
import { BaseFilter } from './basefilter.js';

/**
 * INITIAL VERSION
 *
 * `furo-data-filter-slot`
 *  Throw in any component to use it as a filter
 *
 *  The component must emit a **value-changed** event with the value you want to have in the condition
 *
 *  The component can emit a **clear** event to clear the filter
 *
 *  The values of the component are not updated from this component. You have to do an additional binding by yourself if needed.
 *  Do not forget that the condition value always comes as a string, when binding to your component.
 *
 * @slot {HTMLElement} - default slot to add a filter component (must emit a **value-changed** event).
 *
 * @summary slot for filters
 * @customElement
 * @appliesMixin FBP
 */
class FuroDataFilterSlot extends BaseFilter {
  constructor() {
    super();
    /**
     * Register hook on wire --slotted-value-changed to
     * update the val when the value in the slot changes
     */
    this._FBPAddWireHook('--slotted-value-changed', e => {
      if (this.field) {
        this.field.val._value = e.toString();
      }
    });
  }

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
        <div flex @-value-changed="--slotted-value-changed" @-clear="--clear">
          <slot></slot>
        </div>
      </furo-horizontal-flex>
      <furo-keydown key="Escape" @-key="--clear"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-data-filter-slot', FuroDataFilterSlot);
