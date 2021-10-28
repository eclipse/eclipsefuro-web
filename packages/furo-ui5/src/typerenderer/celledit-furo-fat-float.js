import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-float` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Float
 * @customElement celledit-furo-fat-float
 */
class CelleditFuroFatFloat extends CelleditInt32 {}

window.customElements.define('celledit-furo-fat-float', CelleditFuroFatFloat);
