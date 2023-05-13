/**
 * `furo-horizontal-flex`
 *
 * With this component, any elements can be aligned horizontally. Similar to css flex.
 * The attribute "flex" must be set for growing elements.
 * The component takes up 100% of the space.
 *
 * ```html
 * <furo-horizontal-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-horizontal-flex>
 * ```
 * @slot {HTMLElement [0..n]} - default slot to add content.
 *
 * @cssprop {N/A} [--furo-horizontal-flex-space=0.5rem] - default padding (space)
 * @cssprop {N/A} [--furo-horizontal-flex-bigspace=3rem] - big padding (bigspace)
 *
 *  Tags: layout
 *
 * @summary horizontal alignment
 * @customElement
 * @demo demo-furo-horizontal-flex Basic usage
 * @appliesMixin FBP
 */
export class FuroHorizontalFlex extends LitElement {
    /**
     *
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * @private
     * @returns {TemplateResult}
     */
    private render;
}
import { LitElement } from 'lit';
