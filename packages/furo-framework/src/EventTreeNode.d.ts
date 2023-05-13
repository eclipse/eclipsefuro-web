/**
 * Custom event type for the AST
 */
export class NodeEvent {
    constructor(type: any, detail: any, bubbles?: boolean);
    /**
     * Event type / name
     * @type {string}
     */
    type: string;
    path: any[];
    /**
     *
     * @type {undefined}
     */
    target: any;
    /**
     * should the Event bubble
     * @type {boolean}
     */
    bubbles: boolean;
    /**
     * Event details
     * @type {*}
     */
    detail: any;
    /**
     * If you are in a parent element and set this to true it will not bubble
     * @type {boolean}
     */
    cancelBubble: boolean;
    /**
     * if you are in a child element and set this to true, the event will not broadcast downwards
     * @type {boolean}
     */
    cancelBroadcast: boolean;
    /**
     * do not propagate the events to parent nodes
     */
    stopPropagation(): void;
    /**
     * Do not broadcast to the children of this node anymore
     */
    stopBroadcast(): void;
}
/**
 * Simulates a tree which can handle events and broadcast events to all nodes
 *
 */
export class EventTreeNode {
    constructor(parentNode: any);
    __parentNode: any;
    __eventListener: {};
    __childNodes: any[];
    /**
     * move the position of an item from an index to an index.
     *
     * Keep in mind that this is not swaping!
     *
     * https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
     *
     * @param oldIndex
     * @param newIndex
     */
    moveNode(oldIndex: any, newIndex: any): void;
    /**
     * shorthand function to add a property as child node
     * @param name
     * @returns {*}
     */
    addChildProperty(name: any, treeNode: any): any;
    /**
     * Add a listener to a node
     * @param type
     * @param handler
     * @param options  for once,...
     */
    addEventListener(type: any, handler: any, options?: {}): void;
    /**
     * Removes the listener from a node
     * @param type
     * @param handler
     */
    removeEventListener(type: any, handler: any): void;
    /**
     * Dispatch an event
     * @param {NodeEvent} event
     * @returns {*}
     */
    dispatchNodeEvent(event: NodeEvent): any;
    /**
     * Broadcast the event to node and all childNodes and their childNodes
     * Bubbling is ignored, but propagation can be stopped
     * @param event
     * @returns {*}
     */
    broadcastEvent(event: any): any;
    __triggerNodeEvents(event: any): void;
}
