import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `qp-changer`
 * updates the query params in the url
 *
 *
 *
 * @summary deep linking helper
 * @customElement
 * @demo demo/qp-changer.html
 * @appliesMixin FBP
 */
class FuroQpChanger extends FBP(LitElement) {

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

}

window.customElements.define('furo-qp-changer', FuroQpChanger);
