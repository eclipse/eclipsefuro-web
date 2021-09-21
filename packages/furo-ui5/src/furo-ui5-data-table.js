import { LitElement, html, css } from 'lit';
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
import { html as statichtml, literal } from 'lit/static-html.js';

/**
 * `furo-ui5-data-table` display entities in a ui5-table
 *
 * <furo-ui5-data-table
 *  no-data-text="No data available."
 *  ƒ-bind-data="--dao(*.entities)"
 * ></furo-ui5-data-table>
 *
 * @fires {entity} arrow-down-on-last-row - Fired when the ArrowDown is pressed on the last row. The event detail is the original entity of the row
 * @fires {entity} tablerow-selected - Fired when the row is selected. The event detail is the original entity of the row.
 * @fires {entity} arrow-up-on-first-row - Fired when the ArrowUp is pressed on the first row. The event detail is the original entity of the row
 * @fires {HTMLElement} data-loaded - Fired when the data is loaded into data table.
 * the event detail is the data table self.
 *
 * @customElement
 * @demo demo-furo-ui5-data-table Basic usage
 * @demo demo-furo-ui5-data-table-tmpl Usage of Column Templates
 * @demo demo-furo-ui5-data-table-repeats Usage with Repeats
 */
export class FuroUi5DataTable extends FBP(LitElement) {
  constructor() {
    super();
    this.cols = [];
    this._specs = Env.api.specs;
    this.data = [];
    this.mode = 'None';
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
    const table = this.shadowRoot.querySelector('ui5-table');
    if (table && table.shadowRoot) {
      const header = table.shadowRoot.querySelector('tr');
      // fix error when navigate without data
      header.addEventListener('keydown', e => {
        const key = e.key || e.keyCode;
        if ((key === 'ArrowDown' || key === 40) && this.data.length === 0) {
          e.stopPropagation();
        }
      });
      header.click();
    }
  }

  /**
   * focus the first row
   */
  focusLast() {
    this._FBPTriggerWire('--triggerLast');
  }

  /**
   * focus the first row
   */
  focusFirst() {
    this._FBPTriggerWire('--triggerFirst');
  }

  /**
   * init data table
   * @private
   */
  _init() {
    this._ctx = [];
    this._wires = [];
    const fieldPaths = [];

    this.querySelectorAll('ui5-table-column').forEach(col => {
      const fieldPath = col.getAttribute('field');
      fieldPaths.push(fieldPath);
      this._ctx.push(col.getAttribute('context') || 'cell');

      // if no title was set, use the title from the field spec
      if (col.childElementCount === 0 && !fieldPath.startsWith('{')) {
        const fieldNode = this._getSpecFieldFromPath(this._fields, fieldPath);
        const span = document.createElement('span');
        span.innerText = fieldNode.meta.label;
        col.appendChild(span);
      }

      if (fieldPath.startsWith('{')) {
        this._wires.push('--internal(*.item)');
      } else {
        this._wires.push(`--internal(*.item.${fieldPath})`);
      }

      // append to table
      this.shadowRoot.querySelector('ui5-table').appendChild(col);
    });

    this._rowRepeatTemplate = statichtml`<template>
        <furo-ui5-table-row ƒ-._data='--internal(*.item._value)' ƒ-focus='--trigger'>
          ${this._cellMap(fieldPaths)}
        </furo-ui5-table-row>
    </template>`;

    this._showNoData = !!this.noDataText;

    this.requestUpdate();
  }

  /**
   * ui5 data table cell template
   * @param fields
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  _cellMap(fieldPaths) {
    const items = [];
    fieldPaths.forEach((fieldPath, index) => {
      let el = 'furo-type-renderer';
      if (fieldPath.startsWith('{')) {
        el = fieldPath.substr(1, fieldPath.length - 2);
      }
      items.push(`<ui5-table-cell><${el} `);
      items.push(`ƒ-bind-data="${this._wires[index]}"`);
      items.push(`context="${this._ctx[index]}"`);
      items.push(`></${el} ></ui5-table-cell>`);
    });
    return literal([items.join('')]);
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
      if (field[path]) {
        return field[path];
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
          font-variant-numeric: lining-nums tabular-nums;
        }

        .no-data {
          height: 3rem;
          text-align: center;
          line-height: 3rem;
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
       * Defines the mode of the component.
       *
       * Available options are:
       * - MultiSelect
       * - SingleSelect
       * - None
       */
      mode: {
        type: String,
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
    };
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-table ?sticky-column-header="${this.stickyColumnHeader}" mode="${this.mode}">
        <flow-repeat
          ƒ-inject-items="--data"
          internal-wire="--internal"
          ƒ-trigger-first="--triggerFirst"
          ƒ-trigger-last="--triggerLast"
        >
          ${this._rowRepeatTemplate}
        </flow-repeat>
      </ui5-table>
      <slot></slot>
      ${this._showNoData
        ? html`
            <div class="no-data">${this.noDataText}</div>
          `
        : html``}
    `;
  }
}

customElements.define('furo-ui5-data-table', FuroUi5DataTable);
