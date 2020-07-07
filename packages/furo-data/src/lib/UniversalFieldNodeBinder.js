/**
 * `UniversalFieldNodeBinder` consumes a FieldNode of type scalar, google wrapper of FAT and exposes
 * a API for data binding purposes.
 */

export class UniversalFieldNodeBinder {
  constructor(target) {
    // the target object to apply the attributes, flags,...
    this.target = target;
    this.fieldFormat = undefined; // scalar || wrapper || fat
    this._metastore = {}; // store metas from field

    this.targetValueField = 'value';
    this.labelmappings = { 'readonly': 'ro' };
    return this;
  }

  /**
   * binds the field
   * @param field
   */
  bindField(field) {
    this.fieldFormat = this.detectFormat(field);
    this.virtualNode = {
      value: this.fieldValue,
      attributes: {},
      labels: new Set(),
      constraints: {},
    };
    // update virtualNode from meta
    this._updateMetaFromFieldnode(field);
    field.addEventListener('this-metas-changed', () => {
      this._updateMetaFromFieldnode(field);
    });

    this._updateFieldValue(field);
    field.addEventListener('field-value-changed', () => {
      this._updateFieldValue(field);
    });
  }

  set fieldValue(val) {
    this._fieldValue = val;
    // update target
    this.target[this.targetValueField] = val;
  }

  get fieldValue() {
    return this._fieldValue;
  }

  _updateFieldValue(field) {
    // for scalar
    if (this.fieldFormat === 'scalar') {
      this.fieldValue = field._value;
    } else {
      // for fat and wrapper
      this.fieldValue = field.value._value;

      if (this.fieldFormat === 'fat') {
        // clear the labels and attributes
        this.virtualNode.attributes = {};
        this.virtualNode.labels.clear(); //

        // set the spec values
        this._updateMetaFromFieldnode(field);

        // update labels and attributes
        field.attributes.__childNodes.forEach(attr => {
          this.addVirtualAttribute(attr._name, attr._value);
        });
        field.labels.__childNodes.forEach(label => {
          this.addVirtualLabel(label._value);
        });

      }
    }
  }

  addVirtualAttribute(name, value) {
    this.virtualNode.attributes[name] = value;
  }

  removeVirtualAttribute(name) {
    delete this.virtualNode.attributes[name];
  }

  addVirtualLabel(name) {
    this.virtualNode.labels.add(name);
    // map the label if configured
    if (name in this.labelmappings) {
      this.target[this.labelmappings[name]] = true;
    }
  }

  removeVirtualLabel(name) {
    this.virtualNode.labels.delete(name);
    // map the label if configured
    if (name in this.labelmappings) {
      this.target[this.labelmappings[name]] = false;
    }
  }

  // detects the kind of the fieldNode (scalar, wrapper, fat)
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

  _updateMetaFromFieldnode(field) {
    if ('default' in field._meta && field._meta.default) {
      this.addVirtualAttribute('default', field._meta.default);
      this._metastore.default = field._meta.default;
    }

    if ('readonly' in field._meta && field._meta.readonly === true) {
      this.addVirtualLabel('readonly');
      this._metastore.readonly = field._meta.readonly;
    }

    if ('label' in field._meta && field._meta.label) {
      this.addVirtualAttribute('label', field._meta.label);
      this._metastore.label = field._meta.label;
    }

    if ('hint' in field._meta && field._meta.hint) {
      this.addVirtualAttribute('hint', field._meta.hint);
      this._metastore.hint = field._meta.hint;
    }
  }
}
