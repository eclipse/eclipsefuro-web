export class AgentHelper {
  /**
   * Update query params
   * a qp like {"active":true} will just update the qp *active*
   *
   * If the current value of the qp is not the same like the injected value, a qp-changed event will be fired
   * @param caller
   * @param qp
   * @fires {qp} qp-changed -  Fired when query params changed
   * @fires {qp} qp-set -  Fired when query params are replaced
   * @fires {hts} xxx-rejected -  Fired when the request for a rel was rejected because the hts was not available

   */
  static updateQp(caller, qp) {
    let qpChanged = false;
    // eslint-disable-next-line no-restricted-syntax
    for (const key in qp) {
      // eslint-disable-next-line no-prototype-builtins
      if (qp.hasOwnProperty(key)) {
        if (caller._queryParams[key] !== qp[key]) {
          qpChanged = true;
        }
        // eslint-disable-next-line no-param-reassign
        caller._queryParams[key] = qp[key];
      }
    }

    if (qpChanged) {

      const customEvent = new Event('qp-changed', { composed: true, bubbles: true });
      customEvent.detail = caller._queryParams;
      caller.dispatchEvent(customEvent);
    }
  }

  /**
   * Set query params
   * All existing query params are replaced by the transferred parameters
   * If the transferred object is empty or undefined, all the values will be removed!
   *
   * @param caller
   * @param qp
   */
  static setQp(caller, qp) {
    if (caller && caller._queryParams) {
      // eslint-disable-next-line no-param-reassign
      caller._queryParams = qp || {};


      const customEvent = new Event('qp-changed', { composed: true, bubbles: true });
      customEvent.detail = caller._queryParams;
      caller.dispatchEvent(customEvent);
    }
  }

  /**
   *  get existing params from href and append query params
   * @param link
   * @returns {{}}
   */
  static getParams(caller, link) {
    const params = {};
    const r = link.href.split('?');
    // add existing params from href
    if (r[1]) {
      r[1].split('&').forEach(p => {
        const s = p.split('=');
        // eslint-disable-next-line prefer-destructuring
        params[s[0]] = s[1];
      });
    }

    /**
     * Append query params
     */
    // eslint-disable-next-line no-restricted-syntax
    for (const key in caller._queryParams) {
      // eslint-disable-next-line no-prototype-builtins
      if (caller._queryParams.hasOwnProperty(key)) {
        params[key] = caller._queryParams[key];
      }
    }

    return params;
  }

  /**
   * rebuild qp from params
   * @param params
   * @returns {[]}
   */
  static rebuildQPFromParams(params) {
    // rebuild req
    const qp = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in params) {
      // eslint-disable-next-line no-prototype-builtins
      if (params.hasOwnProperty(key)) {
        qp.push(`${key}=${params[key]}`);
      }
    }
    return qp;
  }

  /**
   * generate accept field for header
   * @param caller
   * @param services
   * @param rel
   * @returns {string}
   */
  static generateHeaderAccept(caller, services, rel) {
    let ACCEPT;
    for (const [key, service] of Object.entries(services)) {
      if (key.toLowerCase() === rel) {
        // eslint-disable-next-line no-param-reassign
        caller._specDefinedQPs = service.query;
        if (service.data.response) {
          ACCEPT = `application/${service.data.response}+json, application/json;q=0.9`;
        }
      }
    }
    return ACCEPT;
  }

  /**
   * generate request url from original link and qp
   * @param link
   * @param qp
   * @returns {string}
   */
  static generateReq(link, qp) {
    const r = link.href.split('?');
    let req = r[0];
    if (qp.length > 0) {
      req = `${req}?${qp.join('&')}`;
    }
    return req;
  }

  /**
   *
   * @param caller
   * @param rel
   * @param serviceName
   * @returns {undefined|object}
   * @private
   */
  static checkServiceAndHateoasLinkError(caller, rel, serviceName) {
    // check Service Get
    if (!caller._service.services[serviceName]) {
      // eslint-disable-next-line no-console
      console.warn(`Service ${serviceName} is not specified`, caller._service, caller);
      return undefined;
    }

    // queue if no hts is set, queue it
    if (!caller._hts) {
      // eslint-disable-next-line no-param-reassign
      caller._singleElementQueue = [[rel, serviceName]];
      return undefined;
    }
    // check rel and type
    const htsFound = caller._hts.find(
      link => link.rel === rel && link.service === caller._service.name,
    );
    if (!htsFound) {
      // eslint-disable-next-line no-console
      console.warn(
        `No HATEOAS for rel ${rel} in service ${caller._service.name} found.`,
        caller._hts,
        caller,
      );
      const customEvent = new Event(`${rel}-rejected`, { composed: true, bubbles: true });
      customEvent.detail = caller._hts;
      caller.dispatchEvent(customEvent);
      return undefined;
    }
    return htsFound;
  }
}
