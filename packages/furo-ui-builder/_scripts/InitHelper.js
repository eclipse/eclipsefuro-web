const fs = require('fs');
const path = require('path');


class InitHelper {
  static addCTX(ctx) {
    this.allCTX.push(ctx);
    this.componentIndex[path.basename(ctx.path.replace(".u33e", ""))] = ctx.path.replace(".u33e", "");
    this.specIndex[ctx.spec.type] = ctx.spec;
  }

  /**
   *
   * @param pathToSpec
   * @return {string[]}  [ 'package', 'typename', 'type' ]
   */
  static specInfo(pathToSpec) {
// types are defined as package.Typename ==> ~/package/typename.type.spec
    let t = path.basename(pathToSpec).split(".");
    t = t.map((s) => {
      return s.toLowerCase()
    });
    t.pop();

    return new CTX(t);
  };


  static walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
      filelist = fs.statSync(path.join(dir, file)).isDirectory()
          ? this.walkSync(path.join(dir, file), filelist)
          : filelist.concat(path.join(dir, file));

    });
    return filelist;
  };
}

InitHelper.allCTX = [];
InitHelper.specIndex = [];
InitHelper.componentIndex = {};

class CTX {
  constructor(t) {
    this.parts = t;
    this.package;
    this.spec;
    this.kindOf = t[t.length - 1];
    this.path;
  }

  getImportPathForComponent(component) {
    // return relative path for a component
    let target = InitHelper.componentIndex[component] + ".js";
    let from = this.path.replace(".u33e", ".js");
    if (from === target) {
      return false;
    }
    let relative = path.relative(path.dirname(from), path.dirname(target));
    if (relative === "") {
      return "./" + path.basename(target);
    }
    return relative + "/" + path.basename(target);
  }

  /**
   *
   * panelRegistry.registerType("experiment.ExperimentEntity", {
   *    "display" : "experiment-experiment-display-panel" ,"edit" : "experiment-experiment-update-panel"
   * });
   *
   * @param panel {String} like "display"
   * @param component {String} like "experiment-experiment-display-panel"
   * @param type {String} like "experiment.ExperimentEntity"
   */
  addToRegistry(panel, component, type) {
    this.registry = {panel, component, type};
  }
}

module.exports = InitHelper;
