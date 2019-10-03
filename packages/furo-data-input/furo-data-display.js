import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";

import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-display`
 *  Displays a data field. If the type is a complex type (like google.type.Date), the display_name field is used.
 *
 * @summary Displays a data field
 * @customElement
 * @demo demo-furo-data-display
 * @demo demo-furo-data-display-condensed Condensed variant
 * @appliesMixin FBP
 */
class FuroDataDisplay extends FBP(LitElement) {

  constructor() {
    super();

    this._FBPAddWireHook("--valueChanged", (val) => {

      if (this.field) {
        this.field.value = val;
      }
    });

    this.field = {};

  }


  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    //this._FBPTraceWires();
    // check initial overrides
    CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
  }

  _updateField() {
    this.text = this.field.value;

    if (this.displayfield && this.field[this.displayfield]) {
      this.text = this.field[this.displayfield];
    } else {
      if (this.field.display_name) {
        this.text = this.field.display_name;
      }
    }

    if (this.text && this.text.toString() == undefined) {
      this.text = "";
    }

    this.requestUpdate();
  }


  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * If your field type does not have a display_name, use this attribute to set the field that should be used
       * instead of display_name.
       */
      displayfield: {type: String},
      /**
       * Overrides the label text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      label: {
        type: String,
      },
      /**
       * Overrides the hint text from the **specs**.
       *
       * Use with caution, normally the specs defines this value.
       */
      hint: {
        type: String,
      },
      /**
       * Icon on the left side
       */
      leadingIcon: {
        type: String,
        attribute: "leading-icon"
      },
      /**
       * Icon on the right side
       */
      trailingIcon: {
        type: String,
        attribute: "trailing-icon"
      },

      /**
       * The default style (md like) supports a condensed form. It is a little bit smaller then the default
       */
      condensed: {
        type: Boolean
      },
      /**
       * passes always float the label
       */
      float: {
        type: Boolean
      }
    }
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    Helper.BindData(this, fieldNode);
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
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            margin: 10px 0 15px 0;
            height: 56px;
            width: 190px;
        }

        :host([hidden]) {
            display: none;
        }

        .wrapper {
            position: relative;
            padding: 0 12px;
            box-sizing: border-box;
            height: 56px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .iwrap {
            position: relative;
        }

        .text {
            position: absolute;
            top: 16px;
            border: none;
            background: none;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            width: 100%;
            line-height: 24px;
            color: inherit;
            outline: none;
            font-family: "Roboto", "Noto", sans-serif;
            font-kerning: auto;
            font-size: 16px;
            font-stretch: 100%;
            font-style: normal;
        }


        furo-icon {
            display: none;
            top: 16px;
        }

        furo-icon.lead {
            position: absolute;

            left: 8px;
        }

        furo-icon.trail {
            position: absolute;
            right: 8px;
        }

        :host([leading-icon]:not([leading-icon="undefined"])) furo-icon.lead, :host([trailing-icon]:not([trailing-icon="undefined"])) furo-icon.trail {
            display: block;
        }

        :host([leading-icon]:not([leading-icon="undefined"])) .wrapper {
            padding-left: 36px;
        }

        :host([trailing-icon]:not([trailing-icon="undefined"])) .wrapper {
            padding-right: 36px;
        }


        .borderlabel {
            pointer-events: none;
            position: absolute;
            box-sizing: border-box;
            top: 0;
            right: 0;
            left: 0;
            height: 56px;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
        }

        .left-border {
            width: 8px;
            box-sizing: border-box;
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-right: none;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        .right-border {
            pointer-events: none;
            border: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
            border-left: none;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            -ms-flex: 1 1 0.000000001px;
            -webkit-flex: 1;
            flex: 1;
            -webkit-flex-basis: 0.000000001px;
            flex-basis: 0.000000001px;
        }


        label {
            color: var(--display-label-color, var(--disabled, #8c8c8c));
            font-size: 12px;
            padding: 0 4px;
            font-weight: 400;
            position: relative;
            border-bottom: 1px solid var(--input-activation-indicator-color, var(--disabled, #333333));
        }

        label span {
            font-size: 12px;
            top: -10px;
            position: relative;
        }

        /** Condensed **/


        :host([condensed]) .text {
            top: 12px;
            font-size: 14px;
        }

        :host([condensed]:not([filled])) label, :host([filled][condensed]) label {
            line-height: 40px;
            font-size: 14px;
        }

        :host([condensed][filled]) .text {
            top: 12px;
        }

        :host([condensed]) .borderlabel, :host([condensed]) .wrapper {
            height: 40px;
        }

        :host([condensed]) furo-icon {
            top: 10px;
        }


        :host([condensed]) label span {
            top: -20px;
        }

        :host([condensed]) {
            height: 40px;
        }

        :host([noborder]) label, :host([noborder]) .left-border, :host([noborder]) .right-border {
            border: none;
        }

    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
       <div class="wrapper">
       <furo-icon class="lead" icon="${this.leadingIcon}"></furo-icon>    
       <div class="iwrap">
        <div class="text">  ${this.text}</div>
       </div>
       <furo-icon class="trail" icon="${this.trailingIcon}"></furo-icon>
      </div>
      <div class="borderlabel">
      <div class="left-border"></div>
      <label title="${this._hint}"><span>${this._label}</span></label>
      <div class="right-border"></div>
      </div>
      
      
    `;
  }
}

window.customElements.define('furo-data-display', FuroDataDisplay);
