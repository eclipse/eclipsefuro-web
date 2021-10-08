import * as Button from '@ui5/webcomponents/dist/Button.js';

/**
 * `furo-ui5-button`
 * The furo-ui5-button component represents a simple push button. It enables users to trigger actions by clicking or
 * tapping the furo-ui5-button, or by pressing certain keyboard keys, such as Enter.
 * Usage
 * For the furo-ui5-button UI, you can define text, icon, or both. You can also specify whether the text or the icon is displayed first.
 *
 * You can choose from a set of predefined types that offer different styling to correspond to the triggered action.
 *
 * You can set the furo-ui5-button as enabled or disabled.
 * An enabled ui5-button can be pressed by clicking or tapping it.
 * The button changes its style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor.
 * A disabled furo-ui5-button appears inactive and cannot be pressed.
 *
 * What is different from ui5-button?
 * With flow based programming it's usual to address functions. So we added two convenience functions for
 * - disabling => ƒ-disable
 * - enabling => ƒ-enable
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/Button/
 *
 * @summary ui5 button
 * @customElement
 * @demo demo-furo-ui5-button Basic usage
 */
export class FuroUi5Button extends Button.default {
  /**
   * Sets the button state to disabled
   */
  disable() {
    this.setAttribute('disabled', 'true');
  }

  /**
   * Sets the button state to enabled
   */
  enable() {
    this.removeAttribute('disabled');
  }

  /**
   * shows the button, when it was hidden before
   */
  show() {
    this.hidden = false;
  }

  /**
   * hides the button
   */
  hide() {
    this.hidden = true;
  }
}

window.customElements.define('furo-ui5-button', FuroUi5Button);
