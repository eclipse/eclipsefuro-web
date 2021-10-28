import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

import '@furo/layout/src/furo-ripple';

/**
 * `furo-mini-tab-item`
 * todo Describe your element
 *
 * @cssprop {#fafafa} [--surface=N/A] - Border bottom color
 * @cssprop {N/A} [--on-surface=N/A] - foreground color
 * @cssprop {red} [--error=N/A] - error color
 * @cssprop {16px} [--furo-button-padding=--spacing-s] - label padding, 0 var(--furo-button-padding, var(--spacing-s, 16px))
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroPanelCoordinatorTabItem extends FBP(LitElement) {
  constructor() {
    super();
    this.selected = false;
    this.hovered = false;
    this.inedit = false;
    this.haserror = false;
    this.addEventListener('click', () => {
      this.field.selectItem();
    });

    this._select = () => {
      this.selected = true;
    };

    this._deselect = () => {
      this.selected = false;
    };

    this._error = () => {
      this.haserror = true;
    };

    this._inedit = () => {
      this.focused = true;
    };

    this._focus = () => {
      this.focused = true;
      // this.scrollIntoViewIfNeeded();
      this.field.__tabHasFocus = true;
      if (
        this.scrollIntoViewIfNeeded &&
        this.parentNode &&
        this.parentNode.host.getAttribute('focused') !== null
      ) {
        this.scrollIntoViewIfNeeded();
      }
    };

    this._unfocus = () => {
      this.field.__tabHasFocus = false;
      this.focused = false;
    };

    this._clear = () => {
      this.inedit = false;
      this.haserror = false;
    };
  }

  bindData(fieldNode) {
    if (this.field) {
      this._removeListeners();
    }

    this.field = fieldNode;
    this.selected = fieldNode._isSelected;

    this.field.addEventListener('this-node-selected', this._select);
    this.field.addEventListener('tree-node-unselection-requested', this._deselect);
    this.field.addEventListener('modified', this._inedit);
    this.field.addEventListener('cleared', this._clear);
    this.field.addEventListener('has-error', this._error);
    this.field.addEventListener('tree-node-blur-requested', this._unfocus);
    this.field.addEventListener('this-node-focused', this._focus);
  }

  _removeListeners() {
    if (this.field) {
      this.field.removeEventListener('this-node-selected', this._select);
      this.field.removeEventListener('tree-node-unselection-requested', this._deselect);
      this.field.removeEventListener('modified', this._inedit);
      this.field.removeEventListener('cleared', this._clear);
      this.field.removeEventListener('has-error', this._error);
      this.field.removeEventListener('tree-node-blur-requested', this._unfocus);
      this.field.removeEventListener('this-node-focused', this._focus);
    }
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
    this._removeListeners();
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
      selected: { type: Boolean, reflect: true },
      haserror: { type: Boolean, reflect: true },
      inedit: { type: Boolean, reflect: true },
      focused: { type: Boolean, reflect: true },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

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
          display: inline-block;
          font-size: 16px;
          font-weight: 400;
          line-height: 38px;
          border-bottom: 2px solid var(--surface, #fafafa);
          transition: all 0.5s;
          cursor: pointer;
          position: relative;
          min-width: 136px;
          font-family: 'Roboto', 'Noto', sans-serif;
          color: var(--on-surface);
          text-transform: uppercase;
        }

        :host([inedit]) {
          font-style: italic;
        }

        :host([haserror]) {
          color: var(--error, red);
        }

        :host([hidden]) {
          display: none;
        }

        .label {
          padding: 0 var(--furo-button-padding, var(--spacing-s, 16px));
          text-align: center;
        }

        .close {
          color: var(--separator);
        }

        .close:hover {
          color: var(--primary);
        }

        furo-icon {
          margin-bottom: 2px;
          margin-right: var(--spacing-s);
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
      <furo-horizontal-flex>
        <div flex class="label">
          <furo-icon
            ?hidden="${this.noicon}"
            icon="${this.field.icon}"
            ?error="${this.field.has_error._value}"
          ></furo-icon>
          ${this.field.display_name}
        </div>

        <furo-ripple></furo-ripple>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-panel-coordinator-tab-item', FuroPanelCoordinatorTabItem);
