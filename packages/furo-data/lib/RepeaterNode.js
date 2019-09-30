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

    if (this._spec.meta) {
      this._meta = JSON.parse(JSON.stringify(this._spec.meta));
    } else {
      this._meta = function () {
        return {}
      }();
    }
    if (this._spec.constraints) {
      this._constraints = JSON.parse(JSON.stringify(this._spec.constraints));
    } else {
      this._constraints = function () {
        return {}
      }();
    }


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

  /**
   * deletes all repeated fields on this node
   */
  removeAllChildren() {
    this.__childNodes = [];
    this.repeats = [];
    this.dispatchNodeEvent(new NodeEvent("repeated-fields-all-removed", this.repeats, false));
  }

  /**
   * infinite recursive element protection
   * we can return false here, because a repeater node is not created automatically
   */
  _hasAncestorOfType(type) {
    return false;
  }

  deleteNode() {

    let index = this.__parentNode.__childNodes.indexOf(this);
    this.__parentNode.__childNodes.splice(index, 1);
    delete (this.__parentNode[this._name]);

    //notify
    this.dispatchNodeEvent(new NodeEvent("this-node-field-deleted", this._name, false));
    this.dispatchNodeEvent(new NodeEvent("node-field-deleted", this._name, true));

    // because this is deleted, notifiy from parent
    this.__parentNode.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", this.__parentNode, true));
    this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this.__parentNode, false));


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
    // remove additional nodes in repeats console.log(val.length,this.repeats.length)
    if(this.repeats.length > val.length){
      let l = val.length -1;
      for(let i =  this.repeats.length -1; i > l; i--){
        this.deleteChild(i);
      }
    }

    this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", this, true));
    this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this, false));
    //TODO check the tree
    this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this, false));
  }


  __updateMetaAndConstraints(metaAndConstraints) {
    for (let fieldname in metaAndConstraints.fields) {
      let mc = metaAndConstraints.fields[fieldname];
      let f = fieldname.split(".");

      let target = f[0];
      let targetfield = f[1];

      if (f.length === 2) {
        // typo protection
        if (this.repeats[parseInt(target)][targetfield]) {
          // we are on the parent of a endpoint. Update the metas in this
          let field = this.repeats[parseInt(target)][targetfield];

          for (let m in mc.meta) {
            // update the metas
            field._meta[m] = mc.meta[m];
          }
          for (let c in mc.constraints) {
            // update the constraints
            field._constraints[c] = mc.constraints[c];
          }
          /**
           * @event this-metas-changed INTERNAL Event
           *
           * Fired when field metas, constraints or options changed
           * detail payload:
           */
          field.dispatchNodeEvent(new NodeEvent('this-metas-changed', field, false));

          // exit here, it does not go deeper
          return;
        }

      }


      let subMetaAndConstraints = {fields: {}};
      subMetaAndConstraints.fields[f.slice(2).join(".")] = mc;
      // typo protection
      if (this.repeats[parseInt(target)][targetfield]) {
        this.repeats[parseInt(target)][targetfield].__updateMetaAndConstraints(subMetaAndConstraints);
      }
    }


  }

  get value() {
    return this.repeats.map(f => {
      return f.value;
    });
  }

  /**
   * Deletes a repeated item by index
   * @param index
   */
  deleteChild(index) {
    this.repeats.splice(index, 1);
    this.__childNodes.splice(index, 1);


    this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", this.repeats, true));
    this.dispatchNodeEvent(new NodeEvent("this-repeated-field-removed", this.repeats, false));

    this.dispatchNodeEvent(new NodeEvent("repeated-fields-removed", this.repeats, true));
    this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this, false));
    this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this, false));
  }

  _addSilent() {
    let fieldNode = new FieldNode(this, this._spec, this._name);
    let index = this.repeats.push(fieldNode) - 1;

    fieldNode.__index = index;

    // add function to remove field from list
    fieldNode._deleteFromList = () => {
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
    if (data) {
      let child = this.repeats[index];
      child.value = data;
    }
    this.dispatchNodeEvent(new NodeEvent("repeated-fields-added", this.repeats[index], true));
    this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-added", this.repeats[index], false));
    this.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", this, true));
    this.__parentNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this, false));
    this.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", this, false));

    // return field for chainabilty
    return this.repeats[index];
  };


}
