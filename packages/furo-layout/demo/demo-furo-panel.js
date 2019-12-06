import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

/**
 * `demo-furo-panel`
 * Simple furo-panel Demo
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/demo-furo-panel.html
 * @appliesMixin FBP
 */
class DemoFuroPanel extends FBP(LitElement) {

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
            height: 100%;
            padding-right: var(--spacing, 16px);
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
      <h2>Demo furo-panel</h2>
      <p>Simple panel with content slot</p>
      <furo-demo-snippet>
        <template>
            <furo-panel bordered>
                <h1>Panel outside bordered</h1>
                <furo-panel bordered margin-m>
                    <p>Panel inside, bordered, margin-m</p>
                </furo-panel>
            </furo-panel>
            <furo-panel>
                <h1>Another panel</h1>
            </furo-panel>
        </template>
      </furo-demo-snippet>

      
    `;
    }
}

window.customElements.define('demo-furo-panel', DemoFuroPanel);
