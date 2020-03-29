#!/usr/bin/env node

/**
 * Use this script to make addable specs from type and service specs. The generated files are importable by init.js
 * and can be added with addApiTypeSpec. This script reads all files in ./specs/**
 *
 * ```js
 * // first import the spec (scr/configs/init.js is a good place)
 * import Menuspec from '../../specs/api/menu/menuitem.type.js'
 *
 * // then add / register the type
 * Init.addApiTypeSpec("menu.Menu", Menuspec)
 * ```
 */


const fs = require('fs');
const os = require('os');
const path = require('path');
const execSync = require('child_process').execSync;


function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));

  });
  return filelist;
}

// parse spec directory for specs
let list = walkSync('./specs').filter((fn) => {
  return fn.endsWith('.spec')
});

list.forEach((specfile) => {
  const target = specfile + '.js';

  let jsonstring = JSON.parse(fs.readFileSync(specfile));
  // TODO: remove __proto and other unneeded sections?

  // content
  let content = "const spec = JSON.parse('" + JSON.stringify(jsonstring) + "');\nexport default spec";
  fs.writeFileSync(target,content);

});
