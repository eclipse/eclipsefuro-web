// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataTimePickerLabeled } from '@furo/ui5/src/furo-ui5-data-time-picker-labeled.js';

/**
 * `form-google-type-timeofday` is a `form` context renderer.
 *
 * It uses furo-ui5-data-time-picker as the renderer
 *
 * @summary form renderer for google.type.TimeOfDay
 * @customElement form-google-type-timeofday
 */
class FormGoogleTypeTimeofday extends FuroUi5DataTimePickerLabeled {}

window.customElements.define('form-google-type-timeofday', FormGoogleTypeTimeofday);
