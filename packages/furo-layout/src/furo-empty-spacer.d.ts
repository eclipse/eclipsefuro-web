/**
 * `furo-empty-spacer` Takes the place in furo-horizontal-flex or a furo-vertical-flex.
 *
 *<furo-demo-snippet source>
 * <template>
 *  <furo-horizontal-flex>
 *   <div>small</div>
 *   <!-- A furo-empty-spacer will fill the available space. -->
 *   <furo-empty-spacer style="border: 1px dashed lightgray;"></furo-empty-spacer>
 *   <div>small</div>
 *  </furo-horizontal-flex>
 * </template>
 *</furo-demo-snippet>
 *
 * @summary fill the space in a furo-xxxx-flex
 * @customElement
 * @demo demo-furo-vertical-flex With vertical flex
 * @demo demo-furo-horizontal-flex With horizontal flex
 * @appliesMixin FBP
 */
export class FuroEmptySpacer extends LitElement {
    static get properties(): {
        /**
         * Attribute flex for furo-horizontal-flex and furo-vertical-flex
         *
         * @type Boolean
         */
        flex: boolean;
        /**
         * Set to true to hide the spacer
         *
         * @type Boolean
         */
        hidden: boolean;
    };
    /**
     *
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    flex: boolean;
    /**
     * @private
     * @returns {*}
     */
    private render;
}
import { LitElement } from 'lit';
