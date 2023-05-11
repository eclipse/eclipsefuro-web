/**
 * ## This is a helper class for the agents
 *
 * Update query params
 * a qp like {"active":true} will just update the qp *active*
 *
 * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
 * @param caller {Object}
 * @param qp {QueryParams} Queryparam Object
 * @fires {qp} qp-changed -  Fired when query params changed
 * @fires {qp} qp-set -  Fired when query params are replaced
 * @fires {hts} xxx-rejected -  Fired when the request for a rel was rejected because the hts was not available
 *
 * TODO: convert to a base class, so the agents can extend this class
 */
export class AgentHelper {
    static updateQp(caller: any, qp: any): void;
    /**
     * Set query params
     * All existing query params are replaced by the transferred parameters
     * If the transferred object is empty or undefined, all the values will be removed!
     *
     * @param caller {Object} caller
     * @param qp {QueryParams} Queryparam Object
     */
    static setQp(caller: any, qp: any): void;
    /**
     *  get existing params from href and append query params
     * @param link {}
     * @returns {Object}
     */
    static getParams(caller: any, link: any): any;
    /**
     * rebuild qp from params
     * @param params
     * @returns {[]}
     */
    static rebuildQPFromParams(params: any): [];
    /**
     * generate accept field for header
     * @param caller
     * @param services
     * @param rel
     * @returns {string}
     */
    static generateHeaderAccept(caller: any, services: any, rel: any): string;
    /**
     * generate request url from original link and qp
     * @param link
     * @param qp
     * @returns {string}
     */
    static generateReq(link: any, qp: any): string;
    /**
     *
     * @param caller
     * @param rel
     * @param serviceName
     * @returns {undefined|object}
     * @private
     */
    private static checkServiceAndHateoasLinkError;
}
