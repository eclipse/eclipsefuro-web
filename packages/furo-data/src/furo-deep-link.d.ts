/**
 * `furo-deep-link`
 * Resolve deep links HATEOAS based on the query params and the selected service.
 *
 * ```html
 * <furo-deep-link
 *  service="TaskService"
 *  fn-qp-in="--pageQueryChanged(*.query)" at-hts-out="--serviceHTS">
 *  </furo-deep-link>
 * ```
 * *Deeplink inside of a furo-page*
 *
 *
 * The services must be registered in the Env:
 *
 * ```html
 * import {Services,Types} from "./furo-spec.js"
 * Init.registerApiServices(Services);
 * Init.registerApiTypes(Types);
 * ```
 *
 *
 * Usually this is done in your src/configs/init.js
 *
 *
 * @fires {[]HTSLinks} hts-out Fired when hateoas is available
 *
 *
 * @summary Resolve deep links HATEOAS based on  query params
 * @customElement
 * @appliesMixin FBP
 */
export class FuroDeepLink extends LitElement {
    static get properties(): {
        /**
         * Name of the service
         * @type String
         */
        service: string;
    };
    static get styles(): import("lit").CSSResult;
    /**
     *
     * @type {{}}
     * @private
     */
    private _servicedefinitions;
    /**
     *
     * @type {{}}
     * @private
     */
    private _qp;
    /**
     *
     * @param qp
     * @param service
     * @private
     */
    private _buildHTS;
    _hts: any[];
    /**
     * Furo-deep-link consumes a object literal with key value pairs.
     *
     * This can come from the `*.query` part of an event from furo-location.
     *
     * Or from a furo-pages wire.
     *
     * Relevant wires from furo-pages:
     * - --pageQueryChanged(*.query)
     * - --pageActivated(*.query)
     * - --pageHashChanged(*.query)
     *
     * @param queryParams
     */
    qpIn(queryParams: any): void;
    /**
     * Evaluates hts. Use qpIn(qp) if you have a qp object in your event.detail
     * This method have no effect as long _qp is not set.
     */
    trigger(): void;
    /**
     * Sets the service by wire
     *
     * @param serviceName
     */
    setService(serviceName: any): void;
    /**
     * Set the service name like `TaskService`.
     *
     * Services must be registered before.
     *
     * @param service
     */
    set service(arg: any);
    _requestedService: any;
    _service: any;
}
import { LitElement } from 'lit';
