import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-checkbox-input";
import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-checkbox-input`
 * furo-data-checkbox-input element which uses a  `<furo-checkbox-input >` element. Works best with furo-data components.
 *
 *   ### Sample
 *  <furo-demo-snippet>
 *   <template>
 *    <furo-data-checkbox-input  ƒ-bind-data="--entity(*.fields.open)"></furo-data-checkbox-input>
 *   </template>
 *  </furo-demo-snippet>
 *
 * Tags: data-input
 * @summary furo data checkbox input element
 * @demo demo-furo-data-checkbox-input Input samples
 * @customElement
 * @mixes FBP
 * @mixes FuroInputBase
 */
class FuroDataCheckboxInput extends FBP(LitElement) {


    /**
     * @event ALL_BUBBLING_EVENTS_FROM_furo-checkbox-input
     *
     * All bubbling events from [furo-checkbox-input](../../input/doc/furo-checkbox-input) will be fired, because furo-data-checkbox-input uses furo-checkbox-input internally.
     *
     */

    constructor() {
        super();
        this.disabled = false;

        this._FBPAddWireHook("--valueChanged", (val) => {
          // by valid input reset meta and constraints
          CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
            if (this.field) {
                this.field.value = val;
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
     * Bind a entity field to the furo-data-checkbox-input. You can use the entity even when no data was received.
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

        this._FBPTriggerWire('--value', this.field.value);

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
        return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: inline-block;
            width: 300px;
        }

        :host([hidden]) {
            display: none;
        }

        furo-checkbox-input {
            width: 100%;
        }
    `
    }


    render() {
        // language=HTML
        return html`
             <furo-checkbox-input id="input"
                ?autofocus=${this.autofocus} 
                ?disabled=${this._readonly || this.disabled} 
                ?error="${this.error}" 
                ?condensed="${this.condensed}"          
                @-value-changed="--valueChanged"
                ƒ-set-value="--value"></furo-checkbox-input>      
          `;
    }
}

customElements.define('furo-data-checkbox-input', FuroDataCheckboxInput);
