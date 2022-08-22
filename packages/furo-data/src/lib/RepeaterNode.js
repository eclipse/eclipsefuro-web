import { EventTreeNode, NodeEvent } from '@furo/framework/src/EventTreeNode.js';
// eslint-disable-next-line import/no-cycle
import { FieldNode } from './FieldNode.js';

/**
 *
 * ## internal events
 * - *before-repeated-field-changed*, fired before new data is injected
 * - *this-metas-changed*, when the metas of a field changed
 * - *repeat-became-valid*, fired when all sub items are valid, after one was invalid before
 * - *repeat-became-invalid*, fired when one sub item switches to a invalid state
 * - *repeated-fields-changed*, fired when this or any child repeaters was changed (new data, add, remove)
 * - *this-repeated-field-changed*, fired when this repeater was changed (new data, add, remove)
 * - *repeated-fields-all-removed* fired when all nodes of a repeater was deleted
 * - *this-repeated-field-removed*, fired whe a node of this repeater was deleted
 * - *this-node-field-deleted*, fired when this node was deleted
 * - *node-field-deleted, fired when a child node was deleted
 * - *repeated-fields-added*, fired when a node on this or any child repeater was added
 * - *this-repeated-field-added*, fired when a node on this repeater was added
 *
 */
export class RepeaterNode extends EventTreeNode {
  constructor(parentNode, spec, fieldName) {
    super(parentNode);
    this.__specdefinitions = parentNode.__specdefinitions;
    this._isRepeater = true;
    this.repeats = [];
    this._spec = spec;
    this._name = fieldName;

    /**
     * Set this to true to clear the list on new data instead updating the current list.
     * @type {boolean}
     */
    this.clearListOnNewData = false;

    if (this._spec.meta) {
      this._meta = JSON.parse(JSON.stringify(this._spec.meta));
    } else {
      this._meta = (function emptyObject() {
        return {};
      })();
    }

    // check parent readonly meta
    if (parentNode && parentNode._meta && parentNode._meta.readonly === true) {
      this._meta.readonly = true;
    }

    if (this._spec.constraints) {
      this._constraints = JSON.parse(JSON.stringify(this._spec.constraints));
    } else {
      this._constraints = (function emptyObject() {
        return {};
      })();
    }

    this._pristine = true;
    this._isValid = true;

    // inherit _validationDisabled from parent
    this._validationDisabled = this.__parentNode._validationDisabled;

    // handling default _values
    let tmp = this._meta.default || [];
    // if the default _value is already an array do nothing otherwise try to parse json
    if (typeof this._meta.default === 'string') {
      try {
        tmp = JSON.parse(this._meta.default);
      } catch (error) {
        // reset to empty
        tmp = [];
      }
    }

    this._value = tmp;

    /**
     * Reset the metas
     */
    this.addEventListener('before-new-data-inject', () => {
      if (this._spec.meta) {
        this._meta = JSON.parse(JSON.stringify(this._spec.meta));
      } else {
        this._meta = (function emptyObject() {
          return {};
        })();
      }
      // check parent readonly meta
      if (
        parentNode &&
        parentNode._meta &&
        parentNode._meta.readonly === true
      ) {
        this._meta.readonly = true;
      }
      this.dispatchNodeEvent(new NodeEvent('this-metas-changed', this, false));
    });

    /**
     * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
     */
    this.addEventListener('field-became-valid', () => {
      if (this.repeats.filter(f => !f._isValid).length === 0) {
        this._isValid = true;
        this.dispatchNodeEvent(new NodeEvent('repeat-became-valid', this));
      }
    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener('field-became-invalid', () => {
      this._isValid = false;
      this.dispatchNodeEvent(new NodeEvent('repeat-became-invalid', this));
    });
    /**
     * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
     */
    this.addEventListener('field-value-changed', () => {
      this._pristine = false;
    });
    this.addEventListener('repeated-fields-changed', () => {
      this._pristine = false;
    });

    this.addEventListener('disable-validation', () => {
      this._validationDisabled = true;
    });
    this.addEventListener('enable-validation', () => {
      this._validationDisabled = true;
    });

    // will be broadcasted by dataObject
    this.addEventListener('set-pristine-request', () => {
      this._pristine = true;
      this._validationDisabled = false;
    });

    this.addEventListener('new-data-injected', () => {
      this._pristine = true;
      this._validationDisabled = false;
    });

    this.addEventListener('parent-readonly-meta-set', () => {
      const roBefore = this._meta.readonly;
      // check parent readonly meta and inherit if true
      if (
        (parentNode && parentNode._meta && parentNode._meta.readonly) ||
        (this._meta && this._meta.readonly) ||
        (this._spec.meta && this._spec.meta.readonly)
      ) {
        this._meta.readonly = true;
      } else {
        this._meta.readonly = false;
      }
      if (roBefore !== this._meta.readonly) {
        this.dispatchNodeEvent(
          new NodeEvent('this-metas-changed', this, false)
        );
      }
    });

    // store __initial_value _value for resetting the field
    this.__initialValue = JSON.stringify(this._value);
  }

  moveNode(oldIndex, newIndex) {
    super.moveNode(oldIndex, newIndex);
    this.dispatchNodeEvent(
      new NodeEvent('repeated-fields-changed', this, true)
    );
    this.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-changed', this, false)
    );
  }

  /**
   * resets the field to the initial _values from the spec
   */
  reinit() {
    this._value = JSON.parse(this.__initialValue);
  }

  /**
   * removes all children
   */
  reset() {
    this.removeAllChildren();
  }

  /**
   * deletes all repeated fields on this node
   */
  removeAllChildren() {
    this.__childNodes = [];
    this.repeats = [];
    this.dispatchNodeEvent(
      new NodeEvent('repeated-fields-all-removed', this.repeats, false)
    );
  }

  /**
   * infinite recursive element protection
   * we can return false here, because a repeater node is not created automatically
   */
  // eslint-disable-next-line class-methods-use-this
  _hasAncestorOfType() {
    return false;
  }

  deleteNode() {
    const index = this.__parentNode.__childNodes.indexOf(this);
    this.__parentNode.__childNodes.splice(index, 1);
    delete this.__parentNode[this._name];

    // notify
    this.dispatchNodeEvent(
      new NodeEvent('this-node-field-deleted', this._name, false)
    );
    this.dispatchNodeEvent(
      new NodeEvent('node-field-deleted', this._name, true)
    );

    // because this is deleted, notifiy from parent
    this.__parentNode.dispatchNodeEvent(
      new NodeEvent('repeated-fields-changed', this.__parentNode, true)
    );
    this.__parentNode.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-changed', this.__parentNode, false)
    );
  }

  set _value(val) {
    if (Array.isArray(val)) {
      this.dispatchNodeEvent(
        new NodeEvent('before-repeated-field-changed', this, false)
      );

      if (this.clearListOnNewData) {
        this.removeAllChildren();
        this.dispatchNodeEvent(
          new NodeEvent('this-repeated-field-changed', this, false)
        );
      }

      val.forEach((repdata, i) => {
        if (!this.repeats[i]) {
          this._addSilent();
        }
        // Werte aktualisieren
        this.repeats[i]._value = repdata;
        this.repeats[i]._pristine = true;
      });
      // remove additional nodes in repeats console.log(val.length,this.repeats.length)
      if (this.repeats.length > val.length) {
        const l = val.length - 1;

        for (let i = this.repeats.length - 1; i > l; i -= 1) {
          this.deleteChild(i);
        }
      }

      this.dispatchNodeEvent(
        new NodeEvent('repeated-fields-changed', this, true)
      );
      this.__parentNode.dispatchNodeEvent(
        new NodeEvent('this-repeated-field-changed', this, false)
      );
      this.dispatchNodeEvent(
        new NodeEvent('this-repeated-field-changed', this, false)
      );
    }
  }

  __updateMetaAndConstraints(metaAndConstraints) {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldname in metaAndConstraints.fields) {
      const mc = metaAndConstraints.fields[fieldname];
      const f = fieldname.split('.');

      const target = f[0];
      const targetfield = f[1];

      if (f.length === 2) {
        // typo protection
        if (this.repeats[parseInt(target, 10)][targetfield]) {
          // we are on the parent of a endpoint. Update the metas in this
          const field = this.repeats[parseInt(target, 10)][targetfield];

          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const m in mc.meta) {
            // update the metas
            field._meta[m] = mc.meta[m];
            // broadcast readonly changes for all ancestors
            if (m === 'readonly') {
              this.broadcastEvent(
                new NodeEvent('parent-readonly-meta-set', this, true)
              );
            }
          }
          // eslint-disable-next-line guard-for-in,no-restricted-syntax
          for (const c in mc.constraints) {
            // update the constraints
            field._constraints[c] = mc.constraints[c];
          }
          /**
           * @fires this-metas-changed INTERNAL Event
           *
           * Fired when field metas, constraints or options changed
           * detail payload:
           */
          field.dispatchNodeEvent(
            new NodeEvent('this-metas-changed', field, false)
          );

          // exit here, it does not go deeper
          return;
        }
      }

      const subMetaAndConstraints = { fields: {} };
      subMetaAndConstraints.fields[f.slice(2).join('.')] = mc;
      // typo protection
      if (this.repeats[parseInt(target, 10)][targetfield]) {
        this.repeats[parseInt(target, 10)][
          targetfield
        ].__updateMetaAndConstraints(subMetaAndConstraints);
      }
    }
  }

  get _value() {
    return this.repeats.map(f => f._value);
  }

  /**
   * Returns all not readonly field values with deep dive
   *
   * @private
   */
  get _transmitValue() {
    const n = [];
    this.__childNodes.forEach(f => {
      const val = f._transmitValue;
      if (val !== undefined) {
        n.push(val);
      }
    });
    return n.length ? n : undefined;
  }

  /**
   * Returns all modified field values with deep dive (! _pristine)
   * @private
   */
  get _deltaValue() {
    if (!this._pristine) {
      return this._value;
    }
    return undefined;
  }

  /**
   * Returns required fields with all children which are modified or
   * not readonly
   * @private
   */
  get _requiredValue() {
    const n = [];
    this.__childNodes.forEach(f => {
      const val = f._requiredValue;
      if (val !== undefined) {
        n.push(val);
      }
    });
    return n.length ? n : undefined;
  }

  /**
   * Returns all validation messages
   * @returns {undefined|*}
   * @private
   */
  get _validityMessage() {
    if (!this._isValid) {
      return this._validityMessage;
    }
    return undefined;
  }

  /**
   * delegates the trigger to all repeats
   * @param event
   * @private
   */
  _triggerDeepNodeEvent(event) {
    this.__childNodes.forEach(f => {
      f._triggerDeepNodeEvent(event);
    });
  }

  /**
   * Deletes a repeated item by index
   * @param index
   */
  deleteChild(index) {
    this.repeats.splice(index, 1);
    this.__childNodes.splice(index, 1);

    this.dispatchNodeEvent(
      new NodeEvent('repeated-fields-changed', this.repeats, true)
    );
    this.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-removed', this.repeats, false)
    );

    this.dispatchNodeEvent(
      new NodeEvent('repeated-fields-removed', this.repeats, true)
    );
    this.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-changed', this, false)
    );
    this.__parentNode.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-changed', this, false)
    );
  }

  _addSilent() {
    const fieldNode = new FieldNode(this, this._spec, this._name);
    /**
     * by adding a repeated node, which is itself repeated, the child node can not be repeated
     * So set this to false in the meta should be correct
     *
     */
    fieldNode._meta.repeated = false;

    // if this field has disabled Validation, pass to new attributes. Because they do not have to validate too.
    if (this._validationDisabled || this.__parentNode._validationDisabled) {
      fieldNode._validationDisabled = true;
    }
    const index = this.repeats.push(fieldNode) - 1;

    fieldNode.__index = index;

    // add function to remove field from list
    fieldNode._deleteFromList = () => {
      this.deleteChild(this.repeats.indexOf(fieldNode));
    };

    return index;
  }

  _setInvalid(error) {
    this._isValid = false;
    const path = error.field.split('.');
    if (path.length > 0) {
      // den rest wieder in error reinwerfen
      // eslint-disable-next-line no-param-reassign
      error.field = path.slice(1).join('.');
    }

    if (this.repeats[path[0]]) {
      this.repeats[path[0]]._setInvalid(error);
    }
  }

  _getPath(deeppath) {
    const path = deeppath.split('.');
    if (path.length > 0) {
      // den rest wieder in error reinwerfen
      // eslint-disable-next-line no-param-reassign
      deeppath = path.slice(1).join('.');
    }

    if (this.repeats[path[0]]) {
      return this.repeats[path[0]]._getPath(deeppath);
    }
    return this;
  }

  _setState(state) {
    if (state.state === 'Error') {
      this._isValid = false;
    }
    const path = state.field.split('.');
    if (path.length > 0) {
      // den rest wieder in error reinwerfen
      // eslint-disable-next-line no-param-reassign
      state.field = path.slice(1).join('.');
    }

    if (this.repeats[path[0]]) {
      this.repeats[path[0]]._setState(state);
    }
  }

  add(data) {
    const index = this._addSilent();
    this._pristine = false;

    // set data if given
    if (data !== undefined) {
      const child = this.repeats[index];
      child._value = data;
    }
    this.dispatchNodeEvent(
      new NodeEvent('repeated-fields-added', this.repeats[index], true)
    );
    this.__parentNode.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-added', this.repeats[index], false)
    );
    this.dispatchNodeEvent(
      new NodeEvent('repeated-fields-changed', this, true)
    );
    this.__parentNode.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-changed', this, false)
    );
    this.dispatchNodeEvent(
      new NodeEvent('this-repeated-field-changed', this, false)
    );
    // return field for chainabilty
    return this.repeats[index];
  }
}
