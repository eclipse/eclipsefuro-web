// eslint-disable-next-line max-classes-per-file
import { FBP } from './fbp.js';
/**
 * DOMFBP allows you to append FBP to any dom element.
 *
 * **Usage:**
 *
 * ```html
 * <!DOCTYPE html>
 * <html lang="en">
 * <head>
 *   <meta charset="UTF-8">
 *   <title>Title</title>
 *   <script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@2.3.0/dist/furo-fbp.js"></script>
 *   <script>
 *     import("https://cdn.jsdelivr.net/npm/@furo/precompiled@2.3.0/dist/DOMFBP.js").then(() => {
 *       // activate FBP on body
 *       const fbphandle = new DOMFBP(document.body)
 *       // enable tracing
 *       fbphandle._FBPTraceWires();
 *     })
 *   </script>
 * </head>
 * <body>
 * <button at-click="--buttonClicked" fn-remove="--buttonClicked">remove me</button>
 * </body>
 * </html>
 * ```
 *
 * ```js
 * import {DOMFBP} from '@furo/fbp/src/DOMFBP.js';
 *
 * // append fbp to the body
 * new DOMFBP(document.body);
 *
 *
 * ```
 *
 *
 */
export class DOMFBP extends FBP(class DUMMY {
}) {
    constructor(domNode) {
        super();
        this._appendFBP(domNode);
    }
}
//# sourceMappingURL=DOMFBP.js.map