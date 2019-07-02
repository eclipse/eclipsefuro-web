export class panelRegistry {

  static registerType(type, panel) {
    this._registry[type] = panel;
  }

  static getPanelName(type) {
    return this._registry[type];
  }

}

panelRegistry._registry = {};
