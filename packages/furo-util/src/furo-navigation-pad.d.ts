declare const FuroNavigationPad_base: {
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
 * `furo-navigation-pad` listens to different keyboard navigation events like the arrow keys. It will attach the listeners
 *  to the parent node and cancel the default and stop the propagation of the events.
 *
 *  The events are available as standalone events or as combined event in the `navigated` event.
 *
 *  ```html
 *  <!-- forward all navigation events except the Escape  -->
 *  <furo-navigation-pad
 *      ignored-keys="Escape" at-navigated="--navpad"
 *      ></furo-navigation-pad>
 *
 *  ```
 *
 *
 * @fires {String} navigated - Generic navigation event, fired when one of the navigation keys was pressed, detail contains
 * one of these: Escape | Enter | ArrowDown | ArrowUp |ArrowLeft|ArrowRight| PageUp | PageDown | Home | End
 * @fires {KeyboardEvent} enter-pressed -  Fired when Enter key was pressed.
 * @fires {KeyboardEvent} arrow-down-pressed -  Fired when ArrowDown key was pressed.
 * @fires {KeyboardEvent} arrow-up-pressed -  Fired when ArrowUp key was pressed.
 * @fires {KeyboardEvent} arrow-left-pressed -  Fired when ArrowLeft key was pressed.
 * @fires {KeyboardEvent} arrow-right-pressed -  Fired when ArrowRight key was pressed.
 * @fires {KeyboardEvent} escape-pressed -  Fired when Escape key was pressed.
 * @fires {KeyboardEvent} page-up-pressed -  Fired when PageUp key was pressed.
 * @fires {KeyboardEvent} page-down-pressed -  Fired when PageDown key was pressed.
 * @fires {KeyboardEvent} home-pressed -  Fired when Home key was pressed.
 * @fires {KeyboardEvent} end-pressed -  Fired when End key was pressed.
 *
 *
 * @summary keyboard navigation helper
 * @customElement
 * @appliesMixin FBP
 */
export class FuroNavigationPad extends FuroNavigationPad_base {
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
}
export {};
