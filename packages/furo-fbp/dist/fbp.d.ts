export function FBP(superClass: any): {
    new (): {
        [x: string]: any;
        /**
         * used to store the listeners
         * @type {*[]}
         * @private
         */
        __FBPEventlistener: any[];
        /**
         *
         * @type {{}}
         * @private
         */
        __wirebundle: {};
        /**
         *
         * @type {*[]}
         * @private
         */
        __wireQueue: any[];
        /**
         * Auto append fbp for lit elements
         * @private
         */
        firstUpdated(): void;
        __fbpAppended: boolean | undefined;
        /**
         * Triggers a wire
         * @param wire (String) Name of the wire like --buttonClicked
         * @param detailData (*) data to pass
         * @private
         */
        _FBPTriggerWire(wire: any, detailData: any): void;
        __domPath: string | undefined;
        /**
         *
         * @param detailData
         * @param receiver
         * @private
         */
        _call(detailData: any, receiver: any): void;
        /**
         *
         * @param wire (String) Name of the wire
         * @param cb (function) Callback function cb(detailData)
         * @param [before] (Boolean) append before the components are triggered, default is false
         * @returns {number} Index of hook
         * @private
         */
        _FBPAddWireHook(wire: any, cb: any, before?: any): number;
        /**
         * Log all triggered wires for this component. This function may help you at debugging.
         * Select your element in the dev console and call `$0._FBPTraceWires()`
         *
         *
         * @private
         */
        _FBPTraceWires(): void;
        /**
         * Get information for the triggered wire. This function may help you at debugging.
         * Select your element in the dev console and call `$0._FBPDebug('--dataReceived')`
         *
         * @param wire
         * @param openDebugger opens the debugger console, so you can inspect your component.
         * @private
         */
        _FBPDebug(wire: any, openDebugger: any): void;
        /**
         *
         * @param str
         * @return {*}
         * @private
         */
        __toCamelCase(str: any): any;
        /**
         * parses the dom for flowbased programming tags
         * @param dom dom node
         * @private
         */
        _appendFBP(dom: any): void;
        /**
         * Livecycle method
         * This method is called, when the wires are ready.
         * And triggers the `|--FBPready` wire. This does *not* respect a lit updateComplete
         * @private
         */
        _FBPReady(): void;
        __fbp_ready: boolean | undefined;
        /**
         *
         * @param wire
         * @param detailData
         * @private
         */
        __enqueueTrigger(wire: any, detailData: any): void;
        /**
         *
         * @param w
         * @return {{path, receivingWire}}
         * @private
         */
        __resolveWireAndPath(w: any): {
            path: any;
            receivingWire: any;
        };
        /**
         * Reads a value from a path.  If any sub-property in the path is `undefined`,
         * this method returns `undefined` (will never throw.
         *
         * @param {Object} root Object from which to dereference path from
         * @param {string | !Array<string|number>} path Path to read
         * @return {*} Value at path, or `undefined` if the path could not be fully dereferenced.
         * @private
         */
        _pathGet(root: Object, path: string | Array<string | number>): any;
        /**
         * Sets a value to a path.  If any sub-property in the path is `undefined`,
         * this method will no-op.
         *
         * @param {Object} root Object from which to dereference path from
         * @param {string | !Array<string|number>} path Path to set
         * @param {*} value Value to set to path
         * @return {string | boolean} The normalized version of the input path, return false if no prop
         * @private
         */
        _pathSet(root: Object, path: string | Array<string | number>, value: any): string | boolean;
        /**
         * Splits a path into an array of property names. Accepts either arrays
         * of path parts or strings.
         *
         * Example:
         *
         * ```
         * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
         * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
         * ```
         *
         * @param {string | !Array<string|number>} path Input path
         * @return {!Array<string>} Array of path parts
         * @suppress {checkTypes}
         * @private
         */
        _split(path: string | Array<string | number>): Array<string>;
    };
    [x: string]: any;
};
