import { PropertyValues } from 'lit';
export declare abstract class LitFBPAC {
    /**
     * Log all triggered wires for this component. This function may help you at debugging.
     * Select your element in the dev console and call `$0._FBPTraceWires()`
     *
     */
    protected _FBPTraceWires(): void;
    protected _FBPTriggerWire(wire: string, detailData: any): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected _FBPAddWireHook(wire: string, cb: Function, before: boolean): number;
    protected _FBPDebug(wire: string, openDebugger: boolean): void;
    protected _FBPReady(): void;
    protected _pathGet(root: any, path: string): any;
    protected _pathSet(root: any, path: string, value: any): string | false;
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
     */
    protected _split(path: string): string[];
}
