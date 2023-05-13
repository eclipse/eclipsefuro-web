declare const FuroLockNavigation_base: {
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
 * `furo-lock-navigation`
 *  Blocks the furo-location-updater and furo-app-flow-router from navigating away if you have unsaved changes or work to do.
 *
 *  This component also adds a listener to the unload event, which kicks in at a reload or close of the window.
 *
 *  ```html
 *  <furo-lock-navigation fn-lock="--dataChanged" fn-unlock="--saveSuccess"></furo-lock-navigation>
 *  ```
 *
 * @fires {void} furo-navigation-locked -  Fired when the navigation was locked
 * @fires {void} furo-navigation-unlocked -  Fired when the navigation was unlocked
 *
 * @summary Blocks the furo-location-updater from navigating away
 * @customElement
 * @appliesMixin FBP
 */
export class FuroLockNavigation extends FuroLockNavigation_base {
    static get properties(): {
        /**
         * The warning message, which is displayed at the prompt.
         *
         * @type String
         */
        message: string;
    };
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    message: string;
    /**
     * Blocks furo-location-updater and furo-app-flow-router from navigating away.
     */
    lock(): void;
    /**
     *
     * @param event
     * @private
     */
    private _lockHandler;
    _locked: boolean;
    /**
     * Removes the lock.
     */
    unlock(): void;
    /**
     *
     * @param event
     * @private
     */
    private _unloadHandler;
}
export {};
