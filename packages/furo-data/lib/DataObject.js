import {EventTreeNode, NodeEvent} from "./EventTreeNode";
import {FieldNode} from "./FieldNode";
import {RepeaterNode} from "./RepeaterNode";
import {Helper} from "./Helper";

/**
 * EntityNode is usually the root node of an eventTree
 */
export class DataObject extends EventTreeNode {

  constructor(parentNode, type, specs) {
    super(parentNode);

    this.__specdefinitions = specs;
    this._spec = this.__specdefinitions[type];
    this._type = type;

    this._initFieldsFromSpec(this, this._spec.fields);

    this._pristine = true;
    this._isValid = true;


    /**
     * Schaltet ein Feld auf valid, müssen wir alle Felder auf validity prüfen...
     */
    this.addEventListener("field-became-valid", (e) => {
      if (this.__childNodes.filter(f => !f._isValid).length === 0) {
        this._isValid = true;
        this.dispatchNodeEvent(new NodeEvent("data-object-became-valid", this));
      }

    });

    /**
     * Schaltet ein Feld auf invalid ist die Entity ebenfalls invalid
     */
    this.addEventListener("field-became-invalid", (e) => {
      this._isValid = false;
      this.dispatchNodeEvent(new NodeEvent("data-object-became-invalid", this));
    });

    /**
     * Wird ein Wert geändert gilt das form ebenfalls nicht mehr als jungfräulich
     */
    this.addEventListener("field-value-changed", (e) => {
      this._pristine = false;
    });

    this.addEventListener("repeated-fields-added", (e) => {
      this._pristine = false;
    });
  }

  validateAllFields(){
    // broadcast validation request to all fields
    this.broadcastEvent(new NodeEvent("validation-requested", this));
  }

  /**
   * Injecten eines raw models wie bspw body oder entity einer collection
   * @param rawEntity
   */
  injectRaw(rawEntity) {
    // this broadcast will disable validation during setting the values

    this.broadcastEvent(new NodeEvent("disable-validation", this));

    this._rawEntity = rawEntity;
    this._updateFieldValuesAndMetaFromRawEntity(this, rawEntity);
    this._pristine = true;
    this._isValid = true;

    /**
     * Broadcast Event
     * this will set all fields as pristine and end enable the validation
     */
    this.broadcastEvent(new NodeEvent("new-data-injected", this));

    /**
     * @event (data-injected)
     *
     * ✋ Internal Event from EntityNode which you can use in the targeted components!
     *
     * Fired when `ƒ-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
     *
     * This event **bubbles**.
     *
     * detail payload: **{NodeEvent}**
     */
    this.dispatchNodeEvent(new NodeEvent("data-injected", this, true));
  }

  /**
   * Resete zum letzten injected state zurück
   */
  reset() {
    if (this._rawEntity) {
      this.injectRaw(this._rawEntity);
    }
  }

  _hasAncestorOfType(type){
    return this._type === type;
  }
  /**
   * Inits the EntityNode
   */
  init() {
    this.broadcastEvent(new NodeEvent("disable-validation", this));
    for(let i = this.__childNodes.length-1; i >= 0; i--){
      this.__childNodes[i].reinit();
    }
    this._initFieldsFromSpec(this, this._spec.fields);
    this._pristine = true;
    this._isValid = true;
    this.broadcastEvent(new NodeEvent("enable-validation", this));
  }

  get rawEntity() {
    return this._rawEntity;
  }



  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  get _value() {
    return this.getJson();
  }

  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  get value() {
    return this.getJson();
  }


  /**
   * Returns a json representation of your Data Object
   * @return {*}
   */
  getJson() {
    let data = {};
    // nur reine Daten zurück geben
    for (let index in this.__childNodes) {
      let field = this.__childNodes[index];
      data[field._name] = field._value
    }
    return data;
  }



  _updateFieldValuesAndMetaFromRawEntity(node, data) {

    let furoMetaDetected = false;
    for (let fieldName in data) {
      let fieldNode = node[fieldName];

      if (fieldNode._spec.type === "furo.Meta") {
        furoMetaDetected = data[fieldName];
      }
      if (!fieldNode) {
        console.warn("unspecified field", fieldName)
      } else {
        if (fieldNode._isRepeater) {
          let initialSize = fieldNode.repeats.length;

          //fieldNode.removeAllChildren();

          // update records
          data[fieldName].forEach((repdata, i) => {
            // create if record index do not exist
            if (!fieldNode.repeats[i]) {
              fieldNode._addSilent();
            }


            // Werte aktualisieren
            fieldNode.repeats[i]._value = repdata;
            fieldNode.repeats[i]._pristine = true;
            fieldNode.repeats[i].__index = i;

          });


          // entferne überzählige nodes
          let newSize = data[fieldName].length;
          if (newSize < fieldNode.repeats.length) {
            fieldNode.repeats.splice(newSize);
            fieldNode.__childNodes.splice(newSize);
          }

          fieldNode._pristine = true;
          fieldNode.dispatchNodeEvent(new NodeEvent("repeated-fields-changed", fieldNode, true));
          fieldNode.dispatchNodeEvent(new NodeEvent("this-repeated-field-changed", fieldNode, false));

        } else {
          if (fieldNode) {
            fieldNode._clearInvalidity();

            // Werte aktualisieren
            fieldNode._value = data[fieldName];
            fieldNode._pristine = true;
          }
        }
      }
    }

    /* todo: discuss if resetting is needed on this level
    // check for fields to reset
    node.__childNodes.forEach((n)=>{
      if(!data[n._name]){
        //the field node[n._name] should be reseted
      }
    });
    */

    //  clear fields if it is not in the incomming data
    node.__childNodes.forEach((n) => {
      if(data && !data.hasOwnProperty(n._name)){
        if(n.__childNodes.length > 0){
          if(n.repeats){
            n._value = [];
          }else{
            n._value = {};
          }
        }else{
          n._value = Helper.defaultForType(n._spec.type);
        }
      }
    });



    if (furoMetaDetected) {
      this.__updateMetaAndConstraints(furoMetaDetected);
    }

  }


  __updateMetaAndConstraints(metaAndConstraints) {
    // on this layer you can only pass the constraint to the children
    // get the first part of the targeted field (data.members.0.id will give us data as targeted field) if we have
    // a field which is targeted we delegate the sub request to  this field
    for (let fieldname in metaAndConstraints.fields) {
      let mc = metaAndConstraints.fields[fieldname];
      let f = fieldname.split(".");
      let target = f[0];
      let subMetaAndConstraints = {fields: {}};
      subMetaAndConstraints.fields[f.slice(1).join(".")] = mc;
      this[target].__updateMetaAndConstraints(subMetaAndConstraints);
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

  /**
   * Baut die Felder aufgrund der spec auf
   * @param node
   * @param fieldSpec
   * @private
   */
  _initFieldsFromSpec(node, fieldSpec) {
    for (let fieldName in fieldSpec) {
      if (fieldSpec[fieldName].meta && fieldSpec[fieldName].meta.repeated) {
        node[fieldName] = new RepeaterNode(node, fieldSpec[fieldName], fieldName);

      } else {
        node[fieldName] = new FieldNode(node, fieldSpec[fieldName], fieldName);
      }
    }
  }


  toString() {
    return this._spec.type;
  };
}
