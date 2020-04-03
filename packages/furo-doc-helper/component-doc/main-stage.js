import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';
import { Theme } from '@furo/framework/src/theme.js';
import { Styling } from './styling.js';

import '@furo/input/src/furo-button.js';
import '@furo/route/src/furo-location.js';
import '@furo/route/src/furo-pages.js';

import '@furo/app/furo-app-drawer.js';
import '@furo/app/furo-app-bar-top.js';
import '@furo/notification/src/furo-snackbar-display.js';

import '@furo/layout/src/furo-empty-spacer.js';
import '@furo/layout/src/furo-horizontal-flex.js';
import '@furo/input/src/furo-search-input.js';
import '@furo/data/furo-data-object.js';
import '@furo/util/src/furo-fetch-json.js';
import '@furo/navigation/src/furo-tree.js';
import '@furo/route/src/furo-qp-changer.js';
import '@furo/route/src/furo-panel-coordinator.js';
import '@furo/navigation/src/furo-panel-coordinator-tabs.js';
import '@furo/util/src/furo-navigation-pad.js';
import '@furo/util/src/furo-keydown.js';
import '@furo/data-ui/furo-data-context-menu-display.js';
import './inital-panel.js';

/**
 * `main-stage`
 *
 * @customElement
 * @appliesMixin FBP
 */
class MainStage extends FBP(LitElement) {
  constructor(props) {
    super(props);
    this._pkgjson = {};
  }

  _FBPReady() {
    super._FBPReady();

    /**
     * Register hook on wire --searchUnfocus to
     * disable the treePseudoFocus
     */
    this._FBPAddWireHook('--searchUnfocus', () => {
      this.treePseudoFocus = false;
    });

    /**
     * Register hook on wire --treeClicked to
     * enable the treePseudoFocus
     */
    this._FBPAddWireHook('--treeClicked', () => {
      this.treePseudoFocus = true;
    });

    /**
     * Register hook on wire --searchFocused to
     * enable the treePseudoFocus
     */
    this._FBPAddWireHook('--searchFocused', () => {
      this.treePseudoFocus = true;
    });

    /**
     * Register hook on wire --data to
     *  get the package json
     */
    this._FBPAddWireHook('--data', e => {
      if (e.children[0]) {
        this._pkgjson = e.children[0].payload;
        this.requestUpdate();
      }
    });
  }

  static get properties() {
    return {
      /**
       * simulates the focus for the tree, because we focus the search field
       */
      treePseudoFocus: { type: Boolean },
    };
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    const theme = Theme.getThemeForComponent(this.name);
    if (theme) {
      return [theme, Styling.theme];
    }
    // language=CSS
    return [
      css`
        :host {
          height: 100%;
          display: block;
          background: var(--background);
          color: var(--on-background);
        }

        furo-pages {
          height: 100%;
          overflow: scroll;
        }

        .drawer {
          background-color: var(--surface);
          position: relative;
        }

        furo-search-input {
          width: 100%;
        }

        furo-app-bar-top {
          --furo-app-bar-top-background-light: #ffffff;
          --furo-app-bar-top-background-dark: #fafafa;
          color: #333333;
          line-height: 54px;
          font-size: 18px;
        }

        furo-tree {
          width: 350px;
        }

        a {
          padding: 0 var(--spacing-s);
          text-decoration: none;
          color: unset;
        }

        .marker {
          border-bottom: 2px solid var(--primary);
        }

        a:hover {
          color: var(--primary);
        }

        furo-panel-coordinator-tabs {
          display: block;
          overflow-x: scroll;
          overflow-y: hidden;
          outline: none;
          white-space: nowrap;
          padding-left: var(--spacing);
          border-bottom: 1px solid var(--background);
          background-color: var(--surface);
          font-size: 13px;
          font-weight: 400;
          line-height: 26px;
          padding-top: var(--spacing-xxs);
        }

        .spacer {
          padding: var(--spacing-s) var(--spacing-s) 0 var(--spacing-s);
        }

        .content {
          position: relative;
          height: 100%;
        }

        .content > * {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      `,
      Styling.theme,
    ];
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <furo-app-bar-top drawer="main-drawer">
          <div>
            <a name="home" href="/">
              ${this._pkgjson.name} <small>${this._pkgjson.description}</small></a
            >
          </div>
          <furo-empty-spacer></furo-empty-spacer>

          <a href="${this._pkgjson.homepage}">
            <furo-icon icon="furo:github" title="repository"></furo-icon>
          </a>
        </furo-app-bar-top>
        <furo-app-drawer
          flex
          name="main-drawer"
          ƒ-close="--locationChanged"
          ƒ-open="--openNavClicked"
        >
          <furo-vertical-flex slot="drawer" class="drawer">
            <furo-keydown prevent-default shift key="ArrowRight" @-key="--expandAll"></furo-keydown>
            <furo-keydown
              prevent-default
              shift
              key="ArrowLeft"
              @-key="--collapseAll"
            ></furo-keydown>
            <furo-navigation-pad
              ignored-keys="Escape"
              @-navigated="--navpadTreeSearch"
            ></furo-navigation-pad>
            <div class="spacer">
              <furo-search-input
                condensed
                autofocus
                @-blur="--searchUnfocus"
                @-focusin="--searchFocused"
                label="find"
                leading-icon="search"
                @-click="--searchClicked"
                ƒ-focus="--searchClicked, --treeClicked"
                @-value-changed="--searchTerm"
              >
              </furo-search-input>
            </div>
            <furo-tree
              flex
              ?focused="${this.treePseudoFocus}"
              @-click="--treeClicked"
              ƒ-search="--searchTerm"
              hide-root-node
              expand-depth="4"
              ƒ-expand-all="--expandAll"
              ƒ-collapse-all="--collapseAll"
              ƒ-trigger-navigation="--navpadTreeSearch"
              drawer="main-drawer"
              root-as-header
              ƒ-bind-data="--treeObj"
              tabindex="-1"
              qp="t"
              ƒ-location-in="--qp"
              @-node-selected="--nodeSelected"
              @-qp-change-requested="--qpchangerequest"
            ></furo-tree>
          </furo-vertical-flex>
          <div class="content">
            <furo-vertical-flex>
              <furo-panel-coordinator-tabs
                ƒ-inject-tabs="--panelChanges"
                ƒ-trigger-navigation="--navpadPanelTabs"
              >
                <furo-navigation-pad @-navigated="--navpadPanelTabs"></furo-navigation-pad>
              </furo-panel-coordinator-tabs>
              <furo-pages flex default="default" @-response-error="--responseError">
                <inital-panel name="default"></inital-panel>
                <furo-panel-coordinator
                  @-panels-changed="--panelChanges"
                  ƒ-show-page="--nodeSelected"
                ></furo-panel-coordinator>
              </furo-pages>
            </furo-vertical-flex>
          </div>
        </furo-app-drawer>
      </furo-vertical-flex>
      <furo-snackbar-display></furo-snackbar-display>

      <!-- retreive data -->
      <furo-data-object
        type="navigation.Navigationnode"
        ƒ-inject-raw="--data"
        @-object-ready="--treeObj"
      ></furo-data-object>

      <!-- Use the --FBPready wire to load the tree data once, --pageActivated will not work on the first time because of lazy loading  -->
      <furo-fetch-json
        src="documentation.json"
        ƒ-fetch="--FBPready"
        @-data="--data"
      ></furo-fetch-json>

      <furo-qp-changer ƒ-set-qp="--qpchangerequest"></furo-qp-changer>
      <furo-location url-space-regex="^/" @-location-query-changed="--qp"></furo-location>

      <furo-location @-location-changed="--locationChanged"></furo-location>
      <furo-snackbar-display></furo-snackbar-display>    
      <furo-data-context-menu-display></furo-data-context-menu-display>
    `;
  }
}

window.customElements.define('main-stage', MainStage);
