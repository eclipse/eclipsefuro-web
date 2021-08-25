// eslint-disable-next-line import/named
import { FormInt32 } from './form-int32.js';

export class FormDouble extends FormInt32 {}

window.customElements.define('form-double', FormDouble);
