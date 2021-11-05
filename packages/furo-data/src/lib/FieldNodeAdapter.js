import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';
import { FieldNode } from './FieldNode.js';
import { RepeaterNode } from './RepeaterNode.js';

/**
 * Use this class to make your component bindable without handling with the internals of FieldNode.
 *
 * Read more in the GUIDE section please.
 *
 * @summary Binding methods for fieldNodes
 * @polymer
 * @mixinFunction FNB
 */
export const FieldNodeAdapter = superClass =>
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
     * @private
     */
    getDataType() {
      if (this.__fieldNode._spec) {
        if (this.__fieldNode._spec.type === 'google.protobuf.Any') {
          // check in @type field
          return this.__fieldNode['@type']._value.replace(/.*\//, '');
        }
        return this.__fieldNode._spec.type;
      }
      return undefined;
    }

    /**
     * Check if bounded type is a fat type
     * @return boolean
     * @private
     */
    isFat() {
      if (this.__fieldNode._spec && this.__fieldNode._spec.type === 'google.protobuf.Any') {
        // check in @type field, return false if it not known at the moment
        return (
          this.__fieldNode['@type'] &&
          this.__fieldNode['@type']._value !== null &&
          this.__fieldNode['@type']._value.replace(/.*\//, '').startsWith('furo.fat')
        );
      }
      return this.__fieldNode._spec && this.__fieldNode._spec.type.startsWith('furo.fat');
    }

    /**
     * Check if bounded type is a wrapper type
     * @return boolean
     * @private
     */
    isWrapper() {
      if (this.__fieldNode._spec && this.__fieldNode._spec.type === 'google.protobuf.Any') {
        // check in @type field, return false if it not known at the moment
        return (
          this.__fieldNode['@type'] &&
          this.__fieldNode['@type']._value !== null &&
          this.__fieldNode['@type']._value.replace(/.*\//, '').startsWith('google.protobuf')
        );
      }
      return this.__fieldNode._spec && this.__fieldNode._spec.type.startsWith('google.protobuf');
    }

    /**
     * Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.
     * @param fieldNode {FieldNode|RepeaterNode} - FieldNode or RepeaterNode
     * @public
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
      fieldNode.addEventListener('this-metas-changed', this.__fieldMetasChangedHandler);
      fieldNode.addEventListener('new-data-injected', this.__fieldNewDataInjectedHandler);
      fieldNode.addEventListener('this-repeated-field-changed', this.__repeatedFieldChangedHandler);
      fieldNode.addEventListener('field-value-changed', this.__fieldValueChangedHandler);
      fieldNode.addEventListener('field-became-valid', this.__fieldBecamesValidHandler);
      fieldNode.addEventListener('field-became-invalid', this.__fieldBecamesInvalidHandler);

      // this is for easier debugging with the inspector
      this.__fieldNode = fieldNode;

      // notify for initial data
      this.__fieldValueChangedHandler();
      this.__repeatedFieldChangedHandler();

      // run meta checks on initial bind
      this.__fieldMetasChangedHandler();

      return true;
    }

    /**
     * Sets the value on the fieldNode. When you set the value, the changes you made will not trigger
     * the `onFnaFieldValueChanged`.
     *
     * @param value the raw json value for the fieldNode.
     * @private
     */
    setFnaFieldValue(value) {
      // keep fields of any type
      if (this.__fieldNode['@type'] && this.__fieldNode['@type']._value) {
        // eslint-disable-next-line no-param-reassign
        value['@type'] = this.__fieldNode['@type']._value;
      }

      this.__internalUpdateInProgress = true;
      this.__fieldNode._value = value;
      this.__internalUpdateInProgress = false;

      // broadcast validation request because we do an injection on FAT
      if (this.__fieldNode._spec) {
        this.__fieldNode.broadcastEvent(new NodeEvent('validation-requested', this));
      }
    }

    /**
     * Notifies a field value change event. This event is debounced with 1ms, if you have bound a complex type, only one change event
     * will be triggered (this is what you want). If you need all change events or more control for your component,
     * use the listener on the fieldNode itself.
     *
     * @param value the raw json value for the fieldNode.
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaFieldValueChanged(value) {}

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
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaConstraintsChanged(constraints) {}

    /**
     * Notifies when the options for the field is changed or set.
     * @param options
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaOptionsChanged(options) {}

    /**
     * Notifies when the readonly flag for the field is changed or set.
     * @param readonly
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaReadonlyChanged(readonly) {}

    /**
     * Notifies when the hint for the field is changed or set.
     * @param hint
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaHintChanged(hint) {}

    /**
     * Notifies when the label for the field is changed or set.
     * @param label
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaLabelChanged(label) {}

    /**
     * Notifies when the placeholder for the field is changed or set.
     * @param placeholder
     * @private
     */
    // eslint-disable-next-line no-unused-vars,class-methods-use-this
    onFnaPlaceholderChanged(placeholder) {}

    /**
     * Notifies that a field gets valid.
     * @private
     */
    // eslint-disable-next-line class-methods-use-this
    onFnaFieldNodeBecameValid() {}

    /**
     * Notifies that a field gets invalid.
     *
     * @param validity Object like {constraint: "min", description: "too small", field: ""}
     * @private
     */
    // eslint-disable-next-line class-methods-use-this,no-unused-vars
    onFnaFieldNodeBecameInvalid(validity) {}

    /**
     * Notifies that new data was injected
     * @private
     */
    // eslint-disable-next-line class-methods-use-this
    onFnaFieldNewDataInjected() {}

    /**
     * Notifies when a repeater node changes
     * @private
     */
    // eslint-disable-next-line class-methods-use-this
    onFnaRepeatedFieldChanged() {}

    /**
     * clean up on disconnect
     * @private
     */
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

          if (this.__fieldNode._spec.type === 'google.protobuf.Any') {
            // notify when the type field is available.
            if (this.__fieldNode['@type'] !== undefined) {
              this.___timeout = setTimeout(
                () => this.onFnaFieldValueChanged(this.__fieldNode._value),
                1,
              );
            }
          } else {
            this.___timeout = setTimeout(
              () => this.onFnaFieldValueChanged(this.__fieldNode._value),
              1,
            );
          }
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

        if (fnMeta.options !== undefined) {
          const opts = JSON.stringify(fnMeta.options);
          if (this.__meta.options !== opts) {
            this.__meta.options = opts;
            this.onFnaOptionsChanged(JSON.parse(opts));
          }
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
       * Handler to notify the new Data injected information of a fieldNode
       * @return {(function(): void)|*}
       * @private
       */
      this.__fieldNewDataInjectedHandler = () => {
        this.onFnaFieldNewDataInjected(this.__fieldNode._value);
      };

      /**
       * Handler to notify the repeated field changed information of a fieldNode
       * @return {(function(): void)|*}
       * @private
       */
      this.__repeatedFieldChangedHandler = () => {
        this.onFnaRepeatedFieldChanged(this.__fieldNode._value);
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
      // check is needed, because on no binding there is no fieldNode to detach from
      if (this.__fieldNode instanceof FieldNode || this.__fieldNode instanceof RepeaterNode) {
        this.__fieldNode.removeEventListener(
          'field-value-changed',
          this.__fieldValueChangedHandler,
        );
        this.__fieldNode.removeEventListener('field-became-valid', this.__fieldBecamesValidHandler);
        this.__fieldNode.removeEventListener(
          'field-became-invalid',
          this.__fieldBecamesInvalidHandler,
        );
        this.__fieldNode.removeEventListener('this-metas-changed', this.__fieldMetasChangedHandler);
      }
    }
  };
