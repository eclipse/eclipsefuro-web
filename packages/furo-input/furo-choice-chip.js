import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-ripple";
/**
 * `furo-choice-chip`
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to to make a binary choice, i.e. a choice between one of two possible mutually exclusive options.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-choice-chip></furo-choice-chip>
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-checkbox-unselected-bg-color` | background color of the unchecked checkbox | `--background` | hex: #ffffff
 * `--input-checkbox-unselected-border-color` | border color of the unchecked checkbox | `--on-background` | hex: #7E7E7E
 * `--input-checkbox-unselected-hover-bg-color-rgb` | background color of the unchecked checkbox by hovering | `--on-background-rgb` with `--state-hover` opacity | rgba: 33, 33, 33, 0.04
 * `--input-checkbox-unselected-focus-bg-color-rgb` | background color of the unchecked checkbox by focusing | `--on-background-rgb` with `--state-focus` opacity | rgba: 33, 33, 33, 0.12
 * `--input-checkbox-unselected-active-bg-color-rgb` | background color of the unchecked checkbox by pressing | `--on-background-rgb` with `--state-active` opacity | rgba: 33, 33, 33, 0.10
 * `--input-checkbox-selected-bg-color` | background color of the checked checkbox | `--primary` | hex: #6200FD
 * `--input-checkbox-selected-hover-bg-color-rgb` | background color of the checked checkbox by hovering | `--primary-rgb`  with `--state-hover` opacity  | rgba: 76, 175, 80, 0.04
 * `--input-checkbox-selected-focus-bg-color-rgb` | background color of the checked checkbox by focusing | `--primary-rgb`  with `--state-focus` opacity  | rgba: 76, 175, 80, 0.12
 * `--input-checkbox-selected-active-bg-color-rgb` | background color of the checked checkbox by pressing | `--primary-rgb`  with `--state-active` opacity  | rgba: 76, 175, 80, 0.10
 * `--input-checkbox-disabled-selected-bg-color` | background color of the checked disabled checkbox | `--on-background` | hex: #B9B9B9
 * `--input-checkbox-disabled-selected-border-color-rgb` | border color of the checked disabled checkbox | `----on-background-rgb`  with `--state-disabled` opacity| rgba: 33, 33, 33, 0.38
 * `--input-checkbox-disabled-selected-bg-color-rgb` | background color of the checked disabled checkbox | `----on-background-rgb`  with `--state-disabled` opacity| rgba: 33, 33, 33, 0.38
 * `--input-checkbox-disabled-unselected-bg-color-rgb` | background color of the unchecked disabled checkbox | `--background-rgb`  with `--state-disabled` opacity| rgba: 238, 238, 238, 0.38
 * `--input-checkbox-disabled-unselected-border-color` | border color of the unchecked disabled checkbox | `--on-background-rgb`  with `--state-disabled` opacity| rgba: 33, 33, 33, 0.38
 *
 *
 * @summary chips
 * @customElement
 * @demo demo-furo-choice-chip Basic demo
 * @appliesMixin FBP
 */
class FuroChoiceChip extends FBP(LitElement) {


  constructor() {
    super();
  }

  _FBPReady() {
    super._FBPReady();
    this._FBPAddWireHook("--inputInput", (e) => {

      let input = e.composedPath()[0];

      this.checked = input.checked;
      this.value = input.checked;
    });

    this.addEventListener("click", (e)=>{
      e.stopPropagation();
      this.toggle();
    });

    this._FBPAddWireHook("--focusReceived", (e) => {
      this.focused = true;
    });

    this._FBPAddWireHook("--focusOutReceived", (e) => {
      this.focused = false;
    });

  }

  /**
   * Sets the focus on the checkbox.
   */
  focus() {
    this._FBPTriggerWire("--focus");
  }

  /**
   * check the checkbox
   */
  check() {
    this.checked = true;
    this.value = true;
  }

  /**
   * uncheck the checkbox
   */
  uncheck() {
    this.checked = false;
    this.value = false;
  }

  /**
   * toggle the checkbox
   */
  toggle() {
    this.shadowRoot.getElementById("input").click();
  }

  /**
   * Sets the value for the checkbox
   * The value of checkbox with true (checked) or false (unchecked). Changes will be notified with the `@-value-changed` event
   * This is different from the native attribute `value` of the input checkbox
   * @param {boolean} v
   */
  setValue(v) {
    this.checked = !!v;
    this.value = !!v;
  }

  set value(v) {

    this._value = !!v;

    /**
     * @event value-changed
     * Fired when value has changed from inside the component
     * detail payload: {String} the text value
     */
    let customEvent = new Event('value-changed', {composed: true, bubbles: true});
    customEvent.detail = this.value;
    this.dispatchEvent(customEvent);

    if (this.checked) {

      /**
       * @event checked
       * Fired when the checkbox is checked
       * detail payload: {String} the text value
       */
      let customEvent = new Event('checked', {composed: true, bubbles: true});
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);
    }
    else {
      /**
       * @event unchecked
       * Fired when the checkbox is unchecked
       * detail payload: {String} the text value
       */
      let customEvent = new Event('unchecked', {composed: true, bubbles: true});
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);
    }
  }

  get value() {
    return this._value;
  }

  static get properties() {
    return {

      /**
       * The value of checkbox with true (checked) or false (unchecked). Changes will be notified with the `@-value-changed` event
       * This is different from the native attribute `value` of the input checkbox
       */
      value: {
        type: Boolean
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean
      },

      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean
      },

      /**
       * A Boolean attribute which, if present, means this checkbox is checked.
       */
      checked: {
        type: Boolean, reflect: true
      },

      /**
       * A Boolean attribute which, if present, means this is focused.
       */
      focused: {
        type: Boolean, reflect: true
      },

      text: {
        type: String
      },

      outlined: {
        type: Boolean
      }
    };
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroChoiceChip') || css`
            /* https://material.io/components/chips/#choice-chips*/
            
            :host([hidden]) {
                display: none;
            }

            /* The wrapper */
            :host {
                width: auto;
                position: relative;
                box-sizing: border-box;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                height: 40px;
                border-radius: 20px;
                background-color: var(--choise-chip-unchecked--bg-color, var(--background, #eeeeee));
                padding: 8px;
                display: inline-block;

            }
            /* input checkbox*/
            :host input {
                z-index: -1;
                position: absolute;
                height: 0;
                width: 0;
            }

            :host([outlined]){
                background-color: var(--choise-chip-outlined-unchecked--bg-color, #ffffff);
                border: solid 1px;
            }

            /* selected choice chip  */
            :host([checked]){
                background-color: var(--choise-chip-checked-bg-color, var(--primary, #4caf4f));
                color: var(--choise-chip-checked-color, var(--on-primary, #ffffff));
            }

            :host([outlined][checked]){
                background-color: rgba( var(--choise-chip-outlined-checked-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-active, 0.10) ) ;
                color: var(--choise-chip-outlined-checked-text-color, var(--primary, #4caf50));
                border: solid 1px;
                border-color: var(--choise-chip-outlined-checked-border-color, var(--on-background, #000000))
            }
            
            :host([outlined][checked]:hover) {
                background-color: rgba( var(--choise-chip-outlined-checked-hover-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-hover, 0.04) ) ;
            }
            
            /* outlined selected choice chip when hovering */
            :host([checked]:hover) {
                background-color: var(--choise-chip-checked-hover-bg-color, var(--primary, #4caf4f));
            }
            
            /* hover */
            :host(:hover){
                background-color: rgba( var(--choise-chip-unchecked-hover-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-hover, 0.04) ) ;
            }

            /* unchecked chip when pressing */
            :host:active {
                background-color: rgba( var(--choise-chip-unchecked-active-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-active, 0.10) ) ;
            }

            /* unchecked chip when focusing */
            :host([focused]) {
                background-color: rgba( var(--choise-chip-unchecked-focus-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-focus, 0.12) ) ;
            }

            /* unchecked chip when pressing */
            :host([checked]):active {
                background-color: rgba( var(--choise-chip-checked-active-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-active, 0.10) ) ;
            }

            /* checked chip when focusing */
            :host([checked][focused]) {
                background-color: rgba( var(--choise-chip-checked-focus-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-focus, 0.12) ) ;
            }
            
            /* disabled chip checked */
            :host([checked][disabled]){
                color: var(--choise-chip-checked-color, var(--on-primary, #ffffff));
                background-color: rgba( var(--choise-chip-disabled-checked-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }

            /* disabled chip checked */
            :host([outlined][checked][disabled]){
                color: var(--choise-chip-checked-color, var(--on-primary, #ffffff));
                background-color: rgba( var(--choise-chip-disabled-checked-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }


            :host([disabled]) {
                cursor: default;
                background-color: rgba( var(--choise-chip-disabled-checked-bg-color-rgb, var(--background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }
            /* disabled chip should have no ripple effect */
            :host([disabled]) furo-ripple{
               display: none;
            }

            /* disabled chip should have no hover effect */
            :host([checked][disabled]:hover){
                background-color: rgba( var(--choise-chip-disabled-checked-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }
            
            
            /* disabled chip should have no hover effect */
            :host([disabled]:hover){
                background-color: rgba( var(--choise-chip-disabled-checked-bg-color-rgb, var(--background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }

            
            :host([condensed]) {
                height: 32px;
                padding: 4px;
                border-radius: 16px;

            }
            furo-ripple{
                border-radius: 20px;
            }
      
            span {
                margin: 0 5px;
            }
        `
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
          <input id="input" type="checkbox" ?checked=${this.checked}  ?autofocus=${this.autofocus} ?disabled=${this.disabled} 
                 ƒ-focus="--focus" @-input="--inputInput(*)" @-focusout="--focusOutReceived" @-focus="--focusReceived" @-blur="-^blur"  >
          <span>${this.text}</span>
          <furo-ripple></furo-ripple>
        `;
  }
}

customElements.define('furo-choice-chip', FuroChoiceChip);
