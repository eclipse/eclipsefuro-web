import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';

/**
 * FOR DOCUMENTATION PURPOSES ONLY
 *
 * Base filter is the base element to build special filter comparator fields
 * Your element is then bindable with type filter.Comparator
 *
 *  after binding with .. a wire --filternode is triggered
 *
 *  ### internal hooks
 *  #### --clear
 *  Use this to clear the filter val and is.
 *
 * @summary base component to make a bindable filter
 * @customElement
 * @appliesMixin FBP
 */
export class BaseFilter extends FBP(LitElement) {
  static get properties() {
    return {
      /**
       * Semicolon separated list of acceptable comparators.
       *
       * like: gt, lt
       */
      comparators: { type: String },
      /**
       * set this to init with this comparator or set the comparator to this value on clear
       */
      defaultComparator: { type: String, attribute: 'default-comparator' },
      /**
       * The label for the input
       */
      label: { type: String },
      /**
       * hide the comparator dropdown
       */
      hideComparator: { type: Boolean, attribute: 'hide-comparator', reflect: true },
      /**
       * hide the clear
       */
      hideClear: { type: Boolean, attribute: 'hide-clear' },
      condensed: { type: Boolean },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --comparator to
     * listen on changes of the comparator dropdown
     */
    this._FBPAddWireHook('--clear', () => {
      this.field.val._value = '';
      this.field.is._value = this.defaultComparator || '';
    });

    // set the id val on your input element to remove the trailing icon on hideClear
    if (this.hideClear) {
      const inputElement = this.shadowRoot.getElementById('val');
      if (inputElement) {
        inputElement.removeAttribute('trailing-icon');
      }
    }
  }

  bindFilterCondition(fc) {
    this.field = fc;

    // rewire the label to the subfield val
    if (!this.label) {
      this.field.val._meta.label = fc._meta.label;
      // we update the meta and so we need to notify about
      this.field.val.dispatchNodeEvent(new NodeEvent('this-metas-changed', this.field.val, false));
    }

    this._FBPTriggerWire('--filternode', fc);

    // read the possible values from the spec
    if (!this.comparators && fc._meta.typespecific.filter) {
      this.comparators = fc._meta.typespecific.filter.comparators;
      this.defaultComparator = fc._meta.typespecific.filter.default_comparator;
    }
    this.hideComparator = this.hideComparator || fc._meta.typespecific.filter.hide_comparator;

    if (this.field.is === '') {
      this.field.is = this.defaultComparator;
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
      Theme.getThemeForComponent('BaseFilter') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
        furo-data-collection-dropdown {
          width: var(--comparator-dropdown-width, 64px);
          margin-right: 2px;
        }

        :host([hide-comparator]) furo-data-collection-dropdown {
          display: none;
        }

        :host([hide-clear]) furo-icon-button {
          display: none;
        }

        furo-icon-button {
          --furo-icon-width: 16px;
          --furo-icon-height: 16px;
          outline: none;
        }

        ::slotted(*) {
          width: 100%;
        }
      `
    );
  }
}

window.customElements.define('furo-data-filter-doc', BaseFilter);
