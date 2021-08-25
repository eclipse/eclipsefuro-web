// eslint-disable-next-line import/named
import { FormInt32 } from './form-int32.js';

export class FormFloat extends FormInt32 {}

window.customElements.define('form-float', FormFloat);
