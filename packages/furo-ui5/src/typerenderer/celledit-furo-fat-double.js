// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-double` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Double
 * @customElement celledit-furo-fat-double
 */
class CelleditFuroFatDouble extends CelleditInt32 {}

window.customElements.define('celledit-furo-fat-double', CelleditFuroFatDouble);
