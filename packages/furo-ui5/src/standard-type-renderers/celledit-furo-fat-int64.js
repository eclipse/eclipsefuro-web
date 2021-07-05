import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-int64` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Int64
 * @customElement celledit-furo-fat-int64
 */
export class CelleditFuroFatInt64 extends CelleditInt32 {}

window.customElements.define('celledit-furo-fat-int64', CelleditFuroFatInt64);
