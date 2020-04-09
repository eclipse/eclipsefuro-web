import { EventTreeNode, NodeEvent } from '@furo/framework/src/EventTreeNode.js';
// eslint-disable-next-line import/no-cycle
import { RepeaterNode } from './RepeaterNode.js';
import { Helper } from './Helper.js';

export class FieldNode extends EventTreeNode {
  constructor(parentNode, fieldSpec, fieldName) {
    super(parentNode);
    this.__specdefinitions = parentNode.__specdefinitions;

    this._spec = fieldSpec;

    if (this._spec.meta) {
      this._meta = JSON.parse(JSON.stringify(this._spec.meta));
    } else {
      this._meta = (function emptyObject() {
        return {};
      })();
    }

    // check parent readonly meta and inherit if true
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

    this._name = fieldName;
    this.__index = fieldName;
    this.__value = null;
    this._pristine = true;
    this._isValid = true;

    // inherit _validationDisabled from parent
    this._validationDisabled = this.__parentNode._validationDisabled;

    // Build custom type if a spec exists
    if (this.__specdefinitions[this._spec.type] !== undefined) {
      // check for recursion

      if (!this.__parentNode._hasAncestorOfType(this._spec.type)) {
        if (this._spec.type !== 'google.protobuf.Any') {
          this._createVendorType(this._spec.type);
        }
      } else {
        this._isRecursion = true;
      }
    }

    // set default value from meta
    if (this._meta && this._meta.default) {
      this.defaultvalue = this._meta.default;
    }

    /**
     * Schaltet ein Feld auf valid, müssen wir alle Kinder oder verästelungend des Felds auf validity prüfen...
     */
    this.addEventListener('field-became-valid', () => {
      const v = this.__childNodes.filter(f => !f._isValid);
      if (v.length === 0) {
        this._isValid = true;
      }
    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener('field-became-invalid', () => {
      this._isValid = false;
    });

    this.addEventListener('field-value-changed', () => {
      this._pristine = false;
    });

    this.addEventListener('disable-validation', () => {
      this._validationDisabled = true;
    });
    this.addEventListener('enable-validation', () => {
      this._validationDisabled = false;
    });

    this.addEventListener('new-data-injected', () => {
      this._pristine = true;
      this._validationDisabled = false;
    });

    this.addEventListener('validation-requested', () => {
      this._checkConstraints();
    });

    this.addEventListener('parent-readonly-meta-set', () => {
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
    });

    // store __initialValue value for resetting the field
    this.__initialValue = JSON.stringify(this._value);
  }

  /**
   * create a field in a FieldNode, this is useful when using map<string,something>
   *   set the value option to init with values
   * @param options {"fieldName":"name","type":"string", "spec":{..}}  spec is optional
   */
  createField(options) {
    const { fieldName } = options;
    let spec = { type: options.type };

    if (options.spec) {
      spec = options.spec;
    }

    if (!this[fieldName]) {
      this[fieldName] = new FieldNode(this, spec, fieldName);
      this.dispatchNodeEvent(new NodeEvent('this-node-field-added', this, false));
      this.dispatchNodeEvent(new NodeEvent('node-field-added', this, true));
      // set Value if given
      if (options._value) {
        this[fieldName]._value = options._value;
      }
      return true;
    }
    return false;
  }

  /**
   * infinite recursive element protection
   */
  _hasAncestorOfType(type) {
    if (this._type === type) {
      return true;
    }
    return this.__parentNode._hasAncestorOfType(type);
  }

  moveNode(oldIndex, newIndex) {
    super.moveNode(oldIndex, newIndex);
    this.dispatchNodeEvent(new NodeEvent('field-value-changed', this, true));
    this.dispatchNodeEvent(new NodeEvent('this-field-value-changed', this, false));
  }

  /**
   * resets the field to the initial values from the spec
   */
  reinit() {
    this._value = JSON.parse(this.__initialValue);
  }

  _createVendorType(type) {
    if (this.__specdefinitions[type]) {
      // eslint-disable-next-line no-restricted-syntax
      for (const fieldName in this.__specdefinitions[type].fields) {
        if (
          this.__specdefinitions[type].fields[fieldName].meta &&
          this.__specdefinitions[type].fields[fieldName].meta.repeated
        ) {
          this[fieldName] = new RepeaterNode(
            this,
            this.__specdefinitions[type].fields[fieldName],
            fieldName,
          );
        } else {
          this[fieldName] = new FieldNode(
            this,
            this.__specdefinitions[type].fields[fieldName],
            fieldName,
          );
        }
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn(`${type} does not exist`);
    }
  }

  set _value(val) {
    // create vendor type if this field is a recusion an was not generated
    if (this._isRecursion && val) {
      this._createVendorType(this._spec.type);
    }

    // type any
    this._createAnyType(val);

    // map<string, something> typ
    if (this._spec.type.startsWith('map<')) {
      this._updateKeyValueMap(val, this._spec.type);
    } else if (this.__childNodes.length > 0) {
      let furoMetaDetected = false;
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const index in this.__childNodes) {
        const field = this.__childNodes[index];

        if (field._spec.type === 'furo.Meta') {
          // we have meta declaration on this layer
          furoMetaDetected = val[field._name];
        }

        // eslint-disable-next-line no-prototype-builtins
        if (val && val.hasOwnProperty(field._name)) {
          field._value = val[field._name];
        }
      }

      /**
       * if we have meta on this layer, we should update the siblings
       */
      if (furoMetaDetected) {
        this.__updateMetaAndConstraints(furoMetaDetected);
      }
    } else {
      // update the primitive type
      this._oldvalue = this._value;
      this.__value = val;
      this._pristine = false;

      if (!this._validationDisabled) {
        // validate changes
        this._checkConstraints();
      }

      if (JSON.stringify(this._oldvalue) !== JSON.stringify(this.__value)) {
        /**
         * @event (field-value-changed)
         *
         * ✋ Internal Event from EntityNode which you can use in the targeted components!
         *
         * Fired when a value on a field node changes. This event **bubbles** by default. Can be used on any node.
         *
         * detail payload: **{NodeEvent}** with reference to the FieldNode
         */
        this.dispatchNodeEvent(new NodeEvent('field-value-changed', this, true));
        /**
         * @event (this-field-value-changed)
         *
         * ✋ Internal Event from EntityNode which you can use in the targeted components!
         *
         * Fired when a value on a particular field node changes. This event **does not bubble**. Can be used on any node.
         *
         * detail payload: **{NodeEvent}** with reference to the FieldNode
         */
        this.dispatchNodeEvent(new NodeEvent('this-field-value-changed', this, false));
      }
    }

    //  clear field if it is not in the incomming data
    // set default values according to https://developers.google.com/protocol-buffers/docs/proto3#default
    this.__childNodes.forEach(n => {
      // eslint-disable-next-line no-prototype-builtins
      if (val && !val.hasOwnProperty(n._name)) {
        // object or repeater
        if (n.__childNodes.length > 0) {
          if (n.repeats) {
            // eslint-disable-next-line no-param-reassign
            n._value = [];
          } else {
            // eslint-disable-next-line no-param-reassign
            n._value = {};
          }
        } else {
          // skalar value
          // eslint-disable-next-line no-param-reassign
          n._value = Helper.defaultForType(n._spec.type);
        }
      }
    });

    this.dispatchNodeEvent(new NodeEvent('branch-value-changed', this, false));
  }

  // check the validity against spec and meta
  _checkConstraints() {
    let validity = true;
    // todo: decide if we should check for type conformity like uint32 is positive and not bigger then 32bit
    // validate only if they are constraints
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const constraintName in this._constraints) {
      const constraint = this._constraints[constraintName];
      const numericType = Helper.isNumericType(this._spec.type);
      switch (constraintName.toLowerCase()) {
        /**
         * the min constraint
         */
        case 'min':
          if (numericType) {
            if (validity && this._value < parseFloat(constraint.is)) {
              this._validity = { constraint: constraintName, description: constraint.message };
              validity = false;
            }
          } else if (validity && this._value.length < constraint.is) {
            this._validity = { constraint: constraintName, description: constraint.message };
            validity = false;
          }
          break;
        /**
         * the max constraint
         */
        case 'max':
          if (numericType) {
            if (validity && this._value > parseFloat(constraint.is)) {
              this._validity = { constraint: constraintName, description: constraint.message };
              validity = false;
            }
          } else if (validity && this._value.length > constraint.is) {
            this._validity = { constraint: constraintName, description: constraint.message };
            validity = false;
          }
          break;
        /**
         * step
         */
        case 'step':
          if (numericType) {
            // step check is (value - min)%is == 0
            const modulo = parseFloat(constraint.is);
            let min = 0;
            if (this._constraints.min && this._constraints.min.is) {
              min = parseFloat(this._constraints.min.is);
            }

            if (validity && (min - this._value) % modulo !== 0) {
              this._validity = { constraint: constraintName, description: constraint.message };
              validity = false;
            }
          }
          break;
        /**
         * the pattern constraint
         */
        case 'pattern':
          if (validity && (this._value == null || !this._value.match(new RegExp(constraint.is)))) {
            this._validity = { constraint: constraintName, description: constraint.message };
            validity = false;
          }
          break;

        /**
         * the min constraint
         */
        case 'required':
          if (numericType) {
            if (validity && this._value == null) {
              this._validity = { constraint: constraintName, description: constraint.message };
              validity = false;
            }
          } else if (validity && (this._value == null || this._value.length === 0)) {
            this._validity = { constraint: constraintName, description: constraint.message };
            validity = false;
          }
          break;
        default:
      }
    }

    if (!validity) {
      this._isValid = false;
      this.dispatchNodeEvent(new NodeEvent('field-became-invalid', this));
    } else {
      this._clearInvalidity();
    }
    return validity;
  }

  __updateMetaAndConstraints(metaAndConstraints) {
    // on this layer you can only pass the constraint to the children
    // get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
    // a field which is targeted we delegate the sub request to  this field
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldname in metaAndConstraints.fields) {
      const mc = metaAndConstraints.fields[fieldname];
      const f = fieldname.split('.');
      if (f.length === 1) {
        // we are on the parent of a endpoint. Update the metas in this
        const field = f[0];
        // eslint-disable-next-line no-restricted-syntax
        for (const m in mc.meta) {
          // update the metas
          if (this[field]) {
            this[field]._meta[m] = mc.meta[m];
            // broadcast readonly changes for all ancestors
            if (m === 'readonly') {
              this.broadcastEvent(new NodeEvent('parent-readonly-meta-set', this, true));
            }
          } else {
            // eslint-disable-next-line no-console
            console.warn('invalid meta', mc, metaAndConstraints);
            return;
          }
        }
        // eslint-disable-next-line no-restricted-syntax
        for (const c in mc.constraints) {
          // update the constraints
          if (this[field]) {
            this[field]._constraints[c] = mc.constraints[c];
          } else {
            // eslint-disable-next-line no-console
            console.warn('invalid meta', mc, metaAndConstraints);
            return;
          }
        }
        /**
         * @event this-metas-changed INTERNAL Event
         *
         * Fired when field metas, constraints or options changed
         * detail payload:
         */
        this[field].dispatchNodeEvent(new NodeEvent('this-metas-changed', this[field], false));

        // exit here, it does not go deeper
        return;
      }
      const target = f[0];
      const subMetaAndConstraints = { fields: {} };
      subMetaAndConstraints.fields[f.slice(1).join('.')] = mc;

      this[target].__updateMetaAndConstraints(subMetaAndConstraints);
    }
  }

  _createAnyType(val) {
    // remove if type changes
    if (val && this.__anyCreated && this['@type']._value !== val['@type']) {
      for (let i = this.__childNodes.length - 1; i >= 0; i -= 1) {
        const field = this.__childNodes[i];
        if (!val[field._name]) {
          field.deleteNode();
        }
      }
      this.__anyCreated = false;
    }

    if (this._spec.type === 'google.protobuf.Any' && val && val['@type'] && !this.__anyCreated) {
      // create custom type if not exist
      // any can only be a complex type
      this._createVendorType(val['@type'].replace(/.*\//, '')); // create with basename of the type (xxx.xxx.xx/path/base.Type becomes base.Type)
      this.__anyCreated = true;
      this.createField({ fieldName: '@type', type: 'string', value: val['@type'] });
    }
  }

  _updateKeyValueMap(val, spec) {
    const vType = spec.match(/,\s*(.*)>/)[1];
    const fieldSpec = { type: vType };

    this._fieldIsMap = true;
    // create if not exist
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const fieldName in val) {
      if (this[fieldName] === undefined) {
        this[fieldName] = new FieldNode(this, fieldSpec, fieldName);
      }
      // update data
      this[fieldName]._value = val[fieldName];
    }
    // remove unseted

    for (let i = this.__childNodes.length - 1; i >= 0; i -= 1) {
      const field = this.__childNodes[i];
      if (!val || !val[field._name]) {
        field.deleteNode();
      }
    }
  }

  /**
   * deletes the fieldnode
   */
  deleteNode() {
    // remove from list if this is a repeated item
    if (typeof this._deleteFromList === 'function') {
      this._deleteFromList();
    } else {
      const index = this.__parentNode.__childNodes.indexOf(this);
      this.__parentNode.__childNodes.splice(index, 1);
      delete this.__parentNode[this._name];
      this.dispatchNodeEvent(new NodeEvent('field-value-changed', this._name, true));
    }
    // notify
    this.dispatchNodeEvent(new NodeEvent('this-node-field-deleted', this._name, false));
    this.dispatchNodeEvent(new NodeEvent('node-field-deleted', this._name, true));
  }

  set defaultvalue(val) {
    // if the default value is already an object, number,array do nothing otherwise try to parse json
    if (typeof val === 'string') {
      try {
        // eslint-disable-next-line no-param-reassign
        val = JSON.parse(val);
      } catch (error) {
        // nothing to do
      }
    }

    // type any
    this._createAnyType(val);

    if (this.__childNodes.length > 0 && val) {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const index in this.__childNodes) {
        const field = this.__childNodes[index];
        field.defaultvalue = val[field._name];
      }
    } else if (this._spec.type.startsWith('map<')) {
      this._updateKeyValueMap(val, this._spec.type);
    } else {
      this._oldvalue = this._value;
      this.__value = val;
      this._pristine = true;
    }
  }

  get _value() {
    if (this.__childNodes.length > 0 || this._fieldIsMap) {
      this.__value = {};
      // nur reine Daten zurück geben
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const index in this.__childNodes) {
        const field = this.__childNodes[index];
        this.__value[field._name] = field._value;
      }
    }
    return this.__value;
  }

  /**
   * Returns all not readonly fields values with deep dive
   * Mandatory fields (required is true) MUST always be transmitted
   * !readonly || required
   * @private
   */
  get _transmitValue() {
    // a required field needs a special treatment --> required path
    if (
      this._constraints &&
      this._constraints.required &&
      this._constraints.required.is === 'true'
    ) {
      return this._requiredValue;
    }
    if (this._meta && !this._meta.readonly) {
      if (this.__childNodes.length > 0) {
        this.__value = {};
        // nur reine Daten zurück geben
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const index in this.__childNodes) {
          const field = this.__childNodes[index];
          let val;
          if (
            field._constraints &&
            field._constraints.required &&
            field._constraints.required.is === 'true'
          ) {
            val = field._requiredValue;
          } else {
            val = field._transmitValue;
          }

          if (val !== undefined) {
            this.__value[field._name] = val;
          }
        }
      }
      return this.__value;
    }
    return undefined;
  }

  /**
   * Returns all modified fields values with deep dive (! _pristine)
   * modified || required
   * @private
   */
  get _deltaValue() {
    // a required field needs a special treatment --> required path
    if (
      this._constraints &&
      this._constraints.required &&
      this._constraints.required.is === 'true'
    ) {
      return this._required_value;
    }
    if (this.__childNodes.length > 0) {
      this.__value = {};
      // nur reine Daten zurück geben
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const index in this.__childNodes) {
        const field = this.__childNodes[index];
        let val;
        if (
          field._constraints !== undefined &&
          field._constraints.required !== undefined &&
          field._constraints.required.is === 'true'
        ) {
          val = field._requiredValue;
        } else {
          val = field._deltaValue;
        }
        if (val !== undefined) {
          this.__value[field._name] = val;
        }
      }
    }
    if (!this.__childNodes.length) {
      return !this._pristine ? this.__value : undefined;
    }
    return Object.keys(this.__value).length ? this.__value : undefined;
  }

  /**
   * Returns required fields with all children which are modified or
   * not readonly
   * ! readonly || req || modified
   * @private
   */
  get _requiredValue() {
    if (
      (this._meta && !this._meta.readonly) ||
      (this._constraints &&
        this._constraints.required &&
        this._constraints.required.is === 'true') ||
      !this._pristine
    ) {
      if (this.__childNodes.length > 0) {
        this.__value = {};
        // nur reine Daten zurück geben
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const index in this.__childNodes) {
          const field = this.__childNodes[index];
          const val = field._requiredValue;
          if (val !== undefined) {
            this.__value[field._name] = val;
          }
        }
      }
      return this.__value;
    }
    return undefined;
  }

  _clearInvalidity() {
    if (!this._isValid) {
      this._isValid = true;
      this._validity = {};
      /**
       * @event (field-became-valid)
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when a field or subfield gets invalid.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */
      this.dispatchNodeEvent(new NodeEvent('field-became-valid', this, true));
      /**
       * @event (this-field-became-valid)
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when a field gets invalid. This event **does not bubble**. Can be used on any node.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */
      this.dispatchNodeEvent(new NodeEvent('this-field-became-valid', this, false));
    }
  }

  /**
   *
   * @param error {"description":"error description / message"} => used in data-input-type for hints
   * @private
   */
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

  toString() {
    if (this._value !== null) {
      return this._value;
    }
    return '';
  }
}
