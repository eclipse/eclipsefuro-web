import { LitElement, css } from 'lit-element';
import { FBP } from '@furo/fbp';

/**
 * `furo-data-emmiter`
 *  emits/fires the value from a data-object.
 *
 *  ```html
 *   <furo-data-emmiter
 *        ƒ-trigger="--jsonDataRequested"
 *        ƒ-bind-data="--dataObject"
 *        @-data="--jsonData"></furo-data-emmiter>
 *  ```
 *
 * @fires {json data of a data object} data -  Fired when trigger was called and data binding was done
 *
 * @summary emit value of data object
 * @customElement
 * @appliesMixin FBP
 */
class FuroDataEmmiter extends FBP(LitElement) {
  /**
   * Bind a data object. The trigger method will not fire until an object was bounded.
   * @param {Object|FieldNode} field a object from furo-data-object
   */
  bindData(field) {
    this.field = field;
  }

  /**
   * Read .value of the bounded data object and emit data as json object.
   */
  trigger() {
    if (this.field) {
      const customEvent = new Event('data', { composed: true, bubbles: false });
      customEvent.detail = this.field._value;
      this.dispatchEvent(customEvent);
    }
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-data-emmiter', FuroDataEmmiter);
