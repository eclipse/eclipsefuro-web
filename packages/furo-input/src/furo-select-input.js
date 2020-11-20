import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/icon/src/furo-icon.js';
import '@furo/fbp/src/flow-repeat';
import { Helper } from './lib/helper.js';

/**
 * `furo-select-input`
 *
 *  <sample-furo-select-input></sample-furo-select-input>
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `--input-hint-color` | Color of hint text | #999999 | --
 * `--input-label-color` | Color of label in field| `--disabled,` | #333333
 * `--input-label-float-color` | Color of label when floating | `--on-surface` | #333333
 * `--input-active-float-label-color` | Color of floating label when active  | `--primary` | #3f51b5
 * `--input-activation-indicator-color` | Color of activation indicator when not selected| `--disabled` | #333333
 * `--input-error-activation-indicator-color` | Color of activation indicator in error state | `--error` | red
 * `--input-error-text-color` | Color of error text | `--error` | red
 * `--input-active-activation-indicator-color` | Color of factivation indicator in active  state   | `--primary` | #3f51b5
 * `--input-active-error-activation-indicator-color` | Color of factivation indicator in active error state   | `--error` | red
 *
 * @summary Select input field
 * @customElement
 * @demo demo-furo-select-input Input sample
 * @appliesMixin FBP
 */
export class FuroSelectInput extends FBP(LitElement) {
  /**
   * @event trailing-icon-clicked
   * Fired when the trailing icon was clicked
   *
   * detail payload: the value of the text input
   *
   * This event bubbles
   */

  /**
   * @event leading-icon-clicked
   * Fired when the leading icon was clicked
   *
   * detail payload: the value of the text input
   *
   * This event bubbles
   */

  constructor() {
    super();
    this.step = 'any';
    this.valid = true;
  }

  _FBPReady() {
    super._FBPReady();

    this._value = this.value || '';

    this._FBPAddWireHook('--inputInput', e => {
      if (!this.multiple) {
        Helper.triggerValueChanged(this, e);
      } else {
        const input = e.composedPath()[0];
        const arrValue = [];
        Array.from(input.selectedOptions).forEach(o => {
          if (!arrValue.includes(o.value)) {
            arrValue.push(o.value);
          }
        });

        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: [] array of value
         */
        const customEvent = new Event('value-changed', { composed: true, bubbles: true });
        customEvent.detail = arrValue;
        this.dispatchEvent(customEvent);
      }
    });
  }

  set _value(v) {
    if (!this.multiple) {
      if (typeof v !== 'object') {
        this._FBPTriggerWire('--value', v);
      }
    } else if (Array.isArray(v) && this.selectOptions) {
      this.selectOptions.forEach(o => {
        if (v.includes(o.id)) {
          // eslint-disable-next-line no-param-reassign
          o.selected = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          o.selected = false;
        }
      });
      this._FBPTriggerWire('--selection', this.selectOptions);
    }
  }

  set value(v) {
    if (!this.multiple) {
      this._v = v;
      this._value = v;
    } else if (JSON.stringify(v) !== JSON.stringify(this._v)) {
      this._v = v;
      this._value = v;
    }
  }

  get value() {
    return this._v;
  }

  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: { type: Boolean, reflect: true },
      /**
       * The start value. Changes will be notified with the `@-value-changed` event
       */
      value: {
        type: String,
      },
      /**
       * The list of options. Can be a simple list like ["A","B","C"]. In this case the value is equals the label
       *
       * With ids (key value):
       *
       * [{"id":1,"label":"AAA"},{"id":2,"label":"BBB"}]
       *
       *
       * With preselect state in data:
       *
       * [{"id":23,"label":"AAA","selected":false},{"id":44,"label":"BBB","selected":true}]
       */
      options: {
        type: Array,
        reflect: true,
      },
      /**
       * Set a string list as options:
       *
       * "A, B, C"
       *
       * This will convert to options ["A","B","C"]
       */
      list: {
        type: String,
        reflect: true,
      },

      label: {
        type: String,
        reflect: true,
      },
      /**
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The hint text for the field.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Text for errors
       */
      errortext: {
        type: String,
        reflect: true,
      },
      /**
       * Icon on the left side
       */
      leadingIcon: {
        type: String,
        attribute: 'leading-icon',
        reflect: true,
      },
      /**
       * Icon on the right side
       */
      trailingIcon: {
        type: String,
        attribute: 'trailing-icon',
        reflect: true,
      },
      /**
       * html input validity
       */
      valid: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Set this attribute to switch to filled layout. Filled is without the borders around the field.
       */
      filled: {
        type: Boolean,
        reflect: true,
      },
      /**
       * error text
       */
      _errortext: {
        type: String,
      },
      /**
       * The required attribute, the value true means this field must be filled in
       *
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * the multiple selection. the value true means this select can be multiple options
       */
      multiple: {
        type: Boolean,
        reflect: true,
      },
      /**
       * the size of multiple selection
       */
      size: {
        type: Number,
        reflect: true,
      },
      /**
       * converted select options which value and selected
       */
      selectOptions: {
        type: Array,
      },
    };
  }

  /**
   * Set the value for the field
   * @param {String} the id of the selected item
   */
  setValue(num) {
    this.value = num;
  }

  /**
   * Set the options programmatically
   * @param {Array} Array with options
   */
  setOptions(optionArray) {
    this.options = optionArray;
  }

  /**
   * Set the list programmatically
   * @param {String} list with options
   */
  setList(list) {
    this.list = list;
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
    if (typeof text === 'string') {
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
    this._FBPTriggerWire('--focus');
  }

  /**
   * Sets the field to readonly
   */
  disable() {
    this.disabled = true;
  }

  /**
   * Makes the field writable.
   */
  enable() {
    this.disabled = false;
  }

  set options(collection) {
    // convert array list to id, label structure
    if (typeof collection[0] === 'string') {
      // eslint-disable-next-line no-param-reassign
      collection = collection.map(item => ({ id: item, label: item }));
    }

    const arr = collection.map(e => {
      if (e.selected) {
        this.value = e.id.toString();
      }
      return {
        id: e.id,
        label: e.label,
        selected: this.value === e.id.toString() || e.selected || false,
      };
    });

    if (!this.value) {
      this.value = arr[0].id;
    }
    // save parsed selection option array
    this.selectOptions = arr;
    this._FBPTriggerWire('--selection', arr);
    // trigger setting value after the options are injected to guarantee the correct selection
    if (this._v) {
      this._value = this._v;
    }
  }

  set list(v) {
    const arr = v.split(',').map(item => item.trim());
    this.options = arr;
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroSelectInput') ||
      css`
        /* https://material.io/design/components/text-fields.html#theming */
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          margin: 10px 0 15px 0;
          height: 56px;
          font-family: 'Roboto', 'Noto', sans-serif;
          width: 190px;
        }

        :host([hidden]) {
          display: none;
        }

        .wrapper {
          position: relative;
          padding: 0 12px;
          box-sizing: border-box;
          height: 56px;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }

        .iwrap {
          position: relative;
        }

        .expand {
          position: absolute;
          right: 0;
          display: block;
          pointer-events: none;
          cursor: pointer;
        }
        select {
          cursor: pointer;
          position: absolute;
          top: 16px;
          border: none;
          background: none;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          width: 100%;
          line-height: 24px;
          color: inherit;
          outline: none;
          font-family: 'Roboto', 'Noto', sans-serif;
          font-kerning: auto;
          font-size: 16px;
          font-stretch: 100%;
          font-style: normal;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
        }

        :host([filled]) .wrapper {
          background-color: var(--surface-light, #fefefe);
        }

        :host([filled]) .wrapper:hover {
          background-color: var(--surface, #fcfcfc);
        }

        :host([filled]:focus-within) .wrapper {
          background-color: var(--surface-dark, #fea222);
        }

        :host(:not([filled]):hover) .left-border,
        :host(:not([filled]):hover) .right-border,
        :host(:not([filled]):hover) label {
          border-color: var(--input-hover-color, #333333);
        }

        .borderlabel {
          pointer-events: none;
          position: absolute;
          box-sizing: border-box;
          top: 0;
          right: 0;
          left: 0;
          height: 56px;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }

        .left-border {
          width: 8px;
          box-sizing: border-box;
          pointer-events: none;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
          border-right: none;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        label span {
          overflow: hidden;
          display: inline-block;
          height: 56px;
        }

        :host(:not([filled])) label {
          padding: 0 4px;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
          border-left: none;
          border-right: none;
          border-top: none;
          line-height: 56px;
        }

        :host(:not([filled])) label span {
          position: relative;
          font-size: 12px;
          top: -28px;
          left: 0;
        }

        .right-border {
          pointer-events: none;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
          border-left: none;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
          min-width: 4px;
        }

        .ripple-line {
          display: none;
          position: absolute;
          width: 100%;
          height: 1px;
          top: 56px;
          border: none;
          border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        :host([filled]) .ripple-line {
          display: block;
        }

        :host([filled]) .right-border,
        :host([filled]) .left-border {
          display: none;
        }

        :host([filled]) label {
          padding: 0 12px;
          line-height: 56px;
          border: none;
        }

        :host([filled]) label span {
          font-size: 12px;
          font-weight: 400;
          top: -20px;
          position: relative;
        }

        * {
          transition: all 200ms ease-out;
        }

        .hint,
        .errortext {
          position: absolute;
          bottom: -19px;
          font-size: 12px;
          color: transparent;
          padding-left: 12px;
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
          color: var(--input-hint-color, var(--disabled, #dedede));
        }

        :host(:focus-within) label,
        :host(:focus-within:not([filled])) label {
          color: var(--input-active-float-label-color, var(--primary, #3f51b5));
          border-color: var(--input-active-float-label-color, var(--primary, #3f51b5));
        }

        :host(:focus-within) .ripple-line {
          border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
          border-width: 2px;
        }

        :host(:not([filled]):focus-within) .left-border,
        :host(:not([filled]):focus-within) .right-border,
        :host(:not([filled]):focus-within) label {
          border-color: var(--input-active-activation-indicator-color, var(--primary, #3f51b5));
          border-width: 2px;
        }

        :host([error]:focus-within) .left-border,
        :host([error]:focus-within) .right-border,
        :host([error]:focus-within) label,
        :host([error]:focus-within) .ripple-line {
          border-color: var(--input-error-text-color, var(--error, red));
          border-width: 2px;
        }

        :host([error]:focus-within) label {
          color: var(--input-error-text-color, var(--error, red));
        }

        :host([error]:focus-within) .hint {
          display: none;
        }

        :host([error]) .ripple-line,
        :host([error]) .left-border,
        :host([error]) .right-border,
        :host([error]) label {
          border-color: var(--input-error-activation-indicator-color, var(--error, red));
        }

        furo-icon {
          display: none;
          top: 16px;
        }

        furo-icon.lead {
          position: absolute;

          left: 8px;
        }

        furo-icon.trail {
          position: absolute;
          right: 8px;
        }

        :host([leading-icon]:not([leading-icon='undefined'])) furo-icon.lead,
        :host([trailing-icon]:not([trailing-icon='undefined'])) furo-icon.trail {
          display: block;
        }

        :host([leading-icon]:not([leading-icon='undefined'])) .wrapper {
          padding-left: 36px;
        }

        :host([trailing-icon]:not([trailing-icon='undefined'])) .wrapper {
          padding-right: 36px;
        }

        :host(:focus-within:not([valid])) label {
          color: var(--input-error-text-color, var(--error, red));
        }

        :host([condensed]) select {
          top: 12px;
        }

        :host([condensed]) label span {
          overflow: hidden;
          display: inline-block;
          height: 40px;
        }

        :host([condensed]:not([filled])) label,
        :host([filled][condensed]) label {
          line-height: 40px;
        }

        :host([condensed]) select {
          font-size: 14px;
        }

        :host([condensed][filled]) select {
          top: 12px;
        }

        :host([condensed]) .borderlabel,
        :host([condensed]) .wrapper {
          height: 40px;
        }

        :host([condensed]) furo-icon {
          top: 10px;
        }

        :host([condensed]) .ripple-line {
          top: 36px;
        }

        :host([condensed][filled]) label[float] span,
        :host([filled][condensed]:focus-within) label span {
          top: -12px;
        }

        :host([condensed]) label span {
          top: -20px;
        }

        :host([condensed]) .hint,
        :host([condensed]) .errortext {
        }

        :host([condensed]) {
          height: 40px;
        }

        :host([multiple]) {
          margin: 0;
          vertical-align: top;
        }

        :host([multiple]) select {
          z-index: 1;
          margin-top: -6px;
          border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        :host([multiple]) .left-border,
        :host([multiple]) .right-border,
        :host([multiple]) .label,
        :host([multiple]) label,
        :host([multiple]) .borderlabel {
          border: none;
        }

        :host([multiple]) furo-icon {
          display: none;
        }

        :host([multiple]) .hint,
        :host([multiple]) .error {
          position: relative;
        }

        :host([multiple]) .wrapper {
          padding: 0;
          height: inherit;
        }

        :host([multiple]) option {
          padding-left: 12px;
        }
      `
    );
  }

  /**
   *
   * @return {TemplateResult | TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div class="wrapper">
        <furo-icon
          class="lead"
          icon="${this.leadingIcon}"
          @-click="^^leading-icon-clicked(value)"
        ></furo-icon>
        <div class="iwrap">
          <select
            ?multiple="${this.multiple}"
            size="${this.size}"
            id="input"
            ?autofocus=${this.autofocus}
            ?disabled=${this.disabled}
            @-change="--inputInput(*)"
            ƒ-.value="--value"
            ƒ-focus="--focus"
          >
            <template is="flow-repeat" ƒ-inject-items="--selection">
              <option
                ƒ-.value="--item(*.id)"
                ƒ-.selected="--item(*.selected)"
                ƒ-.inner-text="--item(*.label)"
              ></option>
            </template>
          </select>
          <furo-icon class="expand" icon="expand-more"></furo-icon>
        </div>
        <furo-icon
          class="trail"
          icon="${this.trailingIcon}"
          @-click="^^trailing-icon-clicked(value)"
        ></furo-icon>
      </div>
      <div class="borderlabel">
        <div class="left-border"></div>
        ${this.label
          ? html`
              <label float for="input"
                ><span
                  >${this.label}${this.required
                    ? html`
                        *
                      `
                    : html``}</span
                ></label
              >
            `
          : html``}
        <div class="right-border"></div>
      </div>

      <div class="ripple-line"></div>
      <div class="hint">${this.hint}</div>
      <div class="errortext">${this.errortext}</div>
    `;
  }
}

window.customElements.define('furo-select-input', FuroSelectInput);
