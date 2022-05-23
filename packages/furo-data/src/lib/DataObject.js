import { EventTreeNode, NodeEvent } from '@furo/framework/src/EventTreeNode.js';
import { FieldNode } from './FieldNode.js';
import { RepeaterNode } from './RepeaterNode.js';
import { ScalarTypeHelper } from './ScalarTypeHelper.js';

/**
 * EntityNode is usually the root node of an eventTree
 */
export class DataObject extends EventTreeNode {
  constructor(parentNode, type, specs) {
    super(parentNode);

    /**
     * reference to the specs
     * @private
     */
    this.__specdefinitions = specs;
    this._spec = this.__specdefinitions[type];
    this._type = type;

    this._initFieldsFromSpec(this, this._spec.fields);

    this._pristine = true;
    this._isValid = true;

    /**
     * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
     */
    this.addEventListener('field-became-valid', () => {
      if (this.__childNodes.filter(f => !f._isValid).length === 0) {
        this._isValid = true;
        this.dispatchNodeEvent(new NodeEvent('data-object-became-valid', this));
      }
    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener('field-became-invalid', () => {
      this._isValid = false;
      this.dispatchNodeEvent(new NodeEvent('data-object-became-invalid', this));
    });

    /**
     * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
     */
    this.addEventListener('field-value-changed', () => {
      this._pristine = false;
    });

    this.addEventListener('repeated-fields-changed', e => {
      this._pristine = false;
      // notifiy field-value-changed on top level
      this.dispatchNodeEvent(
        new NodeEvent('field-value-changed', e.detail, true)
      );
    });
  }

  validateAllFields() {
    // broadcast validation request to all fields
    this.broadcastEvent(new NodeEvent('validation-requested', this));
  }

  /**
   * clears all errors on every fieldnode
   */
  clearAllErrors() {
    // broadcast clearAllErrors request to all fields
    this.broadcastEvent(new NodeEvent('clear-all-errors-requested', this));
  }

  /**
   * set all children to pristine
   * useful for deltas
   */
  setAllToPristine() {
    /**
     * Broadcast Event
     * this will set all fields as pristine and end enable the validation
     */
    this.broadcastEvent(new NodeEvent('set-pristine-request', this));
  }

  /**
   * injects a raw model e.g. body data of a collection or entity
   * @param rawEntity
   */
  injectRaw(rawEntity) {
    // used to *reset* the metas according to the spec
    this.broadcastEvent(new NodeEvent('before-new-data-inject', this));
    // this broadcast will disable validation during setting the values
    this.broadcastEvent(new NodeEvent('disable-validation', this));

    this._rawEntity = rawEntity;
    this._updateFieldValuesAndMetaFromRawEntity(this, rawEntity);
    this._pristine = true;
    this._isValid = true;

    /**
     * Broadcast Event
     * this will set all fields as pristine and end enable the validation
     */
    this.broadcastEvent(new NodeEvent('new-data-injected', this));

    /**
     * @fires data-injected
     *
     * ✋ Internal Event from EntityNode which you can use in the targeted components!
     *
     * Fired when `fn-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
     *
     * This event **bubbles**.
     *
     * detail payload: **{NodeEvent}**
     */
    this.dispatchNodeEvent(new NodeEvent('data-injected', this, true));
  }

  /**
   * Resete zum letzten injected state zurück
   */
  reset() {
    if (this._rawEntity) {
      this.injectRaw(this._rawEntity);
    }
  }

  _hasAncestorOfType(type) {
    return this._type === type;
  }

  get rawEntity() {
    return this._rawEntity;
  }

  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  get _value() {
    return this.getJson();
  }

  /**
   * This setter aliases to injectRaw. Added for compatibility reasons for the FieldNodeAdapter
   * @param rawEntity
   */
  set _value(val) {
    return this.injectRaw(val);
  }

  /**
   * returns the value of the data object as a base64 encoded string
   * @return {string}
   * @private
   */
  get _base64() {
    return window.btoa(
      unescape(encodeURIComponent(JSON.stringify(this._value)))
    );
  }

  /**
   * Set the value of the data object with a base64 encoded string
   * @param encodedData
   * @private
   */
  set _base64(encodedData) {
    this.injectRaw(
      JSON.parse(decodeURIComponent(escape(window.atob(encodedData))))
    );
  }

  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  getJson() {
    const data = {};
    // nur reine Daten zurück geben
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const index in this.__childNodes) {
      const field = this.__childNodes[index];
      data[field._name] = field._value;
    }
    return data;
  }

  /**
   * Returns a json representation of all field validity messages
   * @returns {{}}
   */
  getValidityMessage() {
    const msg = {};
    // returns only validity object
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const index in this.__childNodes) {
      const field = this.__childNodes[index];
      if (field._validityMessage !== undefined) {
        msg[field._name] = field._validityMessage;
      }
    }
    return msg;
  }

  _updateFieldValuesAndMetaFromRawEntity(node, data) {
    let furoMetaDetected = false;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldName in data) {
      const fieldNode = node[fieldName];

      if (fieldNode === undefined) {
        // eslint-disable-next-line no-console
        console.warn('field not specified', fieldName);
        // eslint-disable-next-line no-continue
        continue;
      }
      if (fieldNode._spec.type === 'furo.Meta') {
        furoMetaDetected = data[fieldName];
      }
      if (!fieldNode) {
        // eslint-disable-next-line no-console
        console.warn('unspecified field', fieldName);
      } else if (fieldNode._isRepeater) {
        // const initialSize = fieldNode.repeats.length;

        fieldNode.dispatchNodeEvent(
          new NodeEvent('before-repeated-field-changed', fieldNode, false)
        );

        if (fieldNode.clearListOnNewData) {
          fieldNode.removeAllChildren();
        }

        // update records
        data[fieldName].forEach((repdata, i) => {
          // create if record index do not exist
          if (!fieldNode.repeats[i]) {
            fieldNode._addSilent();
          }

          // Werte aktualisieren
          fieldNode.repeats[i]._value = repdata;
          fieldNode.repeats[i]._pristine = true;
          fieldNode.repeats[i].__index = i;
        });

        // entferne überzählige nodes
        const newSize = data[fieldName].length;
        if (newSize < fieldNode.repeats.length) {
          fieldNode.repeats.splice(newSize);
          fieldNode.__childNodes.splice(newSize);
        }

        fieldNode._pristine = true;
        fieldNode.dispatchNodeEvent(
          new NodeEvent('repeated-fields-changed', fieldNode, true)
        );
        fieldNode.dispatchNodeEvent(
          new NodeEvent('this-repeated-field-changed', fieldNode, false)
        );
      } else if (fieldNode) {
        fieldNode._clearInvalidity();

        // Werte aktualisieren
        fieldNode._value = data[fieldName];
        fieldNode._pristine = true;
      }
    }

    //  clear fields if it is not in the incomming data
    node.__childNodes.forEach(n => {
      // eslint-disable-next-line no-prototype-builtins
      if (data && !data.hasOwnProperty(n._name)) {
        if (n.__childNodes.length > 0) {
          if (n.repeats) {
            // eslint-disable-next-line no-param-reassign
            n._value = [];
          } else {
            // eslint-disable-next-line no-param-reassign
            n._value = {};
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          n._value = ScalarTypeHelper.indeterminateDefault();
        }
      }
    });

    if (furoMetaDetected) {
      this.__updateMetaAndConstraints(furoMetaDetected);
    }
  }

  /**
   * Update meta and constraint fields
   * @param metaAndConstraints
   * @private
   */
  __updateMetaAndConstraints(metaAndConstraints) {
    // on this layer you can only pass the constraint to the children
    // get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
    // a field which is targeted we delegate the sub request to  this field

    // reformat deep level metas
    if (metaAndConstraints.fields) {
      Object.keys(metaAndConstraints.fields).forEach(fldName => {
        if (metaAndConstraints.fields[fldName].constraints) {
          Object.keys(metaAndConstraints.fields[fldName].constraints).forEach(
            constraintKey => {
              // check for dots in key, like value.min
              const constraintPath = constraintKey.split('.');
              if (constraintPath.length > 1) {
                // we have a deep contraint
                const constraintName = constraintPath.pop();

                const newFldName = [fldName].concat(constraintPath).join('.');
                if (!(newFldName in metaAndConstraints.fields)) {
                  // eslint-disable-next-line no-param-reassign
                  metaAndConstraints.fields[newFldName] = {};
                }
                DataObject._pathSet(
                  metaAndConstraints.fields[newFldName],
                  ['constraints', constraintName].join('.'),
                  metaAndConstraints.fields[fldName].constraints[constraintKey]
                );
                // delete from current field, because constraints like value.max are useless
                // eslint-disable-next-line no-param-reassign
                delete metaAndConstraints.fields[fldName].constraints[
                  constraintKey
                ];
              }
            }
          );
        }
      });
    }

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldname in metaAndConstraints.fields) {
      const mc = metaAndConstraints.fields[fieldname];
      const f = fieldname.split('.');
      const target = f[0];
      const subMetaAndConstraints = { fields: {} };
      if (f.length === 1) {
        subMetaAndConstraints.fields[target] = mc;
      } else {
        subMetaAndConstraints.fields[f.slice(1).join('.')] = mc;
      }
      this[target].__updateMetaAndConstraints(subMetaAndConstraints);
    }
  }

  _setInvalid(error) {
    // set field empty, if not defined
    // eslint-disable-next-line no-param-reassign
    error.field = error.field || '';
    const path = error.field.split('.');
    if (path.length > 0 && path[0] !== '') {
      // rest wieder in error reinwerfen
      // eslint-disable-next-line no-param-reassign
      error.field = path.slice(1).join('.');
      if (this[path[0]]) {
        this[path[0]]._setInvalid(error);
      } else {
        // eslint-disable-next-line no-console
        console.warn('Unknown field', path, this._name);
      }
    } else {
      this._isValid = false;
      this._validity = error;
      this.dispatchNodeEvent(new NodeEvent('field-became-invalid', this));
    }
  }

  /**
   * Baut die Felder aufgrund der spec auf
   * @param node
   * @param fieldSpec
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _initFieldsFromSpec(node, fieldSpec) {
    // eslint-disable-next-line no-restricted-syntax
    for (const fieldName in fieldSpec) {
      if (fieldSpec[fieldName].meta && fieldSpec[fieldName].meta.repeated) {
        // eslint-disable-next-line no-param-reassign
        node[fieldName] = new RepeaterNode(
          node,
          fieldSpec[fieldName],
          fieldName
        );
      } else {
        // eslint-disable-next-line no-param-reassign
        node[fieldName] = new FieldNode(node, fieldSpec[fieldName], fieldName);
      }
    }
  }

  toString() {
    return this._spec.type;
  }

  /**
   * helper to set deep paths
   * @param path String a.b.c.d
   * @param value
   * @private
   */
  static _pathSet(root, path, value) {
    let obj = root; // we set the values relative to the fieldnode, so fieldnode is the root
    const parts = path.split('.');
    while (parts.length > 1) {
      const key = parts.shift();
      // create if not exist
      if (!(key in obj)) {
        obj[key] = {};
      }
      obj = obj[key];
    }
    obj[parts.shift()] = value;
  }
}
