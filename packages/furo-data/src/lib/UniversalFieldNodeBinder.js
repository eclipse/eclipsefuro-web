import { FieldNode } from './FieldNode.js';
import { RepeaterNode } from './RepeaterNode.js';

/**
 * `UniversalFieldNodeBinder` consumes a FieldNode of any type, google wrapper or FAT and exposes
 * a API for data binding purposes.
 *
 * ## specifity
 * **meta < fat annotations**
 * **attributes on element > fat annotations > meta**
 *
 * Spec meta and dynamic meta is handled in DataObject and FieldNode.
 *
 * If meta was given and the same property is not set in the fat type anymore, the value will fall back to the given value from the meta.
 *
 *
 */
export class UniversalFieldNodeBinder {
  constructor(target) {
    // the target object to apply the attributes, flags,...
    this.target = target;
    this.fieldFormat = undefined; // scalar || complex || wrapper || fat
    this._metastore = {}; // store metas from field

    /**
     * Define the property for the value on the component. If the value in the fieldnode changes
     * this property will be updated
     * @type {string}
     */
    this.targetValueField = 'value';

    /**
     * Define the mappings for the labels / flags which will be set on the component if it is set in the fieldnode.
     *
     * ```
     *  // set the label mappings
     *  // fat-label: componentProperty
     * this.binder.labelMappings = {
     *   'error': '_error',
     *   'readonly': 'readonly',
     *   'required': 'required',
     *   'disabled': 'disabled'
     * };
     * ```
     * @type {{}}
     */
    this.labelMappings = {};

    /**
     * Define the mappings for the attributes which will be set on the component if it is set in the fieldnode.
     *
     * ```
     *  // set the attribute mappings
     *  this.binder.attributeMappings = {
     *    'label': 'placeholder', // map label to placeholder
     *    'placeholder': 'placeholder', // map placeholder to placeholder
     *    'hint': '_hint',
     *    'icon': 'leadingIcon', // icon and leading icon maps to the same
     *    'leading-icon': 'leadingIcon',// icon and leading icon maps to the same
     *    'value-state': '_valueState',
     *    'value-state-message': '_valueStateMessage',
     *    'errortext': '_errorMsg', // name errortext is for compatibility with spec
     *    'warning-msg': '_warningMsg',
     *    'success-msg': '_successMsg',
     *    'information-msg': '_informationMsg',
     *    'pattern': 'pattern',
     *    'maxlength': 'maxlength', // for the input element itself
     *  };
     * ```
     * @type {{}}
     */
    this.attributeMappings = {};

    /**
     * Define the attributes which maps to the field constraints.
     *
     * ```
     * this.fatAttributesToConstraintsMappings = {
     *   'max': 'value._constraints.max.is',// for the fieldnode max constraint
     *   'min': 'value._constraints.min.is',// for the fieldnode min constraint
     *   'min-msg': 'value._constraints.min.message',// for the fieldnode min constraint message
     *   'max-msg': 'value._constraints.max.message',// for the fieldnode max constraint message
     * }
     * ```
     * @type {{}}
     */
    this.fatAttributesToConstraintsMappings = {};

    this.constraintsTofatAttributesMappings = {};
    return this;
  }

  /**
   * binds the fieldNode and read the metas
   * @param field
   */
  bindField(field) {
    if (!(field instanceof FieldNode || field instanceof RepeaterNode)) {
      // eslint-disable-next-line no-console
      console.warn('Invalid binding ', field, this.target);
      return false;
    }

    this.fieldNode = field;
    this.fieldFormat = this.detectFormat(field);
    /**
     * The virtual node holds the superset of scalar + meta, complex + meta, wrapper + meta and fat + meta
     * @type {{attributes: {}, value: *, constraints: {}, labels: *}}
     */
    this.virtualNode = {
      value: this.fieldValue,
      attributes: {},
      labels: new Set(),
    };

    // update virtualNode from meta
    this._updateVirtualNodeFromMeta(field._meta);
    this._updateVirtualNodeFromMetaConstraints(field._constraints);

    this._updateVirtualNode(field);

    field.addEventListener('this-metas-changed', () => {
      this._updateVirtualNodeFromMeta(field._meta);
      this._updateVirtualNodeFromMetaConstraints(field._constraints);
    });

    field.addEventListener('field-value-changed', () => {
      this._updateVirtualNode(field);
    });

    field.addEventListener('field-became-invalid', e => {
      const invalidNode = e.detail;
      this._addVirtualLabel('error');
      if (invalidNode._validity && invalidNode._validity.description) {
        this._addVirtualAttribute('errortext', invalidNode._validity.description);
      }
    });

    /**
     * remove required error on init, this is for better ux
     */
    field.addEventListener(
      'field-became-invalid',
      () => {
        if (this.fieldNode._validity && this.fieldNode._validity.constraint === 'required') {
          this._removeVirtualLabel('error');
        }
      },
      { once: true },
    );

    field.addEventListener('field-became-valid', () => {
      this._removeVirtualLabel('error');
    });

    return this;
  }

  /**
   * setter for the fieldValue which reflects to the target component according to `targetValueField`
   * @param val
   */
  set fieldValue(val) {
    // only update on components with bindings
    if (this.fieldNode) {
      if ('value' in this.fieldNode) {
        this.fieldNode.value._value = val;
      } else {
        this.fieldNode._value = val;
      }
    }
    this._fieldValue = val;

    // update target. the target value of complex type should be updated in their input component self
    if (
      this.targetValueField !== 'value' ||
      (this.fieldFormat !== 'complex' && this.fieldFormat !== undefined)
    ) {
      this.target[this.targetValueField] = val;
    }
  }

  /**
   * returns the current value of the field
   * @return {*}
   */
  get fieldValue() {
    return this._fieldValue;
  }

  /**
   * adds a label to the fat fieldNode. Adding labels to scalar, complex and wrapper works too, but will never updated on the fieldNode.
   * @param label
   */
  addLabel(label) {
    if ('labels' in this.fieldNode) {
      this._givenLabels = this.fieldNode.labels.__childNodes.map(labelNode => labelNode._value);
      if (this._givenLabels.indexOf(label) === -1) {
        this.fieldNode.labels.add(label);
      }
    } else {
      // attention, this is for ui only, this label will never sent back to the server
      this._addVirtualLabel(label);
    }
  }

  /**
   * deletes a label from a fat fieldNode
   * @param label
   */
  deleteLabel(label) {
    if ('labels' in this.fieldNode) {
      if (this._givenLabels) {
        const labelindex = this._givenLabels.indexOf(label);
        if (labelindex !== -1) {
          this.fieldNode.labels.deleteChild(labelindex);
        }
      }
    } else {
      // attention, this is for ui only, this label will never sent back to the server
      this._removeVirtualLabel(label);
    }
  }

  /**
   * Sets the value of a named attribute of the current node. Like value-state="Error".
   * Do not forget to add the mappings with `xxx.attributeMappings = { 'value-state': 'valueState' };` to reflect the value to your component.
   * @param name
   * @param value
   */
  setAttribute(name, value) {
    if ('attributes' in this.fieldNode) {
      if (!this._givenAttrs[name]) {
        this.fieldNode.attributes.createField({ fieldName: name, type: 'string', _value: value });
      }
    } else {
      this._addVirtualAttribute(name, value);
    }
  }

  /**
   * removes a named attribute from the fieldNode.
   * @param name
   */
  removeAttribute(name) {
    if ('attributes' in this.fieldNode) {
      const attrindex = this._givenAttrs.indexOf(name);
      if (attrindex !== -1) {
        this.fieldNode.attributes[name].deleteNode();
      }
    } else {
      this._removeVirtualAttribute(name);
    }
  }

  /**
   * Sets the correct value for the given fieldnode to the virtual node and this.fieldValue according to the signature of the field
   * @param field
   * @private
   */
  _updateVirtualNode(field) {
    // for fat and wrapper
    if (this.fieldFormat === 'fat' || this.fieldFormat === 'wrapper') {
      this.fieldValue = field.value._value;
      // for fat
      if (this.fieldFormat === 'fat') {
        this._givenAttrs = field.attributes.__childNodes.map(attrNode => attrNode._name);
        this._givenLabels = field.labels.__childNodes.map(labelNode => labelNode._value);

        // clear the attributes by removing attrs which are not in field.attributes
        Object.keys(this.virtualNode.attributes).forEach(attr => {
          if (this._givenAttrs.indexOf(attr) === -1) {
            this._removeVirtualAttribute(attr);
          }
        });

        // clear the labels  by removing labels which are not in field.labels
        this.virtualNode.labels.forEach(label => {
          if (this._givenLabels.indexOf(label) === -1) {
            this._removeVirtualLabel(label);
          }
        });

        // update the given attributes on the virtual node
        field.attributes.__childNodes.forEach(attr => {
          this._addVirtualAttribute(attr._name, attr._value);
        });
        // update the given labels on the virtual node
        field.labels.__childNodes.forEach(label => {
          this._addVirtualLabel(label._value);
        });
      }
    } else {
      // for scalar and complex fields
      this.fieldValue = field._value;
    }
  }

  /**
   * Adds or updates a attribute to the virtual node and set the attribute on the target component if mapping is defined
   * @param name
   * @param value
   * @private
   */
  _addVirtualAttribute(name, value) {
    if (this.virtualNode.attributes[name] !== value) {
      this.virtualNode.attributes[name] = value;

      if (name in this.attributeMappings) {
        this.target[this.attributeMappings[name]] = value;
      }

      // update the field constraints based on fat attributes only for fat and wrapper types.
      // google.type.date should not be updated
      if (this.fieldFormat === 'fat' || this.fieldFormat === 'wrapper') {
        if (name in this.fatAttributesToConstraintsMappings) {
          this._pathSet(this.fatAttributesToConstraintsMappings[name], value);
        }
      }
    }
  }

  /**
   * helper to set deep paths
   * @param path String a.b.c.d
   * @param value
   * @private
   */
  _pathSet(path, value) {
    let obj = this.fieldNode; // we set the values relative to the fieldnode, so fieldnode is the root
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

  /**
   * Removes a attribute from the virtual node and sets the attribute on the target component to null, so lit will remove it on reflected attributes.
   *
   *  https://lit-element.polymer-project.org/guide/properties#attributes
   * @param name
   * @private
   */
  _removeVirtualAttribute(name) {
    if (!(name in this._metastore && this._metastore !== '')) {
      delete this.virtualNode.attributes[name];
      if (name in this.attributeMappings) {
        this.target[this.attributeMappings[name]] = null;
      }
    } else {
      // restore from metastore
      this._addVirtualAttribute(name, this._metastore[name]);
    }
  }

  /**
   * Adds a label to the virtual node label set and sets the label on the target component to `true` if mapping is defined.
   * @param name
   * @private
   */
  _addVirtualLabel(name) {
    if (!this.virtualNode.labels.has(name)) {
      this.virtualNode.labels.add(name);
      // map the label if configured
      if (name in this.labelMappings) {
        this.target[this.labelMappings[name]] = true;
      }
    }
  }

  /**
   * Removes a label from the virtual node label set and sets the label on the target component to `false` if mapping is defined.
   * @param name
   * @private
   */
  _removeVirtualLabel(name) {
    this.virtualNode.labels.delete(name);
    // map the label if configured
    if (name in this.labelMappings) {
      this.target[this.labelMappings[name]] = false;
    }
  }

  /**
   * check overrides from the used component, setted attributes overrides all internal settings.
   * All we have to do is removing the setted mappings for the current instance.
   *
   * **Hint:** Do this after initializing the mappings.
   */
  checkLabelandAttributeOverrrides() {
    const attributeMappingKeys = Object.keys(this.attributeMappings);

    const labelMappingKeys = Object.keys(this.labelMappings);

    this.target.getAttributeNames().forEach(name => {
      // remove all override targets for attributes
      attributeMappingKeys.forEach(attr => {
        if (attr === name) {
          delete this.attributeMappings[attr];
        }
      });

      // remove all override targets for labels
      labelMappingKeys.forEach(attr => {
        if (attr === name) {
          delete this.labelMappings[attr];
        }
      });
    });
  }

  /**
   * detects the kind of the fieldNode (scalar, wrapper, fat)
   * @param field
   * @return {string|undefined}
   */
  detectFormat(field) {
    if (field && field.__childNodes.length === 0) {
      this.fieldValue = field._value;
      return 'scalar';
    }
    if (field && field.__childNodes.length === 1 && 'value' in field) {
      this.fieldValue = field.value._value;
      return 'wrapper';
    }
    if (field && 'value' in field && 'labels' in field && 'attributes' in field) {
      this.fieldValue = field.value._value;
      return 'fat';
    }
    if (field && field.__childNodes.length > 0) {
      this.fieldValue = field._value;
      return 'complex';
    }

    console.warn('fieldNode is not defined, please check against the spec', field);
    return undefined;
  }

  /**
   * updates the virtual node attributes and labels with metas from the fieldnode
   * @param fieldmeta
   * @private
   */
  _updateVirtualNodeFromMeta(fieldmeta) {
    if ('readonly' in fieldmeta) {
      if (fieldmeta.readonly === true) {
        this._addVirtualLabel('readonly');
      } else {
        this._removeVirtualLabel('readonly');
      }
      this._metastore.readonly = fieldmeta.readonly;
    }

    if ('label' in fieldmeta) {
      if (fieldmeta.label) {
        this._addVirtualAttribute('label', fieldmeta.label);
      } else {
        this._removeVirtualAttribute('label');
      }
      this._metastore.label = fieldmeta.label;
    }

    if ('hint' in fieldmeta) {
      if (fieldmeta.hint) {
        this._addVirtualAttribute('hint', fieldmeta.hint);
      } else {
        this._removeVirtualAttribute('hint');
      }
      this._metastore.hint = fieldmeta.hint;
    }

    if ('options' in fieldmeta) {
      if (fieldmeta.options && fieldmeta.options.list) {
        this._addVirtualAttribute('suggestions', fieldmeta.options.list);
        this._metastore.suggestions = fieldmeta.options.list;
      } else {
        this._removeVirtualAttribute('suggestions');
      }

    }
  }

  _updateVirtualNodeFromMetaConstraints(constraints) {
    // map the constraints to the fat attributes
    Object.keys(constraints).forEach(constraint => {
      if (constraint in this.constraintsTofatAttributesMappings) {
        // constrains with value true or false should be handled as label
        if (constraints[constraint].is === true || constraints[constraint].is === 'true') {
          this.addLabel(this.constraintsTofatAttributesMappings[constraint]);
        } else if (constraints[constraint].is === false || constraints[constraint].is === 'false') {
          this.deleteLabel(this.constraintsTofatAttributesMappings[constraint]);
        } else {
          this.setAttribute(
            this.constraintsTofatAttributesMappings[constraint],
            constraints[constraint].is,
          );
        }
      }
    });
  }
}
