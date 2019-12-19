import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-radio-button-input";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-radio-button-input`
 * furo-data-radio-button-input element which uses a  `<furo-radio-button-input >` element. Works best with furo-data components.
 *
 *   ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-data-radio-button-input  ƒ-bind-data="--entity(*.fields.open)"></furo-data-radio-button-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * Tags: data-input
 * @summary furo data radio-button input element
 * @demo demo-furo-data-radio-button-input Input samples
 * @customElement
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroDataRadioButtonInput extends FBP(LitElement) {


    /**
     * @event ALL_BUBBLING_EVENTS_FROM_furo-radio-button-input
     *
     * All bubbling events from [furo-radio-button-input](../../input/doc/furo-radio-button-input) will be fired, because furo-data-radio-button-input uses furo-radio-button-input internally.
     *
     */

    constructor() {
        super();
        this.disabled = false;

        this._FBPAddWireHook("--valueChanged", (val) => {
            if (this.field) {
                this.field._value= val;
            }
        });
    }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();
    // check initial overrides
    CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
  }

  /**
   * Updater for the label attr
   * @param value
   */
  set _label(value) {
    Helper.UpdateInputAttribute(this, "label", value);
  }

  /**
   * Updater for the hint attr
   * @param value
   */
  set _hint(value) {
    Helper.UpdateInputAttribute(this, "hint", value);
  }

  /**
   * Updater for the errortext attr
   * @param value
   */
  set errortext(value) {
    Helper.UpdateInputAttribute(this, "errortext", value);
  }

  /**
     * Sets the field to readonly
     */
    disable() {
        this._readonly = true;
    }

    /**
     * Makes the field writable.
     */
    enable() {
        this._readonly = false;
    }

    /**
     * Bind a entity field to the furo-data-radio-button-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */
    bindData(fieldNode) {
      Helper.BindData(this, fieldNode);
    }

    _updateField() {

        this.disabled = this.field._meta.readonly ? true : false;

        //mark incomming error
        if (!this.field._isValid) {
            this.error = true;
            this.errortext = this.field._validity.description;
        }

        this._FBPTriggerWire('--value', this.field._value);

        this.requestUpdate();
    }

    static get properties() {
        return {

            /**
             * Overrides the label text from the **specs**.
             *
             * Use with caution, normally the specs defines this value.
             */
            label: {
                type: String,
                attribute: true
            },
            /**
             * Overrides the hint text from the **specs**.
             *
             * Use with caution, normally the specs defines this value.
             */
            hint: {
                type: String,
            },
            /**
             * Overrides the readonly value from the **specs**.
             *
             * Use with caution, normally the specs defines this value.
             */
            readonly: {
                type: Boolean,
            },
            /**
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            disabled: {
                type: Boolean, reflect: true
            },

            /**
             * Set this attribute to autofocus the input field.
             */
            autofocus: {
                type: Boolean
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
            }
        }
    }

    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FuroDataRadioButtonInput') || css`
        :host {
            display: inline-block;
            width: 300px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-radio-button-input {
            width: 100%;
        }
    `
    }


    render() {
        // language=HTML
        return html`
             <furo-radio-button-input id="input"
                ?autofocus=${this.autofocus} 
                ?disabled=${this._readonly || this.disabled} 
                ?error="${this.error}" 
                ?condensed="${this.condensed}"          
                @-value-changed="--valueChanged"
                ƒ-set-value="--value"></furo-radio-button-input>      
          `;
    }
}

customElements.define('furo-data-radio-button-input', FuroDataRadioButtonInput);
