import { DisplayFuroIntegerproperty } from './display-furo-integerproperty.js';

/**
 * `display-furo-numberproperty`
 * The display-furo-numberrproperty component displays a FieldNode of type `furo.Numberproperty` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-numberproperty Basic Usage
 */
export class DisplayFuroNumberproperty extends DisplayFuroIntegerproperty {}

window.customElements.define('display-furo-numberproperty', DisplayFuroNumberproperty);
