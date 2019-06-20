import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

/**
 * `produce-data`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/produce-data.html
 * @appliesMixin FBP
 */
class ProduceData extends FBP(LitElement) {

  constructor() {
    super();
    this.data = {
      data: {
        id: 1,
        display_name: "root",
        description: "root",
        open:true,
        children: [
          {
            id: 2,
            display_name: "A",
            description: "first with veery big title sub",
            children: [{
              id: 4,
              display_name: "C",
              description: "sub sirst with veery big titleub",
              children: []
            }]
          }, {
            id: 3,
            display_name: "B",
            description: "second sirst with veery big titleub",
            open:true,
            children: [{
              id: 4,
              display_name: "D",
              description: "sub suirst with veery big titleb",
              children: [{
                id: 4,
                display_name: "E",
                description: "sub suirst with veery big titleb",
                children: [{
                  id: 4,
                  display_name: "E",
                  description: "sub sub",
                  children: [{
                    id: 4,
                    display_name: "E",
                    description: "sub sub",
                    children: [{
                      id: 4,
                      display_name: "E",
                      description: "sub sub",
                      children: []
                    }]
                  }]
                }]
              }]
            },{
              id: 4,
              display_name: "E",
              description: "sub sub",
              children: []
            }]
          }
        ]
      }
    };


    this.addEventListener("click", this.produce)
  }

  __fbpReady(){
    super.__fbpReady();
    if(this.auto){
      this.produce();
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      auto: {type: Boolean}
    };
  }


  produce(){
    /**
    * @event data
    * Fired when
    * detail payload:
    */
    let customEvent = new Event('data', {composed:true, bubbles: true});
    customEvent.detail = this.data;
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
   */
  render() {
    // language=HTML
    return html`
      <button>make data</button>
    `;
  }
}

window.customElements.define('produce-data', ProduceData);
