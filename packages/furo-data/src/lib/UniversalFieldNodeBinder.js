/**
 * `UniversalFieldNodeBinder` consumes a FieldNode of type scalar, google wrapper of FAT and exposes
 * a API for data binding purposes.
 */

export class UniversalFieldNodeBinder {
  constructor(target) {
    // the target object to apply the attributes, flags,...
    this.target = target;

    this.fieldFormat = undefined; // scalar || wrapper || fat
    return this;
  }

  /**
   * binds the field
   * @param field
   */
  bindField(field) {
    this.fieldFormat = this.detectFormat(field);
    this.virtualNode = { 'value': this.fieldValue, 'attributes': {}, 'labels': [], 'constraints': {} };
    // update virtualNode from meta
    this._updateMetaFromFieldnode(field);
    field.addEventListener('this-metas-changed', this._updateMetaFromFieldnode);

    this._updateFieldValue(field);
    field.addEventListener('field-value-changed', this._updateFieldValue);


  }


  _updateFieldValue(field) {
    // for scalar
    if (this.fieldFormat === 'scalar') {
      this.fieldValue = field._value;
    } else {
      // for fat and wrapper
      this.fieldValue = field.value._value;

      if (this.fieldFormat === 'fat') {
        // reset to the spec set
        this.virtualNode.attributes = {};
        this.virtualNode.labels = [];
        // set the spec values
        this._updateMetaFromFieldnode(field);
        // update labels and attributes
        field.attributes.__childNodes.forEach((attr) => {
          this.setVirtualAttribute(attr._name, attr._value);
        });
      }
    }
  }


  setVirtualAttribute(name, value) {
    this.virtualNode.attributes[name] = value;
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
  };

  _updateMetaFromFieldnode(field) {
    if ('default' in field._meta && field._meta.default) {
      this.virtualNode.attributes.default = field._meta.default;
    }
    if ('readonly' in field._meta) {
      this.virtualNode.attributes.readonly = field._meta.readonly;
    }
    if ('label' in field._meta && field._meta.label) {
      this.virtualNode.attributes.label = field._meta.label;
    }
    if ('hint' in field._meta && field._meta.hint) {
      this.virtualNode.attributes.hint = field._meta.hint;
    }


  }

}
