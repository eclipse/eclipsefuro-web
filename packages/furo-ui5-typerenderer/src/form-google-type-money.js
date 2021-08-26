// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataMoneyInputLabeled } from '@furo/ui5/src/furo-ui5-data-money-input-labeled.js';

/**
 * `form-google-type-money` is a `form` context renderer.
 *
 * It uses furo-ui5-data-money-input as the renderer
 *
 * @summary form renderer for google.type.Money
 * @customElement form-google-type-money
 */
class FormGoogleTypeMoney extends FuroUi5DataMoneyInputLabeled {}

window.customElements.define('form-google-type-money', FormGoogleTypeMoney);
