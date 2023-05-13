/**
 * `furo-vertical-flex`
 *
 * With this component, any elements can be aligned vertically. Similar to css flex.
 * The attribute "flex" must be set for growing elements.
 * The component takes up 100% of the space
 *
 *
 * ```html
 * <furo-vertical-flex>
 *   <div>small</div>
 *   <div flex>full width</div>
 *   <div>small</div>
 * </furo-vertical-flex>
 * ```
 *
 *  Tags: layout
 *
 * @slot {HTMLElement [0..n]} - default slot to add content.
 * @summary vertical alignment
 * @customElement
 * @demo demo-furo-vertical-flex Basic usage
 * @appliesMixin FBP
 */
export class FuroVerticalFlex extends LitElement {
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
