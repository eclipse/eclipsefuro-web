export function FieldNodeAdapter(superClass: any): {
    new (): {
        [x: string]: any;
        /**
         * This is a reference for the Adapter, DO NOT USE this attribute in your components
         * @private
         */
        __fieldNode: {};
        /**
         * used to suppress change events which are triggered by the component itself
         * @type {boolean}
         * @private
         */
        __internalUpdateInProgress: boolean;
        /**
         * Returns the type name of the bounded fieldNode
         * @return string Typename
         * @private
         */
        getDataType(): any;
        /**
         * Check if bounded type is a fat type
         * @return boolean
         * @private
         */
        isFat(): any;
        /**
         * Check if bounded type is a wrapper type
         * @return boolean
         * @private
         */
        isWrapper(): any;
        /**
         * Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.
         * @param fieldNode {FieldNode|RepeaterNode} - FieldNode or RepeaterNode
         * @public
         */
        bindData(fieldNode: FieldNode | RepeaterNode): boolean;
        __meta: {
            default: string;
            hint: string;
            label: string;
            options: {};
            readonly: boolean;
            repeated: boolean;
            typespecific: any;
        };
        /**
         * Sets the value on the fieldNode. When you set the value, the changes you made will not trigger
         * the `onFnaFieldValueChanged`.
         *
         * @param value the raw json value for the fieldNode.
         * @private
         */
        setFnaFieldValue(value: any): void;
        /**
         * Notifies a field value change event. This event is debounced with 1ms, if you have bound a complex type, only one change event
         * will be triggered (this is what you want). If you need all change events or more control for your component,
         * use the listener on the fieldNode itself.
         *
         * @param value the raw json value for the fieldNode.
         * @private
         */
        onFnaFieldValueChanged(value: any): void;
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
        onFnaConstraintsChanged(constraints: any): void;
        /**
         * Notifies when the options for the field is changed or set.
         * @param options
         * @private
         */
        onFnaOptionsChanged(options: any): void;
        /**
         * Notifies when the readonly flag for the field is changed or set.
         * @param readonly
         * @private
         */
        onFnaReadonlyChanged(readonly: any): void;
        /**
         * Notifies when the hint for the field is changed or set.
         * @param hint
         * @private
         */
        onFnaHintChanged(hint: any): void;
        /**
         * Notifies when the label for the field is changed or set.
         * @param label
         * @private
         */
        onFnaLabelChanged(label: any): void;
        /**
         * Notifies when the placeholder for the field is changed or set.
         * @param placeholder
         * @private
         */
        onFnaPlaceholderChanged(placeholder: any): void;
        /**
         * Notifies that a field gets valid.
         * @private
         */
        onFnaFieldNodeBecameValid(): void;
        /**
         * Notifies that a field has changed its state
         * @private
         */
        onFnaFieldStateChanged(): void;
        /**
         * Notifies that a field gets invalid.
         *
         * @param validity Object like {constraint: "min", description: "too small", field: ""}
         * @private
         */
        onFnaFieldNodeBecameInvalid(validity: any): void;
        /**
         * Notifies that new data was injected
         * @private
         */
        onFnaFieldNewDataInjected(): void;
        /**
         * Notifies when a repeater node changes
         * @private
         */
        onFnaRepeatedFieldChanged(): void;
        /**
         * clean up on disconnect
         * @private
         */
        disconnectedCallback(): void;
        __reattachListenersAfterMove: boolean;
        /**
         * We re attach the event listeners after the node is only moved
         *
         * @private
         */
        connectedCallback(): void;
        /**
         * This is done to be able to remove the event-listeners as a protection for multiple calls for bindData and for cleanup
         * @private
         */
        __registerHandlers(): void;
        /**
         * Handler function for the field value changes.
         *
         * @return {(function(): void)|*}
         * @private
         */
        __fieldValueChangedHandler: () => (() => void) | any;
        ___timeout: NodeJS.Timeout;
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
        __fieldMetasChangedHandler: () => (() => void) | any;
        __constraintsStringified: any;
        /**
         * Handler to notify the validity of a fieldNode
         * @return {(function(): void)|*}
         * @private
         */
        __fieldBecamesValidHandler: () => (() => void) | any;
        /**
         * Handler to notify a focus request on a fieldNode
         * @return {(function(): void)|*}
         * @private
         */
        __fieldFocusHandler: () => (() => void) | any;
        /**
         * Handler to notify the state of a fieldNode
         * @return {(function(): void)|*}
         * @private
         */
        __fieldStateChangedHandler: () => (() => void) | any;
        /**
         * Handler to notify the new Data injected information of a fieldNode
         * @return {(function(): void)|*}
         * @private
         */
        __fieldNewDataInjectedHandler: () => (() => void) | any;
        /**
         * Handler to notify the repeated field changed information of a fieldNode
         * @return {(function(): void)|*}
         * @private
         */
        __repeatedFieldChangedHandler: () => (() => void) | any;
        /**
         * Handler to notify the invalidity state of a fieldNode
         *
         * @return {(function(*): void)|*}
         * @private
         */
        __fieldBecamesInvalidHandler: (event: any) => ((arg0: any) => void) | any;
        /**
         * remove all listeners on the fieldnode
         * @private
         */
        __detachEventListeners(): void;
    };
    [x: string]: any;
};
import { FieldNode } from "@furo/data/src/lib/FieldNode";
import { RepeaterNode } from "@furo/data/src/lib/RepeaterNode";
