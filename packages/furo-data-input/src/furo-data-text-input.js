import {FuroTextInput} from '@furo/input/src/furo-text-input';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder';


/**
 * `furo-data-text-input`
 * Binds a entityObject field to a furo-text-input field
 *
 * <sample-furo-data-text-input></sample-furo-data-text-input>
 *
 * Tags: input
 * @summary Bind a entityObject.field to a text input
 * @customElement
 * @demo demo-furo-data-text-input Data binding
 * @demo demo-fat-furo-data-text-input skalar, wrapper, FAT binding
 * @mixes FBP
 */
class FuroDataTextInput extends FuroTextInput {
  /**
   * @event value-changed
   * Fired when value has changed from inside the input field.
   *
   * detail payload: {String} the text value
   *
   * Comes from underlying component furo-text-input. **bubbles**
   */

  constructor() {
    super();
    this.error = false;
    this.disabled = false;

    this.binder = new UniversalFieldNodeBinder(this);

    this.binder.attributeMappings = {
      "label":"label",
      "hint":"hint",
      "leading-icon":"leadingIcon",
      "trailing-icon":"trailingIcon",
      "errortext":"errortext",
      "pattern":"pattern",
      "min":"min",
      "max":"max",
    };
    this.binder.labelMappings = {
      "error":"error",
      "readonly":"readonly",
      "required":"required",
      "condensed":"condensed",
      "autofocus":"autofocus",
    };

    /**
     * check overrides from the used component, setted attributes overrides all
     * so all we have to do is removing the mapping
     */
    this.getAttributeNames().forEach((name)=>{
      if(name in this.binder.attributeMappings){
        delete this.binder.attributeMappings[name];
      }
      if(name in this.binder.labelMappings){
        delete this.binder.labelMappings[name];
      }
    });

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = "_value";

    // update the value on input changes
    this.addEventListener('value-changed', val => {
        this.binder.fieldValue = val.detail;
    });
  }


  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
  }



  static get properties() {
    return {
      /**
       * set this to true to indicate errors
       */
      error: { type: Boolean, reflect: true },
      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the pattern from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      pattern: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the required value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      required: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
        reflect: true,
      },
      /**
       * Overrides the min value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      min: {
        type: Number,
        reflect: true,
      },
      /**
       * Overrides the max value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      max: {
        type: Number,
        reflect: true,
      },
      /**
       * Overrides the readonly value from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      readonly: {
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
       * Set this attribute to autofocus the input field.
       */
      autofocus: {
        type: Boolean,
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
       * passes always float the label
       */
      float: {
        type: Boolean,
        reflect: true,
      },
    };
  }

}

customElements.define('furo-data-text-input', FuroDataTextInput);
