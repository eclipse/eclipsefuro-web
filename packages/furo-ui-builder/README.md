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
- `forms_spec_out` Output path for your form specs
- `build_output_dir` Build output path

### Example furo.ui.spec.conf.json
``` json
{
  "spec_dir": "./specs",
  "ui_spec_out": "./ui_specs",
  "build_output_dir": "./generated_components",
  "generator_template": "./node_modules/@furo/ui-builder/_scripts/templates/lit.js.tmpl",
  "skip_spec": [
    ".*collection.type.spec",
    ".*entity.type.spec"
  ],
  "writeprotection": [
    "some-form.u33e"
  ],
  "hooks": {
    "service": [
      "node_modules/@furo/ui-builder/_scripts/hook-init-reference-search.js",
      "node_modules/@furo/ui-builder/_scripts/hook-init-reference-dropdown.js",
      "node_modules/@furo/ui-builder/_scripts/hook-init-update-action.js",
      "node_modules/@furo/ui-builder/_scripts/hook-init-update-panel.js"
    ],
    "type": [
      "node_modules/@furo/ui-builder/_scripts/hook-init-form.js",
      "node_modules/@furo/ui-builder/_scripts/hook-init-create-form.js",
      "node_modules/@furo/ui-builder/_scripts/hook-init-create-widget.js",
      "node_modules/@furo/ui-builder/_scripts/hook-init-display.js"
    ]
  },
  "hook": {
    "hook_init_form": {
      "replace": {
        "premium-premiumgui-form": {
          "with": "premium-field",
          "import_path": "../../src/components/form-fields/premium-field.js",
          "field_flags": ["condensed","double"]
        }
      },
      "default_form_size": "four",
      "default_field_flags": ["condensed","double"],
      "skip_fields_on_init" : ["id", "display_name"]
    }
  }
}

```
