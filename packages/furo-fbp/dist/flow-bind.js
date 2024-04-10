import { FBP } from './fbp.js';
import './empty-fbp-node.js';
/**
 * `flow-bind`
 *
 *  Custom element to allow using furo-fbp's template features in a html document.
 *  It comes very handy, when you want write tests or make some demos.
 *
 *```html
 *<test-fixture id="basic">
 *   <template>
 *    <flow-bind id="elem">
 *      <template>
 *        <div id="sender" @-click="--data-received">sender</div>
 *        <div id="receiver" ƒ-render="--data-received">receiver</div>
 *      </template>
 *    </flow-bind>
 *   </template>
 *</test-fixture>
 *```
 *
 * @customElement
 * @mixes FBP
 * @summary Custom element to allow using furo-fbp's template features in a html document.
 */
export class FlowBind extends FBP(HTMLElement) {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // eslint-disable-next-line wc/no-constructor-attributes
        const t = this.querySelector('template');
        /**
         * @private
         */
        this.template = t.content;
        const elem = document.createElement('empty-fbp-node');
        elem.attachShadow({ mode: 'open' });
        elem.shadowRoot.appendChild(this.template.cloneNode(true));
        elem._appendFBP(elem.shadowRoot);
        /**
         *
         * @type {HTMLElement}
         * @private
         */
        this._host = elem;
        this.parentNode.appendChild(elem.shadowRoot);
    }
}
window.customElements.define('flow-bind', FlowBind);
//# sourceMappingURL=flow-bind.js.map