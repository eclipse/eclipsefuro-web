declare const FuroDocumentTitle_base: {
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
 * `furo-document-title`
 *
 *  Updates the document title and set navigation waypoints.
 *
 *  ## Structure of the title
 *  The title is built up from 3 parts (`prefix`, `title`, `suffix`). Each of them can be set by attribute or a setter method. The `title` and `suffix` part can be set with a fieldnode from a `furo-data-object`.
 *
 *  `document.title = prefix + title + suffix`
 *
 *  ## Waypoints
 *  Waypoints are pushed to the browser history and allows you to navigate with the back and forward buttons of the browser.
 *  To return to the last waypoint within your app, you have to trigger a `history.back()`. Read more about the history API [here](https://developer.mozilla.org/en-US/docs/Web/API/History).
 *
 *  If you use `furo-app-flow` you can send the **history-back** event.
 *
 *  Views and pages without a waypoint are not stored in the history.
 *
 *  ```
 *  [a]-->[b]-->[.]-->[.]-->[.]-->[c]
 *         ▲                       │
 *         └───────────────────────┘
 *         By clicking the back button you will return to b
 *
 *  ```
 *
 *  ## Usage example
 *
 *  ```html
 *   <furo-document-title
 *     prefix="${i18n.t('prefix.label')} ["
 *     fn-bind-title="--DataObject(*.display_name)"
 *     suffix="]"
 *     fn-set-waypoint="--pageActivated"
 *   ></furo-document-title>
 *  ```
 *  The document title will be set to: `PrefixLabel [display_name_value]`
 *
 * @fires {} waypoint-pushed -  Fired when the waypoint is finaly pushed to the browser history.
 * @fires {} waypoint-canceled -  Fired when the waypoint was set but not pushed to the history, because the user navigated back.
 *
 * @summary Document title
 * @customElement furo-document-title
 * @appliesMixin FBP
 */
export class FuroDocumentTitle extends FuroDocumentTitle_base {
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
    prefix: string;
    title: string;
    suffix: string;
    setWaypoint(): void;
    _inPreStage: boolean;
    /**
     * Set the document title with the current prefix title suffix. Without setting a waypoint.
     *
     */
    activate(): void;
    /**
     * Renders the title and set it as document title
     * @private
     */
    private _setDocumentTitle;
    /**
     * Updates the suffix
     * @param s
     */
    setSuffix(s: any): void;
    /**
     * Updates the title
     * @param title string
     */
    setTitle(title: any): void;
    /**
     * Bind a fieldnode to auto update the suffix
     * @param fieldnode
     */
    bindSuffix(fieldnode: any): void;
    /**
     * Bind a fieldnode to auto update the title
     * @param fieldnode
     */
    bindTitle(fieldnode: any): void;
}
export {};
