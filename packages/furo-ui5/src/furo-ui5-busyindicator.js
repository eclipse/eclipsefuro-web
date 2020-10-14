import * as Busy from '@ui5/webcomponents/dist/BusyIndicator.js';

/**
 * `furo-ui5-busyindicator`
 * The furo-ui5-busyindicator signals that some operation is going on and that the user must wait. It does not block
 * the current UI screen so other operations could be triggered in parallel.
 * Usage
 * For the furo-ui5-busyindicator you can define the size of the indicator, as well as whether it is shown or hidden.
 * In order to hide it, use the html attribute hidden or display: none;
 *
 * In order to show busy state for an HTML element, simply nest the HTML element in a furo-ui5-busyindicator instance.
 * Note: Since furo-ui5-busyindicator has display: inline-block; by default and no width of its own, whenever you need
 * to wrap a block-level element, you should set display: block to the busy indicator as well.
 *
 * What is different from ui5-busyindicator?
 * With flow based programming it's usual to address functions. So we added two convenience functions for
 * - activate => ƒ-activate
 * - deactivate => ƒ-deactivate
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator/
 *
 * @summary ui5 busy indicator
 * @customElement
 * @demo demo-furo-ui5-busyindicator Basic usage
 */
export class FuroUiBusyindicator extends Busy.default {
  /**
   * Sets the busy indicator state to active
   */
  activate() {
    this.setAttribute('active', 'true');
  }

  /**
   * Sets the busy indicator state to inactive
   */
  deactivate() {
    this.removeAttribute('active');
  }
}
window.customElements.define('furo-ui5-busyindicator', FuroUiBusyindicator);
