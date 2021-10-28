import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-ripple';
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
 * @cssprop {#ffffff} [--input-checkbox-unselected-bg-color=--background] - background color of the unchecked checkbox
 * @cssprop {#7E7E7E} [--input-checkbox-unselected-border-color=--on-background] - border color of the unchecked checkbox
 * @cssprop {rgba: 33, 33, 33, 0.04} [--input-checkbox-unselected-hover-bg-color-rgb=--on-background-rgb with --state-hover opacity] - background color of the unchecked checkbox by hovering
 * @cssprop {rgba: 33, 33, 33, 0.12} [--input-checkbox-unselected-focus-bg-color-rgb=--on-background-rgb with --state-focus opacity] - background color of the unchecked checkbox by focusing
 * @cssprop {rgba: 33, 33, 33, 0.10} [--input-checkbox-unselected-active-bg-color-rgb=--on-background-rgb with --state-active opacity] - background color of the unchecked checkbox by pressing
 * @cssprop {#6200FD} [--input-checkbox-selected-bg-color=--primary] - background color of the checked checkbox
 * @cssprop {rgba: 76, 175, 80, 0.04} [--input-checkbox-selected-hover-bg-color-rgb=--primary-rgb  with --state-hover opacity] - background color of the checked checkbox by hovering
 * @cssprop {rgba: 76, 175, 80, 0.12} [--input-checkbox-selected-focus-bg-color-rgb=--primary-rgb  with --state-focus opacity] - background color of the checked checkbox by focusing
 * @cssprop {rgba: 76, 175, 80, 0.10} [--input-checkbox-selected-active-bg-color-rgb=--primary-rgb  with --state-active opacity] - background color of the checked checkbox by pressing
 * @cssprop {#B9B9B9} [--input-checkbox-disabled-selected-bg-color=--on-background] - background color of the checked disabled checkbox
 * @cssprop {rgba: 33, 33, 33, 0.38} [--input-checkbox-disabled-selected-border-color-rgb=--on-background-rgb with --state-disabled opacity] - border color of the checked disabled checkbox
 * @cssprop {rgba: 33, 33, 33, 0.38} [--input-checkbox-disabled-selected-bg-color-rgb=--on-background-rgb with --state-disabled opacity] - background color of the checked disabled checkbox
 * @cssprop {rgba: 238, 238, 238, 0.38} [--input-checkbox-disabled-unselected-bg-color-rgb=--background-rgb with --state-disabled opacity] - background color of the unchecked disabled checkbox
 * @cssprop {rgba: 33, 33, 33, 0.38} [--input-checkbox-disabled-unselected-border-color=--on-background-rgb with --state-disabled opacity] - border color of the unchecked disabled checkbox
 *
 * @fires {{String} the text value} value-changed -  Fired when value has changed from inside the component.
 * @fires {{String} the text value} checked -  Fired when the checkbox is checked.
 * @fires {{String} the text value} unchecked -  Fired when the checkbox is unchecked.
 *
 * @summary input chips
 * @customElement
 * @demo demo-furo-input-chip Basic demo
 * @appliesMixin FBP
 */
class FuroInputChip extends FBP(LitElement) {
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

  set value(v) {
    this._value = !!v;

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

      leadingIcon: {
        type: String,
        attribute: 'leading-icon',
      },

      trailingIcon: {
        type: String,
        attribute: 'trailing-icon',
      },

      text: {
        type: String,
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

      css`
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

        input[type='checkbox' i] {
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
          border-color: var(
            --input-checkbox-unselected-border-color,
            var(--on-background, #212121)
          );
          box-sizing: border-box;
          display: flex;
        }

        .wrapper:hover input ~ .chip-background {
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

        .wrapper:active input ~ .chip-background {
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
        .wrapper[checked] {
          background-color: var(--input-checkbox-selected-bg-color, var(--primary, #6200fd));
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

        .wrapper[checked][focused] input ~ .chip-background {
        }
        /* selected checkbox when hovering */
        .wrapper[checked]:hover {
          background-color: rgba(
            var(--input-checkbox-selected-hover-bg-color-rgb, var(--primary-rgb, 76, 175, 80)),
            var(--state-hover, 0.04)
          );
        }

        /* disabled checkbox selected */
        .wrapper[checked][disabled] input:disabled:checked ~ .chip-background {
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
        .wrapper input:disabled ~ .chip-background {
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

        .chip-background:after {
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

        :host([condensed]) .wrapper,
        :host([condensed]) .wrapper input {
          height: 32px;
          padding: 4px;
          border-radius: 16px;
        }

        furo-ripple {
          border-radius: 50%;
        }

        span {
          margin: 0 5px;
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
        <furo-icon class="lead" icon="${this.leadingIcon}"></furo-icon>

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
        <span>${this.text}</span>
        <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>

        <furo-ripple></furo-ripple>
      </div>
    `;
  }
}

customElements.define('furo-input-chip', FuroInputChip);
