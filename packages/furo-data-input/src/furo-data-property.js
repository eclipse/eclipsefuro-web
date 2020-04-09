import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';
// import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';

/**
 * `furo-data-property`
 *  Field for type furo.Property. It works with repeated types an nonrepeating type. Supported
 *
 *  ```html
 *  <!-- single Property -->
 *  <furo-data-property ƒ-bind-data="--entity(*.single_type_property)"></furo-data-property>
 *  <!-- repeated Property -->
 *  <furo-data-property ƒ-bind-data="--entity(*.type_property)"></furo-data-property>
 *
 *  ```
 *
 *  ## Example data for the data-object looks like this
 *
 *  ```json
 *  "single_type_property": {
 *    "data": {
 *      "@type": "google.type.Date",
 *      "day": 8,
 *      "month":  11,
 *      "year": 2022
 *    },
 *    "display_name": "a date",
 *    "id": "date",
 *    "code": "date",
 *    "meta": {
 *      "fields": {
 *        "data": {
 *          "meta": {
 *            "label": "Additional fields",
 *            "hint": "this is data"
 *          },
 *          "constraints": {
 *            "min": {
 *              "value": "2019-09-09",
 *              "message": "to small"
 *            }
 *          }
 *        }
 *      }
 *    }
 *  }
 *  ```
 * ## Example StringOptions Field
 *
 * ```json
 * {
 *   "data": {
 *        "@type": "furo.StringOptionProperty",
 *        "id": "bb",
 *        "display_name": "Display"
 *      },
 *      "display_name": "Display",
 *      "id": "opt",
 *      "code": "option",
 *      "meta": {
 *        "fields": {
 *          "data": {
 *            "meta": {
 *              "label": "Please select",
 *              "hint": "datehint is data",
 *              "repeated": false,
 *              "options": [
 *                {
 *                  "id": "aa",
 *                  "display_name": "The display a"
 *                },
 *                {
 *                  "id": "bb",
 *                  "display_name": "The display b"
 *                }
 *              ]
 *            }
 *          }
 *        }
 *      }
 *    }
 *
 * ```
 *
 *  The current type mappings are:
 *
 * - "google.type.Date": "furo-data-date-input"
 * - "furo.StringProperty": "furo-data-text-input"
 * - "furo.IntegerProperty": "furo-data-number-input"
 * - "furo.NumberProperty": "furo-data-number-input"
 * - "furo.StringOptionProperty": "furo-data-collection-dropdown"
 *
 * @summary display and bind types of type any
 * @customElement
 * @demo demo-furo-data-property
 * @appliesMixin FBP
 */
class FuroDataProperty extends FBP(LitElement) {
  constructor() {
    super();
    this.typemap = {
      'google.type.Date': 'furo-data-date-input',
      'google.protobuf.StringValue': 'furo-data-text-input',
      'google.protobuf.FloatValue': 'furo-data-number-input',
      'google.protobuf.Int32Value': 'furo-data-number-input',
      'google.protobuf.UInt32Value': 'furo-data-number-input',
      'google.protobuf.BoolValue': 'furo-data-checkbox-input',
      'furo.StringProperty': 'furo-data-text-input',
      'furo.IntegerProperty': 'furo-data-number-input',
      'furo.NumberProperty': 'furo-data-number-input',
      'furo.StringOptionProperty': 'furo-data-collection-dropdown',
    };
  }

  bindData(propertyField) {
    this.field = propertyField;

    if (propertyField._isRepeater) {
      // add flow repeat to parent and inject on repeated changes
      // repeated
      const r = document.createElement('flow-repeat');
      r.setAttribute('identity-path', 'id._value');

      let attrs = '';
      const l = this.attributes.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < l; ++i) {
        const { nodeName } = this.attributes.item(i);
        const { nodeValue } = this.attributes.item(i);
        if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
          attrs += `${nodeName}="${nodeValue}"`;
        }
      }
      r.innerHTML = `<template><furo-data-property ƒ-bind-data="--init" ${attrs}></furo-data-property></template>`;

      const repeater = this.parentNode.insertBefore(r, this);
      this._createdRepeater = repeater;

      this.field.addEventListener('this-repeated-field-changed', () => {
        repeater.injectItems(this.field.repeats);
      });
      // inject if data is already here
      if (this.field.repeats.length > 0) {
        repeater.injectItems(this.field.repeats);
      }
    } else {
      this.field.data.addEventListener(
        'branch-value-changed',
        () => {
          this._createPropComponent(propertyField);
        },
        { once: true },
      );

      // data already in data-object
      if (this.field.data['@type']) {
        this._createPropComponent(propertyField);
      }
    }
  }

  _createPropComponent(propertyField) {
    if (!this._property_created) {
      const type = propertyField.data['@type']._value.replace(/.*\//, '');
      let e;

      // TODO, should check for the better generic solution
      if (
        type === 'furo.Reference' &&
        propertyField.data &&
        propertyField.data.link &&
        propertyField.data.link.type
      ) {
        const c = `${propertyField.data.link.type._value.replace('.', '-')}-reference-search`;
        e = document.createElement(c);
      } else {
        e = document.createElement(this.typemap[type]);
      }

      // Grab all of the original's attributes, and pass them to the replacement
      const l = this.attributes.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < l; ++i) {
        const { nodeName } = this.attributes.item(i);
        const { nodeValue } = this.attributes.item(i);
        if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
          e.setAttribute(nodeName, nodeValue);
        }
      }

      if (e.bindData) {
        switch (type) {
          // the input elements for string and number are just working with scalar values
          case 'furo.StringProperty':
          case 'furo.NumberProperty':
          case 'furo.IntegerProperty':
            e.bindData(propertyField.data.data);
            break;
          case 'google.protobuf.FloatValue':
          case 'google.protobuf.Int32Value':
          case 'google.protobuf.UInt32Value':
          case 'google.protobuf.StringValue':
          case 'google.protobuf.BoolValue':
            e.bindData(propertyField.data.value);
            break;
          default:
            e.bindData(propertyField.data);
        }

        this._createdProp = this.parentNode.insertBefore(e, this);
        propertyField.data.dispatchNodeEvent(
          new NodeEvent('this-metas-changed', propertyField.data, false),
        );
        this._property_created = true;
      } else {
        // eslint-disable-next-line no-console
        console.warn(propertyField.data['@type']._value, 'not in map', this);
      }
    }
  }

  disconnectedCallback() {
    if (this._createdProp) {
      this._createdProp.remove();
    }
    if (this._createdRepeater) {
      this._createdRepeater.remove();
    }
  }

  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDataProperty') ||
      css`
        :host {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-data-property', FuroDataProperty);
