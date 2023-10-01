/**
 *
 * ```json
 * {
 *   path: "app-shell::shadow > main-stage::shadow > furo-pages > view-echo",
 *   wire: "--responseEcho",
 *   kind: "CONDITIONAL",
 *   condition:"data.data.message==='Ping Pong'",
 *   enabled : true
 * },{
 *   path: "app-shell::shadow > main-stage::shadow > furo-pages > view-echo",
 *   wire: "--responseEcho",
 *   kind: "CONDITIONAL",
 *   condition:"this.getAttribute('name')==='echo-service'",_getDomPath
 *   enabled : true
 * }, {
 *   path: "app-shell::shadow > main-stage::shadow > furo-pages > view-echo",
 *   wire: "|--FBPready",
 *   kind: "TRACE",
 *   enabled : true
 * },{
 *   path: "app-shell::shadow > main-stage::shadow > furo-pages > view-echo",
 *   wire: "|--FBPready",
 *   kind: "BREAKPOINT",
 *   enabled : false
 * }
 * ```
 * @type {*[]}
 */
let Breakpoints = [];

export class FbpBreakpoints {
  static SetBreakpoints(breakpoints) {
    Breakpoints = breakpoints;
  }

  static Breakpoints() {
    return Breakpoints;
  }

  /**
   * This will get the DOM Node for a path produced by FBP._getDomPath
   * @param path
   * @return {*}
   * @constructor
   */
  static GetElementByPath(path) {
    const stack = path.split(' > ');

    let node = document; // start on document

    stack.forEach(n => {
      const t = n.split('::');
      node = node.querySelector(t[0]);
      if (t[1] === 'shadow' && node.shadowRoot) {
        node = node.shadowRoot;
      }
    });
    return node;
  }

  /**
   * returns the querySelectorable path of the component.
   *
   * Note: html and body are not included.
   *
   * source inspired from https://stackoverflow.com/a/31281201/2946421
   *
   * Even there is no ::shadow selector in  DOM v1, this works fine for us
   *
   * @return {string}
   * @private
   */
  static getDomPath(el) {
    const stack = [];
    let isShadow = false;
    while (el.parentNode != null) {
      // console.log(el.nodeName);
      let sibCount = 0;
      let sibIndex = 0;
      // get sibling indexes
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < el.parentNode.childNodes.length; i++) {
        const sib = el.parentNode.childNodes[i];
        if (sib.nodeName === el.nodeName) {
          if (sib === el) {
            sibIndex = sibCount;
          }
          // eslint-disable-next-line no-plusplus
          sibCount++;
        }
      }

      let nodeName = el.nodeName.toLowerCase();

      if (isShadow) {
        nodeName += '::shadow';
        isShadow = false;
      }
      if (sibCount > 1) {
        stack.unshift(`${nodeName}:nth-of-type(${sibIndex + 1})`);
      } else {
        stack.unshift(nodeName);
      }
      // eslint-disable-next-line no-param-reassign
      el = el.parentNode;
      if (el.nodeType === 11) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        isShadow = true;
        // eslint-disable-next-line no-param-reassign
        el = el.host;
      }
    }
    stack.splice(0, 1); // remove the html  element
    return stack.join(' > ');
  }
}
