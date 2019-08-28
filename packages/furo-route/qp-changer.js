import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `qp-changer`
 * Updates the query params
 *
 * # work in progress
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/qp-changer.html
 * @appliesMixin FBP
 */
class QpChanger extends FBP(LitElement) {

    /**
     * @private
     * @return {Object}
     */
    static get properties() {
        return {
            /**
             * Description
             */
            myBool: {type: Boolean}
        };
    }
    setQp(newQP){

// read current qp and update incomming qp

      let newQuery = window.location.search.slice(1);
      let queryObject = {};
      if (newQuery.length > 0) {
        newQuery.split("&").forEach((qstr, i, a) => {
          let p = qstr.split("=");
          queryObject[p[0]] = p[1];
        });
      }
      for(let param in newQP){
        queryObject[param] = newQP[param];

      }

      let qp = [];
      for (let segment in queryObject) {
        if (queryObject.hasOwnProperty(segment)) {
          qp.push(segment + "=" + queryObject[segment])
        }
      }
      // notify furo location
      window.history.pushState({}, '', window.location.pathname + "?" + qp.join("&") + window.location.hash);



      let now = window.performance.now();
      let customEvent = new Event('__furoLocationChanged', {composed: true, bubbles: true});
      customEvent.detail = now;
      this.dispatchEvent(customEvent)
    }
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <p>Hej, welcome</p>
    `;
  }
}

window.customElements.define('qp-changer', QpChanger);
