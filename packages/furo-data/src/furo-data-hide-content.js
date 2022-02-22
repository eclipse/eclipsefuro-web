import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-data-hide-content` hides content in dependency to a boolean field value.
 *
 * It is also possible to call the `hide()` and `show()` methods to show and hide the content and update the value.
 * TODO:  support furo.fat.Bool and google.protobuf.BoolValue
 *
 *```html
 * <furo-data-hide-content ƒ-bind-data="--bind(*.bool)">
 *   <div>some content</div>
 * </furo-collapsible-box>
 *```
 *
 * @fires {Boolean} value-changed -  Fired when the visibility changed, contains the current visibility state
 * @fires {void} hid -  Fired when the content gets hid
 * @fires {void} showed -  Fired when the content gets visible
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * @summary hide content with a boolean fieldnode
 * @customElement
 * @appliesMixin FBP
 */
class FuroDataHideContent extends FBP(LitElement) {
  constructor() {
    super();

    // eslint-disable-next-line wc/no-constructor-attributes
    this.hidden = false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Internal variable to update the attribute, which triggers the css
       * @private
       */
      _hidden: {
        type: Boolean,
        reflect: true,
        attribute: 'hidden',
      },
      /**
       * Hide element on false instead of true
       */
      hideOnFalse: {
        type: Boolean,
        attribute: 'hide-on-false',
      },
    };
  }

  /**
   * Bind a entity field to the date-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    if (fieldNode._spec && fieldNode._spec.type !== 'bool') {
      // eslint-disable-next-line no-console
      console.warn("Invalid binding. Type is not a 'bool' ");
      // eslint-disable-next-line no-console
      console.log(this);
      return;
    }

    this.field = fieldNode;
    this.hidden = this._checkInversedState(this.field._value);
    this.field.addEventListener('field-value-changed', () => {
      this.hidden = this._checkInversedState(this.field._value);
    });
  }

  /**
   * inverses the bool based on hideOnFalse
   * @param bool
   * @return {boolean|*}
   * @private
   */
  _checkInversedState(bool) {
    return this.hideOnFalse ? !bool : bool;
  }

  /**
   * hides the content
   */
  hide() {
    this.hidden = true;
  }

  /**
   * shows the content
   */
  show() {
    this.hidden = false;
  }

  /**
   * Toggle the current visibility state.
   */
  toggle() {
    this.hidden = !this.hidden;
  }

  get hidden() {
    return this._hidden;
  }

  set hidden(hide) {
    const oldval = this._hidden;
    this._hidden = hide;

    if (oldval !== hide) {
      this._notify('toggled');
    }

    if (this.field) {
      this.field._value = this._checkInversedState(this._hidden);
    }

    if (hide) {
      this._notify('hid');
    } else {
      this._notify('showed');
    }
  }

  /**
   *
   * @param eventname
   * @private
   */
  _notify(eventname) {
    const customEvent = new Event(eventname, { composed: true, bubbles: false });
    customEvent.detail = this.hidden;
    this.dispatchEvent(customEvent);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>
    `;
  }
}

window.customElements.define('furo-data-hide-content', FuroDataHideContent);
