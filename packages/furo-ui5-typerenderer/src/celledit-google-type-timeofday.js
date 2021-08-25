// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataTimePicker } from '@furo/ui5/src/furo-ui5-data-time-picker.js';

/**
 * `celledit-google-type-timeofday` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-time-picker as the renderer
 *
 * @summary celledit renderer for google.type.TimeOfDay
 * @customElement celledit-google-type-timeofday
 */
class CelleditGoogleTypeTimeofday extends FuroUi5DataTimePicker {}

window.customElements.define('celledit-google-type-timeofday', CelleditGoogleTypeTimeofday);
