import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-catalog.js';
import {RequestAgentApi}  from '../src/lib/request-agent-api.js';
import {DataModelApi} from '../src/lib/data-model-api.js';

/**
 * `demo-use-of-data-js-modules`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoUseOfDataJsModules extends FBP(LitElement) {

  constructor() {
    super();

    /**
     * create a data model of a specific type
     * @type {DataModelApi}
     */
    this.dataModelApi = new DataModelApi();
    this.dataModelApi.setType('person.PersonEntity').then(()=>{
      const TEST_DATA_PERSON = {data: {display_name: 'no data'}}
      this.dataModelApi.injectRaw(TEST_DATA_PERSON).then(()=>{
        //
      })
    });

    /**
     * create a request agent for a specific service
     * set HATEOAS information
     * trigger load
     * in a successful case inject the response into the data model
     * @type {RequestAgentApi}
     */
    this.requestAgentApi = new RequestAgentApi();

  }

  async firstUpdated() {

    await new Promise((r) => setTimeout(r, 0));
    const HTS_PERSON = [
      {
        "href": "/mockdata/persons/1/get.json",
        "method": "GET",
        "rel": "self",
        "type": "person.PersonEntity",
        "service": "PersonService"
      }
    ];

    const BTN = this.shadowRoot.querySelector('furo-button');
    if (BTN) {
      BTN.addEventListener('click', ()=>{

        this.requestAgentApi.setService('PersonService');
        this.requestAgentApi.htsIn(HTS_PERSON).then(() => {
          this.requestAgentApi.load()
            .then((response)=>{
              this.dataModelApi.injectRaw(response).then((d)=>{
                // eslint-disable-next-line no-console
                console.log(d);
                this.requestUpdate();
              })
            })
            .catch((e)=>{
              // eslint-disable-next-line no-console
              console.log(e);
            })
        });


      })
    }
  }


  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DemoUseOfDataJsModules') ||
      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <div>
          <h2>Demo demo-use-of-data-js-modules</h2>
          <p>Eclipse Furo Web relies mainly on the web component standard. The JS data modules enable seamless integration of any front-end technology without using web components.</p>
          <ul>
            <li>data-model-api.js</li>
            <li>request-agent-api.js</li>
            <li>communication-api.js</li>
          </ul>

        </div>
        <h2>${this.dataModelApi.data.data.display_name}</h2>
        <p>${this.dataModelApi.data.data.first_name} ${this.dataModelApi.data.data.name}<br>
        ${this.dataModelApi.data.data.phone_nr}</p>
        <furo-button primary outline>Request with RequestAgentApi</furo-button>

      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('demo-use-of-data-js-modules', DemoUseOfDataJsModules);
