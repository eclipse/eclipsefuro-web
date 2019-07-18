/**
 * Custom event type for the AST
 */
export class NodeEvent {
  constructor(type, detail, bubbles = true) {
    /**
     * Event type / name
     * @type {string}
     */
    this.type = type;
    this.path = [];
    /**
     *
     * @type {undefined}
     */
    this.target = undefined;
    /**
     * should the Event bubble
     * @type {boolean}
     */
    this.bubbles = bubbles;
    /**
     * Event details
     * @type {*}
     */
    this.detail = detail;
    /**
     * If you are in a parent element and set this to true it will not bubble
     * @type {boolean}
     */
    this.cancelBubble = false;
    /**
     * if you are in a child element and set this to true, the event will not broadcast downwards
     * @type {boolean}
     */
    this.cancelBroadcast = false;
  }


  stopPropagation() {
    this.cancelBubble = true;
  }

  stopBroadcast(){
    //todo: implement
    this.cancelBroadcast = true;
  }

}

/**
 * Simulates a tree which can handle events and broadcast events to all nodes
 *
 */
export class EventTreeNode {
  constructor(parentNode) {
    this.__parentNode = parentNode;
    this.__eventListener = {};
    this.__childNodes = [];
    if (parentNode) {
      parentNode.__childNodes.push(this)
    }
  }



  /**
   * shorthand function to add a property as child node
   * @param name
   * @returns {*}
   */
  addChildProperty(name, treeNode) {
    this[name] = treeNode || new EventTreeNode(this);
    return this[name];
  }

  /**
   * Add a listener to a node
   * @param type
   * @param handler
   * @param options  for once,...
   */
  addEventListener(type, handler, options = {}) {
    if (!this.__eventListener[type]) {
      this.__eventListener[type] = [];
    }
    this.__eventListener[type].push({cb: handler, options: options});
  }

  /**
   * Removes the listener from a node
   * @param type
   * @param handler
   */
  removeEventListener(type, handler) {
    this.__eventListener[type] = this.__eventListener[type].filter((e, i) => {
      if (e.cb === handler) {
        return false
      }
    });
  }

  /**
   * Dispatch an event
   * @param {NodeEvent} event
   * @returns {*}
   */
  dispatchNodeEvent(event) {
    // simulate target and path
    if (!event.target) {
      event.target = this;
    }
    event.path.push(this);

    // trigger the events on current node
    this.__triggerNodeEvents(event);

    //trigger parent node
    if (event.bubbles && !event.cancelBubble && this.__parentNode) {
      this.__parentNode.dispatchNodeEvent(event)
    }
    return event;
  }

  /**
   * Broadcast the event to node and all childNodes and their childNodes
   * Bubbling is ignored, but propagation can be stopped
   * @param event
   * @returns {*}
   */
  broadcastEvent(event) {
    // trigger the events on current node
    this.__triggerNodeEvents(event);
    //children
    if (!event.cancelBroadcast) {
      this.__childNodes.map((c) => {
        c.broadcastEvent(event)
      });
    }
    return event;
  }

  __triggerNodeEvents(event) {
    if (this.__eventListener[event.type] && this.__eventListener[event.type].length > 0) {
      this.__eventListener[event.type].map((t, i, listenerArray) => {
        t.cb(event);
        if (t.options.once) {
          delete listenerArray[i]
        }
      })
    }
  }
}
