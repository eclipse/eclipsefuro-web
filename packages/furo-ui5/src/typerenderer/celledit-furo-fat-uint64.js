// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-uint64` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Uint64
 * @customElement celledit-furo-fat-uint64
 */

class CelleditFuroFatUint64 extends CelleditInt32 {}

window.customElements.define('celledit-furo-fat-uint64', CelleditFuroFatUint64);
