#!/usr/bin/env node

const fs = require('fs');

const { execSync } = require('child_process');

const pkgdir = './';
if (!fs.existsSync(`${pkgdir}/package.json`)) {
  return;
}

const pkgjson = JSON.parse(fs.readFileSync(`${pkgdir}/package.json`));
// eslint-disable-next-line no-console
console.log('analyzing ', `${pkgdir}src/furo-catalog.js`);
const analysisPath = `analysis.json`;
execSync(`polymer analyze ${pkgdir}src/furo-catalog.js > ${analysisPath}`);

// the elements
const analysis = JSON.parse(fs.readFileSync(analysisPath));
let elements = [];
if (analysis.elements) {
  /**
   * Elements with demos
   * @type {{secondary_text: *, children: *, icon: string, link: {method: string, rel: string, href: *, type: string}, description: *, id: *, display_name: *, open: boolean}[]}
   */
  elements = analysis.elements.map(el => {
    let demos = [];
    if (el.demos) {
      demos = el.demos.map((demo, i) => ({
        display_name: demo.description || 'demo',
        icon: 'av:play-circle-outline',
        id: `demo-${el.name}-${i}`,
        link: {
          href: demo.url,
          method: 'GET',
          rel: 'self',
          type: 'demo',
        },
      }));
    }
    return {
      display_name: el.tagname,
      key_words: el.summary,
      payload: JSON.stringify(el),
      icon: 'code',
      id: el.name,
      link: {
        href: analysisPath,
        method: '',
        rel: 'self',
        type: 'component',
      },
      open: true,
      children: demos,
    };
  });
}

/**
 * Classes
 * @type {Array}
 */
let classes = [];
if (analysis.classes) {
  classes = analysis.classes.map(el => ({
    display_name: el.name,
    key_words: el.summary,
    payload: JSON.stringify(el),
    icon: 'av:playlist-play',
    id: el.name,
    link: {
      href: analysisPath,
      method: '',
      rel: 'self',
      type: 'class',
    },
    open: true,
  }));
}

elements = elements.concat(classes);
// the package
const pkglist = [
  {
    display_name: pkgjson.name,
    payload: pkgjson,
    icon: 'content-paste',
    id: pkgjson.name.replace('@furo/', 'furo-'),
    link: {
      href: '',
      method: '',
      rel: 'self',
      type: 'json',
    },
    open: true,
    children: elements,
  },
];

const structure = {
  display_name: 'Component Documentation',
  payload: '## Usage \n\n Click on the navigation tree to open the docs',
  icon: 'dashboard',
  id: 'root-node',
  link: {
    href: '',
    method: '',
    rel: 'self',
    type: 'markdown',
  },
  open: true,
  children: pkglist,
};

fs.writeFileSync('documentation.json', JSON.stringify(structure));

execSync('rm -rf @furo');
