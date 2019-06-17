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
        children: [
          {
            id: 2,
            display_name: "A",
            description: "first sub",
            children: [{
              id: 4,
              display_name: "C",
              description: "sub sub",
              children: []
            }]
          }, {
            id: 3,
            display_name: "B",
            description: "second sub",
            children: [{
              id: 4,
              display_name: "D",
              description: "sub sub",
              children: []
            },{
              id: 4,
              display_name: "E",
              description: "sub sub",
              children: []
            }]
          }
        ]
      }
    }
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
      <button @-click="^^data(data)">make data</button>
    `;
  }
}

window.customElements.define('produce-data', ProduceData);
