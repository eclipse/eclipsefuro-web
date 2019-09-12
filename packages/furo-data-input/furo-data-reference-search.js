import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat";
import "./furo-data-search-input"
import {FuroInputBase} from "./FuroInputBase";
import "./reference-search-item";

/**
 * `furo-data-reference-search`
 *  Sucht eine Referenz
 *
 *
 *```
 * <!--  furo-data-object will eine Referenz auflösen -->
 * <furo-data-object type="task.Task" @-object-ready="--entityReady"></furo-data-object>
 *
 *<furo-horizontal-flex>
 *    <!--  furo-data-reference-search kann eine Referenz die entity-objekt besitzt darstellen.
 *    Bei einer Texteingabe wird ^^search mit dem eingegebenen Text gesucht. Diesr geht via wire --term an den furo-collection-agent.
 *    Wenn furo-collection-agent eine Kollektion zurückliefert, klappt die Auswahl auf. -->
 *    <furo-data-reference-search autofocus  flex ƒ-bind-data="--entityReady(*.fields.ref)" @-search="--term" ƒ-collection-in="--refCol"></furo-data-reference-search>
 *
 *    <furo-data-reference-search  flex ƒ-bind-data="--entityReady(*.fields.ref)" min-term-length="2" @-search="--term" ƒ-collection-in="--refCol"></furo-data-reference-search>
 *
 *</furo-horizontal-flex>
 *
 *<!-- Der furo-collection-agent erhält die hts von ref.value, wenn ein term eingegeben wurde beginnt dieser zu suchen.
 *Die Resultate werden an furo-data-reference-search zurück gegeben. -->
 *<furo-collection-agent service="tasks" ƒ-search="--term" ƒ-hts-in="--entityReady(*.fields.ref.value)" @-response="--refCol"></furo-collection-agent>
 *
 * ```
 *
 * @summary shortdescription
 * @customElement
 * @demo furo-data-reference-search
 * @appliesMixin FBP
 */
class FuroDataReferenceSearch extends FBP(FuroInputBase(LitElement)) {

  constructor() {
    super();
    this.minTermLength = 0;
    this.idField = "id";
    this.displayField = "display_name";
  }

  attributeChangedCallback(name, oldval, newval) {
    switch (name) {
      case "min-term-length":
        this.minTermLength = Number(newval);
        break;
      case "id-field":
        this.idField = newval;
        break;
    }

  }

  _init() {
    super._init();


    this.addEventListener("searchInput", (e) => {
      this._searchTerm = e.detail;
      if (this._searchTerm.length > this.minTermLength) {
        /**
         * @event search
         * Fired when term is entered and bigger then min-term-length
         * detail payload: {String} term
         */
        let customEvent = new Event('search', {composed: true, bubbles: true});
        customEvent.detail = this._searchTerm;
        this.dispatchEvent(customEvent);
      }
    });

    this._FBPAddWireHook("--itemSelected", (item) => {
      this.field.id.value = item.data[this.idField];
      this.field.display_name.value = item.data.display_name;
      this._closeList();
    });

    /**
     * listen to keyboard events
     */
    this.addEventListener("keydown", (event) => {
      let key = event.key || event.keyCode;

      if (key === 'Escape' || key === 'Esc' || key === 27) {
        if (this._listIsOpen) {
          // close list if open and  then clear search
          event.preventDefault();
        }
        this._closeList();
        if(this._searchTerm === ""){
          event.preventDefault();
          // re set display_name

        }
      }

      // keyboard navigation
      if (this._listIsOpen) {
        if (key === "Enter") {
          event.preventDefault();
          this._FBPTriggerWire("--enterPressed");
        }
        if (key === "ArrowDown") {
          event.preventDefault();
          this._FBPTriggerWire("--arrowDownPressed");
        }
        if (key === "ArrowUp") {
          event.preventDefault();
          this._FBPTriggerWire("--arrowUpPressed");
        }
      } else {
        if (key === "ArrowDown") {
          this._showList();
        }

      }

    });


    // lock blur for slow clickers
    this.addEventListener("mousedown", (event) => {
      this._lockBlur = true;
    });
    // unlock after long click
    this.addEventListener("mouseup", (event) => {
      this._lockBlur = false;
    });

    // close list on blur
    this._FBPAddWireHook("--blured", (item) => {
      this._focused = false;
      if (!this._lockBlur) {
        this._closeList();
      }
    });

    // opens the list on focus
    this._FBPAddWireHook("--focused", (item) => {
      this._focused = true;
      if (this._hasCollection) {
        this._showList();
      }
    });

    this.requestUpdate();

  }

  _showList() {
    this._listIsOpen = true;
    this.setAttribute("show-list", "");
    this._FBPTriggerWire("--listOpened", 0);
  }

  _closeList() {
    this._listIsOpen = false;
    this.removeAttribute("show-list");
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {

    return {
      /**
       * min-term-length before fire the search event
       */
      minTermLength: {type: Number, attribute: 'min-term-length'},
      idField: {type: String, attribute: 'id-field'}

    };
  }

  collectionIn(collection) {

    this._FBPTriggerWire("--listItemsIjnected", collection.entities);
    this._hasCollection = true;

    if (this._focused) {
      this._showList();
    }

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
        }

        .list {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            overflow: auto;
            max-height: 300px;
            background-color: white;
            z-index: 1;
            opacity: 0.9;
            display: none;
        }

        :host([show-list]) .list {
            display: block;
        }

        furo-data-text-input {
            width: 100%;
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
    <furo-search-input trailing-icon="search" ?autofocus=${this.autofocus} 
    ?condensed=${this.condensed} label="${this._label}" 
    value="${this.display}" @-value-changed="^^searchInput" @-blur="--blured" @-focus="--focused" ƒ-focus="--focusReceived"></furo-search-input>
    <div class="list" @-item-selected="--itemSelected"   >
       
        <template is="flow-repeat" ƒ-inject-items="--listItemsIjnected" ƒ-select="--listOpened" ƒ-select-next-index="--arrowDownPressed" ƒ-select-previous-index="--arrowUpPressed" ƒ-trigger-selected="--enterPressed">
          <reference-search-item ƒ-.index="--index" ƒ-deselect="--itemDeSelected" ƒ-select="--trigger" ƒ-preselect="--itemSelected" ƒ-inject-item="--item"></reference-search-item>
        </template>
             
    </div>                                
`;
  }

}

window.customElements.define('furo-data-reference-search', FuroDataReferenceSearch);
