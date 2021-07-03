// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

export class CelleditDouble extends CelleditInt32 {}

window.customElements.define('celledit-double', CelleditDouble);
