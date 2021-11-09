// eslint-disable-next-line max-classes-per-file
import { EventTreeNode, NodeEvent } from '@furo/framework/src/EventTreeNode.js';

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
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const index in this.__childNodes) {
        const field = this.__childNodes[index];
        this.__value[field._name] = field._value;
      }
    }
    return this.__value;
  }

  set _value(val) {
    this.__value = val;
    this.__parentNode.dispatchNodeEvent(new NodeEvent('config-updated', this.__parentNode, false));
    this.dispatchNodeEvent(new NodeEvent('config-updated', this, false));
  }
}

const sharedConfig = new ConfigTree(null);

/**
 * Config Class for `furo-config`. Not intended for direct usage.
 */
export class Config {
  static append(section, obj) {
    this.deepCreate(sharedConfig, section, obj);
    sharedConfig[section].dispatchNodeEvent(
      new NodeEvent('config-updated', sharedConfig[section], true),
    );
    return sharedConfig[section];
  }

  /**
   * create nodes a long they are objects
   * @param parent
   * @param section
   * @param obj
   */
  static deepCreate(parent, section, obj) {
    if (!parent[section]) {
      // eslint-disable-next-line no-param-reassign
      parent[section] = new ConfigTree(parent, section);
    }
    // append array only configs directly as value
    if (Array.isArray(obj)) {
      // eslint-disable-next-line no-param-reassign
      parent[section]._value = obj;
    } else {
      // eslint-disable-next-line no-restricted-syntax
      for (const k in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj[k].constructor === Object && obj.hasOwnProperty(k)) {
          this.deepCreate(parent[section], k, obj[k]);
        } else {
          if (!parent[section][k]) {
            // eslint-disable-next-line no-param-reassign
            parent[section][k] = new ConfigTree(parent[section], k);
          }
          // assign the value
          // eslint-disable-next-line no-param-reassign
          parent[section][k]._value = obj[k];
        }
      }
    }
  }

  static watch(section, cb) {
    const targetNode = section.split('.').reduce((acc, part) => {
      if (!acc[part]) {
        acc[part] = new ConfigTree(acc, part);
      }
      return acc && acc[part];
    }, sharedConfig);
    targetNode.addEventListener('config-updated', cb);
  }
}
