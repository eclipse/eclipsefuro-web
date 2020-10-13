import { FuroUi5DataInput } from './furo-ui5-data-input.js';

/**
 * The ui5-input component allows the user to enter and edit numbers.
 * Additionally, you can provide suggestionItems, that are displayed in a popover right under the input.
 *
 * The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the text, the change event is fired, which enables you to react on any text change.
 *
 * @summary data number input field
 * @customElement
 * @demo demo-furo-ui5-data-text-input Basic usage (scalar , fat, wrapper values)
 * @demo demo-furo-ui5-data-text-input-together playground
 */
export class FuroUi5DataNumberInput extends FuroUi5DataInput {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   * @event change
   */

  /**
   * Fired when the value of the furo-ui5-data-number-input changes at each keystroke, and when a suggestion item has been selected.
   * @event input
   */

  /**
   * Fired when user presses Enter key on the ui5-input.
   * Note: The event is fired independent of whether there was a change before or not. If change was performed,
   * the event is fired after the change event. The event is also fired when an item of the select list is selected by pressing Enter.
   * @event submit
   */

  /**
   * Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.
   * @event suggestion-item-preview
   */

  /**
   * Fired when a suggestion item, that is displayed in the suggestion popup, is selected.
   * @event suggestion-item-select
   */

  /**
   * Fired when the user scrolls the suggestion popover.
   * @event suggestion-scroll
   */

  /**
   * Fired when the input value changed.
   * the event detail is the value of the input field
   * @event value-changed
   */

  /**
   * init properties
   */
  constructor() {
    super();
    this.type = 'Number';
  }

  /**
   * apply the binding set to the binder
   * binding set can be customised here otherwise the standard set in the ui5-data-input will be used
   * @param fieldNode
   */
  // applyBindingSet() {}

  /**
   * Binds the fieldNode to the component
   * binding set can be customised here otherwise the standard bindData in the ui5-data-input will be used
   * @param fieldNode
   */
  // bindData(fieldNode) {}
}
window.customElements.define('furo-ui5-data-number-input', FuroUi5DataNumberInput);
