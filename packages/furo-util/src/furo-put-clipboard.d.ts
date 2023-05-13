/**
 * `furo-put-clipboard`
 *  put content to the clipboard of the OS.
 *
 *```html
 *
 * <furo-put-clipboard
 *     json
 *     fn-trigger="--data" at-content-put="--contentInClipboard"
 *     ></furo-put-clipboard>
 *
 *```
 *
 * @fires {*} content-put - Fired when content is written to clipboard
 *
 * @summary write content to clipboard
 * @customElement
 */
export class FuroPutClipboard extends LitElement {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    /**
     * Set data that you want to put to clipboard.
     *
     * @param  {Object} data - Serializable data to put
     */
    setData(data: any): void;
    data: any;
    /**
     * Write data to the clipboard
     *
     * If you trigger without data, the data which sas set with `setData` will be written to the clipboard.
     *
     * @param {Object|null} data Serializable data
     */
    trigger(data: any | null): void;
}
import { LitElement } from 'lit';
