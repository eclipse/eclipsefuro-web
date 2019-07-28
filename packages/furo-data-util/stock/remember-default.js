import {PolymerElement, html} from '@polymer/polymer';
import {FBP} from "@furo/fbp";

/**
 * `remember-default`
 * Erinnert sich an einen überschriebenen Default wert und setzt diesen nach dem zweiten aufruf
 *
 * @summary remembers a overwritten default value
 * @customElement
 * @polymer
 * @mixes FBP
 */
class RememberDefault extends FBP(PolymerElement) {
  static get template() {
    // language=HTML
    return html`
      <style>
        :host {
          display: none;
        }


      </style>

    `;
  }

  static get properties() {
    return {
      /**
       * value
       * Wert der gesichert werden soll, ACHTUNG STRING
       */
      value: {
        type: String,
        notify: true,
        observer: "_checkDefault",
      },
      /**
      * identifier
      * Identifier for the default value
      */
      identifier : {
          type:String
      },
    };
  }

  _checkDefault(value){
    if(this._overwrite){
      if(window.localStorage.getItem(window.rememberDefault + this.identifier) !== value){
        window.localStorage.setItem(window.rememberDefault + this.identifier, value);
      }
    }else{
      if(value !== undefined){
        this._overwrite = true;
        let v = window.localStorage.getItem(window.rememberDefault + this.identifier);
        this.set('value',v);

      }

    }
  }
  /**
   * Resets to default value
   */
  factoryReset(){

  }
}

window.customElements.define('remember-default', RememberDefault);
