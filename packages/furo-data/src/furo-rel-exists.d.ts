/**
 * `furo-rel-exists`
 * Checks if a hateoas relation exists in a given hateaos Links array.
 *
 *```html
 * <furo-rel-exists rel="update" service="person.Personservice" fn-inject="--HTS-array"></furo-rel-exists>
 * ```
 *
 *
 * @fires {Object Hateoas Link} furo-rel-exists -  Fired when rel exists in `linkArray`.
 * @fires {void} rel-dont-exist -  Fired when rel does not exists in `linkArray`.
 *
 * @summary checks for a specific rel
 * @customElement
 */
export class FuroRelExists extends LitElement {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    /**
     * Inject a HTS Link Array to receive a `rel-exist` or a `rel-dont-exist` event.
     *
     * inject returns true for existing links and false for non existing links.
     * TODO: implement bind data too
     * TODO: emit a event with bool which is triggered on any change of the hts array or binded data
     *
     *
     * @param {[furo.Link]} linkArray - Array of furo links
     * @return {boolean}
     */
    inject(linkArray: [furo.Link]): boolean;
    attributeChangedCallback(name: any, old: any, value: any): void;
    rel: any;
    service: any;
}
import { LitElement } from 'lit';
