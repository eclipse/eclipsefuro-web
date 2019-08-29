export class panelRegistry {

  static registerType(type, panel) {
    this._registry[type] = panel;
  }

  static getPanelName(type, suffix) {
    if (suffix) {
      if (this._registry[type]) {
        return this._registry[type][suffix];
      } else {
        console.warn("type is not registred:", type, suffix);
        return;
      }

    }
    if (this._registry[type]) {
      return this._registry[type];
    } else {
      console.warn("type is not registred:", type);
      return;
    }
  }

}

panelRegistry._registry = {};
