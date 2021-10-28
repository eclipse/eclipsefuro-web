// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataDatePicker } from '@furo/ui5/src/furo-ui5-data-date-picker.js';

/**
 * `celledit-google-type-date` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-date-picker as the renderer
 *
 * @summary celledit renderer for google.type.Date
 * @customElement celledit-google-type-date
 */
class CelleditGoogleTypeDate extends FuroUi5DataDatePicker {
  constructor() {
    super();
    this.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
    });
  }
}

window.customElements.define('celledit-google-type-date', CelleditGoogleTypeDate);
