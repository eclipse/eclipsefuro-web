/**
 *
 * @mixinFunction FuroInputBase
 */
export const FuroInputBase = (superClass) => {

  return class extends superClass {
    constructor(props) {
      super(props);
      this._displayOnly = false;
    }


    static get properties() {
      return {
        noTypecheck: {type: Boolean, attribute: 'no-typecheck'},
        error: {type: Boolean, reflect: true},
        /**
         * Der eingegebene String
         */
        value: {
          type: String
        },
        /**
         * Label für das Feld
         */
        label: {
          type: String,
          attribute: true
        },
        /**
         * Setze den Fokus automatisch auf dieses Feld
         */
        autofocus: {
          type: Boolean
        },
        /**
         * Setze disabled
         */
        disabled: {
          type: Boolean, reflect: true
        },
        /**
         * helper für das label
         */
        _float: {
          type: Boolean
        },
        /**
         * hint
         * Hinweistext für das Feld
         */
        hint: {
          type: String,
        },
        _displayOnly: {type: Boolean, attribute: 'display-only'}
      };
    }

    attributeChangedCallback(name, oldval, newval) {
      switch (name) {
        case "label":
          this.label = newval;
          this._label = newval;
          break;

        case "autofocus":
          this.autofocus = newval !== null;

          break;

        case "disabled":
          this.disabled = newval !== null;
          break;

        case "display-only":
          this._displayOnly = newval !== null;
          break;

        default:
          break;

      }
      this.requestUpdate();

    }

    _init() {
      this._float = !!this._value;
      this.noTypecheck = false;

      this._FBPAddWireHook("--inputInput", (e) => {
        let input = e.composedPath()[0];
        if (this.field && !this._displayOnly) {
          this.field.value = input.value;
        }
        this.value = input.value;
      });

      // input changes for checkboxes
      this._FBPAddWireHook("--inputCheckbox", (e) => {
        let checkbox = e.composedPath()[0];
        if (this.field && !this._displayOnly) {
          this.field.value = checkbox.checked;
        }
        this.value = checkbox.checked;
      });
      if (this.value != undefined) {
        this._FBPTriggerWire('--value', this._value);
      }
    }

    set value(v) {
      this._float = !!v;
      this._value = v;

      /**
       * @event value-changed
       * Fired when field value changed
       * detail payload: value
       */
      let customEvent = new Event('value-changed', {composed: true, bubbles: true});
      customEvent.detail = v;
      this.dispatchEvent(customEvent);
    };

    get value() {
      return this._value;
    }


    firstUpdated() {
      super.firstUpdated();
      this._init();
    }


    bindData(d) {
      if (d === undefined) {
        console.warn("Invalid binding ");
        console.log(this);
        return
      }

      this.field = d;
      this.error = false;
      // label auf attr ist höher gewichtet
      if (!this.label) {
        this._label = this.field._meta.label;
      } else {
        this._label = this.label;
      }

      this.disabled = this.field._meta.readonly;
      this.hint = this.field._meta.hint;
      this.value = this.field.value;

      this._FBPTriggerWire('--value', this.field.value);
      this._FBPTriggerWire('--field', this.field);

      //mark incomming error
      if (!this.field._isValid) {
        this.error = true;
        this.hint = this.field._validity.description;
      }

      this.field.addEventListener('field-value-changed', (e) => {
        // updates wieder einspielen
        this._FBPTriggerWire('--value', e.detail.value);

        // label auf attr ist höher gewichtet
        if (!this.label) {
          this._label = this.field._meta.label;
        } else {
          this._label = this.label;
        }


        this.disabled = this.field._meta.readonly;
        this.hint = this.field._meta.hint;
        this.value = this.field.value;

        this.requestUpdate()
      });


      this.field.addEventListener('field-became-invalid', (e) => {
        // updates wieder einspielen
        this.error = true;
        this._oldhint = this.hint;
        this.hint = this.field._validity.description;
      });

      this.field.addEventListener('field-became-valid', (e) => {
        // updates wieder einspielen
        this.error = false;
        this.hint = this._oldhint;
      });


      /**
       if (!this.noTypecheck && this.field._spec.type == "date") {
      console.warn("du solltest kein type input feld für datum verwenden, setze no-typecheck", this);
    }
       */
    }


    /**
     * Setze den Fokus auf dieses Element
     */
    focus() {
      this._FBPTriggerWire('--focusReceived')
    }


  }
};

