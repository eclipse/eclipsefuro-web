import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-uint32` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Uint32
 * @customElement celledit-furo-fat-uint32
 */
class CelleditFuroFatUint32 extends CelleditInt32 {}

window.customElements.define('celledit-furo-fat-uint32', CelleditFuroFatUint32);
