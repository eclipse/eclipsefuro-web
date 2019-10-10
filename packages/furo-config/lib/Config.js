import {EventTreeNode, NodeEvent} from "@furo/data/lib/EventTreeNode";

class ConfigTree extends EventTreeNode {
  constructor(parentNode, fieldName) {
    super(parentNode);
    this._name = fieldName;
    this.__value = null;

  }

  get _value() {
    if (this.__childNodes.length > 0) {
      this.__value = {};
      // nur reine Daten zurück geben
      for (let index in this.__childNodes) {
        let field = this.__childNodes[index];
        this.__value[field._name] = field._value
      }
    }
    return this.__value;
  }

  set _value(val) {
    this.__value = val;
    this.dispatchNodeEvent(new NodeEvent("config-updated", this, false));
  }
}

let sharedConfig = new ConfigTree(null);

export class Config {
  static append(section, obj) {
    this.deepCreate(sharedConfig, section, obj);
    sharedConfig[section].dispatchNodeEvent(new NodeEvent("config-updated", sharedConfig[section], true));
    return (sharedConfig[section])
  }


  /**
   * create nodes a long they are objects
   * @param parent
   * @param section
   * @param obj
   */
  static deepCreate(parent, section, obj) {
    if (!parent[section]) {
      parent[section] = new ConfigTree(parent, section);
    }
    // append array only configs directly as value
    if(Array.isArray(obj)){
      parent[section]._value = obj;
    }else{
      for (let k in obj) {
        if (obj[k].constructor === Object && obj.hasOwnProperty(k)) {
          this.deepCreate(parent[section], k, obj[k]);
        } else {
          if (!parent[section][k]) {
            parent[section][k] = new ConfigTree(parent[section], k);
          }
          // assign the value
          parent[section][k]._value = obj[k];
        }
      }
    }

  }

  static watch(section, cb) {

    let targetNode = section.split('.').reduce((acc, part) => {
      if (!acc[part]) {
        acc[part] = new ConfigTree(acc, part);
      }
      return acc && acc[part];
    }, sharedConfig);
    targetNode.addEventListener("config-updated", cb)
  }

  //this.identityPath.split('.').reduce((acc, part) => acc && acc[part], e);
}
