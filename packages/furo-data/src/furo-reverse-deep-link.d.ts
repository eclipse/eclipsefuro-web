/**
 * Converts hateoas to queryParams, which is useful for routing with app-flow
 *
 *
 *```html
 *<furo-reverse-deep-link
 *    service="TaskService"
 *    rel="self" at-converted="--queryParams"
 *    fn-convert="--rawEntityOrCollection, --linksArray, --linkObject"
 *></furo-reverse-deep-link>
 *```
 *
 * @fires {QueryParams} converted -  Fired when input was converted.
 *
 * @summary create query param object from HATEOAS
 * @customElement
 */
export class FuroReverseDeepLink extends LitElement {
    static get properties(): {
        /**
         * Name of service
         * @type String
         */
        service: string;
        /**
         * Optional rel to convert.
         *
         * Not needed if you inject a link object.
         *
         * If you insert an entity rel self is taken. If you insert a collection, rel list is used.
         * @type String
         */
        rel: string;
    };
    static get styles(): import("lit").CSSResult;
    service: string;
    /**
     *
     * @type {{}}
     * @private
     */
    private _services;
    /**
     * converts the href of a LinkObject
     *
     * returns Error on undefined service
     *
     * @return {object} Object with query params key value
     * @param data  {object} rawEntity|rawCollection
     */
    convert(data: object): object;
    _serviceDef: any;
    rel: string;
    /**
     *
     * @param link
     * @return {{}}
     * @private
     */
    private _convert;
}
import { LitElement } from 'lit';
