const fs = require('fs');
const path = require('path');
class InitHelper {

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

    return {
      "parts": t,
      "package": t[0],
      "is": t[t.length - 1]
    };
  };


  static walkSync(dir, filelist = []){
    fs.readdirSync(dir).forEach(file => {
      filelist = fs.statSync(path.join(dir, file)).isDirectory()
          ? this.walkSync(path.join(dir, file), filelist)
          : filelist.concat(path.join(dir, file));

    });
    return filelist;
  };
}

module.exports = InitHelper;
