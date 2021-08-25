// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataMoneyInput } from '@furo/ui5/src/furo-ui5-data-money-input.js';

/**
 * `celledit-google-type-money` is a `celledit` context renderer.
 *
 * It uses furo-ui5-data-money-input as the renderer
 *
 * @summary celledit renderer for google.type.Money
 * @customElement celledit-google-type-money
 */
class CelleditGoogleTypeMoney extends FuroUi5DataMoneyInput {}

window.customElements.define('celledit-google-type-money', CelleditGoogleTypeMoney);
