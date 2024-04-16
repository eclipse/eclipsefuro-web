import {FlowEvent, QueryParams, Route} from './types'

let furoAppFlowRouter: FuroAppFlowRouter


/**
 * The job of the FuroAppFlowRouter is to update the url and manage the history state of the browser.
 * Every "view" of the app is always derived from the `Location` (URL), this ensures a proper deep link handling.
 *
 *
 * @param {RegExp} u
 */
class FuroAppFlowRouter {
  private openBlankPage: boolean = false;
  private urlSpaceRegex: string = "";
  private configObject: Map<string, Route> = new Map();

  /**
   *
   * @param config {Route[]}
   * @param urlSpaceRegex {string} - A regexp pattern that defines the set of URLs that should be considered part of this web app. Clicking on a link that matches this regular expression won't result in a full page navigation, but will instead just update the URL state in place.
   */
  constructor(config: Route[], urlSpaceRegex?: string) {
    furoAppFlowRouter = this

    config.forEach(route => {
      this.configObject.set(route.current + "::" + route.flowEvent, route)
    })

    if (urlSpaceRegex !== undefined) {
      this.urlSpaceRegex = urlSpaceRegex
    }


    window.addEventListener('keydown', ev => {
      if (ev.metaKey || ev.altKey) {
        this.openBlankPage = true
      }
    })

    window.addEventListener('keyup', ev => {
      if (ev.key === 'Meta' || ev.key === 'Control') {
        this.openBlankPage = false
      }
    })

    window.addEventListener('focus', () => {
      this.openBlankPage = false
    })

    window.addEventListener('blur', () => {
      this.openBlankPage = false
    })
  }

  trigger(flowEvent: FlowEvent) {
// should be able to handle with or without slash at the end of paths. ("/app/" or "/app")
    const currentPath = window.location.pathname
      .replace(new RegExp(this.urlSpaceRegex), '')
      .replace('/', '');
    const match = window.location.pathname.match(
      new RegExp(this.urlSpaceRegex)
    );

    // slash should be added to rewrite location
    let prefix = '/';
    if (match !== null) {
      prefix = `${match[0]}/`
    }


    const selectedFlow =
      this.configObject.get(currentPath + "::" + flowEvent.eventName) ||
      this.configObject.get(`*::${flowEvent.eventName}`);

    /**
     * this will only work in blank opened pages
     */
    if (selectedFlow && selectedFlow.target === 'WINDOW-CLOSE') {
      window.close();
    }

    if (selectedFlow !== undefined) {
      let search = '';

      if (selectedFlow.queryParamMapping) {
        // map everything
        if (selectedFlow.queryParamMapping === '*') {
          const qp = [];
          for (const k in flowEvent.queryParams) {
            qp.push(`${k}=${flowEvent.queryParams[k]}`);
          }
          if (qp.length > 0) {
            search = `?${qp.join('&')}`;
          }
        } else {
          // selective mapping
          const qp: string[] = [];
          if (flowEvent.queryParams !== undefined) {
            selectedFlow.queryParamMapping.forEach(qpMap => {
              // map flowevent.queryParams.xx to yy
              if (flowEvent.queryParams![qpMap.from]) {
                qp.push(`${qpMap.to}=${flowEvent.queryParams![qpMap.from]}`);
              }
            });
          }
          if (qp.length > 0) {
            search = `?${qp.join('&')}`;
          }
        }
      }


      if (selectedFlow.target === 'HISTORY-BACK') {
        const beforeHistoryBack = new CustomEvent('__beforeHistoryBack', {
          composed: true,
          bubbles: true,
          detail: {lock: false}
        });
        window.dispatchEvent(beforeHistoryBack);

        if (!beforeHistoryBack.detail.lock) {
          this.back();
        }
      } else {
        const sa = [];
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const k in flowEvent.queryParams) {
          sa.push(flowEvent.queryParams[k]);
        }

        if (selectedFlow.isExternalTarget ) {

          const url = document.createElement('a');
          url.href = selectedFlow.target + search;

          if (this.openBlankPage || selectedFlow.forceOpenBlank) {
            window.open(url.href );
          } else {

            const beforeReplace = new CustomEvent('__beforeReplaceState', {
              composed: true,
              bubbles: true,
              detail: {cancel: false}
            });
            window.dispatchEvent(beforeReplace);

            if (!beforeReplace.detail.cancel) {
              window.location.href = url.href;
              const customEvent = new CustomEvent('__furoLocationChanged', {
                composed: true,
                bubbles: true,
                detail: window.performance.now()
              });
              window.dispatchEvent(customEvent);
            }
          }

          return true;
        }




        const beforeReplace = new CustomEvent('__beforeReplaceState', {
          composed: true,
          bubbles: true,
          detail: {cancel: false}
        });
        window.dispatchEvent(beforeReplace);

        if (!beforeReplace.detail.cancel) {
          /**
           * if the meta key is pressed, open a blank page
           */
          if (this.openBlankPage) {
            this.openBlankPage = false;
            window.open(prefix + selectedFlow.target + search);
          } else {
            // keep the current history state, the state is set with fn-set-waypoint from furo-document-title.
            window.history.replaceState(
              window.history.state,
              '',
              prefix + selectedFlow.target + search
            );
          }
        }

        /**
         * Internal notyfication
         * @private
         */

        const customEvent = new CustomEvent('__furoLocationChanged', {
          composed: true,
          bubbles: true,
          detail: window.performance.now()
        });
        window.dispatchEvent(customEvent);
      }

      const customEvent = new CustomEvent('view-changed', {
        composed: true,
        bubbles: true,
        detail: flowEvent
      });
      window.dispatchEvent(customEvent);
      return true;
    }

    // eslint-disable-next-line no-console
    console.log('Flow event not found', flowEvent);

    window.dispatchEvent(new CustomEvent('flow-event-not-found', {
      composed: true,
      bubbles: true,
      detail: flowEvent
    }));
    return false;
  }

  /**
   * trigger a history back
   */
  // eslint-disable-next-line class-methods-use-this
  back() {
    if (window.history.length <= 1) {
      this.trigger({eventName: 'HISTORY-BACK-FALLBACK'});
    } else {
      window.history.back();
    }
  }

  /**
   * trigger a history forward
   */
  forward() {
    window.history.forward();
  }

}


class AppFlow {

  static emit(eventName: string, queryParams?: QueryParams) {
    const detail: FlowEvent = {
      eventName ,
      queryParams,
    }
    furoAppFlowRouter.trigger(detail)
  }
}

export {AppFlow, FuroAppFlowRouter}
