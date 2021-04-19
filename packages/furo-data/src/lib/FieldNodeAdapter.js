import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';
import { FieldNode } from './FieldNode.js';
import { RepeaterNode } from './RepeaterNode.js';

/**
 *
 *
 * @summary Please read the guide for a better understanding
 * @polymer
 * @mixinFunction FNB
 */
export const FieldNodeAdapter = superClass =>
  /**
   * @polymerMixinClass
   */
  class extends superClass {
    constructor() {
      super();
      /**
       * This is a reference for the Adapter, DO NOT USE this attribute in your components
       * @private
       */
      this.__fieldNode = {};
      /**
       * used to suppress change events which are triggered by the component itself
       * @type {boolean}
       * @private
       */
      this.__internalUpdateInProgress = false;

      this.__registerHandlers(); // This is done to be able to remove the event-listeners
    }

    /**
     * Returns the type name of the bounded fieldNode
     * @return string Typename
     */
    getDataType() {
      if (this.__fieldNode._spec) {
        return this.__fieldNode._spec.type;
      }
      return undefined;
    }

    /**
     * Check if bounded type is a fat type
     * @return boolean
     */
    isFat() {
      return this.__fieldNode._spec && this.__fieldNode._spec.type.startsWith('furo.fat');
    }

    /**
     * Check if bounded type is a wrapper type
     * @return boolean
     */
    isWrapper() {
      return this.__fieldNode._spec && this.__fieldNode._spec.type.startsWith('google.protobuf');
    }

    /**
     * Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.
     * @param fieldNode
     */
    bindData(fieldNode) {
      // check if we have a FieldNode or RepeaterNode
      if (!(fieldNode instanceof FieldNode || fieldNode instanceof RepeaterNode)) {
        // eslint-disable-next-line no-console
        console.warn('Invalid binding ', fieldNode, 'is not a FieldNode', this, this.parentNode);
        return false;
      }

      // initial empty metas
      this.__meta = {
        default: '',
        hint: '',
        label: '',
        options: {},
        readonly: false,
        repeated: false,
        typespecific: null,
      };

      // protection against multiple calls of bindData
      if (this.__fieldNode.removeEventListener) {
        this.__detachEventListeners();
      }

      // add the main event listeners
      fieldNode.addEventListener('field-value-changed', this.__fieldValueChangedHandler);
      fieldNode.addEventListener('field-became-valid', this.__fieldBecamesValidHandler);
      fieldNode.addEventListener('field-became-invalid', this.__fieldBecamesInvalidHandler);
      fieldNode.addEventListener('this-metas-changed', this.__fieldMetasChangedHandler);

      // this is for easier debugging with the inspector
      this.__fieldNode = fieldNode;

      // notify for initial data
      this.__fieldValueChangedHandler();

      // run meta checks on initial bind
      this.__fieldMetasChangedHandler();

      return true;
    }

    /**
     * Sets the value on the fieldNode. When you set the value, the changes you made will not trigger
     * the `onFnaFieldValueChanged`.
     *
     * @param value the raw json value for the fieldNode.
     */
    setFnaFieldValue(value) {
      this.__internalUpdateInProgress = true;
      this.__fieldNode._value = value;
      this.__internalUpdateInProgress = false;

      // broadcast validation request because we do an injection on FAT
      this.__fieldNode.broadcastEvent(new NodeEvent('validation-requested', this));
    }

    /**
     * Notifies a field value change event. This event is debounced with 1ms, if you have bound a complex type, only one change event
     * will be triggered (this is what you want). If you need all change events or more control for your component,
     * use the listener on the fieldNode itself.
     *
     * @param value the raw json value for the fieldNode.
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaFieldValueChanged(value) {
    }

    /**
     * Notifies changes on the constraints.
     *
     * returns an object like:
     * ```json
     *  {
     *  "min":
     *    {
     *      is:33,
     *      message:"must be bigger"
     *    }
     *  }
     * ```
     *
     * ```javascript
     *   // example callback
     *   onFnaConstraintsChanged(constraints) {
     *     if (constraints.min !== undefined) {
     *       this._constraintsFromFNA.min = constraints.min;
     *       if (this._privilegedAttributes.min === null && this._attributesFromFAT.min === undefined) {
     *         this.min = constraints.min.is;
     *       }
     *     }
     *  }
     * ```
     *
     * @param constraints
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaConstraintsChanged(constraints) {
    }

    /**
     * Notifies when the options for the field is changed or set.
     * @param options
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaOptionsChanged(options) {
    }

    /**
     * Notifies when the readonly flag for the field is changed or set.
     * @param readonly
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaReadonlyChanged(readonly) {
    }

    /**
     * Notifies when the hint for the field is changed or set.
     * @param hint
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaHintChanged(hint) {
    }

    /**
     * Notifies when the label for the field is changed or set.
     * @param label
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaLabelChanged(label) {
    }

    /**
     * Notifies when the placeholder for the field is changed or set.
     * @param placeholder
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaPlaceholderChanged(placeholder) {
    }

    /**
     * Notifies that a field gets valid.
     */
    // eslint-disable-next-line class-methods-use-this
    onFnaFieldNodeBecameValid() {
    }

    /**
     * Notifies that a field gets invalid.
     *
     * @param validity Object like {constraint: "min", description: "too small", field: ""}
     */
    // eslint-disable-next-line class-methods-use-this,no-unused-vars
    onFnaFieldNodeBecameInvalid(validity) {
    }

    // clean up on disconnect
    disconnectedCallback() {
      this.__detachEventListeners();
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }

    /**
     * This is done to be able to remove the event-listeners as a protection for multiple calls for bindData and for cleanup
     * @private
     */
    __registerHandlers() {
      /**
       * Handler function for the field value changes.
       *
       * @return {(function(): void)|*}
       * @private
       */
      this.__fieldValueChangedHandler = () => {
        // only notify changes from the fieldNode. Changes from the instance of your component will not be notified
        if (!this.__internalUpdateInProgress) {
          // debounce
          clearTimeout(this.___timeout);
          this.___timeout = setTimeout(
            () => this.onFnaFieldValueChanged(this.__fieldNode._value),
            1,
          );
        }
      };

      /**
       * Checks for changes in the metas and constraints to update following fields:
       *
       * - hint
       * - label
       * - placeholder
       * - options
       * - readonly
       *
       * - constraints
       *
       * @return {(function(): void)|*}
       * @private
       */
      this.__fieldMetasChangedHandler = () => {
        const fnMeta = this.__fieldNode._meta;

        if (this.__meta.placeholder !== fnMeta.placeholder) {
          this.__meta.placeholder = fnMeta.placeholder;
          this.onFnaPlaceholderChanged(this.__meta.placeholder);
        }

        if (this.__meta.label !== fnMeta.label) {
          this.__meta.label = fnMeta.label;
          this.onFnaLabelChanged(this.__meta.label);
        }

        if (this.__meta.hint !== fnMeta.hint) {
          this.__meta.hint = fnMeta.hint;
          this.onFnaHintChanged(this.__meta.hint);
        }

        const opts = JSON.stringify(fnMeta.options);
        if (this.__meta.options !== opts) {
          this.__meta.options = opts;
          this.onFnaOptionsChanged(JSON.parse(opts));
        }

        if (this.__meta.readonly !== fnMeta.readonly) {
          this.__meta.readonly = fnMeta.readonly;
          this.onFnaReadonlyChanged(this.__meta.readonly);
        }

        // check constraints
        const c = JSON.stringify(this.__fieldNode._constraints);
        if (this.__constraintsStringified !== c) {
          this.__constraintsStringified = c;
          this.onFnaConstraintsChanged(JSON.parse(c));
        }
      };

      /**
       * Handler to notify the validity of a fieldNode
       * @return {(function(): void)|*}
       * @private
       */
      this.__fieldBecamesValidHandler = () => {
        this.onFnaFieldNodeBecameValid();
      };

      /**
       * Handler to notify the invalidity state of a fieldNode
       *
       * @return {(function(*): void)|*}
       * @private
       */
      this.__fieldBecamesInvalidHandler = event => {
        this.onFnaFieldNodeBecameInvalid(event.path[0]._validity);
      };
    }

    /**
     * remove all listeners on the fieldnode
     * @private
     */
    __detachEventListeners() {
      if (this.__fieldNode instanceof FieldNode || this.__fieldNode instanceof RepeaterNode) {
        this.__fieldNode.removeEventListener('field-value-changed', this.__fieldValueChangedHandler);
        this.__fieldNode.removeEventListener('field-became-valid', this.__fieldBecamesValidHandler);
        this.__fieldNode.removeEventListener('field-became-invalid', this.__fieldBecamesInvalidHandler);
        this.__fieldNode.removeEventListener('this-metas-changed', this.__fieldMetasChangedHandler);

      }
    }
  };
