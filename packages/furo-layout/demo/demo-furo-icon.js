import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"

import '../test/initEnv';

/**
 * `demo-furo-icon`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroIcon extends FBP(LitElement) {

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
            padding-right: var(--spacing);
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
      <h2>Demo demo-furo-icon</h2>
      <p>Do not forgett to import the iconset</p>
      <furo-demo-snippet>
        <template>
          <furo-icon icon="mail"></furo-icon>
          <furo-icon icon="touch-app"></furo-icon>
          <furo-icon icon="av:airplay"></furo-icon>
          <furo-icon icon="com:contacts"></furo-icon>
          <furo-icon icon="device:bluetooth"></furo-icon>
          <furo-icon icon="editor:merge-type"></furo-icon>
          <furo-icon icon="hardware:phonelink"></furo-icon>
          <furo-icon icon="image:camera"></furo-icon>
          <furo-icon icon="maps:subway"></furo-icon>
          <furo-icon icon="notify:event-available"></furo-icon>
          <furo-icon icon="places:spa"></furo-icon>
          <furo-icon icon="social:public"></furo-icon>
        </template>
      </furo-demo-snippet>
      <h3>Import all icon sets somewhere in your init phase</h3>
      <pre>
// -- initialize application env, theme, api

import {Init} from "@furo/framework/furo.js";
import {Iconset} from "@furo/framework/furo.js";
import {FuroBaseIcons} from "../iconsets/baseIcons";
import {DeviceIcons} from "../iconsets/deviceIcons";
import {AvIcons} from "../iconsets/avIcons";
import {CommunicationIcons} from "../iconsets/communicationIcons"
import {EditorIcons} from "../iconsets/editorIcons";
import {SocialIcons} from "../iconsets/socialIcons";
import {PlacesIcons} from "../iconsets/placesIcons";
import {NotificationIcons} from "../iconsets/notificationIcons";
import {MapsIcons} from "../iconsets/mapsIcons";
import {HardwareIcons} from "../iconsets/hardwareIcons";
import {ImageIcons} from "../iconsets/imageIcons";
Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
Iconset.registerIconset("com", CommunicationIcons);
Iconset.registerIconset("device", DeviceIcons);
Iconset.registerIconset("editor", EditorIcons);
Iconset.registerIconset("social", SocialIcons);
Iconset.registerIconset("places", PlacesIcons);
Iconset.registerIconset("notify", NotificationIcons);
Iconset.registerIconset("map", MapsIcons);
Iconset.registerIconset("hardware", HardwareIcons);
Iconset.registerIconset("image", ImageIcons);
        </pre>
    `;
  }
}

window.customElements.define('demo-furo-icon', DemoFuroIcon);
