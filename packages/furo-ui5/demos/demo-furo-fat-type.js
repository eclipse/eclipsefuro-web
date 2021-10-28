import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/doc-helper';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-catalog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-entity-agent.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-deep-link.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-button-bar.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/input/src/furo-button.js';
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies


import '@ui5/webcomponents/dist/Icon.js';
import '../src/lib/ui5-icons.js';

/**
 * `demo-furo-fat-type`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroFatType extends FBP(LitElement) {
  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (

      css`
        :host {
          display: block;
          height: 100%;
          padding-right: var(--spacing);
          --furo-form-layouter-row-gap: var(--spacing-xs);
        }

        :host([hidden]) {
          display: none;
        }

        furo-demo-snippet {
          height: 100%;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 1em;
        }

        .width-4\\/12 {
          grid-column: span 4;
          justify-self: end;
          align-self: center;
        }

        .width-8\\/12 {
          grid-column: span 8;
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
      <h2>use furo fat types for ui5 components</h2>
      <p>furo offers the <a href="?t=furo-spec-basetypes">furo fat types</a> beside scalar types and google wrapper types.
        those furo fat types have the labels and the attributes beside the value.
        the client can use these additional information like labels and attributes to show the states of the objects.
        the states like pristine , empty will be also be marked via components and send back to server as labels.
      </p>
      <p><b>furo-ui5-data-input can work with following default labels of fat types:</b></p>
      <li>'error': valueState of ui5 component is set as error</li>
      <li>'readonly': ui5 component is disabled </li>
      <li>'required': input is required  </li>
      <li>'disabled': ui5 component is disabled  </li>
      <li>'modified': data is changed </li>
      <li>'highlight': Defines if characters within the suggestions are to be highlighted in case the input value matches parts of the suggestions text. </li>

      <p><b>furo-ui5-data-input can work with following default attributes of fat types:</b></p>
      <li>'label': label will be used as the placeholder of the ui5 input</li>
      <li>'placeholder': placeholder of the ui5 input </li>
      <li>'hint': title of the ui5 input  </li>
      <li>'icon': ui5 icon in the ui5 input  </li>
      <li>'leading-icon':  the same as 'icon'  </li>
      <li>'value-state': Defines the state of the info.Available options are: "None" (by default), "Success", "Warning" and "Erorr".  </li>
      <li>'errortext': Defines the error value state message that will be displayed as pop up under the ui5-input. </li>
      <li>'error-msg': the same as 'errortext' </li>
      <li>'warning-msg': Defines the warning value state message that will be displayed as pop up under the ui5-input. </li>
      <li>'success-msg': Defines the success value state message that will be displayed as pop up under the ui5-input. </li>
      <li>'information-msg': Defines the information value state message that will be displayed as pop up under the ui5-input. </li>
      <li>'pattern': Defines the pattern of the ui5-input. </li>
      <li>'name': Defines the name of the ui5-input. </li>
      <li>'maxlength': Sets the maximum number of characters available in the input field.</li>
      <li>'suggestions': Defines the suggestion items. e.g. [{"text":"Spain","icon":"world","type":"Active","infoState":"None","group":false,"key":0}, </li>
</br>
      <furo-demo-snippet>
        <template>
           <h2>demo: labels in fat type</h2>


            <p>the following demo shows the changes of labels of fat object.</p>
          <li>first the fat object is pristine and has no label 'modified'. [] </li>
             <li> after data injection the object has received 3 additional labels from server.
               [
               "before",
               "show-suggestions",
               "required",
               ]</li>
          <li>when the text of input filed is changed. the 'modified' label will be automatically added. [
            "before",
            "modified",
            "show-suggestions",
            "required"
            ]</li>
          <li>when the text of input filed is deleted. the 'empty' label will be automatically added.  [
            "before",
            "show-suggestions",
            "required",
            "empty"
            ]</li>
          <p>these labels are in payload and will be send back to server   </p>

          <furo-ui5-data-text-input
            ƒ-bind-data="--data(*.data.fat_string)"
          ></furo-ui5-data-text-input>

          <fetch-universal-json
            file="/mockdata/ui5/demos/fat-universal.json"
            @-data-loaded="--mockdata"
          ></fetch-universal-json>

          </br><b>labels</b>: <furo-pretty-json ƒ-inject-data="--dataInjected(*.data.fat_string.labels._value)"></furo-pretty-json>


          </br><b>attributes:</b> <furo-pretty-json ƒ-inject-data="--dataInjected(*.data.fat_string.attributes._value)"></furo-pretty-json>

          <furo-data-object
            type="universaltest.UniversaltestEntity"
            @-object-ready="--data"
            @-data-changed="--dataInjected"
            ƒ-inject-raw="--mockdata"
          ></furo-data-object>

        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-fat-type', DemoFuroFatType);
