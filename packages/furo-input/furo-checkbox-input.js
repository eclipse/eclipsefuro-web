import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-icon";
import "./furo-checkbox";

/**
 * `furo-checkbox-input`
 *
 * # WORK IN PROGRESS
 *
 * Checkbox input element which uses a native `<input type="checkbox">` tag.
 *
 * Checkboxes allow the user to select multiple options from a set.
 *
 * ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-checkbox-input label="This is the Label"></furo-checkbox-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-hint-color` | Color of hint text | #999999 | --
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-label-color` | Color of the label when active  | `--primary` | #3f51b5
 * `--input-activation-indicator-color` | Color of activation indicator when not selected| `--disabled` | #333333
 * `--input-error-activation-indicator-color` | Color of activation indicator in error state | `--error` | red
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-activation-indicator-color` | Color of factivation indicator in active  state   | `--primary` | #3f51b5
 *
 * @summary checkbox input
 * @customElement
 * @demo demo-furo-checkbox-input Basic demo
 * @appliesMixin FBP
 */
class FuroCheckboxInput extends FBP(LitElement) {

    /**
     * @event ALL_BUBBLING_EVENTS_FROM_furo-checkbox
     *
     * All bubbling events from [furo-checkbox](furo-checkbox) will be fired, because furo-checkbox-input uses furo-checkbox internally.
     *
     */

    constructor() {
        super();
        this.valid = true;
    }

    _FBPReady() {
        super._FBPReady();
        // init value , when undefined then false
        this._value = !!this.value;
        this._FBPAddWireHook("--toggle", _ => {

            if(!this.disabled) {
                this.toggle()
            }
        });
    }

    set value(v) {
        this._value = v;
        this._FBPTriggerWire("--value", !!v)
    }

    get value() {
        return this._value;
    }

    set checked(v) {
        if (v) {
            this.check();
        } else {
            this.uncheck();
        }
    }


    static get properties() {
        return {
            /**
             * set this to true to indicate errors
             */
            error: {type: Boolean, reflect: true},

            /**
             * The value of checkbox with true (checked) or false (unchecked). Changes will be notified with the `@-value-changed` event
             * This is different from the native attribute `value` of the input checkbox
             */
            value: {
                type: Boolean
            },

            /**
             * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
             */
            label: {
                type: String,
                attribute: true
            },

            /**
             * A Boolean attribute which, if present, means this checkbox is checked.
             */
            checked: {
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
                type: Boolean, reflect: true
            },
            /**
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            readonly: {
                type: Boolean, reflect: true
            },
            /**
             * The hint text for the field.
             */
            hint: {
                type: String,
            },
            /**
             * Text for errors
             */
            errortext: {
                type: String,
            },
            /**
             * html input validity
             */
            valid: {
                type: Boolean,
                reflect: true
            },
            /**
             * The default style (md like) supports a condensed form. It is a little bit smaller then the default
             */
            condensed: {
                type: Boolean
            },
            /**
             * Set this attribute to switch to filled layout. Filled is without the borders around the field.
             */
            filled: {
                type: Boolean
            }

        };
    }

    /**
     * Sets the value for the checkbox.
     * @param {Boolean} v
     */
    setValue(v) {
        this.value = !!v;
    }

    /**
     * toggle the checkbox
     */
    toggle() {
        if (this.value) {
            this.uncheck();
        } else {
            this.check();
        }
    }

    /**
     * Setter method for errortext
     * @param {String} errortext
     * @private
     */
    set errortext(v) {
        this._errortext = v;
        this.__initalErrorText = v;
    }

    /**
     * Getter method for errortext
     * @private
     */
    get errortext() {
        return this._errortext;
    }

    /**
     * Set the field to error state
     *
     * @param [{String}] The new errortext
     */
    setError(text) {
        if (typeof text === "string") {
            this._errortext = text;
        }
        this.error = true;
    }

    /**
     * clears the error and restores the errortext.
     */
    clearError() {
        this.error = false;
        this._errortext = this.__initalErrorText;
    }

    /**
     * Sets the focus on the field.
     */
    focus() {
        this._FBPTriggerWire("--focus");
    }

    /**
     * Sets the field to readonly
     */
    disable() {
        this.readonly = true;
    }

    /**
     * Makes the field writable.
     */
    enable() {
        this.readonly = false;
    }

    /**
     * check the checkbox
     */
    check() {
        this.value = true;
    }

    /**
     * uncheck the checkbox
     */
    uncheck() {
        this.value = false;
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
                margin: 0;
                height: 56px;
                width: 300px;
            }

            :host([hidden]) {
                display: none;
            }

            .wrapper {
                position: relative;
                padding: 0;
                box-sizing: border-box;
                height: 56px;
            }

            :host([filled]) .wrapper {
                background-color: var(--surface-light, #FEFEFE);
            }

            :host([filled]) .wrapper:hover {
                background-color: var(--surface, #FCFCFC);
            }

            :host([filled]:focus-within) .wrapper {
                background-color: var(--surface-dark, #FEA222);
            }

            :host(:not([filled]):hover) label {
                border-color: var(--input-hover-color, #333333);
            }

            label {
                line-height: 56px;
            }

            .ripple-line {
                display: none;
                position: absolute;
                width: 100%;
                height: 1px;
                top: 54px;
                border: none;
                border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            }

            :host([filled]) .ripple-line {
                display: block;
            }

            :host([filled]) label {
                line-height: 56px;
                border: none;
            }

            * {
                transition: all 200ms ease-out;
            }

            .hint, .errortext {
                position: absolute;
                bottom: -0;
                font-size: 12px;
                color: transparent;
                padding-left: 42px;
                white-space: nowrap;
                pointer-events: none;
            }

            :host(:focus-within) .hint {
                color: var(--input-hint-color, #999999);
                transition: all 550ms ease-in;
            }

            :host([error]) .errortext {
                display: block;
            }

            .errortext {
                color: var(--input-error-text-color, var(--error, red));
                display: none;
            }

            label {
                font-size: 16px;
                color: inherit;
                cursor: pointer;
            }

            :host(:focus-within) label, :host(:focus-within:not([filled])) label {
                color: var(--input-active-label-color, var(--primary, #3f51b5));
                border-color: var(--input-active-label-color, var(--primary, #3f51b5));
            }

            :host(:focus-within) .ripple-line {
                border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
                border-width: 2px;
            }

            :host(:not([filled]):focus-within) label {
                border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
                border-width: 2px;
            }

            :host([error]:focus-within) label, :host([error]:focus-within) .ripple-line {
                border-color: var(--input-error-text-color, var(--error, red));
                border-width: 2px;
            }

            :host([error]:focus-within) label {
                color: var(--input-error-text-color, var(--error, red));
            }

            :host([error]:focus-within) .hint {
                display: none;
            }

            :host([error]) .ripple-line, :host([error]) label {
                border-color: var(--input-error-activation-indicator-color, var(--error, red));
            }

            :host(:focus-within:not([valid])) label {
                color: var(--input-error-text-color, var(--error, red));
            }

            :host([condensed]) label {
                top: 2px;
                font-size: 14px;
            }

            :host([condensed]:not([filled])) label, :host([filled][condensed]) label {
                line-height: 36px;
                font-size: 14px;
            }

            :host([condensed][filled]) input {
                font-size: 13px;
            }

            :host([condensed]) .wrapper {
                height: 36px;
            }

            :host([condensed]) .ripple-line {
                top: 34px;
            }

            :host([condensed]) .hint, :host([condensed]) .errortext {
                font-size: 10px;
            }

            :host([condensed]) {
                height: 36px;
            }

            furo-checkbox {
                position: absolute;
                top: 8px;
            }

            label {
                position: absolute;
                top: 0px;
                left: 42px;
                right: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }

            :host([condensed]) furo-checkbox {
                top: -2px;
            }

        `
    }

    render() {
        // language=HTML
        return html` 
      <div class="wrapper">
      
        <furo-checkbox type="checkbox" id="input"  ?autofocus=${this.autofocus} ?disabled=${this.disabled || this.readonly}  
          ƒ-set-value="--value" ƒ-focus="--focus"></furo-checkbox>
        <label for="input"  @-click="--toggle,--focus">${this.label}</label>
        
      </div>
      
      <div class="ripple-line"></div>           
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
 
    `;
    }
}

window.customElements.define('furo-checkbox-input', FuroCheckboxInput);
