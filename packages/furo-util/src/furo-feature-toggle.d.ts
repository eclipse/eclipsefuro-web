declare const FuroFeatureToggle_base: {
    new (): {
        [x: string]: any;
        __FBPEventlistener: any[];
        __wirebundle: {};
        __wireQueue: any[];
        firstUpdated(): void;
        __fbpAppended: boolean;
        _FBPTriggerWire(wire: any, detailData: any): void;
        __domPath: any;
        _call(detailData: any, receiver: any): void;
        _FBPAddWireHook(wire: any, cb: any, before?: any): number;
        _FBPTraceWires(): void;
        _FBPDebug(wire: any, openDebugger: any): void;
        __toCamelCase(str: any): any;
        _appendFBP(dom: any): void;
        _FBPReady(): void;
        __fbp_ready: boolean;
        __enqueueTrigger(wire: any, detailData: any): void;
        __resolveWireAndPath(w: any): {
            path: any;
            receivingWire: any;
        };
        _pathGet(root: any, path: string | (string | number)[]): any;
        _pathSet(root: any, path: string | (string | number)[], value: any): string | boolean;
        _split(path: string | (string | number)[]): string[];
    };
    [x: string]: any;
};
/**
 * `furo-feature-toggle`
 *  Is a handler for feature toggles, you can react to key changes with FBP.
 *  This component is quite simple, but gives you a lot of possibilities.
 *  Read more about feature toggles in the [guide](/docs/guides/featuretoggle/)
 *
 *  ```html
 *  <!-- setting a key -->
 * <furo-feature-toggle
 *     key="feature.easter.egg" fn-set-true="--activateClicked" fn-set-false="--disableClicked">
 *     </furo-feature-toggle>
 *
 *  <!-- observing key changes -->
 *  <furo-feature-toggle
 *     key="feature.xxxx.yyy"  at-key-activated="--fxyActivated" at-key-changed="--fxyChanged">
 *     </furo-feature-toggle>
 *
 *  ```
 *
 * @fires {true} key-true - Fired when the key is set to true or is true on init.
 * @fires {false} key-false - Fired when the key is set to false or is false on init.
 * @fires {Boolean} key-changed - Fired on init and when the key changes its state.
 *
 *
 * @summary flow based handler for feature toggles
 * @customElement furo-feature-toggle
 * @appliesMixin FBP
 */
export class FuroFeatureToggle extends FuroFeatureToggle_base {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * Sets a feature key state to false.
     */
    setFalse(): void;
    /**
     * Sets a feature key state to true.
     */
    setTrue(): void;
    /**
     * @private
     * @returns {TemplateResult}
     * @private
     */
    private render;
}
export {};
