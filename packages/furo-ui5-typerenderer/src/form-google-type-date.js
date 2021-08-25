// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataDatePickerLabeled } from '@furo/ui5/src/furo-ui5-data-date-picker-labeled.js';

/**
 * `form-google-type-date` is a `form` context renderer.
 *
 * It uses furo-ui5-data-date-picker as the renderer
 *
 * @summary form renderer for google.type.Date
 * @customElement form-google-type-date
 */
class FormGoogleTypeDate extends FuroUi5DataDatePickerLabeled {}

window.customElements.define('form-google-type-date', FormGoogleTypeDate);
