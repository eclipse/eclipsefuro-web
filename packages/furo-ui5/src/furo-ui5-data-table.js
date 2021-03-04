import { LitElement, html, css } from 'lit-element';
import { Env } from '@furo/framework';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp/src/fbp.js';

import '@furo/fbp/src/flow-repeat.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data-ui/src/furo-type-renderer.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/ui5/src/furo-ui5-data-display.js';

import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableCell.js';

import './lib/furo-ui5-table-row.js';
// this dependence comes from furo-type-renderer
import './furo-ui5-data-repeat.js';

/**
 *
 * @param field
 * @private
 */
const getTemplateColumn = field => {
  if (field.template && field.template.length) {
    const el = document.createElement(field.template);
    el.setAttribute('ƒ-bind-data', field.wire);
    return el;
  }
  return html`
    <span>no template found</span>
  `;
};
/**
 * ui5 data table cell template
 * @param fields
 * @returns {TemplateResult|TemplateResult}
 */

const ui5CellTemplate = fields => html`
  ${fields.map(
    f => html`
      <ui5-table-cell>
        ${f.template
          ? html`
              ${getTemplateColumn(f)}
            `
          : html`
              <furo-type-renderer tabular-form ƒ-bind-data="${f.wire}"></furo-type-renderer>
            `}
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
            ?center="${f.center}"
            ?right="${f.right}"
            style="${f.style}"
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
 * `furo-ui5-data-table` display entities in a ui5-table
 *
 * <furo-ui5-data-table
 *  no-data-text="No data available."
 *  ƒ-bind-data="--dao(*.entities)"
 *  columns="data.id|min800, data.display_name|fix200, data.cost_limit, data.start"
 * ></furo-ui5-data-table>
 *
 * @customElement
 * @demo demo-furo-ui5-data-table Basic usage
 * @demo demo-furo-ui5-data-table-tmpl Usage of Column Templates
 * @demo demo-furo-ui5-data-table-repeats Usage with Repeats
 */
class FuroUi5DataTable extends FBP(LitElement) {
  /**
   * Fired when the row is selected.
   * the event detail is the original entity of the row
   * @event tablerow-selected
   */

  /**
   * Fired when the ArrowDown is pressed on the last row.
   * the event detail is the original entity of the row
   * @event arrow-down-on-last-row
   */

  /**
   * Fired when the ArrowUp is pressed on the first row.
   * the event detail is the original entity of the row
   * @event arrow-up-on-first-row
   */

  constructor() {
    super();
    this.cols = [];
    this._specs = Env.api.specs;
    this.popinFields = '';
    this.data = [];
    this.headers = '';
    this._headers = [];
    this._headerTexts = [];
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

    data.addEventListener('repeated-fields-all-removed', e => {
      this.data = e.detail;
      this._FBPTriggerWire('--data', this.data);
      if (this.noDataText) {
        this._showNoData = true;
      }
      this.requestUpdate();
    });

    /**
     * new data arrived from CollectionNode
     */
    data.addEventListener('this-repeated-field-changed', e => {
      this.data = e.detail.repeats;
      this._FBPTriggerWire('--data', this.data);
      if (this.data.length > 0) {
        this._showNoData = false;
      } else if (this.noDataText) {
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
   * focus on the header of the table
   */
  focus() {
    const header = this.shadowRoot.querySelector('ui5-table').shadowRoot.querySelector('tr');
    // fix error when navigate without data
    header.addEventListener('keydown', e => {
      const key = e.key || e.keyCode;
      if ((key === 'ArrowDown' || key === 40) && this.data.length === 0) {
        e.stopPropagation();
      }
    });
    header.click();
  }

  /**
   * init data table
   * @private
   */
  _init() {
    const cols = this.columns.replace(/ /g, '').split(',');
    this._headers = this.headers.replace(/ /g, '').split(',');
    this._popinFields = this.popinFields.replace(/ /g, '').split(',');

    this._colStyle = [];
    this.__colStyle = [];
    const _col = [];
    cols.forEach((e, index) => {
      const arr = e.split('|');
      _col.push(arr[0]);
      this._colStyle[arr[0]] = arr[1] ? arr[1] : 'Infinity';
      this.__colStyle[index] = arr[1] ? arr[1] : 'Infinity';
    });

    if (this._headers.length > 1) {
      this._colStyle = [];
      this._headerTexts = [];
      this._headers.forEach((h, i) => {
        const arr = h.split('|');
        this._colStyle[i] = arr[1] ? arr[1] : 'Infinity';
        // eslint-disable-next-line prefer-destructuring
        this._headerTexts[i] = arr[0];
      });
    }

    _col.forEach((fieldPath, index) => {
      if (fieldPath.startsWith('{')) {
        this._bindColumnTmplField(fieldPath, index);
      } else {
        this._bindColumnDataField(fieldPath, index);
      }
    });

    this._showNoData = !!this.noDataText;

    this.requestUpdate();
  }

  /**
   *
   * @param fieldPath
   * @private
   */
  _bindColumnDataField(fieldPath, index) {
    const field = {};
    field.wire = `--internal(*.item.${fieldPath})`;

    field.popin = !!this._popinFields.includes(fieldPath);

    const fieldNode = this._getSpecFieldFromPath(this._fields, fieldPath);

    if (fieldNode) {
      if (this._headers.length > 1) {
        const obj = this._parsePosition(this._headerTexts[index] || '');

        field.colHeaderText = obj.text;
        field.right = obj.right;
        field.center = obj.center;
        field.colMinWidth = this._colStyle[index] || 'Infinity';
      } else {
        field.colMinWidth = this._colStyle[fieldPath];
        field.colHeaderText = fieldNode.meta.label || '';
      }

      const sObj = this._parseWidth(field.colMinWidth);
      field.colMinWidth = sObj.minWidth;
      field.style = sObj.style;

      this.cols.push(field);
    }
  }

  /**
   *
   * @param fieldPath
   * @private
   */
  _bindColumnTmplField(fieldPath, index) {
    const field = {};
    field.wire = `--internal(*.item._value)`;

    field.template = fieldPath.replaceAll('{', '').replaceAll('}', '');

    const obj = this._parsePosition(this._headerTexts[index] || '');

    field.colHeaderText = obj.text;
    field.right = obj.right;
    field.center = obj.center;
    let sObj;
    if (this._headers.length > 1) {
      sObj = this._parseWidth(this._colStyle[index]);
    } else {
      sObj = this._parseWidth(this.__colStyle[index]);
    }
    field.colMinWidth = sObj.minWidth;
    field.style = sObj.style;

    this.cols.push(field);
  }

  /**
   *
   * @param w
   * @returns {{style: string, minWidth: string}}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _parseWidth(w) {
    const obj = { style: '', minWidth: 'Infinity' };
    const arrF = w.split('fix');
    if (arrF.length > 1) {
      obj.style = `width:${arrF[1]}px`;
    } else {
      const arrM = w.split('min');
      if (arrM.length > 1) {
        // eslint-disable-next-line prefer-destructuring
        obj.minWidth = arrM[1];
      } else {
        obj.minWidth = w;
      }
    }

    return obj;
  }

  /**
   *
   * @param t
   * @returns {{center: boolean, text: string, right: boolean}}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _parsePosition(t) {
    const obj = { text: t, right: false, center: false };
    const arrR = t.split('--:');

    if (arrR.length > 1) {
      // eslint-disable-next-line prefer-destructuring
      obj.text = arrR[0];
      obj.right = true;
    } else {
      const arrC = t.split(':-:');
      if (arrC.length > 1) {
        // eslint-disable-next-line prefer-destructuring
        obj.text = arrC[0];
        obj.center = true;
      }
    }

    return obj;
  }

  /**
   * resolves a field specification with the given path
   * @param field
   * @param path
   * @returns {*}
   * @private
   */
  // eslint-disable-next-line consistent-return
  _getSpecFieldFromPath(field, path) {
    if (field) {
      const prop = field;

      const parts = this._split(path);
      if (parts.length > 1) {
        if (field.fields && field.fields[parts[0]]) {
          return this._getSpecFieldFromPath(field.fields[parts[0]], parts.slice(1).join('.'));
        }
        if (!field[parts[0]]) {
          return this._getSpecFieldFromPath(this._specs[field.type], parts.join('.'));
        }
        return this._getSpecFieldFromPath(field[parts[0]], parts.slice(1).join('.'));
      }
      const part = parts[0];

      if (prop.fields && prop.fields[part] !== undefined) {
        return prop.fields[part];
      }
      return this._getSpecFieldFromPath(this._specs[field.type], part);
    }
    // eslint-disable-next-line no-console
    console.warn(
      `Invalid subfield '${path}' in the field-path. please set a correct field-path in cloumn.`,
    );
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return (
      Theme.getThemeForComponent('FuroUi5DataTable') ||
      css`
        :host {
          display: block;
          overflow: auto;
        }

        .no-data {
          height: 3rem;
          text-align: center;
          line-height: 3rem;
        }

        ui5-table-column[center]::part(column) {
          text-align: center;
        }

        ui5-table-column[right]::part(column) {
          text-align: right;
        }

        ui5-table-cell::part(cell):focus {
          outline: none;
        }
      `
    );
  }

  /**
   *@private
   */
  static get properties() {
    return {
      /**
       * list of field-paths which should be as columns displayed
       * comma separated list of field's path. e.g. data.id, data.display|min800 , here `min800` represents the the minimum table width required to display this column. By default it is always displayed.
       */
      columns: {
        type: String,
        attribute: 'columns',
      },
      /**
       * list of headers of the columns. if this header is not defined. the datatable will use the labels of cloumns as the headers.
       * comma separated list of markdown string.
       * e.g.
       * - id --:|min800,  name :-:|min400, here `|min800` represents the the minimum table width required to display this column in pixel.
       * - id --:|fix120,  name :-:|fix120, here `|fix120` represents a fixed table cell width in pixel.
       * By default the column is always displayed.
       *
       * Default position of header is left-justified.
       *
       * Supported variant:
       * right-justified: `--:` , center-justified: `:-:`
       */
      headers: {
        type: String,
        attribute: 'headers',
      },
      /**
       * the text which can be showed when there is no data in table.
       * string
       */
      noDataText: {
        type: String,
        attribute: 'no-data-text',
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
       * comma separated list of field's path. e.g data.id, data.display_name
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
