import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import './furo-panel-coordinator-tab-item.js';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';

/**
 * Tab navigation for the open panels in a panel-coordinator.
 *
 *
 *```html
 *  <!-- inject the tabs from panelCoordinator and connect the keyboard navigation -->
 *  <furo-panel-coordinator-tabs ƒ-inject-tabs="--panelChanges" ƒ-trigger-navigation="--navpadPanelTabs" >
 *    <!-- add keyboard navigation -->
 *    <furo-navigation-pad @-navigated="--navpadPanelTabs"></furo-navigation-pad>
 *  </furo-panel-coordinator-tabs>
 *  <furo-pages flex default="default">
 *    <furo-panel-coordinator ƒ-show-page="--nodeSelected"  @-panels-changed="--panelChanges"></furo-panel-coordinator>
 *```
 *
 * @summary tab navigation for panel-coordinator
 * @customElement
 * @appliesMixin FBP
 */
class FuroPanelCoordinatorTabs extends FBP(LitElement) {
  constructor() {
    super();
    this.tabindex = 0;

    this._focusIndex = 0;

    // hover selected
    this.addEventListener('focus', () => {
      // find selected tab and set hover index
      this._focusIndex = 0;
      this._tabs.forEach((e, i) => {
        if (e._isSelected) {
          this._focusIndex = i;
        }
      });
    });
  }

  /**
   * Connect your navigation pad.
   *
   * Default mappings are:
   * - Enter => selectFocused
   * - ArroLeft => focusPrevious
   * - ArroRight => focusNext
   * - Home => focusFirst
   * - End => focusLast
   * - Escape => closeFocused
   *
   * To disable a function, just add the `ignored-keys` to furo-navigation-tabs.
   *
   * @param key
   */
  triggerNavigation(key) {
    switch (key) {
      case 'Enter':
        this.selectFocused();

        break;

      case 'ArrowLeft':
        this.focusPrevious();

        break;

      case 'End':
        this.focusLast();

        break;

      case 'Home':
        this.focusFirst();

        break;

      case 'ArrowRight':
        this.focusNext();

        break;

      // close the focused tab
      case 'Escape':
        this.closeFocused();

        break;
      default:
    }
  }

  /**
   * Closes the focused tab.
   *
   */
  closeFocused() {
    // find out which item is focused
    this._focusIndex = 0;
    this._tabs.forEach((e, i) => {
      if (e.__tabHasFocus) {
        this._focusIndex = i;
      }
    });
    this._tabs[this._focusIndex]._isSelected = false;

    const oldFocusIndex = this._focusIndex;
    this._tabs[this._focusIndex].dispatchNodeEvent(new NodeEvent('close-requested', this, false));
    this._focusIndex = oldFocusIndex;
  }

  /**
   * Focuses the next tab. If you are on the last tab, the frist tab will be selected
   */
  focusNext() {
    if (this._focusIndex === this._tabs.length - 1) {
      // hover first item
      this._focusIndex = 0;
    } else {
      this._focusIndex += 1;
    }

    this._tabs[this._focusIndex].triggerFocus();
  }

  /**
   * Focuses the first tab.
   */
  focusFirst() {
    this._focusIndex = 0;
    this._tabs[this._focusIndex].triggerFocus();
  }

  /**
   * Focuses the last tab.
   */
  focusLast() {
    this._focusIndex = this._tabs.length - 1;
    this._tabs[this._focusIndex].triggerFocus();
  }

  /**
   * Select the focused tab.
   */
  selectFocused() {
    this._tabs[this._focusIndex].selectItem();
  }

  /**
   * Focuses the previous tab.
   */
  focusPrevious() {
    if (this._focusIndex === 0) {
      // hover last item
      this._focusIndex = this._tabs.length - 1;
    } else {
      this._focusIndex -= +1;
    }
    this._tabs[this._focusIndex].triggerFocus();
  }

  /**
   * Inject data from a navigationnode
   * @param nodeArray
   */
  injectTabs(nodeArray) {
    this._tabs = nodeArray;
    this._FBPTriggerWire('--itemsInjected', nodeArray);
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
    // update the focused state
    this.addEventListener('focusin', () => {
      this.focused = true;
    });
    this.addEventListener('focusout', () => {
      this.focused = false;
    });
  }

  /**
   * focuses the element itself. The "focused" tab will get the focus
   */
  focus() {
    super.focus();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Sets the tabindex
       */
      tabindex: { type: Number, reflect: true },
      /**
       * indicates that the element is focused
       */
      focused: { type: Boolean, reflect: true },
    };
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
          display: block;
          outline: none;
          position: relative;
          padding-left: var(--spacing-s, 24px);
        }

        furo-panel-coordinator-tab-item[selected] {
          border-bottom: 2px solid var(--primary, #686868);
          color: var(--primary, #686868);
        }

        :host([focused]) furo-panel-coordinator-tab-item[selected][haserror] {
          border-bottom: 2px solid var(--error, red);
        }

        /* mouse hover */
        furo-panel-coordinator-tab-item:hover {
          background-color: rgba(var(--primary-rgb), var(--state-hover));
          border-bottom: 2px solid transparent;
          color: var(--primary, #686868);
        }

        furo-panel-coordinator-tab-item[selected]:hover {
          border-bottom: 2px solid var(--primary, #686868);
        }

        /* focus, :host(:focus) furo-panel-coordinator-tab-item[focused]  is for mouse navigation */
        :host([focused]) furo-panel-coordinator-tab-item[focused] {
          background-color: rgba(var(--primary-rgb), var(--state-focus));
          border-bottom: 2px solid transparent;
          color: var(--primary, #686868);
        }

        /* selected */
        :host([focused]) furo-panel-coordinator-tab-item[selected] {
          background-color: rgba(var(--primary-rgb), var(--state-selected));
          border-bottom: 2px solid var(--primary, #686868);
          color: var(--primary, #686868);
        }

        /* selected focus  */
        :host([focused]) furo-panel-coordinator-tab-item[selected][focused] {
          background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
          border-bottom: 2px solid var(--primary, #686868);
        }

        /* selected focus hovered  */
        :host([focused]) furo-panel-coordinator-tab-item[selected][focused]:hover {
          background-color: rgba(var(--primary-rgb), var(--state-selected-focused-hover));
          border-bottom: 2px solid var(--primary, #686868);
        }

        /* selected focus */
        :host([focused]) furo-panel-coordinator-tab-item[selected][focused] {
          background-color: rgba(var(--primary-rgb), var(--state-selected-focus));
          border-bottom: 2px solid var(--primary, #686868);
          color: var(--primary);
        }

        furo-panel-coordinator-tab-item {
          margin: 0;
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
      <flow-repeat ƒ-inject-items="--itemsInjected" identity-path="id._value">
        <template>
          <furo-panel-coordinator-tab-item ƒ-bind-data="--init"></furo-panel-coordinator-tab-item>
        </template>
      </flow-repeat>
    `;
  }
}

window.customElements.define('furo-panel-coordinator-tabs', FuroPanelCoordinatorTabs);
