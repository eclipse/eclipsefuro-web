import {EventTreeNode, NodeEvent} from "./EventTreeNode";
import {FieldNode} from "./FieldNode";

export class RepeaterNode extends EventTreeNode {

  constructor(parentNode, spec, fieldName) {
    super(parentNode);
    this.__specdefinitions = parentNode.__specdefinitions;
    this._isRepeater = true;
    this.repeats = [];
    this._spec = spec;
    this._name = fieldName;

    this._meta = spec.meta || {};
    this._pristine = true;
    this._isValid = true;


    if (Array.isArray(this._meta.initialValue)) {
      this.value = this._meta.initialValue;
    }

    /**
     * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
     */
    this.addEventListener("field-became-valid", (e) => {
      if (this.repeats.filter(f => !f._isValid).length === 0) {
        this._isValid = true;
        this.dispatchNodeEvent(new NodeEvent("repeat-became-valid", this));
      }

    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener("field-became-invalid", (e) => {
      this._isValid = false;
      this.dispatchNodeEvent(new NodeEvent("repeat-became-invalid", this));
    });
    /**
     * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
     */
    this.addEventListener("field-value-changed", (e) => {
      this._pristine = false;
    });
  }

  removeAllChildren() {
    this.__childNodes = [];
    this.repeats = [];
    this.dispatchNodeEvent(new NodeEvent("repeated-fields-all-removed", this.repeats, false));
  }


  set value(val) {

    val.forEach((repdata, i) => {
      if (!this.repeats[i]) {
        this._addSilent();
      }
      // Werte aktualisieren
      this.repeats[i].value = repdata;
      this.repeats[i]._pristine = true;

    });
  }


  get value() {
    return this.repeats.map(f => {
      return f.value;
    });
  }

  deleteChild(index){
    this.repeats.splice(index,1);
    this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", this.repeats, true));
    this.dispatchNodeEvent(new NodeEvent("repeated-field-removed", this.repeats, false));
  }

  _addSilent() {
    let fieldNode = new FieldNode(this, this._spec, this._name);
    let index = this.repeats.push(fieldNode) - 1;

    fieldNode.__index = index;

    // add function to remove field from list
    fieldNode.deleteFromList = () => {
      this.deleteChild(this.repeats.indexOf(fieldNode));
    };




    return index;
  };


  _setInvalid(error) {
    this._isValid = false;
    let path = error.field.split(".");
    if (path.length > 0) {
      // rest wieder in error reinwerfen
      error.field = path.slice(1).join(".");
    }
    this.repeats[path[0]]._setInvalid(error);
  }


  add(data) {
    let index = this._addSilent();
    this._pristine = false;
    // set data if given
    if(data){
      let child = this.repeats[index];
      child.value = data;
    }
    this.dispatchNodeEvent(new NodeEvent("repeated-field-added", this.repeats[index], false));
    this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", this.repeats, true));

    // return field for chainabilty
    return this.repeats[index];
  };


}
