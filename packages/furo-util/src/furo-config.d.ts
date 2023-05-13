/**
 * `furo-config`
 *
 *  Access config data
 *
 *
 * ```html
 * <!-- set with config-loader -->
 * <furo-config-loader
 *     section="views"
 *     src="/viewconfig.json"
 *     ></furo-config>
 *
 *
 * <!-- consume a config -->
 * <furo-config
 *     section="views" at-config-updated="--conf"
 *     ></furo-config>
 *
 * <!-- consume a sub path of a config section -->
 * <furo-config
 *     section="views.subset.deep" at-config-updated="--deepconf"
 *     ></furo-config>
 * ```
 *
 * @fires {config.section} config-updated - Fired when section changed
 * @summary config access
 * @customElement
 */
export class FuroConfig extends LitElement {
    /**
     * @private
     * @return {Object}
     */
    private static get properties();
    static get styles(): import("lit").CSSResult;
    /**
     * The current section of the config, which was defined by `section`.
     */
    config: typeof Config;
    set section(arg: any);
}
import { LitElement } from "lit/node_modules/lit-element/lit-element";
import { Config } from "./lib/Config.js";
