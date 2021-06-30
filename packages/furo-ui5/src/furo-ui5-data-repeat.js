import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import './lib/ui5-data-repeat-delete.js';
// import './lib/ui5-icons.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/form/src/furo-form-layouter';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * `furo-ui5-data-repeat`
 *  Display for repeated fields.
 *
 *  ```html
 *  <furo-ui5-data-repeat ƒ-bind-data="--data(*.repeaterfield)"
 *      repeated-component="furo-date-input"
 *      delete-icon="remove"
 *      ƒ-add="--addDateClicked"
 *      ></furo-ui5-data-repeat>
 *
 *      <!-- Add is controlled from outside, delete from inside of the item -->
 *      <furo-ui5-data-repeat ƒ-bind-data="--data(*.repeatedcomplextype)"
 *      repeated-component="my-big-form"
 *      ƒ-add="--addClicked"
 *      ></furo-ui5-data-repeat>
 *
 *  ```
 *
 *  Every Attribute (boolean or string) which is set on furo-ui5-data-repeat which is not part of its own api, will be set on the child element.
 *  If you set condensed as an example, it will be set on the repeated element. It is not possible to set wires to the children.
 *
 *
 *
 * @summary automatic display of repeated fields
 * @customElement
 * @demo demo-furo-ui5-data-repeat
 * @appliesMixin FBP
 */
class FuroUi5DataRepeat extends FieldNodeAdapter(FBP(LitElement)) {
  constructor() {
    super();
    /**
     * Set the delete icon to enable deleting of a repeated element.
     *
     * @type {String}
     */
    this.deleteIcon = undefined;
  }

  /**
   * @private
   */
  onFnaRepeatedFieldChanged() {
    this._FBPTriggerWire('--repeatsChanged', this.__fieldNode.repeats);
    this._checkSize();
  }

  /**
   * @private
   */
  onFnaReadonlyChanged(readonly) {
    this.readonly = readonly;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * repeated-component to be used for the items.
       * The component must support ƒ-bind-data
       */
      repeatedComponent: { type: String, attribute: 'repeated-component' },
      /**
       * *OPTIONAL*
       * Identity path of a single item.
       * Use this if you have a field which identifies the item.
       *
       * If you do not set the identity-path, the index will be used.
       */
      identityPath: { type: String, attribute: 'identity-path' },
      /**
       * set this attribute to set the focus to the created item after calling add().
       */
      focusOnCreate: { type: Boolean, attribute: 'focus-on-create' },
      /**
       * disables the add and delete method, note that the nodes from the model are not updated so the repeated elements
       * are still editable. Prefer the usage of specs, metas or fat.
       */
      readonly: { type: Boolean, reflect: true },
    };
  }

  /**
   * Create a attribute for map<string,type> types
   * create a field in a FieldNode, this is useful when using map<string,something>
   * set the value option to init with values
   * @param options {"fieldName":"name","type":"string", "spec":{..}}  spec is optional
   */
  createAttribute(options) {
    // extract type from this.field if not given in options
    if (!options.type) {
      if (this.__fieldNode._spec.type.startsWith('map<')) {
        // eslint-disable-next-line no-param-reassign,prefer-destructuring
        options.type = this.__fieldNode._spec.type.match(/map<string,(.*)>/)[1]; // get the type of map<string,xxxx
      } else {
        // eslint-disable-next-line no-param-reassign
        options.type = this.__fieldNode._spec.type;
      }
    }
    this.__fieldNode.createField(options);
  }

  createAttributeByString(fieldname) {
    this.createAttribute({ fieldName: fieldname });
  }

  set repeatedComponent(component) {
    // add flow repeat to parent and inject on repeated changes
    // repeated
    const container = document.createElement('furo-form-layouter');
    const r = document.createElement('flow-repeat');

    const identityPath = this.identityPath ? this.identityPath : '__index';
    r.setAttribute('identity-path', identityPath);
    r.setAttribute('ƒ-inject-items', '--repeatsChanged');

    this._repeaterNode = r;

    let attrs = '';
    const l = this.attributes.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < l; ++i) {
      const { nodeName } = this.attributes.item(i);
      const { nodeValue } = this.attributes.item(i);
      switch (nodeName) {
        case 'two':
          container.setAttribute('two', '');
          break;
        case 'four':
          container.setAttribute('four', '');
          break;
        case 'eight':
          container.setAttribute('eight', '');
          break;
        case 'delete-icon':
          this.deleteIcon = nodeValue;
          break;
        default:
          if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
            attrs += `${nodeName}="${nodeValue}"`;
          }
      }
    }
    let icn = '';
    if (this.deleteIcon) {
      icn = `<ui5-data-repeat-delete icon="${this.deleteIcon}" ƒ-bind-item="--init"></ui5-data-repeat-delete>`;
    }
    r.innerHTML = `<template><div class="repeat-row"><${component} ${attrs} class="in-repeater" ƒ-focus="--itemSelected" ƒ-bind-data="--init"></${component}>${icn}</div></template>`;

    container.appendChild(r);

    this.shadowRoot.appendChild(container);
  }

  /**
   * hide the element if array is empty
   * @private
   */
  _checkSize() {
    if (this.__fieldNode.repeats.length === 0) {
      this.setAttribute('hidden', '');
      this._isHidden = true;
    } else if (this._isHidden) {
      this.removeAttribute('hidden');
    }
  }

  /**
   * Adds a repeated item
   * @param data
   */
  add(data) {
    if (!this.readonly && this.__fieldNode) {
      this.__fieldNode.add(data);
      if (this.focusOnCreate) {
        // setTimeout(()=>{
        this._repeaterNode.select(this.__fieldNode.repeats.length - 1);
        // },16)
      }
    }
  }

  /**
   * Adds a repeated item with type
   * @param type
   */
  addType(type) {
    if (this.field) {
      this.__fieldNode.add({ '@type': type });
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroUi5DataRepeat') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        .repeat-row {
          display: flex;
          flex-direction: row;
        }

        .in-repeater {
          width: 100%;
          box-sizing: border-box;
        }

        :host([readonly]) ui5-data-repeat-delete {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-ui5-data-repeat', FuroUi5DataRepeat);
