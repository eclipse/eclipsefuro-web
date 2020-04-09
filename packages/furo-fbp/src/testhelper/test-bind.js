// eslint-disable-next-line max-classes-per-file
import { FBP } from '../fbp.js';

/**
 * `flow-bind`
 *
 *  Custom element to allow using furo-fbp's template features in a html document.
 *  It comes very handy, when you want write tests or make some demos.
 *
 *```
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
class TestBind extends FBP(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // eslint-disable-next-line wc/no-constructor-attributes
    const t = this.querySelector('template');
    this.template = t.content;
    const elem = document.createElement('empty-test-fbp-node');
    elem.attachShadow({ mode: 'open' });
    elem.shadowRoot.appendChild(this.template.cloneNode(true));
    elem._appendFBP(elem.shadowRoot);
    this._host = elem;
    this.parentNode.appendChild(elem.shadowRoot);
  }
}

window.customElements.define('test-bind', TestBind);

class EmptyTestFBPNode extends FBP(HTMLElement) {}
window.customElements.define('empty-test-fbp-node', EmptyTestFBPNode);
