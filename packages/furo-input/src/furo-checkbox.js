import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-ripple.js';

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
 * @fires {{String} the text value} value-changed -  Fired when value has changed from inside the component.
 * @fires {{String} the text value} checked -  Fired when the checkbox is checked.
 * @fires {{String} the text value} unchecked -  Fired when the checkbox is unchecked.
 *
 * @summary checkbox input
 * @customElement
 * @demo demo-furo-checkbox Basic demo
 * @appliesMixin FBP
 */
class FuroCheckbox extends FBP(LitElement) {
  _FBPReady() {
    super._FBPReady();
    this._FBPAddWireHook('--inputInput', e => {
      const input = e.composedPath()[0];

      this.checked = input.checked;
      this.value = input.checked;
    });

    this._FBPAddWireHook('--focusReceived', () => {
      this.focused = true;
    });

    this._FBPAddWireHook('--focusOutReceived', () => {
      this.focused = false;
    });
  }

  /**
   * Sets the focus on the checkbox.
   */
  focus() {
    this._FBPTriggerWire('--focus');
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
    this.shadowRoot.getElementById('input').click();
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

  set value(val) {
    let setTo = false;
    if (typeof val === 'boolean') {
      setTo = val;
    }
    if (typeof val === 'string') {
      setTo = val.toLowerCase() === 'true';
    }
    if (this._value !== setTo) {
      this._value = setTo;


      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = this.value;
      this.dispatchEvent(customEvent);

      if (this.checked) {

        const checkedEvent = new Event('checked', { composed: true, bubbles: true });
        checkedEvent.detail = this.value;
        this.dispatchEvent(checkedEvent);
      } else {

        const uncheckedEvent = new Event('unchecked', { composed: true, bubbles: true });
        uncheckedEvent.detail = this.value;
        this.dispatchEvent(uncheckedEvent);
      }
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
        type: Boolean,
      },

      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
      },

      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },

      /**
       * A Boolean attribute which, if present, means this checkbox is checked.
       */
      checked: {
        type: Boolean,
        reflect: true,
      },

      /**
       * A Boolean attribute which, if present, means this is focused.
       */
      focused: {
        type: Boolean,
      },
    };
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroCheckbox') ||
      css`
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

        input[type='checkbox' i] {
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
          background-color: var(--input-checkbox-unselected-bg-color, var(--background, #eeeeee));
          border: solid 2px;
          border-color: var(
            --input-checkbox-unselected-border-color,
            var(--on-background, #212121)
          );
          box-sizing: border-box;
          border-color: var(--on-surface, #808080);
        }

        .wrapper:hover input ~ .checkbox-background {
          background-color: rgba(
            var(
              --input-checkbox-unselected-hover-bg-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-hover, 0.04)
          );
        }

        /* unselected checkbox when pressing */
        .wrapper:active {
          background-color: rgba(
            var(
              --input-checkbox-unselected-active-bg-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-active, 0.1)
          );
        }

        .wrapper:active input ~ .checkbox-background {
          background-color: rgba(
            var(
              --input-checkbox-unselected-active-bg-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-active, 0.1)
          );
        }

        /* unselected checkbox when focusing */
        .wrapper[focused] {
          background-color: rgba(
            var(
              --input-checkbox-unselected-focus-bg-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-focus, 0.12)
          );
        }

        /* unselected checkbox when hovering */
        .wrapper:hover {
          background-color: rgba(
            var(
              --input-checkbox-unselected-hover-bg-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-hover, 0.04)
          );
        }

        /* selected checkbox  */
        .wrapper[checked] input ~ .checkbox-background {
          background-color: var(--input-checkbox-selected-bg-color, var(--primary, #6200fd));
          border-color: var(--input-checkbox-selected-bg-color, var(--primary, #6200fd));
        }

        /* selected checkbox when pressing */
        .wrapper[checked]:active {
          background-color: rgba(
            var(--input-checkbox-selected-active-bg-color-rgb, var(--primary-rgb, 76, 175, 80)),
            var(--state-active, 0.1)
          );
        }

        /* selected checkbox when focusing */
        .wrapper[checked][focused] {
          background-color: rgba(
            var(--input-checkbox-selected-focus-bg-color-rgb, var(--primary-rgb, 76, 175, 80)),
            var(--state-focus, 0.12)
          );
        }

        .wrapper[checked][focused] input ~ .checkbox-background {
        }
        /* selected checkbox when hovering */
        .wrapper[checked]:hover {
          background-color: rgba(
            var(--input-checkbox-selected-hover-bg-color-rgb, var(--primary-rgb, 76, 175, 80)),
            var(--state-hover, 0.04)
          );
        }

        /* disabled checkbox selected */
        .wrapper[checked][disabled] input:disabled:checked ~ .checkbox-background {
          background-color: rgba(
            var(
              --input-checkbox-disabled-selected-bg-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-disabled, 0.38)
          );
          border-color: rgba(
            var(
              --input-checkbox-disabled-selected-border-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-disabled, 0.38)
          );
        }

        /* disabled checkbox unselected */
        .wrapper input:disabled ~ .checkbox-background {
          background-color: rgba(
            var(
              --input-checkbox-disabled-unselected-bg-color-rgb,
              var(--background-rgb, 238, 238, 238)
            ),
            var(--state-disabled, 0.38)
          );
          border-color: rgba(
            var(
              --input-checkbox-disabled-unselected-border-color-rgb,
              var(--on-background-rgb, 33, 33, 33)
            ),
            var(--state-disabled, 0.38)
          );
        }

        .checkbox-background:after {
          content: '';
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

        :host([condensed]) .wrapper,
        :host([condensed]) .wrapper input {
          width: 32px;
          height: 32px;
        }

        :host([condensed]) .checkbox-background {
          top: 7px;
          left: 7px;
        }

        furo-ripple {
          border-radius: 50%;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <div
        id="wrapper"
        class="wrapper"
        ?focused=${this.focused}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
      >
        <input
          id="input"
          type="checkbox"
          ?checked=${this.checked}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ƒ-focus="--focus"
          @-input="--inputInput(*)"
          @-focusout="--focusOutReceived"
          @-focus="--focusReceived"
          @-blur="-^blur"
        />
        <span class="checkbox-background"></span>
        <furo-ripple></furo-ripple>
      </div>
    `;
  }
}

customElements.define('furo-checkbox', FuroCheckbox);
