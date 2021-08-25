// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-double` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-number-input as the renderer
 *
 * @summary celledit renderer for double
 * @customElement celledit-double
 */
export class CelleditDouble extends CelleditInt32 {}

window.customElements.define('celledit-double', CelleditDouble);
