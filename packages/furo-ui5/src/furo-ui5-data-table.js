import { LitElement, html, css } from 'lit-element';
import { Env } from '@furo/framework';
import { FBP } from '@furo/fbp/src/fbp.js';

import '@furo/fbp/src/flow-repeat.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-ui/src/furo-type-renderer.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-ui5-data-display.js';

import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableCell.js';

import './furo-ui5-table-row.js';

/**
 * ui5 data table cell template
 * @param fields
 * @returns {TemplateResult|TemplateResult}
 */

const ui5CellTemplate = fields => html`
  ${fields.map(
    f => html`
      <ui5-table-cell>
        <furo-type-renderer tabular-form ƒ-bind-data="${f.wire}"></furo-type-renderer>
      </ui5-table-cell>
    `,
  )}
`;

/**
 * ui5 data table header template
 * @param fields
 * @returns {TemplateResult|TemplateResult}
 */
const ui5HeaderTemplate = fields =>
  html`
    ${fields.map(
      f =>
        html`
          <ui5-table-column
            slot="columns"
            popin-text="${f.colHeaderText}"
            ?demand-popin="${f.popin}"
            min-width="${f.colMinWidth}"
            >${f.colHeaderText}
          </ui5-table-column>
        `,
    )}
  `;

/**
 * `furo-ui5-data-table`
 *
 *
 * @customElement
 * @demo demo-furo-ui5-data-table Basic usage
 */
class FuroUi5DataTable extends FBP(LitElement) {
  /**
   * Fired when the row is selected.
   * the event detail is the original entity of the row
   * @event tablerow-selected
   */

  constructor() {
    super();
    this.cols = [];
    this._specs = Env.api.specs;
    this.fields = '';
    this.popinFields = '';
    this.data = [];
    this.noDataText = 'No Data';
    this._showNoData = false;
  }

  /**
   * bind a repeated data
   * @param data
   */
  bindData(data) {
    if (!data._isRepeater) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData. please bind a repeated field.');
      return;
    }

    data.addEventListener('repeated-fields-added', ()=>{
      this._FBPTriggerWire('--data', this.data);
    });

    data.addEventListener('repeated-fields-removed', ()=>{
      this._FBPTriggerWire('--data', this.data);
    });

    /**
     * new data arrived from CollectionNode
     */
    data.addEventListener('new-data-injected', e => {
      this.data = e.detail.entities.repeats;
      this._FBPTriggerWire('--data', e.detail.entities.repeats);
      if (this.data.length > 0) {
        this._showNoData = false;
      } else if (this.showNoData) {
        this._showNoData = true;
      }

      this.requestUpdate();
    });

    this._fields = this._specs[data._spec.type].fields;

    this._init();

    /**
     * Fired when the data is loaded into data table.
     * the event detail is the data table self
     * @event data-loaded
     */
    this.dispatchEvent(
      new CustomEvent('data-loaded', {
        detail: this,
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * init data table
   * @private
   */
  _init() {
    const cols = this.columns.replace(/ /g, '').split(',');
    this._popinFields = this.popinFields.replace(/ /g, '').split(',');

    this._mitWidth = [];
    const _col = [];
    cols.forEach(e => {
      const arr = e.split('|');
      _col.push(arr[0]);
      this._mitWidth[arr[0]] = arr[1] ? arr[1] : 'Infinity';
    });

    _col.forEach(fieldPath => {
      this._bindColumnDataField(fieldPath);
    });

    this._showNoData = this.showNoData;

    this.requestUpdate();
  }

  /**
   *
   * @param fieldPath
   * @private
   */
  _bindColumnDataField(fieldPath) {
    const field = {};
    field.wire = `--internal(*.item.${fieldPath})`;

    field.popin = !!this._popinFields.includes(fieldPath);

    field.colMinWidth = this._mitWidth[fieldPath];
    const fieldNode = this._findFieldByPath(this._fields, fieldPath);

    if (fieldNode) {
      field.colHeaderText = fieldNode.meta.label || '';
      this.cols.push(field);
    }
  }

  /**
   * resolves a field specification with the given path
   * @param field
   * @param path
   * @returns {*}
   * @private
   */
  _findFieldByPath(field, path) {
    const arr = path.split('.');

    if (arr.length > 1) {
      const subPath = path
        .split('.')
        .slice(1)
        .join('.');

      if (field[arr[0]]) {
        return this._findFieldByPath(field[arr[0]], subPath);
      }
      if (field.type && this._specs[field.type]) {
        return this._findFieldByPath(this._specs[field.type].fields, subPath);
      }
    } else {
      if (field[arr[0]]) {
        return field[arr[0]];
      }

      return this._specs[field.type].fields[arr[0]];
    }
    return undefined;
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
      :host {
        display: block;
        overflow: auto;
      }

      .no-data {
        height: 3rem;
        text-align: center;
        line-height: 3rem;
      }
    `;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * list of field-paths which should be as columns displayed
       * comma separated field list
       */
      columns: {
        type: String,
        attribute: 'columns',
      },
      /**
       * the text which can be showed when there is no data in table
       * string
       */
      noDataText: {
        type: String,
        attribute: 'no-data-text',
      },
      /**
       * define to show the noDataText or not
       */
      showNoData: {
        type: Boolean,
        attribute: 'show-no-data',
      },
      /**
       * define the header is sticky or not
       */
      stickyColumnHeader: {
        type: Boolean,
        attribute: 'sticky-column-header',
      },
      /**
       * define the list of popin fields
       * comma separated field list
       */
      popinFields: {
        type: String,
        attribute: 'popin-fields',
      },
    };
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-table ?sticky-column-header="${this.stickyColumnHeader}">
        ${ui5HeaderTemplate(this.cols)}
        <template is="flow-repeat" ƒ-inject-items="--data" internal-wire="--internal">
          <furo-ui5-table-row ƒ-._data="--internal(*.item._value)"
            >${ui5CellTemplate(this.cols)}
          </furo-ui5-table-row>
        </template>
      </ui5-table>
      ${this._showNoData
        ? html`
            <div class="no-data">${this.noDataText}</div>
          `
        : html``}
    `;
  }
}

customElements.define('furo-ui5-data-table', FuroUi5DataTable);
