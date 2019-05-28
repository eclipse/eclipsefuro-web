import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/fbp/flow-repeat";
import "./furo-search-input"
import {FuroInputBase} from "./FuroInputBase";
import "./reference-search-item";

/**
 * `furo-reference-search`
 *  Sucht eine Referenz
 *
 *
 *```
 * <!--  entity-object will eine Referenz auflösen -->
 * <entity-object type="vnd.com.acme.task" @-object-ready="--entityReady"></entity-object>
 *
 *<furo-horizontal-flex>
 *    <!--  furo-reference-search kann eine Referenz die entity-objekt besitzt darstellen.
 *    Bei einer Texteingabe wird ^^search mit dem eingegebenen Text gesucht. Diesr geht via wire --term an den collection-agent.
 *    Wenn collection-agent eine Kollektion zurückliefert, klappt die Auswahl auf. -->
 *    <furo-reference-search autofocus  flex ƒ-bind-data="--entityReady(*.fields.ref)" @-search="--term" ƒ-collection-in="--refCol"></furo-reference-search>
 *
 *    <furo-reference-search  flex ƒ-bind-data="--entityReady(*.fields.ref)" min-term-length="2" @-search="--term" ƒ-collection-in="--refCol"></furo-reference-search>
 *
 *</furo-horizontal-flex>
 *
 *<!-- Der collection-agent erhält die hts von ref.value, wenn ein term eingegeben wurde beginnt dieser zu suchen.
 *Die Resultate werden an furo-reference-search zurück gegeben. -->
 *<collection-agent service="tasks" ƒ-search="--term" ƒ-hts-in="--entityReady(*.fields.ref.value)" @-response="--refCol"></collection-agent>
 *
 * ```
 *
 *![alt text](demo/assets/ref-search.png "Logo Title Text 1")
 *
 * @summary shortdescription
 * @customElement
 * @demo demo/furo-reference-search.html
 * @appliesMixin FBP
 */
class FuroReferenceSearch extends FBP(FuroInputBase(LitElement)) {

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
      this._searchTerm = e.path[0].value;
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
      this.field.id.set(item[this.idField]);
      this.field.display_name.set(item.display_name);
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

    this._FBPTriggerWire("--listItemsIjnected", collection.data);
    this._hasCollection = true;

    if (this._focused) {
      this._showList();
    }

  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
        :host {
            display: inline-block;
            position: relative;
        }

        .list {
            position: absolute;
            top: 32px;
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

        furo-search-input {
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
    <furo-search-input ?autofocus=${this.autofocus} ?disabled=${this.disabled} display-only 
    label="${this._label}" 
    ƒ-bind-data="--field(*.display_name)" @-input="^^searchInput" @-blur="--blured" @-focus="--focused" ƒ-focus="--focusReceived"
    ></furo-search-input>
    <div class="list" @-item-selected="--itemSelected"   >
      <flow-repeat ƒ-inject-items="--listItemsIjnected" ƒ-select="--listOpened" ƒ-select-next-index="--arrowDownPressed" ƒ-select-previous-index="--arrowUpPressed" ƒ-trigger-selected="--enterPressed">
        <template>
          <reference-search-item ƒ-.index="--index" ƒ-deselect="--itemDeSelected" ƒ-select="--trigger" ƒ-preselect="--itemSelected" ƒ-inject-item="--item"></reference-search-item>
        </template>
      </flow-repeat>       
    </div>                                
`;
  }

}

window.customElements.define('furo-reference-search', FuroReferenceSearch);

