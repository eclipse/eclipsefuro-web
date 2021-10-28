// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-float` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for float
 * @customElement celledit-float
 */
export class CelleditFloat extends CelleditInt32 {}

window.customElements.define('celledit-float', CelleditFloat);
