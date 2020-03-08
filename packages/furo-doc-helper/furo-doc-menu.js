import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/layout/furo-vertical-scroller";
import "./furo-doc/furo-doc-menu-element-item"
import "./furo-doc/furo-doc-menu-class-item"

/**
 * `furo-doc-menu`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocMenu extends FBP(LitElement) {

  constructor() {
    super();
  }

  analysis(analysis) {
    if (analysis.elements) {
      this._FBPTriggerWire("--elements", analysis.elements);
    }else{
      //clear
      this._FBPTriggerWire("--elements", []);
    }

    if (analysis.classes) {
      this._FBPTriggerWire("--classes", analysis.classes);
    } else {
      //clear
      this._FBPTriggerWire("--classes", []);
    }

    if (analysis.mixins) {
      this._FBPTriggerWire("--mixins", analysis.mixins);
    } else {
      //clear
      this._FBPTriggerWire("--mixins", []);
    }


    // send selected, analysis.__selectedElement is set from furo-doc-fetch-analysis
    if (analysis.__selectedElement) {
      /**
       * @event element
       * Fired when element is selected
       * detail payload: element analysis data
       */
      let customEvent = new Event('element', {composed: true, bubbles: true});
      customEvent.detail = analysis.__selectedElement;
      this.dispatchEvent(customEvent)
    }
    // send selected class
    if (analysis.__selectedClass) {
      /**
       * @event element
       * Fired when element is selected
       * detail payload: element analysis data
       */
      let customEvent = new Event('class', {composed: true, bubbles: true});
      customEvent.detail = analysis.__selectedClass;
      this.dispatchEvent(customEvent)
    }

    // send selected mixin
    if (analysis.__selectedMixin) {
      /**
       * @event element
       * Fired when element is selected
       * detail payload: element analysis data
       */
      let customEvent = new Event('mixin', {composed: true, bubbles: true});
      customEvent.detail = analysis.__selectedMixin;
      this.dispatchEvent(customEvent)
    }

  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent('FuroDocMenu') || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing-s);
            background-color: var(--surface);
        }

        :host([hidden]) {
            display: none;
        }

        h3 {
            position: sticky;
            top: 0;
            background-color: var(--surface);
            z-index: 1;
            margin-top: 0;
            color: var(--on-background);
            letter-spacing: .07272727em;
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
        }


        ul {
            list-style: none;
            padding: 0;
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

      <h3>Elements</h3>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--elements" identity-path="name">
          <furo-doc-menu-element-item ƒ-set-item="--item"></furo-doc-menu-element-item>
        </template>
      </ul>


      <h3>Mixins</h3>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--mixins" identity-path="name">
          <furo-doc-menu-class-item ƒ-set-item="--item"></furo-doc-menu-class-item>
        </template>
      </ul>

      <h3>Classes</h3>
      <ul>
        <template is="flow-repeat" ƒ-inject-items="--classes" identity-path="name">
          <furo-doc-menu-class-item ƒ-set-item="--item"></furo-doc-menu-class-item>
        </template>
      </ul>

    `;
  }
}

window.customElements.define('furo-doc-menu', FuroDocMenu);
