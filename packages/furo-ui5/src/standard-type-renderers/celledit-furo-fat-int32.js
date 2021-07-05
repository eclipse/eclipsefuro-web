import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-int32` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Int32
 * @customElement celledit-furo-fat-int32
 */

export class CelleditFuroFatInt32 extends CelleditInt32 {}

window.customElements.define('celledit-furo-fat-int32', CelleditFuroFatInt32);
