import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `furo-data-hide-content` hides content in dependency to a boolean field value.
 *
 * It is also possible to call the `hide()` and `show()` methods to show and hide the content and update the value.
 *
 *
 *```
 * <furo-data-hide-content ƒ-bind-data="--bind(*.bool)" ƒ-hide="--hideClicked" ƒ-show="--showClicked">
 *  <div>some content</div>
 * </furo-collapsible-box>
 *```
 *
 * @summary hide content
 * @customElement
 * @demo demo-furo-data-hide-content
 * @appliesMixin FBP
 */
class FuroDataHideContent extends FBP(LitElement) {

  constructor() {
    super();
    this.hidden = false;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Is the content hidden
       */
      _hidden: {
        type: Boolean, reflect: true, attribute: "hidden"
      },
      /**
       * Hide element on false instead of true
       */
      hideOnFalse: {
        type: Boolean, attribute: 'hide-on-false'
      },
    };
  }

  /**
   * Bind a entity field to the date-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    if (fieldNode._spec && fieldNode._spec.type !== "bool") {
      console.warn("Invalid binding. Type is not a 'bool' ");
      console.log(this);
      return
    }

    this.field = fieldNode;
    this.hidden = this._checkInversedState(this.field._value);
    this.field.addEventListener('field-value-changed', (e) => {
      this.hidden = this._checkInversedState(this.field._value);
    });
  }

  // inverses the bool based on hindOnFalse
  _checkInversedState(bool){
    return this.hideOnFalse ? !bool : bool
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
    let oldval = this._hidden;
    this._hidden = hide;

    if(oldval !== hide){
      /**
       * @event value-changed
       * Fired when the visibility changed
       *
       * detail payload: {Boolean} current visibility state
       */
      this._notify("toggled");
    }


    if (this.field) {
        this.field._value = this._checkInversedState(this._hidden);
    }




    if (hide) {
      /**
       * @event hided
       * Fired when the content gets hided
       *
       * detail payload: void
       */

      this._notify("hided");

    } else {
      /**
       * @event showed
       * Fired when the content gets visible
       *
       * detail payload: void
       */
      this._notify("showed");
    }

  }

  _notify(eventname){
      const customEvent = new Event(eventname, {composed: true, bubbles: false});
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
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <slot></slot>`;
  }
}

window.customElements.define('furo-data-hide-content', FuroDataHideContent);
