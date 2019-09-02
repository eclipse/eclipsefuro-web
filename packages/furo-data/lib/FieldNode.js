import {EventTreeNode, NodeEvent} from "./EventTreeNode";
import {RepeaterNode} from "./RepeaterNode";
import {set} from "@polymer/polymer/lib/utils/path";

export class FieldNode extends EventTreeNode {

  constructor(parentNode, fieldSpec, fieldName) {
    super(parentNode);
    this.__specdefinitions = parentNode.__specdefinitions;

    this._spec = fieldSpec;
    if(this._spec.meta){
      this._meta = JSON.parse(JSON.stringify(this._spec.meta));
    }else{
      this._meta = function (){return {}}();
    }
    if(this._spec.constraints){
      this._constraints = JSON.parse(JSON.stringify(this._spec.constraints));
    }else{
      this._constraints = function (){return {}}();
    }

    this._name = fieldName;
    this._value = null;
    this._pristine = true;
    this._isValid = true;


    switch (this._spec.type) {
      case "Object":
        this._value = {};
        break;
      case "Array":
        this._value = [];
        break;
    }
    // Build custom type if a spec exists
    if (this.__specdefinitions[this._spec.type] !== undefined) {
      this._createVendorType(this._spec.type);
    }

    // set default value from meta
    if (this._meta && this._meta.default) {
      this.defaultvalue = this._meta.default;
      this._pristine = false;
    }

    /**
     * Schaltet ein Feld auf valid, müssen wir alle Kinder oder verästelungend des Felds auf validity prüfen...
     */
    this.addEventListener("field-became-valid", (e) => {
      let v = this.__childNodes.filter(f => !f._isValid);
      if (v.length === 0) {
        this._isValid = true;
      }
    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener("field-became-invalid", (e) => {
      this._isValid = false;
    });
  }

  _createVendorType(type) {
    if (this.__specdefinitions[type]) {
      for (let fieldName in this.__specdefinitions[type].fields) {
        if (this.__specdefinitions[type].fields[fieldName].meta && this.__specdefinitions[type].fields[fieldName].meta.repeated) {
          this[fieldName] = new RepeaterNode(this, this.__specdefinitions[type].fields[fieldName], fieldName);
        } else {
          this[fieldName] = new FieldNode(this, this.__specdefinitions[type].fields[fieldName], fieldName);
        }
      }
    } else {
      console.warn(type + " does not exist")
    }
  }

  set value(val) {

    // type any
    this._createAnyType(val);

    // map<string, something> typ
    if (this._spec.type.startsWith("map<")) {
      this._updateKeyValueMap(val, this._spec.type)
    } else {
      if (this.__childNodes.length > 0) {
        let furoMetaDetected = false;
        for (let index in this.__childNodes) {
          let field = this.__childNodes[index];
          if (field._spec.type === "furo.Meta") {
            // we have meta declaration on this layer
            furoMetaDetected = val[field._name];
          }
          if (val.hasOwnProperty(field._name)) {
            field.value = val[field._name];
          }
        }

        /**
         * if we have meta on this layer, we should update the siblings
         */
        if (furoMetaDetected) {
          this.__updateMetaAndConstraints(furoMetaDetected);
        }

        this.dispatchNodeEvent(new NodeEvent('branch-value-changed', this, false));

      } else {
        // update the primitive type
        this.oldvalue = this.value;
        this._value = val;
        this._pristine = false;
        if (JSON.stringify(this.oldvalue) !== JSON.stringify(this._value)) {
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

    }


  }

  __updateMetaAndConstraints(metaAndConstraints) {
    // on this layer you can only pass the constraint to the children
    // get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
    // a field which is targeted we delegate the sub request to  this field
    for (let fieldname in metaAndConstraints.fields) {
      let mc = metaAndConstraints.fields[fieldname];
      let f = fieldname.split(".");

      if (f.length === 1) {
        // we are on the parent of a endpoint. Update the metas in this
        let field = f[0];
        for (let m in mc.meta) {
          // update the metas
          this[field]._meta[m] = mc.meta[m];
        }
        for (let c in mc.constraints) {
          // update the constraints
          this[field]._constraints[c] = mc.constraints[c];
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
      let target = f[0];
      let subMetaAndConstraints = {fields: {}};
      subMetaAndConstraints.fields[f.slice(1).join(".")] = mc;
      let x = this[target];

      this[target].__updateMetaAndConstraints(subMetaAndConstraints);

    }

  }

  _createAnyType(val) {
    // remove if type changes
    if (this.__anyCreated && this["@type"] !== val["@type"]) {
      for (let i = this.__childNodes.length - 1; i >= 0; i--) {
        let field = this.__childNodes[i];
        if (!val[field._name]) {
          field.deleteNode();
        }
      }
      this.__anyCreated = false;
    }
    if (this._spec.type === "any" && val["@type"] && !this.__anyCreated) {
      // create custom type if not exist
      // any can only be a complex type
      this._createVendorType(val["@type"]);
      this.__anyCreated = true;
      this["@type"] = val["@type"];
    }
  }


  _updateKeyValueMap(val, spec) {
    let vType = spec.match(/,\s*(.*)>/)[1];
    let fieldSpec = {type: vType};

    // create if not exist
    for (let fieldName in val) {
      if (this[fieldName] == undefined) {
        this[fieldName] = new FieldNode(this, fieldSpec, fieldName);
      }
      //update data
      this[fieldName].value = val[fieldName];
    }
    //remove unseted
    for (let i = this.__childNodes.length - 1; i >= 0; i--) {
      let field = this.__childNodes[i];
      if (!val[field._name]) {
        field.deleteNode();
      }
    }

  }

  /**
   * deletes the fieldnode
   */
  deleteNode() {

    let index = this.__parentNode.__childNodes.indexOf(this);
    this.__parentNode.__childNodes.splice(index, 1);
    delete (this.__parentNode[this._name]);

    // remove from list if this is a repeated item
    if (typeof this._deleteFromList === "function") {
      this._deleteFromList();
    }
    //notify
    this.dispatchNodeEvent(new NodeEvent("this-node-field-deleted", this._name, false));
    this.dispatchNodeEvent(new NodeEvent("node-field-deleted", this._name, true));
  }

  set defaultvalue(val) {
    // type any
    this._createAnyType(val);

    if (this.__childNodes.length > 0) {
      for (let index in this.__childNodes) {
        let field = this.__childNodes[index];
        field.defaultvalue = val[field._name];
      }
    } else {

      if (this._spec.type.startsWith("map<")) {
        this._updateKeyValueMap(val, this._spec.type)
      } else {

        this.oldvalue = this.value;
        this._value = val;
        this._pristine = true;
      }


    }
  }

  get value() {
    if (this.__childNodes.length > 0) {
      this._value = {};
      // nur reine Daten zurück geben
      for (let index in this.__childNodes) {
        let field = this.__childNodes[index];
        this._value[field._name] = field.value
      }
    }
    return this._value;
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
      this.dispatchNodeEvent(new NodeEvent("field-became-valid", this, true));
      /**
       * @event (this-field-became-valid)
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when a field gets invalid. This event **does not bubble**. Can be used on any node.
       *
       * detail payload: **{NodeEvent}** with reference to the FieldNode
       */
      this.dispatchNodeEvent(new NodeEvent("this-field-became-valid", this, false))
    }
  }

  _setInvalid(error) {
    // set field empty, if not defined
    error.field = error.field || "";

    let path = error.field.split(".");
    if (path.length > 0 && path[0] !== "") {
      // rest wieder in error reinwerfen
      error.field = path.slice(1).join(".");
      if (this[path[0]]) {
        this[path[0]]._setInvalid(error);
      } else {
        console.warn("Unknown field", path, this._name)
      }
    } else {
      this._isValid = false;
      this._validity = error;
      this.dispatchNodeEvent(new NodeEvent("field-became-invalid", this));
    }


  }

  toString() {
    if (this.value !== null) {
      return this.value;
    } else {
      return ""
    }

  };
}
