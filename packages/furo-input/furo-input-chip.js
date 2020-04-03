import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/src/furo-ripple";
/**
 * `furo-input-chip`
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to to make a binary choice, i.e. a choice between one of two possible mutually exclusive options.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-input-chip></furo-input-chip>
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
 * @summary input chips
 * @customElement
 * @demo demo-furo-input-chip Basic demo
 * @appliesMixin FBP
 */
class FuroInputChip extends FBP(LitElement) {


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
        type: Boolean
      },

      leadingIcon: {
        type: String,
        attribute: "leading-icon"
      },

      trailingIcon: {
        type: String,
        attribute: "trailing-icon"
      },

      text: {
        type: String
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
    return Theme.getThemeForComponent('FuroInputChip') || css`
            /* https://material.io/design/components/text-fields.html#theming */
            :host {
                display: inline-block;
                position: relative;
                box-sizing: border-box;
                display: flex;
            }

            :host([hidden]) {
                display: none;
            }

            /* The wrapper */
            .wrapper {
                display: block;
                position: relative;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                height: 40px;
                border-radius: 20px;
                box-sizing: border-box;
                display: flex;
                background-color: var(--input-checkbox-unselected-bg-color, var(--background, #eeeeee));
                padding: 8px;

            }

            input[type="checkbox" i] {
                margin: 0;
            }

            /* input checkbox*/
            .wrapper input {
                display: none;
            }

            .chip-background {
                position: absolute;
                top: 11px;
                left: 11px;
                height: 18px;
                width: 18px;
                background-color: var(--input-checkbox-unselected-bg-color, var(--background, #eeeeee));
                border: solid 2px;
                border-color: var(--input-checkbox-unselected-border-color, var(--on-background, #212121));
                box-sizing: border-box;
                display: flex;
            }
            
            .wrapper:hover input ~ .chip-background {
                background-color: rgba( var(--input-checkbox-unselected-hover-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-hover, 0.04) ) ;
            }

            /* unselected checkbox when pressing */
            .wrapper:active {
                background-color: rgba( var(--input-checkbox-unselected-active-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-active, 0.10) ) ;

            }
            
            .wrapper:active input ~ .chip-background {
                background-color: rgba( var(--input-checkbox-unselected-active-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-active, 0.10) ) ;
            }

            /* unselected checkbox when focusing */
            .wrapper[focused] {
                background-color: rgba( var(--input-checkbox-unselected-focus-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-focus, 0.12) ) ;

            }

            /* unselected checkbox when hovering */
            .wrapper:hover {
                background-color: rgba( var(--input-checkbox-unselected-hover-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-hover, 0.04) ) ;
            }


            /* selected checkbox  */
            .wrapper[checked]{
                background-color: var(--input-checkbox-selected-bg-color, var(--primary, #6200FD));
            }
            
            /* selected checkbox when pressing */
            .wrapper[checked]:active {
                background-color: rgba( var(--input-checkbox-selected-active-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-active, 0.10) ) ;
            }

            /* selected checkbox when focusing */
            .wrapper[checked][focused] {
                background-color: rgba( var(--input-checkbox-selected-focus-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-focus, 0.12) ) ;
            }

            .wrapper[checked][focused] input ~ .chip-background {
            }
            /* selected checkbox when hovering */
            .wrapper[checked]:hover {
                background-color: rgba( var(--input-checkbox-selected-hover-bg-color-rgb, var(--primary-rgb, 76, 175, 80)), var(--state-hover, 0.04) ) ;
            }

            
            /* disabled checkbox selected */
            .wrapper[checked][disabled] input:disabled:checked ~ .chip-background {

                background-color: rgba( var(--input-checkbox-disabled-selected-bg-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
                border-color: rgba( var(--input-checkbox-disabled-selected-border-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;

            }

            /* disabled checkbox unselected */
            .wrapper input:disabled ~ .chip-background {
                background-color: rgba( var(--input-checkbox-disabled-unselected-bg-color-rgb, var(--background-rgb, 238, 238, 238)), var(--state-disabled, 0.38) ) ;
                border-color: rgba( var(--input-checkbox-disabled-unselected-border-color-rgb, var(--on-background-rgb, 33, 33, 33)), var(--state-disabled, 0.38) ) ;
            }

            .chip-background:after {
                content: "";
                position: absolute;
                display: none;
            }

            input:disabled {
                cursor: default;
            }

            /* disabled checkbox when hovering */
            .wrapper[disabled]:hover {
                background: transparent;
            }

            :host([condensed]) .wrapper , :host([condensed]) .wrapper  input{
                height: 32px;
                padding: 4px;
                border-radius: 16px;

            } 
            
            furo-ripple{
                border-radius: 50%;
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
          <div id="wrapper" class="wrapper" ?focused=${this.focused} ?checked=${this.checked} ?disabled=${this.disabled}>
          
              <furo-icon class="lead" icon="${this.leadingIcon}"></furo-icon>    

              <input id="input" type="checkbox" ?checked=${this.checked}  ?autofocus=${this.autofocus} ?disabled=${this.disabled} 
                     ƒ-focus="--focus" @-input="--inputInput(*)" @-focusout="--focusOutReceived" @-focus="--focusReceived" @-blur="-^blur"  >
              <span>${this.text}</span>
              <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>

              <furo-ripple></furo-ripple>
          </div>
        `;
  }
}

customElements.define('furo-input-chip', FuroInputChip);
