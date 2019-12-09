class U33eBuilder {

  constructor(componentName) {
    this.model = {};
    this.model.description = "todo: write description";
    this.model.summary = "todo: write summary";
    this.model.import_members = [];
    this.model.imports = [];
    this.model.component_name = componentName;
    this.model.path = "";
    this.model.style = {
      "children": {},
      "attributes": {}
    };
    this.model.template = [];
    this.model.properties = {};
    this.model.exposedWires = {};
    this.model.methods = {};
    this.model.keyboardShortcuts = [];


  }

  /**
   * Create u33e Object from u33e file content
   * @param u33e
   * @return {U33eBuilder}
   */
  buildFromU33e(u33e) {
    this.model = JSON.parse(u33e);
    return this;
  }

  getU33e() {
    return JSON.stringify(this.model,null, 2);
  }

  /**
   * Add import with member
   * " LitElement, html, css " , "lit-element", "comment"
   * @param members {String} like " LitElement, html, css " or "fbp"
   * @param module {String} like "@furo/furo-data/xxx.js"
   * @param comment [{String}] optional comment, can be used for lint rules.
   * @return {U33eBuilder}
   */
  addImportWithMember(members, module, comment) {
    if (comment) {
      this.model.import_members.push([members, module, comment]);
    } else {
      this.model.import_members.push([members, module]);
    }
    return this;
  }

  /**
   * Add a import
   * @param module {String} module or path like "@furo/form/furo-form.js" or "../../your-component.js"
   * @return {U33eBuilder}
   */
  addImport(module) {
    this.model.imports.push(module);
    return this;
  }

  /**
   * Add a property
   * @param name {String}
   * @param type {String}
   * @param description {String}
   * @param reflect {Boolean}
   * @param notify {Boolean}
   * @param attribute {String}
   * @return {U33eBuilder}
   */
  addProperty(name, type, description = "", reflect = false, notify = false, attribute) {
    this.model.properties[name] = {
      description,
      reflect,
      notify,
      attribute
    };
    return this;
  }

  /**
   * Expose a wire
   *
   * @param name {String} method name like "focus"
   * @param wire {String} internal wire like "--focused"
   * @param description {String}
   * @return {U33eBuilder}
   */
  addExposedWire(name, wire, description) {
    this.model.exposedWires[name] = {
      name,
      wire,
      description
    };
    return this;
  }

  /**
   * Add a method
   * @param name {String} the method name
   * @param args {String} comma separated list or args
   * @param description {String}
   * @param code {Base64EcodedString} the code as Base64 encoded string to avoid json errors
   * @return {U33eBuilder}
   */
  addMethod(name, args, description, code) {
    this.model.methods[name] = {
      description,
      args,
      code
    };
    return this;
  }

  /**
   * Add keyboard shortcut
   * @param key {String} name of the key like "a" or "enter"
   * @param wire {String} name of the wire like "--selectionKeyPressed"
   * @param ctrl {Boolean}
   * @param alt {Boolean}
   * @param meta {Boolean}
   * @param global {Boolean} register to window (use with caution)
   * @return {U33eBuilder}
   */
  addKeyboarShortcut(key, wire, ctrl = false, alt = false, meta = false, global = false) {
    this.model.keyboardShortcuts.push({
      key,
      ctrl,
      global,
      alt,
      meta,
      wire
    });
    return this;
  }


  /**
   * Add a dom node to dom node or template
   *
   * Do not forget to add a import for the used componentName
   *
   * @param componentName {String}
   * @param parentNode {Object}
   * @return {{component: *, children: [], methods: {}, flags: [], description: string, attributes: {}, events: {}}}
   */
  addDomNode(componentName, parentNode) {
    let target;
    if(parentNode === undefined){
      target = this.model.template
    } else {
      target = parentNode.children;
    }

    let node = {
      "component": componentName,
      "description": "It is a good practice to set a description",
      "flags": [],
      "attributes": {},
      "methods": {},
      "events": {},
      "children": []
    };

    target.push(node);
    return node;
  }

  /**
   * Adds an attribute to a node
   * @param node {Object}
   * @param key {String} the attribute name
   * @param value {String} the attribute value
   * @return {U33eBuilder}
   */
  addAttributeToNode(node, key, value){
    node.attributes[key] = value;
    return this;
  }

  /**
   * Adds a flag to a domNode
   * @param node {Object}
   * @param flag {String} like "hidden"
   * @return {*}
   */
  addFlagToNode(node, flag){
    // todo: ensure that flag is set only once
    node.flags.push(flag);
    return node;
  }

  /**
   * adds a ƒ trigger to a domNode
   *
   * like ƒ-f="wire"
   *
   * @param node {Object}
   * @param f {String} the method name to trigger (ƒ-)
   * @param wire {String} the wire
   * @return {*}
   */
  addMethodTriggerToNode(node, f, wire){
    node.methods[f] = wire;
    return node;
  }

  /**
   * adds a @ trigger to a domNode
   * like @-at="wire"
   * @param node {Object}
   * @param at {String} the event to listen on (@)
   * @param wire {String} the wire
   * @return {*}
   */
  addEventListenerToNode(node, at, wire){
    node.events[at] = wire;
    return node;
  }


  addStyle(parent) {
    /**
     * if parent not set, add to styles.children (root)
     * ":host": {
            "children": {},
            "attributes": {
              "display": "block"
            }
          }
     */
  }


  static getBestMatchingComponent (field) {
    let component = "furo-data-text-input";

    // check which componet matches best with the simple types
    switch (field.type) {
      case "int":
      case "int32":
      case "int64":
        component = "furo-data-number-input";
        break;
      case "google.type.Date":
        component = "furo-data-date-input";
        break;
      case "google.type.Money":
        component = "furo-data-money-input";
        break;
      case "furo.Property":
        component = "furo-data-property";
        break;
      default:
        component = "furo-data-text-input";
    }

    // use spec ui hint as component
    if (field.__ui && field.__ui.component) {
      component = field.__ui.component;
    }

    return component;
  };
}

module.exports = U33eBuilder;
