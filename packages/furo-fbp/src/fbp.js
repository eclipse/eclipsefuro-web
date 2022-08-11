/**
 * furo-fbp base class
 *
 * [read the guide](https://fbp.furo.pro/)
 *
 *
 * ### **_FBPTriggerWire**
 * <small>**_FBPTriggerWire**(*wire* `` *detailData* `` ) ⟹ `void`</small>
 *
 * Triggers a wire
 *
 * - <small>wire (String) Name of the wire like --buttonClicked</small>
 * - <small>detailData (*) data to pass</small>
 *
 *
 * ### **_FBPAddWireHook**
 * <small>**_FBPAddWireHook**(*wire* `` *cb* `` *before* `` ) ⟹ `number`</small>
 *
 *
 *
 * - <small>wire (String) Name of the wire</small>
 * - <small>cb (function) Callback function cb(detailData)</small>
 * - <small>before (Boolean) append before the components are triggered, default is false</small>
 *
 *
 * ### **_FBPTraceWires**
 * <small>**_FBPTraceWires**() ⟹ `void`</small>
 *
 * Log all triggered wires for this component. This function may help you at debugging.
 * Select your element in the dev console and call `$0._FBPTraceWires()`
 *
 *
 *
 * ### **_FBPDebug**
 * <small>**_FBPDebug**(*wire* `` *openDebugger* `` ) ⟹ `void`</small>
 *
 * Get information for the triggered wire. This function may help you at debugging.
 * Select your element in the dev console and call `$0._FBPDebug('--dataReceived')`
 *
 * - <small>wire </small>
 * - <small>openDebugger opens the debugger console, so you can inspect your component.</small>
 *
 *
 *
 * @summary Please read the guide for a better understanding
 * @polymer
 * @mixinFunction FBP
 */

import { FbpBreakpoints } from './FbpBreakpoints.js';

export const FBP = superClass =>
  /**
   * @polymerMixinClass
   */
  class extends superClass {
    constructor() {
      super();
      /**
       * used to store the listeners
       * @type {*[]}
       * @private
       */
      this.__FBPEventlistener = [];
      /**
       *
       * @type {{}}
       * @private
       */
      this.__wirebundle = {};
      /**
       *
       * @type {*[]}
       * @private
       */
      this.__wireQueue = [];
    }

    /**
     * Auto append fbp for lit elements
     * @private
     */
    firstUpdated() {
      // ensure to append only once
      if (!this.__fbpAppended) {
        this._appendFBP(this.shadowRoot);
        this.__fbpAppended = true;
      }

      super.firstUpdated();
    }

    /**
     * Triggers a wire
     * @param wire (String) Name of the wire like --buttonClicked
     * @param detailData (*) data to pass
     * @private
     */
    _FBPTriggerWire(wire, detailData) {
      if (this.__fbp_ready) {
        /**
         * Check breakpoints, this slows down every wire (if you have set breakpoints).
         * While debuging, this is absolute OK.
         */
        FbpBreakpoints.Breakpoints().forEach(breakpoint => {
          // start with cheapest

          if (
            breakpoint.enabled &&
            breakpoint.wire === wire &&
            breakpoint.path.endsWith(this.tagName.toLowerCase())
          ) {
            if (this.__domPath === undefined) {
              this.__domPath = FbpBreakpoints.getDomPath(this);
            }

            if (this.__domPath === breakpoint.path) {
              // eslint-disable-next-line default-case
              switch (breakpoint.kind) {
                case 'BREAKPOINT':
                  // eslint-disable-next-line no-unused-vars,no-case-declarations
                  const tagName = this.tagName.toLowerCase();
                  // eslint-disable-next-line no-unused-expressions
                  wire;
                  // eslint-disable-next-line no-unused-expressions
                  detailData;
                  // eslint-disable-next-line no-case-declarations,no-unused-vars
                  const domnode = FbpBreakpoints.GetElementByPath(
                    breakpoint.path
                  );
                  // eslint-disable-next-line no-case-declarations,no-unused-vars
                  const targets = this.__wirebundle[wire];

                  // eslint-disable-next-line no-debugger
                  debugger;
                  break;
                case 'CONDITIONAL':
                  // eslint-disable-next-line no-case-declarations,no-new-func
                  const c = new Function(
                    'data',
                    `return (${breakpoint.condition})`
                  );
                  if (c.call(this, detailData)) {
                    // eslint-disable-next-line no-case-declarations,no-unused-vars
                    const { condition } = breakpoint;
                    // eslint-disable-next-line no-case-declarations,no-unused-vars,no-shadow
                    const tagName = this.tagName.toLowerCase();
                    // eslint-disable-next-line no-case-declarations,no-unused-vars,no-unused-expressions
                    wire;
                    // eslint-disable-next-line no-case-declarations,no-unused-vars,no-unused-expressions
                    detailData;
                    // eslint-disable-next-line no-unused-vars,no-shadow
                    const domnode = FbpBreakpoints.GetElementByPath(
                      breakpoint.path
                    );
                    // eslint-disable-next-line no-unused-vars,no-shadow
                    const targets = this.__wirebundle[wire];

                    // eslint-disable-next-line no-debugger
                    debugger;
                  }

                  break;
                case 'TRACE':
                  // eslint-disable-next-line no-case-declarations
                  const ua = navigator.userAgent.toLowerCase();
                  // eslint-disable-next-line no-case-declarations
                  let agent = true;
                  if (ua.indexOf('safari') !== -1) {
                    if (ua.indexOf('chrome') > -1) {
                      agent = true; // Chrome
                    } else {
                      agent = false; // Safari
                    }
                  }

                  if (agent) {
                    // eslint-disable-next-line no-console
                    console.group('Trace', `${this.nodeName}: ${wire}`);

                    // eslint-disable-next-line no-console
                    console.log(
                      FbpBreakpoints.GetElementByPath(breakpoint.path)
                    );
                    // eslint-disable-next-line no-console
                    console.group('Target Elements');
                    // eslint-disable-next-line no-console
                    console.table(this.__wirebundle[wire]);
                    // eslint-disable-next-line no-console
                    console.groupEnd();

                    // eslint-disable-next-line no-console
                    console.groupCollapsed('Data');
                    // eslint-disable-next-line no-console
                    console.log(detailData);
                    // eslint-disable-next-line no-console
                    console.groupEnd();

                    // eslint-disable-next-line no-console
                    console.groupCollapsed('Call Stack');
                    // eslint-disable-next-line no-console
                    console.log(new Error().stack);
                    // eslint-disable-next-line no-console
                    console.groupEnd();
                    // eslint-disable-next-line no-console
                    console.groupEnd();
                  }
                  break;
              }
            }
          }
        });

        if (this.__wirebundle[wire]) {
          this.__wirebundle[wire].forEach(receiver => {
            // check for hooks
            if (typeof receiver === 'function') {
              receiver(detailData);
            } else if (
              typeof receiver.element[receiver.method] === 'function'
            ) {
              this._call(detailData, receiver);
            } else if (receiver.property) {
              let data = detailData;
              if (receiver.path) {
                data = this._pathGet(detailData, receiver.path);
              }
              this._pathSet(receiver.element, receiver.property, data);
            } else if (receiver.element.localName.includes('-')) {
              // retry call with whenDefined because sometimes the components are just not defined at the time ƒ-method is triggered
              customElements
                .whenDefined(receiver.element.localName)
                .then(() => {
                  if (typeof receiver.element[receiver.method] === 'function') {
                    this._call(detailData, receiver);
                  } else {
                    // eslint-disable-next-line no-console
                    console.warn(
                      `${receiver.method} is not a method of ${receiver.element.nodeName}`,
                      receiver.element
                    );
                  }
                });
            } else {
              // eslint-disable-next-line no-console
              console.warn(
                `${receiver.method} is not a method of ${receiver.element.nodeName}`,
                receiver.element
              );
            }
          });
        }
      } else {
        this.__enqueueTrigger(wire, detailData);
      }
    }

    /**
     *
     * @param detailData
     * @param receiver
     * @private
     */
    _call(detailData, receiver) {
      let response;
      // array spreaden
      if (
        Array.isArray(detailData) &&
        receiver.element[receiver.method].length > 1
      ) {
        // eslint-disable-next-line prefer-spread
        response = receiver.element[receiver.method].apply(
          receiver.element,
          detailData
        );
      } else {
        let data = detailData;
        if (receiver.path) {
          data = this._pathGet(detailData, receiver.path);
        }
        response = receiver.element[receiver.method](data);
      }

      // fnret-function auslösen
      const fnret = new Event(`fnret-${receiver.attrName}`, {
        composed: false,
        bubbles: false,
      });
      fnret.detail = response;
      receiver.element.dispatchEvent(fnret);

      // @-ƒ-function auslösen
      const customEvent = new Event(`ƒ-${receiver.attrName}`, {
        composed: false,
        bubbles: false,
      });
      customEvent.detail = response;
      receiver.element.dispatchEvent(customEvent);
    }

    /**
     *
     * @param wire (String) Name of the wire
     * @param cb (function) Callback function cb(detailData)
     * @param [before] (Boolean) append before the components are triggered, default is false
     * @returns {number} Index of hook
     * @private
     */
    _FBPAddWireHook(wire, cb, before) {
      // eslint-disable-next-line no-param-reassign
      before = before || false;
      if (this.__wirebundle[wire]) {
        if (before) {
          this.__wirebundle[wire].unshift(cb);
          return 0;
        }
        const l = this.__wirebundle[wire].push(cb);
        return l - 1;
      }
      this.__wirebundle[wire] = [cb];
      return 1;
    }

    /**
     * Log all triggered wires for this component. This function may help you at debugging.
     * Select your element in the dev console and call `$0._FBPTraceWires()`
     *
     *
     * @private
     */
    _FBPTraceWires() {
      const self = this;
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const wire in this.__wirebundle) {
        this._FBPAddWireHook(
          wire,
          e => {
            const ua = navigator.userAgent.toLowerCase();
            let agent = true;
            if (ua.indexOf('safari') !== -1) {
              if (ua.indexOf('chrome') > -1) {
                agent = true; // Chrome
              } else {
                agent = false; // Safari
              }
            }

            if (agent) {
              // eslint-disable-next-line no-console
              console.groupCollapsed('Trace for', `${this.nodeName}: ${wire}`);
              // eslint-disable-next-line no-console
              console.table([{ host: self, wire, data: e }]);

              // eslint-disable-next-line no-console
              console.groupCollapsed('Data');
              // eslint-disable-next-line no-console
              console.log(e);
              // eslint-disable-next-line no-console
              console.groupEnd();

              // eslint-disable-next-line no-console
              console.groupCollapsed('Target Elements');
              // eslint-disable-next-line no-console
              console.table(self.__wirebundle[wire]);
              // eslint-disable-next-line no-console
              console.groupEnd();

              // eslint-disable-next-line no-console
              console.groupCollapsed('Call Stack');
              // eslint-disable-next-line no-console
              console.log(new Error().stack);
              // eslint-disable-next-line no-console
              console.groupEnd();
              // eslint-disable-next-line no-console
              console.groupEnd();
            }
          },
          true
        );
      }
    }

    /**
     * Get information for the triggered wire. This function may help you at debugging.
     * Select your element in the dev console and call `$0._FBPDebug('--dataReceived')`
     *
     * @param wire
     * @param openDebugger opens the debugger console, so you can inspect your component.
     * @private
     */
    _FBPDebug(wire, openDebugger) {
      const self = this;
      this._FBPAddWireHook(
        wire,
        e => {
          if (openDebugger) {
            // eslint-disable-next-line no-debugger
            debugger;
          } else {
            const ua = navigator.userAgent.toLowerCase();
            let agent = true;
            if (ua.indexOf('safari') !== -1) {
              if (ua.indexOf('chrome') > -1) {
                agent = true; // Chrome
              } else {
                agent = false; // Safari
              }
            }

            if (agent) {
              // eslint-disable-next-line no-console
              console.group('Debug', `${this.nodeName}: ${wire}`);
              // eslint-disable-next-line no-console
              console.group('Target Elements');
              // eslint-disable-next-line no-console
              console.table(self.__wirebundle[wire]);
              // eslint-disable-next-line no-console
              console.groupEnd();

              // eslint-disable-next-line no-console
              console.groupCollapsed('Data');
              // eslint-disable-next-line no-console
              console.log(e);
              // eslint-disable-next-line no-console
              console.groupEnd();

              // eslint-disable-next-line no-console
              console.groupCollapsed('Call Stack');
              // eslint-disable-next-line no-console
              console.log(new Error().stack);
              // eslint-disable-next-line no-console
              console.groupEnd();
              // eslint-disable-next-line no-console
              console.groupEnd();
            }
          }
        },
        true
      );
    }

    /**
     *
     * @param str
     * @return {*}
     * @private
     */
    // eslint-disable-next-line class-methods-use-this
    __toCamelCase(str) {
      return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
    }

    /**
     * parses the dom for flowbased programming tags
     * @param dom dom node
     * @private
     */
    _appendFBP(dom) {
      const self = this;
      const wirebundle = this.__wirebundle;
      // get all elements which live in the host
      const nl = dom.querySelectorAll('*');
      const l = nl.length - 1;

      // eslint-disable-next-line func-names
      const _collectReceivers = function (element, i, attr) {
        // collect receiver
        element.attributes[i].value.split(',').forEach(w => {
          const r = this.__resolveWireAndPath(w);
          // create empty if not exist
          if (!wirebundle[r.receivingWire]) {
            wirebundle[r.receivingWire] = [];
          }
          wirebundle[r.receivingWire].push({
            element,
            method: this.__toCamelCase(attr),
            attrName: attr,
            path: r.path,
          });
        });
      };
      // eslint-disable-next-line func-names
      const _collectPropertySetters = function (element, i, property) {
        // split multiple wires
        element.attributes[i].value.split(',').forEach(w => {
          const r = this.__resolveWireAndPath(w);
          // create empty if not exist
          if (!wirebundle[r.receivingWire]) {
            wirebundle[r.receivingWire] = [];
          }
          wirebundle[r.receivingWire].push({
            element,
            property: this.__toCamelCase(property),
            path: r.path,
          });
        });
      };

      // eslint-disable-next-line func-names
      const _extractEventWires = function (fwire) {
        let wire;

        const trimmedWire = fwire.trim();

        let type = 'call';
        if (trimmedWire.startsWith('((')) {
          wire = trimmedWire.substring(2, trimmedWire.length - 2);
          type = 'setValue';
        } else if (trimmedWire.startsWith('-^')) {
          wire = trimmedWire.substring(2);
          type = 'fireOnHost';
        } else if (trimmedWire.startsWith('^')) {
          wire = trimmedWire.substring(1);
          type = 'fire';
          if (trimmedWire.startsWith('^^')) {
            wire = trimmedWire.substring(2);
            type = 'fireBubble';
          }
        } else if (trimmedWire === ':STOP') {
          type = 'stop';
          wire = 'stop';
        } else if (trimmedWire === ':PREVENTDEFAULT') {
          type = 'preventdefault';
          wire = 'preventdefault';
        } else {
          wire = trimmedWire;
          type = 'call';
        }
        return { type, wire };
      };

      // eslint-disable-next-line no-plusplus
      for (let x = l; x >= 0; --x) {
        const element = nl[x];

        // skip template tags
        if (element.tagName === 'TEMPLATE') {
          // eslint-disable-next-line no-continue
          continue;
        }

        for (let i = 0; i < element.attributes.length; i += 1) {
          // collect receiving tags
          if (element.attributes[i].name.startsWith('fn-')) {
            const attr = element.attributes[i].name.substring(3);
            _collectReceivers.call(this, element, i, attr);
            // eslint-disable-next-line no-continue
            continue;
          }

          // collect sending tags
          if (element.attributes[i].name.startsWith('at-')) {
            const eventname = element.attributes[i].name.substring(3);
            const fwires = element.attributes[i].value;
            fwires.split(',').forEach(fwire => {
              const __ret = _extractEventWires(fwire);
              // eslint-disable-next-line no-use-before-define
              registerEvent(eventname, __ret.type, __ret.wire, element);
            });
            // eslint-disable-next-line no-continue
            continue;
          }
          // collect data property setter receiver
          if (element.attributes[i].name.startsWith('set-')) {
            const property = element.attributes[i].name.substring(4);
            _collectPropertySetters.call(this, element, i, property);
            // eslint-disable-next-line no-continue
            continue;
          }

          // collect data property receiver
          if (element.attributes[i].name.startsWith('ƒ-.')) {
            const property = element.attributes[i].name.substring(3);
            _collectPropertySetters.call(this, element, i, property);
            // eslint-disable-next-line no-continue
            continue;
          }

          // collect receiving tags
          if (element.attributes[i].name.startsWith('ƒ-')) {
            const attr = element.attributes[i].name.substring(2);
            _collectReceivers.call(this, element, i, attr);
            // eslint-disable-next-line no-continue
            continue;
          }

          // collect sending tags
          if (element.attributes[i].name.startsWith('@-')) {
            const eventname = element.attributes[i].name.substring(2);
            const fwires = element.attributes[i].value;
            fwires.split(',').forEach(fwire => {
              const __ret = _extractEventWires(fwire);
              // eslint-disable-next-line no-use-before-define
              registerEvent(eventname, __ret.type, __ret.wire, element);
            });
            // eslint-disable-next-line no-continue
            continue;
          }
        }
      }

      /**
       * register event on current element
       * @param eventname
       * @param type
       * @param wire
       * @private
       */
      function registerEvent(eventname, type, wire, element) {
        // find properties in wire
        // eslint-disable-next-line no-useless-escape
        const match = wire.match(/([a-z0-9\-_*\.]+)/gi);

        const handler = {
          // prevent default and stop propagation
          stop(e) {
            e.stopPropagation();
          },
          preventdefault(e) {
            e.preventDefault();
          },

          call(e) {
            /**
             * Prüfe ob die Funktion mit einem Wert aus dem Host oder mit den Details des Events ausgeführt werden soll.
             * --wire(hostName) ==> wirft this.hostName in die Funktion sonst wird e.detail verwendet
             *
             */

            let effectiveWire = wire;
            let detailData = e.detail;
            if (match !== null && match.length > 1) {
              // --wireName(*) sends the raw event
              // --wireName(*.mouseX) sends property mouseX of the event

              if (match[1].startsWith('*')) {
                if (match[1].length === 1) {
                  // send raw event
                  detailData = e;
                } else {
                  // send event subprop with *.notDetail.xxx
                  detailData = self._pathGet(
                    e,
                    match[1].substring(2, match[1].length)
                  );
                }
              } else {
                // send host property
                detailData = self._pathGet(self, match[1]);
              }
              // eslint-disable-next-line prefer-destructuring
              effectiveWire = match[0];
            }

            self._FBPTriggerWire(effectiveWire, detailData);
          },

          fire(e) {
            if (match !== null && match.length > 1) {
              const prop = match[1];
              const theEvent = match[0];
              const customEvent = new Event(theEvent, {
                composed: false,
                bubbles: true,
              });
              // send details with *.sub or *
              if (prop.startsWith('*')) {
                if (prop.length === 1) {
                  // send raw event
                  customEvent.detail = e;
                } else {
                  customEvent.detail = self._pathGet(e, prop.substring(2));
                }
              } else {
                customEvent.detail = self._pathGet(self, prop);
              }
              e.currentTarget.dispatchEvent(customEvent);
            } else {
              const customEvent = new Event(wire, {
                composed: false,
                bubbles: true,
              });
              customEvent.detail = e.detail;
              e.currentTarget.dispatchEvent(customEvent);
            }
          },

          fireOnHost(e) {
            if (match !== null && match.length > 1) {
              const prop = match[1];
              const theEvent = match[0];
              const customEvent = new Event(theEvent, {
                composed: false,
                bubbles: true,
              });
              // send details with *.sub or *
              if (prop.startsWith('*')) {
                if (prop.length === 1) {
                  // send raw event
                  customEvent.detail = e;
                } else {
                  customEvent.detail = self._pathGet(e, prop.substring(2));
                }
              } else {
                customEvent.detail = self._pathGet(self, prop);
              }
              self.dispatchEvent(customEvent);
            } else {
              const customEvent = new Event(wire, {
                composed: false,
                bubbles: true,
              });
              customEvent.detail = e.detail;
              self.dispatchEvent(customEvent);
            }
          },

          fireBubble(e) {
            if (match !== null && match.length > 1) {
              const prop = match[1];
              const theEvent = match[0];
              const customEvent = new Event(theEvent, {
                composed: true,
                bubbles: true,
              });
              // send details with *.sub or *

              if (prop.startsWith('*')) {
                if (prop.length === 1) {
                  // send raw event
                  customEvent.detail = e;
                } else {
                  customEvent.detail = self._pathGet(e, prop.substring(2));
                }
              } else {
                customEvent.detail = self._pathGet(self, prop);
              }
              e.currentTarget.dispatchEvent(customEvent);
            } else {
              const customEvent = new Event(wire, {
                composed: true,
                bubbles: true,
              });
              customEvent.detail = e.detail;
              e.currentTarget.dispatchEvent(customEvent);
            }
          },
          setValue(e) {
            self._pathSet(self, wire, e.detail);

            // self.set(wire, e.detail, self);
          },
        };

        element.addEventListener(eventname, handler[type]);
        self.__FBPEventlistener.push({
          element,
          event: eventname,
          handler: handler[type],
        });
      }

      // queueing for _FBPTriggerWire
      if (!this.__fbp_ready) {
        this._FBPReady();

        const queuelength = this.__wireQueue.length;
        for (let i = 0; i < queuelength; i += 1) {
          const t = this.__wireQueue.shift();
          this._FBPTriggerWire(t.w, t.d);
        }
      }
    }

    /**
     * Livecycle method
     * This method is called, when the wires are ready.
     * And triggers the `|--FBPready` wire. This does *not* respect a lit updateComplete
     * @private
     */
    _FBPReady() {
      this.__fbp_ready = true;
      this._FBPTriggerWire('|--FBPready', this);
    }

    /**
     *
     * @param wire
     * @param detailData
     * @private
     */
    __enqueueTrigger(wire, detailData) {
      this.__wireQueue.push({ w: wire, d: detailData });
    }

    /**
     *
     * @param w
     * @return {{path, receivingWire}}
     * @private
     */
    // eslint-disable-next-line class-methods-use-this
    __resolveWireAndPath(w) {
      // finde --wire(*.xx.yy)  => group1 = --wire  group2 = xx.yy

      // eslint-disable-next-line no-useless-escape
      const match = w.trim().match(/(^[^\(]*)\(?\*?\.?([^\)]*)/);
      const receivingWire = match[1];
      const path = match[2];

      return { receivingWire, path };
    }

    /**
     * Reads a value from a path.  If any sub-property in the path is `undefined`,
     * this method returns `undefined` (will never throw.
     *
     * @param {Object} root Object from which to dereference path from
     * @param {string | !Array<string|number>} path Path to read
     * @return {*} Value at path, or `undefined` if the path could not be fully dereferenced.
     * @private
     */
    _pathGet(root, path) {
      let prop = root;
      const parts = this._split(path);
      // Loop over path parts[0..n-1] and dereference
      for (let i = 0; i < parts.length; i += 1) {
        if (!prop) {
          return false;
        }
        const part = parts[i];
        prop = prop[part];
      }

      return prop;
    }

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
    _pathSet(root, path, value) {
      let prop = root;
      const parts = this._split(path);
      const last = parts[parts.length - 1];
      // used for @-event="((prop.sub))"
      if (parts.length > 1) {
        // Loop over path parts[0..n-2] and dereference
        for (let i = 0; i < parts.length - 1; i += 1) {
          const part = parts[i];
          prop = prop[part];
          if (!prop) {
            return false;
          }
        }
        // Set value to object at end of path
        prop[last] = value;
      } else {
        // Simple property set
        prop[path] = value;
      }
      return parts.join('.');
    }

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
    // eslint-disable-next-line class-methods-use-this
    _split(path) {
      return path.toString().split('.');
    }
  };
