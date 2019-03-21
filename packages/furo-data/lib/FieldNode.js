import {EventTreeNode, NodeEvent} from "./EventTreeNode";
import {RepeaterNode} from "./RepeaterNode";

export class FieldNode extends EventTreeNode {

  constructor(parentNode, fieldSpec, fieldName) {
    super(parentNode);
    this.__specdefinitions = parentNode.__specdefinitions;
    this._spec = fieldSpec;
    this._meta = fieldSpec.meta || {};
    this._constraints = fieldSpec.constraints;
    this._options = fieldSpec.options;

    this._name = fieldName;
    this._value = null;
    this._pristine = true;
    this._isValid = true;

    // set default value from meta
    if (this._meta && this._meta.default) {
      this._value = this._meta.default;
      this._pristine = false;
    }

    // custom type fields aufbauen
    if (this._spec.type.startsWith("vnd.")) {
      if (this.__specdefinitions[this._spec.type]) {
        for (let fieldName in this.__specdefinitions[this._spec.type].fields) {
          if (this.__specdefinitions[this._spec.type].fields[fieldName].meta && this.__specdefinitions[this._spec.type].fields[fieldName].meta.repeated) {
            this[fieldName] = new RepeaterNode(this, this.__specdefinitions[this._spec.type].fields[fieldName], fieldName);
          } else {
            this[fieldName] = new FieldNode(this, this.__specdefinitions[this._spec.type].fields[fieldName], fieldName);
          }
        }
      } else {
        console.warn(this._spec.type + " does not exist")
      }
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

  set value(val) {
    if (this.__childNodes.length > 0) {
      for (let index in this.__childNodes) {
        let field = this.__childNodes[index];
        field.value = val[field._name];
      }
    } else {
      this.oldvalue = this.value;
      this._value = val;
      this._pristine = false;
      if (JSON.stringify(this.oldvalue) !== JSON.stringify(this._value)) {
        this.dispatchNodeEvent(new NodeEvent('field-value-changed', this, true));
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

  set(val) {
    this.oldvalue = this.value;
    this.value = val;

  };

  _clearInvalidity() {
    if (!this._isValid) {
      this._isValid = true;
      this._validity = {};
      this.dispatchNodeEvent(new NodeEvent("field-became-valid", this))
    }
  }

  _setInvalid(error) {
    // set field empty, if not defined
    error.field = error.field || "";

    this._isValid = false;
    let path = error.field.split(".");
    if (path.length > 1) {
      // rest wieder in error reinwerfen
      error.field = path.slice(1).join(".");
      this[path[0]]._setInvalid(error);
    } else {

      this._isValid = false;
      this._validity = error;
      this.dispatchNodeEvent(new NodeEvent("field-became-invalid", this));
    }


  }

  toString() {
    //todo parse format rules from _meta...
    return this._value;
  };
}
