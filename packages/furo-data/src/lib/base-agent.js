export class BaseAgent {
  constructor() {
    this._service = '';
    this._queryParams = {};
  }

  /**
   * Update query params
   * a qp like {"active":true} will just update the qp *active*
   * @param qp
   */
  updateQp(qp) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in qp) {
      // eslint-disable-next-line no-prototype-builtins
      if (qp.hasOwnProperty(key)) {
        this._queryParams[key] = qp[key];
      }
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
  setQp(qp) {
    if (this._queryParams) {
      // eslint-disable-next-line no-param-reassign
      this._queryParams = qp || {};
    }
  }

  /**
   * get existing params from href and append query params
   * @param link
   * @returns {{}}
   */
  getParams(link) {
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
    for (const key in this._queryParams) {
      // eslint-disable-next-line no-prototype-builtins
      if (this._queryParams.hasOwnProperty(key)) {
        params[key] = this._queryParams[key];
      }
    }

    return params;
  }

  /**
   * rebuild qp from params
   * @param params
   * @returns {[]}
   */
  rebuildQPFromParams(params) {
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
   * @param services
   * @param rel
   * @returns {string}
   */
  generateHeaderAccept(services, rel) {
    let ACCEPT;
    for (const [key, service] of Object.entries(services)) {
      if (key.toLowerCase() === rel) {
        // eslint-disable-next-line no-param-reassign
        this._specDefinedQPs = service.query;
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
  generateReq(link, qp) {
    const r = link.href.split('?');
    let req = r[0];
    if (qp.length > 0) {
      req = `${req}?${qp.join('&')}`;
    }
    return req;
  }

  /**
   * checks if hateoas object is available
   * @param rel
   * @param serviceName
   * @returns {undefined|object}
   * @private
   */
  checkServiceAndHateoasLinkError(rel, serviceName) {
    // check Service Get
    if (!this._service.services[serviceName]) {
      // eslint-disable-next-line no-console
      console.warn(`Service ${serviceName} is not specified`, this._service, this);
      return undefined;
    }

    // queue if no hts is set, queue it
    if (!this._hts) {
      // eslint-disable-next-line no-param-reassign
      this._singleElementQueue = [[rel, serviceName]];
      return undefined;
    }
    // check rel and type
    const htsFound = this._hts.find(
      link => link.rel === rel && link.service === this._service.name,
    );
    if (!htsFound) {
      // eslint-disable-next-line no-console
      console.warn(
        `No HATEOAS for rel ${rel} in service ${this._service.name} found.`,
        this._hts,
        this,
      );
      return undefined;
    }
    return htsFound;
  }
}
