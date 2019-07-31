# Starterpacks and Generators

At the moment we have only one yeoman generator for creating a component project. Starterpacks to create a app
, similar to `polymer init  polymer-3-application`, will follow soon.

## generator-furo-element
This generator will generate a component project with doc viewer, demos and testing. 
The documentation is buildable with polymer build, so you can add a gh-page for your component easily.

[![NPM version][npm-image]][npm-url]

### Installation

First, install [Yeoman](http://yeoman.io) and generator-furo-element using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/) and the [polymer-cli](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli)).

```bash
npm install -g yo
npm install -g generator-furo-element
```

Then generate your new package:

```bash
yo furo-element


     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the super   │
    |--(o)--|    │  generator-furo-element  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? Name of the npm package @company/packagename
? Name of the component, like my-component super-component


```

The generator installs all dependencies and creates your initial component.
```bash
.
├── README.md
├── analysis.json
├── demo
│   ├── demo-furo-element.js
│   └── demos.js
├── furo-catalog.js
├── furo-element.js
├── index.html
├── package-lock.json
├── package.json
├── polymer.json
└── test
    ├── furo-element_test.html
    └── index.html

```

### Run the documentation system
```bash
npm run start

info:   Files in this directory are available under the following URLs
applications: http://127.0.0.1:8000
reusable components: http://127.0.0.1:8000/components/@company/packagename/
    
```
This will create the analysis.json and start the server (polymer-cli).

> click on the applications link to view your documentation and demo in the browser.

### Running the tests
Open `http://127.0.0.1:8000/test/` to run your tests direct in the browser. 

To run the automated test use `npm run test` 

```bash
npm run test

Installing and starting Selenium server for local browsers
Selenium server running on port 50615
chrome 75                Beginning tests via http://localhost:8001/components/mypack/generated-index.html?cli_browser_id=0
chrome failed to maximize
chrome 75                Tests passed
Test run ended with great success

chrome 75 (9/0/0)                     

=============================== Coverage summary ===============================
Statements   : 100% ( 6/6 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 6/6 )
================================================================================

```



[npm-image]: https://badge.fury.io/js/generator-furo-element.svg
[npm-url]: https://npmjs.org/package/generator-furo-element
