export class panelRegistry {

  static registerType(type, panel) {
    this._registry[type] = panel;
  }

  static getPanelName(type, suffix) {
    if(suffix){
      return this._registry[type][suffix];
    }
    return this._registry[type];
  }

}

panelRegistry._registry = {};
