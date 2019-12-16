# furo ui builder
## Prequisits
If you have Go installed

`simple-generator` has to be installed. Quick installation: `go get github.com/veith/simple-generator` .

if not: https://golang.org/doc/install

## Manual Installation
- mkdir my-spec-project
- cd my-spec-project
- npm init
- Run `npm install --save-dev @furo/specs` to install the tools.
- Add a `furo.spec.conf.json` to the root folder of your spec project. 
  An example of a config file can be found in the `~/node_modules/@furo/spec/` folder. 

> **TIPP** copy the example file, remove the packages, add your packages.

## Usage of ui builder (furo.ui.spec.conf.json)

> **TIPP** Add the scripts to your package.json so you can run `npm run init_ui_spec` , `npm run build_ui_components`,... 
>
 ```json
{ 
  "scripts": {
    "uib:init": "./node_modules/@furo/ui-builder/_scripts/init-ui-specs.js",
    "uib:generate": "./node_modules/@furo/ui-builder/_scripts/generate-components.js",
    "uib:watch": "npm-watch uib:generate"
  },
  "watch": {
    "uib:generate": {
     "patterns": [
       "ui_specs"
     ],
     "extensions": "u33e",
     "runOnChangeOnly": false
    }
   }
}
```
## Config

- `path_to_simplegenerator` Set the path to your simple-generator binary if you don't have a local environment e.g. ./bin/
- `spec_dir` Path to your spec directory.
- `custom_template_dir` If you want to use your own templates, set the path to your template directory relative from your project root. You have to supply all templates if you use this feature flag.
- `forms_spec_out` Output path for your form specs
- `build_output_dir` Build output path

### Example furo.ui.spec.conf.json
``` json
{
  "spec_dir": "./specs-from-your-spec-module",
  "ui_spec_out": "./ui_specs",
  "_custom_tepmplate_dir": "./_scripts/templates",
  "build_output_dir": "./build/ui"
}
```
