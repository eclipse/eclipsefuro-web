/**
 * `UniversalFieldNodeBinder` consumes a FieldNode of type scalar, google wrapper of FAT and exposes
 * a API for data binding purposes.
 *
 * ## specifity
 * **meta < fat annotations**
 *
 * If meta was given and the same property is not set in the fat type anymore, the value will fall back to the given value from the meta.
 *
 *
 */
export class UniversalFieldNodeBinder {
  constructor(target) {
    // the target object to apply the attributes, flags,...
    this.target = target;
    this.fieldFormat = undefined; // scalar || wrapper || fat
    this._metastore = {}; // store metas from field

    /**
     * Define the property for the value on the component. If the value in the fieldnode changes
     * this property will be updated
     * @type {string}
     */
    this.targetValueField = 'value';
    /**
     * Define the mappings for the labels / flags which will be set on the component if it is set in the fieldnode.
     * @type {{readonly: string}}
     */
    this.labelMappings = {};

    this.attributeMappings = {};
    return this;
  }

  /**
   * binds the fieldNode and read the metas
   * @param field
   */
  bindField(field) {
    this.fieldNode = field;
    this.fieldFormat = this.detectFormat(field);
    /**
     * The virtual node holds the superset of scalar + meta, wrapper + meta and fat + meta
     * @type {{attributes: {}, value: *, constraints: {}, labels: *}}
     */
    this.virtualNode = {
      value: this.fieldValue,
      attributes: {},
      labels: new Set(),
      constraints: {},
    };

    // update virtualNode from meta
    this._updateMetaFromFieldnode(field._meta);
    field.addEventListener('this-metas-changed', () => {
      this._updateMetaFromFieldnode(field._meta);
    });

    this._updateVirtualNode(field);

    field.addEventListener('field-value-changed', () => {
      this._updateVirtualNode(field);
    });
  }



  /**
   * setter for the fieldValue which reflects to the target component according to `targetValueField`
   * @param val
   */
  set fieldValue(val) {
    if('value' in this.fieldNode){
      this.fieldNode.value._value = val;
    }else {
      this.fieldNode._value = val;
    }

    this._fieldValue = val;
    // update target
    this.target[this.targetValueField] = val;
  }

  /**
   * returns the current value of the field
   * @return {*}
   */
  get fieldValue() {
    return this._fieldValue;
  }

  /**
   * Sets the correct value for the given fieldnode to the virtual node and this.fieldValue according to the signature of the field
   * @param field
   * @private
   */
  _updateVirtualNode(field) {
    // for scalar
    if (this.fieldFormat === 'scalar') {
      this.fieldValue = field._value;
    } else {
      // for fat and wrapper
      this.fieldValue = field.value._value;

      if (this.fieldFormat === 'fat') {
        const givenAttrs = field.attributes.__childNodes.map((attrNode) => attrNode._name);
        const givenLabels = field.labels.__childNodes.map((labelNode) => labelNode._value);

        // clear the attributes by removing attrs which are not in field.attributes
        Object.keys(this.virtualNode.attributes).forEach((attr) => {
          if (!givenAttrs[attr]) {
            this._removeVirtualAttribute(attr);
          }
        });

        // clear the labels  by removing labels which are not in field.labels
        this.virtualNode.labels.forEach((label) => {
          if (!givenLabels[label]) {
            this._removeVirtualLabel(label);
          }
        });

        // updates the attrs and labels on the virtual node with the metas from the fieldnode
        this._updateMetaFromFieldnode(field._meta);

        // update the given attributes on the virtual node
        field.attributes.__childNodes.forEach(attr => {
          this._addVirtualAttribute(attr._name, attr._value);
        });
        // update the given labels on the virtual node
        field.labels.__childNodes.forEach(label => {
          this._addVirtualLabel(label._value);
        });
      }
    }
  }

  /**
   * Adds or updates a attribute to the virtual node and set the attribute on the target component if mapping is defined
   * @param name
   * @param value
   * @private
   */
  _addVirtualAttribute(name, value) {
    this.virtualNode.attributes[name] = value;
    if (name in this.attributeMappings) {
      this.target[this.attributeMappings[name]] = value;
    }
  }

  /**
   * Removes a attribute from the virtual node and sets the attribute on the target component to "" empty string.
   * @param name
   * @private
   */
  _removeVirtualAttribute(name) {
    delete this.virtualNode.attributes[name];
    if (name in this.attributeMappings) {
      this.target[this.attributeMappings[name]] = '';
    }
  }

  /**
   * Adds a label to the virtual node label set and sets the label on the target component to `true` if mapping is defined.
   * @param name
   * @private
   */
  _addVirtualLabel(name) {
    this.virtualNode.labels.add(name);
    // map the label if configured
    if (name in this.labelMappings) {
      this.target[this.labelMappings[name]] = true;
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
   * detects the kind of the fieldNode (scalar, wrapper, fat)
   * @param field
   * @return {string|undefined}
   */
  detectFormat(field) {
    if (field.__childNodes.length === 0) {
      this.fieldValue = field._value;
      return 'scalar';
    }
    if (field.__childNodes.length === 1 && 'value' in field) {
      this.fieldValue = field.value._value;
      return 'wrapper';
    }
    if ('value' in field && 'labels' in field && 'attributes' in field) {
      this.fieldValue = field.value._value;
      return 'fat';
    }
    return undefined;
  }

  /**
   * updates the virtual node attributes and labels with metas from the fieldnode
   * @param fieldmeta
   * @private
   */
  _updateMetaFromFieldnode(fieldmeta) {
    if ('default' in fieldmeta && fieldmeta.default) {
      this._addVirtualAttribute('default', fieldmeta.default);
      this._metastore.default = fieldmeta.default;
    }

    if ('readonly' in fieldmeta && fieldmeta.readonly === true) {
      this._addVirtualLabel('readonly');
      this._metastore.readonly = fieldmeta.readonly;
    }

    if ('label' in fieldmeta && fieldmeta.label) {
      this._addVirtualAttribute('label', fieldmeta.label);
      this._metastore.label = fieldmeta.label;
    }

    if ('hint' in fieldmeta && fieldmeta.hint) {
      this._addVirtualAttribute('hint', fieldmeta.hint);
      this._metastore.hint = fieldmeta.hint;
    }
  }
}
