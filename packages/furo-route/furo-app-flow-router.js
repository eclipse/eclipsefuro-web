import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-app-flow-router`
 *
 * Use this component with app-flow and furo-pages to implement application flow
 *
 *
 *    <app-flow-router config="[[conf]]" ƒ-trigger="--flowEvent" ƒ-back="--wire" ƒ-forward="--wire"></app-flow-router>
 *
 *
 *
 * @customElement
 * @appliesMixin FBP
 */
class FuroAppFlowRouter extends FBP(LitElement) {

  constructor() {
    super();
    this.style.display = "none";
    /**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /app/ do:
     *     url-space-regex="^/app/"
     *
     * @type {string|RegExp}
     */
    this.urlSpaceRegex = this.getAttribute("url-space-regex") || "/";

  }

  /**
   * trigger a history back
   */
  back() {

    window.history.back();

  }

  /**
   * trigger a history forward
   */
  forward() {
    window.history.forward();
  }

  static get properties() {
    return {
      /**
       *Configuration Array
       *
       * | current   | flow-event-name      | target      | [mapping]          |
       * |:----------|:---------------------|:------------|:-------------------|
       * | view-main | form-complete        | detail-view | from => to         |
       * | *         | menu-settings-click  | settings    |                    |
       * | *         | all-fields-req       | all-qps     |        *           |
       * | *         | some-fields-req      | some-qps    | a=>b,x=>id,c=>item |
       *
       *
       * ```json
       *  [
       *    ['view-main', 'button-tap', 'detail-view',  'task => id],
       *    ["*", "search", "EXTERNAL_LINK: https://google.com/"],
       *    ["*", "searchInNewWindow", "EXTERNAL_LINK_BLANK: https://google.com/"]
       *  ]
       *  ```
       *
       *
       *  if the current view is view-main and the flow-event-name is 'form-complete', the view switches to detail-view and data.from is mapped to "to".
       *
       *  Special configurations:
       *
       *  - Set a "*" to map all data 1:1 to the url.
       *
       *  - You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
       *  - if you want to link to a target outside your app add **EXTERNAL_LINK:** followed by the link
       */
      config: {type: Array}
    };
  }


  /**
   * Trigger the router
   * @param flowEvent
   * @return {boolean}
   */
  trigger(flowEvent) {

    let currentPath = window.location.pathname.replace(new RegExp(this.urlSpaceRegex), "");
    let match = window.location.pathname.match(new RegExp(this.urlSpaceRegex));
    let prefix = match[0] || "/";
    let selection = (this._configObject[currentPath + flowEvent.event] || this._configObject["*" + flowEvent.event]);
    if (selection) {


      let search = "";

      if (selection.mapping) {
        // map everything
        if (selection.mapping === "*") {
          let sa = [];
          for (let k in flowEvent.data) {
            sa.push(k + "=" + flowEvent.data[k]);
          }

          if (sa.length > 0) {
            search = "?" + sa.join("&");
          }
        } else {
          // selective mapping
          let mappings = selection.mapping.split(',').map(function (cnf) {
            return cnf.split('=>').map(function (c) {
              return c.trim();
            })
          });
          let sa = [];
          mappings.forEach((qpMap) => {
            // map flowevent.data.xx to yy
            if (flowEvent.data[qpMap[0]]) {
              sa.push(qpMap[1] + "=" + flowEvent.data[qpMap[0]]);
            }
          });
          if (sa.length > 0) {
            search = "?" + sa.join("&");
          }

        }

      }


      if (selection.target === "HISTORY-BACK") {
        this.back();
      } else {
        if (selection.target.startsWith("EXTERNAL_LINK:")) {
          window.location.href = selection.target.substr(14).trim();
        } else if (selection.target.startsWith("EXTERNAL_LINK_BLANK:")) {
          window.open(selection.target.substr(20).trim());
        } else {
          window.history.pushState({}, '', prefix + selection.target + search);
        }

        /**
         * Internal notyfication
         * @private
         */

        let now = window.performance.now();
        let customEvent = new Event('__furoLocationChanged', {composed: true, bubbles: true});
        customEvent.detail = now;
        this.dispatchEvent(customEvent)
      }

      /**
       * @event view-changed
       * Fired when page was changed
       * detail payload: flowEvent
       */
      let customEvent = new Event('view-changed', {composed: true, bubbles: true});
      customEvent.detail = flowEvent;
      this.dispatchEvent(customEvent);
      return true;
    }

    /**
     * @event event-not-found
     * Fired when view not
     * detail payload: flowEvent
     */
    let customEvent = new Event('event-not-found', {composed: true, bubbles: true});
    customEvent.detail = flowEvent;
    this.dispatchEvent(customEvent);
    return false;
  }

  /**
   * build internal config for faster access
   */
  set config(configArray) {
    this._configObject = {};
    let self = this;
    // build config object for faster checks
    configArray.forEach((config) => {
      this._configObject[config[0] + config[1]] = {target: config[2], mapping: config[3]};
    });
  };

}

window.customElements.define('furo-app-flow-router', FuroAppFlowRouter);
