import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-ripple";
/**
 * `furo-checkbox`
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to to make a binary choice, i.e. a choice between one of two possible mutually exclusive options.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-checkbox></furo-checkbox>
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-checkbox-unselected-bg-color` | background color of the unchecked checkbox | `--background` | #ffffff
 * `--input-checkbox-unselected-border-color` | border color of the unchecked checkbox | `--separator` | #7E7E7E
 * `--input-checkbox-unselected-hover-bg-color` | background color of the unchecked checkbox by hovering | `--surface-light` | #F5F5F5
 * `--input-checkbox-unselected-focus-bg-color` | background color of the unchecked checkbox by focusing | `--surface-dark` | #DDDDDD
 * `--input-checkbox-unselected-active-bg-color` | background color of the unchecked checkbox by pressing | `--surface-dark` | #C0C0C0
 * `--input-checkbox-selected-bg-color` | background color of the checked checkbox | `--accent` | #6200FD
 * `--input-checkbox-selected-hover-bg-color` | background color of the checked checkbox by hovering | `--on-accent` | #D5C6E9
 * `--input-checkbox-selected-focus-bg-color` | background color of the checked checkbox by focusing | `--accent` | #6200FD
 * `--input-checkbox-disabled-selected-bg-color` | background color of the checked disabled checkbox | `--disable` | #B9B9B9
 * `--input-checkbox-disabled-selected-border-color` | border color of the checked disabled checkbox | `--disable` | #B9B9B9
 * `--input-checkbox-disabled-unselected-bg-color` | background color of the unchecked disabled checkbox | `--background` | #ffffff
 * `--input-checkbox-disabled-unselected-border-color` | border color of the unchecked disabled checkbox | `--surface` | #aaaaaa
 * `--input-checkbox-disabled-hover-bg-color` | background color of the unchecked disabled checkbox by hovering| `--background` | #ffffff
 *
 *
 * @summary checkbox input
 * @customElement
 * @demo demo-furo-checkbox Basic demo
 * @appliesMixin FBP
 */
class FuroCheckbox extends FBP(LitElement) {


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
        return Theme.getThemeForComponent(this.name) || css`
            /* https://material.io/design/components/text-fields.html#theming */
            :host {
                display: inline-block;
                position: relative;
                box-sizing: border-box;
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
                width: 40px;
                border-radius: 50%;
                box-sizing: border-box;

            }

            input[type="checkbox" i] {
                margin: 0;
            }

            /* input checkbox*/
            .wrapper input {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                cursor: pointer;
                height: 40px;
                width: 40px;
                z-index: 1;
                box-sizing: border-box;

            }

            .checkbox-background {
                position: absolute;
                top: 11px;
                left: 11px;
                height: 18px;
                width: 18px;
                background-color: var(--input-checkbox-unselected-bg-color, var(--background, #ffffff));
                border: solid 2px;
                border-color: var(--input-checkbox-unselected-border-color, var(--separator, #7E7E7E));
                box-sizing: border-box;
            }

            /* unselected checkbox when hovering */
            .wrapper:hover {
                background-color: var(--input-checkbox-unselected-hover-bg-color, var(--surface-light, #F5F5F5));
            }

            .wrapper:hover input ~ .checkbox-background {
                background-color: var(--input-checkbox-unselected-hover-bg-color, var(--surface-light, #F5F5F5));
            }

            /* unselected checkbox when focusing */
            .wrapper[focused] {
                background-color: var(--input-checkbox-unselected-focus-bg-color, var(--surface-dark, #DDDDDD));
            }

            /* unselected checkbox when pressing */
            .wrapper:active {
                background-color: var(--input-checkbox-unselected-active-bg-color, var(--surface-dark, #C0C0C0));
            }

            .wrapper:active input ~ .checkbox-background {
                background-color: var(--input-checkbox-unselected-active-bg-color, var(--surface-dark, #C0C0C0));
            }

            /* selected checkbox  */
            .wrapper[checked] input ~ .checkbox-background {
                background-color: var(--input-checkbox-selected-bg-color, var(--accent, #6200FD));
                border-color: var(--input-checkbox-selected-bg-color, var(--accent, #6200FD));
            }

            /* selected checkbox when focusing */
            .wrapper[checked][focused] {
                background-color: var(--input-checkbox-selected-hover-bg-color, var(--on-accent, #D5C6E9));
            }

            .wrapper[checked][focused] input ~ .checkbox-background {
                background-color: var(--input-checkbox-selected-focus-bg-color, var(--accent, #6200FD));
            }

            /* selected checkbox when hovering */
            .wrapper[checked]:hover {
                background-color: var(--input-checkbox-selected-hover-bg-color, var(--on-accent, #E4DBE6));
            }

            /* disabled checkbox selected */
            .wrapper[checked][disabled] input:disabled:checked ~ .checkbox-background {
                background-color: var(--input-checkbox-disabled-selected-bg-color, var(--disable, #B9B9B9));
                border-color: var(--input-checkbox-disabled-selected-border-color, var(--disable, #B9B9B9));
            }

            /* disabled checkbox unselected */
            .wrapper input:disabled ~ .checkbox-background {
                background-color: var(--input-checkbox-disabled-unselected-bg-color, var(--background, #ffffff));
                border-color: var(--input-checkbox-disabled-unselected-border-color, var(--surface, #aaaaaa));
            }

            .checkbox-background:after {
                content: "";
                position: absolute;
                display: none;
            }

            input:disabled {
                cursor: default;
            }

            /* disabled checkbox when hovering */
            .wrapper[disabled]:hover {
                background-color: var(--input-checkbox-disabled-hover-bg-color, var(--background, #ffffff));
                background: transparent;
            }

            .wrapper[checked] .checkbox-background:after {
                display: block;
            }

            .wrapper .checkbox-background:after {
                left: 3px;
                top: -1px;
                width: 5px;
                height: 11px;
                border: solid white;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            :host([condensed]) .wrapper , :host([condensed]) .wrapper  input{
                width: 32px;
                height: 32px;
            } 
            
            :host([condensed]) .checkbox-background {
                top: 7px;
                left: 7px;
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
              <input id="input" type="checkbox" ?checked=${this.checked}  ?autofocus=${this.autofocus} ?disabled=${this.disabled} 
                     ƒ-focus="--focus" @-input="--inputInput(*)" @-focusout="--focusOutReceived" @-focus="--focusReceived" @-blur="-^blur"  >
              <span class="checkbox-background"></span>
              <furo-ripple></furo-ripple>
          </div>
        `;
    }
}

customElements.define('furo-checkbox', FuroCheckbox);