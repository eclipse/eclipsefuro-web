// empty fbp element handler to have fbp scope
import { FBP } from './fbp.js';

export class EmptyFBPNode extends FBP(HTMLElement) {}
window.customElements.define('empty-fbp-node', EmptyFBPNode);
