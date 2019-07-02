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
        link:{
          "rel": "self",
          "method": "GET",
          "href": "./api/v1/tasks/12.json",
          "type": "vnd.com.acme.task"
        },
        children: [
          {
            id: 2,
            display_name: "A",
            description: "first with veery big title sub",
            link:{
              "rel": "self",
              "method": "GET",
              "href": "./api/v1/tasks/A.json",
              "type": "vnd.com.acme.task"
            },
            children: [{
              id: 3,
              display_name: "C",
              description: "sub sirst with veery big titleub",
              link:{
                "rel": "self",
                "method": "GET",
                "href": "./api/v1/tasks/c4.json",
                "type": "vnd.com.acme.task"
              },
              children: []
            }]
          }, {
            id: 4,
            display_name: "B",
            description: "second sirst with veery big titleub",
            open:true,
            link:{
              "rel": "self",
              "method": "GET",
              "href": "./api/v1/tasks/12.json",
              "type": "vnd.com.acme.task-b"
            },
            children: [{
              id: 5,
              display_name: "D",
              description: "sub suirst with veery big titleb",
              link:{
                "rel": "self",
                "method": "GET",
                "href": "./api/v1/tasks/12.json",
                "type": "vnd.com.acme.task"
              },
              children: [{
                id: 6,
                display_name: "E",
                description: "sub suirst with veery big titleb",
                link:{
                  "rel": "self",
                  "method": "GET",
                  "href": "./api/v1/tasks/12.json",
                  "type": "vnd.com.acme.task"
                },
                children: [{
                  id: 7,
                  display_name: "E",
                  description: "sub sub",
                  link:{
                    "rel": "self",
                    "method": "GET",
                    "href": "./api/v1/tasks/12.json",
                    "type": "vnd.com.acme.task"
                  },
                  children: [{
                    id: 8,
                    display_name: "E",
                    description: "sub sub",
                    link:{
                      "rel": "self",
                      "method": "GET",
                      "href": "./api/v1/tasks/12.json",
                      "type": "vnd.com.acme.task"
                    },
                    children: [{
                      id: 455,
                      display_name: "E",
                      description: "Berlin",
                      children: []
                    }]
                  }]
                }]
              }]
            },{
              id: 234,
              display_name: "E",
              description: "sub unknown type",
              link:{
                "rel": "self",
                "method": "GET",
                "href": "./api/v1/tasks/12.json",
                "type": "vnd.com.acme.unknown"
              },
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
