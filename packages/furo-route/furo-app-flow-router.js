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
       * | view-main | form-complete        | detail-view | element => aufgabe |
       * | *         | menu-settings-click  | settings    |                    |
       *
       *
       *
       *  [['view-main', 'button-tap', 'detail-view',  'task => id]]
       *  if current is set to view-main and the app-flow-event with name 'button-tap' is triggered, current is set to detail-view and data.task from app-flow is mapped to data.id.
       *
       *  Special configurations:
       *
       *
       *  You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
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
      let sa = [];
      for (let k in  flowEvent.data) {
        sa.push(k + "=" + flowEvent.data[k]);
      }
      // todo: implement mapper
      if (sa.length > 0) {
        search = "?" + sa.join("&");
      }
      if (selection.target === "HISTORY-BACK") {
        this.back();
      } else {
        window.history.pushState({}, '', prefix + selection.target + search);
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
