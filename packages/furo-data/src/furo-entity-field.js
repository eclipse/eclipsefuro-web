import { LitElement, css } from 'lit';

/**
 * Use this component to interact with fields from a furo-data-object.
 *
 * You can update the field value or listen to changes of a field.
 *
 * ```html
 * <furo-entity-field fn-bind-data="--dataObject(*.field)"></furo-entity-field>
 * ```
 *
 * @fires {*} value-changed -  Fired when the field value or a child value of it was changed.
 * @summary interact with single field of a data object
 * @customElement
 * @mixes FBP
 */
class FuroEntityField extends LitElement {
  /**
   * Set the value of the field.
   * @param value {*}
   */
  setValue(value) {
    /**
     * The value of the node which was connected with bind-data
     * @type *
     */
    this.value = value;
  }

  /**
   * Set a value to update the fieldnode
   * @param v {*}
   */
  set value(v) {
    if (!this.field) {
      this._queue = v;
    } else {
      this._value = v;
      this.field._value = v;
    }
  }

  get value() {
    return this._value;
  }

  /**
   * Bind a FieldNode to the date-input.
   *
   * `--personDO(*.person.firstname)`
   *
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ');
      // eslint-disable-next-line no-console
      console.log(this);
      return new Error('Invalid binding');
    }

    this.field = fieldNode;

    this.field.addEventListener('field-value-changed', e => {
      const customEvent = new Event('value-changed', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = e.detail.value;
      this.dispatchEvent(customEvent);
    });

    if (this._queue !== undefined) {
      this._value = this._queue;
      this.field._value = this._queue;
      this._queue = undefined;
    }
    return this.field;
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

customElements.define('furo-entity-field', FuroEntityField);
