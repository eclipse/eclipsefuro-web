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
    this.model.extends = "FBP(LitElement)";
    this.model.theme;
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
    return JSON.stringify(this.model, null, 2);
  }

  setTheme(theme) {
    this.model.theme = theme;
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
  addProperty(name, type, description = "", defaultValue = undefined, reflect = false, notify = false, attribute) {
    this.model.properties[name] = {
      "type": type,
      description,
      reflect,
      notify,
      attribute,
      defaultValue // TOTO: create constructor in lit to set the default value
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
   * @return {DomNode}
   */
  addDomNode(componentName, parentNode) {
    let target;
    if (parentNode === undefined) {
      target = this.model.template
    } else {
      target = parentNode.children;
    }

    let node = new DomNode(componentName);

    target.push(node);
    return node;
  }


  addStyle(selector) {
    this.model.style.children[selector] = new CssProperty();
    return this.model.style.children[selector];

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

  static checkMatching(field) {
    let component = false;


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
      case "bool":
        component = "furo-data-checkbox-input";
        break;
    }


    if (field.type.startsWith("map")) {
      let type = field.type.match(/map<string,(.*)>/)[1]; // get the type of map<string,xxxx
      // split join is for replace all . with -
      component = type.toLowerCase().split(".").join("-") + "-map";
    }

    if (field.meta && field.meta.repeated && field.type != "furo.Property" && (!field.__ui || field.__ui.autorepeater !== false))  {
      // split join is for replace all . with -
      component = field.type.toLowerCase().split(".").join("-") + "-repeat";
    }
    // use spec ui hint as component
    if (field.__ui && field.__ui.component) {
      component = field.__ui.component;
    }


    return component;
  }

  static getBestMatchingComponent(field) {
    return this.checkMatching(field) || "furo-data-text-input";
  };
}

class CssProperty {
  constructor() {
    this.children = {};
    this.attributes = {};

    return this;
  }

  /**
   * use this for media queries,...
   * @param selector
   * @return {*}
   */
  addSubStyle(selector) {
    this.children[selector] = new CssProperty();
    return this.children[selector];
  }

  addCSSAttribute(key, value) {
    this.attributes[key] = value;
    return this;
  }
}

class DomNode {
  constructor(component) {
    this.component = component;
    this.description = "It is a good practice to set a description";
    this.flags = [];
    this.attributes = {};
    this.methods = {};
    this.events = {};
    this.children = [];
  }

  /**
   * Append a child node
   * @param componentName
   * @return {DomNode}
   */
  appendChild(componentName) {
    let node = new DomNode(componentName);
    this.children.push(node);
    return node;
  }

  /**
   * Adds a flag to a domNode
   * @param flag {String} like "hidden"
   * @return {DomNode}
   */
  addFlag(flag) {
    // todo: ensure that flag is set only once
    this.flags.push(flag);
    return this;
  }


  /**
   * Adds an attribute to a node
   * @param key {String} the attribute name
   * @param value {String} the attribute value
   * @return {DomNode}
   */
  addAttribute(key, value) {
    this.attributes[key] = value;
    return this;
  }


  /**
   * adds a ƒ trigger to a domNode
   *
   * like ƒ-f="wire"
   *
   * @param f {String} the method name to trigger (ƒ-)
   * @param wire {String} the wire
   * @return {DomNode}
   */
  addMethod(f, wire) {
    this.methods[f] = wire;
    return this;
  }

  /**
   * adds a @ trigger to a domNode
   * like @-at="wire"

   * @param at {String} the event to listen on (@)
   * @param wire {String} the wire
   * @return {DomNode}
   */
  addEventListener(at, wire) {
    this.events[at] = wire;
    return this;
  }

}

module.exports = U33eBuilder;
