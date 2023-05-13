/**
 * `furo-markdown`
 *  Renders given md data with parseMarkdown or loads a md file with `mdsrc="source.md"`
 *
 *
 * @summary renders markdown data
 * @customElement
 * @appliesMixin FBP
 */
export class FuroMarkdown extends LitElement {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    markdownRendered: any;
    set mdsrc(arg: any);
    set markdown(arg: any);
    /**
     * fetch markdown from a url or path
     * @param src
     * @return {Promise<string | never>}
     */
    fetchMd(src: any): Promise<string | never>;
    /**
     * Parse markdown string to html content
     * @param markdown
     */
    parseMarkdown(markdown: any): void;
    /**
     * parse markdown string to html content
     * @param markdown
     * @return {TemplateResult | TemplateResult}
     * @private
     */
    private _parseMarkdown;
    updated(): void;
    render(): import("lit").TemplateResult<1>;
}
import { LitElement } from 'lit';
